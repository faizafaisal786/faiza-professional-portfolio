import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Braces, CheckCircle2,
  BriefcaseBusiness, ChevronRight, Code2, Cpu, ExternalLink, Globe2, Layers3,
  Mail, Menu, MessageSquareText, Workflow, X, Sparkles, ShieldCheck, Send,
  FileText, Rocket
} from 'lucide-react';
import './styles.css';
import './portrait.css';
import './chatbot.css';
import { answerPortfolioQuestion, suggestedQuestions } from './chatbot.js';

const profile = {
  name: 'Faiza Faisal',
  email: 'faizafaysalgenda@gmail.com',
  linkedin: 'https://linkedin.com/in/faiza-faisal-1303942b6',
  github: 'https://github.com/faizafaisal786',
  location: 'Karachi, Pakistan'
};

const services = [
  {
    icon: Workflow,
    number: '01',
    title: 'AI Workflow Automation',
    description: 'Connect repetitive business steps into clear, testable workflows that reduce manual handoffs.',
    deliverables: ['Workflow mapping', 'API and tool integrations', 'Notifications and lead routing', 'Testing and handover']
  },
  {
    icon: Bot,
    number: '02',
    title: 'AI Assistants & RAG',
    description: 'Build assistants that work with approved knowledge sources and make their limitations visible.',
    deliverables: ['Knowledge-base setup', 'Retrieval and answer flow', 'Source-aware responses', 'Evaluation and guardrails']
  },
  {
    icon: Code2,
    number: '03',
    title: 'Web Apps & Integrations',
    description: 'Develop responsive web experiences and connect them to backends, APIs, and AI services.',
    deliverables: ['Landing pages and dashboards', 'React / Next.js interfaces', 'Python / FastAPI APIs', 'Deployment support']
  },
  {
    icon: MessageSquareText,
    number: '04',
    title: 'Lead Research Support',
    description: 'Organize prospect research and structured lead information to support focused business outreach.',
    deliverables: ['Prospect criteria', 'Company research', 'Decision-maker research where available', 'Clean lead sheets']
  }
];

const projects = [
  {
    name: 'Khidmat AI Assistant',
    type: 'Agentic AI · Multi-agent concept',
    description: 'A service-oriented assistant concept designed to route user needs through specialized agents for home-service discovery and task support.',
    tags: ['Gemini', 'Agent orchestration', 'Google Maps'],
    github: 'https://github.com/faizafaisal786/Ai-seekho',
    live: 'https://ai-seekho-nu.vercel.app',
    note: 'The live page loads, but one request returned HTTP 402 during verification. Confirm the AI/API service is available before presenting orchestration results as functional.'
  },
  {
    name: 'Physical AI Textbook RAG Chatbot',
    type: 'RAG assistant · Robotics learning',
    description: 'A robotics and Physical AI learning site with a textbook-focused RAG chatbot interface for asking questions about the course material.',
    tags: ['RAG', 'Physical AI', 'Humanoid robotics'],
    github: 'https://github.com/faizafaisal786/-Physical-AI-and-Humanoid-Robotics-Textbook-',
    live: 'https://ragchatbot-ruby.vercel.app/',
    note: 'The live textbook site and chat interface load. Chat responses were not submitted during verification, so answer quality and backend availability still need confirmation.'
  },
  {
    name: 'AwaamFlow',
    type: 'Multi-agent orchestration · Low-connectivity access',
    description: 'A multi-agent service-orchestration concept focused on understanding regional language and supporting communities with limited internet access.',
    tags: ['Multi-agent AI', 'Dialect support', 'USSD'],
    github: 'https://github.com/faizafaisal786/awaamflow',
    live: 'https://awaamflow-izje.vercel.app/',
    note: 'The public deployment responds successfully. Verify the individual orchestration and USSD flows before describing them as production-ready.'
  },
  {
    name: 'Velora Mall',
    type: 'Full-stack web · E-commerce concept',
    description: 'A shopping-site project focused on presenting products in a clear, user-friendly browsing experience.',
    tags: ['Web development', 'UI design', 'AI-assisted build'],
    github: 'https://github.com/faizafaisal786/velora-mall',
    live: '',
    note: 'The repository is linked. The available Vercel preview redirects to a login page, so a public production URL and current cart/checkout behavior still need confirmation.'
  },
  {
    name: 'AI Company',
    type: 'AI company site · Multi-agent startup builder',
    description: 'A web experience presenting an AI-focused company and its multi-agent startup builder concept.',
    tags: ['Next.js', 'Web UI', 'Content structure'],
    github: 'https://github.com/faizafaisal786/AI-Company',
    live: 'https://ai-company-eosin.vercel.app',
    note: 'The public deployment loads. Review the available flows and confirm which features are implemented before making additional claims.'
  }
];

const processSteps = [
  ['01', 'Discover', 'Understand the business problem, current process, constraints, and desired outcome.'],
  ['02', 'Define', 'Agree on deliverables, exclusions, acceptance criteria, timeline, and price.'],
  ['03', 'Build', 'Develop in small steps with clear checkpoints and regular communication.'],
  ['04', 'Verify', 'Test expected flows, errors, edge cases, and AI response quality.'],
  ['05', 'Handover', 'Share documentation, access details, and agreed support information.']
];

function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 0,
      role: 'assistant',
      text: 'Hi! I’m Faiza’s portfolio guide. Ask me about her services, projects, skills, or how to get in touch.'
    }
  ]);
  const nextMessageId = useRef(1);
  const latestMessageRef = useRef(null);

  useEffect(() => {
    if (open) {
      latestMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages, open]);

  function askQuestion(question) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;

    const answer = answerPortfolioQuestion(cleanQuestion);
    const userMessage = { id: nextMessageId.current++, role: 'user', text: cleanQuestion };
    const assistantMessage = { id: nextMessageId.current++, role: 'assistant', ...answer };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInput('');
  }

  function submitQuestion(event) {
    event.preventDefault();
    askQuestion(input);
  }

  return (
    <div className="chatbot-widget">
      {open && (
        <section className="chatbot-panel" aria-label="Faiza portfolio assistant">
          <header className="chatbot-header">
            <span className="chatbot-avatar"><Bot size={20} /></span>
            <span className="chatbot-heading">
              <strong>Portfolio assistant</strong>
              <small>Ask about Faiza’s work</small>
            </span>
            <button className="chatbot-close" type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={19} />
            </button>
          </header>
          <div className="chatbot-disclosure"><span /> Replies use published portfolio information</div>
          <div className="chatbot-messages" role="log" aria-live="polite" aria-relevant="additions">
            {messages.map((message) => (
              <div className={`chatbot-message ${message.role}`} key={message.id}>
                {message.role === 'assistant' && <span className="message-avatar"><Bot size={14} /></span>}
                <div className="chatbot-bubble">
                  <p>{message.text}</p>
                  {message.links?.length > 0 && (
                    <div className="chatbot-answer-links">
                      {message.links.map((link) => (
                        <a
                          href={link.href}
                          key={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                          onClick={() => link.href.startsWith('#') && setOpen(false)}
                        >
                          {link.label}<ArrowUpRight size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="chatbot-suggestions" aria-label="Suggested questions">
                {suggestedQuestions.map((question) => (
                  <button type="button" key={question} onClick={() => askQuestion(question)}>{question}</button>
                ))}
              </div>
            )}
            <div ref={latestMessageRef} />
          </div>
          <form className="chatbot-form" onSubmit={submitQuestion}>
            <label className="visually-hidden" htmlFor="portfolio-chat-question">Ask a question about Faiza’s portfolio</label>
            <input
              id="portfolio-chat-question"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={500}
              placeholder="Ask about services, projects..."
              autoComplete="off"
            />
            <button type="submit" disabled={!input.trim()} aria-label="Send message"><Send size={17} /></button>
          </form>
          <div className="chatbot-footnote">No AI API · Your messages are not saved</div>
        </section>
      )}
      <button
        className={`chatbot-launcher${open ? ' is-open' : ''}`}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? 'Close portfolio chat' : 'Ask about Faiza'}
      >
        {open ? <X size={21} /> : <MessageSquareText size={21} />}
        {!open && <span>Ask about Faiza</span>}
      </button>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: 'AI Workflow Automation', details: '' });

  const nav = [
    ['Services', '#services'], ['Projects', '#projects'], ['Process', '#process'], ['About', '#about'], ['Contact', '#contact']
  ];

  function updateForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submitForm(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Faiza,\n\nMy name: ${form.name}\nMy email: ${form.email}\nService: ${form.service}\n\nProject details:\n${form.details}\n\n`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Faiza Faisal home">
          <span className="brand-mark">F<span>.</span></span>
          <span className="brand-copy"><strong>Faiza Faisal</strong><small>AI · AUTOMATION · WEB</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Discuss a project <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
            <h1>Practical AI.<br /><span>Useful automation.</span><br />Better digital experiences.</h1>
            <p className="hero-lede">I’m Faiza Faisal, an AI Engineer and Full-Stack Developer. I help turn clearly defined business problems into practical AI workflows, assistants, and web applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Discuss a project <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-proof">
              <div><span className="proof-icon"><Cpu size={17} /></span><span><strong>AI & Automation</strong><small>Workflows and assistants</small></span></div>
              <div><span className="proof-icon"><Braces size={17} /></span><span><strong>Full-stack</strong><small>Frontend to API</small></span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
            <div className="portrait-frame">
              <img src="/assets/green-mask-pro.png" alt="Faiza Faisal in a professional workspace" />
              <div className="portrait-caption">
                <span><strong>Faiza Faisal</strong><small>AI ENGINEER · FULL-STACK DEVELOPER</small></span>
                <span className="portrait-status"><i /> AVAILABLE</span>
              </div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-symbol"><Workflow size={16} /></span> Workflow automation</div>
            <div className="floating-chip chip-bottom"><span className="chip-symbol chip-purple"><Code2 size={16} /></span> Built for real use cases</div>
            <div className="visual-glow"></div>
          </div>
          <div className="hero-bottom-note"><span>BASED IN KARACHI, PAKISTAN</span><span className="note-line"></span><span>OPEN TO SUITABLE REMOTE COLLABORATIONS</span></div>
        </section>

        <section className="trust-strip">
          <div className="section-wrap trust-inner">
            <span>TOOLS & AREAS I WORK WITH</span>
            <div className="tech-list"><b>Python</b><i></i><b>FastAPI</b><i></i><b>React</b><i></i><b>Next.js</b><i></i><b>RAG</b><i></i><b>Agentic AI</b><i></i><b>APIs</b></div>
          </div>
        </section>

        <section className="section-wrap section" id="services">
          <div className="section-heading">
            <div><div className="eyebrow">HOW I CAN HELP</div><h2>Focused services.<br /><span>Clear deliverables.</span></h2></div>
            <p>Start with one well-defined problem. I’ll help scope a practical solution, make the trade-offs clear, and test the agreed outcome.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return <article className="service-card" key={service.number}>
                <div className="service-card-top"><span className="service-icon"><Icon size={22} /></span><span className="service-number">{service.number}</span></div>
                <h3>{service.title}</h3><p>{service.description}</p>
                <ul>{service.deliverables.map(item => <li key={item}><CheckCircle2 size={15} />{item}</li>)}</ul>
                <a href="#contact" className="text-link" onClick={() => setForm({ ...form, service: service.title })}>Discuss this service <ArrowRight size={15} /></a>
              </article>;
            })}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading">
              <div><div className="eyebrow">SELECTED WORK</div><h2>Projects that show<br /><span>how I think and build.</span></h2></div>
              <p>These are project highlights and prototypes. Open the available demos and repositories to review the actual implementation.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => <article className="project-card" key={project.name}>
                <div className={`project-art art-${index + 1}`}>
                  <div className="art-grid"></div><div className="art-icon">{index === 0 ? <Bot size={37} /> : index === 1 ? <MessageSquareText size={37} /> : index === 2 ? <Workflow size={37} /> : index === 3 ? <Globe2 size={37} /> : <Code2 size={37} />}</div>
                  <span className="art-index">PROJECT / 0{index + 1}</span>
                </div>
                <div className="project-content">
                  <span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p>
                  <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer"><Code2 size={16} /> Repository <ExternalLink size={13} /></a>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer"><Globe2 size={16} /> Live demo <ExternalLink size={13} /></a>}
                  </div>
                  <details className="project-note"><summary>Publishing checklist</summary><p>{project.note}</p></details>
                </div>
              </article>)}
            </div>
            <div className="project-disclaimer"><ShieldCheck size={17} /><p>Repository links point to the matching public projects. Demo availability and unverified features are noted on each card; review them before publishing claims.</p></div>
          </div>
        </section>

        <section className="section-wrap section" id="process">
          <div className="section-heading">
            <div><div className="eyebrow">A SIMPLE WORKING PROCESS</div><h2>From problem<br /><span>to handover.</span></h2></div>
            <p>Clear scope and communication help keep projects manageable, especially when working independently.</p>
          </div>
          <div className="process-grid">
            {processSteps.map(([num, title, text]) => <article className="process-step" key={num}><span className="process-num">{num}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div className="about-portrait">
              <img src="/assets/green-mask-pro.png" alt="Faiza Faisal in a professional workspace" />
              <span>LEARN · BUILD · VERIFY</span>
            </div>
            <div className="about-copy">
              <div className="eyebrow">A LITTLE ABOUT ME</div>
              <h2>Technical thinking.<br /><span>Business-aware delivery.</span></h2>
              <p>I work across AI application concepts, agentic workflows, retrieval-based assistants, and full-stack development. My background also includes lead research, market research, personalized outreach, and business-growth support.</p>
              <p>I value clear requirements, honest communication, practical testing, and solutions that fit the actual problem—not AI for its own sake.</p>
              <div className="about-pills"><span><CheckCircle2 size={15} /> Clear scope</span><span><CheckCircle2 size={15} /> Human oversight</span><span><CheckCircle2 size={15} /> Documented handover</span></div>
              <div className="about-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub <ArrowUpRight size={14} /></a></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <div className="eyebrow eyebrow-light">LET’S TALK ABOUT YOUR PROJECT</div>
              <h2>Have a problem<br />worth solving?</h2>
              <p>Share a little context. I’ll review the request and we can discuss scope, feasibility, and the next step.</p>
              <div className="contact-direct"><span className="contact-direct-icon"><Mail size={18} /></span><span><small>EMAIL ME DIRECTLY</small><a href={`mailto:${profile.email}`}>{profile.email}</a></span></div>
              <div className="contact-direct"><span className="contact-direct-icon"><Globe2 size={18} /></span><span><small>LOCATION</small><strong>{profile.location}</strong></span></div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <label>Your name<input name="name" value={form.name} onChange={updateForm} required placeholder="Name" /></label>
              <label>Email address<input name="email" type="email" value={form.email} onChange={updateForm} required placeholder="you@company.com" /></label>
              <label>What do you need?
                <select name="service" value={form.service} onChange={updateForm}>
                  {services.map(s => <option key={s.title}>{s.title}</option>)}
                  <option>Other / Not sure yet</option>
                </select>
              </label>
              <label>Project details<textarea name="details" value={form.details} onChange={updateForm} required rows="4" placeholder="What are you trying to improve or build?" /></label>
              <button className="button button-primary form-submit" type="submit">Prepare inquiry email <Send size={16} /></button>
              <p className="form-note">{sent ? 'Your email app should open with the inquiry prepared. If it did not, email me directly using the address on this page.' : 'This form opens your email app with your message prepared. It does not store submissions on a server.'}</p>
            </form>
          </div>
        </section>

        <section className="closing-cta section-wrap">
          <div><span className="closing-spark"><Sparkles size={17} /></span><p>Have an early-stage idea? A small, clearly scoped first project is a good place to start.</p></div>
          <a href="#contact" className="button button-dark">Start a conversation <ArrowUpRight size={16} /></a>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">F<span>.</span></span><span className="brand-copy"><strong>Faiza Faisal</strong><small>AI · AUTOMATION · WEB</small></span></a>
          <p>Practical technology, thoughtfully built.</p>
          <div className="footer-links"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a></div>
          <span className="copyright">© {new Date().getFullYear()} Faiza Faisal</span>
        </div>
      </footer>
      <PortfolioChatbot />
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
