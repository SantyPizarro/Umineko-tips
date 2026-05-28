export const ep7 = {
  id: 7,
  title: "Requiem of the Golden Witch",
  background: "assets/backgrounds/mansion_night_funeral.png",
  backgroundFantasy: "assets/backgrounds/tea_party_hall.png",

  // ── MODO NORMAL: El tablero de Will ──────────────────────────────────────
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

He is a veteran inquisitor who has grown weary of the strict and heartless rules of the Great Court. He is invited to the fragment of Rokkenjima by Bernkastel to solve the mystery of Beatrice's death.

Unlike Erika, he seeks the "heart" of the mystery — not merely the mechanism, but the reason.

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
            `The successor to the Ushiromiya family in a world where a specific miracle occurred.

Lion is Krauss and Natsuhi's child, raised as the perfect heir. They possess a polite and dignified personality, acting as Willard's guide during the investigation.

Their very existence is a paradox that holds the key to the entire tragedy of Rokkenjima. In a world where Lion lives, the tragedy does not happen.

"In this world, I am the one who will inherit the headship. Is that... so strange?"`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep7/lion/full/lio_dead.png",
          text: [
            `Killed by Bernkastel's cat, in the fragment where the miracle did not hold.

Bernkastel chose this moment with surgical cruelty — to show that even in the best possible world, happiness is not guaranteed.

Lion's existence was a miracle. Bernkastel extinguished it to prove a point.`
          ]
        }
      ]
    },
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
            `The aged head of the Ushiromiya family.

In this seventh episode, his past is finally revealed in full — the contract with Beatrice, the origin of the gold, the secret of the child he could not protect.

He is, in the end, the origin of everything. His love, his obsession, and his guilt created the tragedy that followed.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kinzo/full/kin dead.png",
          text: [
            `Already dead before the conference begins.

But his ghost lingers over every game that has ever been played on this island.

He never stopped looking for Beatrice. In some worlds, he found her.`
          ]
        }
      ]
    },
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
            `Krauss's wife.

In this seventh episode, her connection to the "man from nineteen years ago" is given context. A terrible secret from her past — one she buried deeply — is finally revealed.

She did not know what she was doing. But she did it.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/natsu/full/nat dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

She carried a secret for nineteen years. It killed her in the end — not as a murderer's weapon, but as the original cause of everything.`
          ]
        }
      ]
    },
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
            `Kinzo's first child.

He has always been the one who leads the family conference. He has always been the one the others resent.

In this episode, the camera finally turns away from him. His role in the tragedy is smaller than it seemed. The real story was never about him.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/krauss/full/kla dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He never did get to develop that resort.`
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
            `Kinzo's second child.

In this seventh episode, her role is minimal. The true story lies elsewhere.

But somewhere, in another fragment, she is the sole survivor. And she carries the weight of that survival every day for the rest of her life.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/eva/full/eva dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

In this world, she did not survive. In another world, she wishes she hadn't.`
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
            `Kinzo's third child.

In this seventh episode, his secret about Battler's true parentage is finally given more context. It was something he was too proud, too cowardly, and too late to say.

Some fathers never find the right words. He was one of them.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/rudo/full/rud dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He ran out of time to say what needed to be said. Again.`
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
            `Kinzo's fourth child.

She is by far the youngest child of the four siblings. It seems that this gives her a weaker position at the family conference.

In this episode, the truth of Beatrice's past is finally told. Rosa plays a small but crucial role in that history.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/rosa/full/ros dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

She once met Beatrice in the woods. She never knew what that encounter meant.`
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
            `Eva's husband.

He came to this island year after year, bringing warmth to a cold family gathering. He never suspected how deep the roots of the tragedy went.

In this episode, the truth finally surfaces. His cheerfulness was never a mask. It was just who he was.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/hide/full/hid dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He died, as he lived, not knowing the full truth.`
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
            `Rudolf's second wife.

She had already worked alongside him for some time before the death of his first wife, at which time she openly took the position of his wife.

In this episode, a fragment of the truth about Battler's birth — and what that means for Kyrie — begins to surface.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kyrie/full/kir dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

She was chosen by the Demons' Roulette.
That's all there is to it.`
          ]
        }
      ]
    },
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
            `Rudolf's son.

In this seventh episode, he is largely absent from the main narrative. Willard H. Wright takes his place as the human seeking truth.

But everything that Willard uncovers is ultimately about Battler — about who he is, where he came from, and why Beatrice chose him.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/battler/full/but dead.png",
          text: [
            `Missing.

The truth has been found. The mystery has been solved.

Now all that remains is for someone to accept it.`
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
            `Krauss and Natsuhi's daughter.

She was born with weak bronchi and is sometimes assailed by sudden asthma attacks.

She has no connection to the central mystery of this episode. She simply lives, and loves, and hopes.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/jessica/full/jes dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

She never got to say goodbye to Kanon.`
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
            `Eva and Hideyoshi's son.

He is the eldest of the four grandchildren and is a hard-working, promising young man who is already helping with his father's company.

He is deeply in love with Shannon and intends to marry her.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/george/full/geo dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He never got to marry Shannon.`
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
            `Rosa's daughter.

She has a very strong interest in the occult and is a firm believer in the existence of the witch Beatrice.

She often speaks in a way that is unusual for her age, which leads to her being scolded by her mother.

"Uu-uu!"`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/maria/full/mar dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

She believed in Beatrice until the very end. And Beatrice believed in her.`
          ]
        }
      ]
    },
    {
      id: "genji",
      name: "Ushiromiya Genji",
      portrait: "assets/characters/ep1/genji/portrait/gen_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/genji/full/gen copy.png",
          text: [
            `The leader of the servants who work for the Ushiromiya family.

He has served Kinzo longer than any other and is the person most trusted by that old man.

In this seventh episode, the depth of his devotion and his secret role in Kinzo's affairs is finally made clear.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/genji/full/gen dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He was the first. He served the longest. He knew more than anyone.

He kept all of it secret until the end.`
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
            `A young, but experienced servant.

In this seventh episode, the truth of who Shannon really is — and who she shares her existence with — is finally and definitively revealed.

It is not a comfortable truth. But it is the truth.

Furthermore, Shannon is nothing more than a pseudonym that she uses when on duty, not her real name.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/shannon/full/sha dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

Don't worry. Everyone will be revived in the Golden Land.

And in the Golden Land, she does not have to choose.`
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
            `A young servant.

He performs his duties silently and diligently, but is not so highly regarded as a servant due to his unsociable nature.

In this seventh episode, the truth of who Kanon really is — and who he shares his existence with — is finally and definitively revealed.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kanon/full/kan dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

Furniture, to the last.

And yet he was never just furniture. That was always the point.`
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
            `A servant hired as a cook.

He hasn't served this family long, but through his earlier jobs and previous experience, he has cultivated a talent for entertaining guests.

Because of this, he is very highly regarded as a servant.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/gohda/full/goh dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He cooked his last dinner for this family.`
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
          image: "assets/characters/ep1/kuma/full/kum copy.png",
          text: [
            `The elderly woman is a part-timer who has served the family for a great many years in total.

She is crafty and more than competent when it comes to performing her duties, but because of her chattiness and love of rumors, she is not highly regarded as a servant.

In this seventh episode, her other identity — the one she shared with Virgilia — is finally acknowledged.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kuma/full/kum dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

She watched over the servants for years. She knew everything, and said nothing.`
          ]
        }
      ]
    },
    {
      id: "nanjo",
      name: "Family Doctor Nanjo",
      portrait: "assets/characters/ep1/nanjo/portrait/nan_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep1/nanjo/full/nan copy.png",
          text: [
            `Kinzo's attending physician and long time friend.

He once ran a hospital on Niijima, but he turned it over to his son and now enjoys his old age in peace.

Now that Kinzo's constant suspicion has reached extraordinary heights, Nanjo is one of the very few people he trusts.

In this seventh episode, the scope of what he knew — and chose not to say — becomes apparent.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/nanjo/full/nan dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He and Kinzo had been friends for decades. He kept the old man's darkest secrets. He took them with him.`
          ]
        }
      ]
    }
  ],

  // ── MODO FANTASY: Meta-mundo / Tea Party ─────────────────────────────────
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

A white, doll-like figure who acts as the storyteller for the events leading up to the tragedy. She exists to relay the truth of the culprit's heart to Willard and Lion.

She is the essence of the witch before the "Golden" legend was added — the real person, not the mythologized goddess.

"Please, listen to my story. This is the truth of the witch who lived and died in a cage of gold."`
          ]
        }
      ]
    },
    {
      id: "bernkastel",
      name: "Bernkastel",
      portrait: "assets/characters/ep7/bern/portrait/ber_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep7/bern/full/ber_tea.png",
          text: [
            `The Witch of Miracles, acting as the host of the Tea Party.

In this episode, her cruelty reaches its peak. She forces the audience to witness the "guts" of the mystery — the ugly, human, non-magical truth.

She invited Willard to solve the mystery. But she also prepared something else: a final cruelty aimed at Lion.

"Did you think this would be a happy ending? How naive. Let's open the gift box and see the beautiful tragedy inside!"`
          ]
        }
      ]
    },
    {
      id: "willard_meta",
      name: "Willard H. Wright",
      portrait: "assets/characters/ep7/will/portrait/wil_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep7/will/full/wil_copy.png",
          text: [
            `A former Chief Inquisitor of the SSVD.

In the meta-world, he confronts Bernkastel directly. He solved the mystery she put before him — but he refuses to give her the satisfaction she was looking for.

He found the truth. And having found it, he chose to bury it with respect rather than display it as a trophy.

"I've read the heart of this game. I won't let you use it as a weapon against someone who loved her."`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "The Vanishing of the Witch",
      style: "tip-meta",
      pages: [
        `The central theme of the seventh game.

Now that the mystery has been solved by Willard H. Wright, the "magic" that covered Rokkenjima begins to peel away. The witch Beatrice is no longer an antagonist, but a victim whose life is being dissected for the sake of the truth.`,
        `When the illusion is completely denied, all that remains is the sorrow of a single person.

The witch was always a person. That was never the question.

The question was whether that person could be loved despite everything they had done.`
      ]
    },
    {
      title: "The SSVD",
      style: "tip-rules",
      pages: [
        `The Seventh District Enforcement Agency of the Great Court of Heaven.

A group of inquisitors who specialize in investigating and punishing heresies within the world of mysteries. While the Eisern Jungfrau (Dlanor's group) focuses on the Knox's Decalogue, the SSVD is known for its absolute and merciless adherence to the Van Dine's Commandments.

Willard H. Wright was their former Chief Inquisitor before he resigned.`
      ]
    },
    {
      title: "Van Dine's Commandments",
      style: "tip-rules",
      pages: [
        `A set of twenty rules for detective fiction established by S.S. Van Dine.

In this game, they serve as the primary weapon of Willard H. Wright. These rules are even stricter than Knox's.

Among the most relevant: the prohibition on love interest as a motive, the requirement that the culprit must be named early, and the principle that the detective must not withhold information from the reader.`,
        `Willard uses these rules not to deny the witch's existence, but to find the human truth beneath the magic.

His goal is not to destroy the game. It is to honor the person at its center by understanding her completely.

That is what separates him from Erika.`
      ]
    }
  ]
};

const EP7_PC_SOURCE = "local-original-chiru-pc-archives";
const EP7_EN_SOURCE = "local-original-chiru-pc-archives-en";

const EP7_PC_NORMAL = {
  characterBackdrop: "assets/ui/characters/ep7/backdrop/EP7_01.png",
  textPanel: "assets/ui/characters/ep7/text/txt_def2.png",
  flourish: "assets/ui/hana3_back.png"
};

const EP7_PC_FANTASY = {
  characterBackdrop: "assets/ui/characters/ep7_2/backdrop/cha_back26.png",
  textPanel: "assets/ui/characters/ep7/text/txt_def2.png",
  flourish: "assets/ui/hana3_back.png"
};

const EP7_NORMAL_PC = {
  kinzo: pc7("kin", [17, 37], 380, [st7("ep5", "kin_l", "kin", "ep5", "kin_1"), st7("ep7", "ki2_l", "ki2", "ep7", "ki2_1")]),
  krauss: pc7("kla", [62, 37], 425, [st7("ep5", "kla_l", "kla", "ep5", "kla_1")]),
  natsuhi: pc7("nat", [106, 37], 430, [st7("ep5", "nat_l", "nat", "ep5", "nat_1")]),
  jessica: pc7("jes", [150, 37], 420, [st7("ep5", "jes_l", "jes", "ep7", "jes_1")]),
  lion: pc7("rio", [17, 82], 440, [st7("ep7", "rio_l", "rio", "ep7", "rio_1")]),
  eva: pc7("eva", [62, 82], 440, [st7("ep5", "eva_l", "eva", "ep5", "eva_1")]),
  hideyoshi: pc7("hid", [106, 82], 415, [st7("ep5", "hid_l", "hid", "ep5", "hid_1")]),
  george: pc7("geo", [150, 82], 435, [st7("ep5", "geo_l", "geo", "ep7", "geo_1")]),
  nanjo: pc7("nan", [17, 126], 425, [st7("ep5", "nan_l", "nan", "ep5", "nan_1")]),
  rudolf: pc7("rud", [62, 126], 455, [st7("ep5", "rud_l", "rud", "ep5", "rud_1")]),
  kyrie: pc7("kir", [106, 126], 455, [st7("ep5", "kir_l", "kir", "ep5", "kir_1")]),
  battler: pc7("but", [150, 126], 455, [st7("ep5", "but_l", "but", "ep7", "but_1")]),
  genji: pc7("gen", [17, 170], 455, [st7("ep5", "gen_l", "gen", "ep5", "gen_1")]),
  rosa: pc7("ros", [62, 170], 445, [st7("ep5", "ros_l", "ros", "ep5", "ros_1")]),
  maria: pc7("mar", [150, 170], 390, [st7("ep5", "mar_l", "mar", "ep5", "mar_1")]),
  shannon: pc7("sha", [17, 214], 430, [st7("ep5", "sha_l", "sha", "ep5", "sha_1")]),
  kanon: pc7("kan", [62, 214], 460, [st7("ep5", "kan_l", "kan", "ep5", "kan_1")]),
  gohda: pc7("goh", [106, 214], 450, [st7("ep5", "goh_l", "goh", "ep5", "goh_1")]),
  kumasawa: pc7("kum", [150, 214], 440, [st7("ep5", "kum_l", "kum", "ep5", "kum_1")])
};

const EP7_FANTASY_PC = {
  bernkastel: pc7("ber", [17, 35], 430, [st7("ep5_2", "ber_l", "ber", "ep7_2", "ber_1")]),
  clair: pc7("cur", [150, 35], 393, [st7("ep7_2", "cur_l", "cur_1", "ep7_2", "cur_1")]),
  zepar_furfur: pc7("zf", [17, 215], 403, [st7("ep6_2", "zf_l", "zep_1", "ep6_2", "zep_1")]),
  willard: pc7("wil", [17, 78], 433, [st7("ep7_2", "wil_l", "wil_1", "ep7_2", "wil_1")]),
  maria_fantasy: pc7("mar", [62, 121], 403, [st7("ep7_2", "mar_l", "mar", "ep5_2", "mar_1", "ep5_2")]),
  beatrice: pc7("bea", [106, 121], 380, [
    st7("ep5_2", "bea_l", "bea", "ep7_2", "bea_2", "ep5_2", 380),
    st7("ep7_2", "bea_l", "bea_1", "ep7_2", "bea_1", "ep7_2", 480)
  ]),
  furnitures: pc7("w", [150, 168], 360, [st7("ep6_2", "w_l", "wal", "ep5_2", "wal_1", "ep5_2")]),
  stakes: pc7("rg", [150, 215], 420, [
    st7("ep5_2", "rg_l", "rg1", "ep5_2", "rg1_1"),
    st7("ep7_2", "rg_l2", "rg1", "ep5_2", "rg1_1")
  ]),
  zepar: pc7("zep", [17, 568], 403, [st7("ep6_2", "zep_l", "zep_1", "ep6_2", "zep_1")]),
  furfur: pc7("fur", [17, 615], 403, [st7("ep6_2", "fur_l", "fur_1", "ep6_2", "fur_1")]),
  virgilia: pc7("wal", [17, 578], 360, [st7("ep5_2", "wal_l", "wal", "ep5_2", "wal_1")]),
  ronove: pc7("ron", [17, 621], 420, [st7("ep5_2", "ron_l", "ron", "ep5_2", "ron_1")]),
  gaap: pc7("gap", [17, 668], 415, [st7("ep5_2", "gap_l", "gap", "ep5_2", "gap_1")])
};

const EP7_TIP_PAGE_COUNTS = [1];

ensureEp7Characters();
ensureEp7FantasyCharacters();
ensureEp7Tips();

ep7.pc = EP7_PC_NORMAL;
ep7.modes = {
  normal: {
    background: ep7.background,
    characters: ep7.characters,
    tips: ep7.tips,
    pc: EP7_PC_NORMAL
  },
  fantasy: {
    background: ep7.backgroundFantasy,
    characters: ep7.charactersFantasy,
    tips: ep7.tips,
    pc: EP7_PC_FANTASY
  }
};

applyEp7PcCharacters(ep7.characters, EP7_NORMAL_PC);
applyEp7PcCharacters(ep7.charactersFantasy, EP7_FANTASY_PC);
applyEp7Tips(ep7.tips);

function pc7(code, grid, tachiX, states) {
  return { code, grid, tachiX, states };
}

function st7(folder, icon, tachi, textFolder, text, tachiFolder = folder, tachiX = null) {
  return { folder, icon, tachi, textFolder, text, tachiFolder, tachiX };
}

function ensureEp7Characters() {
  const names = Object.fromEntries(ep7.characters.map(character => [character.id, character.name]));
  names.lion ||= "Ushiromiya Lion";
  ep7.characters = Object.entries(EP7_NORMAL_PC).map(([id, pc]) => ({
    id,
    name: names[id] || id,
    portrait: icon7(pc.states[0]),
    currentPhase: 0,
    states: pc.states.map((statePc, index) => ({
      phase: index === 0 ? "active" : "alternate",
      image: tachi7(statePc),
      pages: [names[id] || id]
    }))
  }));
}

function ensureEp7FantasyCharacters() {
  const names = {
    bernkastel: "Bernkastel",
    clair: "Clair Vaux Bernardus",
    zepar_furfur: "Zepar and Furfur",
    willard: "Willard H. Wright",
    maria_fantasy: "Ushiromiya Maria",
    beatrice: "Beatrice",
    furnitures: "Furnitures",
    stakes: "The Seven Stakes of Purgatory",
    zepar: "Zepar",
    furfur: "Furfur",
    virgilia: "Virgilia",
    ronove: "Ronove",
    gaap: "Gaap"
  };

  ep7.charactersFantasy = Object.entries(EP7_FANTASY_PC).map(([id, pc]) => ({
    id,
    name: names[id],
    portrait: icon7(pc.states[0]),
    currentPhase: 0,
    states: pc.states.map(statePc => ({
      phase: "active",
      image: tachi7(statePc),
      pages: [names[id]]
    })),
    ...(id === "zepar_furfur" ? { subCharacters: makeEp7ZeparFurfurSubCharacters() } : {}),
    ...(id === "furnitures" ? { subCharacters: makeEp7FurnitureSubCharacters() } : {}),
    ...(id === "stakes" ? { subCharacters: makeEp7StakeSubCharacters() } : {})
  }));
}

function ensureEp7Tips() {
  ep7.tips = ep7.tips.slice(0, EP7_TIP_PAGE_COUNTS.length);
  while (ep7.tips.length < EP7_TIP_PAGE_COUNTS.length) {
    const tipNumber = ep7.tips.length + 1;
    ep7.tips.push({
      title: `EP7 Tip ${tipNumber}`,
      style: "tip-lore",
      pages: [`EP7 Tip ${tipNumber}`],
      verified: false
    });
  }
}

function applyEp7PcCharacters(characters, pcMap) {
  for (const character of characters || []) {
    const pc = pcMap[character.id];
    if (!pc) continue;
    character.pc = {
      sourceUrl: EP7_PC_SOURCE,
      code: pc.code,
      gridX: pc.grid[0],
      gridY: pc.grid[1],
      tachiX: pc.tachiX,
      iconAlive: icon7(pc.states[0]),
      iconDead: icon7(pc.states[pc.states.length - 1]),
      changeable: pc.states.length > 1
    };

    for (const [index, item] of (character.states || []).entries()) {
      const statePc = pc.states[index] || pc.states[0];
      item.pc = {
        sourceUrl: EP7_PC_SOURCE,
        icon: icon7(statePc),
        tachi: tachi7(statePc),
        referenceTextImage: text7(statePc),
        tachiX: statePc.tachiX ?? pc.tachiX
      };
    }
  }
}

function icon7(item) {
  return `assets/ui/characters/${item.folder}/icons/${item.icon}.png`;
}

function tachi7(item) {
  return `assets/ui/characters/${item.tachiFolder}/tachi/${item.tachi}.png`;
}

function text7(item) {
  return `assets/ui/characters/${item.textFolder}/reference-text/${item.text}.png`;
}

function makeEp7ZeparFurfurSubCharacters() {
  return [
    ["Zepar", "zep_1", "zep_1"],
    ["Furfur", "fur_1", "fur_1"]
  ].map(([name, tachi, text]) => ({
    name,
    image: `assets/ui/characters/ep6_2/tachi/${tachi}.png`,
    pages: [name],
    pc: {
      tachi: `assets/ui/characters/ep6_2/tachi/${tachi}.png`,
      referenceTextImage: `assets/ui/characters/ep6_2/reference-text/${text}.png`,
      tachiX: 403
    }
  }));
}

function makeEp7FurnitureSubCharacters() {
  return [
    ["Virgilia", "wal", "wal_1", 360],
    ["Ronove", "ron", "ron_1", 420],
    ["Gaap", "gap", "gap_1", 415]
  ].map(([name, tachi, text, tachiX]) => ({
    name,
    image: `assets/ui/characters/ep5_2/tachi/${tachi}.png`,
    pages: [name],
    pc: {
      tachi: `assets/ui/characters/ep5_2/tachi/${tachi}.png`,
      referenceTextImage: `assets/ui/characters/ep5_2/reference-text/${text}.png`,
      tachiX
    }
  }));
}

function makeEp7StakeSubCharacters() {
  return [
    ["Lucifer", "rg1"],
    ["Leviathan", "rg2"],
    ["Satan", "rg3"],
    ["Belphegor", "rg4"],
    ["Mammon", "rg5"],
    ["Beelzebub", "rg6"],
    ["Asmodeus", "rg7"]
  ].map(([name, code]) => {
    const defaultPc = {
      tachi: `assets/ui/characters/ep5_2/tachi/${code}.png`,
      referenceTextImage: `assets/ui/characters/ep5_2/reference-text/${code}_1.png`,
      tachiX: 420
    };
    const ep7Pc = {
      tachi: `assets/ui/characters/ep7_2/tachi/${code}.png`,
      referenceTextImage: `assets/ui/characters/ep5_2/reference-text/${code}_1.png`,
      tachiX: 420
    };

    return {
      name,
      image: defaultPc.tachi,
      pages: [name],
      pc: defaultPc,
      variants: [
        { image: defaultPc.tachi, pages: [name], pc: defaultPc },
        { image: ep7Pc.tachi, pages: [name], pc: ep7Pc }
      ]
    };
  });
}

function applyEp7Tips(tips) {
  for (const [index, tip] of (tips || []).entries()) {
    const tipNumber = index + 1;
    const pageCount = EP7_TIP_PAGE_COUNTS[index] || 1;
    tip.pages = Array.from({ length: pageCount }, (_, pageIndex) => tip.pages?.[pageIndex] || tip.title);
    Object.assign(tip, {
      id: `ep7-tip-${tipNumber}`,
      episode: 7,
      unlockOrder: tipNumber,
      buttonImage: `assets/ui/tips/ep7/buttons/tips7_${tipNumber}.png`,
      referenceButtonImage: `assets/ui/tips/ep7/buttons/tips7_${tipNumber}.png`,
      background: "assets/ui/tips/ep1/backdrop/tips1_back.png",
      pageImages: Array.from({ length: pageCount }, (_, pageIndex) => `assets/tips/ep7/${tipNumber}_${pageIndex + 1}.png`),
      referencePageImages: Array.from({ length: pageCount }, (_, pageIndex) => `assets/tips/ep7/${tipNumber}_${pageIndex + 1}.png`),
      sourceUrl: EP7_EN_SOURCE,
      verified: false
    });
  }
}
