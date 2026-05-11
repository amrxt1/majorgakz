import Container from "./Container";
import Button from "./Button";

export default function NavBar() {
  return (
    <div className="bg-primary border-b border-white/10 z-999">
      <Container className="flex items-center py-2 justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="size-10" />

          <h1 className="text-2xl pl-2 text-background font-semibold">
            Major GAKZ
          </h1>
        </div>

        <Button className="bg-accent-soft text-sm">Get a Quote</Button>
      </Container>
    </div>
  );
}
