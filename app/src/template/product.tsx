import Heading from "@/components/custom/heading";
import { itemsProducts } from "@/lib/constants";
import Image from "next/image";

export default function Product() {
  return (
    <section>
      <Heading
        title="Product Information"
        subtitle="Our Scooter has following unique design and technology features:"
      />

      <div className="grid grid-cols-1 place-content-between place-items-center lg:grid-cols-2">
        <Image src={"/ProSec.png"} alt="product" width={550} height={300} />

        <ul className="flex flex-col items-start gap-y-4">
          {itemsProducts.map((item, index) => (
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
    </section>
  );
}
