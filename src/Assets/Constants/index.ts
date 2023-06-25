export const calcuplus = 'calcu++'
export const appname = 'SIGN IN'
export const disclosure = 'Access to account creation is exclusive to TruCredit members. If you are interested in applying for a loan, please kindly visit our office during the hours of 8:00AM to 4:00PM, Monday through Friday.'
export const genders = ["Male", "Female", "Others"]

export const strand = ["N/A","ABM", "STEM", "CCS", "HUMSS", "GAS", "TVL"]
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
    { key: "question5", text: "Do you enjoy applying scientific and mathematical principles to solve problems?" },
    { key: "question6", text: "Are you interested in sustainable and environmentally friendly construction practices?" },
    { key: "question7", text: "Are you enthusiastic about designing and developing computer hardware and systems?" },
    { key: "question8", text: "Do you enjoy working with circuitry and electronic components?" },
    { key: "question9", text: "Are you interested in the integration of hardware and software in technological systems?" },
    { key: "question10", text: "Are you captivated by the study of electricity and electrical systems?" },
    { key: "question11", text: "Do you enjoy analyzing and troubleshooting electrical circuits and power distribution systems?" },
    { key: "question12", text: "Are you interested in renewable energy sources and electrical sustainability?" },
    { key: "question13", text: "Do you have a passion for electronic devices and circuitry?" },
    { key: "question14", text: "Are you interested in designing and developing electronic systems and devices?" },
    { key: "question15", text: "Do you enjoy working with microcontrollers and digital electronics?" },
    { key: "question16", text: "Are you fascinated by the principles of mechanics and the workings of machines?" },
    { key: "question17", text: "Do you enjoy analyzing and solving mechanical engineering problems?" },
    { key: "question18", text: "Are you interested in designing and developing mechanical systems and components?" },
    { key: "question19", text: "Do you have a passion for teaching and working with young learners?" },
    { key: "question20", text: "Are you patient, adaptable, and enthusiastic about education?" },
    { key: "question21", text: "Do you enjoy creating engaging and effective learning experiences?" },
    { key: "question22", text: "Are you interested in working with students with special needs?" },
    { key: "question23", text: "Do you have a desire to support and advocate for the inclusion of students with disabilities?" },
    { key: "question24", text: "Do you possess the patience and empathy required to work with diverse learners?" },
    { key: "question25", text: "Are you passionate about mathematics and enjoy solving complex mathematical problems?" },
    { key: "question26", text: "Do you have strong analytical and logical reasoning skills?" },
    { key: "question27", text: "Are you interested in teaching and inspiring students in the field of mathematics?" },
    { key: "question28", text: "Are you intrigued by the field of accountancy and financial management?" },
    { key: "question29", text: "Do you possess strong numerical and analytical skills?" },
    { key: "question30", text: "Are you interested in financial planning, auditing, and taxation?" },
    { key: "question31", text: "Do you have a passion for the travel and tourism industry?" },
    { key: "question32", text: "Are you interested in planning and organizing tourism experiences?" },
    { key: "question33", text: "Do you enjoy interacting with people from diverse cultures and backgrounds?" },
    { key: "question34", text: "Are you enthusiastic about the field of mass communication and media production?" },
    { key: "question35", text: "Do you have excellent verbal and written communication skills?" },
    { key: "question36", text: "Are you interested in journalism, public relations, or digital media production?" },
    { key: "question37", text: "Do you possess excellent interpersonal and customer service skills?" },
    { key: "question38", text: "Are you interested in the management and operations of the hospitality industry?" },
    { key: "question39", text: "Do you enjoy working in a fast-paced and dynamic environment?" },
    { key: "question40", text: "Are you fascinated by human behavior and the mind?" },
    { key: "question41", text: "Do you enjoy analyzing and interpreting data and research studies?" },
    { key: "question42", text: "Are you interested in counseling or helping individuals improve their mental well-being?" },
    { key: "question43", text: "Are you compassionate and interested in providing healthcare services?" },
    { key: "question44", text: "Do you have good attention to detail and strong communication skills?" },
    { key: "question45", text: "Are you interested in caring for and supporting individuals in their healthcare journey?" },
    { key: "question46", text: "Are you interested in Crime Detection and Investigation?" },
    { key: "question47", text: "Are you intrigued by the field of Industrial Security Concepts?" },
    { key: "question48", text: "Do you want to learn Martial Arts?" },
    { key: "question49", text: "Are you interested in Film and Television?" },
    { key: "question50", text: "Are you interested in Broadcasting?" }
  ];
  type AnswerOptions = {
    [key: string]: string;
  };

  export const answers: AnswerOptions[] = [
    {
      "1": "BACHELOR OF SCIENCE IN ACCOUNTANCY",
      "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "3": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      "5": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
    },
    {
        "1": "BACHELOR OF SCIENCE IN ACCOUNTANCY",
        "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
        "3": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
        "4": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "5": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE"
    },
    {
        "1": "BACHELOR OF SCIENCE IN ACCOUNTANCY",
        "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
        "3": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
        "4": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "5": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE"
    },
    {
        "1": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
        "3": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
        "4": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "5": "BACHELOR OF SCIENCE IN ACCOUNTANCY",
    },
    {
        "1": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING",
        "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
        "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
        "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
        "5": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
      "2": "BACHELOR OF SCIENCE IN ELECTRONIC ENGINEERING",
      "3": "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING",
      "4": "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING",
      "5": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING"
    },
    {
      "1": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN SPECIAL EDUCATION",
      "2": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN GENERAL EDUCATION",
      "3": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN EARLY CHILDHOOD EDUCATION",
      "4": "BACHELOR OF ELEMENTARY EDUCATION",
      "5": "BACHELOR OF EARLY CHILDHOOD EDUCATION"
    },
    {
      "1": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN SPECIAL EDUCATION",
      "2": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN GENERAL EDUCATION",
      "3": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN EARLY CHILDHOOD EDUCATION",
      "4": "BACHELOR OF ELEMENTARY EDUCATION",
      "5": "BACHELOR OF EARLY CHILDHOOD EDUCATION"
    },
    {
      "1": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN SPECIAL EDUCATION",
      "2": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN GENERAL EDUCATION",
      "3": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN EARLY CHILDHOOD EDUCATION",
      "4": "BACHELOR OF ELEMENTARY EDUCATION",
      "5": "BACHELOR OF EARLY CHILDHOOD EDUCATION"
    },
    {
      "1": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN GENERAL EDUCATION",
      "2": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN EARLY CHILDHOOD EDUCATION",
      "3": "BACHELOR OF ELEMENTARY EDUCATION",
      "4": "BACHELOR OF EARLY CHILDHOOD EDUCATION",
      "5": "BACHELOR OF SPECIAL NEEDS EDUCATION:GENERALIST"
    },
    {
      "1": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN GENERAL EDUCATION",
      "2": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN EARLY CHILDHOOD EDUCATION",
      "3": "BACHELOR OF ELEMENTARY EDUCATION",
      "4": "BACHELOR OF EARLY CHILDHOOD EDUCATION",
      "5": "BACHELOR OF SPECIAL NEEDS EDUCATION:GENERALIST"
    },
    {
      "1": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN GENERAL EDUCATION",
      "2": "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN EARLY CHILDHOOD EDUCATION",
      "3": "BACHELOR OF ELEMENTARY EDUCATION",
      "4": "BACHELOR OF EARLY CHILDHOOD EDUCATION",
      "5": "BACHELOR OF SPECIAL NEEDS EDUCATION:GENERALIST"
    },
    {
      "1": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MARKETING MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MANAGEMENT ACCOUNTING",
      "3": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN FINANCIAL MANAGEMENT",
      "4": "BACHELOR OF SCIENCE IN ACCOUNTANCY",
      "5": "BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS"
    },
    {
      "1": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MARKETING MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MANAGEMENT ACCOUNTING",
      "3": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN FINANCIAL MANAGEMENT",
      "4": "BACHELOR OF SCIENCE IN ACCOUNTANCY",
      "5": "BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS"
    },
    {
      "1": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MARKETING MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MANAGEMENT ACCOUNTING",
      "3": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN FINANCIAL MANAGEMENT",
      "4": "BACHELOR OF SCIENCE IN ACCOUNTANCY",
      "5": "BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS"
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MARKETING MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MANAGEMENT ACCOUNTING",
      "4": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN FINANCIAL MANAGEMENT",
      "5": "BACHELOR OF SCIENCE IN ACCOUNTANCY"
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MARKETING MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MANAGEMENT ACCOUNTING",
      "4": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN FINANCIAL MANAGEMENT",
      "5": "BACHELOR OF SCIENCE IN ACCOUNTANCY"
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MARKETING MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MANAGEMENT ACCOUNTING",
      "4": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN FINANCIAL MANAGEMENT",
      "5": "BACHELOR OF SCIENCE IN ACCOUNTANCY"
    },
    {
      
      "1": "BACHELOR OF SCIENCE IN NURSING",
      "2": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "3": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "4": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "5": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
    },
    {
      "1": "BACHELOR OF SCIENCE IN NURSING",
      "2": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "3": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "4": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "5": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
    },
    {
      "1": "BACHELOR OF SCIENCE IN NURSING",
      "2": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "3": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "4": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "5": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
    },
    {
      "1": "BACHELOR OF SCIENCE IN NURSING",
      "2": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "5": "BACHELOR OF ARTS IN MASS COMMUNICATION",
    },
    {
      "1": "BACHELOR OF SCIENCE IN NURSING",
      "2": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "5": "BACHELOR OF ARTS IN MASS COMMUNICATION",
    },
    {
      "1": "BACHELOR OF SCIENCE IN NURSING",
      "2": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "5": "BACHELOR OF ARTS IN MASS COMMUNICATION",
    },
    {
      "1": "BACHELOR OF SCIENCE IN NURSING",
      "2": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "5": "BACHELOR OF ARTS IN MASS COMMUNICATION",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "3": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "3": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "3": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "3": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "4": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "5": "BACHELOR OF SCIENCE IN NURSING",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF ARTS IN MASS COMMUNICATION",
      "3": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "4": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "5": "BACHELOR OF SCIENCE IN NURSING",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN CRIMINOLOGY",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN CRIMINOLOGY",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN CRIMINOLOGY",
    },
    {
      "1": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
      "2": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
      "3": "BACHELOR OF SCIENCE IN PSYCHOLOGY",
      "4": "BACHELOR OF SCIENCE IN NURSING",
      "5": "BACHELOR OF SCIENCE IN CRIMINOLOGY",
    },
  ]

  export const imageset: {[key: string]: any} = {

    "SCHOOL OF CRIMINOLOGY": require('../Images/CRIM.jpg'),
    "SCHOOL OF PROFESSIONAL STUDIES": require('../Images/PROFSTU.jpg'),
    "SCHOOL OF BUSINESS AND ACCOUNTANCY": require('../Images/BSA.jpg'),
    "SCHOOL OF HUMANITIES": require('../Images/HUM.jpg'),
    "SCHOOL OF HEALTH AND SCIENCES": require('../Images/HELSCI.jpg'),
    "SCHOOL OF INTERNATIONAL HOSPITALITY MANAGEMENT": require('../Images/HRM.jpg'),
    "SCHOOL OF INFORMATION TECHNOLOGY": require('../Images/BSIT.jpg'),
    "SCHOOL OF ENGINEERING": require('../Images/CIVENG.jpg'),
    "SCHOOL OF TEACHER EDUCATION": require('../Images/TEACHINGS.jpg'),
    "BACHELOR OF SCIENCE IN COMPUTER SCIENCE": require('../Images/BSCS.jpg'),
    "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY": require('../Images/BSIT.jpg'),
    "BACHELOR OF SCIENCE IN CIVIL ENGINEERING": require('../Images/CIVENG.jpg'),
    "BACHELOR OF SCIENCE IN ELECTRONICS ENGINEERING": require('../Images/NICENG.jpg'),
    "BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING": require('../Images/ELECENG.jpeg'),
    "BACHELOR OF SCIENCE IN COMPUTER ENGINEERING": require('../Images/COMENG.jpg'),
    "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING": require('../Images/MECHENG.jpg'),
    "BACHELOR OF SCIENCE IN CHEMICAL ENGINEERING" : require('../Images/CHEMENG.jpg'),
    "BACHELOR OF EARLY CHILDHOOD EDUCATION" : require('../Images/EARCHEDU.jpg'),
    "BACHELOR OF ELEMENTARY EDUCATION" : require('../Images/EDU.jpg'),
    "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN EARLY CHILDHOOD EDUCATION" :require('../Images/EARCHEDU.jpg'),
    "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN GENERAL EDUCATION" :require('../Images/GENEDU.jpg'),
    "BACHELOR OF ELEMENTARY EDUCATION MAJOR IN SPECIAL EDUCATION" :require('../Images/SPEEDU.png'),
    // "BACHELOR OF SECONDARY EDUCATION MAJOR IN ENGLISH" :'',
    // "BACHELOR OF SECONDARY EDUCATION MAJOR IN FILIPINO" :'',
    // "BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS" :'',
    // "BACHELOR OF SECONDARY EDUCATION MAJOR IN SCIENCE" :'',
    "BACHELOR OF SPECIAL NEEDS EDUCATION: GENERALIST" :require('../Images/SPENEEDUGEN.jpg'),
    "BACHELOR OF SCIENCE IN ACCOUNTANCY" :require('../Images/BSA.jpg'),
    "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN FINANCIAL MANAGEMENT" :require('../Images/BSAMFM.png'),
    "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MANAGEMENT ACCOUNTING" :require('../Images/BSAMMA.jpg'),
    "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MARKETING MANAGEMENT" :require('../Images/BSAMMM.jpg'),
    "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT" :require('../Images/BSTM.jpg'),
    "BACHELOR OF ARTS IN MASS COMMUNICATION" :require('../Images/MA.jpg'),
    "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT" :require('../Images/HRM.jpg'),
    "BACHELOR OF SCIENCE IN PSYCHOLOGY" :require('../Images/PSYCH.jpg'),
    "BACHELOR OF SCIENCE IN NURSING" :require('../Images/HELSCI.jpg'),
    "BACHELOR OF SCIENCE IN CRIMINOLOGY OR CRIMINAL JUSTICE" :require('../Images/CRIM.jpg'),
    "DOCTOR OF PHILOSOPHY EDUCATIONAL LEADERSHIP AND MANAGEMENT" :require('../Images/PHDLM.jpg'),
    "MASTER IN EDUCATION MAJOR IN EDUCATIONAL LEADERSHIP" :require('../Images/MAEL.jpg'),
    "MASTER IN EDUCATION MAJOR IN ENGLISH LANGUAGE TEACHING" :require('../Images/MAELT.jpg'),
    "MASTER IN INFORMATION TECHNOLOGY":require('../Images/MIT.jpg'),
    "MASTER OF ARTS IN EDUCATION MAJOR IN EDUCATIONAL MANAGEMENT" :require('../Images/MAEM.jpg'),
  }