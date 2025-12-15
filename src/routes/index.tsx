import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "../components/ui/accordion";
import { AccordionHeader } from "../components/accordion-header";
import { Link } from "../components/link";
import { useRouter } from "@tanstack/react-router";

const LUMA_URL = "https://luma.com/eihyagp4";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-4xl">Demo Night</CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm">
            <span className="italic">noun</span>
            <span>|</span>
            <span className="italic">{`/ˈdemō nīt/`}</span>
          </CardDescription>
          <CardAction>
            <Link href={LUMA_URL}>
              <Button>Register now</Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>
            A meet up focused around short talks & demos, by professionals, for
            professionals.
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col justify-start gap-8 w-full max-w-2xl px-[calc(1.5rem+var(--spacing-boxShadowX))]">
        <section>
          <img
            src="images/DSCF1306.jpg"
            alt="Photo of a presentation at Demo Night"
            className="rounded-base w-full"
          />
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl">Do you enjoy:</h2>
          <ul className="flex flex-col gap-2 font-medium">
            {[
              "Listening to people talk about cool stuff?",
              "Learning about new ideas, tech, and tools?",
              "Building your own cool stuff?",
            ].map((text) => (
              <li className="flex items-center gap-3" key={text}>
                <Checkbox checked />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <h4 className="text-lg">
            Then Demo Night is for <span className="italic">you.</span>
          </h4>
          <p className="text-sm">
            Share ideas, get feedback, and see what your likeminded community is
            up to.
          </p>
        </section>
        <section>
          <Accordion
            type="multiple"
            defaultValue={["all-open"]}
            className="flex flex-col gap-8"
          >
            <AccordionItem value="all-open">
              <AccordionHeader>When is it?</AccordionHeader>
              <AccordionContent>
                Demo Night 2 is on{" "}
                <span className="font-bold">November 22nd</span> at{" "}
                <span className="font-bold">7:00 PM</span> in the{" "}
                <Link href="https://maps.app.goo.gl/GN3gShd8zY1ohDFp7">
                  Spellbook office
                </Link>
                . Hope we see you there!
              </AccordionContent>
            </AccordionItem>
            <img
              src="images/DSCF1597.jpg"
              alt="Photo of the Spellbook office"
              className="rounded-base w-full"
            />
            <AccordionItem value="all-open">
              <AccordionHeader>What are the vibes like?</AccordionHeader>
              <AccordionContent>
                See more pictures in our{" "}
                <button
                  type="button"
                  onClick={() => router.navigate({ to: "/gallery" })}
                  className="font-bold underline cursor-pointer"
                >
                  gallery
                </button>{" "}
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
                Just <Link href={LUMA_URL}>register here</Link>. No matter if
                you're presenting or only coming to watch, we'll send you an
                email with all the details.
              </AccordionContent>
            </AccordionItem>
            <img
              src="images/DSCF1647.jpg"
              alt="Photo of a presentation at Demo Night"
              className="rounded-base w-full"
            />
            <AccordionItem value="all-open">
              <AccordionHeader>What are the rules?</AccordionHeader>
              <AccordionContent>
                <ul className="list-disc pl-4 space-y-2">
                  <li>
                    You can present about anything you want, as long as it's
                    technical in nature, and you built or created it in some
                    way.
                  </li>
                  <li>
                    Presentations should be about 6-8 minutes long, and no more
                    than ten.
                  </li>
                  <li>
                    Other than that, it can be anything you want – from
                    functional programming, a neat AI tool you've been using, or
                    about an{" "}
                    <code className="italic">[insert niche topic here]</code>{" "}
                    that you're really interested in.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <img
              src="images/DSCF1088.jpg"
              alt="Photo of Ethan Denny"
              className="rounded-base w-full"
            />
            <AccordionItem value="all-open">
              <AccordionHeader>Who's organizing it?</AccordionHeader>
              <AccordionContent>
                Demo Night is brought to you by{" "}
                <Link href="https://ethandenny.dev">Ethan Denny</Link>,{" "}
                <Link href="https://jackharrhy.dev">Jack Harrhy</Link>, and the
                fine folks at{" "}
                <Link href="https://spellbook.com">Spellbook</Link>. Photos by{" "}
                <Link href="https://www.instagram.com/thecrypticcanadian/">
                  Ethan Crann
                </Link>
                .
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
