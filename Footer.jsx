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
        <span className="footer-note">© {year} Raja Mustafa Arfat — Built with React &amp; Vite.</span>

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
      <footer className="footer">
  <div className="wrap" style={{ textAlign: 'center', padding: '2rem 0' }}>
    <p>© {new Date().getFullYear()} Raja Mustafa Arfat. All rights reserved.</p>
    
    {/* FlyRank Graduate Badge */}
    <div style={{ marginTop: '1rem' }}>
      <a 
        href="https://internship-badge.netlify.app/" 
        target="_blank" 
        rel="noreferrer"
        style={{ display: 'inline-block' }}
      >
        <img 
          src="https://internship-badge.netlify.app/badge.svg" 
          alt="FlyRank AI Fluency Graduate Badge" 
          style={{ height: '40px', width: 'auto' }}
        />
      </a>
    </div>
  </div>
</footer>
    </footer>
  )
}

export default Footer
