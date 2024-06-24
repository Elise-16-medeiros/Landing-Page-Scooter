import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-10 flex h-screen w-full flex-col items-center justify-center gap-y-10 lg:flex-row lg:justify-between">
      <div className="ml-[40px] flex flex-col">
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-thin uppercase text-6xl">
            let's ride
          </h1>
          <h1 className="font-semibold uppercase text-6xl">the future.</h1>
        </div>
        <div className="mt-16 h-1 w-44 bg-primary" />
        <p className="mt-10">
          Simple and sleek design with users <br />
          in mind.
        </p>
        <div className="flex items-baseline justify-start gap-4">
          <Button size={"custom"} className="mt-10">
            <MoveRight />
          </Button>
          <p>Buy now</p>
        </div>
      </div>
      <div className="flex items-end justify-end pr-0">
        <Image
          src="/hero.png"
          alt="scooter"
          width={650}
          height={350}
          className="float-end bg-cover bg-center"
        />
      </div>
    </section>
  );
}

