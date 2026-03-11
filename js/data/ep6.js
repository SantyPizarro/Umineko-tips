export const ep6 = {
  id: 6,
  background: "assets/backgrounds/mansion_day.png",
  backgroundFantasy: "assets/backgrounds/meta_world_dawn.png",
  backgroundFuture: "assets/backgrounds/skyscraper_roof_night.png",

  // --- PERSONAJES MODO NORMAL (Tablero de juego) ---
  characters: [
    {
      id: "battler_gm",
      name: "Ushiromiya Battler (Game Master)",
      portrait: "assets/characters/ep6/battler/portrait/but_gm.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep6/battler/full/but_gm_full.png",
          text: [
            `The Golden Sorcerer and current Game Master.
            
Having understood the "heart" of Beatrice's game, Battler has inherited her powers and the title of the Golden Witch. He now sits on the side of the creator, attempting to craft a game that honors Beatrice's original intent while challenging Erika's ruthless logic.

"I finally understand. This is the game you wanted me to see, isn't it, Beato?"`
          ]
        }
      ]
    },
    {
      id: "chick_beato",
      name: "Chick Beatrice",
      portrait: "assets/characters/ep6/beato/portrait/bea_chick.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep6/beato/full/bea_chick_full.png",
          text: [
            `A new Beatrice created by Battler.
            
She lacks the memories and the "malice" of the previous Golden Witch, acting as a blank slate. She is innocent, shy, and devoted to Battler, but she struggles with the burden of her name and the expectations of those who remember the "other" Beatrice.

"If it's for my Master's sake... I'll try my best to be a witch."`
          ]
        }
      ]
    }
  ],

  // --- PERSONAJES MODO FANTASY (Meta-mundo / Entidades) ---
  charactersFantasy: [
    {
      id: "furudo_erika_witch",
      name: "Erika Furudo (Witch of Truth)",
      portrait: "assets/characters/ep6/erika/portrait/eri_witch.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep6/erika/full/eri_witch_full.png",
          text: [
            `The Witch of Truth and Bernkastel's loyal piece.
            
In this game, Erika returns with a divine-tier authority to dismantle Battler's logic. She is no longer just a detective; she is a conceptual executioner who uses the "Red Truth" as a scalpel to excise all possibilities of love or mystery from the board.

"Without love, it cannot be seen? How pathetic. With my truth, I shall rip that 'heart' of yours to shreds!"`
          ]
        }
      ]
    },
    {
      id: "zeket_zepar",
      name: "Zepar & Furfur",
      portrait: "assets/characters/ep6/zepar_furfur/portrait/zf_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep6/zepar_furfur/full/zf_full.png",
          text: [
            `Great Demons who preside over love and trials.
            
They are neutral entities summoned to manage the "Trial of Lovers" on the island. They speak in unison and possess the power to grant a miracle of love, but only to those who can prove their resolve through a cruel competition.

"Love is a trial! Love is a duel! Only one pair shall attain the golden fruit!"`
          ]
        }
      ]
    }
  ],

  // --- PERSONAJES MODO FUTURO (Ange's Journey 1998) ---
  charactersFuture: [
    {
      id: "ange_beatrice",
      name: "Ange Beatrice",
      portrait: "assets/characters/ep6/ange/portrait/ang_future.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep6/ange/full/ang_witch.png",
          text: [
            `The Witch of Resurrection.
            
Ange continues her journey through the year 1998, seeking the truth of the "Beatrice" identity. She is torn between the hatred for the tragedy and the growing understanding of the magic her brother Battler tried to use to protect her.

She is the only one who can truly bring back the souls of the Ushiromiya family through the power of her conviction.`
          ]
        }
      ]
    },
    {
      id: "hachijo_toya",
      name: "Hachijo Tohya",
      portrait: "assets/characters/ep6/hachijo/portrait/hac_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep6/hachijo/full/hac_full.png",
          text: [
            `A mysterious and famous novelist of "Message in a Bottle" stories.
            
A creator who exists in the world of 1998 and holds the key to the manuscripts that detail the events of Rokkenjima. Tohya's perspective is detached and analytical, viewing the tragedy as a puzzle to be solved and written.

"To write a story is to create a truth. Are you prepared to read the truth I have written?"`
          ]
        }
      ]
    }
  ],

  // --- TIPS ÚNICOS DEL CAPÍTULO 6 ---
  tips: [
    {
      title: "The Logic Error",
      style: "tip-meta",
      pages: [
        `A state in which the Game Master's board becomes contradictory and impossible to resolve.
        
In this episode, Battler falls into a trap set by Erika, resulting in a room that is closed both physically and logically. If a Logic Error is not resolved, the Game Master is trapped in an eternal loop of suffering, and the game can never end.`,
        `The only way to escape is to find a "miracle" explanation that satisfies all the Red Truths established up to that point.`
      ]
    },
    {
      title: "The Trial of Lovers",
      style: "tip-ritual",
      pages: [
        `A magical ritual conducted by the demons Zepar and Furfur.
        
It pits three pairs of lovers—George and Shannon, Jessica and Kanon, and Battler and Beatrice—against each other. Only one pair is permitted to "exist" and achieve their love, while the others must vanish as "furniture."`
      ]
    },
    {
      title: "Featherine Augustus Aurora",
      style: "tip-witch",
      pages: [
        `The Witch of Theatergoing, Drama, and Spectating. 
        
She is an ancient entity far above the level of normal witches, acting as Hachijo Tohya's mentor and observer. She views all existence as a script and is capable of rewriting reality itself with her "Overlord" authority.`
      ]
    }
  ]
};