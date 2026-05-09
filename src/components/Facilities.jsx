const facilities = [
  {
    title: "Spațiu de antrenament tradițional",
    description:
      "Un mediu disciplinat, axat pe concentrare, respect și îmbunătățire continuă.",
  },
  {
    title: "Zona de antrenament Tatami",
    description:
      "Pardoseală sigură și spațioasă, concepută pentru a ataca, exerciții de mișcare și exerciții cu partener.",
  },
  {
    title: "Saci, manechine, arme și echipamente de condiționare",
    description:
      "Echipamente tradiționale și moderne pentru condiționare, coordonare și rafinarea tehnicii.",
  },
  {
    title: "Vestiar",
    description: "Spații curate și organizate pentru studenți ",
  },
];

export default function Facility() {
  return (
    <section
      id="dojo"
      className="relative overflow-hidden border-t border-border/20 p-12"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-dark/10 blur-3xl" />

      <div className="relative flex flex-col items-center justify-center">
        {/* Header */}
        <div className="mb-16 max-w-2xl text-center">
          <p className="mb-4 uppercase  text-accent">The Dojo</p>

          <h2 className="text-4xl uppercase  md:text-5xl">
            Construit pentru Disciplină
          </h2>

          <p className="mt-6 leading-relaxed">
            Dojo-ul nostru combină filosofia artelor marțiale tradiționale cu un
            mediu de antrenament curat și concentrat, conceput pentru toate
            nivelurile de experiență. Punem un accent deosebit pe lucrul cu
            partener, dezvoltând coordonarea, controlul, respectul reciproc și
            aplicarea practică a tehnicilor în situații reale de antrenament.
          </p>

          <p className="mt-6 leading-relaxed">
            Antrenamentele noastre pun un accent puternic pe lucrul cu partener,
            sparring controlat și aplicarea practică a tehnicilor în situații
            reale. Elevii își dezvoltă reflexele, controlul, adaptabilitatea și
            încrederea prin exerciții dinamice și scenarii apropiate de
            realitate. În plus, încurajăm participarea constantă la seminarii și
            stagii de pregătire, unde practicanții au ocazia să învețe de la
            instructori experimentați, să își perfecționeze tehnica și să
            aprofundeze principiile artelor marțiale tradiționale.
          </p>

          <p className="mt-6 leading-relaxed">
            În cadrul dojo-ului nostru, copiii sunt încurajați să își dezvolte
            disciplina, respectul, încrederea în sine și spiritul de echipă prin
            antrenamente adaptate vârstei lor. Punem accent pe educație prin
            mișcare, autocontrol și dezvoltare personală, într-un mediu sigur,
            pozitiv și motivant. Prin exerciții interactive, lucrul cu partener
            și activități dinamice, cei mici învață nu doar tehnici de arte
            marțiale, ci și valori importante care îi vor ajuta atât în sală,
            cât și în viața de zi cu zi.
          </p>
        </div>

        {/* Main feature */}

        <div className="flex justify-center">
          <div className="grid gap-8 md:grid-cols-2 md:grid-rows-2 w-full max-w-5xl">
            {facilities.map((item) => (
              <div
                key={item.title}
                className="group border border-border/30 bg-dark/50 p-6 transition hover:border-accent flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 h-px w-12 bg-accent transition-all duration-300 group-hover:w-20" />
                  <h3 className="text-lg uppercase ">{item.title}</h3>
                  <p className="mt-4 leading-relaxed ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid gap-8 border-t border-border/20 pt-10 text-center md:grid-cols-3">
          <div>
            <p className="text-4xl font-black text-accent">30+</p>
            <p className="mt-2 uppercase ">Ani de experiență</p>
          </div>

          <div>
            <p className="text-4xl font-black text-accent">25+</p>
            <p className="mt-2 uppercase">Studenți activi</p>
          </div>

          <div>
            <p className="text-4xl font-black text-accent">3</p>
            <p className="mt-2 uppercase">Stiluri de Arte Marțiale</p>
          </div>
        </div>
      </div>
    </section>
  );
}
