import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Sparkles, Stethoscope, Clock, MapPin, ShieldCheck, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { LocationCard } from "@/components/LocationCard";
import { CTASection } from "@/components/CTASection";
import { CLINIC } from "@/lib/clinic";
import heroClinic from "@/assets/hero-clinic.jpg";
import waitingArea from "@/assets/waiting-area.jpg";

const TITLE = "Dr Beauty Medical Center | Medical & Beauty Clinic in Dubai";
const DESCRIPTION =
  "Dr Beauty Medical Center is a medical and beauty clinic in Jumeirah, Dubai, next to Mercato Shopping Mall. Request a consultation or call +971 4 595 2444.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { ...{ icon: Sparkles }, name: "Aesthetic Treatments", description: "Appearance-focused care planned during a personal consultation at our Jumeirah clinic." },
  { icon: Stethoscope, name: "Medical Consultations", description: "Private consultations to discuss your concerns, questions and suitable next steps." },
  { icon: HeartHandshake, name: "Personalized Care", description: "Follow-up and aftercare arranged around your schedule and individual preferences." },
];

const experience = [
  { icon: UserRound, title: "Personal attention", copy: "Unhurried consultations where your questions come first." },
  { icon: ShieldCheck, title: "Professional environment", copy: "A calm, private clinic setting maintained to a high standard." },
  { icon: Clock, title: "Comfortable experience", copy: "Clear communication before, during and after your visit." },
  { icon: MapPin, title: "Convenient location", copy: "In Jumeirah, next to Mercato Shopping Mall, Dubai." },
];

function Index() {
  return (
    <>
      <section className="bg-background">
        <div className="container-page grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="animate-fade-up">
            <p className="eyebrow">Dr Beauty Medical Center · Dubai</p>
            <h1 className="display-serif mt-5 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Where Medical Expertise Meets Modern Beauty
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A calm, private clinic in Jumeirah where every visit begins with a conversation. Our
              team takes the time to understand what matters to you before anything is planned.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full px-7">
                <Link to="/book-appointment">Book an Appointment</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-7">
                <Link to="/treatments">Explore Our Treatments</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Speak to the clinic directly:{" "}
              <a href={CLINIC.phoneHref} className="font-medium text-foreground underline underline-offset-4">
                {CLINIC.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="relative">
            <img
              src={heroClinic}
              alt="Bright consultation room with soft sage green wall and natural daylight"
              width={1200}
              height={1408}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our philosophy"
              title="A More Personal Approach to Your Care"
              description="Dr Beauty Medical Center offers a welcoming environment in Jumeirah, Dubai. We focus on professional, personalized care — listening carefully, explaining clearly and moving at a pace you are comfortable with."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we offer"
              title="Care Categories at Our Clinic"
              description="Detailed treatment information is confirmed with you during consultation."
            />
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/treatments">View All Treatments</Link>
            </Button>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.name} delay={index * 80}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={waitingArea}
              alt="Light-filled clinic waiting lounge with cream armchairs and plants"
              width={1200}
              height={912}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="The experience"
              title="Designed Around Your Comfort"
              description="From the first phone call to your follow-up, we keep things simple, private and considerate."
            />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {experience.map((item) => (
                <li key={item.title}>
                  <item.icon className="size-5 text-sage-deep" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <LocationCard />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
