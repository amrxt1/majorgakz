export default function Container({ children, bg = "", className = "" }) {
  return (
    <div className={`${bg} w-full px-4 md:px-8`}>
      <div className={`mx-auto w-full max-w-7xl ${className}`}>{children}</div>
    </div>
  );
}
