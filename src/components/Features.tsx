/** @manually */
export default function Features({ data }: { data: any }) {
  return (
    <section className="px-6 py-12 grid gap-6 md:grid-cols-3">
      {(data.items || []).map((i: any, idx: number) => (
        <div key={idx} className="p-6 rounded-2xl border">
          <h3 className="font-semibold mb-2">{i.title}</h3>
          <p className="opacity-80">{i.desc}</p>
        </div>
      ))}
    </section>
  );
}
