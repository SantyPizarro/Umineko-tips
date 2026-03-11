export const ep3 = {
  id: 3,
  background: "assets/backgrounds/mansion_day.png",
  backgroundFantasy: "assets/backgrounds/golden_land.png",
  
  characters: [
    {
      id: "eva",
      name: "Ushiromiya Eva",
      portrait: "assets/characters/ep3/eva/portrait/eva_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep3/eva/full/eva_copy.png",
          text: [
            `Kinzo's second child.

She is hostile towards her brother Krauss and opposes him whenever she can. In this third game, her sharp wit and lifelong obsession with the family headship finally bear fruit as she leads the siblings in a serious attempt to solve the epitaph's riddle.

Her deep-seated inferiority complex toward her brother Krauss and her desire to prove her worth as the true successor are the primary motivators for her actions on this island.`
          ]
        },
        {
          phase: "winner",
          image: "assets/characters/ep3/eva/full/eva_head.png",
          text: [
            `The one who solved the riddle of the Golden Land.

By discovering the hidden gold, she has officially succeeded Kinzo as the head of the Ushiromiya family. However, this triumph came at a terrible price, leaving her as the sole survivor.

"I'm the head...! I'm the head of the Ushiromiya family!! I've won, I've finally won!!"`
          ]
        }
      ]
    },
    {
      id: "battler",
      name: "Ushiromiya Battler",
      portrait: "assets/characters/ep3/battler/portrait/but_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep3/battler/full/but_copy.png",
          text: [
            `Rudolf's son.

Battler's fight against Beatrice reaches a new level of complexity as the "human" culprit seems to be one of his own family members. He is forced to defend the people he loves while simultaneously suspecting them.

Even as the witch presents him with increasingly impossible scenarios, he refuses to surrender his humanity, beginning to visualize the 'Blue Truth' as a counter-weapon.`
          ]
        }
      ]
    }
  ],

  charactersFantasy: [
    {
      id: "evabeatrice",
      name: "EVA-Beatrice",
      portrait: "assets/characters/ep3/evabea/portrait/evb_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep3/evabea/full/evb_smug.png",
          text: [
            `The New Golden Witch, who succeeded the name of Beatrice after Eva Ushiromiya solved the riddle of the epitaph.

She is the embodiment of Eva's cruelty and greed, unconstrained by the "elegance" the previous Beatrice occasionally displayed. She finds immense joy in using her infinite magic to kill and revive her victims in a repetitive cycle of agony.

"Since I'm a witch, I can do anything! I'll make the impossible possible, and the possible into a nightmare! Kihihihihihihi!"`
          ]
        }
      ]
    },
    {
      id: "virgilia",
      name: "Virgilia",
      portrait: "assets/characters/ep3/virgilia/portrait/vir_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep3/virgilia/full/vir_copy.png",
          text: [
            `The previous Beatrice, and the one who taught Beatrice her magic.

Her name is derived from the guide who leads the protagonist through Hell and Purgatory in the Divine Comedy. She has a calm, ladylike personality and possesses immense magical power, though she currently acts as an advisor.

She appears to assist Battler, helping him find the logic to deny the witch's illusions.`
          ]
        }
      ]
    },
    {
      id: "ronove",
      name: "Ronove",
      portrait: "assets/characters/ep3/ronove/portrait/ron_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep3/ronove/full/ron_copy.png",
          text: [
            `One of the 72 great demons. He serves as Beatrice's head butler and furniture.

He often serves her tea and cookies and is one of the few who can mock Beatrice to her face and get away with it. He has a contract with her, serving as her eyes and ears in exchange for his services.

His characteristic "pfft-pfft-pfft" laugh and sarcastic nature make him a unique presence in the meta-world.`
          ]
        }
      ]
    },
    {
      id: "chiester45",
      name: "Chiester 45",
      portrait: "assets/characters/ep3/chiester/portrait/c45_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep3/chiester/full/c45.png",
          text: [
            `A member of the Chiester Sister Imperial Guard.

She has a very timid and apologetic personality, but her skills as a weapon are peerless. She excels at scouting and calculating trajectories, providing the data needed for the sisters' attacks to never miss.

"I-I'm very sorry...! Engaging target now...!"`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "The Golden Land",
      style: "tip-epitaph",
      pages: [
        `The legendary land that Kinzo Ushiromiya sought to reach through his contract with the witch.

It is said that those who solve the epitaph will be granted entrance to this paradise, where all their desires will be fulfilled and 10 tons of gold await them.

However, the "Golden Land" also serves as the stage for the witch's banquet, where the interest for Kinzo's debt is collected in the form of human sacrifices.`
      ]
    }
  ],

  tipsFantasy: [
    {
      title: "The Blue Truth",
      style: "tip-blue-truth",
      pages: [
        `A rule introduced to allow humans to fight on equal footing with witches.

While the Red Truth is the absolute fact, the Blue Truth is a logical theory that can deny magic. If a human presents a Blue Truth that the witch cannot refute with Red Truth, that theory becomes the truth of the board.

It is the personification of the "Intellectual Rape" that Battler inflicts upon the witch's mysteries.`
      ]
    },
    {
      title: "The Red Truth",
      style: "tip-red-truth",
      pages: [
        `Words spoken in red are the absolute truth. No proof is required, and no counter-argument is possible.

It is the most powerful weapon of the witch, used to corner the human side by narrowing the possibilities of what could have happened on the island.

"In this room, no one besides the victims was present. This is the Red Truth."`
      ]
    }
  ]
};