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
            Structural framing for new home construction.
          </ServiceCard>

          <ServiceCard title="Custom Home Framing">
            Precision framing for custom builds and complex architectural plans.
          </ServiceCard>

          <ServiceCard title="Multi-Unit Framing">
            Framing for duplexes, townhomes, and multi-family developments.
          </ServiceCard>

          <ServiceCard title="Roof Framing">
            Strong, stable roof systems built for long-term performance.
          </ServiceCard>

          <ServiceCard title="Structural Layout & Assembly">
            Blueprint interpretation and precise frame installation to spec.
          </ServiceCard>

          <ServiceCard title="Contractor Partnerships">
            Dependable framing subcontracting. On schedule and built to code.
          </ServiceCard>
        </div>
      </Container>
    </section>
  );
}
