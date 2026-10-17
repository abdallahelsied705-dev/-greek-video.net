import type { Block } from "@/lib/blog";

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
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={i} className="list-decimal space-y-2 pl-5">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ol>
          );
        }
        return <p key={i}>{block.text}</p>;
      })}
    </div>
  );
}
