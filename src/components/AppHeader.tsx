import { Bell, ChevronDown, Sparkles } from "lucide-react";

export function AppHeader() {
  return (
    <header className="app-header">
      <a className="brand" href="/" aria-label="SmartResume AI home">
        <span className="brand-mark" aria-hidden="true">
          <Sparkles size={19} strokeWidth={2.3} />
        </span>
        <span className="brand-name">
          SmartResume<span>AI</span>
        </span>
      </a>

      <div className="header-actions">
        <button className="icon-button notification-button" aria-label="Notifications">
          <Bell size={18} />
          <span className="notification-dot" />
        </button>
        <button className="profile-button" aria-label="Account menu">
          <span className="avatar">JD</span>
          <span className="profile-name">Jamie Davis</span>
          <ChevronDown size={15} className="profile-chevron" />
        </button>
      </div>
    </header>
  );
}
