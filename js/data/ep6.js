export const ep6 = {
  id: 6,
  title: "Dawn of the Golden Witch",
  background: "assets/backgrounds/mansion_day.png",
  backgroundFantasy: "assets/backgrounds/meta_world_dawn.png",
  backgroundFuture: "assets/backgrounds/skyscraper_roof_night.png",

  // ── MODO NORMAL: 1986 (Tablero de Battler) ────────────────────────────────
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
            `The aged head of the Ushiromiya family.

Even though it has already been announced that he has just a few months to live, he is brimming with energy. Though he amassed a vast fortune in the past, he never made any announcements regarding the inheritance, which worries his children.

He is strongly influenced by the West, and is a rabid fan of the occult.
His study is packed with mysterious grimoires.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kinzo/full/kin dead.png",
          text: [
            `Already dead before the conference begins.

The secret of his death is still being maintained by certain members of the household. It is the cornerstone of the lie that holds everything together — and the first crack in the dam.`
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

She manages the household of the Ushiromiya family in place of her husband, who takes little interest in such matters. She was in charge of all preparations and arrangements for this family conference.

She possesses a strong sense of responsibility, and a great deal of pride.

However, neither her husband nor her siblings understand her very well, so her position is far from enviable.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/natsu/full/nat dead.png",
          text: [
            `Found dead after Erika's sealed-room investigation closed in around her.

Once again, she is the one who cannot escape suspicion. Once again, her pride becomes her cage.`
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

As the oldest of the four siblings, he leads the family conference. However, the other siblings think he is trying to get all of the inheritance for himself, and this further strains the tensions between them.

He is a real estate investor and has put a lot of money into the development of a resort. However, his results have been harshly criticized.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/krauss/full/kla dead.png",
          text: [
            `Found dead.

He was killed during the events on the island. This time, the Game Master chose to construct something more personal than mere sacrifice.`
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

She is hostile towards her brother Krauss and opposes him whenever she can.

She comes to this conference, as always, looking for something to claim. What she finds is something entirely different.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/eva/full/eva dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

In another world, she was the one who escaped. In this one, she was not.`
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

In his youth, he was quite a womanizer and even now, he is known for his fast talk and showmanship.

He still intends to tell Battler his secret. He has not found the right moment yet.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/rudo/full/rud dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He ran out of time to say what needed to be said.`
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

She manages a design company, but she has yet to start taking it seriously, and its financial situation is far from favorable.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/rosa/full/ros dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

Another game; another night on Rokkenjima.`
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
            `Eva's husband. He was adopted into the family upon their marriage.

He is the president of a successful mid-sized restaurant chain. Due to his cheerful personality, he is often seen as a peacemaker during the family conference.

Among the siblings' spouses, who are often viewed as outsiders, his successful career and gentle nature earn him a degree of respect.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/hide/full/hid dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He died, as he lived, trying to keep the peace.`
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

She has served as Rudolf's right hand in several shady pieces of business, guiding them to success. She is quick-thinking and well-trusted by her husband.`
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
          image: "assets/characters/ep6/battler/full/but_gm_full.png",
          text: [
            `The Golden Sorcerer. The Game Master of the sixth game.

Having understood the "heart" of Beatrice's game, Battler has inherited her powers. He now sits on the side of the creator, attempting to craft a game that honors Beatrice's original intent while challenging Erika's ruthless logic.

But a Game Master who falls into a Logic Error has no escape.

"I finally understand. This is the game you wanted me to see, isn't it, Beato?"`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/battler/full/but dead.png",
          text: [
            `Trapped in a Logic Error.

Erika's sealed-room trap was perfect. The Game Master's own board became a contradiction he could not escape.

The only solution was a miracle. And miracles require someone to believe in them.`
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

In the absence of any irregularities, it is thought that she will eventually inherit the headship of the Ushiromiya family. However, she seems to have no interest in all of this.

She was born with weak bronchi and is sometimes assailed by sudden asthma attacks.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/jessica/full/jes dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

The Trial of Lovers left no room for anything but sacrifice.`
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

He is deeply in love with Shannon and intends to marry her.

In this game, their love is put to the ultimate test — not as murder victims, but as participants in the Trial of Lovers.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/george/full/geo dead.png",
          text: [
            `Found dead.

The Trial of Lovers demanded one pair. He and Shannon were not the ones chosen.

Or perhaps they were, and chose a different kind of answer.`
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

Beatrice is gone. But Maria always believed in her. And perhaps that is enough.`
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

Since he serves Kinzo directly, Krauss and Natsuhi think of him as being a spy for Kinzo.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/genji/full/gen dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He served his lord to the end. Even after his lord was already gone.`
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

She's normally calm and performs her job efficiently, but she messes up when she gets nervous.

Furthermore, Shannon is nothing more than a pseudonym that she uses when on duty, not her real name.

In the Trial of Lovers, her love for George is pitted against Jessica's love for Kanon. Only one pair can exist.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/shannon/full/sha dead.png",
          text: [
            `Found dead.

Erika sealed the room and left no escape. Shannon's body was found where it should not have been possible for it to be.

This is the Logic Error. This is Battler's cage.`
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

In the Trial of Lovers, his love for Jessica is pitted against George's love for Shannon. Only one pair can exist.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kanon/full/kan dead.png",
          text: [
            `Found dead — or more precisely, found missing.

Erika declared him dead, sealed the room, and then found him gone.

But a sealed room with no exit means he cannot have left. And he cannot have been there.
The Logic Error is born.`
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
            `The elderly woman is a part-timer who, though she has quit her job several times along the way, has served the family for a great many years in total.

She is crafty and more than competent when it comes to performing her duties, but because of her chattiness and love of rumors, she is not highly regarded as a servant.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kuma/full/kum dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

She had seen many things in her years. She kept all of them quiet.`
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

Now that Kinzo's constant suspicion has reached extraordinary heights, Nanjo is one of the very few people he trusts.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/nanjo/full/nan dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He came to this island to care for a friend. As always, that was not enough.`
          ]
        }
      ]
    },
    {
      id: "erika",
      name: "Furudo Erika",
      portrait: "assets/characters/ep5/erika/portrait/eri_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep6/erika/full/eri_witch_full.png",
          text: [
            `The Witch of Truth. Bernkastel's piece.

She returns in this sixth game with a deeper authority and a crueler purpose. She is no longer content to merely investigate — she wants to tear the game board apart and expose the Game Master's failure.

She uses sealing tape, detective's authority, and the Red Truth as weapons. Her goal is not to find the culprit. It is to prove that Battler cannot protect what he loves.

"Without love, it cannot be seen? With my truth, I shall rip that 'heart' of yours to shreds!"`
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

Ronove and Virgilia look at her with a sadness she does not understand.

"If it's for my Master's sake... I'll try my best to be a witch."`
          ]
        }
      ]
    }
  ],

  // ── MODO FANTASY: Meta-mundo ──────────────────────────────────────────────
  charactersFantasy: [
    {
      id: "battler_gm",
      name: "Battler (Game Master)",
      portrait: "assets/characters/ep6/battler/portrait/but_gm.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep6/battler/full/but_gm_full.png",
          text: [
            `The Golden Sorcerer and current Game Master.

Having understood the "heart" of Beatrice's game, Battler has inherited her powers and the title of the Golden Witch. He now sits on the side of the creator.

He is trying to reconstruct the game that Beatrice originally intended — a game with a "heart." Not a murder mystery. A love story.

"I finally understand. This is the game you wanted me to see, isn't it, Beato?"`
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
            `The Witch of Miracles, who has lived for a thousand years.

In this sixth game, her cruelty is more focused than ever. She views Battler's attempt to create a "witch's game with a heart" as something that must be destroyed.

She cannot allow the game to end with love winning. That would be intolerable.

"You want to create a witch with a heart? How touching. Let me tear it apart."`
          ]
        }
      ]
    },
    {
      id: "lambdadelta",
      name: "Lambdadelta",
      portrait: "assets/characters/ep4/lambdadelta/portrait/lam_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/lambdadelta/full/lam_copy.png",
          text: [
            `The Witch of Certainty, who has lived for a thousand years.

She embodies the idea that "hard workers are rewarded" and is revered even by humans.

In this game, her relationship with Bernkastel becomes strained as the stakes grow higher. She finds herself in the uncomfortable position of watching someone she cares about become something monstrous.`
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

In this sixth game, he serves the new Game Master Battler, and watches over the new Beatrice with a sadness he conceals behind his characteristic smile.

He remembers the real Beatrice. And he sees, very clearly, that this new one is not her.

"Pfft-pfft-pfft. My, how interesting things have become."`
          ]
        }
      ]
    },
    {
      id: "zepar_furfur",
      name: "Zepar & Furfur",
      portrait: "assets/characters/ep6/zepar_furfur/portrait/zf_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep6/zepar_furfur/full/zf_full.png",
          text: [
            `Great Demons who preside over love and trials.

They are neutral entities summoned to manage the "Trial of Lovers" on the island. They speak in unison and possess the power to grant a miracle of love, but only to those who can prove their resolve.

The Trial pits three pairs of lovers against each other. Only one pair is permitted to "exist." The others must vanish as "furniture."

"Love is a trial! Love is a duel! Only one pair shall attain the golden fruit!"`
          ]
        }
      ]
    }
  ],

  // ── MODO FUTURO: 1998 ────────────────────────────────────────────────────
  charactersFuture: [
    {
      id: "ange_beatrice",
      name: "Ange (Witch of Resurrection)",
      portrait: "assets/characters/ep6/ange/portrait/ang_future.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep6/ange/full/ang_witch.png",
          text: [
            `The Witch of Resurrection.

Ange continues her journey through the year 1998, seeking the truth of the "Beatrice" identity. She is torn between the hatred for the tragedy and the growing understanding of the magic her brother Battler tried to use to protect her.

She is the only one who can truly bring back the souls of the Ushiromiya family through the power of her conviction.

The question is whether she is willing to pay the price that truth demands.`
          ]
        }
      ]
    },
    {
      id: "hachijo_ikuko",
      name: "Hachijo Ikuko",
      portrait: "assets/characters/ep6/hachijo/portrait/hac_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep6/hachijo/full/hac_full.png",
          text: [
            `A mysterious and famous novelist, author of the "Message in a Bottle" stories.

A woman who exists in the world of 1998 and holds the key to the manuscripts that detail the events of Rokkenjima. She describes the tragedy with an intimate, impossible precision.

She serves as Ange's guide — and possibly as something far more than that.

"To write a story is to create a truth. Are you prepared to read the truth I have written?"`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "The Logic Error",
      style: "tip-meta",
      pages: [
        `A state in which the Game Master's board becomes contradictory and impossible to resolve.

In this episode, Battler falls into a trap set by Erika. She sealed a room from the outside with tape, then found evidence that someone inside had died — but their body was found elsewhere.

A room that was sealed from outside, with no one able to enter or leave, cannot contain a body that is also elsewhere.`,
        `This contradiction — a Logic Error — traps the Game Master in an eternal loop.

The board cannot move forward. The game cannot end. The Game Master is imprisoned in a state of infinite suffering, unable to resolve the contradiction he created.

The only escape is a miracle: a single explanation that satisfies all the Red Truths established up to that point.

Only Beatrice, the real Beatrice, could provide that miracle.`
      ]
    },
    {
      title: "The Trial of Lovers",
      style: "tip-ritual",
      pages: [
        `A magical ritual conducted by the demons Zepar and Furfur.

It pits three pairs of lovers against each other:
— George and Shannon
— Jessica and Kanon
— Battler and Beatrice

Only one pair is permitted to "exist" and achieve their love. The others must vanish as "furniture."`,
        `The Trial is both a blessing and a curse. It grants a miracle of love — but only at the cost of the others.

It is, in many ways, the perfect distillation of the game itself: the idea that love and truth cannot coexist with each other unless someone is willing to sacrifice everything for them.

Zepar and Furfur watch with detached amusement. For them, it is entertainment. For the participants, it is everything.`
      ]
    },
    {
      title: "Featherine Augustus Aurora",
      style: "tip-witch",
      pages: [
        `The Witch of Theatergoing, Drama, and Spectating.

She is an ancient entity far above the level of normal witches, acting as Hachijo Ikuko's mentor and silent observer. She views all existence as a script and is capable of rewriting reality itself with her "Overlord" authority.`,
        `She does not participate in the game directly. She watches.

But a being who can rewrite reality through the act of observation is never truly absent from what she observes.

Her interest in Ange's journey is not incidental. She has been reading this story for a very long time.`
      ]
    }
  ]
};

const EP6_PC_SOURCE = "local-original-chiru-pc-archives";
const EP6_EN_SOURCE = "local-original-chiru-pc-archives-en";

const EP6_PC_NORMAL = {
  characterBackdrop: "assets/ui/characters/ep6/backdrop/cha_back.png",
  textPanel: "assets/ui/characters/ep6/text/txt_def2.png",
  flourish: "assets/ui/hana3_back.png"
};

const EP6_PC_FANTASY = {
  characterBackdrop: "assets/ui/characters/ep6_2/backdrop/cha_back24.png",
  textPanel: "assets/ui/characters/ep6/text/txt_def2.png",
  flourish: "assets/ui/hana3_back.png"
};

const EP6_PC_FUTURE = {
  characterBackdrop: "assets/ui/characters/ep6_3/backdrop/cha_back23.png",
  textPanel: "assets/ui/characters/ep6/text/txt_def2.png",
  flourish: "assets/ui/hana3_back.png"
};

const EP6_NORMAL_PC = {
  kinzo: pcEntry("kin", [17, 37], 380, [state("ep6", "kin_m", "kin_m", "ep6", "kin_1")]),
  krauss: pcEntry("kla", [62, 37], 425, [state("ep5", "kla_l", "kla", "ep5", "kla_1")]),
  natsuhi: pcEntry("nat", [106, 37], 430, [
    state("ep5", "nat_l", "nat", "ep5", "nat_1"),
    state("ep6", "nat_d1", "nat_d1", "ep6", "nat_2"),
    state("ep5", "nat_d", "nat_d", "ep6", "nat_3")
  ]),
  jessica: pcEntry("jes", [150, 37], 420, [state("ep5", "jes_l", "jes", "ep5", "jes_1")]),
  nanjo: pcEntry("nan", [17, 82], 425, [state("ep5", "nan_l", "nan", "ep5", "nan_1")]),
  eva: pcEntry("eva", [62, 82], 440, [
    state("ep5", "eva_l", "eva", "ep5", "eva_1"),
    state("ep6", "eva_d1", "eva_d1", "ep6", "eva_2"),
    state("ep5", "eva_d", "eva_d", "ep6", "eva_3")
  ]),
  hideyoshi: pcEntry("hid", [106, 82], 415, [state("ep5", "hid_l", "hid", "ep5", "hid_1")]),
  george: pcEntry("geo", [150, 82], 435, [state("ep5", "geo_l", "geo", "ep5", "geo_1")]),
  erika: pcEntry("eri", [17, 126], 400, [
    state("ep5", "eri_l", "eri", "ep6", "eri_1"),
    state("ep6", "eri_d", "eri_d", "ep6", "eri_1")
  ]),
  rudolf: pcEntry("rud", [62, 126], 455, [state("ep5", "rud_l", "rud", "ep5", "rud_1")]),
  kyrie: pcEntry("kir", [106, 126], 455, [
    state("ep5", "kir_l", "kir", "ep5", "kir_1"),
    state("ep6", "kir_d1", "kir_d1", "ep6", "kir_2"),
    state("ep5", "kir_d", "kir_d", "ep6", "kir_3")
  ]),
  battler: pcEntry("but", [150, 126], 455, [
    state("ep5", "but_l", "but", "ep5", "but_1"),
    state("ep6", "but_d1", "but_d1", "ep6", "but_2")
  ]),
  genji: pcEntry("gen", [17, 170], 455, [state("ep5", "gen_l", "gen", "ep5", "gen_1")]),
  rosa: pcEntry("ros", [62, 170], 445, [
    state("ep5", "ros_l", "ros", "ep5", "ros_1"),
    state("ep6", "ros_d1", "ros_d1", "ep6", "ros_2"),
    state("ep5", "ros_d", "ros_d", "ep6", "ros_3")
  ]),
  maria: pcEntry("mar", [150, 170], 390, [
    state("ep5", "mar_l", "mar", "ep5", "mar_1"),
    state("ep6", "mar_d1", "mar_d1", "ep6", "mar_2"),
    state("ep5", "mar_d", "mar_d", "ep6", "mar_3")
  ]),
  shannon: pcEntry("sha", [17, 214], 430, [state("ep5", "sha_l", "sha", "ep5", "sha_1")]),
  kanon: pcEntry("kan", [62, 214], 460, [state("ep5", "kan_l", "kan", "ep5", "kan_1")]),
  gohda: pcEntry("goh", [106, 214], 450, [state("ep5", "goh_l", "goh", "ep5", "goh_1")]),
  kumasawa: pcEntry("kum", [150, 214], 440, [state("ep5", "kum_l", "kum", "ep5", "kum_1")])
};

const EP6_FANTASY_PC = {
  zepar_furfur: pcEntry("zf", [17, 35], 403, [state("ep6_2", "zf_l", "zep_1", "ep6_2", "zep_1")]),
  chick_beato: pcEntry("be2", [17, 78], 440, [state("ep6_2", "be2_l", "be2_l", "ep6_2", "be2_1")]),
  beatrice: pcEntry("bea", [17, 121], 380, [state("ep5_2", "bea_l", "bea", "ep6_2", "bea_1")]),
  willard: pcEntry("w", [17, 168], 403, [state("ep6_2", "w_l", "wil_1", "ep6_2", "wil_1")]),
  stakes: pcEntry("rg", [17, 215], 420, [state("ep5_2", "rg_l", "rg1", "ep5_2", "rg1_1")]),
  battler_gm: pcEntry("but", [62, 121], 425, [state("ep6_2", "but_l", "but", "ep6_2", "but_1")]),
  goats: pcEntry("goa", [62, 215], 403, [state("ep6_2", "goa_l", "goa_1", "ep6_2", "goa_1")]),
  bernkastel: pcEntry("ber", [106, 35], 430, [state("ep5_2", "ber_l", "ber", "ep6_2", "ber_1")]),
  erika_meta: pcEntry("eri", [106, 121], 400, [
    state("ep5_2", "eri_l", "eri", "ep6_2", "eri_1"),
    state("ep6_2", "eri_d", "eri_1d", "ep6_2", "eri_1")
  ]),
  lambdadelta: pcEntry("lam", [150, 35], 410, [state("ep5_2", "lam_l", "lam", "ep6_2", "lam_1")]),
  dlanor: pcEntry("dla", [150, 121], 405, [state("ep5_2", "dla_l", "dla", "ep5_2", "dla_11")]),
  knox: pcEntry("k", [150, 168], 405, [state("ep5_2", "k_l", "dla", "ep5_2", "dla_12")]),
  chiester_sisters: pcEntry("s", [150, 215], 420, [state("ep5_2", "s_l", "s00", "ep5_2", "s00_1")]),
  zepar: pcEntry("zep", [17, 568], 403, [state("ep6_2", "zep_l", "zep_1", "ep6_2", "zep_1")]),
  furfur: pcEntry("fur", [17, 615], 403, [state("ep6_2", "fur_l", "fur_1", "ep6_2", "fur_1")]),
  virgilia: pcEntry("wal", [17, 578], 360, [state("ep5_2", "wal_l", "wal", "ep5_2", "wal_1")]),
  ronove: pcEntry("ron", [17, 621], 420, [state("ep5_2", "ron_l", "ron", "ep5_2", "ron_1")]),
  gaap: pcEntry("gap", [17, 668], 415, [state("ep5_2", "gap_l", "gap", "ep5_2", "gap_1")]),
  gertrude: pcEntry("ger", [150, 568], 395, [state("ep5_2", "ger", "ger", "ep5_2", "ger_11")]),
  cornelia: pcEntry("cor", [150, 615], 403, [state("ep5_2", "cor", "cor", "ep5_2", "cor_11")])
};

const EP6_FUTURE_PC = {
  featherine: pcEntry("fea", [62, 121], 343, [state("ep6_3", "fea_l", "fea_1", "ep6_3", "fea_1")]),
  ange_beatrice: pcEntry("enj", [106, 121], 430, [state("ep6_3", "enj_l", "enj_1", "ep6_3", "enj_1")]),
  amakusa: pcEntry("ama", [106, 168], 455, [state("ep6_3", "ama_l", "ama_1", "ep6_3", "ama_1")])
};

const EP6_TIP_PAGE_COUNTS = [1, 1];

ensureEp6Characters();
ensureEp6FantasyCharacters();
ensureEp6FutureCharacters();
ensureEp6Tips();

ep6.pc = EP6_PC_NORMAL;
ep6.modes = {
  normal: {
    background: ep6.background,
    characters: ep6.characters,
    tips: ep6.tips,
    pc: EP6_PC_NORMAL
  },
  fantasy: {
    background: ep6.backgroundFantasy,
    characters: ep6.charactersFantasy,
    tips: ep6.tips,
    pc: EP6_PC_FANTASY
  },
  future: {
    background: ep6.backgroundFuture,
    characters: ep6.charactersFuture,
    tips: ep6.tips,
    pc: EP6_PC_FUTURE
  }
};

applyEp6PcCharacters(ep6.characters, EP6_NORMAL_PC);
applyEp6PcCharacters(ep6.charactersFantasy, EP6_FANTASY_PC);
applyEp6PcCharacters(ep6.charactersFuture, EP6_FUTURE_PC);
applyEp6Tips(ep6.tips);

function pcEntry(code, grid, tachiX, states) {
  return { code, grid, tachiX, states };
}

function state(folder, icon, tachi, textFolder, text) {
  return { folder, icon, tachi, textFolder, text };
}

function ensureEp6Characters() {
  ep6.characters = ep6.characters.filter(character => EP6_NORMAL_PC[character.id]);
  for (const character of ep6.characters) {
    const pc = EP6_NORMAL_PC[character.id];
    character.portrait = iconPath(pc.states[0]);
    character.states = pc.states.map((statePc, index) => ({
      phase: index === 0 ? "alive" : index === 1 ? "missing" : "dead",
      image: tachiPath(statePc),
      pages: [character.name]
    }));
  }
}

function ensureEp6FantasyCharacters() {
  const names = {
    zepar_furfur: "Zepar and Furfur",
    chick_beato: "Beatrice",
    beatrice: "Beatrice",
    willard: "Willard H. Wright",
    stakes: "The Seven Stakes of Purgatory",
    battler_gm: "Ushiromiya Battler",
    goats: "Goats",
    bernkastel: "Bernkastel",
    erika_meta: "Furudo Erika",
    lambdadelta: "Lambdadelta",
    dlanor: "Dlanor A. Knox",
    knox: "Knox's Decalogue",
    chiester_sisters: "Chiester Sisters",
    zepar: "Zepar",
    furfur: "Furfur",
    virgilia: "Virgilia",
    ronove: "Ronove",
    gaap: "Gaap",
    gertrude: "Gertrude",
    cornelia: "Cornelia"
  };

  ep6.charactersFantasy = Object.entries(EP6_FANTASY_PC).map(([id, pc]) => ({
    id,
    name: names[id],
    portrait: iconPath(pc.states[0]),
    currentPhase: 0,
    states: pc.states.map((statePc, index) => ({
      phase: index === 0 ? "active" : "alternate",
      image: tachiPath(statePc),
      pages: [names[id]]
    })),
    ...(id === "zepar_furfur" ? { subCharacters: makeEp6ZeparFurfurSubCharacters() } : {}),
    ...(id === "stakes" ? { subCharacters: makeEp6StakeSubCharacters() } : {}),
    ...(id === "chiester_sisters" ? { subCharacters: makeEp6ChiesterSubCharacters() } : {})
  }));
}

function ensureEp6FutureCharacters() {
  const names = {
    featherine: "Featherine Augustus Aurora",
    ange_beatrice: "Ange Beatrice",
    amakusa: "Amakusa Juuza"
  };

  ep6.charactersFuture = Object.entries(EP6_FUTURE_PC).map(([id, pc]) => ({
    id,
    name: names[id],
    portrait: iconPath(pc.states[0]),
    currentPhase: 0,
    states: pc.states.map(statePc => ({
      phase: "active",
      image: tachiPath(statePc),
      pages: [names[id]]
    }))
  }));
}

function ensureEp6Tips() {
  ep6.tips = ep6.tips.slice(0, EP6_TIP_PAGE_COUNTS.length);
  while (ep6.tips.length < EP6_TIP_PAGE_COUNTS.length) {
    const tipNumber = ep6.tips.length + 1;
    ep6.tips.push({
      title: `EP6 Tip ${tipNumber}`,
      style: "tip-lore",
      pages: [`EP6 Tip ${tipNumber}`],
      verified: false
    });
  }
}

function applyEp6PcCharacters(characters, pcMap) {
  for (const character of characters || []) {
    const pc = pcMap[character.id];
    if (!pc) continue;
    character.pc = {
      sourceUrl: EP6_PC_SOURCE,
      code: pc.code,
      gridX: pc.grid[0],
      gridY: pc.grid[1],
      tachiX: pc.tachiX,
      iconAlive: iconPath(pc.states[0]),
      iconDead: iconPath(pc.states[pc.states.length - 1])
    };

    for (const [index, item] of (character.states || []).entries()) {
      const statePc = pc.states[index] || pc.states[0];
      item.pc = {
        sourceUrl: EP6_PC_SOURCE,
        icon: iconPath(statePc),
        tachi: tachiPath(statePc),
        referenceTextImage: textPath(statePc),
        tachiX: pc.tachiX
      };
    }
  }
}

function iconPath(item) {
  return `assets/ui/characters/${item.folder}/icons/${item.icon}.png`;
}

function tachiPath(item) {
  return `assets/ui/characters/${item.folder}/tachi/${item.tachi}.png`;
}

function textPath(item) {
  return `assets/ui/characters/${item.textFolder}/reference-text/${item.text}.png`;
}

function makeEp6ZeparFurfurSubCharacters() {
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

function makeEp6StakeSubCharacters() {
  return [
    ["Lucifer", "rg1"],
    ["Leviathan", "rg2"],
    ["Satan", "rg3"],
    ["Belphegor", "rg4"],
    ["Mammon", "rg5"],
    ["Beelzebub", "rg6"],
    ["Asmodeus", "rg7"]
  ].map(([name, code]) => ({
    name,
    image: `assets/ui/characters/ep5_2/tachi/${code}.png`,
    pages: [name],
    pc: {
      tachi: `assets/ui/characters/ep5_2/tachi/${code}.png`,
      referenceTextImage: `assets/ui/characters/ep5_2/reference-text/${code}_1.png`,
      tachiX: 420
    }
  }));
}

function makeEp6ChiesterSubCharacters() {
  return [
    ["Chiester 00", "s00"],
    ["Chiester 410", "s41"],
    ["Chiester 45", "s45"],
    ["Chiester 556", "s55"]
  ].map(([name, code]) => ({
    name,
    image: `assets/ui/characters/ep5_2/tachi/${code}.png`,
    pages: [name],
    pc: {
      tachi: `assets/ui/characters/ep5_2/tachi/${code}.png`,
      referenceTextImage: `assets/ui/characters/ep5_2/reference-text/${code}_1.png`,
      tachiX: 420
    }
  }));
}

function applyEp6Tips(tips) {
  for (const [index, tip] of (tips || []).entries()) {
    const tipNumber = index + 1;
    const pageCount = EP6_TIP_PAGE_COUNTS[index] || 1;
    tip.pages = Array.from({ length: pageCount }, (_, pageIndex) => tip.pages?.[pageIndex] || tip.title);
    Object.assign(tip, {
      id: `ep6-tip-${tipNumber}`,
      episode: 6,
      unlockOrder: tipNumber,
      buttonImage: `assets/ui/tips/ep6/buttons/tips6_${tipNumber}.png`,
      referenceButtonImage: `assets/ui/tips/ep6/buttons/tips6_${tipNumber}.png`,
      background: "assets/ui/tips/ep1/backdrop/tips1_back.png",
      pageImages: Array.from({ length: pageCount }, (_, pageIndex) => `assets/tips/ep6/${tipNumber}_${pageIndex + 1}.png`),
      referencePageImages: Array.from({ length: pageCount }, (_, pageIndex) => `assets/tips/ep6/${tipNumber}_${pageIndex + 1}.png`),
      sourceUrl: EP6_EN_SOURCE,
      verified: false
    });
  }
}
