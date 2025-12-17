/** @manually */
export default function Faq({ data }: { data: any }) {
  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      {(data.items || []).map((qa: any, idx: number) => (
        <details key={idx} className="mb-3 p-4 rounded-xl border">
          <summary className="cursor-pointer font-medium">{qa.q}</summary>
          <p className="mt-2 opacity-80">{qa.a}</p>
        </details>
      ))}
    </section>
  );
}
