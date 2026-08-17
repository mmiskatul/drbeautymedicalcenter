import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/clinic";

export function LocationCard({ title = "Visit Dr Beauty Medical Center" }: { title?: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
      <p className="eyebrow mb-3">Location</p>
      <h2 className="display-serif text-3xl text-foreground sm:text-4xl">{title}</h2>
      <address className="mt-6 flex items-start gap-3 text-base leading-relaxed text-muted-foreground not-italic">
        <MapPin className="mt-1 size-5 shrink-0 text-sage-deep" aria-hidden="true" />
        <span>
          {CLINIC.address.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      </address>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-11 rounded-full px-6">
          <a href={CLINIC.mapsUrl} target="_blank" rel="noreferrer noopener">
            <Navigation className="size-4" aria-hidden="true" />
            Get Directions
          </a>
        </Button>
        <Button asChild variant="outline" className="h-11 rounded-full px-6">
          <a href={CLINIC.phoneHref}>
            <Phone className="size-4" aria-hidden="true" />
            Call the Clinic
          </a>
        </Button>
      </div>
    </div>
  );
}
