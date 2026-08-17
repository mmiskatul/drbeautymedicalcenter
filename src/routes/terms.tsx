import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CLINIC } from "@/lib/clinic";

const TITLE = "Terms & Conditions | Dr Beauty Medical Center";
const DESCRIPTION =
  "Terms of use for the Dr Beauty Medical Center website, including appointment requests and website content.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" description="Last updated: 2026" />
      <section className="bg-background py-16">
        <div className="container-page max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-base font-semibold text-foreground">Website content</h2>
            <p className="mt-3">
              Information on this website is provided for general information only and is not
              medical advice. Nothing here should be relied upon in place of a consultation with a
              qualified practitioner.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">Appointment requests</h2>
            <p className="mt-3">
              Submitting the appointment form sends a request. An appointment exists only once the
              clinic team has contacted you and confirmed a date and time.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              {CLINIC.name}, {CLINIC.address.single}. Telephone{" "}
              <a href={CLINIC.phoneHref} className="font-medium text-foreground underline">
                {CLINIC.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
