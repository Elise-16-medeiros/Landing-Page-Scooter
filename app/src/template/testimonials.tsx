import CardCarousel from "@/components/custom/cardCarousel";
import Heading from "@/components/custom/heading";

export default function Testimonials() {
  return (
    <section className="flex h-[700px] w-full items-center justify-center flex-col bg-sky-500">
      <Heading title="Testimonials" />
      <CardCarousel />
    </section>
  );
}
