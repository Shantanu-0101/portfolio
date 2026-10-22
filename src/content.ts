// no component changes needed. Blog posts live in src/content/blog/*.md.

export const profile = {
  name: "Shantanu Panchal",
  firstName: "Shantanu",
  photo: "/profile.png",
  resume: "/resume.pdf",
  // Shown as "x@gmail.com where x = ..." to keep scrapers away.
  emailUser: "shantanupanchal.dev",
  emailDomain: "gmail.com",
  github: "https://github.com/Shantanu-0101",
  linkedin: "https://www.linkedin.com/in/shantanupanchal01",
};

export const about: string[] = [
  "i'm shantanu panchal, an ai engineer and a pre-final undergrad in artificial intelligence & data science. i like building ml models, llm systems, rag pipelines, multi-llm orchestration, and agents that take real actions.",
  "right now i'm an ai engineer intern at zep analytics, building a meaningful gen ai product for real users. before that, i built scraping, automation and data pipelines at pai kane group.",
  "i'm open to full stack, ai and ml engineering roles. if that sounds like a fit, i'd love to hear from you.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
};

export const experience: Experience[] = [
  {
    company: "Zep Analytics",
    role: "AI Engineer Intern",
    period: "Sep 2026 – Present",
    summary:
      "building a research paper generation pipeline that learns writing style from uploaded papers and generates new academic content.",
    details: [
      "Built a research paper generation pipeline that learns writing style from uploaded papers and generates new academic content using RAG and multi-LLM orchestration.",
      "Designed a generate → evaluate → rewrite loop that detects fabricated citations, repetition, and style drift, then refines the output using Groq and Gemini.",
      "Integrated live web search (Tavily) to ground generated content with real references and relevant images.",
    ],
  },
  {
    company: "Pai Kane Group",
    role: "AI Engineer Intern",
    period: "Oct 2025 – Dec 2025",
    summary:
      "built an automated web scraping pipeline that collects contact data for enterprises and infrastructure projects.",
    details: [
      "Developed an automated web scraping pipeline using Python and Selenium to extract phone numbers, emails, and website URLs of enterprises and infrastructure projects.",
      "Performed margin anomaly analysis in Zoho Books by auditing ERP data and identifying visibility gaps.",
      "Created reports for non-technical stakeholders, reducing manual research time by 70–80% and improving data-driven decision-making.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  url?: string;
};

export const projects: Project[] = [
  {
    name: "autonomous job application agent",
    description:
      "langgraph agent that scrapes job postings, researches companies, and tailors resumes and cover letters",
    url: "https://github.com/Shantanu-0101/Autonomous-Job-Application-Agent",
  },
  {
    name: "remind you",
    description:
      "android app that schedules random reminders to help build habits — live on the play store",
    url: "https://play.google.com/store/apps/details?id=com.shantanupanchal.remindyou",
  },
];

// Posts published elsewhere (Hashnode, Medium...). They show up in the
// writing section and on /blog, and open the original article.
export type ExternalPost = {
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags: string[];
  url: string;
};

export const externalPosts: ExternalPost[] = [
  {
    title: "From Python to JavaScript: What Surprised Me Most as an AI Student",
    date: "2026-08-02",
    summary: "after two years of python for ai and data science, what stood out when i moved to javascript.",
    tags: ["python", "javascript"],
    url: "https://shantanupanchal.hashnode.dev/from-python-to-javascript-what-surprised-me-most-as-an-ai-student",
  },
  {
    title: "I Trained a Word2Vec Model on Friends TV Show Dialogues",
    date: "2026-05-24",
    summary: "learning word embeddings by training word2vec on every line of friends.",
    tags: ["nlp", "word2vec"],
    url: "https://shantanupanchal.hashnode.dev/i-trained-a-word2vec-model-on-friends-tv-show-dialogues",
  },
  {
    title: "What is a Perceptron in Deep Learning?",
    date: "2026-01-01",
    summary: "the basic building block of neural networks, explained in simple terms.",
    tags: ["deep-learning", "neural-networks"],
    url: "https://shantanupanchal.hashnode.dev/what-is-perceptron-in-deep-learning",
  },
];
