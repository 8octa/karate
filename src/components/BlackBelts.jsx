const blackBelts = [
  { name: "Cristian Marin", rank: "2 Dan" },
  { name: "Andrei Popescu", rank: "1 Dan" },
  { name: "Mihai Ionescu", rank: "1 Dan" },
  { name: "Alex Dumitru", rank: "Instructor Level" },
];

export default function BlackBelts() {
  return (
    <section id="black-belts" className="border-t border-border/20 py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-4 uppercase Centuri text-accent">
            Respect & Perseverență
          </p>

          <h2 className="text-4xl uppercase Centuri md:text-5xl">
            Centuri / Eșarfe
          </h2>

          <p className="mt-6 max-w-2xl leading-relaxed ">
            Practicanți care au demonstrat disciplină, dedicare și ani de muncă
            continuă în studiul artelor marțiale tradiționale.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden border border-border/30">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border/30 bg-border/10">
                <th className="px-6 py-4 text-left uppercase Centuri ">Nume</th>

                <th className="px-6 py-4 text-right uppercase Centuri ">
                  Grad
                </th>
              </tr>
            </thead>

            <tbody>
              {blackBelts.map((student, index) => (
                <tr
                  key={student.name}
                  className={`transition bg-border/10 ${
                    index !== blackBelts.length - 1
                      ? "border-b border-border/20"
                      : ""
                  }`}
                >
                  <td className="px-6 py-5">{student.name}</td>

                  <td className="px-6 py-5 text-right font-semibold text-accent">
                    {student.rank}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
