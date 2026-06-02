import "../index.css";

function About() {
  return (
    <div className="about-section">
      <div className="About">
        
        <h1>About Me</h1>

        <h3>
          Hello everyone, I am <b>Adnan Shaikh</b> from Mumbai. 
          I am looking for freelancing web tasks and a web developer 
          internship or job.
        </h3>

        <h3>
          I have currently completed my second year in BSc (Computer Science)
          from ICLES Motilal Jhunjhunwala College, Vashi, Navi Mumbai. 
          Also, I have great knowledge of web development.
        </h3>

        <h3>
          I have knowledge of{" "}
          <b>
            HTML, CSS, JavaScript, ExpressJS, NodeJS, AngularJS, ReactJS,
            MongoDB, REST API, Resend API, etc.
          </b>{" "}
          and also have some knowledge of{" "}
          <b>Python, Java, C++, MySQL</b>.
        </h3>

        <h3>
          I have done many projects, but I have only deployed some of them on GitHub. 
          The first is{" "}
          <a href="https://wordconverter-frontend.vercel.app/">
            Word Converter
          </a>{" "}
          and the second is my portfolio page 😁.
        </h3>

        <h3>
          In{" "}
          <a href="https://wordconverter-frontend.vercel.app/">
            Word Converter
          </a>{" "}
          and my portfolio, I used the Resend API in the backend because I want 
          to know who wants to give me a review on my website.
        </h3>

        <h3>
          In my portfolio, I used the same so that if anyone is interested, 
          they can easily hire me or contact me.
        </h3>

      </div>
    </div>
  );
}

export default About;