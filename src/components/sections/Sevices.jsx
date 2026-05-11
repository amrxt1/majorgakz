import Container from "../ui/Container";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <section className="pt-16 pb-24">
      <Container>
        <h2 className="mt-3 text-4xl text-center font-bold tracking-tight">
          Our Services
        </h2>

        <div className="mt-8 grid gap-6 grid-cols-2 xl:grid-cols-3">
          <ServiceCard title="Residential Wood Framing">
            Complete structural framing for new residential construction
            projects.
          </ServiceCard>

          <ServiceCard title="Custom Home Framing">
            Precision framing tailored to custom-built homes and detailed
            architectural plans.
          </ServiceCard>

          <ServiceCard title="Multi-Unit Framing">
            Efficient framing solutions for duplexes, townhomes, and
            multi-family developments.
          </ServiceCard>

          <ServiceCard title="Roof Framing">
            Accurate roof systems built for strength, stability, and long-term
            performance.
          </ServiceCard>

          <ServiceCard title="Structural Layout & Assembly">
            Careful interpretation of blueprints and precise frame installation
            to specification.
          </ServiceCard>

          <ServiceCard title="Contractor Partnerships">
            Reliable framing subcontracting services for general contractors and
            developers, delivered on schedule and built to code.
          </ServiceCard>
        </div>
      </Container>
    </section>
  );
}
