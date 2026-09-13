import { useState } from 'react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxeLsCuN9iBhfm8LisNpSt9SvC-fgwbhKgxvJsTHtKfhsmU_Ivx9dhzYDfT6_c17YeR/exec';

export default function Contact() {
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({ Name: '', email: '', Message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));

    fetch(SCRIPT_URL, { method: 'POST', body: data })
      .then(() => {
        setMsg('Message sent successfully');
        setForm({ Name: '', email: '', Message: '' });
        setTimeout(() => setMsg(''), 5000);
      })
      .catch((err) => console.error('Error!', err.message));
  }

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          {/* Left column */}
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fas fa-paper-plane"></i>
              shaikhumarsu2002@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i>
              +919113845752
            </p>

            <div className="social-icons">
              <a href="https://www.facebook.com/shaikh.umar.127201" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://x.com/ShaikhU71405462" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com/s_umar__01/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/shaikh-umar-22834b298/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/shaikhumar5532" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-github"></i>
              </a>
            </div>

            <a href="/images/CV_Umar2.pdf" download className="btn btn2">
              Download CV
            </a>
          </div>

          {/* Right column – Contact Form */}
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                value={form.Name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                value={form.Message}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
