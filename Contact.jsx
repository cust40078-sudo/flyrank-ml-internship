import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'

const CHANNELS = [
  {
    label: 'Email',
    value: 'rajamustafabro@gmail.com',
    href: 'mailto:rajamustafabro@gmail.com',
    icon: <HiMail />,
  },
  {
    label: 'GitHub',
    value: '@cust40078-sudo',
    href: 'https://github.com/cust40078-sudo',
    icon: <FiGithub />,
  },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in every field before sending.')
      return
    }

    setSubmitting(true)
    setStatus('Sending...')

    try {
      // Formspree API Call
      const response = await fetch('https://formspree.io/f/xkjngwyr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus(`Thanks, ${form.name} — your message has been sent successfully!`)
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Oops! There was a problem sending your message. Please try again.')
      }
    } catch (error) {
      setStatus('Oops! Network error. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">Let's build something</h2>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Have a project in mind, a role to fill, or just want to talk
              shop? My inbox is open — I read and reply to every message
              myself, usually within a day or two.
            </p>

            <ul className="contact-channels">
              {CHANNELS.map((channel) => (
                <li key={channel.label}>
                  <a href={channel.href} target="_blank" rel="noreferrer">
                    <span>
                      {channel.label} — {channel.value}
                    </span>
                    <span className="arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What are you working on?"
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn-primary" 
              style={{ alignSelf: 'flex-start' }}
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send message'}
            </button>
            <p className="form-status">{status}</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact