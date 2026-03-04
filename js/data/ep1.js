export const ep1 = {
  id: 1,
  characters: [
    {
      id: "kinzo",
      name: "Ushiromiya Kinzo",
      portrait: "assets/characters/ep1/kinzo/portrait/kin_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/kinzo/full/kin copy.png",
          text: [
            "The head of the Ushiromiya family.",
            "Obsessed with the Golden Witch and alchemy."
          ]
        },
        {
          phase: "missing",
          image: "assets/characters/Ushiromiya Kinzo copy.png",
          text: [
            "Kinzo's whereabouts are unknown.",
            "Some claim he has not been seen for some time."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Kinzo copy.png",
          text: [
            "Kinzo is confirmed dead.",
            "His death precedes the family conference."
          ]
        }
      ]
    },

    {
      id: "beatrice",
      name: "Beatrice",
      portrait: "assets/characters/ep1/bea/portrait/bea_defb1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/bea/full/bea.png",
          text: [
            "The head of the Ushiromiya family.",
            "Obsessed with the Golden Witch and alchemy."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Kinzo copy.png",
          text: [
            "Kinzo is confirmed dead.",
            "His death precedes the family conference."
          ]
        }
      ]
    },

    // --- SIBLINGS ---

    {
      id: "krauss",
      name: "Ushiromiya Krauss",
      portrait: "assets/characters/ep1/krauss/portrait/kla_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/krauss/full/kla copy.png",
          text: [
            "Kinzo's eldest son.",
            "Struggles with business failures and inheritance pressure."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Krauss copy.png",
          text: [
            "Killed during the serial murders on Rokkenjima.",
            "His ambitions end on the island."
          ]
        }
      ]
    },
    {
      id: "eva",
      name: "Ushiromiya Eva",
      portrait: "assets/characters/ep1/eva/portrait/eva_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/eva/full/eva copy.png",
          text: [
            "Kinzo's eldest daughter.",
            "Highly intelligent and competitive."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Eva copy.png",
          text: [
            "Eva becomes one of the island's victims.",
            "Her sharp tongue falls silent."
          ]
        }
      ]
    },
    {
      id: "rudolf",
      name: "Ushiromiya Rudolf",
      portrait: "assets/characters/ep1/rudo/portrait/rud_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/rudo/full/rud copy.png",
          text: [
            "Kinzo's third child.",
            "Battler's father, charismatic but unreliable."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Rudolf copy.png",
          text: [
            "Rudolf is killed during the tragedy.",
            "His fate is sealed within the closed island."
          ]
        }
      ]
    },
    {
      id: "rosa",
      name: "Ushiromiya Rosa",
      portrait: "assets/characters/ep1/rosa/portrait/ros_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/rosa/full/ros copy.png",
          text: [
            "Kinzo's youngest daughter.",
            "Maria's strict and emotionally unstable mother."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Rosa copy.png",
          text: [
            "Rosa perishes during the murders.",
            "Her conflicts end in tragedy."
          ]
        }
      ]
    },

    // --- SPOUSES ---

    {
      id: "natsuhi",
      name: "Ushiromiya Natsuhi",
      portrait: "assets/characters/ep1/natsu/portrait/nat_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/natsu/full/nat copy.png",
          text: [
            "Krauss's wife.",
            "Serious and devoted to family honor."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Natsuhi copy.png",
          text: [
            "Natsuhi dies on the island.",
            "Her sense of duty could not save her."
          ]
        }
      ]
    },
    {
      id: "hideyoshi",
      name: "Ushiromiya Hideyoshi",
      portrait: "assets/characters/ep1/hide/portrait/hid_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/hide/full/hid copy.png",
          text: [
            "Eva's husband.",
            "A self-made businessman with a cheerful personality."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Hideyoshi copy.png",
          text: [
            "Hideyoshi becomes one of the victims.",
            "His optimism cannot avert fate."
          ]
        }
      ]
    },
    {
      id: "kyrie",
      name: "Ushiromiya Kyrie",
      portrait: "assets/characters/ep1/kyrie/portrait/kir_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/kyrie/full/kir copy.png",
          text: [
            "Rudolf's wife.",
            "Calm, logical, and sharp-minded."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Kyrie copy.png",
          text: [
            "Kyrie falls victim to the incident.",
            "Her rationality cannot overcome the mystery."
          ]
        }
      ]
    },

    // --- COUSINS ---

    {
      id: "battler",
      name: "Ushiromiya Battler",
      portrait: "assets/characters/ep1/battler/portrait/but_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/battler/full/but copy.png",
          text: [
            "Rudolf's son.",
            "Energetic and denies the existence of witches."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Battler copy.png",
          text: [
            "Battler's fate becomes part of the island tragedy.",
            "He challenges the witch's claims."
          ]
        }
      ]
    },
    {
      id: "jessica",
      name: "Ushiromiya Jessica",
      portrait: "assets/characters/ep1/jessica/portrait/jes_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/jessica/full/jes copy.png",
          text: [
            "Krauss and Natsuhi's daughter.",
            "Strong-willed and fond of rock music."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Jessica copy.png",
          text: [
            "Jessica is found murdered.",
            "Her death deepens the mystery."
          ]
        }
      ]
    },
    {
      id: "george",
      name: "Ushiromiya George",
      portrait: "assets/characters/ep1/george/portrait/geo_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/george/full/geo copy.png",
          text: [
            "Eva and Hideyoshi's son.",
            "Mature and deeply attached to Shannon."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya George copy.png",
          text: [
            "George is among the first twilight victims.",
            "His dreams end on the island."
          ]
        }
      ]
    },
    {
      id: "maria",
      name: "Ushiromiya Maria",
      portrait: "assets/characters/ep1/maria/portrait/mar_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/maria/full/mar.png",
          text: [
            "Rosa's daughter.",
            "Firm believer in the Golden Witch."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ushiromiya Maria copy.png",
          text: [
            "Maria dies in the island incident.",
            "Her devotion to magic remains haunting."
          ]
        }
      ]
    },

    // --- SERVANTS & OTHERS ---

    {
      id: "genji",
      name: "Ronoue Genji",
      portrait: "assets/characters/ep1/genji/portrait/gen_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/genji/full/gen copy.png",
          text: [
            "Kinzo's longtime head servant.",
            "Loyal and composed."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Ronoue Genji copy.png",
          text: [
            "Genji is killed during the incident.",
            "His loyalty ends in tragedy."
          ]
        }
      ]
    },
    {
      id: "shannon",
      name: "Shannon",
      portrait: "assets/characters/ep1/shannon/portrait/sha_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/shannon/full/sha.png",
          text: [
            "A servant of the Ushiromiya family.",
            "Kind-hearted and loved by George."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Shannon copy.png",
          text: [
            "Shannon is one of the first twilight victims.",
            "Her death is ritualistic."
          ]
        }
      ]
    },
    {
      id: "kanon",
      name: "Kanon",
      portrait: "assets/characters/ep1/kanon/portrait/kan_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/kanon/full/kan.png",
          text: [
            "A servant working under Genji.",
            "Reserved and emotionally distant."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Kanon copy.png",
          text: [
            "Kanon dies on the island.",
            "His fate intertwines with Jessica."
          ]
        }
      ]
    },
    {
      id: "gohda",
      name: "Gohda",
      portrait: "assets/characters/ep1/gohda/portrait/goh_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/gohda/full/goh copy.png",
          text: [
            "The family chef.",
            "Proud of his culinary skills."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Gohda copy.png",
          text: [
            "Gohda becomes one of the victims.",
            "The kitchen falls silent."
          ]
        }
      ]
    },
    {
      id: "kumasawa",
      name: "Kumasawa",
      portrait: "assets/characters/ep1/kuma/portrait/kum_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/kuma/full/kum_defa1.png",
          text: [
            "An elderly servant.",
            "Enjoys telling mysterious stories."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Kumasawa copy.png",
          text: [
            "Kumasawa dies in the tragedy.",
            "Her tales end abruptly."
          ]
        }
      ]
    },
    {
      id: "nanjo",
      name: "Nanjo",
      portrait: "assets/characters/ep1/nanjo/portrait/nan_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/nanjo/full/nan copy.png",
          text: [
            "The family doctor.",
            "A close associate of Kinzo."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/Nanjo copy.png",
          text: [
            "Nanjo is killed during the later twilights.",
            "Even the doctor cannot escape death."
          ]
        }
      ]
    }
  ],

  tips: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "There are 18 humans present during the 1986 family conference.",
    "The epitaph describes the path to the hidden gold.",
    "A typhoon isolates the island from the mainland.",
    "The Golden Witch Beatrice is said to grant gold and take lives.",
    "The murders follow the sequence of the epitaph's twilights."
  ]
};