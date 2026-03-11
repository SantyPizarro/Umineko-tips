export const ep7 = {
  id: 7,
  background: "assets/backgrounds/mansion_night_funeral.png",
  backgroundFantasy: "assets/backgrounds/tea_party_hall.png",

  characters: [
    {
      id: "willard",
      name: "Willard H. Wright",
      portrait: "assets/characters/ep7/will/portrait/wil_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep7/will/full/wil_copy.png",
          text: [
            `A former Chief Inquisitor of the SSVD, known as "Right-Next-to-the-Truth Wright."

He is a veteran inquisitor who has grown weary of the strict and heartless rules of the Great Court. He is invited to Rokkenjima by Bernkastel to solve the mystery of Beatrice's death. Unlike Erika, he seeks the "heart" of the mystery.

"I've finished the interrogation. I've finished the inspection. And I've finished the mourning. All that's left is to head to the funeral."`
          ]
        }
      ]
    },
    {
      id: "lion",
      name: "Ushiromiya Lion",
      portrait: "assets/characters/ep7/lion/portrait/lio_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep7/lion/full/lio_copy.png",
          text: [
            `The successor to the Ushiromiya family in a world where a specific "miracle" occurred.

Lion is Krauss and Natsuhi's child, raised as the perfect heir. They possess a polite and dignified personality, acting as Willard's guide during the investigation. Their existence is a paradox that holds the key to the entire tragedy of Rokkenjima.

"In this world, I am the one who will inherit the headship. Is that... so strange?"`
          ]
        }
      ]
    }
  ],

  // --- PERSONAJES MODO FANTASY (Meta-mundo / Teatro de la Crueldad) ---
  charactersFantasy: [
    {
      id: "clair",
      name: "Clair Vaux Bernardus",
      portrait: "assets/characters/ep7/clair/portrait/cla_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep7/clair/full/cla_full.png",
          text: [
            `The personification of Beatrice's "confession."

A white, doll-like figure who acts as the storyteller for the events leading up to the tragedy. She exists to relay the truth of the culprit's heart to Willard and Lion. She is the essence of the witch before the "Golden" legend was added.

"Please, listen to my story. This is the truth of the witch who lived and died in a cage of gold."`
          ]
        }
      ]
    },
    {
      id: "bernkastel_ep7",
      name: "Bernkastel",
      portrait: "assets/characters/ep7/bern/portrait/ber_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep7/bern/full/ber_tea.png",
          text: [
            `The Witch of Miracles, acting as the host of the Tea Party.

In this episode, her cruelty reaches its peak as she forces the audience to witness the "guts" of the mystery. She has no interest in the "heart" Willard found; she only cares about the cold, bloody reality of the incident.

"Did you think this would be a happy ending? How naive. Let's open the gift box and see the beautiful tragedy inside!"`
          ]
        }
      ]
    }
  ],

  // --- TIPS ÚNICOS DEL CAPÍTULO 7 ---
  tips: [
    {
      title: "The Vanishing of the Witch",
      style: "tip-meta",
      pages: [
        `The central theme of the seventh game. 
        
Now that the mystery has been solved by Willard H. Wright, the "magic" that covered Rokkenjima begins to peel away. The witch Beatrice is no longer an antagonist, but a victim whose life is being dissected for the sake of the truth.`,
        `When the illusion is completely denied, all that remains is the sorrow of a single person.`
      ]
    },
    {
      title: "The SSVD",
      style: "tip-rules",
      pages: [
        `The Seventh District Enforcement Agency of the Great Court of Heaven.
        
A group of inquisitors who specialize in investigating and punishing heresies within the world of mysteries. While the Eisern Jungfrau (Dlanor's group) focuses on the "Knox's Decalogue," the SSVD is known for its absolute and merciless adherence to the "Van Dine's Commandments."`
      ]
    },
    {
      title: "Van Dine's Commandments",
      style: "tip-rules",
      pages: [
        `A set of twenty rules for detective fiction established by S.S. Van Dine. 
        
In this game, they serve as the weapon for Willard H. Wright. These rules are even stricter than Knox's, such as the prohibition of "love interest" or "lengthy descriptions" that do not contribute to the mystery.`,
        `"Rule #3: There must be no love interest. Rule #4: The detective himself can never be the culprit."`
      ]
    }
  ]
};