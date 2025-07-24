export function Link({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} target="_blank" className="font-bold underline">
      {children}
    </a>
  );
}
