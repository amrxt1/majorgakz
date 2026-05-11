import Container from "../ui/Container";

export default function Projects() {
  return (
    <section className="mt-16 mb-24">
      <Container>
        <h1 id="project" className="text-4xl my-4 font-bold text-center">
          Our Projects
        </h1>
        <div className="grid gap-8">
          <img src="/projects/p1.jpg" alt="" />
          <img src="/projects/p2.jpg" alt="" />
          <img src="/projects/p3.jpg" alt="" />
        </div>
      </Container>
    </section>
  );
}
