export const ep8 = {
  id: 8,
  title: "Twilight of the Golden Witch",
  background: "assets/backgrounds/golden_land_final.png",
  backgroundFantasy: "assets/backgrounds/different_space_1a.png",
  characters: [],
  charactersFantasy: [],
  tips: []
};

const EP8_PC_SOURCE = "local-original-chiru-pc-archives";

const EP8_PC_NORMAL = {
  characterBackdrop: "assets/ui/characters/ep8/backdrop/cha_back_29.png",
  textPanel: "assets/ui/characters/ep8/text/txt_def2.png",
  flourish: "assets/ui/hana3_back.png"
};

const EP8_PC_FANTASY = {
  characterBackdrop: "assets/ui/characters/ep8_2/backdrop/cha_back3.png",
  textPanel: "assets/ui/characters/ep8/text/txt_def2.png",
  flourish: "assets/ui/hana3_back.png"
};

const EP8_NORMAL_PC = {
  kinzo: pc8("kin", [17, 37], 380, [
    st8("ep5", "kin_l", "kin", "ep5", "kin_1"),
    st8("ep7", "ki2_l", "ki2", "ep7", "ki2_1", "ep7", 450)
  ]),
  krauss: pc8("kla", [62, 37], 425, [st8("ep5", "kla_l", "kla", "ep5", "kla_1")]),
  natsuhi: pc8("nat", [106, 37], 430, [st8("ep5", "nat_l", "nat", "ep5", "nat_1")]),
  jessica: pc8("jes", [150, 37], 420, [st8("ep5", "jes_l", "jes", "ep5", "jes_1")]),
  nanjo: pc8("nan", [17, 82], 425, [st8("ep5", "nan_l", "nan", "ep5", "nan_1")]),
  eva: pc8("eva", [62, 82], 440, [st8("ep5", "eva_l", "eva", "ep5", "eva_1")]),
  hideyoshi: pc8("hid", [106, 82], 415, [st8("ep5", "hid_l", "hid", "ep5", "hid_1")]),
  george: pc8("geo", [150, 82], 435, [st8("ep5", "geo_l", "geo", "ep5", "geo_1")]),
  beatrice: pc8("bea", [17, 126], 380, [st8("ep8", "bea_l2", "bea2", "ep8", "bea_1")]),
  rudolf: pc8("rud", [62, 126], 455, [st8("ep5", "rud_l", "rud", "ep5", "rud_1")]),
  kyrie: pc8("kir", [106, 126], 455, [st8("ep5", "kir_l", "kir", "ep5", "kir_1")]),
  battler: pc8("but", [150, 126], 455, [st8("ep5", "but_l", "but", "ep5", "but_1")]),
  genji: pc8("gen", [17, 170], 455, [st8("ep5", "gen_l", "gen", "ep5", "gen_1")]),
  rosa: pc8("ros", [62, 170], 445, [st8("ep5", "ros_l", "ros", "ep5", "ros_1")]),
  maria: pc8("mar", [106, 170], 390, [st8("ep5", "mar_l", "mar", "ep5", "mar_1")]),
  ange: pc8("en2", [150, 170], 430, [st8("ep8", "en2_l", "en2_1", "ep8", "en2_1")]),
  shannon: pc8("sha", [17, 214], 430, [st8("ep5", "sha_l", "sha", "ep5", "sha_1")]),
  kanon: pc8("kan", [62, 214], 460, [st8("ep5", "kan_l", "kan", "ep5", "kan_1")]),
  gohda: pc8("goh", [106, 214], 450, [st8("ep5", "goh_l", "goh", "ep5", "goh_1")]),
  kumasawa: pc8("kum", [150, 214], 440, [st8("ep5", "kum_l", "kum", "ep5", "kum_1")])
};

const EP8_FANTASY_PC = {
  furnitures: pc8("w", [17, 82], 360, [st8("ep6_2", "w_l", "wal", "ep5_2", "wal_1", "ep5_2")]),
  stakes: pc8("rg", [17, 126], 420, [st8("ep5_2", "rg_l", "rg1", "ep5_2", "rg1_1")]),
  chiester_sisters: pc8("s", [17, 170], 420, [st8("ep5_2", "s_l", "s45", "ep5_2", "s45_1")]),
  lambdadelta: pc8("lam", [62, 37], 410, [st8("ep5_2", "lam_l", "lam", "ep8_2", "lam_1", "ep5_2")]),
  battler_beatrice: pc8("bb", [62, 82], 356, [st8("ep8_2", "bb_l", "bb_1", "ep8_2", "bb_1")]),
  knox: pc8("k", [62, 170], 405, [st8("ep5_2", "k_l", "dla", "ep5_2", "dla_12")]),
  witch_resurrection: pc8("wr", [62, 214], 400, [st8("ep8_2", "wr_l", "wr_1", "ep8_2", "wr_1")]),
  bernkastel: pc8("ber", [106, 37], 430, [st8("ep5_2", "ber_l", "ber", "ep8_2", "ber_1", "ep5_2")]),
  ange: pc8("en2", [106, 82], 440, [st8("ep8_2", "en2_l", "en2_1", "ep8_2", "en2_1")]),
  featherine: pc8("fea", [106, 170], 333, [st8("ep8_2", "fea_l2", "fea_2", "ep6_3", "fea_2", "ep8_2")]),
  zepar_furfur: pc8("zf", [106, 214], 403, [st8("ep6_2", "zf_l", "zep_1", "ep6_2", "zep_1")]),
  erika: pc8("eri", [150, 82], 393, [st8("ep5_2", "eri_l", "eri", "ep8_2", "eri_1", "ep5_2")]),
  eva_beatrice: pc8("ev2", [150, 126], 393, [st8("ep8_2", "ev2_l", "ev2_1", "ep8_2", "ev2_1")]),
  goats: pc8("goa", [150, 170], 403, [st8("ep6_2", "goa_l", "goa_1", "ep6_2", "goa_1", "ep6_2")])
};

ensureEp8Characters();
ensureEp8FantasyCharacters();

ep8.pc = EP8_PC_NORMAL;
ep8.modes = {
  normal: {
    background: ep8.background,
    characters: ep8.characters,
    tips: ep8.tips,
    pc: EP8_PC_NORMAL
  },
  fantasy: {
    background: ep8.backgroundFantasy,
    characters: ep8.charactersFantasy,
    tips: [],
    pc: EP8_PC_FANTASY
  }
};

applyEp8PcCharacters(ep8.characters, EP8_NORMAL_PC);
applyEp8PcCharacters(ep8.charactersFantasy, EP8_FANTASY_PC);

function pc8(code, grid, tachiX, states) {
  return { code, grid, tachiX, states };
}

function st8(folder, icon, tachi, textFolder, text, tachiFolder = folder, tachiX = null) {
  return { folder, icon, tachi, textFolder, text, tachiFolder, tachiX };
}

function ensureEp8Characters() {
  const names = {
    kinzo: "Ushiromiya Kinzo",
    krauss: "Ushiromiya Krauss",
    natsuhi: "Ushiromiya Natsuhi",
    jessica: "Ushiromiya Jessica",
    nanjo: "Family Doctor Nanjo",
    eva: "Ushiromiya Eva",
    hideyoshi: "Ushiromiya Hideyoshi",
    george: "Ushiromiya George",
    beatrice: "Beatrice",
    rudolf: "Ushiromiya Rudolf",
    kyrie: "Ushiromiya Kyrie",
    battler: "Ushiromiya Battler",
    genji: "Ushiromiya Genji",
    rosa: "Ushiromiya Rosa",
    maria: "Ushiromiya Maria",
    ange: "Ushiromiya Ange",
    shannon: "Shannon",
    kanon: "Kanon",
    gohda: "Gohda",
    kumasawa: "Kumasawa"
  };

  ep8.characters = Object.entries(EP8_NORMAL_PC).map(([id, pc]) => makeCharacter(id, names[id], pc));
}

function ensureEp8FantasyCharacters() {
  const names = {
    furnitures: "Furnitures",
    stakes: "The Seven Stakes of Purgatory",
    chiester_sisters: "Chiester Sisters",
    lambdadelta: "Lambdadelta",
    battler_beatrice: "Battler and Beatrice",
    knox: "Knox's Decalogue",
    witch_resurrection: "The Witch of Resurrection",
    bernkastel: "Bernkastel",
    ange: "Ushiromiya Ange",
    featherine: "Featherine Augustus Aurora",
    zepar_furfur: "Zepar and Furfur",
    erika: "Furudo Erika",
    eva_beatrice: "EVA-Beatrice",
    goats: "Goats"
  };

  ep8.charactersFantasy = Object.entries(EP8_FANTASY_PC).map(([id, pc]) => ({
    ...makeCharacter(id, names[id], pc),
    ...(id === "furnitures" ? { subCharacters: makeFurnitureSubCharacters() } : {}),
    ...(id === "stakes" ? { subCharacters: makeStakeSubCharacters("ep5_2") } : {}),
    ...(id === "chiester_sisters" ? { subCharacters: makeChiesterSubCharacters() } : {}),
    ...(id === "knox" ? { subCharacters: makeKnoxSubCharacters() } : {}),
    ...(id === "zepar_furfur" ? { subCharacters: makeZeparFurfurSubCharacters() } : {})
  }));
}

function makeCharacter(id, name, pc) {
  return {
    id,
    name,
    portrait: icon8(pc.states[0]),
    currentPhase: 0,
    states: pc.states.map((statePc, index) => ({
      phase: index === 0 ? "active" : "alternate",
      image: tachi8(statePc),
      pages: [name]
    }))
  };
}

function applyEp8PcCharacters(characters, pcMap) {
  for (const character of characters || []) {
    const pc = pcMap[character.id];
    if (!pc) continue;
    character.pc = {
      sourceUrl: EP8_PC_SOURCE,
      code: pc.code,
      gridX: pc.grid[0],
      gridY: pc.grid[1],
      tachiX: pc.tachiX,
      iconAlive: icon8(pc.states[0]),
      iconDead: icon8(pc.states[pc.states.length - 1]),
      changeable: pc.states.length > 1
    };

    for (const [index, item] of (character.states || []).entries()) {
      const statePc = pc.states[index] || pc.states[0];
      item.pc = {
        sourceUrl: EP8_PC_SOURCE,
        icon: icon8(statePc),
        tachi: tachi8(statePc),
        referenceTextImage: text8(statePc),
        tachiX: statePc.tachiX ?? pc.tachiX
      };
    }
  }
}

function icon8(item) {
  return `assets/ui/characters/${item.folder}/icons/${item.icon}.png`;
}

function tachi8(item) {
  return `assets/ui/characters/${item.tachiFolder || item.folder}/tachi/${item.tachi}.png`;
}

function text8(item) {
  return `assets/ui/characters/${item.textFolder}/reference-text/${item.text}.png`;
}

function makeStakeSubCharacters(folder) {
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
    image: `assets/ui/characters/${folder}/tachi/${code}.png`,
    pages: [name],
    pc: {
      tachi: `assets/ui/characters/${folder}/tachi/${code}.png`,
      referenceTextImage: `assets/ui/characters/${folder}/reference-text/${code}_1.png`,
      tachiX: 420
    }
  }));
}

function makeFurnitureSubCharacters() {
  return [
    ["Virgilia", "wal", "wal_1", 360],
    ["Ronove", "ron", "ron_1", 420],
    ["Gaap", "gap", "gap_1", 415]
  ].map(([name, code, text, tachiX]) => ({
    name,
    image: `assets/ui/characters/ep5_2/tachi/${code}.png`,
    pages: [name],
    pc: {
      tachi: `assets/ui/characters/ep5_2/tachi/${code}.png`,
      referenceTextImage: `assets/ui/characters/ep5_2/reference-text/${text}.png`,
      tachiX
    }
  }));
}

function makeKnoxSubCharacters() {
  return [
    ["Dlanor A. Knox", "dla", "dla_12", 405],
    ["Gertrude", "ger", "ger_11", 395],
    ["Cornelia", "cor", "cor_11", 403]
  ].map(([name, code, text, tachiX]) => ({
    name,
    image: `assets/ui/characters/ep5_2/tachi/${code}.png`,
    pages: [name],
    pc: {
      tachi: `assets/ui/characters/ep5_2/tachi/${code}.png`,
      referenceTextImage: `assets/ui/characters/ep5_2/reference-text/${text}.png`,
      tachiX
    }
  }));
}

function makeChiesterSubCharacters() {
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

function makeZeparFurfurSubCharacters() {
  return [
    ["Zepar", "zep_1", "zep_1"],
    ["Furfur", "fur_1", "zep_1"]
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
