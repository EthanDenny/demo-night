import { AccordionTrigger } from "./ui/accordion";

export function AccordionHeader({ children }: { children: React.ReactNode }) {
  return (
    <AccordionTrigger className="pointer-events-none [&>svg]:hidden">
      {children}
    </AccordionTrigger>
  );
}
