"use client";

import { useState } from "react";
import { useLang } from "@/lib/language";

// Öffentlicher Access Key von Web3Forms (nicht sicherheitskritisch), gleiche Quelle wie theminhnguyen.github.io
const WEB3FORMS_KEY = "fe100f8f-c555-4935-b249-c63e3b1af5fd";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { tk, lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });
      const json = await response.json();
      if (json.success) {
        event.currentTarget.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-lg space-y-4">
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="Neue Nachricht über minh-cv" />
      <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="language" value={lang} />

      <div>
        <label htmlFor="name" className="text-sm font-medium">
          {tk("formName")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          {tk("formEmail")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          {tk("formMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-y rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity disabled:opacity-60"
      >
        {status === "sending" ? tk("formSending") : tk("formSubmit")}
      </button>

      <p role="status" aria-live="polite" className="text-sm">
        {status === "success" ? (
          <span className="text-[var(--color-accent)]">{tk("formSuccess")}</span>
        ) : null}
        {status === "error" ? (
          <span className="text-red-400">
            {WEB3FORMS_KEY ? tk("formError") : tk("formNotConfigured")}
          </span>
        ) : null}
      </p>
    </form>
  );
}
