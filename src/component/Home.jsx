import "../index.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>Adnan Shaikh</h1>
        <h2>FullStack Developer</h2>
        <p>
          I build modern, responsive web applications using React , NodeJS , JavaScript  , REST Api
          and clean UI design.
        </p>

        <div className="buttons">
          <a href="/contact"><button className="btn primary">Hire Me</button></a>
          <a href="/projects"><button className="btn secondary">View Projects</button></a>
        </div>
      </div>
    </section>
  );
}

export default Home;