import Header from "./Header";
import AbilitySection from "./AbilitySection";

export default function HomePage() {
  // Ability data
  const abilities = [
    {
      id: "first",
      title: "Power Chord",
      subtitle: "Passive Ability",
      description:
        "Accelerando: Sona gains non-Ultimate ability haste permanently for her basic abilities as she uses her abilities well, up to a cap. Beyond that cap, further successful uses reduce her ultimate's remaining cooldown instead. Power Chord: Every few spell casts, Sona's next attack will deal bonus magic damage in addition to an additional effect based on what basic Ability Sona last activated.",
      videoSrc: "./assets/Passive.mp4",
    },
    {
      id: "second",
      title: "Hymn of Valor",
      subtitle: "Q Ability",
      description:
        "Sona plays the Hymn of Valor, sends out bolts of sound, dealing magic damage to two nearby enemies, prioritizing champions and monsters. Sona gains a temporary aura that grants allies tagged by the zone bonus damage on their next attack against enemies.",
      videoSrc: "./assets/Q.mp4",
    },
    {
      id: "third",
      title: "Aria of Perseverance",
      subtitle: "W Ability",
      description:
        "Sona plays the Aria of Perseverance, sending out protective melodies, healing Sona and a nearby wounded ally. Sona gains a temporary aura that grants allies tagged by the zone a temporary shield.",
      videoSrc: "./assets/SonaW.mp4",
    },
    {
      id: "fourth",
      title: "Song of Celerity",
      subtitle: "E Ability",
      description:
        "Sona plays the Song of Celerity, granting nearby allies bonus Move Speed. Sona gains a temporary aura that grants allied champions tagged by the zone bonus Move Speed.",
      videoSrc: "./assets/SonaE.mp4",
    },
    {
      id: "fifth",
      title: "Crescendo",
      subtitle: "R Ability",
      description:
        "Sona plays her ultimate chord, stunning enemy champions and forcing them to dance and dealing magic damage to them. Each rank reduces the base cooldown of Sona's basic abilities.",
      videoSrc: "./assets/R.mp4",
    },
  ];

  return (
    <div>
      <Header />
      <main>
        {abilities.map((ability) => (
          <AbilitySection
            key={ability.id}
            id={ability.id}
            title={ability.title}
            subtitle={ability.subtitle}
            description={ability.description}
            videoSrc={ability.videoSrc}
          />
        ))}
      </main>
    </div>
  );
}
