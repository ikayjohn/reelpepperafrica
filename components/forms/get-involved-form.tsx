"use client";

import { FormEvent, useState } from "react";

import { Reveal } from "@/components/ui/reveal";

type FormState = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  interest: "",
  message: ""
};

export function GetInvolvedForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <Reveal className="section-surface p-8 md:p-10">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">Participation Form</p>
      <h2 className="mt-5 font-display text-4xl leading-[0.96] tracking-[-0.02em] md:text-5xl">
        Tell us how you want to contribute.
      </h2>
      <p className="mt-5 max-w-xl text-base leading-8 text-muted">
        Designed as a frontend placeholder for now. The component can later connect to a Sanity
        form workflow, API route, or external automation tool.
      </p>

      <form className="mt-10 grid gap-6" onSubmit={handleSubmit}>
        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-muted">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="rounded-2xl border border-border bg-black/20 px-5 py-4 text-foreground outline-none transition placeholder:text-muted/70 focus:border-gold"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-muted">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="rounded-2xl border border-border bg-black/20 px-5 py-4 text-foreground outline-none transition placeholder:text-muted/70 focus:border-gold"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-muted">Interest</span>
          <select
            required
            value={form.interest}
            onChange={(event) =>
              setForm((current) => ({ ...current, interest: event.target.value }))
            }
            className="rounded-2xl border border-border bg-black/20 px-5 py-4 text-foreground outline-none transition focus:border-gold"
          >
            <option value="" disabled>
              Select an area
            </option>
            <option value="storytelling">Storytelling</option>
            <option value="partnership">Partnership</option>
            <option value="marketplace">Marketplace</option>
            <option value="community">Community</option>
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-muted">Message</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            className="rounded-2xl border border-border bg-black/20 px-5 py-4 text-foreground outline-none transition placeholder:text-muted/70 focus:border-gold"
            placeholder="Tell us a bit about your idea or collaboration."
          />
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:opacity-90"
        >
          Submit Interest
        </button>
      </form>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-gold/30 bg-gold-soft px-4 py-3 text-sm text-foreground">
          Thanks for reaching out. This submission is stored only in local UI state for now.
        </div>
      ) : null}
    </Reveal>
  );
}
