import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AppointmentForm } from "@/components/AppointmentForm";
import { CLINIC } from "@/lib/clinic";

const TITLE = "Book an Appointment | Dr Beauty Medical Center Dubai";
const DESCRIPTION =
  "Request an appointment at Dr Beauty Medical Center in Jumeirah, Dubai. Share your preferred date and time and the clinic team will contact you to confirm.";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/book-appointment" },
    ],
    links: [{ rel: "canonical", href: "/book-appointment" }],
  }),
  component: BookAppointmentPage,
});

function BookAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Request an Appointment"
        description="Complete the form below and the clinic team will contact you to confirm a time. This is a request — appointments are only confirmed once our team has spoken with you."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <Reveal>
            <AppointmentForm />
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-7">
              <Phone className="size-5 text-sage-deep" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-semibold text-foreground">Prefer to call?</h2>
              <a
                href={CLINIC.phoneHref}
                className="mt-2 inline-block text-lg font-medium text-foreground transition-colors hover:text-sage-deep"
              >
                {CLINIC.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7">
              <MapPin className="size-5 text-sage-deep" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-semibold text-foreground">Clinic location</h2>
              <address className="mt-2 text-sm leading-relaxed text-muted-foreground not-italic">
                {CLINIC.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-block text-sm font-medium text-sage-deep underline underline-offset-4"
              >
                Get directions
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7">
              <Clock className="size-5 text-sage-deep" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-semibold text-foreground">What happens next</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A member of the team reviews your request and contacts you using the phone number or
                email you provide, to agree a final date and time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
