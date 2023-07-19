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
  textSize(30); // Set the default text size here
  background(255, 255, 255); // Set the background color to white

  for (let i = 0; i < 4; i++) {
    let button = createButton("");
    // Arrange buttons in two rows of two each, and add some spacing between buttons
    button.position(width / 2 - 100, height / 2 - 100 + i * 60); // Adjust x-position to center the buttons
    button.style('width', '200px'); // Set button width
    button.style('height', '40px'); // Set button height
    button.style('font-size', '16px'); // Set text size
    button.style('background-color', 'white'); // Set button color 
    button.mousePressed(() => chooseAnswer(i));
    buttons.push(button);
  }
} 

function draw() {
  background(200);
  textAlign(CENTER, CENTER);
  textWrap(WORD);

  if (currentQuestion < questions.length) {
    textSize(20); // Smaller font size for questions
    text(questions[currentQuestion].question, width / 2, height / 2 - 200);
    for (let i = 0; i < 4; i++) {
      buttons[i].html(questions[currentQuestion].answers[i]);
    }
  } else {
    textSize(14); // Smaller font size for results
    let personalityType = getPersonalityType();
    text(personalityType.title + ": " + personalityType.description, width / 2 - 200, height / 2 - 200, 400);
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
    Harmonizer: "Harmonizers should focus on creating prompts that foster understanding and empathy. They can use their natural ability to manage emotions to guide users in generating creative and thoughtful prompts. They should also remember to be specific and descriptive in their prompts to get the best results.\n\nExample Prompt: 'Imagine you are a person who has just moved to a new city. Write a diary entry expressing your feelings about this change and your hopes for the future.'",
    Innovator: "Innovators should leverage their creativity to create prompts that push boundaries and encourage users to think outside the box. They should also remember to test different prompts and modify descriptions until they get the results they want.\n\nExample Prompt: 'Describe a world where gravity works in reverse. How would daily life and societal structures be different?'",
    Achiever: "Achievers should use their drive to create prompts that push users to achieve their best. They should also remember to use the latest models or versions of AI tools to get the best results.\n\nExample Prompt: 'Write a step-by-step guide on how to achieve a personal goal, such as learning a new language or running a marathon.'",
    Strategist: "Strategists should use their forward-thinking nature to create prompts that encourage users to think strategically. They should also remember to separate their instructions for clarity and comprehension.\n\nExample Prompt: 'Outline a strategic plan for a company looking to expand its business into a new market.'",
    Realist: "Realists should focus on creating prompts that encourage users to consider practical implications. They should also remember to review their prompts and check the results to see if they fit their requirements.\n\nExample Prompt: 'Describe the practical steps someone should take to prepare for a natural disaster.'",
    Idealist: "Idealists should use their optimism to create prompts that inspire users to envision a better future. They should also remember to be as specific or descriptive as possible in their prompts.\n\nExample Prompt: 'Imagine a world where all energy is sourced from renewable resources. Describe what daily life looks like in this world.'",
    Challenger: "Challengers should use their boldness to create prompts that push users to question their assumptions. They should also remember to use examples in their prompts to get more accurate results.\n\nExample Prompt: 'Argue against a commonly held belief or assumption in society. Provide evidence to support your argument.'"
  };

  for (let personalityType in scores) {
    if (scores[personalityType] > maxScore) {
      maxScore = scores[personalityType];
      maxPersonalityType = personalityType;
    }
  }

  
  return {title: maxPersonalityType, description: descriptions[maxPersonalityType]};
}
