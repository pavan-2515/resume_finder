import {
  BriefcaseBusiness,
  FilePlus2,
  Files,
  HelpCircle,
  Settings2,
  WandSparkles,
} from "lucide-react";

const navigation = [
  { label: "Resume builder", icon: FilePlus2, active: true },
  { label: "My resumes", icon: Files, active: false },
  { label: "Job matcher", icon: BriefcaseBusiness, active: false },
];

export function AppSidebar() {
  return (
    <aside className="sidebar">
      <div className="workspace-label">WORKSPACE</div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {navigation.map(({ label, icon: Icon, active }) => (
          <a
            className={`nav-item${active ? " nav-item-active" : ""}`}
            href="#"
            aria-current={active ? "page" : undefined}
            key={label}
          >
            <Icon size={18} strokeWidth={1.8} />
            <span>{label}</span>
            {label === "My resumes" && <span className="nav-count">2</span>}
          </a>
        ))}
      </nav>

      <div className="sidebar-tip">
        <span className="tip-icon">
          <WandSparkles size={17} />
        </span>
        <p className="tip-title">Make every application count</p>
        <p className="tip-copy">
          Tailor your resume to a role and feel confident hitting apply.
        </p>
        <a href="#" className="tip-link">
          Explore job matcher <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="sidebar-footer">
        <a className="footer-link" href="#">
          <HelpCircle size={17} />
          Help center
        </a>
        <a className="footer-link" href="#">
          <Settings2 size={17} />
          Settings
        </a>
        <div className="plan-card">
          <div className="plan-row">
            <span>Free plan</span>
            <span>2 / 3 resumes</span>
          </div>
          <div
            className="plan-progress"
            role="progressbar"
            aria-label="Resumes used"
            aria-valuemin={0}
            aria-valuemax={3}
            aria-valuenow={2}
          >
            <span />
          </div>
          <a href="#" className="upgrade-link">
            See plans <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
