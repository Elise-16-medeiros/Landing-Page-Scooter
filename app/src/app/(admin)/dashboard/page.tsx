import StatusDropdown from "@/components/custom/statusDropdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/lib/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { amount: true },
    _count: true,
  });

  return {
    amount: data._sum.amount || 0,
    numberOfSales: data._count,
  };
}

async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { amount: true },
    }),
  ]);

  return {
    userCount,
    averageValuePerUser:
      userCount === 0 ? 0 : (orderData._sum.amount || 0) / userCount / 100,
  };
}

async function getProductData() {
  const [activeCount, inactiveCount] = await Promise.all([
    db.product.count({ where: { isAvailableForPurchase: true } }),
    db.product.count({ where: { isAvailableForPurchase: false } }),
  ]);

  return { activeCount, inactiveCount };
}

export default async function AdminPage() {
  const orders = await db.order.findMany({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      shippingAddress: true,
    },
  });

  const { isAuthenticated, getPermission } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }

  const requiredPermission = await getPermission("access:all");
  if (!requiredPermission?.isGranted) {
    redirect("/user");
  }

  const [salesData, userData, productData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductData(),
  ]);

  return (
    <main className="flex min-h-screen w-full bg-muted/40">
      <div className="my-5 w-full max-w-7xl flex flex-col">
        <h1 className="text-3xl font-bold uppercase my-10">Overview</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="Sales"
            subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
            body={formatCurrency(salesData.amount)}
          />
          <DashboardCard
            title="Customers"
            subtitle={`${formatCurrency(
              userData.averageValuePerUser,
            )} Average Value`}
            body={formatNumber(userData.userCount)}
          />
          <DashboardCard
            title="Active Products"
            subtitle={`${formatNumber(productData.inactiveCount)} Inactive`}
            body={formatNumber(productData.activeCount)}
          />
        </div>
        <div>
         
          <h1 className="text-4xl font-bold tracking-tight my-10">Incoming orders</h1>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Purchase date
                </TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="bg-accent">
                  <TableCell>
                    <div className="font-medium">
                      {order.shippingAddress?.name}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {order.user.email}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <StatusDropdown id={order.id} orderStatus={order.status} />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {order.createdAt.toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(order.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
