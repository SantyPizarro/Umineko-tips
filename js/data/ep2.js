export const ep2 = {
  id: 2,
  title: "Turn of the Golden Witch",
  background: "assets/backgrounds/m1f_p1b.png",
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
          phase: "missing",
          image: "assets/characters/ep1/kinzo/full/kin missing.png",
          text: [
            `Disappeared from his study unnoticed.
Kinzo's study has everything from a bed to a toilet to a bathtub, so it is extremely rare for him to go outside.

However, he does occasionally go out for a walk on a whim without telling anybody, and his disappearance invariably leads to a huge uproar throughout the house. He usually comes back as soon as he gets hungry...usually...`
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
            `The Golden Witch, who has lived a thousand years.

She has surpassed the limits of humans and, like demons, will sometimes appear in response to the summons made by humans, to offer her power in exchange for a price.

She likes black tea and ice cream. She hates boredom and people who deny her existence.`
          ]
        },
                {
          phase: "alive2",
          image: "assets/characters/ep2/beatrice/full/Bea d1.png",
          text: [
            `The mysterious visitor and 19th person who appeared on the day of the family conference. She goes by the same name as the Golden Witch who gave the gold to Kinzo.

            Her reasons for visiting are unknown.

            She was ushered into the VIP room, which no one had been allowed to use in the past.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/bea/full/bea smug.png",
          text: [
            `What a useless dream, to try and kill me despite being a mere human.
            Fire your bullets, and they will merely reflect back towards you like light off a mirror.

            However, there does exist just one way to kill me. You hold that method in the palm of your hand. Though I doubt one as mediocre as you could ever pull it off.

            Hihihihihihihihihihihihihihi!
            Heheheheheheheheheheh!`
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
            `His corpse was found inside the rose garden storehouse. 
            The direct cause of death is unknown, but it seems the side of his head was smashed after his death.

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
            `Found on the bed of a guest room inside the mansion, with a weapon resembling an icepick sticking out of her forehead.

This is the end of her endless struggles over the family headship. At the very least, she should be allowed to sleep peacefully with her husband.`
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
            `His corpse was found inside the rose garden storehouse. The direct cause of death is unknown, but it seems the side of his head was smashed after his death.

Last night, he told Battler that he might be killed. Did he have some premonition?`
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

`Her corpse was found inside the rose garden storehouse. Her face seems to have been smashed after her death.

I'll get to see her again. So I don't feel lonely.`
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
            `Eva's husband. He was adopted into the family upon their marriage.

He is the president of a successful mid-sized restaurant chain. Due to his cheerful personality, he is often seen as a peacemaker during the family conference.

Among the siblings' spouses, who are often viewed as outsiders, his successful career and gentle nature earn him a degree of respect.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/hide/full/hid dead.png",
          text: [
            `Found on the bed of a guest room inside the mansion, with a weapon resembling an icepick sticking out of his forehead.

He died together with his beloved wife. At the very least, perhaps he didn't have to suffer the sorrow of being the only one left behind.`
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
            `Her corpse was found inside the rose garden storehouse. Her face seems to have been smashed after her death.

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

Because his father immediately remarried after his mother Asumu's death, he rebelled and left the Ushiromiya family to live with his maternal grandparents.

However, following their deaths, he has returned to the Ushiromiya family for the first time in six years.

He is a bit of a skirt-chaser, but is a hot-blooded youth with a strong sense of justice.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/battler/full/but dead.png",
          text: [
            `Missing.

Even though he was given a precious invitation to the Golden Land, a single fool refused to believe in the witch, and all of the magic disappeared.

He was then chewed to bits by demons and went to hell.`
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
            `Missing.
Even though he was given a precious invitation to the Golden Land, a single fool refused to believe in the witch, and all of the magic disappeared.

He was then chewed to bits by demons and went to hell.`
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

"Uu-uu" is her characteristic way of speaking.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/maria/full/mar dead.png",
          text: [
            `Missing.

Even though she was given a precious invitation to the Golden Land, a single fool refused to believe in the witch, and all of the magic disappeared.

She was then chewed to bits by demons and went to hell.`
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
            `Her corpse was found inside the rose garden storehouse. 
            
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

At the eighth twilight, gouge the leg and kill.`
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

charactersFantasy: [
    {
      id: "beatrice",
      name: "Beatrice",
      portrait: "assets/characters/ep2/beatrice/portrait/bea_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/beatrice/full/bea_copy.png",
          text: [
            `The Golden Witch, who has lived a thousand years.
            She has surpassed the limits of humans and, like demons, will sometimes appear in response to the summons made by humans, to offer her power in exchange for a price.
            She likes black tea and ice cream. She hates boredom and people who deny her existence.`
          ]
        }
      ]
    },
    {
      id: "bernkastel",
      name: "Bernkastel",
      portrait: "assets/characters/ep2/bernkastel/portrait/ber_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/bernkastel/full/ber_copy.png",
          text: [
            `The Witch of the Miracles, who has lived for a thousand years.
            Her vast power is capable of creating all kinds of miracles, but her heart has broken a bit as a result.
            Back when she was a human, Lambdadelta once imprisoned her with a cruel fate, toying with her the whole time. As a result, it seems she's unable to abandon others who are caught within a similar fate.
            Theoretically, she's a witch with the greatest of powers, but in practice, this is no more realistic than folding a piece of paper a hundred times so that it reaches the moon.
            Yet, she did fold it a hundred times.`
          ]
        }
      ]
    },
    {
      id: "lambdadelta",
      name: "Lambdadelta",
      portrait: "assets/characters/ep2/lambdadelta/portrait/lam_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/lambdadelta/full/lam_copy.png",
          text: [
            `The Witch of Certainty, who has lived for a thousand years. She embodies the idea that "hard workers are rewarded" and is revered even by humans.
            Though she is a witch, she does not stray far from the concepts of humans. For that reason, her power as one worshiped by humans is incalculable.
            However, she is fickle about whose efforts she chooses to reward, and in many cases, she bestows her favor upon those who entertain her the most.
            Her immense, swift, and terrifying power can make any witch surrender in an instant.
            However, she is often reckless, and Bernkastel was able to take full advantage of that.`
          ]
        }
      ]
    },
    {
      id: "stakes",
      name: "Stakes of Purgatory",
      portrait: "assets/characters/stakes/portrait_group.png",
      currentPhase: 0,
      currentSubIndex: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/stakes/group_full.png",
          text: [
            `Advanced-level furniture created by Beatrice. They can sometimes act by their own will, but they cannot disobey the orders of their master.
            They are quite powerful while in their human forms, but when they return to their true forms as the Seven Stakes of Purgatory and fly at the enemy at high speeds, they display their true terrifying potential.`
          ]
        }
      ],
      subCharacters: [
        {
          name: "Lucifer",
          image: "assets/characters/stakes/lucifer_full.png",
          info: "Lucifer is the oldest sister. She's haughty and arrogant. However, she actually feels pleasure from submission."
        },
        {
          name: "Leviathan",
          image: "assets/characters/stakes/leviathan_full.png",
          info: "Leviathan is the second sister. She's nothing but a crybaby who's jealous all the time. She'll do whatever it takes to get what she wants."
        },
        {
          name: "Satan",
          image: "assets/characters/stakes/satan_full.png",
          info: "Satan is the third sister. She's very quick to anger. However, she actually wants others to be angry at her."
        },
        {
          name: "Belphegor",
          image: "assets/characters/stakes/belphegor_full.png",
          info: "Belphegor is the fourth sister. She's sensible and reliable. Because of this, she corrupts her masters."
        },
        {
          name: "Mammon",
          image: "assets/characters/stakes/mammon_full.png",
          info: "Mammon is the fifth sister. She's greedy and materialistic. However, she has a hidden compassionate side."
        },
        {
          name: "Beelzebub",
          image: "assets/characters/stakes/beelzebub_full.png",
          info: "Beelzebub is the sixth sister. She's a true gourmet. She'd use any ingredients to make a good meal, even her own body."
        },
        {
          name: "Asmodeus",
          image: "assets/characters/stakes/asmodeus_full.png",
          info: "Asmodeus is the seventh sister. She's a girl at the age where they want a boyfriend. She'd give up her life for love."
        }
      ]
    },
    {
      id: "kinzo",
      name: "Kinzo Ushiromiya",
      portrait: "assets/characters/ep2/kinzo/portrait/kin_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/kinzo/full/kin_copy.png",
          text: [
            `A self-taught human sorcerer. His natural talent and level of knowledge are nothing special, but when his nearly insane powers of concentration and dedication were transformed into magical power, he awakened as a great sorcerer.
            His power is at least great enough that he was able to summon Beatrice and form a contract with her.
            Though his power is great, it is also extremely limited. He specializes in summoning and barriers, so perhaps it is fitting to call him a summoner.`
          ]
        }
      ]
    },
    {
      id: "genji",
      name: "Genji",
      portrait: "assets/characters/ep2/genji/portrait/gen_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/genji/full/gen_copy.png",
          text: [
            `Kinzo's earliest furniture, which he created to serve him and him alone with complete loyalty.
            Though he was Kinzo's first creation, he was made with the help of a high-class demon, so while there were several defects in his initial specifications, he conceals a great potential within himself.
            In the many years following that, he continued to mature and compensate for his many deficiencies, turning himself into the nearly flawless butler furniture that he is now.
            He is approaching the limit of his service life, but the magical power he can unleash for an instant rivals Kinzo's.`
          ]
        }
      ]
    },
    {
      id: "shannon",
      name: "Shannon",
      portrait: "assets/characters/ep2/shannon/portrait/sha_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/shannon/full/sha_copy.png",
          text: [
            `Shannon is, in the truest sense, Kinzo's handmade furniture, which he created without borrowing the power of demons.
            Though there were a few problems with her initial specifications, she was given a very rare and precious thing: a heart. It seems that, as a result of his long personal experience, Kinzo came to believe that the power created by the heart contains within it a strong magic.
            In the lengthy span of time following that, she began to mature, becoming exceptionally skilled with powers of a protective or repulsive nature, such as magical barriers.
            Because of this, in the realm of barriers alone, she possesses immense, magician-class power.`
          ]
        }
      ]
    },
    {
      id: "kanon",
      name: "Kanon",
      portrait: "assets/characters/ep2/kanon/portrait/kan_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/kanon/full/kan_copy.png",
          text: [
            `So far, he is the last furniture created by Kinzo.
            Making use of all his previous experience, Kinzo managed to implement a set of flawless specs. Kanon was also given a heart, but it was much weaker than Shannon's.
            Perhaps because Kinzo felt a sense of approaching personal danger related to his fortune as he neared the end of his life, he bestowed Kanon with the rare power to fight and protect.
            However, he hasn't yet matured very far and is unable to properly control his own power and speed.`
          ]
        }
      ]
    },
    {
      id: "battler",
      name: "Battler Ushiromiya",
      portrait: "assets/characters/ep2/battler/portrait/bat_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/battler/full/bat_copy.png",
          text: [
            `An unfortunate young man whom Beatrice has taken a liking to. A human who inherited the black blood from Kinzo.
            The massive resistance to magical power Kinzo was born with was passed on to Battler. Ironically, it was this trait that made it so hard for Kinzo to succeed as a magician.
            A massive defensive power against magic can be, even by itself, decisive in a battle against a witch.
            Kinzo has begun to lose this power with age, but young Battler's power is still on the rise.
            Perhaps it's understandable that Beatrice tried to crush it as soon as possible.`
          ]
        }
      ]
    },
    {
      id: "maria",
      name: "Maria Ushiromiya",
      portrait: "assets/characters/ep2/maria/portrait/mar_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/maria/full/mar_copy.png",
          text: [
            `A little magician who has inherited the black blood from Kinzo.
            Unlike Kinzo, she was gifted with talent and began to tread the path of the magician from a young age. However, her power is still weak, and she hasn't yet graduated from an apprentice's level.
            However, she is skilled with enchantments, which bestow magical power upon objects, and the magical items she creates are all master class.`
          ]
        }
      ]
    },
    {
      id: "virgilia",
      name: "Virgilia",
      portrait: "assets/characters/ep2/virgilia/portrait/vir_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/virgilia/full/vir_copy.png",
          text: [
            `The previous Beatrice, and the one who taught Beatrice her magic.
            Her name is derived from the guide who leads the protagonist through Hell and Purgatory in the Divine Comedy. She has a calm, ladylike personality and possesses immense magical power, though she currently acts as an advisor.
            She appears to assist Battler, helping him find the logic to deny the witch's illusions.`
          ]
        }
      ]
    },
    {
      id: "ronove",
      name: "Ronove",
      portrait: "assets/characters/ep2/ronove/portrait/ron_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/ronove/full/ron_copy.png",
          text: [
            `One of the 72 great demons. He serves as Beatrice's head butler and furniture.
            He often serves her tea and cookies and is one of the few who can mock Beatrice to her face and get away with it. He has a contract with her, serving as her eyes and ears in exchange for his services.
            His characteristic "pfft-pfft-pfft" laugh and sarcastic nature make him a unique presence in the meta-world.`
          ]
        }
      ]
    },
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
      I have served him for many years in accordance with our contract, but on this say, Kinzo-sama has announced the suspension of that contract. 
      Therefore, I ask that you acknowledge my resignation from he position of family alchemist from this day forth.`,
      `And now, there is one part of the contract that must be explained to all present.
        I, Beatrice, lent Kinzo-sama a vast quantity of gold under certain terms. 
        One of these terms specifies that all the gold is to be returned to me upon the termination of the contract. Furthermore, I am to receive everything of the Ushiromiya family as interest.`,
        `After hearing this, you may feel as though Kinzo-sama has been savagely ruthless.
        However, Kinzo-sama did append a special clause to the contract so that you would have a chance to preserve your wealth and honor. If and only if that special clause is fulfilled, I will lose my rights to the gold and the interest for all eternity.`,
        `Special clause:
        Beatrice retains the right to collect the gold and accumulated interest upon the termination of the contract.
        However, if someone is able to discover the hidden gold of this contract, Beatrice must abandon these rights for all time.`,
        `The collection of the interest will proceed shortly, but if any one of you fulfills the terms of this special clause, I shall return everything, including the portion that has already been collected.
        Furthermore, as the first step in this collection of Kinzo-sama's debt, I have taken possession of the Ushiromiya family 'Head's Ring', which signifies the passage of the Ushiromiya family headship from one individual to another. 
        I ask that you confirm this for yourselves by examining the imprint on the wax seal.`,
        `Kinzo-sama has already publicly displayed the location of the hidden gold within the epitaph under my portrait.
        The rules apply equally to all who can read the epitaph.
        If you discover the gold, I shall return everything to you.
        Tonight, I ask that you enjoy your battle of wits with Kinzo-sama to the fullest. I sincerely pray that this night will be both intellectual and elegant.`,
        `――Beatrice the Golden`
      ]
    },
    {
      title: "The Witch's Letter II",
      style: "tip-witch-letter-2",
      pages: [
        `Did you think I'd be that senile, to just sit around here waiting for you to come barging in?
        You're way too inelegant for this intellectual night.
        I can only imagine what the parents who raised you to be such a moron must've looked like. Oh right, I saw them, and they looked just as moronic as you.
        Now, their bellies are full in the land of sweets!`,
      ]
    },
    {
      title: "The Witch's Letter III",
      style: "tip-witch-letter-3",
      pages: [
        `Members of the Ushiromiya Family and its household, have you now reached the climax of the riddle of the gold's epitaph?
        There is only one way you all can stop me: by solving the epitaph's riddle.
        There are no other options left to you that will result in the suspension of my ceremony.
        I humbly ask that you take care not to misunderstand your current situation.
        Searching for me will prove useless.
        Attempting to escape will prove useless.
        Trying to deny me will prove useless.

        ―― Beatrice the Golden

        P.S.
        I borrowed those two corpses for my ceremony.
        They will be returned to you in due time, so I crave your indulgence.
        Also, these keys belong to you, so I return them to you now.`
      ]
    },
        {
      title: "The Witch's Letter IV",
      style: "tip-witch-letter-4",
      pages: [
        `Have you made progress in solving the epitaph?
        In just a short while, your time will be up in a flash.
        The ninth twilight will begin quite soon.`
      ]
    },
    {
      title: "The Witch's Game Record",
      style: "tip-game-record",
      pages: [
`Ushiromiya Krauss
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Ushiromiya Natsuhi
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Ushiromiya Eva
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Ushiromiya Hideyoshi
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Ushiromiya Rudolf
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.

Ushiromiya Kyrie
Died on the first twilight.
Chosen by the key of the Golden Land and offered up as a sacrifice.`,

`Ushiromiya Jessica
Died on the second twilight.
Pierced through the back by the "Stake of Asmodeus".

Servant Kanon
Died on the second twilight.
Pierced through the chest by the "Stake of Satan".

Servant Shannon
Died on the fourth twilight.
Forehead gouged by the "Stake of Mammon".

Servant Gohda
Died on the fifth twilight.
Chest gouged by the "Stake of Beelzebub".

Ushiromiya George
Died on the sixth twilight.
Stomach gouged by the "Stake of Lucifer".`,

`Family Doctor Nanjo
Died on the seventh twilight.
Knee gouged by the "Stake of Belphegor".

Servant Kumasawa
Died on the eighth twilight.
Leg gouged by the "Stake of Leviathan".

The Witch Beatrice
Revived on the ninth twilight.
Finally opens the door to the Golden Land.

Ushiromiya Kinzo
Missing on the tenth twilight.
After he acknowledged the existence of the witch and prostrated himself, the witch invited him to the Golden Land.

Ushiromiya Rosa
Missing on the tenth twilight.
The witch did not invite this woman, who denied the witch's existence, to the Golden Land.

Ushiromiya Maria
Missing on the tenth twilight.
After she acknowledged the existence of the witch and prostrated herself, the witch invited her to the Golden Land.

Servant Genji
Missing on the tenth twilight.
The witch, whose existence he recognized and whom he prostrated himself before, beckoned him to the Golden Land.`,

`Ushiromiya Battler
Missing on the tenth twilight.
Will he acknowledge the witch's existence and be invited to the Golden Land?`
      ]
    },
    {
      title: "Golden Butterfly Brooch",
      style: "tip-butterfly-brooch",
      pages: [
`This object arranges all fate variables in a favorable manner to form relationships between the sexes.
This leads to nothing more than a favorable arrangement of variables, so its strength differs widely depending on the individuals in question.

Hence, a witch bestowing such an item must make quite sure beforehand that the receiver will be able to use it effectively, or she risks being called a liar. The activation cost is enormous, so it's no more useful to the average person than an ordinary brooch.

However, blind love is easily capable of paying this enormous price. And, if the target of the receiver's affection feels affection in turn, the brooch's effect increases even more dramatically.
Ironically, the more dramatic its effect becomes, the less one would need such a brooch in the first place.`
      ]
    }
  ]
};

const EP2_PC_SOURCE = "local-original-pc-arc.nsa";
const EP2_EN_SOURCE = "local-original-pc-arc3.nsa";

const EP2_PC_COMMON = {
  characterBackdrop: "assets/ui/characters/ep2/backdrop/cha_back.png",
  textPanel: "assets/ui/characters/ep2/text/txt_def2.png",
  flourish: "assets/ui/hana3_back.png"
};

const EP2_PC_FANTASY = {
  characterBackdrop: "assets/ui/characters/ep2_2/backdrop/cha_back_ma.png",
  textPanel: "assets/ui/characters/ep2/text/txt_def2.png",
  flourish: "assets/ui/hana3_back.png"
};

const EP2_NORMAL_PC = {
  kinzo: { code: "kin", grid: [17, 37], tachiX: 380 },
  krauss: { code: "kla", grid: [62, 37], tachiX: 425 },
  natsuhi: { code: "nat", grid: [106, 37], tachiX: 430 },
  jessica: { code: "jes", grid: [150, 37], tachiX: 420 },
  nanjo: { code: "nan", grid: [17, 82], tachiX: 425 },
  eva: { code: "eva", grid: [62, 82], tachiX: 440 },
  hideyoshi: { code: "hid", grid: [106, 82], tachiX: 415 },
  george: { code: "geo", grid: [150, 82], tachiX: 435 },
  beatrice: { code: "bea", grid: [17, 126], tachiX: 380 },
  rudolf: { code: "rud", grid: [62, 126], tachiX: 455 },
  kyrie: { code: "kir", grid: [106, 126], tachiX: 455 },
  battler: { code: "but", grid: [150, 126], tachiX: 455 },
  genji: { code: "gen", grid: [17, 170], tachiX: 455 },
  rosa: { code: "ros", grid: [62, 170], tachiX: 445 },
  maria: { code: "mar", grid: [150, 170], tachiX: 390 },
  shannon: { code: "sha", grid: [17, 214], tachiX: 430 },
  kanon: { code: "kan", grid: [62, 214], tachiX: 460 },
  gohda: { code: "goh", grid: [106, 214], tachiX: 450 },
  kumasawa: { code: "kum", grid: [150, 214], tachiX: 440 }
};

const EP2_NORMAL_STATES = {
  kin: [{ icon: "kin_l", tachi: "kin", textPath: commonText("kin_1") }, { icon: "kin_d", tachi: "kin_d", text: "kin_2" }, { icon: "kin_d", tachi: "kin_d", text: "kin_2" }],
  kla: [{ icon: "kla_l", tachi: "kla", textPath: commonText("kla_1") }, { icon: "kla_d", tachi: "kla_d", text: "kla_2" }],
  nat: [{ icon: "nat_l", tachi: "nat", textPath: commonText("nat_1") }, { icon: "nat_d", tachi: "nat_d", text: "nat_2" }],
  jes: [{ icon: "jes_l", tachi: "jes", textPath: commonText("jes_1") }, { icon: "jes_d", tachi: "jes_d", text: "jes_2" }],
  nan: [{ icon: "nan_l", tachi: "nan", textPath: commonText("nan_1") }, { icon: "nan_d", tachi: "nan_d", text: "nan_2" }, { icon: "nan_d2", tachi: "nan_d2", text: "nan_3" }],
  eva: [{ icon: "eva_l", tachi: "eva", textPath: commonText("eva_1") }, { icon: "eva_d", tachi: "eva_d", text: "eva_2" }],
  hid: [{ icon: "hid_l", tachi: "hid", textPath: commonText("hid_1") }, { icon: "hid_d", tachi: "hid_d", text: "hid_2" }],
  geo: [{ icon: "geo_l", tachi: "geo", textPath: commonText("geo_1") }, { icon: "geo_d", tachi: "geo_d", text: "geo_2" }],
  bea: [{ icon: "bea_l", tachi: "bea", textPath: commonText("bea_1"), tachiX: 380 }, { icon: "bea_l2", tachi: "bea2", text: "bea_2", tachiX: 435 }, { icon: "bea_d", tachi: "bea_d", textPath: commonText("bea_2"), tachiX: 380 }],
  rud: [{ icon: "rud_l", tachi: "rud", textPath: commonText("rud_1") }, { icon: "rud_d", tachi: "rud_d", text: "rud_2" }],
  kir: [{ icon: "kir_l", tachi: "kir", textPath: commonText("kir_1") }, { icon: "kir_d", tachi: "kir_d", text: "kir_2" }],
  but: [{ icon: "but_l", tachi: "but", textPath: commonText("but_1") }, { icon: "but_d", tachi: "but_d", text: "but_2" }],
  gen: [{ icon: "gen_l", tachi: "gen", textPath: commonText("gen_1") }, { icon: "gen_d", tachi: "gen_d", text: "gen_2" }],
  ros: [{ icon: "ros_l", tachi: "ros", textPath: commonText("ros_1") }, { icon: "ros_d", tachi: "ros_d", text: "ros_2" }],
  mar: [{ icon: "mar_l", tachi: "mar", textPath: commonText("mar_1") }, { icon: "mar_d", tachi: "mar_d", text: "mar_2" }],
  sha: [{ icon: "sha_l", tachi: "sha", textPath: commonText("sha_1") }, { icon: "sha_d", tachi: "sha_d", text: "sha_2" }],
  kan: [{ icon: "kan_l", tachi: "kan", textPath: commonText("kan_1") }, { icon: "kan_m", tachi: "kan_m", text: "kan_2" }, { icon: "kan_d", tachi: "kan_d", text: "kan_3" }],
  goh: [{ icon: "goh_l", tachi: "goh", textPath: commonText("goh_1") }, { icon: "goh_d", tachi: "goh_d", text: "goh_2" }],
  kum: [{ icon: "kum_l", tachi: "kum", textPath: commonText("kum_1") }, { icon: "kum_d", tachi: "kum_d", text: "kum_2" }, { icon: "kum_d2", tachi: "kum_d2", text: "kum_3" }]
};

const EP2_ALT_COSTUMES = {
  george: { icon: "geo_l2", tachi: "geo2" },
  shannon: { icon: "sha_l2", tachi: "sha2" },
  kanon: { icon: "kan_l2", tachi: "kan2", tachiX: 440 }
};

const EP2_FANTASY_PC = {
  beatrice: { code: "bea", grid: [17, 37], tachiX: 380 },
  stakes: { code: "rg", grid: [62, 37], tachiX: 420 },
  bernkastel: { code: "ber", grid: [17, 82], tachiX: 430 },
  kinzo: { code: "kin", grid: [62, 82], tachiX: 380 },
  battler: { code: "but", grid: [106, 82], tachiX: 455 },
  maria: { code: "mar", grid: [150, 82], tachiX: 390 },
  lambdadelta: { code: "lam", grid: [17, 126], tachiX: 410 },
  genji: { code: "gen", grid: [62, 126], tachiX: 455 },
  shannon: { code: "sha", grid: [62, 170], tachiX: 430 },
  kanon: { code: "kan", grid: [62, 214], tachiX: 460 }
};

const EP2_FANTASY_STATE = {
  bea: { icon: "bea_l", tachi: "bea", text: "bea_1" },
  ber: { icon: "ber_l", tachi: "ber", text: "ber_1" },
  lam: { icon: "lam_l", tachi: "lam", text: "lam_1" },
  kin: { icon: "kin_l", tachi: "kin", text: "kin_1" },
  but: { icon: "but_l", tachi: "but", text: "but_1" },
  mar: { icon: "mar_l", tachi: "mar", text: "mar_1" },
  gen: { icon: "gen_l", tachi: "gen", text: "gen_1" },
  sha: { icon: "sha_l", tachi: "sha", text: "sha_1" },
  kan: { icon: "kan_l", tachi: "kan", text: "kan_1" },
  rg: { icon: "rg_l", tachi: "rg1", text: "rg1_1" }
};

const EP2_STAKES = [
  ["Lucifer", "rg1"],
  ["Leviathan", "rg2"],
  ["Satan", "rg3"],
  ["Belphegor", "rg4"],
  ["Mammon", "rg5"],
  ["Beelzebub", "rg6"],
  ["Asmodeus", "rg7"]
];

const EP2_TIP_PAGE_COUNTS = [3, 6, 1, 1, 1, 4, 1];

ep2.charactersFantasy = ep2.charactersFantasy.filter(character => EP2_FANTASY_PC[character.id]);
addEp2PcOnlyCharacterStates(ep2.characters);
ep2.pc = EP2_PC_COMMON;
ep2.modes = {
  normal: {
    background: ep2.background,
    characters: ep2.characters,
    tips: ep2.tips,
    pc: EP2_PC_COMMON
  },
  fantasy: {
    background: "assets/backgrounds/different_space_1a.png",
    characters: ep2.charactersFantasy,
    tips: ep2.tips,
    pc: EP2_PC_FANTASY
  }
};

applyEp2PcCharacters(ep2.characters, EP2_NORMAL_PC, "ep2", EP2_NORMAL_STATES);
applyEp2PcCharacters(ep2.charactersFantasy, EP2_FANTASY_PC, "ep2_2", EP2_FANTASY_STATE, true);
applyEp2Tips(ep2.tips);

function applyEp2PcCharacters(characters, pcMap, folder, stateMap, singleState = false) {
  for (const character of characters || []) {
    const pc = pcMap[character.id];
    if (!pc) continue;

    character.pc = {
      sourceUrl: EP2_PC_SOURCE,
      code: pc.code,
      gridX: pc.grid[0],
      gridY: pc.grid[1],
      tachiX: pc.tachiX,
      iconAlive: `assets/ui/characters/${folder}/icons/${pc.code}_l.png`,
      iconDead: `assets/ui/characters/${folder}/icons/${pc.code}_l.png`
    };

    for (const [index, state] of (character.states || []).entries()) {
      const statePc = singleState ? stateMap[pc.code] : (stateMap[pc.code]?.[index] || stateMap[pc.code]?.at(-1));
      if (!statePc) continue;

      state.pc = {
        sourceUrl: EP2_PC_SOURCE,
        icon: `assets/ui/characters/${folder}/icons/${statePc.icon}.png`,
        tachi: `assets/ui/characters/${folder}/tachi/${statePc.tachi}.png`,
        referenceTextImage: statePc.textPath || (statePc.text
          ? `assets/ui/characters/${folder}/reference-text/${statePc.text}.png`
          : null)
      };
      if (statePc.tachiX) state.pc.tachiX = statePc.tachiX;
    }

    if (character.id === "stakes") {
      for (const subCharacter of character.subCharacters || []) {
        const stake = EP2_STAKES.find(([name]) => name === subCharacter.name);
        if (!stake) continue;
        subCharacter.pc = {
          tachi: `assets/ui/characters/ep2_2/tachi/${stake[1]}.png`,
          referenceTextImage: `assets/ui/characters/ep2_2/reference-text/${stake[1]}_1.png`,
          tachiX: 420
        };
      }
    }
  }
}

function addEp2PcOnlyCharacterStates(characters) {
  renameState(characters, "kanon", 1, "missing");
  insertState(characters, "kanon", 2, {
    phase: "dead",
    image: "assets/ui/characters/ep2/tachi/kan_d.png",
    text: ["Kanon's final EP2 status page from the original PC character screen."]
  });
  insertState(characters, "kumasawa", 2, {
    phase: "dead2",
    image: "assets/ui/characters/ep2/tachi/kum_d2.png",
    text: ["Kumasawa's final EP2 status page from the original PC character screen."]
  });
  insertState(characters, "nanjo", 2, {
    phase: "dead2",
    image: "assets/ui/characters/ep2/tachi/nan_d2.png",
    text: ["Nanjo's final EP2 status page from the original PC character screen."]
  });
}

function renameState(characters, id, index, phase) {
  const character = characters.find(item => item.id === id);
  if (character?.states[index]) character.states[index].phase = phase;
}

function insertState(characters, id, index, state) {
  const character = characters.find(item => item.id === id);
  if (!character || character.states.some(existing => existing.phase === state.phase)) return;
  character.states.splice(index, 0, state);
}

for (const character of ep2.characters) {
  const alt = EP2_ALT_COSTUMES[character.id];
  const aliveState = character.states?.[0];
  if (!alt || !aliveState?.pc) continue;

  aliveState.pcAlt = {
    icon: `assets/ui/characters/ep2/icons/${alt.icon}.png`,
    tachi: `assets/ui/characters/ep2/tachi/${alt.tachi}.png`
  };
  if (alt.tachiX) aliveState.pcAlt.tachiX = alt.tachiX;
}

function commonText(fileName) {
  return `assets/ui/characters/ep1/reference-text/${fileName}.png`;
}

function applyEp2Tips(tips) {
  for (const [index, tip] of (tips || []).entries()) {
    const tipNumber = index + 1;
    const pageCount = EP2_TIP_PAGE_COUNTS[index] || tip.pages?.length || 1;
    if (Array.isArray(tip.pages)) {
      tip.pages = tip.pages.slice(0, pageCount);
    }
    Object.assign(tip, {
      id: `ep2-tip-${tipNumber}`,
      episode: 2,
      unlockOrder: tipNumber,
      buttonImage: `assets/ui/tips/ep2/buttons/tips2_${tipNumber}.png`,
      referenceButtonImage: `assets/ui/tips/ep2/buttons/tips2_${tipNumber}.png`,
      background: "assets/ui/tips/ep1/backdrop/tips1_back.png",
      pageImages: Array.from(
        { length: pageCount },
        (_, pageIndex) => `assets/tips/ep2/${tipNumber}_${pageIndex + 1}.png`
      ),
      referencePageImages: Array.from(
        { length: pageCount },
        (_, pageIndex) => `assets/tips/ep2/${tipNumber}_${pageIndex + 1}.png`
      ),
      sourceUrl: EP2_EN_SOURCE,
      verified: false
    });
  }
}
