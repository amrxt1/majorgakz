export default function Button({ className, children }) {
  return (
    <button
      className={`${className} rounded-md px-1 font-semibold text-sm py-0.5`}
    >
      {children}
    </button>
  );
}
