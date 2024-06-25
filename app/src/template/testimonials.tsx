import CardCarousel from "@/components/custom/cardCarousel";
import Heading from "@/components/custom/heading";

export default function Testimonials() {
  return (
    <section className="flex h-[600px] w-full items-center justify-center flex-col">
      <Heading title="Testimonials" />
      <CardCarousel />
    </section>
  );
}
