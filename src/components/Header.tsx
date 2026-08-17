import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CLINIC, NAV_LINKS } from "@/lib/clinic";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all duration-300",
        scrolled ? "border-border shadow-soft" : "border-transparent",
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="display-serif text-lg text-foreground sm:text-xl">
            Dr Beauty <span className="text-sage-deep">Medical Center</span>
          </span>
          <span className="mt-1 text-[0.6rem] font-medium tracking-[0.22em] text-muted-foreground uppercase">
            Jumeirah · Dubai
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CLINIC.phoneHref}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {CLINIC.phoneDisplay}
          </a>
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/book-appointment">Book an Appointment</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11"
            aria-label={`Call the clinic on ${CLINIC.phoneDisplay}`}
          >
            <a href={CLINIC.phoneHref}>
              <Phone className="size-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-medium text-muted-foreground last:border-0"
                activeProps={{ className: "text-foreground" }}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-4 mb-4 h-12 rounded-full">
              <Link to="/book-appointment" onClick={() => setOpen(false)}>
                Book an Appointment
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
