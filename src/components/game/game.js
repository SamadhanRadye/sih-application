/*  ---- Wheel Learning Game (single-file frontend) ----
    - uses provided images (background, boy, shopworker, wheel)
    - slider to change radius (cm) and updates overlay + area
    - animated step-by-step area explanation
    - 3-question quiz (1 star each), motivating messages on wrong
    - final score display + confetti, bestStars saved in localStorage
    - language switching immediate
*/

/* ---------------- dictionary (EN/HI/MR/OD) ---------------- */
const DICT = {
  en: {
    story: [
      "Boy: I need a bullock cart wheel for my cart.",
      "Shopworker: Tell me the size (radius) of the wheel.",
      "Boy: I don't know. Let's learn how to measure and calculate!"
    ],
    btnNext: "Next",
    learnTitle: "Wheel: center, radius & diameter",
    whatRadius: "Radius (r) is the straight line from the center of the wheel to its edge. Drag the slider to change radius and see area update.",
    areaTitle: "Area calculation",
    areaExampleTitle: "Example (step-by-step)",
    quizTitle: "Quiz — 3 questions",
    q1: "Identify: Which option is the radius?",
    q1opts: ["Center → edge (radius)", "Edge → edge (diameter)", "Just boundary", "Point"],
    q2template: "If radius = {r} cm, what is area? (use π = 3.14)",
    q3template: "If radius = {r2} cm, what is area? (use π = 3.14)",
    correct: "Correct!",
    wrong: "Not quite — see solution below.",
    motivate: ["Good attempt — keep trying!", "Nice try — you'll get it next time!", "Practice makes perfect!"],
    proceedQuiz: "Start Quiz",
    proceedArea: "Show Area Example",
    proceedToQuiz: "Proceed to Quiz",
    playAgain: "Play Again"
  },
  hi: {
    story: [
      "लड़का: मुझे अपनी गाड़ी के लिए पहिया चाहिए।",
      "दुकानदार: पहिये का आकार (त्रिज्या) बताओ।",
      "लड़का: मुझे नहीं पता। चलो मापना और गणना सीखते हैं!"
    ],
    btnNext: "आगे",
    learnTitle: "पहिया: केंद्र, त्रिज्या और व्यास",
    whatRadius: "त्रिज्या (r) केंद्र से किनारे तक की सीधी रेखा है। स्लाइडर खींचकर त्रिज्या बदलें और क्षेत्र देखें।",
    areaTitle: "क्षेत्रफल की गणना",
    areaExampleTitle: "उदाहरण (कदम-दर-कदम)",
    quizTitle: "क्विज़ — 3 प्रश्न",
    q1: "पहचानें: कौन सा विकल्प त्रिज्या है?",
    q1opts: ["केंद्र → किनारा (त्रिज्या)", "किनारा → किनारा (व्यास)", "सिर्फ सीमा", "बिंदु"],
    q2template: "यदि त्रिज्या = {r} सेमी है, तो क्षेत्रफल क्या होगा? (π = 3.14)",
    q3template: "यदि त्रिज्या = {r2} सेमी है, तो क्षेत्रफल क्या होगा? (π = 3.14)",
    correct: "सही!",
    wrong: "सही नहीं — नीचे समाधान देखें।",
    motivate: ["ठीक प्रयास — जारी रखें!", "अच्छा प्रयास — अगली बार मिलेगा!", "अभ्यास से सिद्धि मिलती है!"],
    proceedQuiz: "क्विज़ शुरू करें",
    proceedArea: "क्षेत्र उदाहरण दिखाएं",
    proceedToQuiz: "क्विज पर जाएँ",
    playAgain: "फिर से खेलें"
  },
  mr: {
    story: [
      "मुलगा: मला माझ्या शेकड्याच्या साठी चाक पाहिजे.",
      "दुकानदार: चाकाचा आकार (त्रिज्या) सांगा.",
      "मुलगा: मला माहित नाही. चला मोजणे आणि गणना शिकूया!"
    ],
    btnNext: "पुढे",
    learnTitle: "चाक: केंद्र, त्रिज्या आणि व्यास",
    whatRadius: "त्रिज्या (r) केंद्रापासून काठापर्यंतची सरळ रेषा आहे. स्लायडर हलवा आणि क्षेत्र पहा.",
    areaTitle: "क्षेत्रफळाची गणना",
    areaExampleTitle: "उदाहरण (पाऊल-दर-पाऊल)",
    quizTitle: "क्विझ — 3 प्रश्न",
    q1: "ओळखा: कोणता पर्याय त्रिज्या आहे?",
    q1opts: ["केंद्र → काठ (त्रिज्या)","काठ → काठ (व्यास)","फक्त मर्यादा","बिंदू"],
    q2template: "जर त्रिज्या = {r} सेमी असेल तर क्षेत्रफळ किती? (π = 3.14)",
    q3template: "जर त्रिज्या = {r2} सेमी असेल तर क्षेत्रफळ किती? (π = 3.14)",
    correct: "बरोबर!",
    wrong: "योग्य नाही — खाली उत्तर पहा.",
    motivate: ["छान प्रयत्न — सुरू ठेवा!","चांगले प्रयत्न — पुढच्या वेळेला नक्की मिळेल!","सराव करा, निपुण व्हा!"],
    proceedQuiz: "क्विझ सुरू करा",
    proceedArea: "क्षेत्र उदाहरण दाखवा",
    proceedToQuiz: "क्विझकडे जा",
    playAgain: "पुन्हा खेळा"
  },
  od: {
    story: [
      "ବଚ୍ଚା: ମୋତେ ବ୍ୟାଳ ଗାଡ଼ିର ପାହିଆ ଚାହିଁ।",
      "ଦୋକାନୀ: ପାହିଆର ଆକାର (ତ୍ରିଜ୍ୟା) କହନ୍ତୁ।",
      "ବଚ୍ଚା: ମୁଁ ଜାଣିନାହିଁ। ଚଲ ମାପିବା ଏବଂ ଗଣନା ସିଖିବା!"
    ],
    btnNext: "ଆଗକୁ",
    learnTitle: "ପାହିଆ: କେନ୍ଦ୍ର, ତ୍ରିଜ୍ୟା ଓ ବ୍ୟାସ",
    whatRadius: "ତ୍ରିଜ୍ୟା (r) କେନ୍ଦ୍ରରୁ କାନ୍ଧ ପର୍ଯ୍ୟନ୍ତର ସିଧା ରେଖା। ସ୍ଲାଇଡର ଘୁରାନ୍ତୁ ଏବଂ କ୍ଷେତ୍ର ଦେଖନ୍ତୁ।",
    areaTitle: "କ୍ଷେତ୍ରଫଳ ଗଣନା",
    areaExampleTitle: "ଉଦାହରଣ (ଦପକ୍ରମ)",
    quizTitle: "କ୍ବିଜ୍ — 3 ପ୍ରଶ୍ନ",
    q1: "ପହଚାନ: କେଉଁଟି ତ୍ରିଜ୍ୟା?",
    q1opts: ["କେନ୍ଦ୍ର → କାନ୍ଧ (ତ୍ରିଜ୍ୟା)","କାନ୍ଧ → କାନ୍ଧ (ବ୍ୟାସ)","ଶୂନ୍ୟୀକୀମା","ବିନ୍ଦୁ"],
    q2template: "ଯଦି ତ୍ରିଜ୍ୟା = {r} cm ଅଟେ ତେବେ କ୍ଷେତ୍ରଫଳ କେତେ? (π = 3.14)",
    q3template: "ଯଦି ତ୍ରିଜ୍ୟା = {r2} cm ଅଟେ ତେବେ କ୍ଷେତ୍ରଫଳ କେତେ? (π = 3.14)",
    correct: "ଠିକ୍!",
    wrong: "ଠିକ୍ ନୁହେଁ — ନିମ୍ନରେ ଦେଖନ୍ତୁ।",
    motivate: ["ଭଲ ଚେଷ୍ଟା! ଚେଷ୍ଟା ଜାରି ରଖନ୍ତୁ!","ଭଲ ପ୍ରୟାସ — ପରବର୍ତ୍ତୀ ବେଳେ ମିଳିବ!","ଅଭ୍ୟାସ ଜରୁରୀ!"],
    proceedQuiz: "କ୍ବିଜ୍ ଆରମ୍ଭ",
    proceedArea: "କ୍ଷେତ୍ର ଦେଖାନ୍ତୁ",
    proceedToQuiz: "କ୍ବିଜକୁ ଯାଆନ୍ତୁ",
    playAgain: "ପୁନରାରମ୍ଭ"
  }
};

/* --------------- state --------------- */
const state = {
  lang: localStorage.getItem('lang') || 'en',
  radius: Number(localStorage.getItem('radius') || 14), // cm
  bestStars: Number(localStorage.getItem('bestStars') || 0),
  stars: 0,
  quizIndex: 0,
  quizAnswers: []
};

/* --------------- elements --------------- */
const $ = id => document.getElementById(id);
const btnNext = $('btn-next');
const storyBox = $('story-box');
const sceneStory = $('scene-story');
const sceneLearn = $('scene-learn');
const sceneArea = $('scene-area');
const sceneQuiz = $('scene-quiz');
const sceneScore = $('scene-score');

const langSel = $('language');
const radiusSlider = $('radius-slider');
const radiusCm = $('radius-cm');
const areaDisplay = $('area-display');
const overlayCircle = document.getElementById('overlay-circle');
const overlayRadiusLine = document.getElementById('overlay-radius');
const overlayDiameter = document.getElementById('overlay-diameter');
const labelRadius = document.getElementById('label-radius');
const labelDiam = document.getElementById('label-diam');
const infoRadius = $('what-is-radius');

const btnToArea = $('btn-to-area');
const btnToQuiz = $('btn-to-quiz');
const areaSteps = $('area-steps');
const btnAreaNext = $('btn-area-next');

const questionText = $('question-text');
const optionsDiv = $('options');
const feedback = $('quiz-feedback');
const btnQuizNext = $('btn-quiz-next');

const starsEarned = $('stars-earned');
const scoreMsg = $('score-msg');
const bestStarsSpan = $('best-stars');
const btnRestart = $('btn-restart');

/* --------------- init --------------- */
function applyLangImmediately() {
  state.lang = langSel.value;
  localStorage.setItem('lang', state.lang);
  // story
  storyBox.textContent = DICT[state.lang].story[0];
  btnNext.textContent = DICT[state.lang].btnNext;
  // learning
  $('title-learn').textContent = DICT[state.lang].learnTitle;
  infoRadius.textContent = DICT[state.lang].whatRadius;
  $('area-title').textContent = DICT[state.lang].areaTitle;
  $('btn-to-area').textContent = DICT[state.lang].proceedArea;
  $('btn-to-quiz').textContent = DICT[state.lang].proceedQuiz;
  // area page
  $('title-area').textContent = DICT[state.lang].areaExampleTitle;
  btnAreaNext.textContent = DICT[state.lang].proceedToQuiz;
  // quiz header
  $('quiz-title').textContent = DICT[state.lang].quizTitle;
  // score page
  $('score-title').textContent = DICT[state.lang].correct;
  btnRestart.textContent = DICT[state.lang].playAgain;

  bestStarsSpan.textContent = state.bestStars;
}
langSel.value = state.lang;
langSel.addEventListener('change', ()=>{
  applyLangImmediately();
  renderCurrentScene(); // refresh visible texts rapidly
});

/* --------------- story flow --------------- */
let storyProgress = 0;
function startStory(){
  sceneStory.classList.remove('hidden');
  sceneLearn.classList.add('hidden');
  sceneArea.classList.add('hidden');
  sceneQuiz.classList.add('hidden');
  sceneScore.classList.add('hidden');
  storyProgress = 0;
  storyBox.textContent = DICT[state.lang].story[storyProgress];
}
btnNext.addEventListener('click', ()=>{
  storyProgress++;
  if(storyProgress < DICT[state.lang].story.length){
    // small animation
    storyBox.classList.remove('fade-in');
    void storyBox.offsetWidth;
    storyBox.classList.add('fade-in');
    storyBox.textContent = DICT[state.lang].story[storyProgress];
  } else {
    // go to learn
    renderLearn();
  }
});

/* --------------- learning visuals --------------- */
function renderLearn(){
  sceneStory.classList.add('hidden');
  sceneLearn.classList.remove('hidden');
  sceneArea.classList.add('hidden');
  sceneQuiz.classList.add('hidden');
  sceneScore.classList.add('hidden');
  // set radius values
  radiusSlider.value = state.radius;
  radiusCm.textContent = state.radius;
  updateOverlay(state.radius);
  applyLangImmediately();
  $('what-is-radius').classList.add('fade-in');
}

radiusSlider.addEventListener('input', (e)=>{
  state.radius = Number(e.target.value);
  radiusCm.textContent = state.radius;
  localStorage.setItem('radius', state.radius);
  updateOverlay(state.radius);
  updateAreaDisplay(state.radius);
});

function updateOverlay(r){
  // mapping: your svg circle uses r in px; we use 80px as 80cm-ish baseline,
  // but simpler: map r(cm) -> px by factor 2 (so max 80 cm -> 160 px)
  const px = Math.round(r * 2);
  overlayCircle.setAttribute('r', px);
  overlayRadiusLine.setAttribute('y2', 150 - px);
  overlayDiameter.setAttribute('x1', 150 - px);
  overlayDiameter.setAttribute('x2', 150 + px);
  // animate smoothly
  overlayCircle.style.transition = 'r 300ms ease';
  overlayRadiusLine.style.transition = 'all 300ms ease';
  overlayDiameter.style.transition = 'all 300ms ease';
}

function updateAreaDisplay(r){
  const A = 3.14 * r * r;
  areaDisplay.textContent = `A = π × r² = 3.14 × ${r} × ${r} = ${A.toFixed(2)} cm²`;
}

/* initial update */
updateOverlay(state.radius);
updateAreaDisplay(state.radius);

/* --------------- area step-by-step animation --------------- */
btnToArea.addEventListener('click', ()=>{
  renderAreaSteps();
});

function renderAreaSteps(){
  sceneLearn.classList.add('hidden');
  sceneArea.classList.remove('hidden');
  areaSteps.innerHTML = '';
  const r = state.radius;
  const steps = [
    `Step 1: Radius r = ${r} cm.`,
    `Step 2: Formula: A = π × r².`,
    `Step 3: Substitute: A = 3.14 × ${r} × ${r}.`,
    `Step 4: Multiply: A = ${ (3.14 * r * r).toFixed(2) } cm².`
  ];
  let idx = 0;
  const showNext = ()=>{
    if(idx >= steps.length) return;
    const p = document.createElement('div');
    p.className = 'box fade-in';
    p.textContent = steps[idx];
    areaSteps.appendChild(p);
    idx++;
    // reveal next after delay
    setTimeout(showNext, 900);
  };
  showNext();
}

/* proceed to quiz button (in learning screen) */
$('btn-to-quiz').addEventListener('click', ()=>{
  // ensure we have latest area text shown
  updateAreaDisplay(state.radius);
  startQuiz();
});

/* area page proceed */
btnAreaNext.addEventListener('click', ()=> startQuiz());

/* --------------- quiz logic --------------- */
const QUIZ = [
  { type: 'identify', qKey: 'q1' }, // identify radius
  { type: 'area-dynamic', rKey: 'radius' }, // area using current slider r
  { type: 'area-static', r: Math.max(6, Math.min(20, Math.round(state.radius + 2))) } // another area question
];

function startQuiz(){
  state.quizIndex = 0;
  state.stars = 0;
  state.quizAnswers = [];
  sceneLearn.classList.add('hidden');
  sceneArea.classList.add('hidden');
  sceneQuiz.classList.remove('hidden');
  renderQuiz();
}

function renderQuiz(){
  const D = DICT[state.lang];
  feedback.textContent = '';
  btnQuizNext.classList.add('hidden');
  optionsDivClear();
  const q = QUIZ[state.quizIndex];
  if(!q){
    // finished
    showScore();
    return;
  }

  if(q.type === 'identify'){
    questionText.textContent = D.q1;
    // language-specific options
    const opts = D.q1opts;
    opts.forEach((opt, idx)=>{
      const b = makeOption(opt, ()=> handleIdentify(idx));
      optionsDivAppend(b);
    });
  } else if(q.type === 'area-dynamic'){
    const r = state.radius;
    questionText.textContent = D.q2template.replace('{r}', r);
    const {opts, correct} = makeAreaOptions(r);
    opts.forEach(opt => {
      const b = makeOption(opt, ()=> handleArea(opt, correct, r));
      optionsDivAppend(b);
    });
  } else if(q.type === 'area-static'){
    const r2 = q.r;
    questionText.textContent = D.q3template.replace('{r2}', r2);
    const {opts, correct} = makeAreaOptions(r2);
    opts.forEach(opt => {
      const b = makeOption(opt, ()=> handleArea(opt, correct, q.r));
      optionsDivAppend(b);
    });
  }
}

function makeOption(text, onClick){
  const btn = document.createElement('button');
  btn.className = 'opt';
  btn.textContent = text;
  btn.addEventListener('click', onClick);
  return btn;
}

function optionsDivClear(){ optionsDiv.innerHTML = ''; }
function optionsDivAppend(el){ optionsDiv.appendChild(el); }

function handleIdentify(idx){
  // correct is option 0
  if(idx === 0){
    feedback.textContent = DICT[state.lang].correct;
    awardStar();
    btnQuizNext.classList.remove('hidden');
    btnQuizNext.onclick = ()=> { state.quizIndex++; renderQuiz(); };
  } else {
    feedback.textContent = DICT[state.lang].wrong;
    showSolutionIdentify();
    btnQuizNext.classList.remove('hidden');
    btnQuizNext.onclick = ()=> { state.quizIndex++; renderQuiz(); };
    shake(optionsDiv);
  }
}

function showSolutionIdentify(){
  const D = DICT[state.lang];
  const hint = document.createElement('div');
  hint.className = 'box';
  hint.innerHTML = `<strong>${D.wrong}</strong><p style="margin-top:8px">${D.whatRadius}</p><p style="color:var(--green);margin-top:8px">${D.motivate[Math.floor(Math.random()*D.motivate.length)]}</p>`;
  feedback.replaceWith(hint);
  // keep feedback reference updated
  setTimeout(()=> { hint.replaceWith(feedback); }, 3000);
}

function makeAreaOptions(r){
  const correctNum = (3.14 * r * r);
  // create options: correct and 3 distractors
  const wrong1 = (3.14 * (r+2)*(r+2));
  const wrong2 = (3.14 * (r-3 > 1 ? r-3 : r+4)*(r-3 > 1 ? r-3 : r+4));
  const wrong3 = correctNum + (Math.round((r*5)));
  let arr = [correctNum, wrong1, wrong2, wrong3].map(n => n.toFixed(2) + ' cm²');
  arr = shuffle(arr);
  return { opts: arr, correct: correctNum.toFixed(2) + ' cm²' };
}

function handleArea(selected, correctStr, r){
  const D = DICT[state.lang];
  if(selected === correctStr){
    feedback.textContent = D.correct;
    awardStar();
    btnQuizNext.classList.remove('hidden');
    btnQuizNext.onclick = ()=> { state.quizIndex++; renderQuiz(); };
  } else {
    feedback.textContent = D.wrong;
    showSolutionArea(selected, correctStr, r);
    btnQuizNext.classList.remove('hidden');
    btnQuizNext.onclick = ()=> { state.quizIndex++; renderQuiz(); };
    shake(document.getElementById('quiz-card'));
  }
}

function showSolutionArea(sel, correctStr, r){
  const D = DICT[state.lang];
  const A = (3.14 * r * r).toFixed(2);
  const sol = document.createElement('div');
  sol.className = 'box';
  sol.innerHTML = `<strong>${D.wrong}</strong>
    <div style="margin-top:8px">Step 1: r = ${r} cm<br>Step 2: A = π × r² = 3.14 × ${r} × ${r}<br><strong>Answer: ${A} cm²</strong>
    <p style="color:var(--green);margin-top:8px">${D.motivate[Math.floor(Math.random()*D.motivate.length)]}</p>
    </div>`;
  feedback.replaceWith(sol);
  setTimeout(()=> { sol.replaceWith(feedback); }, 3500);
}

function awardStar(){
  state.stars += 1;
  // small animation: show temporary star near top
  const s = document.createElement('div');
  s.textContent = '⭐';
  s.style.position = 'fixed';
  s.style.right = '24px';
  s.style.top = '64px';
  s.style.fontSize = '28px';
  document.body.appendChild(s);
  setTimeout(()=> s.remove(), 900);
}

/* --------------- end quiz -> score --------------- */
function showScore(){
  sceneQuiz.classList.add('hidden');
  sceneScore.classList.remove('hidden');
  starsEarned.innerHTML = '⭐'.repeat(state.stars);
  scoreMsg.textContent = `You scored ${state.stars} out of 3`;
  if(state.stars > state.bestStars){
    state.bestStars = state.stars;
    localStorage.setItem('bestStars', state.bestStars);
    bestStarsSpan.textContent = state.bestStars;
  }
  confettiBurst();
}

/* --------------- restart --------------- */
btnRestart.addEventListener('click', ()=>{
  state.stars = 0;
  state.quizIndex = 0;
  startStory();
});

/* --------------- confetti --------------- */
function confettiBurst(){
  const container = document.getElementById('confetti');
  container.innerHTML = '';
  const colors = ['#FFD700','#FF6B6B','#6BCB77','#4D96FF','#FFCB77'];
  for(let i=0;i<40;i++){
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = (Math.random()*100) + '%';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    container.appendChild(piece);
    setTimeout(()=> piece.remove(), 1400);
  }
}

/* --------------- utilities --------------- */
function shuffle(a){ return a.sort(()=>Math.random()-0.5); }
function shake(el){ el.classList.add('shake'); setTimeout(()=> el.classList.remove('shake'), 700); }

/* --------------- render helpers --------------- */
function renderCurrentScene(){
  if(!sceneStory.classList.contains('hidden')) startStory();
  else if(!sceneLearn.classList.contains('hidden')) renderLearn();
  else if(!sceneArea.classList.contains('hidden')) {/* nothing */}
  else if(!sceneQuiz.classList.contains('hidden')) renderQuiz();
}
applyLangImmediately();
startStory();