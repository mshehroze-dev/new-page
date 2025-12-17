/** @manually */
export default function Pricing({ data }: { data: any }) {
  return (
    <section className="px-6 py-12 grid gap-6 md:grid-cols-2">
      {(data.plans || []).map((p: any, idx: number) => (
        <div key={idx} className="p-6 rounded-2xl border">
          <div className="flex items-baseline gap-2 mb-3">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <span className="text-2xl font-bold">{p.price}</span>
          </div>
          <ul className="mb-4 list-disc ps-6">
            {(p.features || []).map((f: string, i: number) => <li key={i}>{f}</li>)}
          </ul>
          {p.cta && (
            <a href="#" className="inline-block px-4 py-2 rounded-xl border">{p.cta}</a>
          )}
        </div>
      ))}
    </section>
  );
}
