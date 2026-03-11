export const ep2 = {
  id: 2,
  background: "assets/backgrounds/mansion_day.png",
  backgroundFantasy: "assets/backgrounds/mansion_red.png",

  characters: [
    {
      id: "battler",
      name: "Ushiromiya Battler",
      portrait: "assets/characters/ep2/battler/portrait/but_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep2/battler/full/but_copy.png",
          text: [
            `El protagonista que continúa desafiando la existencia de la bruja. 
            
            En este segundo tablero, Battler se ve forzado a observar escenas atroces que ponen a prueba su voluntad. A diferencia del primer juego, aquí se enfrenta directamente a la manifestación de Beatrice en el salón, intentando encontrar explicaciones lógicas para crímenes que parecen imposibles.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep2/battler/full/but_dead.png",
          text: [
            `Al final del juego, Battler queda como el último sobreviviente en un estado de negación absoluta. 
            
            Sin poder aceptar la verdad ni refutar los hilos rojos de la bruja, su destino queda sellado en el salón de té dorado hasta que pueda recuperar su capacidad de razonar.`
          ]
        }
      ]
    },
    {
      id: "jessica",
      name: "Ushiromiya Jessica",
      portrait: "assets/characters/ep2/jessica/portrait/jes_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep2/jessica/full/jes_copy.png",
          text: [
            `Hija de Krauss y Natsuhi. En este episodio, su relación con Kanon toma un papel central. 
            
            Jessica intenta romper las barreras sociales y "metafísicas" que Kanon se autoimpone, invitándolo a su habitación y tratando de tratarlo como a un ser humano igual a ella, a pesar de la atmósfera de tensión que rodea a la familia.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep2/jessica/full/jes_dead.png",
          text: [
            `Fue encontrada en su propia habitación después de haber sido atacada por una fuerza desconocida. 
            
            Su muerte marca un punto de quiebre para Kanon, quien jura venganza contra la bruja que destruyó la paz que ella intentaba construir.`
          ]
        }
      ]
    },
    {
      id: "george",
      name: "Ushiromiya George",
      portrait: "assets/characters/ep2/george/portrait/geo_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep2/george/full/geo_copy.png",
          text: [
            `Hijo de Eva y Hideyoshi. Su amor por Shannon es el motor principal de sus acciones en este capítulo. 
            
            George finalmente propone matrimonio formalmente, entregando un anillo que simboliza su promesa. Está dispuesto a renunciar a su estatus de heredero con tal de vivir una vida normal con la persona que ama.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep2/george/full/geo_dead.png",
          text: [
            `Su cuerpo fue descubierto en el quiosco del jardín de rosas junto al de Shannon. 
            
            Murieron tomados de la mano, cumpliendo de forma trágica su deseo de estar juntos para siempre, lejos de las complicaciones de la familia Ushiromiya.`
          ]
        }
      ]
    },
    {
      id: "rosa",
      name: "Ushiromiya Rosa",
      portrait: "assets/characters/ep2/rosa/portrait/ros_defa1.png",
      currentPhase: 0,
      states: [
        {
          phase: "alive",
          image: "assets/characters/ep2/rosa/full/ros_copy.png",
          text: [
            `La menor de los hermanos Ushiromiya. En este episodio, Rosa toma un rol de liderazgo inesperado tras la muerte de sus hermanos mayores. 
            
            Es extremadamente protectora con María, aunque sus métodos disciplinarios siguen siendo cuestionables y volátiles debido al estrés de la situación.`
          ]
        },
        {
          phase: "dead",
          image: "assets/characters/ep2/rosa/full/ros_dead.png",
          text: [
            `Rosa pereció en las etapas finales del juego, intentando huir de las sombras que acechaban la mansión. 
            
            Su resistencia final fue feroz, pero insuficiente contra el poder de la bruja que reclamaba el interés de la deuda de Kinzo.`
          ]
        }
      ]
    }
  ],

  charactersFantasy: [
    {
      id: "beatrice",
      name: "Beatrice",
      portrait: "assets/characters/ep2/bea/portrait/bea_defb1.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/bea/full/bea_smug.png",
          text: [
            `La Bruja Dorada. En el Episodio 2, Beatrice abandona las sombras y se manifiesta físicamente ante los habitantes de la mansión. 
            
            Su objetivo es humillar a Battler y demostrar su omnipotencia a través de rituales mágicos y la invocación de sus sirvientes demoníacos. Se deleita en el sufrimiento de los amantes y en la desesperación de aquellos que niegan lo sobrenatural.`
          ]
        }
      ]
    },
    {
      id: "stakes",
      name: "Las Siete Estacas",
      portrait: "assets/characters/ep2/stakes/portrait/stakes_all.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/stakes/full/stakes_group.png",
          text: [
            `Armas conceptuales que toman forma humana. Estas siete hermanas representan los pecados capitales y sirven directamente a Beatrice. 
            
            En este capítulo, son las encargadas de ejecutar los sacrificios del epitafio, moviéndose a velocidades inhumanas y atravesando cualquier defensa física que los humanos intenten imponer.`
          ]
        }
      ]
    },
    {
      id: "goat_servants",
      name: "Sirvientes Cabra",
      portrait: "assets/characters/ep2/goats/portrait/goat_def.png",
      currentPhase: 0,
      states: [
        {
          phase: "active",
          image: "assets/characters/ep2/goats/full/goat_army.png",
          text: [
            `Soldados de bajo rango en la jerarquía del mundo de las brujas. 
            
            Poseen cuerpos humanos pero cabezas de cabra y una fuerza bruta inmensa. Son invocados en masa para abrumar a las víctimas y devorar cualquier rastro de resistencia lógica en el tablero.`
          ]
        }
      ]
    }
  ],

  tips: [
    {
      title: "El Espejo de la Bruja",
      style: "tip-magic-item",
      pages: [
        `Un objeto sagrado que posee el poder de repeler la magia. 
        
        Natsuhi recibió uno de estos espejos de manos de Kinzo, y se dice que es capaz de reflejar las maldiciones de la bruja de vuelta a su origen. Sin embargo, su poder depende enteramente de la fe y la pureza de intención de quien lo porta.`,
        `Si el espejo se rompe, la protección desaparece, dejando al usuario a merced de las ilusiones y las garras de los demonios que acechan en la tormenta.`
      ]
    },
    {
      title: "El Anillo del Heredero",
      style: "tip-family",
      pages: [
        `El anillo con el sello de la familia Ushiromiya que Kinzo entrega a quien designa como su sucesor. 
        
        En este episodio, el anillo aparece en lugares imposibles, sugiriendo que la bruja tiene control total sobre la sucesión y que el contrato original de Kinzo ha sido cumplido de formas que los hermanos no pueden comprender.`
      ]
    }
  ],

  tipsFantasy: [
    {
      title: "La Verdad Roja",
      style: "tip-red-truth",
      pages: [
        `Una regla fundamental introducida en este capítulo. Todo lo que la bruja diga en color rojo es la Verdad Absoluta y no requiere pruebas. 
        
        Es el arma definitiva contra las teorías de Battler; si el rojo dice que alguien está muerto, no hay trucos ni falsificaciones posibles. Solo un humano capaz de razonar más allá de la bruja puede sobrevivir a este ataque intelectual.`
      ]
    },
    {
      title: "Contrato de Muebles",
      style: "tip-lore",
      pages: [
        `Un concepto mágico que define la existencia de Shannon y Kanon. Según la bruja, ellos no son seres humanos, sino "muebles" sin alma. 
        
        Al carecer de humanidad, no tienen derecho al amor ni a la vida independiente, existiendo únicamente para servir a sus maestros. Romper este contrato es considerado un pecado grave en el mundo de Beatrice.`
      ]
    }
  ]
};