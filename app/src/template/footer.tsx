import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative h-[265px] w-full bg-[#42454a]">
      <div className="collapse absolute bottom-0 left-0 lg:visible">
        <Image
          src={"/FooterSec.png"}
          alt="image footer"
          width={350}
          height={0}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-x-4 px-10 py-10 text-gray-300 lg:flex-row lg:items-end lg:justify-end lg:gap-x-10">
        <ul className="flex items-center justify-center">
          <li className="flex flex-col gap-y-2 text-center">
            <h1 className="font-semibold">About</h1>
            <p className="cursor-pointer hover:text-gray-500">Company</p>
            <p className="cursor-pointer hover:text-gray-500">Teams</p>
            <p className="cursor-pointer hover:text-gray-500">Profile</p>
            <p className="cursor-pointer hover:text-gray-500">Careers</p>
          </li>
        </ul>
        <ul className="flex items-center justify-center">
          <li className="flex flex-col gap-y-2 text-center">
            <h1 className="font-semibold">Resources</h1>

            <p className="cursor-pointer hover:text-gray-500">Contact</p>
            <p className="cursor-pointer hover:text-gray-500">Application</p>
            <p className="cursor-pointer hover:text-gray-500">FQA Features</p>
          </li>
        </ul>

        <ul className="flex items-center justify-center">
          <li className="flex flex-col gap-y-2 text-center">
            <h1 className="font-semibold">Legals</h1>

            <p className="cursor-pointer hover:text-gray-500">
              Copyright Privacy
            </p>
            <p className="cursor-pointer hover:text-gray-500">
              Policy Disclaimer
            </p>
            <p className="cursor-pointer hover:text-gray-500">Terms</p>
          </li>
        </ul>
      </div>
      <p className="absolute inset-x-0 bottom-0 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}

