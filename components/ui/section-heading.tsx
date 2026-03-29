type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: Readonly<SectionHeadingProps>) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 font-display text-section-title text-warm-900">{title}</h2>
      {description && (
        <p className="mt-4 text-body-lg text-warm-600">{description}</p>
      )}
    </div>
  );
}
