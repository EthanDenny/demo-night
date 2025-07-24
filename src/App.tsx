import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "./components/ui/accordion";
import { AccordionHeader } from "./components/accordion-header";
import { Link } from "./components/link";

function App() {
  return (
    // Margin trick lets us start halfway through a grid cell
    <div className="-mt-4 pt-12 px-6 pb-10 min-h-fit h-[calc(100vh+1rem)] bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] [background-size:40px_40px] bg-secondary-background">
      <div className="flex flex-col items-center gap-8">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-4xl">Demo Night</CardTitle>
            <CardDescription className="flex items-center gap-2 text-sm">
              <span className="italic">noun</span>
              <span>|</span>
              <span className="italic">/ˈdemō nīt/</span>
            </CardDescription>
            <CardAction>
              <Link href="https://lu.ma/jbd9nlls">
                <Button>Register now</Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>
              A get-together with short talks & demos, by professionals, for
              professionals.
            </p>
          </CardContent>
        </Card>
        <div className="flex flex-col justify-start gap-8 w-full max-w-2xl px-[calc(1.5rem+var(--spacing-boxShadowX))]">
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
              Share ideas, get feedback, and see what your likeminded community
              is up to.
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
                  The next demo night is on{" "}
                  <span className="font-bold">August 30th, 2025</span> at{" "}
                  <span className="font-bold">7:00 PM</span> at the{" "}
                  <Link href="https://maps.app.goo.gl/GN3gShd8zY1ohDFp7">
                    Spellbook office
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="all-open">
                <AccordionHeader>
                  How can I sign up to present / attend?
                </AccordionHeader>
                <AccordionContent>
                  Just <Link href="https://lu.ma/jbd9nlls">register here</Link>.
                  No matter if you're presenting or only coming to watch, we'll
                  send you an email with all the details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="all-open">
                <AccordionHeader>What are the rules?</AccordionHeader>
                <AccordionContent>
                  <p>
                    You can present about anything you want, as long as it's
                    technical in nature, and you built or created it in some
                    way.
                  </p>
                  <p>
                    Presentations should be about 6-8 minutes long, and no more
                    than ten. Other than that, it can be anything you want -
                    from functional programming, a neat AI tool you've been
                    using, or about a
                    <code className="px-1 italic">
                      [insert niche topic here]
                    </code>{" "}
                    that you've really interested in.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="all-open">
                <AccordionHeader>Who's organizing it?</AccordionHeader>
                <AccordionContent>
                  Demo Night is brought to you by{" "}
                  <Link href="https://ethandenny.dev">Ethan Denny</Link> and the
                  fine folks at <Link href="https://ctsnl.ca">CTS-NL</Link> and{" "}
                  <Link href="https://spellbook.legal">Spellbook</Link>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="all-open">
                <AccordionHeader>I want to know more!</AccordionHeader>
                <AccordionContent>
                  Come chat with us in the{" "}
                  <Link href="http://discord.ctsnl.ca/">
                    CTSNL Discord server
                  </Link>
                  , we're happy to answer questions and share more details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
      <div className="hidden lg:block fixed right-0 bottom-0 text-xs opacity-20">
        <Link href="https://www.youtube.com/watch?v=han3AfjH210">
          No, not this guy
        </Link>
      </div>
    </div>
  );
}

export default App;
