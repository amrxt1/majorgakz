export default function Container({ children, className }) {
  return (
    <div className="flex w-full justify-center px-4">
      <div className={`w-full max-w-[800px] ${className}`}>{children}</div>
    </div>
  );
}
