import Link from "next/link";
import type { Block } from "@/lib/blog";

// Render inline markdown-style links: [label](/internal) or [label](https://external)
function renderText(text: string) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    const external = /^https?:\/\//.test(href);
    if (external) {
      parts.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline decoration-primary/50 underline-offset-2 hover:text-accent"
        >
          {label}
        </a>
      );
    } else {
      parts.push(
        <Link
          key={key++}
          href={href}
          className="font-medium text-primary underline decoration-primary/50 underline-offset-2 hover:text-accent"
        >
          {label}
        </Link>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function BlogContent({ body }: { body: Block[] }) {
  return (
    <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/85 sm:text-base">
      {body.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="mt-10 text-xl font-bold text-foreground sm:text-2xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={i} className="mt-7 text-lg font-semibold text-foreground">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5">
              {block.items.map((item, j) => (
                <li key={j}>{renderText(item)}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={i} className="list-decimal space-y-2 pl-5">
              {block.items.map((item, j) => (
                <li key={j}>{renderText(item)}</li>
              ))}
            </ol>
          );
        }
        return <p key={i}>{renderText(block.text)}</p>;
      })}
    </div>
  );
}
