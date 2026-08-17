import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (delta: number) => setActive((i) => (i === null ? null : (i + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  const activeItem = active === null ? null : items[active];

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.src} className={index % 5 === 0 ? "sm:col-span-2" : undefined}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <span className="block aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <span className="block px-5 py-4 text-sm font-medium text-foreground">{item.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {activeItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption}
          className="fixed inset-0 z-100 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              width={activeItem.width}
              height={activeItem.height}
              className="max-h-[80vh] w-full rounded-2xl bg-background object-contain"
            />
            <p className="mt-3 text-center text-sm text-background">{activeItem.caption}</p>
            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-2">
              <Button
                variant="secondary"
                size="icon"
                className="min-h-11 min-w-11 rounded-full"
                aria-label="Previous image"
                onClick={() => step(-1)}
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="min-h-11 min-w-11 rounded-full"
                aria-label="Next image"
                onClick={() => step(1)}
              >
                <ChevronRight className="size-5" />
              </Button>
            </div>
            <Button
              variant="secondary"
              size="icon"
              className="absolute -top-3 right-0 min-h-11 min-w-11 rounded-full sm:-right-3"
              aria-label="Close image viewer"
              onClick={close}
              autoFocus
            >
              <X className="size-5" />
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
