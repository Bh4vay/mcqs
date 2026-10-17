const questions = [
  {
    question:
      "With reference to the traditional principles of Indian painting, consider the following pairs:\n\n1. Rupabheda — Variety of forms and appearances\n2. Pramana — Proportion and measurement\n3. Sadrisyam — Use of brushes and colours\n4. Varnikabhanga — Resemblance to the subject\n\nWhich of the pairs given above are correctly matched?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 4 only", "1, 2, 3 and 4"],
    answer: 0,
  },
  {
    question:
      "Consider the following statements about prehistoric Indian paintings:\n\n1. Bhimbetka in Madhya Pradesh is associated with prehistoric rock art.\n2. Mesolithic paintings generally show a reduction in size and an increase in the use of red colour.\n3. Chalcolithic paintings include battle scenes, riders and complex geometrical shapes.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
  },
  {
    question:
      "Consider the following statements about Ajanta paintings:\n\n1. Ajanta comprises 29 caves arranged in a horseshoe-shaped formation.\n2. Important themes include Buddhist narratives and Jataka stories.\n3. The outlines of figures are characteristically painted in blue ochre.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following statements about Ellora cave paintings:\n\n1. Paintings at Ellora are associated exclusively with Buddhism.\n2. The paintings are associated with Buddhist, Jain and Hindu traditions.\n3. The paintings were executed in two phases, including work done centuries after the caves were carved.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 1,
  },
  {
    question:
      "Consider the following pairs related to Indian mural paintings:\n\n1. Bagh Caves — Stronger outlines, tightly modelled figures and a more secular character\n2. Sittanavasal — Jain themes and depictions of a lotus pool\n3. Ravan Chhaya — Rock shelters shaped like a half-opened umbrella and a royal procession\n\nWhich of the pairs given above are correctly matched?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
  },
  {
    question:
      "Consider the following pairs related to Indian mural painting sites:\n\n1. Armamalai — Jain religious themes and depictions of the Ashtadikpalakas\n2. Lepakshi — Vijayanagara-period paintings associated with the Veerabhadra Temple\n3. Jogimara — Brahmi script and the nearby rock-cut theatre of Sitabenga\n4. Badami — Early surviving Hindu paintings, including a depiction of four-armed Brahma on a swan in Cave 3\n\nHow many of the above pairs are correctly matched?",
    options: ["Only one", "Only two", "Only three", "All four"],
    answer: 3,
  },
  {
    question:
      "Consider the following statements about early miniature painting schools in India:\n\n1. The Pala school was associated with Buddhism and centres such as Nalanda and Vikramashila.\n2. Pala paintings frequently used palm-leaf manuscripts and are associated with Vajrayana Buddhism.\n3. The Apabhramsha school was influenced by Jainism and associated with western Indian regions such as Gujarat and Rajasthan.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
  },
  {
    question:
      "Consider the following statements about Mughal miniature painting:\n\n1. Akbar established an organised painting department and patronised artists such as Basawan and Daswanth.\n2. Jahangir's period is associated with naturalism, Ustad Mansoor and decorated margins.\n3. Shah Jahan's paintings were characterised by greater liveliness and less European influence than those of Jahangir.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following statements about Rajasthani schools of painting:\n\n1. The Mewar school is associated with Sahibdin and paintings of the Ramayana and Bhagavata Purana.\n2. The Kishangarh school is renowned for Bani Thani and devotional and romantic depictions of Radha and Krishna.\n3. Bundi and Kota are collectively known as the Shekhawati school.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following statements about the Pahari school of painting:\n\n1. Basohli is regarded as an early centre of Pahari painting, characterised by bold lines and glowing colours.\n2. The Guler school is associated with naturalistic portraits and soft, cool colours.\n3. Kangra painting developed directly out of the Basohli school, without any connection to Guler.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following statements about Tanjore and Mysore paintings:\n\n1. Tanjore paintings are known for brilliant colours and liberal use of gold, with Maratha patronage associated with Maharaja Serfoji II.\n2. Mysore paintings use gesso paste and often emphasise a principal figure.\n3. According to the supplied module, only Mysore paintings have a Geographical Indication (GI) tag.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following pairs related to Indian folk painting traditions:\n\n1. Madhubani — Mithila region of Bihar, geometric designs and symbolic motifs such as fish\n2. Pattachitra — Odisha, associated with the Jagannath and Vaishnava traditions\n3. Kalamkari — Andhra Pradesh, using cotton fabric, pointed bamboo tools and vegetable dyes\n\nWhich of the pairs given above are correctly matched?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
  },
  {
    question:
      "Consider the following pairs related to Indian folk painting traditions:\n\n1. Warli — Geometric figures and white pigment made from a mixture of gum and rice powder\n2. Thangka — Buddhist painting traditionally executed on cotton canvas\n3. Manjusha — Snake painting associated with Bhagalpur and the Anga region of Bihar\n4. Phad — Scroll-type painting associated with Rajasthan\n\nHow many of the above pairs are correctly matched?",
    options: ["Only one", "Only two", "Only three", "All four"],
    answer: 3,
  },
  {
    question:
      "Consider the following statements about modern Indian painting schools:\n\n1. The Bengal School incorporated Swadeshi values and is associated with Abanindranath Tagore and Nandalal Bose.\n2. Company paintings rejected European influence entirely and used only traditional Indian techniques.\n3. Bazaar paintings incorporated European influence, including Roman and Greek elements.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 2,
  },
  {
    question:
      "Consider the following statements about modern Indian artists:\n\n1. Raja Ravi Varma blended Indian themes with Western techniques of colour and style.\n2. Amrita Sher-Gil is associated with Impressionism, Expressionism and related modern artistic trends.\n3. The Progressive Artists' Group included artists such as F.N. Souza, S.H. Raza and M.F. Husain.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
  },
  {
    question:
      "Consider the following statements about miniature paintings:\n\n1. The term is derived from minium, meaning red-lead paint.\n2. Miniature paintings are characterised primarily by monumental scale and large wall surfaces.\n3. Miniature paintings are small and detailed.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 2,
  },
  {
    question:
      "With reference to the Natya Shastra and Abhinaya Darpan, consider the following statements:\n\n1. Lasya represents grace, emotion and the feminine aspects of dance.\n2. Tandava is primarily associated with the feminine aspects of dance and excludes rhythmic movement.\n3. Nritta refers to basic dance movements without expression, while Nritya conveys sentiment and emotion.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 2,
  },
  {
    question:
      "Consider the following pairs related to the nine rasas of Indian dance:\n\n1. Shringara — Love\n2. Roudra — Disgust\n3. Bhayanaka — Horror\n4. Adbhuta — Wonder\n\nWhich of the pairs given above are correctly matched?",
    options: [
      "1 and 2 only",
      "1, 3 and 4 only",
      "2 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 1,
  },
  {
    question:
      "Consider the following statements about Bharatanatyam:\n\n1. Jatiswaram is a Nritta component without expressive Abhinaya.\n2. Padam refers to short love lyrics performed at a faster tempo.\n3. Thillana is generally the concluding performance in the sequence described in the module.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 2,
  },
  {
    question:
      "Consider the following statements about Kuchipudi:\n\n1. Siddhendra Yogi is credited with formalising the Kuchipudi tradition in the 17th century.\n2. Tarangam involves drawing pictures on the floor with the toes.\n3. Kuchipudi combines Nritta, Nritya and Natya.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 2,
  },
  {
    question:
      "Consider the following statements about Kathakali and Mohiniattam:\n\n1. Kathakali evolved in relation to the dance-dramas Ramanattam and Krishnattam.\n2. Kathakali uses elaborate facial make-up, and its performance language is described as Manipravalam, combining Malayalam and Sanskrit.\n3. Mohiniattam is characterised by forceful, thumping footwork and the dominance of Tandava.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following statements about Odissi:\n\n1. Tribhanga is a three-bend body posture associated with Odissi.\n2. The Gita Govinda, composed by Jayadeva, is an important source of Odissi repertoire.\n3. Mangalacharan is the concluding item in which the dancer takes leave of the audience and stage.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following statements about Manipuri dance:\n\n1. The festival of Lai Haraoba is associated with the origins of Manipuri dance.\n2. Manipuri dance gained prominence with the spread of Vaishnavism in the 15th century.\n3. Manipuri dance places greater emphasis on sensuality than on devotion.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following pairs related to Kathak gharanas:\n\n1. Lucknow — Emphasis on expression and grace\n2. Jaipur — Fluency, speed and long rhythmic patterns\n3. Raigarh — Emphasis on percussion music\n4. Banaras — Greater use of floorwork and emphasis on symmetry\n\nHow many of the above pairs are correctly matched?",
    options: ["Only one", "Only two", "Only three", "All four"],
    answer: 3,
  },
  {
    question:
      "Consider the following statements about Sattriya dance:\n\n1. Sattriya was introduced by Shankaradeva in Assam in the 15th century.\n2. Sattras are Vaishnava monasteries.\n3. Borgeets are devotional songs associated with Shankaradeva.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
  },
  {
    question:
      "Consider the following pairs related to classical dance forms of India:\n\n1. Bharatanatyam — Tamil Nadu\n2. Kathak — Uttar Pradesh\n3. Kuchipudi — Andhra Pradesh\n4. Sattriya — Manipur\n\nWhich of the pairs given above are correctly matched?",
    options: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "All four"],
    answer: 1,
  },
  {
    question:
      "Consider the following pairs related to Chhau dance:\n\n1. Saraikella Chhau — Jharkhand; performed with masks\n2. Mayurbhanj Chhau — Odisha; performed without masks\n3. Purulia Chhau — West Bengal; performed without masks\n\nWhich of the pairs given above are correctly matched?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following statements about folk dances of western and northern India:\n\n1. Garba is associated with Gujarat and is performed during Navaratri.\n2. Kalbelia is associated with Rajasthan, and its movements and costumes resemble those of serpents.\n3. Giddha is traditionally the male counterpart of Bhangra.\n\nWhich of the statements given above are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
  },
  {
    question:
      "Consider the following pairs related to folk dances of central and eastern India:\n\n1. Jawara — Bundelkhand, Madhya Pradesh; balancing a basket of jawar on the head\n2. Matki — Malwa, Madhya Pradesh; balancing earthen pots on the head\n3. Gaur Maria — Bastar, Chhattisgarh; imitating the movements of a bison\n4. Paika — Odisha; a martial folk dance associated with battle and the spear\n\nHow many of the above pairs are correctly matched?",
    options: ["Only one", "Only two", "Only three", "All four"],
    answer: 3,
  },
  {
    question:
      "Consider the following pairs related to folk dances of Bihar, Jharkhand and Odisha:\n\n1. Biraha — Portrays the pain of women whose partners are away; the performers are traditionally male\n2. Alkap — Rural dance-drama associated with parts of Jharkhand and West Bengal\n3. Jat-Jatin — Odisha; a martial dance involving swords\n4. Danda-Jatra — Odisha; a combination of dance, drama and music\n\nWhich of the pairs given above are correctly matched?",
    options: [
      "1 and 2 only",
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 1,
  },
  {
    question:
      "Consider the following pairs related to folk dances of Northeast India:\n\n1. Bihu — Assam; performed in groups by men and women\n2. Thang-Ta — Manipur; a martial dance in which Thang means sword and Ta means spear\n3. Singhi Chham — Sikkim; a masked dance symbolising the snow lion\n4. Cheraw — Mizoram; performed using bamboo sticks\n5. Rangma — Nagaland; a war dance\n\nHow many of the above pairs are correctly matched?",
    options: ["Only two", "Only three", "Only four", "All five"],
    answer: 3,
  },
  {
    question:
      "Consider the following pairs related to southern Indian folk and traditional dance forms:\n\n1. Kummi — Tamil Nadu and Kerala; women dance in circular formations without accompanying music\n2. Mayilattam — Tamil Nadu and Kerala; performers dress like peacocks\n3. Butta Bommalu — Andhra Pradesh; dancers wear masks resembling toy-like figures\n4. Padayani — Kerala; a martial temple dance featuring large masks known as kolams\n5. Burrakatha — Andhra Pradesh; a single performer narrates stories from the Puranas\n\nHow many of the above pairs are correctly matched?",
    options: ["Only two", "Only three", "Only four", "All five"],
    answer: 3,
  },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const questionNumberElement = document.getElementById("question-number");

const scoreDisplay = document.getElementById("score-display");

const progressBar = document.getElementById("progress-bar");

const nextButton = document.getElementById("next-btn");

const quizBox = document.getElementById("quiz-box");

const resultBox = document.getElementById("result-box");

const finalScore = document.getElementById("final-score");

const percentage = document.getElementById("percentage");

const review = document.getElementById("review");

let userAnswers = [];

// Load question
function loadQuestion() {
  selectedAnswer = null;

  const q = questions[currentQuestion];

  questionElement.textContent = q.question;

  questionNumberElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

  scoreDisplay.textContent = `Score: ${score}`;

  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  optionsElement.innerHTML = "";

  q.options.forEach((option, index) => {
    const div = document.createElement("div");

    div.classList.add("option");

    div.textContent = option;

    div.addEventListener("click", () => {
      selectedAnswer = index;

      document
        .querySelectorAll(".option")
        .forEach((opt) => opt.classList.remove("selected"));

      div.classList.add("selected");
    });

    optionsElement.appendChild(div);
  });

  if (currentQuestion === questions.length - 1) {
    nextButton.textContent = "Submit Quiz";
  }
}

// Next question
nextButton.addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("Please select an answer.");
    return;
  }

  const correctAnswer = questions[currentQuestion].answer;

  userAnswers[currentQuestion] = selectedAnswer;

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Show result
function showResult() {
  quizBox.classList.add("hidden");

  resultBox.classList.remove("hidden");

  finalScore.textContent = `${score}/${questions.length}`;

  const percentageValue = Math.round((score / questions.length) * 100);

  percentage.textContent = `You scored ${percentageValue}%`;

  review.innerHTML = "";

  questions.forEach((q, index) => {
    const item = document.createElement("div");

    item.classList.add("review-item");

    const userAnswer = q.options[userAnswers[index]];

    const correctAnswer = q.options[q.answer];

    const isCorrect = userAnswers[index] === q.answer;

    item.innerHTML = `
            <div class="review-question">
                ${index + 1}. ${q.question}
            </div>

            <div class="${isCorrect ? "correct-answer" : "wrong-answer"}">
                Your answer: ${userAnswer}
            </div>

            <div class="correct-answer">
                Correct answer: ${correctAnswer}
            </div>
        `;

    review.appendChild(item);
  });
}

// Restart
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];

  resultBox.classList.add("hidden");

  quizBox.classList.remove("hidden");

  nextButton.textContent = "Next";

  loadQuestion();
}

// Start
loadQuestion();
