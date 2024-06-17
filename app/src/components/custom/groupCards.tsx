import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GroupCards() {
  return (
    <div className="grid grid-cols-2 place-content-center place-items-center gap-3 md:grid-cols-3 lg:grid-cols-6">
      <Cards title="105" subtitle="lbs" body="Net Weight" />
      <Cards title="26" subtitle="mph" body="Top Speed" />
      <Cards title="38" subtitle="miles" body="Max Range" />
      <Cards title="89" subtitle="nm" body="Max Torques" />
      <Cards title="22%" subtitle="slope" body="Hill Climbing" />
      <Cards title="2x" body="Hydralic Disc Brakes" />
    </div>
  );
}

type CardsProps = {
  title: string;
  subtitle?: string;
  body: string;
};

function Cards({ title, subtitle, body }: CardsProps) {
  return (
    <Card className="w-36 flex flex-col justify-center items-center h-auto shadow-lg">
      <CardHeader className="flex flex-row gap-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="font-semibold">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{body}</p>
      </CardContent>
    </Card>
  );
}
