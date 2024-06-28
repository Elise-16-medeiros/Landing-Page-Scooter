"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { usePathname } from "next/navigation";


import { Menu, User } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const mainRoutes = [
  { path: "/", name: "Home" },
  { path: "/", name: "Gallery" },
  { path: "/", name: "Product" },
  {
    path: "/dashboard",
    name: "Dashboard",
    requiredPermissions: ["access:all"],
  },
  { path: "/product", name: "Product", requiredPermissions: ["access:all"] },
  { path: "/order", name: "Order", requiredPermissions: ["access:all"] },
  {
    path: "/favorites",
    name: "Favorites",
    requiredPermissions: ["access:restricted"],
  },
  {
    path: "/orders",
    name: "Orders",
    requiredPermissions: ["access:restricted"],
  },
];
export default function MainNavbar() {
  const pathname = usePathname();
  const { user, isAuthenticated, getPermissions } = useKindeBrowserClient();
  const { permissions } = getPermissions();

  return (
    <nav className="flex h-10 w-full items-center justify-between bg-primary px-4 text-primary-foreground">
      <h1 className="3xl font-bold uppercase">Logo</h1>
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
        <ul className="flex flex-row items-center justify-center">
          {mainRoutes.map(({ path, name, requiredPermissions }) => {
            if (
              !requiredPermissions ||
              requiredPermissions.every((p) => permissions?.includes(p))
            ) {
              return (
                <li key={path}>
                  <Link
                    className={`p-4 text-center ${
                      pathname === path ? "text-secondary" : ""
                    } hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground`}
                    href={path}
                  >
                    {name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
        <div className="flex w-full items-center justify-end gap-x-3">
          {user && isAuthenticated && (
            <div className="flex flex-row gap-x-4">
              {user?.given_name}
              <LogoutLink>Log out</LogoutLink>
            </div>
          )}
          {!isAuthenticated && (
            <div className="flex flex-row gap-x-2">
              <LoginLink className="w-20 text-center">Login</LoginLink>
              <RegisterLink className="w-20 text-center">Sign up</RegisterLink>
            </div>
          )}
        </div>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                {!user && !isAuthenticated && <User size={25} />}
                {user && user?.given_name}
              </SheetTitle>
              <SheetDescription>
                {user?.email && (
                  <p className="text-center text-xs">Logged as {user?.email}</p>
                )}
                {!user?.email && (
                  <p className="text-center text-xs">
                    Please enter in your account
                  </p>
                )}
              </SheetDescription>
            </SheetHeader>

            <ul className="flex h-1/2 w-full flex-col items-center justify-center gap-y-4">
              {mainRoutes.map(({ path, name, requiredPermissions }) => {
                if (
                  !requiredPermissions ||
                  requiredPermissions.every((p) => permissions?.includes(p))
                ) {
                  return (
                    <li key={path}>
                      <Link
                        className={`p-4 text-center ${
                          pathname === path ? "text-primary" : ""
                        } hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground`}
                        href={path}
                      >
                        {name}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
            <SheetFooter>
              <SheetClose asChild>
                <div className="flex w-full flex-row items-center justify-center gap-x-4">
                  {user && isAuthenticated && (
                    <Button>
                      <LogoutLink>Log out</LogoutLink>
                    </Button>
                  )}

                  {!user && !isAuthenticated && (
                    <Button>
                      <LoginLink>Login</LoginLink>
                    </Button>
                  )}

                  {!user && !isAuthenticated && (
                    <Button>
                      <RegisterLink>Sign up</RegisterLink>
                    </Button>
                  )}
                </div>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
