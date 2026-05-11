export default function ServiceCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 h-1 w-12 rounded-full bg-accent" />

      <h3 className="text-xl font-semibold tracking-tight text-primary">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-muted">{children}</p>
    </div>
  );
}
