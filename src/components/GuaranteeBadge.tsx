import { guarantee } from "@/lib/data";
import { ShieldCheckIcon } from "@/components/icons";

export default function GuaranteeBadge() {
  return (
    <div className="mx-auto mt-10 flex max-w-md items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-left">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15">
        <ShieldCheckIcon className="h-6 w-6 text-primary" />
      </span>
      <div>
        <p className="text-sm font-bold">{guarantee.title}</p>
        <p className="mt-0.5 text-xs text-muted">{guarantee.description}</p>
      </div>
    </div>
  );
}
