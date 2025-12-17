/** @manually */
export default function Hero({ data }: { data: any }) {
  return (
    <header className="px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">{data.headline}</h1>
      <p className="text-lg opacity-80 mb-6">{data.sub}</p>
      {data.cta_text && (
        <a href="#" className="inline-block px-6 py-3 rounded-2xl bg-black text-white">
          {data.cta_text}
        </a>
      )}
    </header>
  );
}
