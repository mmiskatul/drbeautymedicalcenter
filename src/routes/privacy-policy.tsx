import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CLINIC } from "@/lib/clinic";

const TITLE = "Privacy Policy | Dr Beauty Medical Center";
const DESCRIPTION =
  "How Dr Beauty Medical Center in Dubai handles the information you submit through this website.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Last updated: 2026" />
      <section className="bg-background py-16">
        <div className="container-page max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-base font-semibold text-foreground">Information we collect</h2>
            <p className="mt-3">
              When you submit the contact or appointment request form we collect the name, phone
              number, email address and any details you choose to include in your message.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">How it is used</h2>
            <p className="mt-3">
              Your details are used only to respond to your inquiry and to arrange or confirm an
              appointment at {CLINIC.name}. They are not sold or shared for marketing purposes.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">Sensitive information</h2>
            <p className="mt-3">
              Please do not submit detailed medical information through this website. Clinical
              matters are discussed directly with the clinic team.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              For any question about this policy, call the clinic on{" "}
              <a href={CLINIC.phoneHref} className="font-medium text-foreground underline">
                {CLINIC.phoneDisplay}
              </a>{" "}
              or visit us at {CLINIC.address.single}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
