import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { CLINIC } from "@/lib/clinic";

const TITLE = "Our Medical Team | Dr Beauty Medical Center Dubai";
const DESCRIPTION =
  "Meet the medical team at Dr Beauty Medical Center in Jumeirah, Dubai. Practitioner profiles are published once verified by the clinic.";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

const profileFields = [
  "Photograph",
  "Name",
  "Specialty",
  "Qualifications",
  "Years of experience",
  "Biography",
  "Languages spoken",
];

function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The Medical Team"
        description="Practitioner profiles for Dr Beauty Medical Center are published only once names, specialties and qualifications have been verified by the clinic. Nothing on this page is invented."
      >
        <Button asChild className="h-11 rounded-full px-6">
          <Link to="/book-appointment">Book an Appointment</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 rounded-full bg-background px-6">
          <a href={CLINIC.phoneHref}>
            <Phone className="size-4" aria-hidden="true" />
            {CLINIC.phoneDisplay}
          </a>
        </Button>
      </PageHero>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-dashed border-border bg-surface p-8 text-center sm:p-12">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <UserRound className="size-6" aria-hidden="true" />
            </span>
            <h2 className="display-serif mt-6 text-2xl text-foreground sm:text-3xl">
              Practitioner profiles coming soon
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              To speak with a member of the medical team, or to ask which practitioner is right for
              your appointment, please contact the clinic directly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild className="h-11 rounded-full px-6">
                <a href={CLINIC.phoneHref}>Call the Clinic</a>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full bg-background px-6">
                <Link to="/contact">Send an Inquiry</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
            <h3 className="text-sm font-semibold text-foreground">
              Each profile will include, once verified:
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {profileFields.map((field) => (
                <li
                  key={field}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
                >
                  {field}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection title="Have a Question About Your Appointment?" />
    </>
  );
}
