export const ep5 = {
  id: 5,
  background: "assets/backgrounds/mansion_day.png",
  backgroundFantasy: "assets/backgrounds/meta_world_silver.png",

  // ── MODO NORMAL: 1986 ────────────────────────────────────────────────────
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

Unlike previous games, this fact is not a mystery but a known element of the board. The Natsuhi of this game has been concealing his death for months.

Kinzo Ushiromiya died before his final family conference. And yet his shadow still looms over everything that follows.`
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
          image: "assets/characters/ep5/natsu/full/nat_stressed.png",
          text: [
            `Krauss's wife and the one who currently manages the Ushiromiya household.

In this fifth game, she becomes the primary target of the mystery. Haunted by a mysterious figure who contacts her through the internal phone system, she is forced into a corner where her past and her pride are put on trial.

She has been concealing Kinzo's death for months, and is terrified that everything she has built is about to collapse.

She desperately tries to protect the honor of the Ushiromiya family, even as the walls close in around her.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/natsu/full/nat dead.png",
          text: [
            `Declared the culprit by Erika Furudo's ruthless investigation.

She was accused of all the murders committed in the closed rooms of the night. The evidence against her, assembled with cold logic and detective's authority, was insurmountable.

Was it the truth? Or was it simply an airtight frame?`
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

In this episode he is quietly complicit in concealing Kinzo's death alongside Natsuhi.

His real estate schemes continue to crumble, and the pressure of keeping the family's secrets is beginning to show on his face.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/krauss/full/kla dead.png",
          text: [
            `Found among the dead after the first twilight.

He was chosen by the key of the Golden Land and offered up as a sacrifice.

He kept the secret of his father's death until the very end.`
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

In this episode she is among those who press Natsuhi relentlessly, sensing that something is being hidden from the family.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/eva/full/eva dead.png",
          text: [
            `Found among the dead after the first twilight.

She was chosen by the key of the Golden Land and offered up as a sacrifice.

The game of inheritance has no winners tonight.`
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

He lost his first wife, Asumu, six years ago. He has a secret he wishes to tell Battler before it is too late.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/rudo/full/rud dead.png",
          text: [
            `Found among the dead after the first twilight.

He was chosen by the key of the Golden Land and offered up as a sacrifice.

His secret died with him, again.`
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
            `Found among the dead after the first twilight.

She was chosen by the key of the Golden Land and offered up as a sacrifice.

Another game begins.`
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
            `Found among the dead after the first twilight.

He was chosen by the key of the Golden Land and offered up as a sacrifice.

He died thinking kindness was enough to survive anything. It was not.`
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
            `Found among the dead after the first twilight.

She was chosen by the key of the Golden Land and offered up as a sacrifice.

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
          image: "assets/characters/ep5/battler/full/but_serious.png",
          text: [
            `Rudolf's son.

Having reached a stalemate with Beatrice, Battler now finds himself in a position where he must understand the "heart" of the mystery rather than just its logical solution.

He begins to realize that the game is not just about winning or losing. There is something Beatrice has been trying to show him all along — something he has been too stubborn, and too afraid, to see.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/battler/full/but dead.png",
          text: [
            `Missing.

He could not counter the detective's authority. He could not save Natsuhi.

The game was lost — not because of magic, but because of logic wielded without mercy.`
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

Her courage never wavered. It simply ran out of time.`
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

He is well-liked by everyone and is seen as the ideal successor to the family.

He is deeply in love with Shannon and intends to marry her.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/george/full/geo dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

He only ever wanted to be with Shannon. Some things even the best intentions cannot protect.`
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

Beatrice would have been sad, if she were still there to know.`
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

Furthermore, Shannon is nothing more than a pseudonym that she uses when on duty, not her real name.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/shannon/full/sha dead.png",
          text: [
            `Found dead.

She was killed during the events on the island.

Don't worry. Everyone will be revived in the Golden Land.`
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

There are multiple other servants with the "on" character in their pseudonyms. He and Shannon just happened to be the ones on duty that day.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kanon/full/kan dead.png",
          text: [
            `Found dead.

He was killed during the events on the island.

Furniture, to the last.`
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

She had seen many things in her years. In the end, she saw one thing too many.`
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

He came to this island to care for a friend. That was never enough to keep him safe.`
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
          image: "assets/characters/ep5/erika/full/eri_copy.png",
          text: [
            `The "visitor" who was washed ashore on Rokkenjima just before the family conference began.

She is a self-proclaimed "detective" and a guest of the Ushiromiya family. She possesses an extraordinary memory and a keen eye for detail, using these skills to investigate the mysteries of the island from a strictly logical perspective.

She is Bernkastel's piece, placed on the board to pursue the truth without mercy.

"I am the detective, Furudo Erika. An invited guest should be welcomed with a corresponding amount of courtesy."`
          ]
        }
      ]
    }
  ],

  // ── MODO FANTASY: Meta-mundo ──────────────────────────────────────────────
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
            `The Witch of Certainty, who has lived for a thousand years.

She has taken over as the Game Master for this fifth game, constructing the board that will trap Battler in a confrontation he cannot win through logic alone.

She has the power to ensure that "an effort will be rewarded without fail." Her immense, swift, and terrifying power can make any witch surrender in an instant.

"I'll grant you the 'absolute' result you desire. But remember, the price is always absolute too!"`
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

She is the one who prepared Furudo Erika as her piece for this board.

She can cause a miracle to happen as long as the probability is not zero. However, her personality is incredibly cold and cruel, viewing the tragedy of Rokkenjima as a mere plaything to alleviate her eternal boredom.

"It's all just a game of chance and miracles. And I happen to own the dice."`
          ]
        }
      ]
    },
    {
      id: "erika_meta",
      name: "Furudo Erika",
      portrait: "assets/characters/ep5/erika/portrait/eri_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep5/erika/full/eri_copy.png",
          text: [
            `Bernkastel's piece on the gameboard of the fifth episode.

As a detective, she is granted a special authority: everything she observes is guaranteed to be objective truth, and she can never be the culprit.

She pursues the logic of the mystery with ruthless precision. Unlike Battler, she does not believe in miracles — only in evidence.

She is the natural enemy of the witch.`
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

She is sent to assist Erika in her investigation. She fights using the "Red Key" and the "Blue Key," enforcing the Knox's Decalogue as absolute laws that cannot be violated by magic or mystery.

Her speech is characterized by capitalizing the KEY WORDS of each sentence.

"It is FORBIDDEN for the detective to be the culprit. All according to the Knox's Ten Commandments."`
          ]
        }
      ]
    },
    {
      id: "gertrude",
      name: "Gertrude",
      portrait: "assets/characters/ep5/gertrude/portrait/ger_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep5/gertrude/full/ger_copy.png",
          text: [
            `An inquisitor of the Eisern Jungfrau, serving under Dlanor A. Knox.

She assists in the investigation alongside Cornelia, acting as the senior enforcer of the pair. She is strict, professional, and deeply devoted to the rules of the Knox Decalogue.

She appears alongside her partner Cornelia to support Erika's investigation on the gameboard.`
          ]
        }
      ]
    },
    {
      id: "cornelia",
      name: "Cornelia",
      portrait: "assets/characters/ep5/cornelia/portrait/cor_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep5/cornelia/full/cor_copy.png",
          text: [
            `An inquisitor of the Eisern Jungfrau, serving under Dlanor A. Knox.

She assists in the investigation alongside Gertrude, acting as the more energetic of the pair. She tends to repeat Gertrude's statements with her own embellishments.

She appears alongside her partner Gertrude to support Erika's investigation on the gameboard.`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "Knox's Decalogue",
      style: "tip-rules",
      pages: [
        `A set of ten rules defined by Ronald Knox for detective fiction. In this game, they function as absolute laws that the mystery must follow.

I. It is forbidden for the culprit to be anyone not mentioned in the early part of the story.
II. It is forbidden for supernatural or mysterious agencies to be employed as a method of detection.
III. It is forbidden for more than one secret room or passage to exist.
IV. It is forbidden for unknown drugs or chemicals to be employed.
V. It is forbidden for a Chinaman to play any role in the story.`,
        `VI. It is forbidden for accident or intuition to resolve the case.
VII. It is forbidden for the detective to be the culprit.
VIII. It is forbidden for the case to be resolved with clues that are not presented in the story.
IX. It is permitted for observers to let their own conclusions and interpretations go unverified.
X. It is forbidden for a character to disguise themselves as another without any clues.

Dlanor A. Knox uses these commandments as conceptual weapons to deny the existence of magic. If a situation violates any of these rules, the "Red Truth" can be used to destroy the illusion instantly.`
      ]
    },
    {
      title: "The Detective's Authority",
      style: "tip-detective",
      pages: [
        `A special privilege granted to Furudo Erika as the "detective" of the board.

The detective is guaranteed to never be the culprit, and all information they directly perceive is guaranteed to be objective truth. Furthermore, the detective has the right to inspect all crime scenes and demand cooperation from all pieces on the board.`,
        `As long as Erika maintains this authority, she is the most powerful "human" force in the game.

However, the detective's authority is not omnipotent. It only applies to what the detective directly observes. What is hidden from the detective's eyes remains uncertain.

That is the one crack in Erika's armor.`
      ]
    },
    {
      title: "The Man from Nineteen Years Ago",
      style: "tip-mystery",
      pages: [
        `A mysterious figure who contacts Natsuhi Ushiromiya through the internal phone system of Rokkenjima.

He claims to be the "true" successor of the Ushiromiya family — a child who was abandoned nineteen years ago and has returned to reclaim his birthright.

He knows secrets that only Natsuhi and Kinzo should know. His existence threatens to tear apart the delicate lies that Natsuhi has constructed to keep the family together.`,
        `Is he a ghost? A human manipulating fear?

Or is he something else entirely — a mystery wrapped within a mystery, a question that has no clean answer?

Whoever he is, he knows exactly where to press to make Natsuhi crack.`
      ]
    }
  ]
};