import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { posts } from "@/lib/blog";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Οδηγοί, συμβουλές και νέα για το Greek IPTV: εγκατάσταση σε Firestick, Smart TV, λύσεις για buffering και περισσότερα, στα ελληνικά.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Blog", path: "/blog" }]);

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Greek IPTV Blog",
  url: `${SITE_URL}/blog`,
  inLanguage: "el-GR",
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={blogJsonLd} />
      <Header />
      <main id="main-content" className="flex-1 py-16">
        <div className="container-shell max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Blog
          </span>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Οδηγοί, συμβουλές & νέα IPTV
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Πρακτικοί οδηγοί για να αξιοποιήσετε στο έπακρο το Greek IPTV —
            εγκατάσταση σε κάθε συσκευή, λύσεις προβλημάτων και χρήσιμες
            συμβουλές, όλα στα ελληνικά.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal
                key={post.slug}
                delay={i * 70}
                className="card-hover flex flex-col rounded-2xl border border-border bg-surface p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {post.category}
                </span>
                <h2 className="mt-2 text-lg font-bold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-white">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                  <span>{post.dateLabel}</span>
                  <span aria-hidden>·</span>
                  <span>{post.readingMinutes} λεπτά ανάγνωσης</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Διαβάστε περισσότερα →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
