import { ArrowRight } from "lucide-react";

import { Reveal } from "./reveal";

type StoryCardProps = {
  title: string;
  description: string;
  meta?: string;
  icon?: React.ReactNode;
  href?: string;
};

export function StoryCard({ title, description, meta, icon, href }: Readonly<StoryCardProps>) {
  return (
    <Reveal className="group h-full">
      <article className="flex h-full flex-col rounded-card border border-warm-100 bg-white p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-card-hover">
        <div className="flex items-start justify-between gap-4">
          {icon ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-card bg-green-50 text-green-800">
              {icon}
            </div>
          ) : meta ? (
            <span className="eyebrow">{meta}</span>
          ) : null}
        </div>
        <h3 className="mt-4 font-body text-card-title text-warm-900">{title}</h3>
        <p className="mt-2 flex-1 text-body text-warm-600">{description}</p>
        {href && (
          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-green-800 transition-colors group-hover:text-green-600">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </div>
        )}
      </article>
    </Reveal>
  );
}
