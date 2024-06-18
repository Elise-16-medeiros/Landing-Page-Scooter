import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative h-[265px] w-full bg-[#42454a]">
      <div className="absolute bottom-0 left-0">
        <Image
          src={"/FooterSec.png"}
          alt="image footer"
          width={350}
          height={0}
        />
      </div>
      <div className="flex flex-col items-end justify-end gap-y-5 lg:gap-x-24 px-10 py-10 text-gray-300 lg:flex-row">
        <ul>
          <li className="flex flex-col items-center gap-y-2">
            <h1 className="my-2 font-semibold">About</h1>

            <Link href={"/"}>Company</Link>
            <Link href={"/"}>Teams</Link>
            <Link href={"/"}>Profile</Link>
            <Link href={"/"}>Careers</Link>
          </li>
        </ul>
        <ul>
          <li className="flex flex-col items-center gap-y-2">
            <h1 className="my-2 font-semibold">Resources</h1>

            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>Application</Link>
            <Link href={"/"}>FQA Features</Link>
          </li>
        </ul>

        <ul>
          <li className="flex flex-col items-center gap-y-2">
            <h1 className="my-2 font-semibold">Legals</h1>

            <Link href={"/"}>Copyright Privacy</Link>
            <Link href={"/"}>Policy Disclaimer</Link>
            <Link href={"/"}>Terms</Link>
            <Link href={"/"}>
              <Image src={"/icons.svg"} alt="icons" width={70} height={40} />
            </Link>
          </li>
        </ul>
      </div>
      <p className="absolute inset-x-0 bottom-0 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}
