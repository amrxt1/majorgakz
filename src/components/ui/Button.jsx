export default function Button({ className, children, href = "#" }) {
  return (
    <a
      href={href}
      className={`${className} rounded-md px-1 font-semibold py-0.5 border border-white/20 backdrop-blur-sm`}
    >
      {children}
    </a>
  );
}
