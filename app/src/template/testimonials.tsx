import CardCarousel from "@/components/custom/cardCarousel";
import Heading from "@/components/custom/heading";

export default function Testimonials() {
  return (
    <section className="flex h-screen w-1/2 items-center justify-center flex-col">
      <Heading title="Testimonials" />
      <CardCarousel />
    </section>
  );
}
