const Arrow = () => <span aria-hidden="true">↗</span>;

const lamps = [
  { name: "Luma 01", tone: "chalk", type: "Pendelleuchte", detail: "Steinzeug · matt" },
  { name: "Terra 02", tone: "clay", type: "Tischleuchte", detail: "Terrakotta · glasiert" },
  { name: "Forma 03", tone: "sand", type: "Wandleuchte", detail: "Porzellan · seidenmatt" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Hauptnavigation">
        <a className="brand" href="#top" aria-label="Studio Luma Startseite">
          STUDIO <i>○</i> LUMA
        </a>
        <div className="navlinks">
          <a href="#kollektion">Kollektion</a>
          <a href="#werkstatt">Werkstatt</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <a className="nav-cta" href="#kontakt">Anfragen <Arrow /></a>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Keramik · Licht · Handwerk</p>
          <h1>Leuchten,<br />die <em>bleiben.</em></h1>
          <p className="intro">
            Handgefertigte Keramiklampen aus unserem Atelier — geformt in Ruhe,
            gemacht für besondere Räume.
          </p>
          <a className="text-link" href="#kollektion">Kollektion entdecken <Arrow /></a>
        </div>
        <div className="hero-object" aria-label="Abstrakte Darstellung einer Keramik-Pendelleuchte">
          <div className="cord" />
          <div className="lamp-shade hero-lamp"><span /></div>
          <div className="light-pool" />
          <p>Jedes Stück ein Unikat<br /><span>Gefertigt in [Ort]</span></p>
        </div>
        <p className="edition">Atelier Edition<br />№ 01—24</p>
      </header>

      <section className="manifesto">
        <div className="shell manifesto-inner">
          <p className="section-number">01 — Haltung</p>
          <p className="manifesto-copy">
            Wir glauben an die <em>leisen Dinge.</em> An Objekte, die nicht laut
            sein müssen, um einen Raum zu verändern. Unsere Leuchten verbinden
            traditionelle Keramik mit zeitlosem Licht.
          </p>
        </div>
      </section>

      <section className="collection shell" id="kollektion">
        <div className="section-head">
          <div>
            <p className="section-number">02 — Auswahl</p>
            <h2>Die Kollektion</h2>
          </div>
          <p>Kleine Serien, natürliche Materialien<br />und Oberflächen mit Charakter.</p>
        </div>
        <div className="product-grid">
          {lamps.map((lamp, index) => (
            <article className="product" key={lamp.name}>
              <div className={`product-image ${lamp.tone}`}>
                <span className="product-index">0{index + 1}</span>
                <div className="cord" />
                <div className={`lamp-shade lamp-${index + 1}`}><span /></div>
                <span className="shadow" />
              </div>
              <div className="product-meta">
                <div><h3>{lamp.name}</h3><p>{lamp.type}</p></div>
                <p>{lamp.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="outline-button" href="#kontakt">Alle Modelle ansehen <Arrow /></a>
      </section>

      <section className="craft" id="werkstatt">
        <div className="craft-visual" aria-hidden="true">
          <div className="sun-disc" />
          <div className="vessel vessel-one" />
          <div className="vessel vessel-two" />
          <p>Form · Feuer · Geduld</p>
        </div>
        <div className="craft-copy">
          <p className="section-number">03 — Werkstatt</p>
          <h2>Von Hand.<br /><em>Mit Zeit.</em></h2>
          <p>
            Jede Leuchte entsteht in vielen einzelnen Schritten. Vom ersten
            Entwurf über das Drehen und Trocknen bis zum Glasieren und Brennen —
            Spuren der Hand bleiben sichtbar und machen jedes Stück besonders.
          </p>
          <div className="process">
            <span><b>01</b> Formen</span>
            <span><b>02</b> Trocknen</span>
            <span><b>03</b> Brennen</span>
            <span><b>04</b> Vollenden</span>
          </div>
          <a className="text-link" href="#kontakt">Mehr über uns <Arrow /></a>
        </div>
      </section>

      <section className="quote shell">
        <p className="quote-mark">“</p>
        <blockquote>
          Licht macht einen Raum sichtbar.<br />
          <em>Atmosphäre macht ihn fühlbar.</em>
        </blockquote>
        <p>— [Name der Gründerin / des Gründers]</p>
      </section>

      <section className="contact" id="kontakt">
        <div className="shell contact-inner">
          <div>
            <p className="section-number">04 — Kontakt</p>
            <h2>Ein Licht für<br /><em>deinen Raum?</em></h2>
          </div>
          <div className="contact-copy">
            <p>
              Du möchtest ein Modell anfragen, eine Sonderanfertigung besprechen
              oder unser Atelier besuchen? Schreib uns — wir freuen uns auf deine Idee.
            </p>
            <a className="contact-mail" href="mailto:hallo@dein-studio.de">
              hallo@dein-studio.de <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top">STUDIO <i>○</i> LUMA</a>
        <p>[Straße & Hausnummer]<br />[PLZ Ort]</p>
        <div><a href="#">Instagram</a><a href="#">Pinterest</a></div>
        <div><a href="#">Impressum</a><a href="#">Datenschutz</a></div>
        <p>© {new Date().getFullYear()} Studio Luma</p>
      </footer>
    </main>
  );
}
