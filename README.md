# Dr Beauty Launch

Production-Ready Website Prompt — Dr Beauty Medical Center

Build a premium, production-ready medical website for Dr Beauty Medical Center, a modern aesthetic/medical clinic located in Dubai, UAE.

1. Clinic Information

Clinic Name: Dr Beauty Medical Center

Address:
Villa 35, Jumeira St, next to Mercato Shopping Mall, Jumeirah, Jumeira First, Dubai, United Arab Emirates

Phone:
+971 4 595 2444

Google Maps:
https://maps.app.goo.gl/RGZH7LKuzWc8KK7v7

Use this information consistently throughout the website.

Do not invent:

Doctor names

Medical credentials

Awards

Patient statistics

Reviews

Treatments

Pricing

Certifications

Claims about medical results

If information is not provided, create a clean placeholder/content structure rather than fabricating facts.

2. Overall Design Direction

Create a luxury medical + beauty aesthetic suitable for a Dubai clinic.

The design should feel:

Clean

Bright

Premium

Elegant

Trustworthy

Modern

Calm

Minimal

Professional

Spacious

IMPORTANT: LIGHTER VISUAL DESIGN

The previous design direction should be corrected to use a much whiter and lighter interface.

Use:

White as the dominant background

Very light warm-gray sections

Soft neutral surfaces

Subtle borders

Extremely soft shadows

Generous whitespace

Elegant typography

Minimal gradients

Soft medical/beauty accent colors

Avoid:

Dark backgrounds

Black-heavy sections

Heavy gradients

Neon colors

Excessive glassmorphism

Huge decorative effects

Overly colorful UI

Dense layouts

The website should feel like a high-end Dubai medical clinic, not a generic beauty salon.

3. Color System

Use a restrained premium palette.

Primary Background

White:

#FFFFFF

Secondary Background

Very light warm gray:

#F8F9F8

Soft Section Background

#F3F5F3

Primary Text

Deep charcoal:

#202522

Secondary Text

#68716C

Accent

Use a sophisticated muted sage/medical green or similarly elegant soft healthcare tone.

Example:

#8EA89B

Accent Light

#EAF1ED

Border

#E6EAE7

Do not make the accent color overpowering.

The website should remain predominantly white.

4. Typography

Use a premium modern typography system.

Recommended:

Inter

Manrope

DM Sans

Use a refined serif font only for selected large headings if it improves the luxury medical aesthetic.

Typography hierarchy must be clear:

Large elegant hero heading

Medium section headings

Compact labels

Comfortable paragraph line-height

Highly readable body text

Avoid excessively thin text.

Ensure WCAG-friendly contrast.

5. Global Header

Create a premium responsive navigation bar.

Desktop

Left:

Dr Beauty Medical Center

Center/right navigation:

Home

About

Treatments

Doctors

Gallery

Contact

Primary CTA:

Book an Appointment

Header behavior

White background

Sticky on scroll

Subtle bottom border/shadow

Smooth transition

Compact after scrolling

Mobile hamburger menu

The header must remain extremely clean.

6. PAGE ARCHITECTURE

IMPORTANT:

Every navigation item must have its own dedicated page.

Do NOT create a single-page website where navigation only scrolls to sections.

Create:

/
 /about
 /treatments
 /doctors
 /gallery
 /contact
 /book-appointment


Each page must have its own layout, content hierarchy, metadata, and SEO-friendly structure.

7. HOMEPAGE

The homepage must contain unique homepage content.

Do not simply copy sections from the About, Treatments, Doctors, or Contact pages.

Hero Section

Create a bright premium hero.

Left side:

Small eyebrow:

DR BEAUTY MEDICAL CENTER · DUBAI

Main headline:

Where Medical Expertise Meets Modern Beauty

Supporting copy should communicate a calm, professional clinic experience without making unsupported medical claims.

Primary CTA:

Book an Appointment

Secondary CTA:

Explore Our Treatments

Right side:

Use a sophisticated high-quality medical/beauty clinic visual.

Prefer:

Bright clinic interior

Elegant consultation environment

Medical professional imagery

Premium beauty/medical atmosphere

Image should be bright and naturally lit.

Avoid overly edited stock-photo aesthetics.

8. Homepage Trust / Introduction

Immediately after the hero, create a clean introduction section.

Example structure:

A More Personal Approach to Your Care

Short professional copy explaining that Dr Beauty Medical Center provides a welcoming environment in Dubai and focuses on professional, personalized care.

Keep this section concise.

9. Homepage Services Preview

Create a visually elegant preview of the clinic's treatment categories.

Use cards with:

Minimal icon/image

Category name

Short description

View details link

IMPORTANT:

Only use treatment/service information that is verified from supplied clinic information or available source data.

If exact treatments are unavailable, use neutral placeholders such as:

Aesthetic Treatments

Medical Consultations

Personalized Care

Do not invent specific procedures.

CTA:

View All Treatments

Link to:

/treatments

10. Homepage Experience Section

Create a premium visual section focused on the patient experience.

Possible messaging:

Designed Around Your Comfort

Use three or four simple benefits:

Personal attention

Professional environment

Comfortable experience

Convenient Dubai location

Avoid unsupported medical superiority claims.

11. Homepage Location Highlight

Create a visually attractive location section.

Show:

Visit Dr Beauty Medical Center

Villa 35, Jumeira St
Next to Mercato Shopping Mall
Jumeirah, Jumeira First
Dubai, United Arab Emirates

Buttons:

Get Directions

and

Call the Clinic

Use the supplied Google Maps link.

12. Homepage Final CTA

Create a large but elegant CTA section.

Headline:

Ready to Begin Your Consultation?

Supporting text:

Invite visitors to contact the clinic or request an appointment.

Buttons:

Book an Appointment

Call +971 4 595 2444

Keep the background light.

Do not use a huge dark CTA block.

13. ABOUT PAGE

Route:

/about

Create a dedicated About page.

Sections:

Page Hero

Title:

About Dr Beauty Medical Center

Short introduction.

Our Approach

Explain the clinic philosophy in professional, non-medical-claiming language.

The Clinic Environment

Highlight:

Comfortable setting

Professional atmosphere

Personalized attention

Dubai location

Why Patients Choose the Clinic

Only use factual, supportable information.

Location

Include the complete address and map CTA.

14. TREATMENTS PAGE

Route:

/treatments

Create a dedicated treatments directory.

Hero:

Treatments & Services

Introductory text.

Create a clean category grid.

Each treatment card should contain:

Image/icon

Treatment name

Short description

Learn More

If treatment details are unavailable, structure the page so verified services can be added later.

Do NOT generate fake treatment information.

If individual treatment pages are implemented, use:

/treatments/[slug]


with reusable components.

15. DOCTORS PAGE

Route:

/doctors

Create a dedicated medical team page.

If doctor information is unavailable:

Do NOT fabricate doctors.

Instead create a professional empty-state/content structure that can later receive:

Doctor photo

Name

Specialty

Qualifications

Experience

Biography

Languages

Appointment CTA

Do not display fake profiles.

16. GALLERY PAGE

Route:

/gallery

Create a premium visual gallery.

Use:

Clinic interior

Reception

Treatment environment

Medical environment

Brand imagery

Only use real clinic imagery when available.

If images are unavailable, create a clean gallery structure with clearly replaceable image assets.

Features:

Responsive masonry/grid

Image lightbox

Smooth transitions

Accessible controls

Lazy loading

Do not use random unrelated hospital images as if they belong to the clinic.

17. CONTACT PAGE

Route:

/contact

Create a dedicated contact page.

Show:

Address

Villa 35, Jumeira St
Next to Mercato Shopping Mall
Jumeirah, Jumeira First
Dubai, UAE

Phone

+971 4 595 2444

Location

Embed or link to the supplied Google Maps location.

Contact Form

Fields:

Full Name

Phone

Email

Preferred Date

Message

CTA:

Send Inquiry

Include proper:

Client-side validation

Server-side validation

Loading state

Success state

Error state

Spam protection

Accessible labels

Do not claim that the form sends messages unless the backend/email functionality is actually implemented.

18. BOOK APPOINTMENT PAGE

Route:

/book-appointment

Create a dedicated appointment request experience.

Use a premium, simple form.

Fields:

Full Name

Phone Number

Email

Preferred Date

Preferred Time

Service/Treatment

Message

CTA:

Request Appointment

Clearly label this as an appointment request if there is no real-time booking integration.

After submission show:

Thank you. Your appointment request has been received. The clinic team will contact you to confirm the details.

Do not claim an appointment is confirmed automatically unless an actual booking system exists.

19. FOOTER

Create a premium minimal footer.

Columns:

Clinic

Dr Beauty Medical Center

Short description.

Navigation

Home

About

Treatments

Doctors

Gallery

Contact

Contact

+971 4 595 2444

Villa 35, Jumeira St
Dubai, UAE

CTA

Book an Appointment

Bottom:

© 2026 Dr Beauty Medical Center. All rights reserved.

Include:

Privacy Policy

Terms & Conditions

20. RESPONSIVE DESIGN

The website must be fully responsive.

Breakpoints:

Mobile

Tablet

Laptop

Desktop

Large desktop

Mobile design should not simply shrink the desktop design.

Create a dedicated mobile layout.

Mobile header:

Logo/name

Hamburger

Appointment CTA where appropriate

Ensure:

No horizontal scrolling

Proper touch targets

Readable typography

Optimized images

Comfortable spacing

Fast loading

21. ANIMATIONS

Use subtle premium animations.

Examples:

Fade-up on section entrance

Gentle image reveal

Button hover transitions

Card hover elevation

Smooth page transitions

Header shrink on scroll

Keep animation durations around:

200–500ms

Respect:

prefers-reduced-motion

Avoid:

Excessive parallax

Bouncing elements

Flashing effects

Aggressive animations

The website should feel calm and premium.

22. COMPONENT ARCHITECTURE

Build reusable components.

Suggested structure:

components/
  Header
  Footer
  Button
  SectionHeading
  Hero
  ServiceCard
  DoctorCard
  GalleryGrid
  ContactForm
  AppointmentForm
  LocationCard
  CTASection
  PageHero


Create reusable layout components for:

Header

Footer

Page hero

CTA

Cards

Forms

Buttons

Do not duplicate large amounts of markup.

23. PRODUCTION QUALITY

The website must be production-ready.

Implement:

Clean component architecture

Type-safe code where applicable

Proper error handling

Form validation

Loading states

Empty states

Accessible interactions

Semantic HTML

Keyboard navigation

Focus states

Responsive images

Lazy loading

SEO metadata

Open Graph metadata

Favicon

Sitemap

Robots.txt

Canonical URLs

404 page

Error page

24. SEO

Optimize every page individually.

Homepage title example:

Dr Beauty Medical Center | Medical & Beauty Clinic in Dubai

Homepage description should naturally mention:

Dr Beauty Medical Center

Dubai

Jumeirah

Mercato Shopping Mall

Medical/beauty clinic

Create unique metadata for:

/
 /about
 /treatments
 /doctors
 /gallery
 /contact
 /book-appointment


Do not keyword-stuff.

Add appropriate structured data where factual information is available.

25. PERFORMANCE

Target excellent Lighthouse performance.

Implement:

WebP/AVIF images

Responsive image sizes

Lazy loading

Code splitting

Minimal JavaScript

Optimized fonts

No unnecessary dependencies

No huge background videos

No oversized images

Target:

Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+


26. ACCESSIBILITY

Follow WCAG principles.

Ensure:

Proper heading hierarchy

Alt text

Accessible forms

Keyboard navigation

Visible focus states

Sufficient color contrast

ARIA only where necessary

Accessible mobile navigation

Reduced motion support

Do not rely on color alone to communicate information.

27. IMAGE DIRECTION

Visual style should be:

Bright + Clean + Premium + Natural

Use imagery with:

White/light interiors

Natural daylight

Neutral clothing

Professional medical atmosphere

Elegant Dubai aesthetic

Clean architecture

Subtle beauty/medical visuals

Avoid:

Dark clinic photography

Oversaturated colors

Fake-looking AI medical images

Unrelated hospital imagery

Excessive beauty-retouching

Generic stock images presented as actual clinic photos

Keep all image assets easy to replace.

28. UX PRINCIPLES

The primary user journey should be:

Landing
   ↓
Understand Clinic
   ↓
Explore Treatments
   ↓
Build Trust
   ↓
Find Location
   ↓
Book Appointment


The Book an Appointment CTA should remain easy to find throughout the website.

Phone number should be clickable on mobile:

tel:+97145952444

Google Maps should open the supplied location.

29. IMPORTANT CONTENT RULES

Do not fabricate medical information.

Do not invent:

Doctors

Credentials

Treatments

Prices

Reviews

Patient numbers

Results

Before/after claims

Awards

Certifications

Opening hours

Insurance information

When data is unavailable, use a polished structure designed for verified information to be inserted later.

The final website must look complete without misleading visitors.

30. FINAL VISUAL DIRECTION

The final result should resemble a high-end Dubai medical clinic website with:

90%+ white/light surfaces

combined with:

Soft sage/medical accent

Charcoal typography

Elegant photography

Large whitespace

Rounded but sophisticated cards

Thin borders

Subtle shadows

Premium typography

Minimal UI

Strong appointment CTA

The design should feel:

Bright. Medical. Elegant. Trustworthy. Premium. Dubai.

NOT:

Dark. Heavy. Over-designed. Colorful. Generic.

FINAL IMPLEMENTATION REQUIREMENT

Build the complete website as a real multi-page production website.

Navigation must work.

Every page must have its own route.

Buttons must lead to real destinations.

Phone number must be clickable.

Google Maps must link to the supplied location.

Forms must have proper validation and realistic submission states.

Use reusable components.

Use responsive layouts.

Use light/white backgrounds throughout.

Do not merely create a visual mockup.

The result should be polished enough to deploy to production immediately after connecting any required backend/form/appointment integrations.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://drbeautymedicalcenter.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/03771c80-13ac-4858-92c9-d72c9b0ccc6e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
