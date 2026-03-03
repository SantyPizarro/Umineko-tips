// data/ep1.js

export const ep1 = {
  id: 1,
  characters: [
    {
      id: "jessica",
      name: "Ushiromiya Jessica",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/jessica_alive.png",
          text: [
            "Jessica Ushiromiya. Hija única de Krauss.",
            "Le gusta la música rock y es rebelde."
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/jessica_dead.png",
          text: [
            "Jessica fue encontrada sin vida.",
            "Su muerte sigue envuelta en misterio."
          ]
        }
      ]
    }
  ],
  tips: [
    "Tip 1: La isla tiene 18 personas.",
    "Tip 2: El clima es importante."
  ]
};