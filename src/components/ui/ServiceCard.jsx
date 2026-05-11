export default function ServiceCard({ title, children }) {
  return (
    <div className=" border border-border bg-surface p-4 shadow-sm ">
      <div className="mb-4 h-1 w-12 rounded-full bg-accent" />

      <h3 className="text-xl font-semibold tracking-tight text-primary">
        {title}
      </h3>

      <p className="mt-4 text-sm text-foreground/70">{children}</p>
    </div>
  );
}
