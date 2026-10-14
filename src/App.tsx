import { useEffect, useRef } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router';
import { ActionLink, PageHeading, PreviewNotice } from './components';

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/memories', label: 'My memories' },
  { to: '/explore', label: 'Explore' },
  { to: '/books', label: 'Family books' },
];

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">A place for what stays with you</p>
          <h1 id="home-title">
            Every service has a story <em>worth keeping.</em>
          </h1>
          <p className="intro">
            The objects you carried. The people you remember. The ordinary
            moments that became part of your life.
          </p>
          <p className="hero-invitation">
            A personal archive, taking shape around your stories.
          </p>
          <div className="actions">
            <ActionLink to="/memories">See the memory preview</ActionLink>
            <Link className="text-link" to="/explore">
              Explore the idea <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="preview-caption">
            Design preview · Saving memories is not available yet.
          </p>
        </div>
        <figure className="archive-study">
          <div className="paper-back" aria-hidden="true"></div>
          <div className="paper-front">
            <span className="paper-label">HOMEWARD / A PERSONAL ARCHIVE</span>
            <div className="paper-rule" aria-hidden="true"></div>
            <p className="paper-title">
              A life,
              <br />
              in your
              <br />
              <em>own words.</em>
            </p>
            <p className="paper-note">
              A place for the stories
              <br />
              only you can tell.
            </p>
            <span className="paper-footer">KEPT WITH CARE</span>
          </div>
          <figcaption>
            Cover study · An illustration of the design direction
          </figcaption>
        </figure>
      </section>
      <section className="begin-section" aria-labelledby="begin-title">
        <div>
          <p className="eyebrow">Begin anywhere</p>
          <h2 id="begin-title">
            A small thing.
            <br />
            <em>A whole story.</em>
          </h2>
        </div>
        <div className="begin-copy">
          <p>
            A photograph in a drawer. A patch tucked into a book. A saying you
            still use. Homeward is being designed to help you keep the memory
            alongside the meaning.
          </p>
          <p>
            You choose where to begin, how much to tell, and what you might one
            day share.
          </p>
          <Link className="text-link" to="/books">
            A look toward family books <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section className="tradition-feature" aria-labelledby="tradition-title">
        <div className="feature-mark" aria-hidden="true">
          01<span>THE CROSSING</span>
        </div>
        <div>
          <p className="eyebrow">Traditions, with context</p>
          <h2 id="tradition-title">The stories we inherit.</h2>
          <p>
            The historical collection is planned to begin with the Navy’s
            Shellback tradition. Documented history, personal recollections, and
            folklore will be clearly distinguished.
          </p>
          <Link className="text-link" to="/explore">
            About the collection <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="editorial-note">
          Historical content
          <br />
          awaiting human review.
        </p>
      </section>
      <section className="principles" aria-label="What guides Homeward">
        <div>
          <h3>Your words, your pace</h3>
          <p>No story is too small. No prompt should demand an answer.</p>
        </div>
        <div>
          <h3>For every branch</h3>
          <p>
            Navy, Army, Air Force, Marine Corps, Coast Guard, and Space Force.
          </p>
        </div>
        <div>
          <h3>Built around your choice</h3>
          <p>
            No accounts, uploads, or personal-memory collection in this preview.
          </p>
          <Link to="/privacy">Read the privacy boundaries</Link>
        </div>
      </section>
    </>
  );
}

function Memories() {
  return (
    <>
      <PageHeading
        eyebrow="My memories"
        title="Start with what matters to you."
      >
        One collection for the moments, objects, and places that tell your
        story.
      </PageHeading>
      <PreviewNotice>
        Memory capture and storage are not built yet. This page introduces the
        planned collection; it does not contain saved or sample service records.
      </PreviewNotice>
      <div className="collection-outline">
        <section>
          <span className="eyebrow">Muster / Timeline</span>
          <h2>A moment in time.</h2>
          <p>
            A meaningful milestone, with room for dates you only roughly
            remember.
          </p>
        </section>
        <section>
          <span className="eyebrow">Coinbox / Keepsakes</span>
          <h2>More than an object.</h2>
          <p>A coin, patch, or photograph, alongside what it means to you.</p>
        </section>
        <section>
          <span className="eyebrow">Waypoints / Places</span>
          <h2>Somewhere that stays.</h2>
          <p>
            An optional place connected to a memory. A map is planned for a
            later milestone.
          </p>
        </section>
        <section>
          <span className="eyebrow">Old Salt / Stories</span>
          <h2>In your own words.</h2>
          <p>A sentence or a longer story, told at your pace.</p>
        </section>
      </div>
      <p className="closing-note">
        These will be different views of the same memories. You will not need to
        tell the same story twice.
      </p>
    </>
  );
}

function Explore() {
  return (
    <>
      <PageHeading eyebrow="Explore" title="What we carry forward.">
        Traditions and everyday memories, approached with curiosity and care.
      </PageHeading>
      <div className="editorial-grid">
        <section className="editorial-panel">
          <p className="eyebrow">The Crossing / Traditions</p>
          <h2>Beginning with Shellback.</h2>
          <p>
            The Navy’s Shellback tradition is the planned first subject. No
            historical article is published in this preview.
          </p>
          <p>
            Human editorial review and clear sources will come before
            publication. Personal recollections and folklore will have their own
            labels.
          </p>
          <span className="status-label">Awaiting editorial review</span>
        </section>
        <section className="editorial-panel">
          <p className="eyebrow">Liberty Call / Everyday memories</p>
          <h2>The ordinary things, remembered.</h2>
          <p>
            Future optional prompts might begin with an everyday meal, a
            familiar phrase, or something you kept.
          </p>
          <p>
            Writing tools are not available yet. These are prompt ideas, not
            accounts of anyone’s service.
          </p>
          <span className="status-label">Planned for a later milestone</span>
        </section>
      </div>
    </>
  );
}

function Books() {
  return (
    <>
      <PageHeading eyebrow="Family books" title="Something to pass on.">
        A thoughtful selection of memories, chosen by you for the people you
        care about.
      </PageHeading>
      <div className="book-layout">
        <div className="book-cover" aria-hidden="true">
          <span>HOMEWARD</span>
          <p>
            Stories
            <br />
            worth
            <br />
            <em>keeping.</em>
          </p>
          <span>FAMILY BOOK / COVER STUDY</span>
        </div>
        <section>
          <h2>
            Choose the stories.
            <br />
            Keep their meaning.
          </h2>
          <p>
            A future family book will gather selected memories into a readable
            file, with a preview before you export it.
          </p>
          <PreviewNotice>
            Book creation, downloads, and printing are not available in this
            foundation. This is a cover study, not a generated book.
          </PreviewNotice>
          <p>
            Planned formats: downloadable HTML and browser print. Exported
            copies will not be remotely revocable.
          </p>
        </section>
      </div>
    </>
  );
}

function Privacy() {
  return (
    <article className="reading">
      <PageHeading
        eyebrow="Privacy boundaries"
        title="Clear about what exists today."
      />
      <h2>This foundation</h2>
      <p>
        This preview has no memory editor, file picker, account, upload
        endpoint, analytics, or application storage. Navigation only changes the
        page you see.
      </p>
      <p>
        Your browser requests application files from the server you use to open
        it. That server may record ordinary access logs. This is not a claim of
        anonymous browsing.
      </p>
      <h2>The planned archive</h2>
      <p>
        Future memories are intended to stay in your browser unless you
        explicitly export them. Browser storage can be cleared or lost and is
        not an encrypted vault. Backup and restore must be reviewed before
        memory capture is released.
      </p>
      <p>
        Family files will contain a selection you review. Once shared, a copy
        cannot be recalled through Homeward.
      </p>
      <h2>Your choice</h2>
      <p>
        No mandatory account, service verification, or sensitive service records
        are planned. Historical material requires human editorial review.
      </p>
    </article>
  );
}

function NotFound() {
  return (
    <>
      <PageHeading eyebrow="Page not found" title="Let’s find your way back.">
        This address does not match a page in the Homeward preview.
      </PageHeading>
      <ActionLink to="/">Return home</ActionLink>
    </>
  );
}

export function App() {
  const location = useLocation();
  const main = useRef<HTMLElement>(null);
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    const title = main.current?.querySelector('h1')?.textContent ?? 'Homeward';
    document.title = `${title} — Homeward`;
    if (previousPath.current !== location.pathname) {
      main.current?.focus();
      window.scrollTo(0, 0);
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="preview-bar">
        A first look at Homeward <span>·</span> Foundation preview
      </div>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Homeward home">
          homeward<span aria-hidden="true">.</span>
        </Link>
        <nav aria-label="Primary">
          {navigation.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main" ref={main} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/books" element={<Books />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div>
          <Link className="wordmark footer-brand" to="/">
            homeward.
          </Link>
          <p>Every service has a story worth keeping.</p>
        </div>
        <div>
          <Link to="/privacy">Privacy &amp; this preview</Link>
          <p>
            An independent project. Not endorsed by the U.S. Department of
            Defense or Department of Veterans Affairs.
          </p>
        </div>
      </footer>
    </>
  );
}
