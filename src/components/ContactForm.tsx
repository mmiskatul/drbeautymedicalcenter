import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, submitContactInquiry, type ContactInput } from "@/lib/inquiries.functions";
import { CLINIC } from "@/lib/clinic";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", phone: "", email: "", preferredDate: "", message: "", company: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus("idle");
    try {
      await submitContactInquiry({ data: values });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-accent/50 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-8 text-sage-deep" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Thank you for your inquiry</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your inquiry has been received. Our team will review it and contact you. For an immediate
          response, please call{" "}
          <a href={CLINIC.phoneHref} className="font-medium text-foreground underline">
            {CLINIC.phoneDisplay}
          </a>
          .
        </p>
        <Button variant="outline" className="mt-6 rounded-full" onClick={() => setStatus("idle")}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" error={errors.fullName?.message}>
          <Input id="fullName" autoComplete="name" aria-invalid={!!errors.fullName} {...register("fullName")} />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field id="email" label="Email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
        </Field>
        <Field id="preferredDate" label="Preferred Date" optional error={errors.preferredDate?.message}>
          <Input id="preferredDate" type="date" {...register("preferredDate")} />
        </Field>
        <Field id="message" label="Message" optional error={errors.message?.message} className="sm:col-span-2">
          <Textarea id="message" rows={5} aria-invalid={!!errors.message} {...register("message")} />
        </Field>
      </div>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 text-sm text-destructive">
          Something went wrong sending your inquiry. Please try again or call {CLINIC.phoneDisplay}.
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="mt-7 h-12 w-full rounded-full sm:w-auto sm:px-8">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
        {isSubmitting ? "Sending…" : "Send Inquiry"}
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Inquiries are reviewed by the clinic team. Please do not share sensitive medical details
        through this form.
      </p>
    </form>
  );
}

export function Field({
  id,
  label,
  error,
  optional,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  optional?: boolean | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 text-sm font-medium text-foreground">
        {label}
        {optional ? <span className="ml-1 text-xs text-muted-foreground">(optional)</span> : null}
      </Label>
      {children}
      {error ? (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
