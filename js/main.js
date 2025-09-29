// ================================
// CONFIGURACIÓN
// ================================
const TIME_PER_QUESTION = 45; // segundos

// ================================
// ESTRUCTURA DE PREGUNTAS (EDITABLE)
// ================================
const originalQuizData = [
  {
    tipo: "multiple_single",
    pregunta: "¿Qué es la normalización de una base de datos?",
    opciones: [
      "Ninguna de las opciones",
      "Es la manera en que se implementa la base de datos en un SGBD",
      "Es un tipo de dependencia en la que un determinante funcional no implica un único valor, sino un conjunto de ello",
      "Especifica los valores permitidos para una columna determinada, garantizando la coherencia de los valores de los datos en toda labase de datos",
      "Es el proceso que consiste en diseñar y aplicar una serie de reglas a las relaciones obtenidas tras el modelo entidad relación (E-R).",
    ],
    respuesta_correcta: [
      "Es el proceso que consiste en diseñar y aplicar una serie de reglas a las relaciones obtenidas tras el modelo entidad relación (E-R).",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta: "¿Qué es un modelo de datos?",
    opciones: [
      "Un modelo de datos permite a los usuarios tener acceso a los datos o manipularlos",
      "Un modelo de datos representa el análisis del conjunto de relaciones del esquema relacional de la base de datos para identificarposibles problemas",
      "Un modelo de datos es un conjunto de estructuras descriptivas de datos de alto nivel",
      "Ninguna de las opciones",
      "Un modelo de datos es un objeto que se identifica de los demás de su especie a través de sus atributos",
    ],
    respuesta_correcta: [
      "Un modelo de datos es un conjunto de estructuras descriptivas de datos de alto nivel",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "El núcleo de instrucciones SQL para manipulación de datos (DML), está formado por las sentencias:",
    opciones: [
      "CREATE, ALTER, DROP, UPDATE, DELETE",
      "CREATE, SELECT, INSERT",
      "GRANT, REVOKE",
      "INSERT INTO, UPDATE, DELETE, SELECT",
      "Ninguna de las opciones",
    ],
    respuesta_correcta: ["INSERT INTO, UPDATE, DELETE, SELECT"],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "En el contexto de los Gestores de Bases de Datos Relacionales ¿Qué es el log de transacciones en SQL Server?",
    opciones: [
      "Una tabla temporal que almacena cambios no confirmados en la base de datos",
      "Un archivo que registra todas las modificaciones realizadas en los datos de la base de datos para garantizar recuperación y consistencia",
      "Ninguna de las opciones",
      "Un registro de metadatos de los índices y claves utilizadas en la base de datos",
      "Un espacio de trabajo que mantiene datos intermedios generados por consultas complejas",
    ],
    respuesta_correcta: [
      "Un archivo que registra todas las modificaciones realizadas en los datos de la base de datos para garantizar recuperación y consistencia",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "En el modelo relacional, la independencia física como regla o principio, hace referencia a:",
    opciones: [
      "que el esquema lógico no se debe modificar por los cambios que se realicen en la base de datos física",
      "a que el sublenguaje de manipulación de datos (DML) debe permitir que sus instrucciones funcionen de la misma forma en una basede datos distribuida que en una que no lo es",
      "que los cambios en las tablas de la base de datos no deben afectar a la forma en la que el usuario accede a la base de datos",
      "que el SGBD debe encargarse de que las vistas muestran información actualizada",
      "ninguna de las opciones",
    ],
    respuesta_correcta: [
      "que el esquema lógico no se debe modificar por los cambios que se realicen en la base de datos física",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta: "¿Qué es un sistema gestor de bases de datos?",
    opciones: [
      "Un conjunto de herramientas orientadas exclusivamente a la visualización de datos en tiempo real.",
      "Es el programa que permite diseñar archivos con estructuras determinadas, así como realizar recuperaciones y actualizaciones.",
      "Es el software diseñado para colaborar en el mantenimiento y empleo de grandes conjuntos de datos.",
      "Un sistema operativo diseñado para manejar directamente los datos en el hardware.",
      "Ninguna de las opciones",
    ],
    respuesta_correcta: [
      "Es el software diseñado para colaborar en el mantenimiento y empleo de grandes conjuntos de datos.",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta: "¿Qué es una base de datos?",
    opciones: [
      "Conjunto de información sobre un mismo tema tratado como una unidad de almacenamiento.",
      "Una base de datos es una colección de información organizada datos, de tal modo que sea fácilmente accesible, gestionada y actualizada",
      "Ninguna de las opciones",
      "Es un conjunto de datos no persistentes utilizados por los sistemas de aplicación.",
      "Es una organización de archivos utilizando directorios, relacionados entre si",
    ],
    respuesta_correcta: [
      "Una base de datos es una colección de información organizada datos, de tal modo que sea fácilmente accesible, gestionada y actualizada",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "¿Que es una retricción de integridad de clave externa en el modelo relacional?",
    opciones: [
      "Es una declaración de que un cierto subconjunto mínimo de los campos de una relación constituye un identificador único de cada tupla",
      "Especifica los valores permitidos para una columna determinada, garantizando la coherencia de los valores de los datos en toda la base de datos",
      "Es la relación de integridad que implica a dos relaciones más frecuentes, en el cual si se modifica una de las relaciones hay que comprobar la otra, para hacer que los datos sigan siendo consistentes",
      "Ninguna de las opciones",
      "Es la clave que debe ser única, y no puede contener valores nulos",
    ],
    respuesta_correcta: [
      "Es la relación de integridad que implica a dos relaciones más frecuentes, en el cual si se modifica una de las relaciones hay que comprobar la otra, para hacer que los datos sigan siendo consistentes",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "El núcleo de instrucciones SQL para la definición de datos (DDL), está formado por las sentencias:",
    opciones: [
      "CREATE, SELECT, INSERT",
      "CREATE, ALTER, DROP",
      "INSERT INTO, UPDATE, DELETE",
      "GRANT, REVOKE",
      "Ninguna de las opciones",
    ],
    respuesta_correcta: ["CREATE, ALTER, DROP"],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "¿Qué modo de autenticación debe estar habilitado para permitir el acceso al base de datos mediante credenciales de usuario de SQL Server?",
    opciones: [
      "Ninguna de las opciones",
      "Modo mixto (autenticación integrada de Windows y SQL Server)",
      "Solo autenticación integrada de Windows",
      "Modo de autenticación en la nube",
      "Solo autenticación de SQL Server",
    ],
    respuesta_correcta: [
      "Modo mixto (autenticación integrada de Windows y SQL Server)",
    ],
  },

  {
    tipo: "multiple_single",
    pregunta:
      "¿Cuáles son las principales razones por la que se normaliza una base de datos?",
    opciones: [
      "Para aplicar una serie de reglas a las relaciones obtenidas tras el modelo entidad relación",
      "Para garantizar las propiedades de atomicidad, coherencia, aislamiento y durabilidad",
      "Para evitar la redundancia, disminuir problemas de actualización y proteger la integridad de los datos.",
      "Para implementar el mapeo del esquema conceptual al esquema relacional",
      "Ninguna de las opciones",
    ],
    respuesta_correcta: [
      "Para evitar la redundancia, disminuir problemas de actualización y proteger la integridad de los datos.",
    ],
  },

  {
    tipo: "multiple_single",
    pregunta:
      "¿Qué diferencia existe entre una entidad fuerte y una entidad debil en el modelo entidad-relación?",
    opciones: [
      "Una entidad débil puede existir por sí misma, pero una entidad fuerte siempre depende de otra entidad.",
      "Las entidades débiles son aquellas que solo existen en esquemas relacionales normalizados.",
      "Las entidades fuertes no pueden tener atributos opcionales, mientras que las débiles sí.",
      "Una entidad fuerte tiene clave primaria propia, mientras que una entidad débil depende de una clave externa para ser identificada.",
      "Ninguna de las opciones.",
    ],
    respuesta_correcta: [
      "Una entidad fuerte tiene clave primaria propia, mientras que una entidad débil depende de una clave externa para ser identificada.",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "¿Cuál de las siguientes afirmaciones describe correctamente el modelo relacional?",
    opciones: [
      "Modela el mundo real en términos de entidades y relaciones entre ellas.",
      "Se basa en jerarquías de datos y estructuras en árbol.",
      "Optimiza la estructura física de almacenamiento según el tipo de SGBD utilizado.",
      "Ninguna de las opciones",
      "Organiza los datos en tablas (relaciones) formadas por filas (tuplas) y columnas (atributos).",
    ],
    respuesta_correcta: [
      "Organiza los datos en tablas (relaciones) formadas por filas (tuplas) y columnas (atributos).",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "Cuando encontramos en una tabla de una base de datos relacional, estructuras de atributos donde algunos de ellos dependen de otros, dando lugar a dependencias transitivas ¿es necesario aplicar alguna técnica de normalización?",
    opciones: [
      "Si, se utilizada la técnica de desnormalización",
      "No, no es necesario aplicar técnica de normalización",
      "Si, se aplica la tercera forma normal",
      "Si, se aplica la segunda forma normal",
      "Si, se aplica la primera forma normal",
    ],
    respuesta_correcta: ["Si, se aplica la tercera forma normal"],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "En el contexto de los Gestores de Bases de Datos Relacionales ¿Cuál es la función principal de una instancia en SQL Server?",
    opciones: [
      "Garantizar la replicación de datos entre diferentes bases de datos dentro del servidor",
      "Supervisar exclusivamente los archivos de registro (LOG)",
      "Representar un servicio autocontenido que administra los objetos y estructuras de una base de datos",
      "Servir como un espacio temporal para ejecutar transacciones no confirmadas",
      "Ninguna de las opciones",
    ],
    respuesta_correcta: [
      "Representar un servicio autocontenido que administra los objetos y estructuras de una base de datos",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "¿Cuáles son los elementos básicos de un diagrama de entidad-relación?",
    opciones: [
      "Los elementos básicos de un diagrama de entidad-relación son: tablas, restricciones de integridad, y campos",
      "Los elementos básicos de un diagrama de entidad-relación son: clases, métodos, y atributos",
      "Ninguna de las opciones",
      "Los elementos básicos de un diagrama de entidad-relación son: entidades, relaciones entre entidades (interrelaciones), y atributos",
      "Los elementos básicos de un diagrama de entidad-relación son: jerarquías de generalización, atributos compuestos, e identificadores",
    ],
    respuesta_correcta: [
      "Los elementos básicos de un diagrama de entidad-relación son: entidades, relaciones entre entidades (interrelaciones), y atributos",
    ],
  },
  {
    tipo: "multiple_single",
    pregunta:
      "Cuando encontramos registros en una tabla de una base de datos relacional, con columnas multivaluadas, ¿es necesario aplicaralguna técnica de normalización?",
    opciones: [
      "Si, se aplica la tercera forma normal",
      "Si, se utilizada la técnica de desnormalización",
      "No, no es necesario aplicar técnica de normalización",
      "Si, se aplica la primera forma normal",
      "Si, se aplica la primera forma normal",
    ],
    respuesta_correcta: [
      "Si, se aplica la primera forma normal",
    ],
  }, 
    {
    tipo: "multiple_single",
    pregunta:
      "¿Qué instrucción SQL principal se utiliza para definir restricciones como claves primarias, unicidad, claves foráneas en una tablaexistente?",
    opciones: [
      "ALTER TABLE",
      "Ninguna de las opciones",
      "CONSTRAINT",
      "MODIFY TABLE",
      "CREATE TABLE",
    ],
    respuesta_correcta: [
      "ALTER TABLE",
    ],
  },    
      {
    tipo: "multiple_single",
    pregunta:
      "En el contexto de los Gestores de Bases de Datos Relacionales ¿Qué tipo de archivo es el principal encargado de rastreartransacciones en SQL Server?",
    opciones: [
      "Ninguna de las opciones",
      "Archivo de datos secundario (NDF)",
      "Archivo de registro (LOG)",
      "Archivo temporal (TEMPDB)",
      "Archivo de datos primario (MDF)",
    ],
    respuesta_correcta: [
      "Archivo de registro (LOG)",
    ],
  },  
        {
    tipo: "multiple_single",
    pregunta:
      "¿Que es una restricción de integridad de clave externa en el modelo relacional?",
    opciones: [
      "Es la relación de integridad que implica a dos relaciones más frecuentes, en el cual si se modifica una de las relaciones hay quecomprobar la otra, para hacer que los datos sigan siendo consistentes",
      "Especifica los valores permitidos para una columna determinada, garantizando la coherencia de los valores de los datos en toda labase de datos",
      "Es la clave que debe ser única, y no puede contener valores nulos",
      "Ninguna de las opciones",
      "Es una declaración de que un cierto subconjunto mínimo de los campos de una relación constituye un identificador único de cada tupla",
    ],
    respuesta_correcta: [
      "Es la relación de integridad que implica a dos relaciones más frecuentes, en el cual si se modifica una de las relaciones hay quecomprobar la otra, para hacer que los datos sigan siendo consistentes",
    ],
  }
];

// ================================
// FUNCIONES AUXILIARES
// ================================
/**
 * Mezcla aleatoriamente un arreglo (algoritmo de Fisher-Yates).
 * @param {Array} array - Arreglo a mezclar
 * @returns {Array} Nuevo arreglo mezclado
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ================================
// ESTADO DE LA APLICACIÓN
// ================================
let quizData = []; // Preguntas mezcladas al iniciar
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timeLeft = TIME_PER_QUESTION;
let timerInterval = null;

// ================================
// ELEMENTOS DEL DOM
// ================================
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultsScreen = document.getElementById("results-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const finalScore = document.getElementById("final-score");
const timerDisplay = document.getElementById("timer-display");
const timeRemaining = document.getElementById("time-remaining");
const timerProgress = document.getElementById("timer-progress");

// ================================
// INICIALIZAR APLICACIÓN
// ================================
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goToNextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// ================================
// FUNCIONES PRINCIPALES
// ================================

/**
 * Inicia el cuestionario: mezcla preguntas y carga la primera.
 */
function startQuiz() {
  // Mezclar el orden de las preguntas
  quizData = shuffleArray(originalQuizData);

  currentQuestionIndex = 0;
  score = 0;
  userAnswers = new Array(quizData.length).fill(null).map(() => []);

  startScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");

  loadQuestion();
}

/**
 * Carga y muestra la pregunta actual (con opciones mezcladas).
 */
function loadQuestion() {
  const question = quizData[currentQuestionIndex];
  questionText.textContent = question.pregunta;
  questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${
    quizData.length
  }`;
  scoreDisplay.textContent = `Puntaje: ${score}`;

  optionsContainer.innerHTML = "";

  // Renderizar según el tipo de pregunta
  if (question.tipo === "multiple_single") {
    renderRadioOptions(question);
  } else if (question.tipo === "multiple_multiple") {
    renderCheckboxOptions(question);
  } else if (question.tipo === "vf") {
    renderVFButtons(question);
  }

  // Reiniciar y comenzar temporizador
  resetTimer();
  startTimer();
}

/**
 * Renderiza opciones de selección única (radio buttons) con orden aleatorio.
 */
function renderRadioOptions(question) {
  // ¡Mezclar las opciones cada vez que se carga la pregunta!
  const shuffledOptions = shuffleArray(question.opciones);

  shuffledOptions.forEach((option) => {
    const label = document.createElement("label");
    label.className =
      "flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `question-${currentQuestionIndex}`;
    radio.className = "radio-custom";
    radio.value = option;
    radio.addEventListener("change", () => {
      userAnswers[currentQuestionIndex] = [option];
      updateNextButtonState();
    });

    const span = document.createElement("span");
    span.textContent = option;
    span.className = "text-gray-800";

    label.appendChild(radio);
    label.appendChild(span);
    optionsContainer.appendChild(label);
  });
}

/**
 * Renderiza opciones de selección múltiple (checkboxes) con orden aleatorio.
 */
function renderCheckboxOptions(question) {
  // ¡Mezclar las opciones cada vez que se carga la pregunta!
  const shuffledOptions = shuffleArray(question.opciones);

  shuffledOptions.forEach((option) => {
    const label = document.createElement("label");
    label.className =
      "flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-custom";
    checkbox.value = option;
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        if (!userAnswers[currentQuestionIndex].includes(option)) {
          userAnswers[currentQuestionIndex].push(option);
        }
      } else {
        userAnswers[currentQuestionIndex] = userAnswers[
          currentQuestionIndex
        ].filter((val) => val !== option);
      }
      updateNextButtonState();
    });

    const span = document.createElement("span");
    span.textContent = option;
    span.className = "text-gray-800";

    label.appendChild(checkbox);
    label.appendChild(span);
    optionsContainer.appendChild(label);
  });
}

/**
 * Renderiza botones para Verdadero/Falso (sin mezcla, ya que solo hay dos).
 */
function renderVFButtons(question) {
  // Para VF no se mezcla porque solo hay dos opciones fijas
  const trueBtn = document.createElement("button");
  trueBtn.type = "button";
  trueBtn.className =
    "vf-button true w-full py-3 font-semibold rounded-lg border-2 transition";
  trueBtn.textContent = "Verdadero";
  trueBtn.dataset.value = "true";
  trueBtn.addEventListener("click", () => selectVF(trueBtn, true));

  const falseBtn = document.createElement("button");
  falseBtn.type = "button";
  falseBtn.className =
    "vf-button false w-full py-3 font-semibold rounded-lg border-2 transition mt-3";
  falseBtn.textContent = "Falso";
  falseBtn.dataset.value = "false";
  falseBtn.addEventListener("click", () => selectVF(falseBtn, false));

  optionsContainer.appendChild(trueBtn);
  optionsContainer.appendChild(falseBtn);
}

/**
 * Maneja la selección en preguntas Verdadero/Falso.
 */
function selectVF(button, value) {
  document.querySelectorAll(".vf-button").forEach((btn) => {
    btn.classList.remove("selected");
  });
  button.classList.add("selected");
  userAnswers[currentQuestionIndex] = [value];
  updateNextButtonState();
}

/**
 * Actualiza el estado del botón "Siguiente".
 */
function updateNextButtonState() {
  const hasAnswer = userAnswers[currentQuestionIndex].length > 0;
  nextBtn.disabled = !hasAnswer;
  if (hasAnswer) {
    nextBtn.classList.replace("bg-gray-200", "bg-primary");
    nextBtn.classList.replace("text-gray-700", "text-white");
    nextBtn.classList.remove("cursor-not-allowed", "opacity-50");
  } else {
    nextBtn.classList.replace("bg-primary", "bg-gray-200");
    nextBtn.classList.replace("text-white", "text-gray-700");
    nextBtn.classList.add("cursor-not-allowed", "opacity-50");
  }
}

// ================================
// TEMPORIZADOR
// ================================

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIME_PER_QUESTION;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerDisplay.textContent = `${timeLeft}s`;
  timeRemaining.textContent = `${timeLeft}s restantes`;

  const progressPercent = (timeLeft / TIME_PER_QUESTION) * 100;
  timerProgress.style.width = `${progressPercent}%`;

  if (timeLeft <= 10) {
    timerProgress.style.backgroundColor = "#ef4444";
    timerDisplay.className = "text-lg font-bold text-incorrect";
  } else if (timeLeft <= 20) {
    timerProgress.style.backgroundColor = "#f59e0b";
    timerDisplay.className = "text-lg font-bold text-timerWarning";
  } else {
    timerProgress.style.backgroundColor = "#3b82f6";
    timerDisplay.className = "text-lg font-bold text-gray-800";
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = TIME_PER_QUESTION;
  timerProgress.style.width = "100%";
  timerProgress.style.backgroundColor = "#3b82f6";
  timerDisplay.className = "text-lg font-bold text-gray-800";
}

function handleTimeUp() {
  if (userAnswers[currentQuestionIndex].length === 0) {
    userAnswers[currentQuestionIndex] = [];
  }

  const question = quizData[currentQuestionIndex];
  const userSelection = userAnswers[currentQuestionIndex];
  const correctAnswers = question.respuesta_correcta;

  let isCorrect = false;
  if (question.tipo === "vf") {
    isCorrect = userSelection[0] === correctAnswers;
  } else if (userSelection.length > 0) {
    const userSet = new Set(userSelection);
    const correctSet = new Set(correctAnswers);
    isCorrect =
      userSet.size === correctSet.size &&
      [...userSet].every((val) => correctSet.has(val));
  }

  if (isCorrect) {
    score++;
  }

  showFeedback(question, userSelection, correctAnswers, isCorrect);

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    setTimeout(loadQuestion, 1200);
  } else {
    setTimeout(showResults, 1200);
  }
}

// ================================
// NAVEGACIÓN
// ================================

function goToNextQuestion() {
  clearInterval(timerInterval);

  const question = quizData[currentQuestionIndex];
  const userSelection = userAnswers[currentQuestionIndex];
  const correctAnswers = question.respuesta_correcta;

  let isCorrect = false;
  if (question.tipo === "vf") {
    isCorrect = userSelection[0] === correctAnswers;
  } else {
    const userSet = new Set(userSelection);
    const correctSet = new Set(correctAnswers);
    isCorrect =
      userSet.size === correctSet.size &&
      [...userSet].every((val) => correctSet.has(val));
  }

  if (isCorrect) {
    score++;
  }

  showFeedback(question, userSelection, correctAnswers, isCorrect);

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    setTimeout(loadQuestion, 1200);
  } else {
    setTimeout(showResults, 1200);
  }
}

function showFeedback(question, userSelection, correctAnswers, isCorrect) {
  const labels = Array.from(optionsContainer.querySelectorAll("label"));
  const vfButtons = Array.from(optionsContainer.querySelectorAll(".vf-button"));

  if (question.tipo === "vf") {
    const correctBtn = correctAnswers
      ? vfButtons.find((btn) => btn.dataset.value === "true")
      : vfButtons.find((btn) => btn.dataset.value === "false");
    if (correctBtn) correctBtn.classList.add("selected");

    if (!isCorrect && userSelection.length > 0) {
      const userBtn = userSelection[0]
        ? vfButtons.find((btn) => btn.dataset.value === "true")
        : vfButtons.find((btn) => btn.dataset.value === "false");
      if (userBtn && userBtn !== correctBtn) {
        userBtn.classList.remove("selected");
        userBtn.classList.add("bg-incorrect", "text-white");
      }
    }
    vfButtons.forEach((btn) => (btn.disabled = true));
  } else {
    correctAnswers.forEach((correct) => {
      const label = labels.find(
        (l) => l.querySelector("span").textContent === correct
      );
      if (label) {
        label.style.backgroundColor = "#dcfce7";
        label.style.borderColor = "#22c55e";
        label.querySelector("span").style.color = "#166534";
        const input = label.querySelector("input");
        if (input) {
          input.style.borderColor = "#22c55e";
          input.style.backgroundColor = "#22c55e";
        }
      }
    });

    if (!isCorrect) {
      userSelection.forEach((selected) => {
        if (!correctAnswers.includes(selected)) {
          const label = labels.find(
            (l) => l.querySelector("span").textContent === selected
          );
          if (label) {
            label.style.backgroundColor = "#fee2e2";
            label.style.borderColor = "#f87171";
            label.querySelector("span").style.color = "#991b1b";
            const input = label.querySelector("input");
            if (input) {
              input.style.borderColor = "#f87171";
              input.style.backgroundColor = "#f87171";
            }
          }
        }
      });
    }

    labels.forEach((label) => {
      label.style.pointerEvents = "none";
      const input = label.querySelector("input");
      if (input) input.disabled = true;
    });
  }

  nextBtn.disabled = true;
}

function showResults() {
  questionScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  finalScore.textContent = `Tu puntaje final es: ${score} de ${quizData.length}`;
}

function restartQuiz() {
  clearInterval(timerInterval);
  resultsScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

/*
      ✅ ALEATORIZACIÓN COMPLETA:
        - Las preguntas se reordenan al iniciar el cuestionario.
        - Las OPCIONES dentro de cada pregunta se reordenan CADA VEZ que se carga la pregunta.
        - Esto significa que incluso si repites el cuestionario, las opciones aparecerán en orden diferente.

      💡 MEJORES PRÁCTICAS UX/UI:
        - Evita que los usuarios memoricen posiciones de respuestas.
        - Cada intento es una experiencia única.
        - El algoritmo de Fisher-Yates garantiza una mezcla justa y uniforme.
        - Las preguntas Verdadero/Falso no se mezclan (solo tienen dos opciones fijas).
    */
