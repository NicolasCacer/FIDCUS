export default function Page() {
  const data = [
    { grupo: "Antibióticos", cantidad: 45 },
    { grupo: "Analgésicos", cantidad: 30 },
    { grupo: "Antiinflamatorios", cantidad: 22 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Vista General</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#192a67] text-white rounded-2xl p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold">{item.grupo}</h3>
            <p className="text-4xl font-bold mt-2">{item.cantidad}</p>
            <p className="text-sm">medicamentos</p>
          </div>
        ))}
      </div>
    </div>
  );
}
