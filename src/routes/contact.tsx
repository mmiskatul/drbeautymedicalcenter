import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { CLINIC } from "@/lib/clinic";

const TITLE = "Contact | Dr Beauty Medical Center, Jumeirah Dubai";
const DESCRIPTION =
  "Contact Dr Beauty Medical Center in Jumeirah, Dubai. Call +971 4 595 2444 or send an inquiry — Villa 35, Jumeira St, next to Mercato Shopping Mall.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Call the clinic or send an inquiry and our team will respond with the information you need."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <Reveal className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h2 className="text-sm font-semibold text-foreground">Clinic address</h2>
              <address className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground not-italic">
                <MapPin className="mt-0.5 size-5 shrink-0 text-sage-deep" aria-hidden="true" />
                <span>
                  {CLINIC.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </address>
              <Button asChild variant="outline" className="mt-6 h-11 rounded-full px-6">
                <a href={CLINIC.mapsUrl} target="_blank" rel="noreferrer noopener">
                  <Navigation className="size-4" aria-hidden="true" />
                  Open in Google Maps
                </a>
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h2 className="text-sm font-semibold text-foreground">Phone</h2>
              <a
                href={CLINIC.phoneHref}
                className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-sage-deep"
              >
                <Phone className="size-5 text-sage-deep" aria-hidden="true" />
                {CLINIC.phoneDisplay}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Calling is the fastest way to reach the clinic team.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <iframe
                title="Map showing the location of Dr Beauty Medical Center in Jumeirah, Dubai"
                src="https://www.google.com/maps?q=Villa%2035%20Jumeira%20St%20Mercato%20Shopping%20Mall%20Jumeirah%20Dubai&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="display-serif text-2xl text-foreground sm:text-3xl">Send an inquiry</h2>
            <p className="mt-3 mb-6 text-sm leading-relaxed text-muted-foreground">
              Share your details and the clinic team will get back to you.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
