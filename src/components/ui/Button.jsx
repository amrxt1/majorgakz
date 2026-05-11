export default function Button({ className, children }) {
  return (
    <button
      className={`${className} rounded-md px-1 font-semibold py-0.5 border border-white/20 backdrop-blur-sm`}
    >
      {children}
    </button>
  );
}
