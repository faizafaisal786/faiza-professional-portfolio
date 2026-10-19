const projectFacts = [
  {
    name: 'Khidmat AI Assistant',
    aliases: ['khidmat', 'khidmat ai', 'ai seekho'],
    description: 'A service-discovery concept that routes home-service requests through specialized agents.',
    status: 'Its demo page loads, but a request returned HTTP 402 during the last check. The AI/API flow needs rechecking.',
    repository: 'https://github.com/faizafaisal786/Ai-seekho',
    demo: 'https://ai-seekho-nu.vercel.app/'
  },
  {
    name: 'Physical AI Textbook RAG Chatbot',
    aliases: ['rag chatbot', 'textbook chatbot', 'physical ai', 'robotics chatbot'],
    description: 'A Physical AI and humanoid robotics learning site with a textbook-focused chat interface.',
    status: 'The site and chat interface load; chatbot answer quality and backend availability have not been verified.',
    repository: 'https://github.com/faizafaisal786/-Physical-AI-and-Humanoid-Robotics-Textbook-',
    demo: 'https://ragchatbot-ruby.vercel.app/'
  },
  {
    name: 'AwaamFlow',
    aliases: ['awaamflow', 'awaam flow'],
    description: 'A multi-agent service-orchestration concept focused on regional language and low-connectivity access.',
    status: 'The public page responds, but individual orchestration and USSD flows still need verification.',
    repository: 'https://github.com/faizafaisal786/awaamflow',
    demo: 'https://awaamflow-izje.vercel.app/'
  },
  {
    name: 'Velora Mall',
    aliases: ['velora', 'velora mall', 'mall'],
    description: 'An e-commerce web project for browsing products.',
    status: 'The repository is available. Its current preview requires Vercel access, so cart and checkout behavior are unverified.',
    repository: 'https://github.com/faizafaisal786/velora-mall'
  },
  {
    name: 'AI Company',
    aliases: ['ai company', 'startup builder'],
    description: 'An AI company website presenting a multi-agent startup-builder concept.',
    status: 'The public page loads; individual product features have not been fully verified.',
    repository: 'https://github.com/faizafaisal786/AI-Company',
    demo: 'https://ai-company-eosin.vercel.app/'
  }
];

export const suggestedQuestions = [
  'What services does Faiza offer?',
  'Tell me about her projects',
  'Which technologies does she use?',
  'How can I contact Faiza?'
];

function normalize(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function matches(question, phrases) {
  return phrases.some((phrase) => ` ${question} `.includes(` ${normalize(phrase)} `));
}

function projectReply(project) {
  const links = [{ label: 'GitHub repository', href: project.repository }];

  if (project.demo) {
    links.push({ label: 'Open demo', href: project.demo });
  }

  return {
    text: `${project.name}: ${project.description} ${project.status}`,
    links
  };
}

export function answerPortfolioQuestion(input) {
  const question = normalize(input);

  if (!question) {
    return { text: 'Type a question about Faiza, her services, projects, or contact details.' };
  }

  if (/^(hi|hello|hey|salam|assalam o alaikum|assalamu alaikum|aoa|good morning|good afternoon|good evening)$/.test(question)) {
    return { text: 'Hello! I can help you explore Faiza’s services, projects, skills, working process, or contact details. What would you like to know?' };
  }

  const mentionedProject = projectFacts.find((project) => matches(question, project.aliases));
  if (mentionedProject) {
    return projectReply(mentionedProject);
  }

  if (matches(question, ['projects', 'portfolio work', 'her work', 'show me work', 'project list', 'kon se projects', 'kaun se projects', 'projects kaun'])) {
    return {
      text: 'Featured projects include Khidmat AI Assistant, Physical AI Textbook RAG Chatbot, AwaamFlow, Velora Mall, and AI Company. Demo availability and unverified features are called out individually, so ask about any project for its details.',
      links: projectFacts.map((project) => ({ label: project.name, href: project.repository }))
    };
  }

  if (matches(question, ['this chatbot', 'this assistant', 'how do you work', 'how does this work', 'how this works', 'ai powered', 'is this ai', 'are you ai', 'chatbot answer', 'learn from', 'save my', 'store my', 'save messages', 'store messages', 'store chats', 'chat history'])) {
    return {
      text: 'I’m a lightweight portfolio guide, not a general-purpose AI model. I answer from verified portfolio information in this website, work without an API key, and do not send or save your messages.'
    };
  }

  if (matches(question, ['available', 'availability', 'freelance', 'open to work', 'accepting work', 'hire', 'kaam le rahi'])) {
    return {
      text: 'The portfolio says Faiza is available for select projects and open to suitable remote collaborations. Use the contact links to discuss your project.',
      links: [{ label: 'Discuss a project', href: '#contact' }]
    };
  }

  if (matches(question, ['service', 'services', 'what can she do', 'what does she offer', 'what does she do', 'build a chatbot', 'build chatbot', 'create a chatbot', 'create chatbot', 'chatbot development', 'kya karti', 'konsi services', 'kaun si services'])) {
    return {
      text: 'Faiza offers AI workflow automation, AI assistants and RAG, web apps and integrations, and lead research support. Work is scoped around clear deliverables, testing, and handover.'
    };
  }

  if (matches(question, ['skill', 'skills', 'tech stack', 'technologies', 'technology', 'programming language', 'framework', 'tools'])) {
    return {
      text: 'The portfolio highlights Python, FastAPI, React, Next.js, RAG, agentic AI, and APIs. Project cards link to the corresponding public repositories.'
    };
  }

  if (matches(question, ['contact', 'email', 'linkedin', 'get in touch', 'reach her', 'rabta', 'contact kaise', 'message faiza'])) {
    return {
      text: 'You can email Faiza or reach out on LinkedIn. The contact form prepares an email in your own mail app; it does not submit to a server.',
      links: [
        { label: 'Email Faiza', href: 'mailto:faizafaysalgenda@gmail.com' },
        { label: 'LinkedIn profile', href: 'https://linkedin.com/in/faiza-faisal-1303942b6' }
      ]
    };
  }

  if (matches(question, ['where is she', 'location', 'based', 'city', 'karachi', 'kahan rehti', 'kahan based'])) {
    return { text: 'The portfolio lists Faiza as based in Karachi, Pakistan, and open to suitable remote collaborations.' };
  }

  if (matches(question, ['process', 'workflow', 'how does she work', 'steps', 'project start', 'kaam kaise'])) {
    return {
      text: 'Her process is: discover the problem, define scope and acceptance criteria, build in checkpoints, verify expected flows and edge cases, then hand over documentation.'
    };
  }

  if (matches(question, ['price', 'pricing', 'cost', 'rate', 'charge', 'budget', 'how much', 'timeline', 'kitna', 'fees', 'kitne paise', 'kaam ke charges'])) {
    return {
      text: 'The portfolio does not publish fixed rates or timelines. Share the project scope and requirements with Faiza to discuss a suitable estimate.',
      links: [{ label: 'Discuss a project', href: '#contact' }]
    };
  }

  if (matches(question, ['who is faiza', 'about faiza', 'about her', 'background', 'role', 'what does faiza do', 'kon hain', 'kaun hain'])) {
    return {
      text: 'Faiza Faisal is an AI Engineer and Full-Stack Developer based in Karachi, Pakistan. Her portfolio focuses on practical AI workflows, assistants, and web applications.'
    };
  }

  return {
    text: 'I can answer questions about Faiza’s profile, services, projects, technologies, process, and contact details. I only use information published on this portfolio, so try asking about one of those topics.'
  };
}
