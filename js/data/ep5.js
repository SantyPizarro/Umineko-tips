export const ep5 = {
  id: 5,
  background: "assets/backgrounds/mansion_day.png",
  backgroundFantasy: "assets/backgrounds/meta_world_silver.png",

  characters: [
    {
      id: "erika",
      name: "Furudo Erika",
      portrait: "assets/characters/ep5/erika/portrait/eri_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep5/erika/full/eri_copy.png",
          text: [
            `The "visitor" who was washed ashore on Rokkenjima just before the family conference began.

She is a self-proclaimed "detective" and a guest of the Ushiromiya family. She possesses an extraordinary memory and a keen eye for detail, using these skills to investigate the mysteries of the island from a strictly logical perspective.

"I am the detective, Furudo Erika. An invited guest should be welcomed with a corresponding amount of courtesy."`
          ]
        }
      ]
    },
    {
      id: "natsuhi_ep5",
      name: "Ushiromiya Natsuhi",
      portrait: "assets/characters/ep5/natsu/portrait/nat_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep5/natsu/full/nat_stressed.png",
          text: [
            `Krauss's wife and the one who currently manages the Ushiromiya household.

In this fifth game, she becomes the primary target of the mystery. Haunted by a "man from 19 years ago" who calls her on the phone, she is forced into a corner where her past and her pride are put on trial. 

She desperately tries to protect the honor of the Ushiromiya family, even as the walls close in around her.`
          ]
        }
      ]
    },
    {
      id: "battler_ep5",
      name: "Ushiromiya Battler",
      portrait: "assets/characters/ep5/battler/portrait/but_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep5/battler/full/but_serious.png",
          text: [
            `Rudolf's son.

Having reached a stalemate with Beatrice, Battler now finds himself in a position where he must understand the "heart" of the mystery rather than just its logical solution. He begins to realize that the game is not just about winning or losing, but about reaching the truth that Beatrice has hidden.`
          ]
        }
      ]
    }
  ],

  charactersFantasy: [
    {
      id: "lambdadelta",
      name: "Lambdadelta",
      portrait: "assets/characters/ep5/lambda/portrait/lam_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep5/lambda/full/lam_smug.png",
          text: [
            `The Witch of the Absolute. She has taken over as the Game Master for this fifth game.

She has the power to ensure that "an effort will be rewarded without fail." While she appears to be helping Bernkastel, her true motives are always tied to her own amusement and her complex obsession with Beatrice.

"I'll grant you the 'absolute' result you desire. But remember, the price is always absolute too! Hohohoho!"`
          ]
        }
      ]
    },
    {
      id: "bernkastel",
      name: "Bernkastel",
      portrait: "assets/characters/ep5/bern/portrait/ber_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep5/bern/full/ber_cold.png",
          text: [
            `The Witch of Miracles. She is the one who "prepared" Furudo Erika as her piece for this board.

She can cause a miracle to happen as long as the probability is not zero. However, her personality is incredibly cold and cruel, viewing the tragedy of Rokkenjima as a mere plaything to alleviate her eternal boredom.

"It's all just a game of chance and miracles. And I happen to own the dice."`
          ]
        }
      ]
    },
    {
      id: "dlanor",
      name: "Dlanor A. Knox",
      portrait: "assets/characters/ep5/dlanor/portrait/dla_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep5/dlanor/full/dla_copy.png",
          text: [
            `The Chief Inquisitor of the Eisern Jungfrau and a First-Class Archbishop.

She is sent to the island to assist Erika in her investigation. She fights using the "Red Key" and the "Blue Key," enforcing the "Knox's Decalogue" as absolute laws that cannot be violated by magic or mystery.

"It is FORBIDDEN for the detective to be the culprit. It is FORBIDDEN for secret passages to exist. All according to the Knox's Ten Commandments."`
          ]
        }
      ]
    }
  ],

  // --- TIPS ÚNICOS DEL CAPÍTULO 5 ---
  tips: [
    {
      title: "Knox's Decalogue",
      style: "tip-rules",
      pages: [
        `A set of ten rules defined by Ronald Knox for detective fiction. In this game, they function as absolute laws that the mystery must follow.

1. It is forbidden for the culprit to be anyone not mentioned in the early part of the story.
2. It is forbidden for supernatural or mysterious agencies to be employed.
3. It is forbidden for more than one secret room or passage to exist...`,
        `Dlanor A. Knox uses these commandments as conceptual weapons to deny the existence of magic. If a situation violates any of these rules, the "Red Truth" can be used to destroy the illusion instantly.`
      ]
    },
    {
      title: "The Detective's Authority",
      style: "tip-detective",
      pages: [
        `A special privilege granted to Furudo Erika as the "detective" of the board.

The detective is guaranteed to never be the culprit, and all information they perceive is guaranteed to be objective truth. Furthermore, the detective has the right to inspect all crime scenes and demand cooperation from all pieces on the board.`,
        `As long as Erika maintains this authority, she is the most powerful "human" force in the game.`
      ]
    },
    {
      title: "The Man from 19 Years Ago",
      style: "tip-mystery",
      pages: [
        `A mysterious figure who contacts Natsuhi Ushiromiya through the internal phone system.

He claims to be the "true" successor of the Ushiromiya family and knows secrets that only Natsuhi and Kinzo should know. His existence threatens to tear apart the delicate lies that Natsuhi has constructed to keep the family together.`
      ]
    }
  ]
};