import { FiGithub } from 'react-icons/fi'
import { HiMail } from 'react-icons/hi'

function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="wrap footer-row">
        <span className="footer-note">
          © {year} Raja Mustafa Arfat — Built with React &amp; Vite.
        </span>

        <div className="footer-socials">
          <a
            href="https://github.com/cust40078-sudo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a href="mailto:rajamustafabro@gmail.com" aria-label="Email">
            <HiMail size={18} />
          </a>
        </div>

        <button className="footer-top" onClick={scrollTop}>
          Back to top ↑
        </button>
      </div>

      {/* FlyRank Graduate Badge Section */}
      <div className="wrap" style={{ textAlign: 'center', padding: '1.5rem 0 2rem 0' }}>
        <a 
          href="https://internship-badge.netlify.app/" 
          target="_blank" 
          rel="noreferrer"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '8px 16px', 
            backgroundColor: '#1e293b', 
            color: '#38bdf8', 
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '500',
            textDecoration: 'none',
            border: '1px solid #334155'
          }}
        >
          <span style={{ height: '8px', width: '8px', backgroundColor: '#22c55e', borderRadius: '50%' }}></span>
          FlyRank AI Fluency Graduate
        </a>
      </div>
    </footer>
  )
}

export default Footer