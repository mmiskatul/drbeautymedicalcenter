import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/ContactForm";
import {
  appointmentSchema,
  submitAppointmentRequest,
  type AppointmentInput,
} from "@/lib/inquiries.functions";
import { CLINIC, SERVICE_CATEGORIES } from "@/lib/clinic";

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "",
      service: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = async (values: AppointmentInput) => {
    setStatus("idle");
    try {
      await submitAppointmentRequest({ data: values });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-border bg-accent/50 p-8 text-center sm:p-10">
        <CheckCircle2 className="mx-auto size-9 text-sage-deep" aria-hidden="true" />
        <h2 className="display-serif mt-5 text-2xl text-foreground sm:text-3xl">
          Thank you. Your appointment request has been received.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          The clinic team will contact you to confirm the details. You can also reach us directly on{" "}
          <a href={CLINIC.phoneHref} className="font-medium text-foreground underline">
            {CLINIC.phoneDisplay}
          </a>
          .
        </p>
        <Button variant="outline" className="mt-7 rounded-full" onClick={() => setStatus("idle")}>
          Send another request
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
        <Field id="phone" label="Phone Number" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field id="email" label="Email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
        </Field>
        <Field id="service" label="Service / Treatment" optional error={errors.service?.message}>
          <select
            id="service"
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            {...register("service")}
          >
            <option value="">Not sure yet</option>
            {SERVICE_CATEGORIES.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </Field>
        <Field id="preferredDate" label="Preferred Date" optional error={errors.preferredDate?.message}>
          <Input id="preferredDate" type="date" {...register("preferredDate")} />
        </Field>
        <Field id="preferredTime" label="Preferred Time" optional error={errors.preferredTime?.message}>
          <Input id="preferredTime" type="time" {...register("preferredTime")} />
        </Field>
        <Field id="message" label="Message" optional error={errors.message?.message} className="sm:col-span-2">
          <Textarea id="message" rows={5} aria-invalid={!!errors.message} {...register("message")} />
        </Field>
      </div>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="company-appt">Company</label>
        <input id="company-appt" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 text-sm text-destructive">
          Something went wrong sending your request. Please try again or call {CLINIC.phoneDisplay}.
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="mt-7 h-12 w-full rounded-full sm:w-auto sm:px-8">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
        {isSubmitting ? "Sending…" : "Request Appointment"}
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        This is an appointment <strong>request</strong>, not a confirmed booking. The clinic team
        confirms every appointment directly with you.
      </p>
    </form>
  );
}
