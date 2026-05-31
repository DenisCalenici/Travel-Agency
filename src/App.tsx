import { useEffect, useState, type FormEvent } from 'react'
import { ServiceIcon } from './components/ServiceIcon'
import {
  BOOKING_STEPS,
  DESTINATIONS,
  FOOTER_LINKS,
  IMAGES,
  NAV_LINKS,
  PARTNERS,
  SERVICES,
  TESTIMONIALS,
} from './data/content'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleNav(id: string) {
    scrollToId(id)
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const close = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setMenuOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('resize', close)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  function handleSubscribe(e: FormEvent) {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    window.setTimeout(() => setSubscribed(false), 2500)
  }

  const testimonial = TESTIMONIALS[testimonialIndex]

  return (
    <div className="page">
      <header className="header">
        <div className="container header__inner">
          <a
            className="logo"
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              handleNav('top')
            }}
          >
            Jadoo.
          </a>

          <button
            type="button"
            className="header__burger"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="header__burger-box" aria-hidden="true">
              <span className="header__burger-line" />
              <span className="header__burger-line" />
              <span className="header__burger-line" />
            </span>
            <span className="visually-hidden">
              {menuOpen ? 'Close menu' : 'Open menu'}
            </span>
          </button>

          <div
            id="site-nav"
            className={menuOpen ? 'header__drawer header__drawer--open' : 'header__drawer'}
          >
            <nav className="nav" aria-label="Main">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="nav__link"
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="header__auth header__auth--drawer">
              <button type="button" className="btn-text">
                Login
              </button>
              <button type="button" className="btn btn--outline btn--sm">
                Sign up
              </button>
            </div>
          </div>

          <div className="header__auth header__auth--desktop">
            <button type="button" className="btn-text">
              Login
            </button>
            <button type="button" className="btn btn--outline btn--sm">
              Sign up
            </button>
          </div>
        </div>

        <button
          type="button"
          className={menuOpen ? 'header__backdrop header__backdrop--visible' : 'header__backdrop'}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="label">Best destinations around the world</p>
              <h1 className="hero__title">
                Travel, enjoy and live a new and full life
              </h1>
              <p className="hero__lead">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell they
                west hard for the.
              </p>
              <div className="hero__actions">
                <button type="button" className="btn btn--primary">
                  Find out more
                </button>
                <button type="button" className="btn-play">
                  <span className="btn-play__icon" aria-hidden="true" />
                  Play Demo
                </button>
              </div>
            </div>
            <div className="hero__visual" aria-hidden="true">
              <div className="hero__blob" />
              <img
                className="hero__traveler"
                src={IMAGES.hero}
                alt="Traveler with luggage"
                width={520}
                height={620}
                loading="eager"
              />
              <div className="hero__plane" />
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <p className="label label--center">Category</p>
            <h2 className="section-title section-title--center">
              We Offer Best Services
            </h2>
            <div className="services">
              {SERVICES.map((s) => (
                <article key={s.title} className={`service-card service-card--${s.tone}`}>
                  <div className="service-card__icon">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__text">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="destinations" className="section">
          <div className="container">
            <p className="label">Top Selling</p>
            <h2 className="section-title">Top Destinations</h2>
            <div className="destinations">
              {DESTINATIONS.map((d) => (
                <article key={d.name} className="dest-card">
                  <img className="dest-card__img" src={d.image} alt={d.name} loading="lazy" />
                  <div className="dest-card__body">
                    <div className="dest-card__row">
                      <h3>{d.name}</h3>
                      <span className="dest-card__price">{d.price}</span>
                    </div>
                    <p className="dest-card__meta">{d.duration}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="bookings" className="section section--booking">
          <div className="container booking">
            <div className="booking__copy">
              <p className="label">Easy and Fast</p>
              <h2 className="section-title">
                Book your next trip in 3 easy steps
              </h2>
              <ol className="steps">
                {BOOKING_STEPS.map((step, i) => (
                  <li key={step.title} className="steps__item">
                    <span className="steps__num">{i + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="trip-card" aria-label="Trip preview">
              <img
                className="trip-card__img"
                src={IMAGES.greece}
                alt="Santorini, Greece"
                loading="lazy"
              />
              <div className="trip-card__body">
                <h3>Trip to Greece</h3>
                <p className="trip-card__meta">14–29 June | by Robbin j</p>
                <div className="trip-card__icons" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="trip-card__progress">
                  <div className="trip-card__progress-head">
                    <span>40%</span>
                    <span>completed</span>
                  </div>
                  <div className="trip-card__bar">
                    <span style={{ width: '40%' }} />
                  </div>
                </div>
                <span className="trip-card__badge">Ongoing</span>
              </div>
              <div className="trip-card__mini">
                <span className="trip-card__mini-icon" aria-hidden="true" />
                <div>
                  <strong>Trip to Rome</strong>
                  <span>40% completed</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container testimonials">
            <div className="testimonials__head">
              <p className="label">Testimonials</p>
              <h2 className="section-title">What people say about us</h2>
            </div>
            <div className="testimonials__panel">
              <blockquote className="testimonial-quote">
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
              <div className="testimonials__nav">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={
                      i === testimonialIndex
                        ? 'testimonials__dot testimonials__dot--active'
                        : 'testimonials__dot'
                    }
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setTestimonialIndex(i)}
                  />
                ))}
                <button
                  type="button"
                  className="testimonials__arrow"
                  aria-label="Next testimonial"
                  onClick={() =>
                    setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length)
                  }
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="partners" aria-label="Partners">
          <div className="container partners__row">
            {PARTNERS.map((name) => (
              <span key={name} className="partners__logo">
                {name}
              </span>
            ))}
          </div>
        </section>

        <section className="subscribe">
          <div className="container subscribe__inner">
            <h2 className="subscribe__title">
              Subscribe to get information, latest news and other interesting offers
              about Jadoo
            </h2>
            <form className="subscribe__form" onSubmit={handleSubscribe}>
              <label className="visually-hidden" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn--primary">
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <span className="logo">Jadoo.</span>
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {FOOTER_LINKS.company.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              {FOOTER_LINKS.contact.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              {FOOTER_LINKS.more.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__apps">
            <h4>Discover our app</h4>
            <div className="footer__store-btns">
              <a href="#top" className="store-btn">
                Google Play
              </a>
              <a href="#top" className="store-btn">
                App Store
              </a>
            </div>
          </div>
        </div>
        <p className="container footer__copy">
          All rights reserved © jadoo.co {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
