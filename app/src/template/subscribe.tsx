import Heading from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <section className="h-80 w-full mb-6">
      <Heading
        title="Subscribe To Newsletter"
        subtitle="Subscribe to our newsletter to get amazing offers in future."
      />
      <div className="flex justify-center items-center py-11">
        <div className="flex flex-col gap-y-4 w-full max-w-sm items-center space-x-4">
          <Input type="email" placeholder="Enter your email" className="w-80" />
          <Button type="submit">Get start</Button>
        </div>
      </div>
    </section>
  );
}

