import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="gradient-hero flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <LogoMark className="h-14 w-14" />
      <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
        Η σελίδα δεν βρέθηκε
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Η σελίδα που αναζητάτε δεν υπάρχει πλέον ή έχει μετακινηθεί. Επιστρέψτε
        στην αρχική σελίδα για να συνεχίσετε.
      </p>
      <Link
        href="/"
        className="mt-8 btn-shine rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
      >
        Στην αρχική σελίδα
      </Link>
    </div>
  );
}
