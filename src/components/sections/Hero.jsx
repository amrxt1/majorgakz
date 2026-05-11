import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary text-white">
      <img
        src="/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <Container className="relative z-10 flex min-h-screen flex-col justify-center text-left">
        <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
          Major GAKZ Construction Ltd.
        </h1>
        <h1 className="max-w-5xl mt-8 text-2xl tracking-tight md:text-6xl">
          Precision Framing Built to Last.
        </h1>

        <p className=" max-w-2xl  leading-relaxed text-white/80 md:text-xl">
          Reliable residential and commercial wood framing services built with
          precision, efficiency, and dependable execution.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 ">
          <Button className="bg-accent/20 text-lg px-2">Get a Quote</Button>
          <Button className="bg-white/10 text-lg px-2">View Projects</Button>
        </div>
      </Container>
    </section>
  );
}
