import Heading from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="my-16">
      <Heading
        title="Gallery"
        subtitle="View gallery of our products and make yourself satisfied with our creation."
      />
      <div className="grid grid-cols-1 place-content-between place-items-center gap-y-6 lg:grid-cols-2 my-16">
        <div className="flex flex-col gap-y-10">
          <Image
            src={"/gallery1.png"}
            alt="gallery One"
            width={350}
            height={400}
          />

          <div className="flex flex-col justify-center gap-y-3">
            <Button variant={"outline"}>Battery Images</Button>
            <Button variant={"outline"}>Spare Parts Images</Button>
            <Button variant={"outline"}>Charging Cable Images</Button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            src={"/gallery2.png"}
            alt="gallery Two"
            width={350}
            height={400}
          />
          <Image
            src={"/gallery3.png"}
            alt="gallery Three"
            width={350}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
