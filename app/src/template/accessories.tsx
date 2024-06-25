import Heading from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import { itemsAccessoriesFirst, itemsAccessoriesSecond } from "@/lib/constants";
import Image from "next/image";

export default function Accessories() {
  return (
    <section className="my-5">
      <Heading
        title="Multiple Accessories"
        subtitle="There are multiple modes for the scooter for your multiple needs."
      />
      <div className="my-16">
        <div className="flex flex-col items-center justify-around gap-y-16 lg:flex-row">
          <ul className="flex flex-col items-start gap-y-4">
            {itemsAccessoriesFirst.map((item, index) => (
              <li
                key={index}
                className="flex flex-row items-center justify-center gap-3"
              >
                <img src={item.imageUrl} alt={item.name} width={25} />
                {item.name}
              </li>
            ))}
          </ul>

          <div className="flex flex-col overflow-hidden lg:flex-row">
            <Image
              src={"/acce1.png"}
              alt="accessorie one"
              width={250}
              height={350}
            />
            <Image
              src={"/acce2.png"}
              alt="accessorie two"
              width={250}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:gap-x-16">
        <div className="flex flex-col items-center justify-start gap-y-6 lg:flex-row lg:gap-x-20">
          <div>
            <Image
              src={"/acce3.png"}
              alt="accessorie three"
              width={300}
              height={0}
            />
          </div>
          <div>
            <Image
              src={"/acce4.png"}
              alt="accessorie four"
              style={{
                width: "50%",
                height: "auto",
              }}
              width={200}
              height={0}
            />
          </div>
        </div>

        <ul className="flex flex-col items-start gap-y-4">
          {itemsAccessoriesSecond.map((item, index) => (
            <li
              key={index}
              className="flex flex-row items-center justify-center gap-3"
            >
              <img src={item.imageUrl} alt={item.name} width={25} />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-10 flex items-center justify-center">
        <Button variant={"outline"}>More Accessories Coming Soon</Button>
      </div>
    </section>
  );
}
