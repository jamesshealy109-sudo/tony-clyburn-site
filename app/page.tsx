'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';

const services = [
  { number: '01', label: 'Voice', title: 'VOICEOVERS & NARRATION', copy: 'Crisp, clear delivery with the warmth, timing, and credibility to carry your message forward.', tag: 'Commercial · Corporate · Cause-driven' },
  { number: '02', label: 'Stage', title: 'SPEAKING & WORKSHOPS', copy: 'Real stories, hard-earned perspective, and contagious energy for teams that need a spark.', tag: 'Keynotes · Panels · Team sessions' },
  { number: '03', label: 'Room', title: 'HOSTING & EVENT ENERGY', copy: 'Keep the program moving, the audience connected, and the moment feeling unmistakably alive.', tag: 'MC · Moderation · Event management' },
  { number: '04', label: 'Impact', title: 'STRATEGY & CONNECTIONS', copy: 'Community insight, trusted relationships, and practical ideas that help good work reach more people.', tag: 'Consulting · Campaigns · Community' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Tony Clyburn home"><span>TONY</span><b>CLYBURN</b></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}><span>Menu</span><i /><i /></button>
        <nav id="primary-nav" className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>Meet Tony</a><a href="#services" onClick={() => setMenuOpen(false)}>What I Do</a><a href="#proof" onClick={() => setMenuOpen(false)}>The Work</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Book Tony <span>↗</span></a>
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="live-dot" /> Columbia, South Carolina · On Air &amp; On Purpose</p>
              <h1>ONE VOICE.<br /><em>BIG ENERGY.</em><br />REAL IMPACT.</h1>
              <p className="hero-lede">Radio personality. Voice actor. Speaker. Community connector. Tony Clyburn brings people, stories, and ideas together—and makes the room better while he’s at it.</p>
              <div className="hero-actions"><a className="button button-primary" href="#contact">Bring Tony In <span>↗</span></a><a className="button button-ghost" href="#about"><i className="play-icon">▶</i> Meet the Voice</a></div>
              <div className="hero-stats" aria-label="Career highlights"><div><strong>23+</strong><span>Years in broadcasting</span></div><div><strong>3</strong><span>Generations of listeners</span></div><div><strong>SC</strong><span>Personality of the Year</span></div></div>
            </div>
            <div className="hero-portrait">
              <div className="portrait-frame"><Image src="/images/tony-portrait.jpg" alt="Tony Clyburn in Columbia, South Carolina" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
              <div className="on-air-badge"><span>ON</span><strong>AIR</strong><i /></div>
              <div className="signature-card"><Image src="/images/tony-signature.jpg" alt="Tony Clyburn signature" width={600} height={160} /></div>
              <div className="frequency" aria-hidden="true">93.1 <span>FM</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about">Keep scrolling <span>↓</span></a>
        </section>

        <div className="signal-bar" aria-label="Tony Clyburn specialties"><div><span>VOICEOVERS</span><b>✦</b><span>PUBLIC SPEAKING</span><b>✦</b><span>EVENT HOSTING</span><b>✦</b><span>COMMUNITY IMPACT</span><b>✦</b><span>VOICEOVERS</span><b>✦</b><span>PUBLIC SPEAKING</span><b>✦</b><span>EVENT HOSTING</span><b>✦</b><span>COMMUNITY IMPACT</span><b>✦</b></div></div>

        <section className="section about-section" id="about">
          <div className="section-shell about-grid">
            <div className="about-media">
              <div className="about-image"><Image src="/images/tony-studio.jpg" alt="Tony Clyburn beside a train in Columbia" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
              <blockquote>“Work should feel like family—or at least remind you that what you do matters.”</blockquote>
              <div className="years-stamp"><strong>23+</strong><span>YEARS<br />ON CALL</span></div>
            </div>
            <div className="about-copy">
              <p className="section-kicker">Meet Tony / The Short Version</p>
              <h2>HE DOESN&apos;T JUST WORK A ROOM.<br /><em>HE CONNECTS IT.</em></h2>
              <p className="big-copy">For decades, Tony Clyburn has been a familiar voice across Columbia and a trusted presence in the communities behind the microphone.</p>
              <p>Radio gave Tony a platform. Service gave it purpose. His work has always been about more than a broadcast—it&apos;s about helping people feel seen, making good ideas louder, and putting the right people in the same room.</p>
              <p>Today, he brings that same instinct to voice work, speaking, hosting, mentoring, consulting, and every opportunity to celebrate the nobility of work.</p>
              <a className="text-link" href="#contact">Let&apos;s make something happen <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-shell">
            <div className="section-head light"><div><p className="section-kicker">What Tony Does</p><h2>PUT THE RIGHT<br /><em>VOICE</em> IN THE ROOM.</h2></div><p>Need polish? Energy? Credibility? A host who can read the room and still move the program forward? That&apos;s Tony&apos;s lane.</p></div>
            <div className="services-grid">
              {services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.label}</span><b>{service.number}</b></div><h3>{service.title}</h3><p>{service.copy}</p><div className="service-tag">{service.tag}</div><a href="#contact" aria-label={`Ask about ${service.title}`}>Ask about this <span>↗</span></a></article>)}
            </div>
          </div>
        </section>

        <section className="work-section" id="proof">
          <div className="work-word" aria-hidden="true">CLYTANIC</div>
          <div className="section-shell work-grid">
            <div className="work-intro"><p className="section-kicker">The Signal Is Strong</p><h2>KNOWN VOICE.<br />TRUSTED NAME.<br /><em>STILL EVOLVING.</em></h2><p>Tony has spent a career earning attention—and using it to point people toward something worthwhile.</p></div>
            <div className="proof-stack">
              <article><span>Broadcast</span><strong>93.1 THE LAKE</strong><p>Afternoon host serving Columbia with conversation, information, and community connection.</p></article>
              <article><span>Recognition</span><strong>SCBA PERSONALITY OF THE YEAR</strong><p>A statewide broadcasting honor built on connection, consistency, and a voice people remember.</p></article>
              <article><span>Community</span><strong>KEY TO THE CITY OF COLUMBIA</strong><p>Recognition of a career that has consistently reached beyond the studio and into service.</p></article>
            </div>
          </div>
        </section>

        <section className="philosophy-section">
          <div className="section-shell philosophy-grid">
            <p className="vertical-label">AT MY JOB AND LOVIN&apos; IT</p>
            <div><p className="section-kicker">The Mission</p><h2>WORK ISN&apos;T JUST<br />WHAT WE DO.<br /><em>IT&apos;S WHO WE HELP.</em></h2></div>
            <div className="philosophy-copy"><p className="big-copy">Tony believes pride, purpose, and belonging should not disappear when the workday begins.</p><p>His message is simple: good work deserves joy, people deserve connection, and communities move forward when we use our skills for more than ourselves.</p><a className="button button-dark" href="#contact">Start a conversation <span>↗</span></a></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-marquee" aria-hidden="true">LET&apos;S TALK · LET&apos;S TALK · LET&apos;S TALK ·</div>
          <div className="section-shell contact-grid">
            <div className="contact-copy"><p className="section-kicker">Book Tony</p><h2>GOT A ROOM?<br />A STORY?<br /><em>A BIG IDEA?</em></h2><p>Tell Tony what you&apos;re building, who needs to hear it, and where he can help turn up the impact.</p><div className="direct-contact"><a href="tel:+18032919844">803.291.9844</a><span>West Columbia, South Carolina</span></div></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-top"><strong>START HERE</strong><span>↗</span></div>
              <div className="form-row"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div>
              <label>Email<input type="email" name="email" autoComplete="email" required /></label>
              <label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Choose a service</option><option>Voiceover or narration</option><option>Public speaking</option><option>Event host / MC</option><option>Consulting or community partnership</option><option>Something custom</option></select></label>
              <label>Tell Tony about it<textarea name="message" rows={5} placeholder="Event, audience, timing, goals—give us the good stuff." required /></label>
              <button className="button form-submit" type="submit">Send the signal <span>↗</span></button>
              <p className={submitted ? 'form-note success' : 'form-note'} aria-live="polite">{submitted ? 'Looks good. Connect this form to Tony’s inbox before launch.' : 'Preview form—delivery will be connected before launch.'}</p>
            </form>
          </div>
        </section>
      </div>

      <footer><div className="footer-main"><a className="wordmark" href="#top"><span>TONY</span><b>CLYBURN</b></a><p>One voice. Big energy. Real impact.</p><div className="socials"><a href="https://facebook.com/TonyClyburnSC" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://twitter.com/myjobandlovinit" target="_blank" rel="noreferrer">X / Twitter ↗</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tony Clyburn</span><span>At MY Job And Lovin It</span></div></footer>
    </main>
  );
}
