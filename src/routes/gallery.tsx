import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import reception from "@/assets/reception.jpg";
import waitingArea from "@/assets/waiting-area.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import corridor from "@/assets/corridor.jpg";
import details from "@/assets/details.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";

const TITLE = "Clinic Gallery | Dr Beauty Medical Center Dubai";
const DESCRIPTION =
  "A look inside Dr Beauty Medical Center in Jumeirah, Dubai — reception, consultation rooms, treatment areas and the clinic environment.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items: GalleryItem[] = [
  { src: reception, alt: "Minimal white reception desk with a soft green accent wall and flowers", caption: "Reception", width: 1408, height: 1008 },
  { src: waitingArea, alt: "Waiting lounge with cream armchairs, plants and natural daylight", caption: "Waiting lounge", width: 1200, height: 912 },
  { src: heroClinic, alt: "Consultation room with a soft sage wall and treatment chair by the window", caption: "Consultation room", width: 1200, height: 1408 },
  { src: treatmentRoom, alt: "Treatment room with a white bed, fresh linens and modern equipment", caption: "Treatment room", width: 1200, height: 912 },
  { src: corridor, alt: "White arched corridor with terrazzo flooring and soft lighting", caption: "Clinic corridor", width: 1008, height: 1200 },
  { src: details, alt: "Skincare products, folded white towels and flowers on a marble counter", caption: "Care details", width: 1200, height: 912 },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the Clinic"
        description="Interior imagery representing the clinic environment and atmosphere. These placeholder visuals are ready to be replaced with official photography of Dr Beauty Medical Center."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <GalleryGrid items={items} />
          </Reveal>
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            Note: the images above are representative interior visuals, not photographs of the
            clinic's own rooms. They can be swapped for official clinic photography at any time.
          </p>
        </div>
      </section>

      <CTASection title="Prefer to See the Clinic in Person?" />
    </>
  );
}
