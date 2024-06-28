"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


import { Menu, User } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";

const mainRoutes = [
  { path: "/", name: "Product" },
  { path: "/", name: "Gallery" },
  { path: "/", name: "Contact" },
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
    <nav className="flex items-center justify-between border border-b-zinc-200 px-8 py-3 text-primary-foreground">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={40} height={30} />
        </Link>
      </div>
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
                    className={`p-4 text-center uppercase ${
                      pathname === path ? "text-primary" : "text-primary"
                    } hover:text-gray-400 focus-visible:text-gray-400`}
                    href={path}
                  >
                    {name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-x-3">
        {user && isAuthenticated && (
          <div className="flex flex-row gap-x-4 text-primary items-baseline">
            {user?.given_name}
            <LogoutLink
              className={buttonVariants({
                size: "sm",
                className: "bg-[#484b51]",
              })}
            >
              Log out
            </LogoutLink>
          </div>
        )}
        {!isAuthenticated && (
          <div className="flex flex-row gap-x-5">
            <LoginLink
              className={buttonVariants({
                size: "sm",
                variant: "outline",
                className: "text-primary",
              })}
            >
              Login
            </LoginLink>
            <RegisterLink
              className={buttonVariants({
                size: "sm",
                className: "bg-[#484b51]",
              })}
            >
              Sign up
            </RegisterLink>
          </div>
        )}
      </div>
      <div className="text-primary lg:hidden">
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
                        className={`p-4 text-center uppercase ${
                          pathname === path ? "text-primary" : "text-primary"
                        } hover:text-gray-400 focus-visible:text-gray-400`}
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
                      <LogoutLink
                        className={buttonVariants({
                          size: "sm",
                          className: "bg-[#484b51]",
                        })}
                      >
                        Log out
                      </LogoutLink>
                    </Button>
                  )}

                  {!user && !isAuthenticated && (
                    <Button variant={"outline"} size={"sm"}>
                      <LoginLink>Login</LoginLink>
                    </Button>
                  )}

                  {!user && !isAuthenticated && (
                    <Button size={"sm"} className="bg-[#484b51]">
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
