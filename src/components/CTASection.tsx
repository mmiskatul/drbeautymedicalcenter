import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/clinic";
import { Reveal } from "@/components/Reveal";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to Begin Your Consultation?",
  description = "Send an appointment request or speak with our team in Jumeirah — we will help you find a suitable time.",
}: CTASectionProps) {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="rounded-3xl border border-border bg-accent/60 px-6 py-16 text-center sm:px-12">
          <h2 className="display-serif mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild className="h-12 rounded-full px-7">
              <Link to="/book-appointment">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full bg-background px-7">
              <a href={CLINIC.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call {CLINIC.phoneDisplay}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
