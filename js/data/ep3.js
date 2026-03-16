export const ep3 = {
  id: 3,
  background: "assets/backgrounds/mansion_day.png",
  backgroundFantasy: "assets/backgrounds/golden_land.png",

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
His study is packed with of mysterious grimoires.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kinzo/full/kin dead.png",
          text: [
            `Discovered as a burnt corpse from the incinerator in the underground boiler room.

As there were no signs that he fought to get out of the incinerator, it seems reasonable to think that he was burned after he was murdered.

Game over right at the very start.`
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
            `Found strangled to death in the guesthouse.

The golden bow of the Chiester Sisters showed no mercy. Even the head of the family was not exempt from the new witch's collection.`
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

She is hostile towards her brother Krauss and opposes him whenever she can, from issues dealing with the family fortune to the question of who will succeed the family headship.

In this third game, her sharp wit and lifelong obsession with the family headship finally bear fruit as she leads the siblings in a serious attempt to solve the epitaph.`
          ]
        },
        {
          phase: "winner",
          image: "assets/characters/ep3/eva/full/eva_head.png",
          text: [
            `The one who solved the riddle of the Golden Land.

By discovering the hidden gold, she has officially succeeded Kinzo as the head of the Ushiromiya family. However, this triumph came at a terrible price, leaving her as the sole survivor of the Rokkenjima massacre.

Precisely because the concept of the Golden Witch was passed on to her, she was able to escape... and curse the world.`
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

He lost his first wife, Asumu, six years ago, and immediately after that, he forced a second marriage with Kyrie. For that reason, his relationship with his son Battler was strained for a long time.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/rudo/full/rud dead.png",
          text: [
            `Found shot in the head inside the mansion.

He and Kyrie were killed by the Chiester Sisters on EVA-Beatrice's orders. He had chosen to face death in the style of a western duel, backed against Belphegor, three steps and a shot.

Perhaps this was the most suitable end for a man who always liked to act cool.`
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
            `Impaled on the fence of the rose garden.

The new Golden Witch saw fit to make an example of her and Maria, toying with them for her own amusement again and again.

She had the chance to repent for her sins. But in the end, a mother who truly loved her daughter found the strength to face the witch head-on.`
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

She possesses a strong sense of responsibility, and a great deal of pride.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/natsu/full/nat dead.png",
          text: [
            `Found strangled to death in the guesthouse.

She was killed by the Chiester Sisters on EVA-Beatrice's orders, the golden bow passing through keyholes and wrapping around her neck.

The pride and courage of the Ushiromiya family died with her.`
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
            `Shot dead by a levitating gun inside the mansion.

He attempted to appeal to EVA-Beatrice's human side, seeing in her his wife Eva. She did not listen.

He died because he tried to treat a witch like a person. But perhaps that was always his greatest virtue.`
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
            `Found shot in the head inside the mansion.

She and Rudolf were killed by the Chiester Sisters. Even her sharp tactical mind was no match for arrows that can change trajectory at will.

Her intellect could have been a match for a witch's. In another world, perhaps it was.`
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

His fight against Beatrice reaches a new level as a new and crueler witch takes the stage. He is forced to battle EVA-Beatrice while simultaneously trying to understand Beatrice's own change of heart.

He begins to grasp the concept of the Blue Truth — a logical theory to counter magic — as his weapon against the witches' Red declarations.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/battler/full/but dead.png",
          text: [
            `Missing.

Even though he was given a precious invitation to the Golden Land, Battler refused to acknowledge the witch, and all of the magic disappeared.

But a witch does not simply give up. She will wait. She will wait as long as it takes for him to understand.`
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
            `Missing.

Even temporarily blinded by Eva's gunfire, she did not give up. The ghost of Kanon, resurrected for a final moment by the old Beatrice, helped her escape to the parlor.

Her courage in the face of the impossible did not go unnoticed.`
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

He is deeply in love with Shannon and intends to marry her. In this episode, the strength of that love becomes a weapon — and a tragedy.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/george/full/geo dead.png",
          text: [
            `Killed by the Chiester Sisters after Shannon was revived and then slain again by EVA-Beatrice.

He witnessed his beloved Shannon killed twice. The second time, he had no tears left.

Only rage.`
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

In this episode, the depth of her faith becomes clearer — and more tragic. Her world of magic is the only refuge from the pain of her real life.

"Uu-uu!"`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/maria/full/mar dead.png",
          text: [
            `Strangled by her own mother Rosa during one of EVA-Beatrice's cruel games.

She died with her beloved Sakutarou beside her. In the Golden Land, she would be reunited with everyone she loved.

In some worlds, that is enough.`
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
            `Corpse discovered in the chapel.

The murder weapon is assumed to be a gun or spear-shaped object.

Even after death, keep on protecting the place important to the lord.`
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

In this episode, her love for George and her identity as furniture become the axis of one of the episode's most heartbreaking confrontations.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/shannon/full/sha dead.png",
          text: [
            `Killed by the Chiester Sisters, revived by Beatrice as a final act of mercy, and then killed again by EVA-Beatrice.

She was killed twice. Each time, George was there to witness it.

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

His courage and hidden power were already demonstrated in the previous game. In this episode, even after death, he returns one final time.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kanon/full/kan dead.png",
          text: [
            `Corpse discovered in the chapel.

The murder weapon is assumed to be a gun or spear-shaped object.

Even after death, he was resurrected by Beatrice one final time as a ghost to guide Jessica to safety. Furniture, to the last.`
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
            `Corpse discovered in the chapel.

The murder weapon is assumed to be a gun or spear-shaped object.

He was chosen as one of the six sacrifices of the first twilight. One more tool of the ceremony.`
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
            `Corpse discovered in the chapel.

The murder weapon is assumed to be a gun or spear-shaped object.

She was chosen as one of the six sacrifices of the first twilight. Her many years of faithful service ended quietly, without ceremony.`
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
            `Killed by EVA-Beatrice with her staff through his head, in the guesthouse while caring for the injured Jessica.

Despite his pleas, the new Golden Witch showed no mercy.

He had come to this island simply to care for his old friend. This was not the end he deserved.`
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
            `The Golden Witch, who has lived a thousand years.

In this third game, something within her begins to shift. She finds herself watching EVA-Beatrice's cruelty with something she cannot quite name — was she truly like this? Could she have been wrong about the nature of their game?

For the first time, she and Battler stand on the same side against something worse than either of them.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/bea/full/bea smug.png",
          text: [
            `Killed by the Chiester Sisters on EVA-Beatrice's orders — her heart pierced again and again, but refusing to fall.

Even reduced to nothing but a golden heart, she refused to be destroyed.

She sacrificed herself in the end, denying witches in red, so that Battler might have one more chance to find the truth.`
          ]
        }
      ]
    },
    {
      id: "ange",
      name: "Ushiromiya Ange",
      portrait: "assets/characters/ep3/ange/portrait/ang_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep3/ange/full/ang_child.png",
          text: [
            `Rudolf and Kyrie's daughter. Battler's younger sister.

Because she was sick with a fever, she was the only member of the Ushiromiya family not present on the island for the family conference.

She is still a young child. She will not understand the weight of that absence for many years to come.

But this is where her story truly begins.`
          ]
        }
      ]
    }
  ],

  charactersFantasy: [
    {
      id: "beatrice",
      name: "Beatrice",
      portrait: "assets/characters/ep1/bea/portrait/bea_defb1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep1/bea/full/bea.png",
          text: [
            `The Golden Witch, who has lived a thousand years.

She has surpassed the limits of humans and, like demons, will sometimes appear in response to the summons made by humans, to offer her power in exchange for a price.

She likes black tea and ice cream. She hates boredom and people who deny her existence.`
          ]
        }
      ]
    },
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
            `The New Golden Witch, who inherited the name of Beatrice after Eva Ushiromiya solved the riddle of the epitaph.

She is even crueler than the previous Beatrice, possessing none of the elegance that occasionally restrained her predecessor. She revels in using her infinite power to torment and revive her victims in an endless cycle.

"Why don't you just give up and die?"`
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

Her name is derived from the guide who leads the protagonist through Hell and Purgatory in the Divine Comedy. She has a calm, ladylike personality and possesses immense magical power.

In this episode, she appears to assist Battler and the current Beatrice, helping them find the logic to deny EVA-Beatrice's illusions — and paying the ultimate price for it.`
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

He often serves her tea and cookies and is one of the few who can mock Beatrice to her face and get away with it.

In this episode he finds himself in the uncomfortable position of advising the new and far less restrained EVA-Beatrice. His characteristic "pfft-pfft-pfft" laugh barely conceals his unease.`
          ]
        }
      ]
    },
    {
      id: "chiester_sisters",
      name: "Chiester Sisters",
      portrait: "assets/characters/ep3/chiester/portrait/chi_group.png",
      currentPhase: 0,
      currentSubIndex: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep3/chiester/full/chi_group_full.png",
          text: [
            `An Imperial Guard Corps formed by the Dragon King Pendragon in celebration of the red dragon's flight, and composed only of sisters.

They were originally subordinates of the Dragon King, but because of a long relationship with past Beatrices, he permitted two of the Imperial Guard sisters to be lent out.

The sisters are beings with false life, created by magic. Their golden bow can be loaded with arrows that change trajectory at will, passing through walls and keyholes. No target can escape their aim.`
          ]
        }
      ],
      subCharacters: [
        {
          name: "Chiester 410",
          image: "assets/characters/ep3/chiester/full/c410_full.png",
          info: `Chiester 410 is the senior partner of the pair. She has an arrogant and rough personality, and her personal hobby is laughing at people who are too serious. She has excellent combat capabilities and unmatched close-quarters fighting prowess. Despite her rough manner, she easily succumbs to loneliness.`
        },
        {
          name: "Chiester 45",
          image: "assets/characters/ep3/chiester/full/c45_full.png",
          info: `Chiester 45 is the more cautious of the pair. She has an extremely meticulous and timid personality, and is fairly paranoid. For that reason, she compensates well for the weakness of 410's slapdash personality when they work as a pair. Together, they are a perfect sniping unit.`
        }
      ]
    },
    {
      id: "bernkastel",
      name: "Bernkastel",
      portrait: "assets/characters/ep3/bernkastel/portrait/ber_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep3/bernkastel/full/ber_copy.png",
          text: [
            `The Witch of the Miracles, who has lived for a thousand years.

Her vast power is capable of creating all kinds of miracles, but her heart has broken a bit as a result.

She appears at the very end of the episode, introduced by Beatrice. The game has entered a new phase — one no longer confined to the island of Rokkenjima.`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "The Portrait Epitaph",
      style: "tip-epitaph",
      pages: [
        `Behold the sweetfish river running through my beloved hometown. 
        You who seek the Golden Land, follow its path downstream in search of the key.
        
        As you travel down it, you will see a village. In that village,
         look for the shore the two will tell you of. 
        There sleeps the key to the Golden Land.`,
        `The one who obtains the key must then travel to the Golden Land in accordance with these rules.
        
        On the first twilight, offer the six chosen by the key as sacrifices. 
        On the second twilight, those who remain shall tear apart the two who are close. 
        On the third twilight, those who remain shall praise my noble name.
        On the fourth twilight, gouge the head and kill.
        On the fifth twilight, gouge the chest and kill. 
        On the sixth twilight, gouge the stomach and kill. 
        On the seventh twilight, gouge the knee and kill. 
        On the eighth twilight, gouge the leg and kill.
        On the ninth twilight, the witch shall revive, and none shall be left alive.
        On the tenth twilight, at journey's end, you shall attain to the power of the 
        Golden Land's treasures, once and for the last time.`,
        `The witch shall praise the wise and bestow four treasures:
        One Shall be all the gold from the Golden Land,
        One Shall be the resurrection of all the dead souls,
        One Shall be the resurrection of the love that was lost,
        One Shall be to put the witch to sleep for all time.

        Sleep peacefully, my beloved witch, Beatrice.`
      ]
    },
    {
      title: "The Witch's Letter",
      style: "tip-witch-letter",
      pages: [
        `Welcome to Rokkenjima, members of the Ushiromiya family.
        I am Beatrice, the alchemist for this family employed by Kinzo-sama himself.
        I have served him for many years in accordance with our contract, but on this day, Kinzo-sama has announced the suspension of that contract.
        Therefore, I ask that you acknowledge my resignation from the position of family alchemist from this day forth.`,
        `And now, there is one part of the contract that must be explained to all present.
        I, Beatrice, lent Kinzo-sama a vast quantity of gold under certain terms.
        One of these terms specifies that all the gold is to be returned to me upon the termination of the contract. Furthermore, I am to receive everything of the Ushiromiya family as interest.`,
        `After hearing this, you may feel as though Kinzo-sama has been savagely ruthless.
        However, Kinzo-sama did append a special clause to the contract so that you would have a chance to preserve your wealth and honor. If and only if that special clause is fulfilled, I will lose my rights to the gold and the interest for all eternity.`,
        `Special clause:
        Beatrice retains the right to collect the gold and accumulated interest upon the termination of the contract.
        However, if someone is able to discover the hidden gold of this contract, Beatrice must abandon these rights for all time.`,
        `Kinzo-sama has already publicly displayed the location of the hidden gold within the epitaph under my portrait.
        The rules apply equally to all who can read the epitaph.
        If you discover the gold, I shall return everything to you.
        Tonight, I ask that you enjoy your battle of wits with Kinzo-sama to the fullest. I sincerely pray that this night will be both intellectual and elegant.`,
        `――Beatrice the Golden`
      ]
    },
    {
      title: "The Witch's Game Record",
      style: "tip-game-record",
      pages: [
        `Ushiromiya Kinzo
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Servant Shannon
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Servant Kanon
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Servant Genji
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Servant Gohda
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Servant Kumasawa
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.`,
        `Ushiromiya Rosa
Died on the second twilight.
Torn apart by the "Stake of Asmodeus".

Ushiromiya Maria
Died on the second twilight.
Torn apart by the "Stake of Beelzebub".

Ushiromiya Rudolf
Died on the fourth twilight.
Head gouged by the "Stake of Mammon".

Ushiromiya Kyrie
Died on the fifth twilight.
Chest gouged by the "Stake of Satan".

Ushiromiya Hideyoshi
Died on the sixth twilight.
Stomach gouged by the "Stake of Lucifer".

Attending Physician Nanjo
Died on the seventh twilight.
Knee gouged by the "Stake of Belphegor".`,
        `Ushiromiya Krauss
Died on the eighth twilight.
Leg gouged by the "Stake of Leviathan".

EVA-Beatrice
Revived on the ninth twilight.
Finally opens the door to the Golden Land.

Ushiromiya Natsuhi
Died on the ninth twilight.
She challenged the new witch. She was denied.

Ushiromiya George
Missing on the tenth twilight.
After he acknowledged the existence of the witch and prostrated himself, the witch invited him to the Golden Land.

Ushiromiya Jessica
Missing on the tenth twilight.
After she acknowledged the existence of the witch and prostrated herself, the witch invited her to the Golden Land.`,
        `Ushiromiya Battler

Missing on the tenth twilight.
Will the witch invite this man, who denied her existence, to the Golden Land?`
      ]
    },
    {
      title: "Chiester Sisters Imperial Guard Corps",
      style: "tip-chiester",
      pages: [
        `An Imperial Guard Corps formed by the Dragon King Pendragon in celebration of the red dragon's flight, and composed only of sisters.

They were originally subordinates of the Dragon King, but because of a long relationship with past Beatrices, he permitted two of the Imperial Guard sisters to be lent out.

The sisters are beings with false life, created by magic. For that reason, sisters with a great variety of personalities are even now being created as their numbers continue to increase.`,
        `Manifesting into the human world requires a great cost, and summoning them is difficult even without taking their tremendous fighting power into consideration. For this reason, they are often summoned as honor guards in special ceremonies.

In this game, they were employed by EVA-Beatrice, whose power as the new Golden Witch exceeded even Beatrice's own summoning ability.`
      ]
    },
    {
      title: "The Chiesters' Golden Bow",
      style: "tip-chiester-bow",
      pages: [
        `One of the pieces of sniping equipment belonging to the Chiester Sisters Imperial Guard Corps.

The arrow's trajectory can be controlled at will, but it takes a special talent and special training to master its true potential.

These arrows can pass through walls, keyholes, and any physical barrier. They can wrap around a target's neck, piercing flesh without leaving a wound a human could see.

Only beings with a magical resistance of over eight digits are immune to the Chiesters' mythical class bows.`
      ]
    },
    {
      title: "Regarding the Succession of the Witch",
      style: "tip-witch-succession",
      pages: [
        `The title of "Golden Witch Beatrice" is not inherently tied to a single individual. Like the name of a pope or a king, it is a title that can be passed down.

Kinzo Ushiromiya, in his contract with the witch, understood this. The name and powers of Beatrice will continue as long as someone inherits them.

The one who solves the epitaph and finds the gold inherits the right to bear the name of the Golden Witch — and all the power and curse that come with it.`,
        `The concept of the Golden Witch is what matters. Not the person.

Eva Ushiromiya solved the epitaph and inherited the title. But in doing so, she allowed the darker half of her nature — the part that always wanted power and recognition — to take form.

That was EVA-Beatrice. The part of Eva that had always wanted to destroy everything that had ever made her feel small.`
      ]
    }
  ]
};