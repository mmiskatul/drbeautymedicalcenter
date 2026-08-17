import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC, NAV_LINKS } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="display-serif text-xl text-foreground">{CLINIC.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A calm, professional medical and beauty clinic in Jumeirah, Dubai, offering
            personalized consultations and care.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-foreground">Navigation</h2>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={CLINIC.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-sage-deep" aria-hidden="true" />
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-start gap-2 transition-colors hover:text-foreground"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-sage-deep" aria-hidden="true" />
                <span>
                  Villa 35, Jumeira St
                  <br />
                  Dubai, UAE
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Appointments</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Request a time that suits you and our team will contact you to confirm.
          </p>
          <Button asChild className="mt-5 rounded-full">
            <Link to="/book-appointment">Book an Appointment</Link>
          </Button>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {CLINIC.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
