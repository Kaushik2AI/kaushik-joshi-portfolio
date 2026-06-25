export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    id: "rarc",
    title: "Reasoning-Aware Retrieval Controller (RARC)",
    category: "RAG / LLM Reliability / AI Systems",
    summary:
      "An adaptive retrieval system that compares Reasoning-Aware Retrieval Control against Fixed RAG and No-Retrieval LLM baselines for reliable document-grounded QA.",
    details: [
      "Compared RARC, Fixed RAG, and No-Retrieval LLMs",
      "Evaluated 768 runs across 36 configurations",
      "Used Llama 3.3 70B Instruct and Qwen 2.5 32B Instruct",
      "Tested 4-bit and 8-bit quantization across Small, Medium, and Big corpora",
      "RARC reduced hallucination from 0.306 to 0.196",
      "RARC improved groundedness from 0.626 to 0.676",
      "RARC improved answer relevance from 3.094 to 4.328",
      "Focus: adaptive evidence-use, grounded QA, hallucination reduction",
    ],
    tech: [
      "Python",
      "HuggingFace",
      "Llama",
      "Qwen",
      "RAG",
      "Vector Retrieval",
      "Quantization",
      "LLM Evaluation",
      "Statistical Analysis",
    ],
  },
  {
    id: "msrb",
    title: "Multimodal Spatial Reasoning Benchmark",
    category: "Multimodal AI / Vision-Language Models / Interpretability",
    summary:
      "A benchmark and interpretability study evaluating whether current VLMs truly understand 2D spatial reasoning or rely on dataset-specific shortcuts.",
    details: [
      "Evaluated BLIP-2, InstructBLIP, Phi-3.5-Vision, Cambrian-8B, and Qwen2.5-VL",
      "Benchmarks: MME-RealWorld-Lite, SpatialMQA, CV-Bench-2D, SAT, VSR, and Spatial-MM",
      "Studied spatial reasoning categories: left/right, above/below, counting, viewpoint shifts, symbolic localization, action-conditioned reasoning",
      "Found that spatial reasoning is not one unified skill",
      "Qwen2.5-VL performed strongest overall, but still struggled on harder real-world spatial reasoning",
      "Used Grad-CAM, attention entropy, and CKA-style diagnostics for interpretability",
    ],
    tech: [
      "Python",
      "PyTorch",
      "VLMs",
      "Qwen2.5-VL",
      "Cambrian",
      "BLIP-2",
      "InstructBLIP",
      "Grad-CAM",
      "Benchmarking",
      "Multimodal Evaluation",
    ],
  },
  {
    id: "sarf",
    title: "SARF — Structure-Aware Representation Fusion",
    category: "Computer Vision / CLIP Transfer / Technical Diagram Understanding",
    summary:
      "A lightweight fusion framework that improves CLIP transfer for low-resource circuit diagram recognition by combining RGB semantic features with edge-based structural features.",
    details: [
      "Built SARF using frozen CLIP ViT-B/32 embeddings",
      "Combined RGB representations with Canny edge structural representations",
      "Tested RGB-only, edge-only, SARF-Sum, SARF-Concat, and SARF-Learned Fusion",
      "Focused on circuit diagrams where wire connectivity, junctions, and topology matter more than texture",
      "Used Grad-CAM and attention rollout to show stronger focus on structural regions",
      "SARF-Concat gave the best practical trade-off between stability and structural sensitivity",
    ],
    tech: [
      "Python",
      "PyTorch",
      "CLIP",
      "OpenCV",
      "Canny Edge Detection",
      "Grad-CAM",
      "Attention Rollout",
      "Logistic Regression",
      "MLP",
      "Computer Vision",
    ],
  },
  {
    id: "decision-twin",
    title: "Decision Twin for Business Strategy",
    category: "Agentic AI / Business Simulation / Decision Intelligence",
    summary:
      "A business strategy decision system that combines simulation, risk analysis, RAG-based policy checks, LLM strategy generation, and a reviewer agent.",
    details: [
      'User asks questions like: "What happens if we increase price by 10%?"',
      "Simulator calculates impact on customers, churn, revenue, profit, CAC, and business metrics",
      "Risk engine detects problems like churn increase, customer shrinkage, low margin, or CAC inefficiency",
      "Policy engine uses RAG to check internal rules, pricing limits, churn thresholds, governance",
      "Strategy LLM generates a recommendation, e.g., increasing price by 4–6% instead of 10%",
      "Reviewer LLM challenges the decision with counterarguments, risks, alternatives, failure conditions",
      "Trust layer shows evidence, confidence, and governance-backed reasoning",
    ],
    tech: [
      "Python",
      "Streamlit",
      "LLMs",
      "RAG",
      "Simulation Engine",
      "Risk Engine",
      "Business Analytics",
      "Agents",
      "Mistral/Qwen-style LLMs",
      "Decision Intelligence",
    ],
  },
];

export const publications = [
  {
    type: "Conference Paper",
    venue: "IEEE SIEDS 2026",
    status: "Accepted",
    title:
      "Selecting RAG vs. File-First Deployment Strategies Across Open-Weight Reasoning Models for Efficient AI Systems",
    doi: null,
  },
  {
    type: "Journal Paper",
    venue: "FirePhysChem",
    status: "Published",
    title:
      "Unleashing the Power of Deep Learning: A Novel Approach for Defect Detection in Solid Rocket Motors",
    doi: "10.1016/j.fpc.2025.06.005",
  },
];

export const experience = [
  {
    company: "High Energy Materials Research Laboratory (HEMRL)",
    role: "AI Engineer Apprentice",
    period: "Aug 2023 – May 2025",
    location: "Pune, India",
    bullets: [
      "Developed and deployed custom LLMs for predictive modeling, optimization, and NLP tasks",
      "Designed scalable ML pipelines using REST/FastAPI for real-time model serving",
      "Used GANs for synthetic data generation and neural networks for pattern recognition",
      "Conducted large-scale data analysis to improve model accuracy and performance",
    ],
  },
  {
    company: "High Energy Materials Research Laboratory (HEMRL)",
    role: "Research Intern",
    period: "Feb 2023 – July 2023",
    location: "Pune, India",
    bullets: [
      "Conducted literature reviews and identified research gaps across AI domains",
      "Assisted in developing, evaluating, and deploying ML models for experimental use",
      "Worked on EDA, feature extraction, and image processing for model insights",
    ],
  },
  {
    company: "Stacklab.in",
    role: "AI/ML Engineer Intern",
    period: "July 2022 – Dec 2022",
    location: "Pune, India",
    bullets: [
      "Built and deployed ML models with API and data pipeline integration",
      "Improved scalability through pipeline optimization and model retraining automation",
      "Performed testing, validation, and documentation for production-grade AI applications",
    ],
  },
];

export const education = [
  {
    school: "Boston University",
    degree: "Master of Science in Artificial Intelligence",
    period: "Sept 2025 – May 2027",
    location: "Boston, MA",
    note: "Coursework: Artificial Intelligence, Machine Learning, NLP, Data Science, Multimodal ML, Image and Video Computing",
  },
  {
    school: "MIT World Peace University",
    degree: "Post Graduate Diploma in Artificial Intelligence and Machine Learning",
    period: "July 2019 – May 2023",
    location: "Pune, India",
    note: "GPA: 8.20 / 10",
  },
  {
    school: "MIT World Peace University",
    degree: "Bachelor of Science in Computer Science",
    period: "July 2019 – May 2023",
    location: "Pune, India",
    note: "GPA: 9.10 / 10",
  },
];

export const skillGroups = [
  { name: "Programming", items: ["Python", "Java", "C++", "SQL"] },
  {
    name: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Multimodal AI",
      "LLMs",
      "RAG",
      "Agentic AI",
      "Model Evaluation",
      "AI Research",
    ],
  },
  { name: "Frameworks", items: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "HuggingFace"] },
  {
    name: "MLOps / Cloud",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "AWS EC2",
      "AWS S3",
      "Model Deployment",
      "Monitoring",
      "FastAPI",
    ],
  },
  {
    name: "Data / Tools",
    items: ["MySQL", "MongoDB", "Anaconda", "VS Code", "Tableau", "Power BI"],
  },
  {
    name: "Soft Skills",
    items: [
      "Research Mindset",
      "Problem Solving",
      "Team Collaboration",
      "Leadership",
      "Time Management",
    ],
  },
];

export const positioningTags = [
  "Multimodal AI",
  "LLMs & Agents",
  "NLP",
  "RAG Systems",
  "AI Research",
  "Computer Vision",
  "Trustworthy AI",
  "AI Systems",
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
