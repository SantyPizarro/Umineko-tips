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
              `The aged head of the Ushiromiya family.

          Even though it has already been announced that he has just a few months to live, he is brimming with energy. Though he amassed a vast fortune in the past, he never made any announcements regarding the inheritance, which worries his children.

          He is strongly influenced by the West, and is a rabid fan of the occult.
          His study is packed with of mysterious grimoires.`
            ]
        },
        {
          phase: "missing",
          image: "assets/characters/ep1/kinzo/full/kin missing.png",
          text: [
              `Disappeared from his study unnoticed.
          Kinzo's study has everything from a bed to a toilet to a bathtub, so it is extremely rare for him to go outside.

          However, he does occasionally go out for a walk on a whim without telling anybody, and his disappearance invariability leads to a huge uproar throughout the house. The usually comes back as soon as he gets hungry...usually...`
            ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kinzo/full/kin dead.png",
          text: [
              `Burned in the incinerator, with a weapon resembling an icepick sticking out of his forehead.
          The old sorcerer's wish vanished before it could be granted. He always knew that this was one possible result of his risky gamble.`
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
          phase: "missing",
          image: "assets/characters/ep1/bea/full/bea smug.png",
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
            `Kinzo's first child.
As the oldest of the four siblings, he leads the family conference. However, the other siblings think he is trying to get all of the inheritance for himself, and this further strains the tensions between them.
He is a real estate investor and has put a lot of money into the development of a resort. However, his results have been harshly criticized.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/krauss/full/kla dead.png",
          text: [
            `His corpse was found inside the rose garden storehouse. The direct cause of death is unknown, but it seems the side of his head was smashed after his death.
This is the beginning of everything.`
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
Normally, she would have lost her place in the Ushiromiya family register upon her marriage, but she managed to forcibly overcome this by having her husband take her family name.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/eva/full/eva dead.png",
          text: [
            `Found on the bed of a guest room inside the mansion, with a weapon resembling an icepick sticking out of her forehead.`
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
          image: "assets/characters/ep1/rudo/full/rud dead.png",
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
          image: "assets/characters/ep1/rosa/full/ros dead.png",
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
            `Found shot to death in front of the witch's portrait.
How impudent of her to challenge a witch with nothing but a mere gun.
Of course she'd end up like this.
Kihihihihihihihihihi.`
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
          image: "assets/characters/ep1/hide/full/hid dead.png",
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
          image: "assets/characters/ep1/battler/full/but dead.png",
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
            `Krauss and Natsuhi's daughter.
In the absence of any irregularities, it is thought that she will eventually inherit the headship of the Ushiromiya family (or technically, her husband will). However, she seems to have no interest in all of this.
She was born with weak bronchi and is sometimes assailed by sudden asthma attacks.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/jessica/full/jes dead.png",
          text: [
            `Missing.
Even though was given a precious invitation to the Golden Land, a single fool refused to believe in the witch, and all of the magic disappeared.
She was then chewed to bits by demons and went to hell.`
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
          image: "assets/characters/ep1/george/full/geo dead.png",
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
          image: "assets/characters/ep1/maria/full/mar dead.png",
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
            `Found in the parlor. He had a weapon resembling an icepick sticking out of his stomach, and his face had been smashed.

At the sixth twilight, gouge the stomach and kill.`
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
            `Her corpse was found inside the rose garden storehouse. It seems the side of her head was smashed after her death.

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

There are multiple other servants with the "on" (音) character in their pseudonyms. He and Shannon just happened to be the ones on duty that day.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kanon/full/kan dead.png",
          text: [
            `Found in the boiler room with a weapon resembling an icepick sticking out of his chest.

How presumptuous of lowly furniture like that.`
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
            `His corpse was found inside the rose garden storehouse. His face seems to have been smashed after his death.

How unfortunate. Apparently, he was originally supposed to be on duty in the guesthouse.`
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
            `Found in the parlor. Her calf had a weapon resembling an icepick sticking out of it, and her face had been smashed.

At the eight twilight, gouge the leg and kill.`
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

Now that Kinzo's constant suspicion has reached extraordinary heights, Nanjo is one of the very few people he trusts. Thanks to Nanjo's big-hearted nature, he has been able to continue his friendship with Kinzo despite the latter's tendency to fly into a rage at the slightest provocation.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/nanjo/full/nan dead.png",
          text: [
            `Found in the parlor. His thigh had a weapon resembling an icepick sticking out of it, and his face had been smashed.

At the seventh twilight gouge the knee and kill.`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "The Portrait Epitaph",
      pages: [
        "Behold the sweetfish river running through my beloved hometown. You who seek the Golden Land, follow its path downstream in search of the key.",
        "As you travel down it, you will see a village. In that village, look for the shore the two will tell you of. There sleeps the key to the Golden Land.",
        "The one who obtains the key must then travel to the Golden Land in accordance with these rules.",
        "On the first twilight, offer the six chosen by the key as sacrifices. On the second twilight, those who remain shall tear apart the two who are close. On the third twilight, those who remain shall praise my noble name.",
        "On the fourth twilight, gouge the head and kill. On the fifth twilight, gouge the chest and kill. On the sixth twilight, gouge the stomach and kill. On the seventh twilight, gouge the knee and kill. On the eighth twilight, gouge the leg and kill.",
        "On the ninth twilight, the witch shall revive, and none shall be left alive. On the tenth twilight, at journey's end, you shall attain to the power of the Golden Land's treasures, once and for the last time.",
        "The witch shall praise the wise and bestow four treasures: all the gold from the Golden Land, the resurrection of all the dead souls, the resurrection of the love that was lost, and to put the witch to sleep for all time. Sleep peacefully, my beloved witch, Beatrice."
      ]
    },
    {
      title: "The Witch's Letter",
      pages: [
        "Welcome to Rokkenjima, members of the Ushiromiya family. I am Beatrice, the alchemist for this family employed by Kinzo-sama himself.",
        "I lent Kinzo-sama a vast quantity of gold under certain terms. Upon termination of the contract, all gold is to be returned to me, along with everything of the Ushiromiya family as interest.",
        "However, Kinzo-sama appended a special clause: if someone discovers the hidden gold, I must abandon my rights to it and the accumulated interest for all eternity.",
        "The collection of the interest will proceed shortly. If anyone fulfills the special clause, I shall return everything, including what has already been collected.",
        "As the first step, I have taken possession of the Ushiromiya family Head's Ring. Kinzo-sama has publicly displayed the location of the hidden gold within the epitaph under my portrait.",
        "The rules apply equally to all who can read the epitaph. Tonight, enjoy your battle of wits with Kinzo-sama to the fullest. ――Beatrice the Golden"
      ]
    },
    {
      title: "The Witch's Letter II",
      pages: [
        "Praise my name."
      ]
    },
    {
      title: "The Witch's Letter III",
      pages: [
        "Are you enjoying the riddle of Kinzo-sama's epitaph? You have very little time remaining.",
        "Abandon any naive hopes of escaping after the storm passes. This game can only end with my victory or yours. When time runs out, I will win by default. There will be no ties.",
        "Make sure that you do not misunderstand your current situation."
      ]
    },
    {
      title: "The Witch's Game Record",
      pages: [
        "First Twilight: Krauss, Rudolf, Kyrie, Rosa, Shannon, and Gohda were chosen by the key and offered up as sacrifices.",
        "Second Twilight: Eva and Hideyoshi were pierced through the forehead by stakes.",
        "Fourth to Eighth Twilights: Kinzo (head), Kanon (chest), Genji (stomach), Nanjo (knee), and Kumasawa (leg) were killed according to the epitaph.",
        "Ninth Twilight: Beatrice revived. Natsuhi was granted the honor of a duel and died.",
        "Tenth Twilight: George, Jessica, and Maria were invited to the Golden Land after acknowledging the witch. Battler's fate remained uncertain."
      ]
    },
    {
      title: "Winchester M1894 Sawed Off",
      pages: [
        "A sawed-off custom rifle from the golden age of Winchesters. Its portability compensates for its shorter lethal range.",
        "It can be fired rapidly by skillfully working the lever action. Its characteristic lever handle allows for a stylish one-handed reload.",
        "Modified to match Kinzo's preferences, it uses .45 Long Colt bullets and holds 4+1 rounds."
      ]
    },
    {
      title: "The Seven Stakes of Purgatory",
      pages: [
        "Stakes containing the seven magics representing the seven deadly sins.",
        "They strike their targets with perfect accuracy, moving at ultra-high speeds and changing trajectories freely.",
        "They cannot target pure individuals who have not committed one of the seven deadly sins or those with strong resistance to magical power."
      ]
    }
  ]
};