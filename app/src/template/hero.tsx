import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-10 h-96 w-full bg-red-500">
      <div className="ml-[40px] flex flex-col">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-5xl font-thin uppercase">let's ride</h1>
          <h1 className="text-5xl font-semibold uppercase">the future.</h1>
        </div>
        <div className="mt-16 h-1 w-44 bg-primary" />
        <p className="mt-10">Simple and sleek design with users <br/>in mind.</p>
        <div className="flex justify-start items-baseline gap-4">
          <Button size={"custom"} className="mt-10">
            <MoveRight />
          </Button>
          <p>Buy now</p>
        </div>
      </div>
    </section>
  );
}

/* <div className=" absolute inset-y-0 right-0 w-full">
         <Image src="/bg.svg" alt="bg" width={220} height={250}/>
        </div> */
