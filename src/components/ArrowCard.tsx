import { formatDate } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">;
  pill?: boolean;
};

export default function ArrowCard({ entry }: Props) {
  return (
    <a
      href={`/${entry.collection}/${entry.slug}`}
      class="group p-4 gap-3 flex flex-col border border-big/20 hover:border-big"
    >
      <div class="w-full">
        <img
          src={entry.data.banner}
          alt={entry.data.title}
          class="w-full h-48 object-cover mb-4"
        />
        <div class="text-sm uppercase">{formatDate(entry.data.date)}</div>
        <div class="font-semibold mt-3 text-big">{entry.data.title}</div>

        <div class="text-sm line-clamp-2">{entry.data.summary}</div>
        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.data.tags.map((tag: string) => (
            <li class="text-xs uppercase py-0.5 px-1 bg-big/20 text-tiny">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
