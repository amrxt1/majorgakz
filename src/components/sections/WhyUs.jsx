import Container from "../ui/Container";
import Button from "../ui/Button";

export default function WhyUs() {
  return (
    <section className="bg-primary py-24 text-background">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/img3.jpeg"
            alt="Framing construction project"
            className="h-full w-full object-cover aspect-square"
          />
        </div>

        <div>
          <h2 className="mt-2 text-4xl font-bold text-accent-soft tracking-tight md:text-5xl">
            Why Choose Us
          </h2>

          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent-soft" />
              <p>Reliable project timelines and communication</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent-soft" />
              <p>Precision framing built to specification</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent-soft" />
              <p>Residential and multi-unit project experience</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent-soft" />
              <p>Dependable subcontractor partnerships</p>
            </div>
          </div>

          <div className="mt-10">
            <Button className="bg-accent-soft text-primary">Get a Quote</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
