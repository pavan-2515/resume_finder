import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  FileText,
  LayoutTemplate,
  Plus,
  Sparkles,
} from "lucide-react";
import { AppHeader } from "./components/AppHeader";
import { AppSidebar } from "./components/AppSidebar";

const sections = [
  {
    number: "01",
    title: "Personal information",
    description: "Name, contact details, and a short summary",
  },
  {
    number: "02",
    title: "Work experience",
    description: "Show the impact you've made",
  },
  {
    number: "03",
    title: "Education",
    description: "Degrees, courses, and certifications",
  },
  {
    number: "04",
    title: "Skills & projects",
    description: "Highlight what makes you stand out",
  },
];

function App() {
  return (
    <div className="app-shell">
      <AppHeader />
      <div className="app-body">
        <AppSidebar />
        <main className="main-content">
          <div className="page-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                YOUR CAREER WORKSPACE
              </div>
              <h1>Build your next opportunity.</h1>
              <p className="page-description">
                Create a resume that opens doors, one detail at a time.
              </p>
            </div>
            <button className="secondary-button" type="button">
              <ArrowDownToLine size={16} />
              Export
              <ChevronDown size={14} />
            </button>
          </div>

          <section className="resume-toolbar" aria-label="Resume actions">
            <div className="document-title">
              <div className="document-icon">
                <FileText size={18} />
              </div>
              <div>
                <p className="document-name">Untitled resume</p>
                <p className="saved-status">
                  <span className="saved-dot" />
                  Ready to get started
                </p>
              </div>
              <button className="subtle-icon-button" type="button" aria-label="Rename resume">
                <ChevronDown size={15} />
              </button>
            </div>
            <div className="toolbar-divider" />
            <div className="toolbar-template">
              <LayoutTemplate size={17} />
              <span>Template</span>
              <button className="template-select" type="button">
                Minimalist
                <ChevronDown size={14} />
              </button>
            </div>
            <button className="help-button" type="button" aria-label="Resume builder help">
              <CircleHelp size={17} />
            </button>
          </section>

          <div className="builder-grid">
            <section className="editor-panel" aria-labelledby="editor-heading">
              <div className="panel-heading">
                <div>
                  <h2 id="editor-heading">Your information</h2>
                  <p>Start with the essentials. You can change these anytime.</p>
                </div>
                <span className="completion-badge">
                  <span className="completion-dot" />
                  0% complete
                </span>
              </div>

              <div className="completion-track" aria-hidden="true">
                <span />
              </div>

              <div className="section-list">
                {sections.map((section) => (
                  <button className="section-row" type="button" key={section.number}>
                    <span className="section-number">{section.number}</span>
                    <span className="section-text">
                      <span className="section-title">{section.title}</span>
                      <span className="section-description">{section.description}</span>
                    </span>
                    <span className="section-action" aria-hidden="true">
                      <Plus size={17} />
                    </span>
                  </button>
                ))}
              </div>

              <div className="editor-footer">
                <span>
                  <Check size={14} />
                  Your progress is saved automatically
                </span>
                <button type="button" className="text-button">
                  Import existing resume
                  <ArrowRight size={14} />
                </button>
              </div>
            </section>

            <section className="preview-panel" aria-labelledby="preview-heading">
              <div className="preview-heading">
                <div>
                  <h2 id="preview-heading">Live preview</h2>
                  <p>Your resume takes shape as you build</p>
                </div>
                <span className="preview-live">
                  <span />
                  LIVE
                </span>
              </div>
              <div className="resume-page">
                <div className="resume-page-topline" />
                <div className="preview-placeholder">
                  <div className="placeholder-icon">
                    <Sparkles size={21} />
                  </div>
                  <h3>Your story starts here</h3>
                  <p>
                    Add your details to see your resume come to life in this
                    space.
                  </p>
                  <button className="start-button" type="button">
                    Start with the basics
                    <ArrowRight size={15} />
                  </button>
                </div>
                <div className="resume-page-footer">
                  <span>YOUR NAME</span>
                  <span>PAGE 1 OF 1</span>
                </div>
              </div>
              <div className="preview-note">
                <Check size={14} />
                Clean, ATS-friendly formatting
              </div>
            </section>
          </div>

          <footer className="workspace-footer">
            <span>Thoughtfully designed for your next chapter.</span>
            <span>Made with care <span className="footer-heart">♥</span></span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
