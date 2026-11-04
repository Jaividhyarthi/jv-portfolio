/** JV portfolio content. Keep claims and credential links grounded in the resume. */

export type Palette = { from: string; via: string; to: string; accent: string };
export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};
export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};
export type Certification = { issuer: string; name: string; link?: string };
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};
export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const profile = {
  "fullName": "Jaividhyarthi Vivekanand",
  "displayName": "JV",
  "firstName": "JV",
  "seriesTag": "THE SERIES",
  "originalLabel": "A JV ORIGINAL",
  "role": "AI & Data Science Student | Python Developer",
  "tagline": [
    "AI & Data Science",
    "Software Development",
    "Embedded IoT"
  ],
  "intro": "I’m JV, a third-year AI & Data Science student at SRM Valliammai Engineering College. I build software, machine learning applications, and embedded prototypes—from teaching analytics to humanitarian coordination.",
  "location": "Chennai, Tamil Nadu",
  "email": "jaividhyarthivivekanand@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/jaividhyarthi-vivekanand-61001a331",
    "github": "https://github.com/Jaividhyarthi"
  },
  "resumePdf": "assets/JV_Complete_Resume.pdf",
  "portrait": {
    "src": "assets/jv-portrait.jpg",
    "srcSet": "",
    "alt": "Portrait of Jaividhyarthi"
  },
  "interests": [
    "AI Research",
    "Entrepreneurship",
    "Tamil Poetry",
    "Drawing & Mandala Art"
  ]
};

export const education = [
  {
    "school": "SRM Valliammai Engineering College",
    "place": "Chennai",
    "degree": "B.Tech — Artificial Intelligence and Data Science",
    "period": "August 2024 – Present",
    "score": "CGPA 9.2/10"
  },
  {
    "school": "Sindhi High School",
    "place": "Bangalore",
    "degree": "Higher Secondary Certificate — Class XII",
    "period": "",
    "score": ""
  },
  {
    "school": "Jaya Public School",
    "place": "",
    "degree": "Secondary School Leaving Certificate — Class X",
    "period": "",
    "score": ""
  }
];

export const experience = [
  {
    "company": "iStudio",
    "role": "Data Analytics Intern",
    "place": "",
    "period": "March – April 2026",
    "points": [
      "Analyzed datasets with Python and Pandas to identify patterns.",
      "Created Matplotlib visualizations and delivered a project report."
    ]
  },
  {
    "company": "Codtec Solutions",
    "role": "Data Analyst Intern",
    "place": "",
    "period": "May 2025",
    "points": [
      "Built Python data-analysis and visualization deliverables."
    ]
  },
  {
    "company": "Elevate Labs",
    "role": "Web Development Intern",
    "place": "",
    "period": "May 2025",
    "points": [
      "Developed and deployed frontend features for web applications.",
      "Recognised among the Top 10 of 800 interns."
    ]
  }
];

export const projects: Project[] = [
  {
    "id": "skyglow",
    "title": "Skyglow",
    "year": "",
    "genre": "Repository Intelligence Platform",
    "logline": "Developed and deployed a full-stack platform analyzing live GitHub repository data to produce explainable indicators and report history.",
    "stack": [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQLite",
      "Render"
    ],
    "build": [
      "Developed and deployed a full-stack platform analyzing live GitHub repository data to produce explainable indicators and report history. Validated backend functionality with 9 passing automated tests. Live application: skyglow-intelligence.onrender.com."
    ],
    "features": [
      "Repository Intelligence Platform",
      "Personal Project"
    ],
    "metrics": [
      {
        "value": "9",
        "label": "passing backend tests"
      }
    ],
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "shield",
    "github": "https://github.com/Jaividhyarthi/skyglow"
  },
  {
    "id": "sift",
    "title": "SIFT",
    "year": "",
    "genre": "Security Intelligence Filtering and Triage",
    "logline": "Contributed to vulnerability triage matching advisories to an organisation’s technology, exposure, and service importance.",
    "stack": [
      "NVD",
      "CISA KEV",
      "FIRST EPSS",
      "CVE Data",
      "Explainable Ranking"
    ],
    "build": [
      "Contributed to vulnerability triage matching advisories to an organisation’s technology, exposure, and service importance. Produces five prioritised actions with transparent scores, uncertain-version verification flags, and exclusion reasons."
    ],
    "features": [
      "Security Intelligence Filtering and Triage",
      "Team NULLSPACE"
    ],
    "metrics": [],
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    },
    "motif": "flow"
  },
  {
    "id": "double-sift",
    "title": "Double SIFT",
    "year": "",
    "genre": "Structural Integrity and Flow Tracking",
    "logline": "Contributed to a structural defence prototype against indirect prompt injection.",
    "stack": [
      "AI Agents",
      "Instruction Provenance",
      "Source Attribution",
      "Plan-Drift Detection"
    ],
    "build": [
      "Contributed to a structural defence prototype against indirect prompt injection. Demonstrated an AI email-agent firewall that tracks instruction sources and goal deviations, with trust-based allow, confirm, and block decisions and concise explanations."
    ],
    "features": [
      "Structural Integrity and Flow Tracking",
      "Team NULLSPACE"
    ],
    "metrics": [],
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    },
    "motif": "tenants"
  },
  {
    "id": "classlens-tara",
    "title": "ClassLens / TARA",
    "year": "",
    "genre": "Teaching Analytics for Reflective Advancement",
    "logline": "Developed a multimodal classroom-recording prototype combining transcription, voice activity detection, speaker diarization, prosody analysis, and pose tracking.",
    "stack": [
      "Python",
      "FastAPI",
      "Sarvam ASR",
      "MediaPipe PoseLandmarker"
    ],
    "build": [
      "Developed a multimodal classroom-recording prototype combining transcription, voice activity detection, speaker diarization, prosody analysis, and pose tracking. Integrated time-based teaching metrics and session reports for evidence-based feedback and academic demonstrations."
    ],
    "features": [
      "Teaching Analytics for Reflective Advancement",
      "SRM Valliammai Engineering College"
    ],
    "metrics": [],
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    },
    "motif": "shield"
  },
  {
    "id": "vivian",
    "title": "Vivian",
    "year": "",
    "genre": "Digital Personal Assistant",
    "logline": "Building personal and professional workspaces for tasks, notes, messages, events, settings, and approvals.",
    "stack": [
      "React",
      "Python",
      "FastAPI",
      "SQLite",
      "REST APIs"
    ],
    "build": [
      "Building personal and professional workspaces for tasks, notes, messages, events, settings, and approvals. Implemented a database-backed dashboard and assistant APIs, AI chat integration, and database backup support."
    ],
    "features": [
      "Digital Personal Assistant",
      "Personal Project"
    ],
    "metrics": [],
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    },
    "motif": "flow"
  },
  {
    "id": "sahara",
    "title": "SAHARA",
    "year": "",
    "genre": "Smart Assistant for Humanitarian Aid, Rescue and Action",
    "logline": "Developing humanitarian coordination through help requests, real-time messaging, and in-app calls.",
    "stack": [
      "React",
      "Vite",
      "FastAPI",
      "Neon PostgreSQL",
      "Nexconn Chat and Calling SDKs"
    ],
    "build": [
      "Developing humanitarian coordination through help requests, real-time messaging, and in-app calls. Established services and database tables for users, requests, messages, and events. In-app calling works; background incoming-call notifications remain under refinement."
    ],
    "features": [
      "Smart Assistant for Humanitarian Aid, Rescue and Action",
      "Nexconn Build Challenge"
    ],
    "metrics": [],
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "tenants"
  },
  {
    "id": "ghostping",
    "title": "GhostPing",
    "year": "",
    "genre": "Predictive Lag and Thermal Monitoring",
    "logline": "Designed an on-device monitoring prototype using short telemetry windows and time-series modeling to anticipate network lag and thermal spikes, identifying emerging gaming-performance risks..",
    "stack": [
      "Python",
      "GRU",
      "TensorFlow Lite",
      "Device Telemetry"
    ],
    "build": [
      "Designed an on-device monitoring prototype using short telemetry windows and time-series modeling to anticipate network lag and thermal spikes, identifying emerging gaming-performance risks."
    ],
    "features": [
      "Predictive Lag and Thermal Monitoring",
      "iQOO Hyderabad City Battle"
    ],
    "metrics": [],
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    },
    "motif": "shield"
  },
  {
    "id": "gridpulse-ai",
    "title": "GridPulse AI",
    "year": "",
    "genre": "Explainable Multi-Agent Microgrid Orchestration",
    "logline": "Contributed to a research prototype coordinating renewable forecasting, demand forecasting, fault detection, and battery management.",
    "stack": [
      "Multi-Agent Systems",
      "Forecasting",
      "Microgrid Simulation"
    ],
    "build": [
      "Contributed to a research prototype coordinating renewable forecasting, demand forecasting, fault detection, and battery management. Developed a simulation-based operator dashboard for inspecting grid decisions and explanations. Validation and comparative evaluation are ongoing."
    ],
    "features": [
      "Explainable Multi-Agent Microgrid Orchestration",
      "SRM Valliammai Engineering College"
    ],
    "metrics": [],
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    },
    "motif": "flow"
  },
  {
    "id": "dravidalm",
    "title": "DravidaLM",
    "year": "",
    "genre": "Offline Language Models for South Indian Languages",
    "logline": "Researching Tamil, Telugu, Kannada, and Malayalam models with dialect coverage, code-mixed text, and offline edge deployment.",
    "stack": [
      "Python",
      "Transformers",
      "Tokenization",
      "Corpus Processing",
      "NVIDIA Jetson AGX"
    ],
    "build": [
      "Researching Tamil, Telugu, Kannada, and Malayalam models with dialect coverage, code-mixed text, and offline edge deployment. Conducted initial experiments using approximately 24 million tokens; further corpus preparation, implementation, and evaluation are ongoing."
    ],
    "features": [
      "Offline Language Models for South Indian Languages",
      "Team NULLSPACE"
    ],
    "metrics": [
      {
        "value": "24M",
        "label": "tokens in initial experiments"
      }
    ],
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    },
    "motif": "tenants"
  },
  {
    "id": "atrp",
    "title": "ATRP",
    "year": "",
    "genre": "Adaptive Trust Routing Protocol for IoT Networks",
    "logline": "Investigated adaptive routing using node reliability and dynamic path costs.",
    "stack": [
      "IoT Simulation",
      "Trust-Based Routing",
      "Graph Algorithms"
    ],
    "build": [
      "Investigated adaptive routing using node reliability and dynamic path costs. Benchmarked against Dijkstra and random-walk strategies and prepared a research manuscript submitted for review."
    ],
    "features": [
      "Adaptive Trust Routing Protocol for IoT Networks",
      "Academic Research"
    ],
    "metrics": [],
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    },
    "motif": "shield"
  },
  {
    "id": "aquawave",
    "title": "AQUAWAVE",
    "year": "",
    "genre": "Adaptive Sonar Transmitter for AUVs",
    "logline": "Designed a sonar-transmitter payload for autonomous underwater vehicles, including waveform generation, embedded control, logging, and safety considerations.",
    "stack": [
      "STM32F407",
      "DSP",
      "LFM Chirps",
      "Phase-Coded Waveforms",
      "SD Logging"
    ],
    "build": [
      "Designed a sonar-transmitter payload for autonomous underwater vehicles, including waveform generation, embedded control, logging, and safety considerations. Developed the architecture and waveform approach as a foundation for hardware implementation and validation."
    ],
    "features": [
      "Adaptive Sonar Transmitter for AUVs",
      "Team NULLSPACE"
    ],
    "metrics": [],
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "flow"
  },
  {
    "id": "motor-pump-predictive-health-and-dry-run-protection",
    "title": "Motor/Pump Predictive Health and Dry-Run Protection",
    "year": "",
    "genre": "Motor/Pump Predictive Health and Dry-Run Protection",
    "logline": "Built an embedded system analyzing motor current signatures for dry-run conditions and indicators of early wear.",
    "stack": [
      "ESP32",
      "ACS712 Current Sensor",
      "Python"
    ],
    "build": [
      "Built an embedded system analyzing motor current signatures for dry-run conditions and indicators of early wear. Converted sensor readings into motor-health indicators and integrated automatic protective cut-off in response to detected faults."
    ],
    "features": [
      "Motor/Pump Predictive Health and Dry-Run Protection",
      "Personal Project"
    ],
    "metrics": [],
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    },
    "motif": "tenants"
  },
  {
    "id": "phantom",
    "title": "Phantom",
    "year": "",
    "genre": "Autonomous Phantom Load Detection Device",
    "logline": "Developed embedded hardware that identifies standby electrical loads from live current measurements and isolates connected appliances through relay control, supporting reduced unnecessary electricity consumption..",
    "stack": [
      "Microcontroller",
      "Current Sensing",
      "Relay Control"
    ],
    "build": [
      "Developed embedded hardware that identifies standby electrical loads from live current measurements and isolates connected appliances through relay control, supporting reduced unnecessary electricity consumption."
    ],
    "features": [
      "Autonomous Phantom Load Detection Device",
      "SRM Valliammai Engineering College"
    ],
    "metrics": [],
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    },
    "motif": "shield"
  },
  {
    "id": "q-farm",
    "title": "Q.Farm",
    "year": "",
    "genre": "Intelligent Crop Advisory",
    "logline": "Developed a crop-advisory prototype combining Random Forest predictions with quantum-inspired scoring.",
    "stack": [
      "Python",
      "Random Forest",
      "Quantum-Inspired Scoring"
    ],
    "build": [
      "Developed a crop-advisory prototype combining Random Forest predictions with quantum-inspired scoring. Integrated predictive modeling and recommendation scoring to explore data-driven crop selection."
    ],
    "features": [
      "Intelligent Crop Advisory",
      "Academic / Hackathon Project"
    ],
    "metrics": [],
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    },
    "motif": "flow"
  }
];

export const achievements: Achievement[] = [
  {
    "id": "moment-0",
    "title": "1st Prize",
    "org": "Neurobots National Hackathon 2026",
    "detail": "Winning team in Thrissur; team prize valued at ₹1,00,000.",
    "laurel": "National Winner"
  },
  {
    "id": "moment-1",
    "title": "1st Prize",
    "org": "Erode Sengunthar Engineering College Hackathon 2026",
    "detail": "First-place team finish.",
    "laurel": "Hackathon Winner"
  },
  {
    "id": "moment-2",
    "title": "2nd Prize",
    "org": "NEXORA National Hackathon 2026",
    "detail": "Cybersecurity Track, Coimbatore.",
    "laurel": "Runner-Up"
  },
  {
    "id": "moment-3",
    "title": "Internal Qualifier",
    "org": "Smart India Hackathon 2026",
    "detail": "Selected through the college internal round with Team NULLSPACE and AQUAWAVE.",
    "laurel": "SIH Selection"
  },
  {
    "id": "moment-4",
    "title": "1st Runner-Up",
    "org": "IT Buzzfeed 2024",
    "detail": "Competed individually against 47 teams.",
    "laurel": "Solo Competition"
  },
  {
    "id": "moment-5",
    "title": "Top 10 / 800",
    "org": "Elevate Labs",
    "detail": "Recognised during the Web Development internship.",
    "laurel": "Internship Recognition"
  },
  {
    "id": "moment-6",
    "title": "Honourable Delegate",
    "org": "Model United Nations 2025",
    "detail": "Represented Norway in UNEA on 8–9 April 2025.",
    "laurel": "Diplomacy"
  },
  {
    "id": "moment-7",
    "title": "A-QAOA",
    "org": "Springer Nature",
    "detail": "Co-authored a published research paper.",
    "laurel": "Publication"
  },
  {
    "id": "moment-8",
    "title": "Cognitive Mirror AI",
    "org": "IEEE NCRTCI 2026",
    "detail": "Co-authored a published research paper.",
    "laurel": "Publication"
  }
];

export const certifications: Certification[] = [
  {
    "name": "Advanced Python Programming",
    "issuer": "Coursera / upSKILL"
  },
  {
    "name": "Java Programming for Beginners",
    "issuer": "Coursera / upSKILL"
  },
  {
    "name": "Web Development - Value Added Course",
    "issuer": "SRM Valliammai Engineering College"
  },
  {
    "name": "MERN Stack Development - Value Added Course",
    "issuer": "SRM Valliammai Engineering College"
  },
  {
    "name": "Introduction to Cloud Computing",
    "issuer": "SkillUp"
  },
  {
    "name": "Introduction to Generative AI: Art of the Possible",
    "issuer": "Amazon Web Services (AWS) | 2025"
  },
  {
    "name": "Generative AI Engineering: Foundations, RAG & Deployment",
    "issuer": "HCL GUVI"
  },
  {
    "name": "The AI Skills You Need to Stay Relevant in the Next 2 Years",
    "issuer": "WsCube Tech"
  },
  {
    "name": "Artificial Intelligence and Machine Learning Training",
    "issuer": "Skill Ladders × Kshitij 2026, IIT Kharagpur"
  },
  {
    "name": "Financial Technology Job Simulation",
    "issuer": "JPMorgan Chase & Co. - Forage"
  },
  {
    "name": "GenAI Powered Data Analytics Job Simulation",
    "issuer": "Tata - Forage | 2026"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    "id": "languages",
    "title": "Languages",
    "subtitle": "Code behind the projects",
    "skills": [
      {
        "name": "Python",
        "mono": "Py"
      },
      {
        "name": "SQL",
        "mono": "SQ"
      },
      {
        "name": "JavaScript",
        "mono": "Ja"
      }
    ]
  },
  {
    "id": "web",
    "title": "Web & Backend",
    "subtitle": "Interfaces, APIs and data",
    "skills": [
      {
        "name": "React",
        "mono": "Re"
      },
      {
        "name": "FastAPI",
        "mono": "Fa"
      },
      {
        "name": "REST APIs",
        "mono": "RE"
      },
      {
        "name": "PostgreSQL",
        "mono": "Po"
      },
      {
        "name": "SQLite",
        "mono": "SQ"
      }
    ]
  },
  {
    "id": "ai",
    "title": "AI & Data",
    "subtitle": "Models and analysis",
    "skills": [
      {
        "name": "Machine Learning",
        "mono": "Ma"
      },
      {
        "name": "Time-Series Modeling",
        "mono": "Ti"
      },
      {
        "name": "Pandas",
        "mono": "Pa"
      },
      {
        "name": "NumPy",
        "mono": "Nu"
      },
      {
        "name": "Speech Processing",
        "mono": "Sp"
      },
      {
        "name": "Computer Vision",
        "mono": "Co"
      }
    ]
  },
  {
    "id": "embedded",
    "title": "Embedded & IoT",
    "subtitle": "From signals to actions",
    "skills": [
      {
        "name": "ESP32",
        "mono": "ES"
      },
      {
        "name": "STM32",
        "mono": "ST"
      },
      {
        "name": "Sensor Interfacing",
        "mono": "Se"
      },
      {
        "name": "Digital Signal Processing",
        "mono": "Di"
      }
    ]
  },
  {
    "id": "tools",
    "title": "Tools",
    "subtitle": "Build, track and deploy",
    "skills": [
      {
        "name": "Git / GitHub",
        "mono": "Gi"
      },
      {
        "name": "Render",
        "mono": "Re"
      },
      {
        "name": "Vite",
        "mono": "Vi"
      },
      {
        "name": "Docker",
        "mono": "Do"
      }
    ]
  }
];

export const skillEvidence: Record<string, string[]> = {
  "Python": [
    "Skyglow",
    "Q.Farm",
    "GhostPing"
  ],
  "FastAPI": [
    "Skyglow",
    "ClassLens / TARA",
    "Vivian",
    "SAHARA"
  ],
  "React": [
    "Vivian",
    "SAHARA"
  ],
  "PostgreSQL": [
    "SAHARA"
  ],
  "SQLite": [
    "Skyglow",
    "Vivian"
  ],
  "ESP32": [
    "Motor/Pump Predictive Health"
  ],
  "STM32": [
    "AQUAWAVE"
  ],
  "Time-Series Modeling": [
    "GhostPing"
  ],
  "Speech Processing": [
    "ClassLens / TARA"
  ],
  "Computer Vision": [
    "ClassLens / TARA"
  ]
};

export const seasons: Season[] = [
  {
    "number": 1,
    "title": "The Foundation",
    "period": "2024 – Present",
    "synopsis": "Engineering, curiosity, and learning to build.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "The AI & Data Science Student",
        "description": "B.Tech at SRM Valliammai Engineering College; expected graduation in May 2028.",
        "tags": [
          "CGPA 9.2/10"
        ],
        "runtime": "2024 – Present",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      },
      {
        "code": "S01 E02",
        "title": "The Representative",
        "description": "Serving as class representative and taking the stage as a college event compère.",
        "tags": [
          "Leadership"
        ],
        "runtime": "2024 – Present",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Learning by Doing",
    "period": "2025 – 2026",
    "synopsis": "Three internships connecting coursework to practical work.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "iStudio",
        "description": "Analyzed datasets with Python and Pandas to identify patterns. Created Matplotlib visualizations and delivered a project report.",
        "tags": [
          "March – April 2026"
        ],
        "runtime": "2025 – 2026",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S02 E02",
        "title": "Codtec Solutions",
        "description": "Built Python data-analysis and visualization deliverables.",
        "tags": [
          "May 2025"
        ],
        "runtime": "2025 – 2026",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      },
      {
        "code": "S02 E03",
        "title": "Elevate Labs",
        "description": "Developed and deployed frontend features for web applications. Recognised among the Top 10 of 800 interns.",
        "tags": [
          "May 2025"
        ],
        "runtime": "2025 – 2026",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "The Hackathon Circuit",
    "period": "2026",
    "synopsis": "Building with Team NULLSPACE under real deadlines.",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "Neurobots National Hackathon 2026",
        "description": "Winning team in Thrissur; team prize valued at ₹1,00,000.",
        "tags": [
          "1st Prize"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      },
      {
        "code": "S03 E02",
        "title": "Erode Sengunthar Engineering College Hackathon 2026",
        "description": "First-place team finish.",
        "tags": [
          "1st Prize"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      },
      {
        "code": "S03 E03",
        "title": "NEXORA National Hackathon 2026",
        "description": "Cybersecurity Track, Coimbatore.",
        "tags": [
          "2nd Prize"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      },
      {
        "code": "S03 E04",
        "title": "Smart India Hackathon 2026",
        "description": "Selected through the college internal round with Team NULLSPACE and AQUAWAVE.",
        "tags": [
          "Internal Qualifier"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 4,
    "title": "Research Meets Software",
    "period": "In progress",
    "synopsis": "Projects across AI systems, language models, and embedded computing.",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Teaching Analytics",
        "description": "ClassLens / TARA combines speech and visual signals for teaching-delivery feedback.",
        "tags": [
          "Applied AI"
        ],
        "runtime": "In progress",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      },
      {
        "code": "S04 E02",
        "title": "Regional Language AI",
        "description": "DravidaLM explores Tamil, Telugu, Kannada, and Malayalam language models.",
        "tags": [
          "Research"
        ],
        "runtime": "In progress",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      },
      {
        "code": "S04 E03",
        "title": "Published Work",
        "description": "Co-authored A-QAOA and Cognitive Mirror AI.",
        "tags": [
          "Publications"
        ],
        "runtime": "In progress",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 5,
    "title": "The Next Chapter",
    "period": "Now building",
    "synopsis": "AI research, useful products, and entrepreneurship.",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "Humanitarian Coordination",
        "description": "SAHARA connects help requests with chat and in-app calling.",
        "tags": [
          "In development"
        ],
        "runtime": "Now building",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      },
      {
        "code": "S05 E02",
        "title": "The Personal Assistant",
        "description": "Vivian combines personal and professional workspaces with AI chat.",
        "tags": [
          "In development"
        ],
        "runtime": "Now building",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  }
];

export const topPicks: TopPick[] = [
  {
    "label": "Primary language",
    "title": "Python",
    "detail": "APIs, data analysis and machine learning",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Live project",
    "title": "Skyglow",
    "detail": "Repository intelligence · 9 passing tests",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Teaching analytics",
    "title": "ClassLens / TARA",
    "detail": "Speech and pose analysis",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  },
  {
    "label": "National stage",
    "title": "Two first prizes",
    "detail": "Neurobots and Erode hackathons",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  },
  {
    "label": "Academic journey",
    "title": "9.2/10",
    "detail": "B.Tech AI & Data Science",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "AI security",
    "title": "Double SIFT",
    "detail": "Instruction provenance and plan drift",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Hands-on experience",
    "title": "3 internships",
    "detail": "Analytics and web development",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Research",
    "title": "Published papers",
    "detail": "A-QAOA and Cognitive Mirror AI",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  },
  {
    "label": "Regional language AI",
    "title": "DravidaLM",
    "detail": "24M-token initial experiments",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  },
  {
    "label": "Current build",
    "title": "SAHARA",
    "detail": "Humanitarian coordination",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  }
];

export const introSlides: IntroSlide[] = [
  {
    "kicker": "Starring",
    "title": "JV",
    "lines": [
      "AI & Data Science student. Python developer.",
      "SRM Valliammai Engineering College · Chennai"
    ],
    "chips": [
      "CGPA 9.2/10"
    ]
  },
  {
    "kicker": "Experience",
    "title": "Learning by doing",
    "lines": [
      "iStudio · Codtec Solutions · Elevate Labs",
      "Data analytics and web development"
    ]
  },
  {
    "kicker": "Originals",
    "title": "14 projects",
    "lines": [
      "ClassLens / TARA · Skyglow · Double SIFT",
      "Vivian · SAHARA · Embedded IoT"
    ]
  },
  {
    "kicker": "Top moments",
    "title": "Built to compete",
    "lines": [
      "Two first-place hackathon finishes",
      "NEXORA Cybersecurity Track runner-up",
      "SIH internal selection with AQUAWAVE"
    ]
  },
  {
    "kicker": "Research",
    "title": "Ideas into evidence",
    "lines": [
      "A-QAOA · Springer Nature",
      "Cognitive Mirror AI · IEEE NCRTCI 2026",
      "ATRP · submitted for review"
    ]
  },
  {
    "kicker": "Next chapter",
    "title": "Let’s build",
    "lines": [
      "AI research · Software development · Entrepreneurship"
    ]
  }
];

const crimson: Palette = {"from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a"};

const ocean: Palette = {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"};

const violet: Palette = {"from": "#120822", "via": "#3d1a6e", "to": "#07060c", "accent": "#b98bff"};

const jade: Palette = {"from": "#03150f", "via": "#0d5a40", "to": "#050a08", "accent": "#46e3a8"};

const amber: Palette = {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"};

export type ProfileId = 'jv' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story' | 'assistant';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'jv',
    name: 'JV',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'assistant', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'assistant', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'assistant', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'assistant', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  assistant: { nav: 'Ask AI', card: 'Ask My AI Assistant', meta: 'Interactive portfolio guide', palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};


