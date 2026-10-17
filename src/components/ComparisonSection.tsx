import { comparisonRows } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { CheckCircleIcon, XCircleIcon } from "@/components/icons";

function Cell({ value, emphasis }: { value: string | boolean; emphasis?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircleIcon
        className={`mx-auto h-5 w-5 ${emphasis ? "text-primary" : "text-muted"}`}
      />
    ) : (
      <XCircleIcon className="mx-auto h-5 w-5 text-muted/50" />
    );
  }
  return (
    <span className={emphasis ? "font-semibold text-foreground" : "text-muted"}>
      {value}
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="border-t border-border bg-surface/40 py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Σύγκριση
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Το Greek IPTV σε σύγκριση με την παραδοσιακή TV
          </h2>
          <p className="mt-4 text-muted">
            Δείτε γιατί όλο και περισσότεροι Έλληνες εγκαταλείπουν τις ακριβές
            συνδρομές καλωδιακής και δορυφορικής για το Greek IPTV.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid grid-cols-[1.3fr_1fr_1fr] border-b border-border bg-surface-2 text-center text-xs font-bold uppercase tracking-wide sm:text-sm">
            <div className="px-3 py-3 text-left text-muted">&nbsp;</div>
            <div className="px-3 py-3 text-primary">Greek IPTV</div>
            <div className="px-3 py-3 text-muted">Παραδοσιακή TV</div>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.3fr_1fr_1fr] items-center text-center text-xs sm:text-sm ${
                i % 2 === 1 ? "bg-surface-2/40" : ""
              }`}
            >
              <div className="px-3 py-3 text-left font-medium text-foreground/85">
                {row.label}
              </div>
              <div className="px-3 py-3">
                <Cell value={row.iptv} emphasis />
              </div>
              <div className="px-3 py-3">
                <Cell value={row.traditional} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
