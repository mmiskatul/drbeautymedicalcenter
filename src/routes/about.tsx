import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { LocationCard } from "@/components/LocationCard";
import { CTASection } from "@/components/CTASection";
import corridor from "@/assets/corridor.jpg";
import details from "@/assets/details.jpg";

const TITLE = "About Us | Dr Beauty Medical Center, Jumeirah Dubai";
const DESCRIPTION =
  "Learn about Dr Beauty Medical Center, a medical and beauty clinic in Jumeirah, Dubai, and the personal approach we take to every consultation.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const reasons = [
  {
    title: "A private, unhurried consultation",
    copy: "Appointments are arranged so there is time to talk through your questions before any decision is made.",
  },
  {
    title: "A clear, honest conversation",
    copy: "We explain what a visit involves and what it does not, without pressure or unrealistic promises.",
  },
  {
    title: "A convenient Jumeirah address",
    copy: "Villa 35 on Jumeira St, next to Mercato Shopping Mall — easy to reach from across Dubai.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the clinic"
        title="About Dr Beauty Medical Center"
        description="Dr Beauty Medical Center is a medical and beauty clinic in Jumeirah, Dubai. We provide a calm, professional setting for consultations and personalized care."
      >
        <Button asChild className="h-11 rounded-full px-6">
          <Link to="/book-appointment">Book an Appointment</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 rounded-full bg-background px-6">
          <Link to="/contact">Contact the Clinic</Link>
        </Button>
      </PageHero>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              title="Considered Care, One Person at a Time"
              description="We believe good care starts with listening. Every visit begins with a conversation about your concerns and expectations, followed by a clear explanation of the options available to you."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our team keeps communication straightforward and private, so you always know what is
              planned, what to expect and how to reach us afterwards.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={corridor}
              alt="Bright white clinic corridor with arched doorways and soft sage accents"
              width={1008}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={details}
              alt="Neatly arranged skincare products, white towels and fresh flowers on a marble counter"
              width={1200}
              height={912}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="The clinic environment"
              title="A Comfortable, Professional Setting"
              description="Our rooms are quiet, bright and prepared with care. The clinic is designed so that appointments feel private and relaxed from the moment you arrive."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why patients choose us"
              title="What You Can Expect"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <LocationCard title="Where to Find Us" />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
