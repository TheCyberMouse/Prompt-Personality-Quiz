let questions = [
  { 
    question: "How would you describe your approach to problem-solving?",
    answers: ["Methodical and thorough", "Creative and outside-the-box", "Fast and efficient", "I prefer to avoid problems"],
    scores: [{Harmonizer: 4, Innovator: 1, Achiever: 2, Strategist: 3, Realist: 4, Idealist: 1, Challenger: 2},
              {Harmonizer: 1, Innovator: 4, Achiever: 3, Strategist: 2, Realist: 1, Idealist: 4, Challenger: 3},
              {Harmonizer: 2, Innovator: 3, Achiever: 4, Strategist: 1, Realist: 2, Idealist: 3, Challenger: 4},
              {Harmonizer: 3, Innovator: 2, Achiever: 1, Strategist: 4, Realist: 3, Idealist: 2, Challenger: 1}]
  },
  // Other questions with similar scoring structures...
  
  // Add more questions here
  { 
    question: "How do you react to new ideas?",
    answers: ["I like to analyze them carefully", "I'm excited and want to try them out", "I focus on how to execute them", "I'm skeptical and need convincing"],
    scores: [{Harmonizer: 3, Innovator: 4, Achiever: 2, Strategist: 3, Realist: 1, Idealist: 4, Challenger: 2},
              {Harmonizer: 1, Innovator: 3, Achiever: 4, Strategist: 2, Realist: 1, Idealist: 4, Challenger: 3},
              {Harmonizer: 2, Innovator: 2, Achiever: 3, Strategist: 4, Realist: 3, Idealist: 1, Challenger: 4},
              {Harmonizer: 4, Innovator: 1, Achiever: 1, Strategist: 2, Realist: 4, Idealist: 2, Challenger: 1}]
  },
  { 
    question: "What motivates you the most?",
    answers: ["Harmony and cooperation", "Innovation and creativity", "Achievement and success", "Challenging the status quo"],
    scores: [{Harmonizer: 4, Innovator: 1, Achiever: 2, Strategist: 3, Realist: 2, Idealist: 3, Challenger: 2},
              {Harmonizer: 1, Innovator: 4, Achiever: 2, Strategist: 3, Realist: 1, Idealist: 3, Challenger: 4},
              {Harmonizer: 2, Innovator: 2, Achiever: 4, Strategist: 3, Realist: 2, Idealist: 1, Challenger: 3},
              {Harmonizer: 2, Innovator: 3, Achiever: 1, Strategist: 2, Realist: 3, Idealist: 2, Challenger: 4}]
  },
  { 
    question: "How do you handle failure?",
    answers: ["I learn from it and move on", "I use it as a source of new ideas", "I see it as a stepping stone to success", "I challenge it and try again"],
    scores: [{Harmonizer: 3, Innovator: 2, Achiever: 4, Strategist: 2, Realist: 3, Idealist: 1, Challenger: 4},
              {Harmonizer: 2, Innovator: 4, Achiever: 1, Strategist: 3, Realist: 2, Idealist: 3, Challenger: 2},
              {Harmonizer: 2, Innovator: 1, Achiever: 3, Strategist: 4, Realist: 2, Idealist: 2, Challenger: 3},
              {Harmonizer: 1, Innovator: 3, Achiever: 2, Strategist: 2, Realist: 1, Idealist: 2, Challenger: 4}]
  },
  { 
    question: "How do you handle success?",
    answers: ["I try to maintain balance", "I look for new ways to innovate", "I set new goals", "I challenge myself to do better"],
    scores: [{Harmonizer: 4, Innovator: 1, Achiever: 3, Strategist: 2, Realist: 2, Idealist: 3, Challenger: 2},
              {Harmonizer: 1, Innovator: 4, Achiever: 2, Strategist: 3, Realist: 1, Idealist: 4, Challenger: 3},
              {Harmonizer: 2, Innovator: 2, Achiever: 4, Strategist: 3, Realist: 3, Idealist: 1, Challenger: 2},
              {Harmonizer: 2, Innovator: 3, Achiever: 1, Strategist: 2, Realist: 2, Idealist: 2, Challenger: 4}]
  },
  { 
    question: "How do you approach conflict?",
    answers: ["I try to mediate and find balance", "I come up with creative solutions", "I focus on achieving a resolution", "I challenge the root cause"],
    scores: [{Harmonizer: 4, Innovator: 2, Achiever: 3, Strategist: 2, Realist: 1, Idealist: 3, Challenger: 2},
              {Harmonizer: 1, Innovator: 4, Achiever: 2, Strategist: 3, Realist: 2, Idealist: 4, Challenger: 3},
              {Harmonizer: 2, Innovator: 2, Achiever: 4, Strategist: 3, Realist: 3, Idealist: 1, Challenger: 2},
              {Harmonizer: 2, Innovator: 3, Achiever: 1, Strategist: 2, Realist: 2, Idealist: 2, Challenger: 4}]
  },
  { 
    question: "How do you approach team work?",
    answers: ["I strive for harmony", "I encourage innovation", "I focus on achieving the goal", "I challenge the team to do better"],
    scores: [{Harmonizer: 4, Innovator: 1, Achiever: 2, Strategist: 3, Realist: 2, Idealist: 3, Challenger: 2},
              {Harmonizer: 1, Innovator: 4, Achiever: 3, Strategist: 2, Realist: 1, Idealist: 4, Challenger: 3},
              {Harmonizer: 2, Innovator: 2, Achiever: 4, Strategist: 3, Realist: 3, Idealist: 1, Challenger: 2},
              {Harmonizer: 2, Innovator: 3, Achiever: 1, Strategist: 2, Realist: 2, Idealist: 2, Challenger: 4}]
  },
  { 
    question: "How do you approach learning?",
    answers: ["I seek balance between theory and practice", "I love learning new, innovative concepts", "I focus on practical skills", "I challenge conventional wisdom"],
    scores: [{Harmonizer: 4, Innovator: 2, Achiever: 3, Strategist: 2, Realist: 3, Idealist: 1, Challenger: 4},
              {Harmonizer: 1, Innovator: 4, Achiever: 2, Strategist: 3, Realist: 2, Idealist: 3, Challenger: 1},
              {Harmonizer: 2, Innovator: 1, Achiever: 4, Strategist: 3, Realist: 4, Idealist: 2, Challenger: 2},
              {Harmonizer: 2, Innovator: 3, Achiever: 1, Strategist: 2, Realist: 1, Idealist: 2, Challenger: 4}]
  }

];

let currentQuestion = 0;
let scores = {Harmonizer: 0, Innovator: 0, Achiever: 0, Strategist: 0, Realist: 0, Idealist: 0, Challenger: 0};
let buttons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32); // Adjust size of the text

  for (let i = 0; i < 4; i++) {
    let button = createButton("");
    button.position(width / 2, height / 2 - 100 + i * 60); // Arrange buttons vertically
    button.mousePressed(() => chooseAnswer(i));
    buttons.push(button);
  }
}

function draw() {
  background(200);
  textAlign(CENTER, CENTER);
  textWrap(WORD);
  textSize(32);

  if (currentQuestion < questions.length) {
    text(questions[currentQuestion].question, width / 2, height / 2 - 200);
    for (let i = 0; i < 4; i++) {
      buttons[i].html(questions[currentQuestion].answers[i]);
    }
  } else {
    let personalityType = getPersonalityType();
    text(personalityType.title + ": " + personalityType.description, width / 2, height / 2 - 200);
    for (let button of buttons) {
      button.hide();
    }
  }
}

function chooseAnswer(index) {
  for (let personalityType in questions[currentQuestion].scores[index]) {
    scores[personalityType] += questions[currentQuestion].scores[index][personalityType];
  }
  currentQuestion++;
}

function getPersonalityType() {
  let maxScore = -Infinity;
  let maxPersonalityType = "";
  let descriptions = {
    Harmonizer: "You strive for balance and harmony in your interactions...",
    Innovator: "You're always thinking outside the box...",
    Achiever: "You're driven and goal-oriented...",
    Strategist: "You're a forward-thinker...",
    Realist: "You're pragmatic and down-to-earth...",
    Idealist: "You're an optimist at heart...",
    Challenger: "You're not afraid to question the status quo..."
  };

  for (let personalityType in scores) {
    if (scores[personalityType] > maxScore) {
      maxScore = scores[personalityType];
      maxPersonalityType = personalityType;
    }
  }

  return {title: maxPersonalityType, description: descriptions[maxPersonalityType]};
}
