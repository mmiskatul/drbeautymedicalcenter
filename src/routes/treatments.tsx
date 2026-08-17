import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Sparkles, Stethoscope, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import treatmentRoom from "@/assets/treatment-room.jpg";
import { CLINIC } from "@/lib/clinic";

const TITLE = "Treatments & Services | Dr Beauty Medical Center Dubai";
const DESCRIPTION =
  "Explore the care categories available at Dr Beauty Medical Center in Jumeirah, Dubai. Treatment details are confirmed during a personal consultation.";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

const categories = [
  {
    icon: Sparkles,
    name: "Aesthetic Treatments",
    description:
      "Appearance-focused care discussed and planned together during your consultation at the clinic.",
  },
  {
    icon: Stethoscope,
    name: "Medical Consultations",
    description:
      "Private appointments to review your concerns, ask questions and understand suitable next steps.",
  },
  {
    icon: HeartHandshake,
    name: "Personalized Care",
    description:
      "Aftercare and follow-up arranged around your schedule, with clear guidance from our team.",
  },
];

function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Treatments & Services"
        description="Our clinic offers consultation-led care across the categories below. Specific treatments, suitability and pricing are confirmed by the clinic team — not published here until verified."
      >
        <Button asChild className="h-11 rounded-full px-6">
          <Link to="/book-appointment">Book an Appointment</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 rounded-full bg-background px-6">
          <a href={CLINIC.phoneHref}>Call {CLINIC.phoneDisplay}</a>
        </Button>
      </PageHero>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category, index) => (
              <Reveal key={category.name} delay={index * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <category.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 text-lg font-semibold text-foreground">{category.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <Link
                    to="/book-appointment"
                    className="mt-6 text-sm font-medium text-sage-deep transition-colors hover:text-foreground"
                  >
                    Learn more in a consultation →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-border bg-surface p-6">
              <Info className="mt-0.5 size-5 shrink-0 text-sage-deep" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Individual treatment pages will be published here once the clinic supplies verified
                service details. In the meantime, please contact the clinic for accurate information
                about a specific treatment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={treatmentRoom}
              alt="Bright treatment room with a white treatment bed and neatly arranged equipment"
              width={1200}
              height={912}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="How it works"
              title="Every Plan Starts With a Consultation"
              description="Rather than listing procedures online, we prefer to discuss what is appropriate for you in person. Your appointment begins with an assessment and an open conversation about your goals."
            />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
