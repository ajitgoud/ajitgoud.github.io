export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12"
    >
      <h2
        id={`${id}-title`}
        className="font-display text-2xl font-semibold tracking-tight lg:sticky lg:top-24 lg:self-start"
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
