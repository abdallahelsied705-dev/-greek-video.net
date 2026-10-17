import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";
import JsonLd from "@/components/JsonLd";
import { getPost, posts } from "@/lib/blog";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import { siteConfig, waLinks } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "el-GR",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon` },
    },
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleJsonLd} />
      <Header />
      <main id="main-content" className="flex-1 py-16">
        <article className="container-shell max-w-3xl">
          <nav className="text-xs text-muted">
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>{" "}
            / <span className="text-foreground/80">{post.category}</span>
          </nav>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{post.title}</h1>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted">
            <span>{post.dateLabel}</span>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} λεπτά ανάγνωσης</span>
          </div>

          <BlogContent body={post.body} />

          <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
            <h2 className="text-lg font-bold">Έτοιμοι να ξεκινήσετε;</h2>
            <p className="mt-2 text-sm text-muted">
              50.000+ κανάλια σε HD & 4K, άμεση ενεργοποίηση και υποστήριξη 24/7
              στα ελληνικά.
            </p>
            <a
              href={waLinks.buyNow}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-5 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              Δείτε τα πακέτα
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
