import ScrollVideo from "./ScrollVideo";

const asset = (filename: string) => `${import.meta.env.BASE_URL}${filename}`;

type PressItem = {
  outlet: string;
  title: string;
  href: string;
  year: string;
  icon: string;
  wideIcon?: boolean;
};

const press: PressItem[] = [
  {
    outlet: "UC San Diego Today",
    title: "Surf’s Up: How the Seafloor Shapes Breaking Waves",
    href: "https://today.ucsd.edu/story/surfs-up-how-the-seafloor-shapes-breaking-waves",
    year: "2026",
    icon: "icon-ucsd.ico",
  },
  {
    outlet: "Surfline × Cliff Notes",
    title: "The science behind the shape of a breaking wave",
    href: "https://www.instagram.com/reel/DbySR_LMDRD/",
    year: "2026",
    icon: "icon-surfline.ico",
  },
  {
    outlet: "Scripps Oceanography",
    title: "Rad Research: What shapes a breaking wave?",
    href: "https://www.instagram.com/reel/Dc1KL3hhoDB/",
    year: "2026",
    icon: "logo-scripps.svg",
    wideIcon: true,
  },
  {
    outlet: "LAist 89.3 FM",
    title: "AirTalk: Southern California swell and coastal wave dynamics",
    href: "https://laist.com/news/sheriff-civilian-oversight-commission-lax-people-mover-socal-surf-dining-solo-odyssey-classics",
    year: "2026",
    icon: "icon-laist.ico",
  },
];

export default function App() {
  return (
    <main>
      <header className="topbar">
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#surfing">Surfing</a>
          <a href="#press">Press</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img src={asset("hero-wave.jpg")} alt="Kanoa Pick surfing a large open-ocean wave" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p>Surfer · Ocean scientist</p>
          <h1>Kanoa Pick</h1>
        </div>
      </section>

      <section className="about about-first section-pad" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Surfer.<br />Ocean scientist.</h2>
          <a className="affiliation-logo" href="https://scripps.ucsd.edu/" target="_blank" rel="noreferrer">
            <img src={asset("logo-scripps-ucsd.png")} alt="Scripps Institution of Oceanography at UC San Diego" loading="lazy" />
          </a>
        </div>
        <div className="about-copy">
          <p>Kanoa Pick is a Ph.D. student in Applied Ocean Science at Scripps Institution of Oceanography and a big-wave surfer. His research uses computational fluid dynamics and field observations to understand how waves transform and break.</p>
          <p>His time in the ocean shapes the questions he asks. His research gives those observations a physical foundation.</p>
          <div className="about-links">
            <a href={asset("kanoa-pick-cv.pdf")} target="_blank" rel="noreferrer">Download CV</a>
            <a href="https://scholar.google.com/citations?user=olextvsAAAAJ&hl=en" target="_blank" rel="noreferrer"><img src={asset("logo-scholar.ico")} alt="" />Google Scholar</a>
            <a href="https://www.linkedin.com/in/kanoa-pick-8105539b/" target="_blank" rel="noreferrer"><img src={asset("logo-linkedin.ico")} alt="" />LinkedIn</a>
            <a href="https://www.instagram.com/kanoapick/" target="_blank" rel="noreferrer"><img src={asset("logo-instagram.ico")} alt="" />Instagram</a>
          </div>
        </div>
      </section>

      <section className="feature" id="work">
        <div className="feature-image"><img src={asset("blacks-barrel.jpg")} alt="Kanoa Pick surfing inside a breaking wave at Black's Beach" /></div>
        <div className="feature-copy">
          <p className="eyebrow">Selected research · 2026</p>
          <h2>The shape of a breaking wave</h2>
          <p>Why do some waves pitch forward with thick, powerful lips while others break more gently? Numerical experiments show how wave height and seafloor slope affect the rate at which waves steepen. They also predict the shape of the overturning jet.</p>
          <a className="publisher-link" href="https://doi.org/10.1017/jfm.2026.11869" target="_blank" rel="noreferrer">
            <span className="cambridge-mark"><img src={asset("logo-cambridge.svg")} alt="Cambridge University Press" /></span>
            <span><small>Journal of Fluid Mechanics</small></span>
          </a>
        </div>
      </section>

      <section className="research-grid section-pad">
        <article className="research-lead">
          <p className="eyebrow">Research</p>
          <h2>From seafloor to breaking wave.</h2>
        </article>
        <article className="project project-dark">
          <div className="shoaling-layout">
            <div className="shoaling-primary">
              <div className="shoaling-graphic"><img src={asset("wave-shape-cropped.jpg")} alt="Scientific illustration showing stages of wave shoaling and overturning" /></div>
              <div className="project-copy">
                <p className="project-number">01</p><h3>Shoaling &amp; overturning</h3>
                <p>Predicting the evolution and shape of waves as they approach the shoreline.</p>
                <a className="publisher-link shoaling-publisher" href="https://doi.org/10.1017/jfm.2026.11869" target="_blank" rel="noreferrer">
                  <span className="cambridge-mark"><img src={asset("logo-cambridge.svg")} alt="Cambridge University Press" loading="lazy" /></span>
                  <span><strong>Journal of Fluid Mechanics</strong><small>Read the publication</small></span>
                </a>
              </div>
            </div>
            <ScrollVideo src={asset("solitary-wave-comparison.mp4")} />
          </div>
        </article>
        <article className="project project-photo bathyboard-project">
          <div className="bathyboard-media">
            <ScrollVideo
              src={asset("bathyboard-surfing-loop.mp4")}
              className="bathyboard-video"
              label="Kanoa surfing the BathyBoard, looping footage from 11 to 20 seconds"
              poster={asset("bathyboard-surfing-poster.jpg")}
              loop
            />
            <div className="bathyboard-images">
              <img src={asset("bathyboard-oahu.jpg")} alt="Kanoa conducting a nearshore bathymetric survey from the BathyBoard in Oahu" />
              <a className="bathyboard-schematic" href={asset("bathyboard-schematic.pdf")} target="_blank" rel="noreferrer" aria-label="Open the full BathyBoard schematic PDF">
                <img src={asset("bathyboard-schematic.png")} alt="BathyBoard schematic showing the surfboard, instrument placement, sonar beam, and field deployment" loading="lazy" />
              </a>
            </div>
          </div>
          <div>
            <p className="project-number">02</p><h3>BathyBoard</h3>
            <p>A surfboard-based platform for mapping bathymetry where conventional survey vessels cannot safely operate.</p>
            <a className="publisher-link project-publisher" href={asset("bathyboard-manuscript.pdf")} target="_blank" rel="noreferrer">
              <img className="publisher-logo" src={asset("logo-asce.svg")} alt="ASCE" loading="lazy" />
              <span><strong>Journal of Surveying Engineering</strong><small>Accepted · ASCE</small></span>
            </a>
            <div><a className="project-link" href={asset("bathyboard-manuscript.pdf")} target="_blank" rel="noreferrer">Read the accepted manuscript</a></div>
          </div>
        </article>
        <article className="project wavedrifter-project">
          <div className="wavedrifter-media">
            <img className="wavedrifter-field" src={asset("wavedrifter-field.jpg")} alt="Wavedrifters following a steepening wave in a wave pool" loading="lazy" />
            <ScrollVideo
              src={asset("wavedrifter-loop.mp4")}
              className="wavedrifter-video"
              label="Wavedrifter field footage at normal speed, looping from 56 seconds to 1 minute 6 seconds"
              poster={asset("wavedrifter-loop-poster.jpg")}
              loop
            />
            <img className="wavedrifter-instrument" src={asset("wavedrifter.png")} alt="Wavedrifter housing, internal electronics, and inertial measurement unit" loading="lazy" />
          </div>
          <div>
            <p className="project-number">03</p><h3>Wavedrifter</h3>
            <p>A low-cost, water-following drifter that uses an inertial measurement unit to observe how surface waves steepen, overturn, and transition to turbulence.</p>
            <a className="publisher-link project-publisher" href="https://doi.org/10.1080/21664250.2023.2238949" target="_blank" rel="noreferrer">
              <img className="publisher-logo" src={asset("logo-taylor-francis.jpg")} alt="Taylor & Francis" loading="lazy" />
              <span><strong>Coastal Engineering Journal</strong><small>Published · Taylor &amp; Francis</small></span>
            </a>
            <p className="project-award"><a href="https://www.tandfonline.com/journals/tcej20/collections/best-paper-prize-coastal-engineering" target="_blank" rel="noreferrer">Coastal Engineering Journal · Best Paper Award, 2024</a></p>
            <a className="project-link" href="https://doi.org/10.1080/21664250.2023.2238949" target="_blank" rel="noreferrer">Read the publication</a>
          </div>
        </article>
      </section>

      <section className="surfing" id="surfing">
        <div className="section-pad surfing-heading"><h2>Time in the water.</h2></div>
        <div className="photo-grid">
          <figure className="photo-tall"><img src={asset("todos-santos.jpg")} alt="Kanoa Pick descending the face of a large wave at Todos Santos" /></figure>
          <figure><img src={asset("big-wave-turn.jpg")} alt="Kanoa Pick making a high-speed turn on a large wave" /></figure>
          <figure><img src={asset("big-wave-line.jpg")} alt="A surfer drawing a line across a powerful blue wave" /></figure>
          <figure className="photo-wide"><img src={asset("paddle-out.jpg")} alt="Surfer paddling through golden evening light" /></figure>
        </div>
      </section>

      <section className="press section-pad" id="press">
        <div className="section-heading"><p className="eyebrow">Selected press</p><h2>Wave science,<br />beyond the lab.</h2></div>
        <div className="press-list">
          {press.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer" className="press-row" key={item.href}>
              <span className={`press-icon${item.wideIcon ? " press-icon-wide" : ""}`}><img src={asset(item.icon)} alt="" /></span>
              <span className="press-outlet">{item.outlet}</span>
              <span className="press-title">{item.title}</span>
              <span className="press-year">{item.year}</span>
              <span className="press-view">View</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer section-pad">
        <p className="eyebrow">Get in touch</p>
        <a className="email-link" href="mailto:kpick@ucsd.edu">kpick@ucsd.edu</a>
        <div className="footer-bottom"><p>San Diego, California</p><p>© 2026 Kanoa Pick</p></div>
      </footer>
    </main>
  );
}
