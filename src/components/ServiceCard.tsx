import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  linkLabel?: string;
}

export function ServiceCard({ icon: Icon, name, description, linkLabel = "View details" }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Link
        to="/treatments"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage-deep transition-colors hover:text-foreground"
      >
        {linkLabel}
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
