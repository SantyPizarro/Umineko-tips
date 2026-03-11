export const ep8 = {
  id: 8,
  background: "assets/backgrounds/golden_land_final.png",
  backgroundFantasy: "assets/backgrounds/city_of_books.png",

  charactersFantasy: [
    {
      id: "battler_beato_final",
      name: "Battler & Beatrice",
      portrait: "assets/characters/ep8/batbea/portrait/bb_final.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep8/batbea/full/bb_full.png",
          text: [
            `The Golden Sorcerer and the Golden Witch.
            
Having reconciled their hearts, they stand together to defend the "Golden Land" from the cold, heartless truth that seeks to destroy it. They represent the miracle that occurs when two people understand each other perfectly through a game.

"This isn't a game for someone who just wants to find a culprit. This is our story. And we won't let you trample over it!"`
          ]
        }
      ]
    },
    {
      id: "ange_gold",
      name: "Ushiromiya Ange (Witch of Resurrection)",
      portrait: "assets/characters/ep8/ange/portrait/ang_final.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep8/ange/full/ang_golden_witch.png",
          text: [
            `The final protagonist. Ange has finally reached the truth of 1986 and 1998.

She is given the ultimate choice: to accept a painful reality (Trick) or to believe in a beautiful possibility (Magic). As the Witch of Resurrection, she has the power to give a happy ending to the souls of her family, even if it only exists within the "Golden Land."

"I am the one who will decide the end of this tale. Not as a victim, but as the one who remembers them with love."`
          ]
        }
      ]
    },
    {
      id: "bernkastel_final",
      name: "Bernkastel (Witch of Miracles)",
      portrait: "assets/characters/ep8/bern/portrait/ber_final.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep8/bern/full/ber_monster.png",
          text: [
            `The ultimate antagonist of the series.

Bernkastel has dropped all pretenses and seeks only to expose the most "boring" and cruelest truth possible to end her eternal boredom. She views the Ushiromiya tragedy as a "cat-box" that she will tear open with her bare hands, regardless of the pain it causes.

"I'll show you the truth you've been running away from. It's not golden, and it's not magic. It's just a lonely, pathetic corpse."`
          ]
        }
      ]
    },
    {
      id: "lambdadelta_hero",
      name: "Lambdadelta",
      portrait: "assets/characters/ep8/lambda/portrait/lam_hero.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep8/lambda/full/lam_full_power.png",
          text: [
            `The Witch of the Absolute. 

In a surprising turn, she acts as a protector of the game's "heart" against Bernkastel's nihilism. She uses her absolute power to give Ange and Battler a chance to fight back, proving that even a witch of certainty can believe in miracles.

"I am the witch who grants that 'effort is rewarded'! If you have the guts to fight for your truth, I'll back you up with everything I've got!"`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "The Golden Land's Final Banquet",
      style: "tip-gold",
      pages: [
        `The final stage where the fate of the Ushiromiya family is decided. 
        
It is no longer a place of sacrifice, but a sanctuary for the souls who died on Rokkenjima. It exists only as long as someone remembers them with "love." If the cold truth of the public is accepted, this land and everyone in it will vanish forever.`,
        `The banquet represents the final celebration and the final goodbye.`
      ]
    },
    {
      title: "Magic vs. Trick",
      style: "tip-meta",
      pages: [
        `The core conflict of the series' conclusion. 
        
'Trick' represents the logical, cold reality where there is no mystery, only a murderer and a motive. 'Magic' represents the choice to believe in a layer of meaning beyond the physical facts—the 'heart' of the story.`,
        `Neither is objectively 'wrong', but only one can provide the 'Golden Truth' that brings peace to Ange's soul.`
      ]
    },
    {
      title: "The Golden Truth",
      style: "tip-red-truth",
      pages: [
        `A truth that can only be reached when "love" is present.
        
It is represented by the color gold and is said to be more powerful than even the Red Truth. Its power depends entirely on the observer's perspective; it is a truth that is true because those involved have agreed to make it so.`,
        `"Without love, it cannot be seen. But with love, the truth becomes golden."`
      ]
    }
  ]
};