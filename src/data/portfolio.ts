export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  metric: string;
  status: string;
  accent: 'cyan' | 'emerald' | 'violet' | 'sky';
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  signal: string;
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Class Project', href: '#class-project' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
];

export const dashboardSignals = [
  { label: 'Environmental Data', value: 'Air quality', trend: 'weather + pollen context', tone: 'cyan' },
  { label: 'Research Data', value: 'Metadata work', trend: 'CKAN + standards', tone: 'emerald' },
  { label: 'Machine Learning', value: 'Models + analysis', trend: 'PyTorch + Python', tone: 'violet' },
  { label: 'Community Work', value: 'Teaching + nonprofits', trend: 'technology access', tone: 'sky' },
];

export const projects: Project[] = [
  {
    title: 'AsthmaAware',
    category: 'Health + Environmental Data',
    description:
      'AsthmaAware uses environmental information such as air quality, pollen, weather, and location data to help people understand asthma-related risk factors. My technical work includes connecting environmental data sources, shaping the data for analysis, and helping build map- and dashboard-style views.',
    stack: ['Python', 'Environmental Data', 'Public Health', 'Forecasting', 'Maps'],
    metric: 'Environmental risk data for asthma',
    status: 'Featured project',
    accent: 'cyan',
  },
  {
    title: 'Rahnev Lab — Computational Modeling',
    category: 'Computational Cognition',
    description:
      'Research on computational models of human perception and metacognition. I am currently reproducing and extending RTNet work to compare relationships between neural-network confidence/error patterns and human confidence/accuracy.',
    stack: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'Neural Networks', 'Computational Modeling'],
    metric: 'RTNet reproduction and extension',
    status: 'Undergraduate researcher',
    accent: 'violet',
  },
  {
    title: 'SocWeB Lab — Adolescent Wellbeing Research',
    category: 'Human-Centered AI',
    description:
      'Research connected with the Children’s Healthcare of Atlanta Pediatric Technology Center. The project explores how social-media information, health data, and AI/LLMs could contribute to personalized interventions for adolescent health and well-being.',
    stack: ['LLMs', 'Machine Learning', 'Python', 'Health Data', 'Application Development'],
    metric: 'Adolescent health and wellbeing research',
    status: 'Undergraduate researcher',
    accent: 'sky',
  },
  {
    title: 'Klubs4Kids — Backend Development',
    category: 'Nonprofit Infrastructure',
    description:
      'Backend development for Klubs4Kids, a nonprofit youth golf organization. I work on FastAPI routes, Pydantic models, PostgreSQL/Supabase data structures, authentication and storage, documentation, and backend support for registrations, tournaments, waivers, payments, and donations.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'Pydantic', 'Stripe', 'Sanity', 'React/TypeScript'],
    metric: 'Backend API and database work',
    status: 'Backend developer',
    accent: 'emerald',
  },
  {
    title: 'CyVerse / CKAN Data Commons',
    category: 'Research Infrastructure',
    description:
      'During my University of Arizona / CyVerse internship, I worked on research data management and data commons infrastructure. The work involved CKAN, metadata standards, cloud storage links, and making scientific datasets easier for researchers to find and reuse.',
    stack: ['CKAN', 'DCAT', 'Croissant', 'AWS S3', 'Parquet'],
    metric: 'Research data management and metadata',
    status: 'Internship research',
    accent: 'emerald',
  },
  {
    title: 'School Nutrition Equity Analysis',
    category: 'Data Equity',
    description:
      'A data analysis project looking at school nutrition access and equity across counties. I worked with tabular data to clean, compare, and visualize patterns that could help explain differences between regions.',
    stack: ['Pandas', 'Tableau', 'Data Cleaning', 'Equity Analysis'],
    metric: 'County-level data analysis',
    status: 'Research analysis',
    accent: 'sky',
  },
  {
    title: 'SnapSort',
    category: 'Computer Vision',
    description:
      'SnapSort is a photo-sorting project for helping photographers review large batches of images more quickly. I built image-ranking logic based on blur, lighting, orientation, faces, and object detection.',
    stack: ['Python', 'Computer Vision', 'ML', 'Image Ranking', 'Automation'],
    metric: 'Image quality and content ranking',
    status: 'Personal project',
    accent: 'violet',
  },
  {
    title: 'Seniors Empowered in Technology',
    category: 'Community Service',
    description:
      'A community technology education initiative I co-founded to help seniors become more comfortable with everyday digital tools. We taught topics such as cybersecurity basics, email, search engines, troubleshooting, and online safety.',
    stack: ['Teaching', 'Cybersecurity', 'Curriculum', 'Outreach'],
    metric: 'Technology education for seniors',
    status: 'Co-founder',
    accent: 'emerald',
  },
  {
    title: 'Ace For Love',
    category: 'Sports + Education',
    description:
      'A nonprofit sports education initiative I helped start to teach tennis and provide a positive community program for children. My role combined coaching, organization, and technical support for the group.',
    stack: ['Leadership', 'Operations', 'Coaching', 'Nonprofit Tech'],
    metric: 'Youth tennis and community programming',
    status: 'Co-founder / CTO',
    accent: 'cyan',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Computer Science Student',
    organization: 'Georgia Tech',
    period: 'Current',
    description:
      'Studying computer science with interests in machine learning, software engineering, data science, and research applications in perception, health, environmental data, and nonprofit/community tools.',
    signal: 'Education',
  },
  {
    role: 'Undergraduate Researcher',
    organization: 'Rahnev Lab, Georgia Tech',
    period: 'Current',
    description:
      'Working with Prof. Dobrimir Rahnev to understand prior RTNet research, reproduce experiments, and analyze model behavior using Python, PyTorch, NumPy, and pandas.',
    signal: 'Research',
  },
  {
    role: 'Undergraduate Researcher',
    organization: 'SocWeB Lab, Georgia Tech',
    period: 'Current',
    description:
      'Contributing to an existing research pipeline by working with social-media representations, health-related data, AI/LLM methods, and application pieces for adolescent well-being research.',
    signal: 'Research',
  },
  {
    role: 'Research Data Intern',
    organization: 'University of Arizona / CyVerse',
    period: 'Internship',
    description:
      'Worked on metadata and data-management tasks for scientific datasets, including CKAN records, standards research, cloud storage references, and documentation for data commons workflows.',
    signal: 'Internship',
  },
  {
    role: 'Backend Developer',
    organization: 'Klubs4Kids',
    period: 'Current',
    description:
      'Designing API contracts, implementing backend routes, defining request/response models, documenting endpoints, and coordinating database/auth/payment pieces with the rest of the platform.',
    signal: 'Backend',
  },
  {
    role: 'Founder / Developer',
    organization: 'SnapSort',
    period: 'Project',
    description:
      'Built and iterated on image-scoring code, tested different quality signals, and used the project to practice applying computer vision methods to a practical workflow.',
    signal: 'Project',
  },
  {
    role: 'Co-founder',
    organization: 'Seniors Empowered in Technology',
    period: 'Community',
    description:
      'Co-founded and taught practical technology sessions for seniors covering online safety, email, search, and everyday troubleshooting.',
    signal: 'Community',
  },
  {
    role: 'Co-founder / CTO / Coach',
    organization: 'Ace For Love',
    period: 'Nonprofit',
    description:
      'Helped lead a tennis-based youth nonprofit through coaching, organizing sessions, supporting operations, and handling technical needs.',
    signal: 'Nonprofit',
  },
  {
    role: 'Code Sensei',
    organization: 'Code Ninjas',
    period: 'Teaching',
    description:
      'Supported young learners as they built confidence with programming concepts, debugging, and creative technical projects.',
    signal: 'Teaching',
  },
  {
    role: 'Leadership',
    organization: 'SkillsUSA / Computer Science Honor Society',
    period: 'Student leadership',
    description:
      'Participated in student leadership through technical competitions, mentoring, public speaking, and project organization.',
    signal: 'Leadership',
  },
];

export const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'HTML', 'CSS'],
  },
  {
    title: 'Data Science / AI',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'LLMs',
      'Computational Modeling',
      'Computer Vision',
      'PyTorch',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Tableau',
    ],
  },
  {
    title: 'Web / App Development',
    skills: ['React', 'React Native', 'Node.js', 'FastAPI', 'Pydantic', 'APIs', 'Firebase', 'PostgreSQL'],
  },
  {
    title: 'Cloud / Data Infrastructure',
    skills: [
      'AWS S3',
      'Google Cloud Storage',
      'Supabase',
      'Supabase Storage',
      'CKAN',
      'Metadata Standards',
      'DCAT',
      'Croissant',
      'Parquet',
      'Stripe',
      'Sanity',
    ],
  },
  {
    title: 'Leadership / Teaching',
    skills: ['Teaching', 'Mentoring', 'Public Speaking', 'Community Outreach', 'Project Leadership'],
  },
];
