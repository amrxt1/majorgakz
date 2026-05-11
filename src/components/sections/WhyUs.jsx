import Container from "../ui/Container";
import Button from "../ui/Button";

const reasons = [
  {
    title: "On-Time Delivery",
    description: "We stick to schedules and keep you informed at every stage.",
  },
  {
    title: "Built to Spec",
    description: "Every frame is installed with precision against your plans.",
  },
  {
    title: "Versatile Experience",
    description: "From single-family homes to multi-unit residential builds.",
  },
  {
    title: "Trusted Partnerships",
    description: "A reliable subcontractor GCs and developers count on.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-primary py-24 text-background">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/img3.jpeg"
            alt="Framing construction project"
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-soft/70">
            Our Commitment
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Why Choose Us
          </h2>

          <div className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex items-start gap-4 border border-white/10 bg-white/5 px-4 py-3"
              >
                <div>
                  <p className="font-semibold text-background">
                    {reason.title}
                  </p>
                  <p className="text-sm text-background/60">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button className="bg-accent-soft text-primary px-2">
              Get a Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
