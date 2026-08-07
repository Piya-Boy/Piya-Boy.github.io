import { AWARDS, CERTIFICATES } from './credentialsData'

export default function Credentials() {
  return (
    <section id="credentials" className="credentials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Credentials</h2>
          <p>Awards &amp; Certificates</p>
        </div>

        <div className="terminal-window">
          <div className="terminal-titlebar">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
            <span className="terminal-titlebar-name mono">piya@dossier:~/credentials</span>
          </div>

          <div className="terminal-body">
            <div className="terminal-line mono">
              <span className="terminal-prompt">$</span> list --credentials
              <span className="terminal-cursor"></span>
            </div>
            <div className="terminal-line terminal-meta mono">
              <span className="terminal-ok">✓</span> {AWARDS.length} awards · {CERTIFICATES.length} certificates
            </div>

            <div className="cred-group">
              <div className="cred-group-head mono">
                <span className="cred-group-tag">// AWARDS</span>
                <span className="cred-group-count mono">{String(AWARDS.length).padStart(2, '0')}</span>
              </div>
              <ul className="cred-list">
                {AWARDS.map((a, i) => (
                  <li className="cred-item cred-award" key={i}>
                    <span className="cred-index mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="cred-icon">🏅</span>
                    <div className="cred-text">
                      <div className="cred-title">{a.title}</div>
                      <div className="cred-meta mono">
                        {a.level} · {a.issuer}
                      </div>
                    </div>
                    <span className="cred-date mono">{a.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cred-group">
              <div className="cred-group-head mono">
                <span className="cred-group-tag">// CERTIFICATES</span>
                <span className="cred-group-count mono">{String(CERTIFICATES.length).padStart(2, '0')}</span>
              </div>
              <ul className="cred-list">
                {CERTIFICATES.map((c, i) => (
                  <li className="cred-item" key={i}>
                    <span className="cred-index mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="cred-icon">📜</span>
                    <div className="cred-text">
                      <div className="cred-title">{c.title}</div>
                    </div>
                    <span className="cred-date mono">{c.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="terminal-line mono terminal-tail">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
