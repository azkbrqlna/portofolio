export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="pt-24 container mx-auto px-4 sm:px-6 md:px-10 py-20"
    >
      {children}
    </section>
  );
}
