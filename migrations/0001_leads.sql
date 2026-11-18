-- Contact form submissions. One row per lead; email_status tracks the notification.
CREATE TABLE IF NOT EXISTS leads (
  id           TEXT PRIMARY KEY,
  created_at   TEXT NOT NULL,
  name         TEXT NOT NULL,
  contact      TEXT NOT NULL,
  contact_kind TEXT NOT NULL CHECK (contact_kind IN ('email', 'phone')),
  interests    TEXT NOT NULL DEFAULT '[]',
  message      TEXT NOT NULL DEFAULT '',
  page         TEXT,
  country      TEXT,
  user_agent   TEXT,
  email_status TEXT NOT NULL DEFAULT 'pending' CHECK (email_status IN ('pending', 'sent', 'failed', 'skipped'))
);

CREATE INDEX IF NOT EXISTS leads_created_at ON leads (created_at);
