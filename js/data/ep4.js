export const ep4 = {
  id: 4,
  background: "assets/backgrounds/mansion_day.png",
  backgroundFantasy: "assets/backgrounds/meta_world.png",
  backgroundFuture: "assets/backgrounds/skyscraper_roof.png",

  characters: [
    {
      id: "ange_1986",
      name: "Ushiromiya Ange (1986)",
      portrait: "assets/characters/ep4/ange/portrait/ang_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep4/ange/full/ang_child.png",
          text: [
            `Rudolf and Kyrie's daughter.
            
            Because of a sudden fever, she was unable to come to Rokkenjima with the rest of her family. She is the only one of the Ushiromiya family of 1986 who was not on the island during the time of the miracle.
            
            She is still a young child, and her heart is filled with the loneliness of being left behind by her parents and her brother Battler.`
          ]
        }
      ]
    },
    {
      id: "kinzo_ep4",
      name: "Ushiromiya Kinzo",
      portrait: "assets/characters/ep4/kinzo/portrait/kin_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/kinzo/full/kin_ritual.png",
          text: [
            `The head of the Ushiromiya family.
            
            In this fourth game, he personally takes command of the ritual. He has abandoned his study and appears before his children and grandchildren, testing their "worth" to succeed him.
            
            "The time of the ceremony has come! Bring forth the sacrifices! Let the Golden Land be opened!"`
          ]
        }
      ]
    }
  ],

  charactersFantasy: [
    {
      id: "gorgon",
      name: "Gaap",
      portrait: "assets/characters/ep4/gaap/portrait/gap_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/gaap/full/gap_smug.png",
          text: [
            `The 33rd Demon of the Earl rank. A close friend of Beatrice.
            
            She has the power to manipulate "voids" or "holes," allowing her to teleport objects and people instantly across the island. Her magic is responsible for many of the "closed room" mysteries that baffle Battler.
            
            She has a very fashionable and flirtatious personality, but her tactical mind is sharp and deadly.`
          ]
        }
      ]
    },
    {
      id: "sakutarou",
      name: "Sakutarou",
      portrait: "assets/characters/ep4/saku/portrait/sak_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/saku/full/sak_copy.png",
          text: [
            `Maria's beloved stuffed lion, given form and soul by Beatrice's magic.
            
            In the world of magic, he is a diplomat and a protector. He holds the title of "Minister of the Kingdom of Mariage Sorciere." He has a kind and innocent heart, wanting only for Maria to be happy.
            
            "Uryuu! I'll do my best to protect Maria!"`
          ]
        }
      ]
    }
  ],

  charactersFuture: [
    {
      id: "ange_1998",
      name: "Ushiromiya Ange (1998)",
      portrait: "assets/characters/ep4/ange1998/portrait/ang_future.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep4/ange1998/full/ang_long.png",
          text: [
            `The sole survivor of the Ushiromiya family, 12 years after the incident.
            
            She has lived a life of misery under the guardianship of Eva Ushiromiya. Now, she has decided to embark on a journey to discover the truth of what happened on Rokkenjima in 1986.
            
            She has inherited the title of "Beatrice" and is known as the Witch of Resurrection.`
          ]
        }
      ]
    },
    {
      id: "mammon_ep4",
      name: "Mammon",
      portrait: "assets/characters/ep4/mammon/portrait/mam_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/mammon/full/mam_future.png",
          text: [
            `The Stake of Greed. 
            
            In the world of 1998, she becomes Ange's closest companion and تنها (only) friend. Unlike her sisters, she has developed a deep emotional bond with Ange, acting as her protector during her lonely journey to the island of truth.`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "Mariage Sorciere",
      style: "tip-lore",
      pages: [
        `An alliance of witches formed between Beatrice and Maria Ushiromiya.
        
        It is a magical covenant that allows them to share their power and recognize each other's illusions. Through this alliance, Maria's diary becomes a powerful grimoire capable of bringing her toys to life.`,
        `The primary rule of this alliance is that magic cannot exist without two people: one to perform it and one to believe in it.`
      ]
    },
    {
      title: "The Witch of Resurrection",
      style: "tip-meta",
      pages: [
        `The title inherited by Ange Ushiromiya in the world of 1998.
        
        As the Witch of Resurrection, she has the potential to bring back the "souls" of those who were lost, provided she can find the truth that allows them to exist once more.`,
        `Her power is the ultimate threat to Beatrice's game, as she seeks to deny the "catastrophe" and find a miracle.`
      ]
    }
  ]
};