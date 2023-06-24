export const calcuplus = 'calcu++'
export const appname = 'SIGN IN'
export const disclosure = 'Access to account creation is exclusive to TruCredit members. If you are interested in applying for a loan, please kindly visit our office during the hours of 8:00AM to 4:00PM, Monday through Friday.'
export const genders = ["Male", "Female", "Others"]
export const strand = ["N/A","ABM", "STEM", "CCS", "HUMSS", "GAS", "TVL"]
// export const scaleQuestions: string[] = [
//     "How interested are you in mathematics?",
//     "How much do you enjoy problem-solving?",
//     "How creative do you consider yourself to be?",
//     "How much do you enjoy working with computers?",
//     "How interested are you in scientific subjects?",
//     "How much do you enjoy reading and analyzing literature?",
//     "How comfortable are you with public speaking?",
//     "How interested are you in learning about different cultures and languages?",
//     "How much do you enjoy working with your hands or creating physical objects?",
//     "How interested are you in studying business and entrepreneurship?",
//     "How much do you enjoy exploring and understanding historical events?",
//     "How interested are you in environmental and sustainability issues?",
//     "How much do you enjoy analyzing data and solving analytical problems?",
//     "How interested are you in the field of healthcare and helping others?",
//     "How much do you enjoy working in a team and collaborating with others?",
//   ];

  export const school = [
    {
      Enginerring: [
        {
          course: "Civil Engineering",
          subjects: ["Mathematics", "Physics", "Structural Analysis"],
          score: 0
        },
        {
          course: "Computer Engineering",
          subjects: ["Mathematics", "Electronics", "Computer Architecture"],
          score: 0
        },
        {
          course: "Electrical Engineering",
          subjects: ["Mathematics", "Electronics", "Power Systems"],
          score: 0
        },
        {
          course: "Electronics Engineering",
          subjects: ["Mathematics", "Electronics", "Digital Logic Design"],
          score: 0
        },
        {
          course: "Mechanical Engineering",
          subjects: ["Mathematics", "Thermodynamics", "Mechanics of Materials"],
          score: 0
        }
      ]
    },
    {
      Information_Technology: [
        {
          course: "Computer Sciences",
          subjects: ["Programming", "Database Management", "Algorithms"],
          score: 0
        },
        {
          course: "Information Technology",
          subjects: ["Programming", "Networking", "Web Development"],
          score: 0
        }
      ]
    },
    {
      Teacher_education: [
        {
          Elementary_education: [
            {
              course: "Early Child Education",
              subjects: ["Child Development", "Curriculum Planning", "Educational Psychology"],
              score: 0
            },
            {
              course: "Major in General Education",
              subjects: ["Teaching Methods", "Educational Technology", "Assessment and Evaluation"],
              score: 0
            },
            {
              course: "Major in Special Education",
              subjects: ["Inclusive Education", "Special Needs Assessment", "Behavior Management"],
              score: 0
            }
          ]
        },
        {
          Secondary_education: [
            {
              course: "Major in English",
              subjects: ["English Literature", "Grammar and Composition", "Teaching English as a Second Language"],
              score: 0
            },
            {
              course: "Major in Filipino",
              subjects: ["Filipino Literature", "Filipino Grammar and Composition", "Teaching Filipino Language and Culture"],
              score: 0
            },
            {
              course: "Major in Mathematics",
              subjects: ["Algebra", "Geometry", "Statistics"],
              score: 0
            },
            {
              course: "Major in Science",
              subjects: ["Biology", "Chemistry", "Physics"],
              score: 0
            }
          ]
        },
        {
          Special_education: [
            {
              course: "Generalist",
              subjects: ["Special Education Law", "Differentiated Instruction", "Collaboration and Advocacy"],
              score: 0
            }
          ]
        }
      ]
    }
  ];

 export const scoreMappings = [
    {subject: ["Mathematics","Physics", "Electronics"]}
  ]


 export const mapping = [
    { subject: "Mathematics", score: 0 },
    { subject: "Physics", score: 0 },
    { subject: "Structural Analysis", score: 0 },
    { subject: "Electronics", score: 0 },
    { subject: "Computer Architecture", score: 0 },
    { subject: "Power Systems", score: 0 },
    { subject: "Digital Logic Design", score: 0 },
    { subject: "Thermodynamics", score: 0 },
    { subject: "Mechanics of Materials", score: 0 },
    { subject: "Programming", score: 0 },
    { subject: "Database Management", score: 0 },
    { subject: "Algorithms", score: 0 },
    { subject: "Networking", score: 0 },
    { subject: "Web Development", score: 0 },
    { subject: "Child Development", score: 0 },
    { subject: "Curriculum Planning", score: 0 },
    { subject: "Educational Psychology", score: 0 },
    { subject: "Teaching Methods", score: 0 },
    { subject: "Educational Technology", score: 0 },
    { subject: "Assessment and Evaluation", score: 0 },
    { subject: "Inclusive Education", score: 0 },
    { subject: "Special Needs Assessment", score: 0 },
    { subject: "Behavior Management", score: 0 },
    { subject: "English Literature", score: 0 },
    { subject: "Grammar and Composition", score: 0 },
    { subject: "Teaching English as a Second Language", score: 0 },
    { subject: "Filipino Literature", score: 0 },
    { subject: "Filipino Grammar and Composition", score: 0 },
    { subject: "Teaching Filipino Language and Culture", score: 0 },
    { subject: "Algebra", score: 0 },
    { subject: "Geometry", score: 0 },
    { subject: "Statistics", score: 0 },
    { subject: "Biology", score: 0 },
    { subject: "Chemistry", score: 0 },
    { subject: "Special Education Law", score: 0 },
    { subject: "Differentiated Instruction", score: 0 },
    { subject: "Collaboration and Advocacy", score: 0 }
  ];

  export const initialmapping = [
    { subject: ["Science"], score: 0 },
    { subject: ["Mathematics", "Physics", "Structural Analysis", "Electronics", "Computer Architecture", "Digital Logic Design", "Power Systems", "Thermodynamics", "Mechanics of Materials", "Algorithms", "Networking", "Web Development", "Database Management", "Statistics", "Biology", "Chemistry"], score: 0 },
    { subject: ["Language", "English Literature", "Grammar and Composition", "Teaching English as a Second Language", "Filipino Literature", "Filipino Grammar and Composition", "Teaching Filipino Language and Culture"], score: 0 },
    { subject: ["Teaching", "Child Development", "Curriculum Planning", "Educational Psychology", "Teaching Methods", "Educational Technology", "Assessment and Evaluation", "Inclusive Education", "Special Needs Assessment", "Behavior Management", "Special Education Law", "Differentiated Instruction", "Collaboration and Advocacy"], score: 0 }
  ];
  
  export const secondarymapping = [
    { subject: ["Mathematics", "Physics", "Electronics"], score: 0 },
    { subject: ["Structural Analysis"], score: 0 },
    { subject: ["Computer Architecture", "Digital Logic Design"], score: 0 },
    { subject: ["Power Systems"], score: 0 },
    { subject: ["Thermodynamics", "Mechanics of Materials"], score: 0 },
    { subject: ["Programming", "Database Management", "Algorithms", "Networking", "Web Development"], score: 0 },
    { subject: ["Child Development", "Curriculum Planning", "Educational Psychology", "Teaching Methods", "Educational Technology"], score: 0 },
    { subject: ["Assessment and Evaluation", "Inclusive Education", "Special Needs Assessment", "Behavior Management"], score: 0 },
    { subject: ["English Literature", "Grammar and Composition", "Teaching English as a Second Language"], score: 0 },
    { subject: ["Filipino Literature", "Filipino Grammar and Composition", "Teaching Filipino Language and Culture"], score: 0 },
    { subject: ["Algebra", "Geometry", "Statistics"], score: 0 },
    { subject: ["Biology", "Chemistry"], score: 0 },
    { subject: ["Special Education Law", "Differentiated Instruction", "Collaboration and Advocacy"], score: 0 }
  ];
  
  export const scaleQuestions = [
    { key: "question1", text: "How would you describe your interest in working with computers and technology?" },
    { key: "question2", text: "Do you enjoy problem-solving and logical thinking in the context of technology?" },
    { key: "question3", text: "Are you interested in software development and programming languages?" },
    { key: "question4", text: "Are you fascinated by the design and construction of buildings and infrastructure?" },
    { key: "question5", text: "Do you enjoy applying scientific and mathematical principles to solve civil engineering problems?" },
    { key: "question6", text: "Are you interested in sustainable and environmentally friendly construction practices?" },
    { key: "question7", text: "Are you enthusiastic about designing and developing computer hardware and systems?" },
    { key: "question8", text: "Do you enjoy working with circuitry and electronic components?" },
    { key: "question9", text: "Are you interested in the integration of hardware and software in technological systems?" },
    { key: "question10", text: "Are you captivated by the study of electricity and electrical systems?" },
    { key: "question11", text: "Do you enjoy analyzing and troubleshooting electrical circuits and power distribution systems?" },
  ];

  type AnswerOptions = {
    [key: string]: string;
  };

  export const answers: AnswerOptions[] = [
    {   
      "1": "Information Technology",
      "2": "Computer Engineering",
      "3": "Bachelor of Science in Mechanical Engineering",
      "4": "Bachelor of Science in Electronic Engineering",
      "5": "Bachelor of Elementary Education",
    },
    {
      "1": "Information Technology",
      "2": "Bachelor of Science in Computer Engineering",
      "3": "Electronic Engineering",
      "4": "Mechanical Engineering",
      "5": "Accountancy",
    },
    {
      "1": "Information Technology",
      "2": "Computer Engineering",
      "3": "Mechanical Engineering",
      "4": "Accountancy",
      "5": "Psychology",
    },
    {
      "1": "Civil Engineering",
      "2": "Mechanical Engineering",
      "3": "Electrical Engineering",
      "4": "Computer Engineering",
      "5": "Accountancy",
    },
    {
      "1": "Civil Engineering",
      "2": "Bachelor of Secondary Education Major in Mathematics",
      "3": "Bachelor of Science in Electrical Engineering",
      "4": "Bachelor of Science in Mechanical Engineering",
      "5": "Bachelor of Science in Electronic Engineering",
    },
    {
      "1": "Civil Engineering",
      "2": "Electrical Engineering",
      "3": "Mechanical Engineering",
      "4": "Electronic Engineering",
      "5": "Computer Engineering",
    },
    {
      "1": "Electronic Engineering",
      "2": "Electrical Engineering",
      "3": "Mechanical Engineering",
      "4": "Computer Engineering",
      "5": "Civil Engineering",
    },
    {
      "1": "Electrical Engineering",
      "2": "Electronic Engineering",
      "3": "Mechanical Engineering",
      "4": "Computer Engineering",
      "5": "Civil Engineering"
    },
  ]