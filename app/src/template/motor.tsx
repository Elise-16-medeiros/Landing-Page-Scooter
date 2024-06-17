import Heading from "@/components/custom/heading";
import Image from "next/image";

export default function Motor() {
    return (
      <section>
        <Heading
          title="High Efficiency Motor"
          subtitle="More torque for powerful riding with 22% maximum hill climbing capability."
        />
        <Image
          src={"/MotorSec.png"}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
                }}
                width={1408}
                height={792}  
        />
     
      </section>
    );
}
