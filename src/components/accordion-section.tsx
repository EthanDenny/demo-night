import { Accordion, AccordionContent, AccordionItem } from "./ui/accordion";
import { AccordionHeader } from "./accordion-header";
import { Link } from "./link";

const LUMA_URL = "https://luma.com/eihyagp4";

interface AccordionSectionProps {
  baseUrl: string;
}

export function AccordionSection({ baseUrl }: AccordionSectionProps) {
  return (
    <Accordion
      type="multiple"
      defaultValue={["all-open"]}
      className="flex flex-col gap-8"
    >
      <AccordionItem value="all-open">
        <AccordionHeader>When is it?</AccordionHeader>
        <AccordionContent>
          Demo Night 2 is on <span className="font-bold">November 22nd</span> at{" "}
          <span className="font-bold">7:00 PM</span> in the{" "}
          <Link href="https://maps.app.goo.gl/GN3gShd8zY1ohDFp7">
            Spellbook office
          </Link>
          . Hope we see you there!
        </AccordionContent>
      </AccordionItem>
      <img
        src={`${baseUrl}images/DSCF1597.jpg`}
        alt="Photo of the Spellbook office"
        className="rounded-base w-full"
      />
      <AccordionItem value="all-open">
        <AccordionHeader>What are the vibes like?</AccordionHeader>
        <AccordionContent>
          See more pictures in our{" "}
          <a
            href="/demo-night/gallery"
            className="font-bold underline cursor-pointer"
          >
            gallery
          </a>{" "}
          of past events, as well as on{" "}
          <Link href="https://jack.camera/demo-night-2-nov2025/">
            jack.camera/demo-night-2-nov2025
          </Link>
          .
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="all-open">
        <AccordionHeader>
          How can I sign up to present / attend?
        </AccordionHeader>
        <AccordionContent>
          Just <Link href={LUMA_URL}>register here</Link>. No matter if you're
          presenting or only coming to watch, we'll send you an email with all
          the details.
        </AccordionContent>
      </AccordionItem>
      <img
        src={`${baseUrl}images/DSCF1647.jpg`}
        alt="Photo of a presentation at Demo Night"
        className="rounded-base w-full"
      />
      <AccordionItem value="all-open">
        <AccordionHeader>What are the rules?</AccordionHeader>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              You can present about anything you want, as long as it's technical
              in nature, and you built or created it in some way.
            </li>
            <li>
              Presentations should be about 6-8 minutes long, and no more than
              ten.
            </li>
            <li>
              Other than that, it can be anything you want – from functional
              programming, a neat AI tool you've been using, or about an{" "}
              <code className="italic">[insert niche topic here]</code> that
              you're really interested in.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <img
        src={`${baseUrl}images/DSCF1088.jpg`}
        alt="Photo of Ethan Denny"
        className="rounded-base w-full"
      />
      <AccordionItem value="all-open">
        <AccordionHeader>Who's organizing it?</AccordionHeader>
        <AccordionContent>
          Demo Night is brought to you by{" "}
          <Link href="https://ethandenny.dev">Ethan Denny</Link>,{" "}
          <Link href="https://jackharrhy.dev">Jack Harrhy</Link>, and the fine
          folks at <Link href="https://spellbook.com">Spellbook</Link>. Photos
          by{" "}
          <Link href="https://www.instagram.com/thecrypticcanadian/">
            Ethan Crann
          </Link>
          .
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
