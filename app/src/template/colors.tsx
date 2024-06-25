import ColorsGallery from "@/components/custom/colorsGallery";
import Heading from "@/components/custom/heading";

export default function Colors() {
    return (
      <section className="my-16">
            <Heading title="Colors" subtitle="Checkout our products colors." />
           <ColorsGallery />
      </section>
    );
}
