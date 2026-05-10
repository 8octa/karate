export default function Contests() {
  const achievements = [
    {
      year: "2026",
      title: "Campionatul Național de Wing Chun Kuen",
      achievement:
        "7 locuri campioni naționali, 13 locuri vicecampioni naționali, 11 locuri 3",
    },
    {
      year: "2026",
      title: "Campionatul național de Wushu Kung-Fu Sanda Light",
      achievement:
        "1 loc campioni național, 1 loc vicecampion național, 6 locuri 3",
    },
    {
      year: "2025",
      title: "Cupa României de Wushu Kung-Fu Light Sanda",
      achievement: "1 campion național",
    },
  ];

  const upcomingCompetitions = [
    {
      date: "3 Octombrie 2026",
      name: "Campionatul Național Wushu",
      location: "București, Sala Polivalenta",
      category: "Sanda: copii (9 - 11 ani), cadeți, juniori, seniori - M, F",
      status: "Înscrieri deschise",
    },
    {
      date: "17 Octombrie 2026",
      name: "Cupa României - Wing Chun",
      location: "Baia Mare",
      category: "Tao, Sanda: copii, cadeți, juniori, seniori, veterani - M, F",
      status: "În curând",
    },
    {
      date: "07 Noiembrie 2026",
      name: "Cupa României Kung-Fu",
      location: "București",
      category:
        "Taolu tradițional, Light Sanda: copii, cadeți, juniori, seniori, veterani - M, F",
      status: "În curând",
    },
  ];

  return (
    <section id="contests" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6  flex flex-col justify-center gap-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl uppercase tracking-widest mb-4">
            Competiții și Realizări
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Membrii clubului nostru participă regulat la competiții locale,
            naționale și internaționale, aducând recunoaștere și onoare artelor
            marțiale tradiționale.
          </p>
        </div>

        {/* Recent Achievements */}
        <div>
          <h3 className="text-2xl uppercase tracking-widest mb-8 text-center">
            Realizări Recente
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-border hover:border-accent transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl text-accent font-bold">
                    {item.year}
                  </span>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide text-sm mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted text-sm">{item.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 border border-border bg-background/50">
          <h3 className="text-xl uppercase tracking-widest mb-4">
            Pregătește-te pentru Competiție
          </h3>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Oferim antrenamente specializate pentru competiții, atât pentru
            începători cât și pentru competitori avansați. Fiecare membru este
            încurajat să participe și să își depășească limitele, indiferent de
            vârstă.
          </p>
        </div>

        {/* Upcoming Competitions Table */}
        <div>
          <h3 className="text-2xl uppercase tracking-widest mb-8 text-center">
            Competiții Viitoare
          </h3>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto border border-border">
            <table className="w-full">
              <thead className="bg-background/50 border-b border-border">
                <tr>
                  <th className="text-left px-6 py-4 uppercase tracking-widest text-xs text-muted font-bold">
                    Data
                  </th>
                  <th className="text-left px-6 py-4 uppercase tracking-widest text-xs text-muted font-bold">
                    Competiție
                  </th>
                  <th className="text-left px-6 py-4 uppercase tracking-widest text-xs text-muted font-bold">
                    Locație
                  </th>
                  <th className="text-left px-6 py-4 uppercase tracking-widest text-xs text-muted font-bold">
                    Categorie
                  </th>
                </tr>
              </thead>
              <tbody>
                {upcomingCompetitions.map((competition, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-background/30 transition"
                  >
                    <td className="px-6 py-4 text-sm font-bold text-accent">
                      {competition.date}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold">
                      {competition.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted">
                      {competition.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted">
                      {competition.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {upcomingCompetitions.map((competition, index) => (
              <div
                key={index}
                className="p-4 border border-border hover:border-accent transition"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-bold text-accent">
                    {competition.date}
                  </span>
                </div>
                <h4 className="font-bold text-sm mb-2">{competition.name}</h4>
                <p className="text-xs text-muted mb-1">
                  <span className="uppercase tracking-wider">Locație:</span>{" "}
                  {competition.location}
                </p>
                <p className="text-xs text-muted">
                  <span className="uppercase tracking-wider">Categorie:</span>{" "}
                  {competition.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
