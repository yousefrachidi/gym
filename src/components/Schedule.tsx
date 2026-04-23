type Slot = { cours: string; coach: string; color: string; note?: string };

const times = ["10H30", "13H00", "15H00", "17H00", "18H30", "19H00", "20H00"];

const days: { label: string; slots: Partial<Record<string, Slot>> }[] = [
  { label: "LUNDI", slots: {
    "10H30": { cours: "CROSSFIT", coach: "HAMID", color: "hamid" },
    "17H00": { cours: "ABDO", coach: "AZZEDDINE", color: "azzeddine" },
    "18H30": { cours: "SPINNING", coach: "YASSINE", color: "yassine" },
    "19H00": { cours: "SPINNING", coach: "AYMANE", note: "19H15", color: "aymane" },
    "20H00": { cours: "TABATA", coach: "AYMANE", color: "aymane" },
  }},
  { label: "MARDI", slots: {
    "10H30": { cours: "TABATA", coach: "HAMID", color: "hamid" },
    "18H30": { cours: "STEP", coach: "YASSINE", color: "yassine" },
    "19H00": { cours: "SPINNING", coach: "AYMENE", color: "aymane" },
    "20H00": { cours: "CROSS TRAINING", coach: "AYMANE", color: "aymane" },
  }},
  { label: "MERCREDI", slots: {
    "10H30": { cours: "RMG", coach: "HAMID", color: "hamid" },
    "17H00": { cours: "STRETCHING", coach: "AYMANE", color: "aymane" },
    "18H30": { cours: "STEP", coach: "YASSINE", color: "yassine" },
    "19H00": { cours: "SPINNING", coach: "AYMENE", note: "19H30", color: "aymane" },
  }},
  { label: "JEUDI", slots: {
    "10H30": { cours: "CARDIO", coach: "HAMID", color: "hamid" },
    "17H00": { cours: "ABDO", coach: "AZZEDDINE", color: "azzeddine" },
    "19H00": { cours: "SPINNING", coach: "YASSINE", note: "19H15", color: "yassine" },
    "20H00": { cours: "RMG", coach: "AYMANE", color: "aymane" },
  }},
  { label: "VENDREDI", slots: {
    "10H30": { cours: "TABATA", coach: "HAMID", color: "hamid" },
    "18H30": { cours: "CARDIO", coach: "YASSINE", color: "yassine" },
    "19H00": { cours: "SPINNING", coach: "AYMANE", color: "aymane" },
    "20H00": { cours: "CAF", coach: "AYMANE", color: "aymane" },
  }},
  { label: "SAMEDI", slots: {
    "10H30": { cours: "CARDIO", coach: "HAMID", color: "hamid" },
    "15H00": { cours: "SPÉCIAL", coach: "AZZEDDINE", color: "azzeddine" },
    "19H00": { cours: "SPINNING", coach: "YASSINE", color: "yassine" },
  }},
  { label: "DIMANCHE", slots: {
    "13H00": { cours: "SPÉCIAL", coach: "AYMANE", color: "aymane" },
  }},
];

const colorMap: Record<string, string> = {
  hamid:     "bg-[#1e3a5f] border-l-4 border-[#1a6eb5]",
  azzeddine: "bg-[#1a4a1a] border-l-4 border-[#3dba3d]",
  yassine:   "bg-[#4a2500] border-l-4 border-[#e07820]",
  aymane:    "bg-[#1a1a4a] border-l-4 border-[#4a6ee0]",
};

const coachColor: Record<string, string> = {
  hamid:     "text-[#5ba3e8]",
  azzeddine: "text-[#5dd85d]",
  yassine:   "text-[#e07820]",
  aymane:    "text-[#7090e8]",
};

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#b5cc2e] text-xs font-bold uppercase tracking-widest">Planning</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">Planning des cours collectifs</h2>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { label: "HAMID", color: "bg-[#1a6eb5]" },
            { label: "AZZEDDINE", color: "bg-[#3dba3d]" },
            { label: "YASSINE", color: "bg-[#e07820]" },
            { label: "AYMANE / AYMENE", color: "bg-[#4a6ee0]" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-2 text-xs text-gray-400">
              <span className={`w-3 h-3 rounded-sm ${c.color}`} />
              {c.label}
            </div>
          ))}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-[#1a4a7a]">
                <th className="py-4 px-4 text-left text-sm font-bold text-white w-28"></th>
                {times.map((t) => (
                  <th key={t} className="py-4 px-2 text-center text-sm font-bold text-white">{t}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map((day, i) => (
                <tr key={day.label} className={`border-t border-white/10 ${i % 2 === 0 ? "bg-[#0d0d0d]" : "bg-[#111111]"}`}>
                  <td className="py-3 px-4">
                    <span className="text-xs font-black text-white bg-[#1a4a7a] px-3 py-1.5 rounded-lg block text-center">
                      {day.label}
                    </span>
                  </td>
                  {times.map((time) => {
                    const slot = day.slots[time as keyof typeof day.slots];
                    return (
                      <td key={time} className="py-2 px-1.5 text-center">
                        {slot ? (
                          <div className={`${colorMap[slot.color]} rounded-lg py-2 px-1 text-left`}>
                            {slot.note && (
                              <p className="text-[10px] text-red-400 font-bold leading-none mb-0.5">({slot.note})</p>
                            )}
                            <p className="text-white text-xs font-black leading-tight">{slot.cours}</p>
                            <p className={`text-xs font-bold ${coachColor[slot.color]}`}>{slot.coach}</p>
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
