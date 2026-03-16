export const ep4 = {
  id: 4,
  background: "assets/backgrounds/mansion_day.png",
  backgroundFantasy: "assets/backgrounds/golden_land.png",
  backgroundFuture: "assets/backgrounds/skyscraper_roof.png",

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
            `Missing on the tenth twilight.

After he acknowledged the existence of the witch and prostrated himself, the witch invited him to the Golden Land.

The old sorcerer's wish was finally granted. He always knew this was a possible result of his gamble.`
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
            `Found dead on the first twilight.

He was chosen by the key of the Golden Land and offered up as a sacrifice. This time, the ceremony began with the head of the family himself.`
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

The sole survivor of the previous game's massacre. In the world of 1998, she became the legal guardian of Ange Ushiromiya. She carries with her the secret of what truly happened on Rokkenjima.

She will take that secret to her grave.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/eva/full/eva dead.png",
          text: [
            `Missing on the tenth twilight.

She was the final surviving adult. After a series of trials beyond human endurance, she too acknowledged the witch's existence.

Or perhaps she simply had nothing left to refuse.`
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

He has a secret that he intended to tell Battler at this year's family conference. A secret that involves Battler's very identity.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/rudo/full/rud dead.png",
          text: [
            `Found dead on the first twilight.

He was chosen by the key of the Golden Land and offered up as a sacrifice.

He never got to tell Battler his secret. In some games, that secret dies with him.`
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
            `Found dead on the first twilight.

She was chosen by the key of the Golden Land and offered up as a sacrifice.

She died before she could make things right with Maria. In another world, she gets the chance.`
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
            `Found dead on the first twilight.

She was chosen by the key of the Golden Land and offered up as a sacrifice.

The pride of the Ushiromiya household was extinguished before the night had even truly begun.`
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
            `Found dead on the first twilight.

He was chosen by the key of the Golden Land and offered up as a sacrifice.

A man of peace, forced into a ceremony of sacrifice.`
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
            `Found dead on the first twilight.

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
          image: "assets/characters/ep1/battler/full/but copy.png",
          text: [
            `Rudolf's son.

The axis of the game's entire meta-world conflict. After three games of denying the witch's existence, Battler finds himself at a stalemate — Beatrice has stopped responding to his challenges.

In this fourth game, the stakes expand beyond Rokkenjima. His sister Ange, 12 years in the future, is also searching for the truth.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/battler/full/but dead.png",
          text: [
            `Missing on the tenth twilight.

He acknowledged the witch. Or perhaps, more accurately — he chose to believe in her for the sake of those he loves.

Will that belief save him? Or is it the beginning of his defeat?`
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
            `Missing on the tenth twilight.

After she acknowledged the existence of the witch and prostrated herself, the witch invited her to the Golden Land.

Or perhaps, she simply could not bear to fight any longer.`
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
            `Missing on the tenth twilight.

After he acknowledged the existence of the witch and prostrated himself, the witch invited him to the Golden Land.

He only ever wanted to be with Shannon. In the Golden Land, that wish is finally granted.`
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

In this fourth episode, her relationship with Beatrice and the nature of their Mariage Sorcière alliance is explored in depth. Her diary, a powerful grimoire, can breathe life into the toys she loves.

Her magic was never something to be feared. It was always her way of surviving a world that didn't understand her.

"Uu-uu!"`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/maria/full/mar dead.png",
          text: [
            `Missing on the tenth twilight.

After she acknowledged the existence of the witch and prostrated herself, the witch invited her to the Golden Land.

For Maria, the Golden Land was never a reward. It was always just... home.`
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
            `Missing on the tenth twilight.

The witch, whose existence he recognized and whom he prostrated himself before, beckoned him to the Golden Land.

He served Kinzo until the very end, and beyond.`
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

In the world of magic, she is furniture who has chosen to love. That choice is the most powerful and most dangerous thing about her.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/shannon/full/sha dead.png",
          text: [
            `Missing on the tenth twilight.

The witch acknowledged her existence and invited her to the Golden Land.

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

He insists that furniture cannot love. Yet Jessica refuses to let him believe that.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep1/kanon/full/kan dead.png",
          text: [
            `Missing on the tenth twilight.

The witch acknowledged his existence and invited him to the Golden Land.

Furniture that learned to feel. That is no small thing.`
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
            `Missing on the tenth twilight.

The witch acknowledged his existence and invited him to the Golden Land.

He simply wanted to cook for people who would enjoy his food. Even in death, he was robbed of that simple wish.`
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
            `Missing on the tenth twilight.

The witch acknowledged her existence and invited her to the Golden Land.

An old woman who had seen many things. In the end, she saw one thing more.`
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
            `Missing on the tenth twilight.

The witch acknowledged his existence and invited him to the Golden Land.

His friendship with Kinzo outlasted everything. Even death.`
          ]
        }
      ]
    }
  ],

  // ── MODO FANTASY: Meta-mundo ──────────────────────────────────────────────
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
      id: "bernkastel",
      name: "Bernkastel",
      portrait: "assets/characters/ep4/bernkastel/portrait/ber_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/bernkastel/full/ber_copy.png",
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
      portrait: "assets/characters/ep4/lambdadelta/portrait/lam_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/lambdadelta/full/lam_copy.png",
          text: [
            `The Witch of Certainty, who has lived for a thousand years. She embodies the idea that "hard workers are rewarded" and is revered even by humans.

Though she is a witch, she does not stray far from the concepts of humans. For that reason, her power as one worshiped by humans is incalculable.

However, she is fickle about whose efforts she chooses to reward, and in many cases, she bestows her favor upon those who entertain her the most.

Her immense, swift, and terrifying power can make any witch surrender in an instant. However, she is often reckless, and Bernkastel was able to take full advantage of that.`
          ]
        }
      ]
    },
    {
      id: "gaap",
      name: "Gaap",
      portrait: "assets/characters/ep4/gaap/portrait/gap_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/gaap/full/gap_copy.png",
          text: [
            `The 33rd Demon of the Earl rank. A close friend of Beatrice.

She has the power to manipulate holes in space, allowing her to teleport objects and people instantly. Her magic is responsible for many of the "closed room" mysteries that confound Battler.

She has a very fashionable and flirtatious personality, but her tactical mind is sharp and deadly. She and Beatrice have a long history, and she takes a particular delight in teasing anyone who takes themselves too seriously.`
          ]
        }
      ]
    },
    {
      id: "ronove",
      name: "Ronove",
      portrait: "assets/characters/ep4/ronove/portrait/ron_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/ronove/full/ron_copy.png",
          text: [
            `One of the 72 great demons. He serves as Beatrice's head butler and furniture.

He often serves her tea and cookies and is one of the few who can mock Beatrice to her face and get away with it. He has a contract with her, serving as her eyes and ears in exchange for his services.

His characteristic "pfft-pfft-pfft" laugh and sarcastic nature make him a unique presence in the meta-world.`
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
            `Maria's beloved stuffed lion, given form and soul by Beatrice's magic through Maria's own enchantment.

In the world of magic, he is a diplomat and a protector. He holds the title of "Minister of the Kingdom of Mariage Sorcière." He has a kind and innocent heart, wanting only for Maria to be happy.

He does not fully understand why Maria sometimes cries alone at night. But he always sits beside her when she does.

"Uryuu! I'll do my best to protect Maria!"`
          ]
        }
      ]
    },
    {
      id: "maria_fantasy",
      name: "Ushiromiya Maria (Apprentice Witch)",
      portrait: "assets/characters/ep4/maria/portrait/mar_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/maria/full/mar_copy.png",
          text: [
            `A little magician who has inherited the black blood from Kinzo.

Unlike Kinzo, she was gifted with talent and began to tread the path of the magician from a young age. However, her power is still weak, and she hasn't yet graduated from an apprentice's level.

However, she is skilled with enchantments, which bestow magical power upon objects, and the magical items she creates are all master class.

Her grimoire, the Book of Maria, can bring the toys she loves to life. Sakutarou is her greatest creation.`
          ]
        }
      ]
    }
  ],

  // ── MODO FUTURO: 1998 ────────────────────────────────────────────────────
  charactersFuture: [
    {
      id: "ange_1998",
      name: "Ushiromiya Ange",
      portrait: "assets/characters/ep4/ange1998/portrait/ang_future.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep4/ange1998/full/ang_long.png",
          text: [
            `Rudolf and Kyrie's daughter. The sole survivor of the Ushiromiya family.

She was six years old in 1986, too sick to accompany her family to Rokkenjima. She has spent twelve years living under Eva's guardianship, miserable and alone, blamed simply for existing.

Now, in 1998, she has decided to journey to the truth herself. She inherited the title of "Beatrice" — the Witch of Resurrection — and she intends to use it.

"I'll find out the truth. No matter what it costs me."`
          ]
        }
      ]
    },
    {
      id: "mammon_1998",
      name: "Mammon",
      portrait: "assets/characters/ep4/mammon/portrait/mam_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep4/mammon/full/mam_future.png",
          text: [
            `The Stake of Greed. One of Beatrice's Seven Sisters of Purgatory.

In the world of 1998, she becomes Ange's closest companion and only friend. Unlike her sisters, who Ange eventually erases in a moment of rage and grief, Mammon stays beside her.

She wants more than anything. And what she wants most, in the end, is for Ange to not be alone.`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "Mariage Sorcière",
      style: "tip-lore",
      pages: [
        `An alliance of witches formed between Beatrice and Maria Ushiromiya.

It is a magical covenant that allows them to share their power and recognize each other's illusions. Through this alliance, Maria's diary becomes a powerful grimoire capable of bringing her toys to life.`,
        `The primary rule of this alliance is that magic cannot exist without two people: one to perform it and one to believe in it.

Even the most powerful witch in the world cannot perform magic if there is no one there to see it and believe.

That is why Maria was so precious to Beatrice. That is why Beatrice protected her.`
      ]
    },
    {
      title: "The System of Magic",
      style: "tip-lore",
      pages: [
        `Magic, as understood by the witches of the meta-world, is not a simple matter of willpower or incantation.

It requires a source of power, a vessel to contain it, and above all — a witness to believe in it. Without belief, magic collapses into nothing.

This is why the existence of witches is intertwined with the existence of humans. A witch without someone to believe in her is a witch who does not exist.`,
        `Furniture are magical beings created to serve their master. They are given form by their master's power and shaped by their master's will.

However, some furniture develop something their creators did not intend: a heart.

A heart that feels. A heart that loves. A heart that, in the end, cannot be simply ordered away.`
      ]
    },
    {
      title: "Regarding Witches",
      style: "tip-lore",
      pages: [
        `Witches are ancient beings who have long since surpassed the limits of human life.

They exist across countless parallel "fragments" of possibility, watching the games played within them. Some observe with detached amusement. Some, with genuine care.

The title of "witch" is not merely a rank — it is a state of being. One becomes a witch not by studying magic, but by surpassing the boundaries of the self.`,
        `There are witches who were once human. There are witches who never were.

And there are witches who carry the memory of having been human so close to their hearts that they have never truly left that state behind.

Beatrice is one of the latter.`
      ]
    },
    {
      title: "Regarding Voyagers",
      style: "tip-lore",
      pages: [
        `Voyagers are witches and sorcerers of the highest tier — beings capable of moving freely between parallel fragments of possibility.

They do not merely observe the games played on the gameboard. They can intervene, rewrite, and create new possibilities where none existed before.

Bernkastel and Lambdadelta are Voyagers. So, in her own way, is the witch Beatrice.`,
        `The power of a Voyager is not infinite. It is tied to what others believe them to be capable of.

A witch who is believed to be all-powerful becomes all-powerful.

A witch who is denied... ceases to exist.`
      ]
    }
  ]
};