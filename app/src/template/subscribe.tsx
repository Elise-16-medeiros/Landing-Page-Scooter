import Heading from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <section className="h-80 w-full">
      <Heading
        title="Subscribe To Newsletter"
        subtitle="Subscribe to our newsletter to get amazing offers in future."
      />
      <div className="flex justify-center items-center py-16">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Enter your email" />
          <Button type="submit">Get start</Button>
        </div>
      </div>
    </section>
  );
}

/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */