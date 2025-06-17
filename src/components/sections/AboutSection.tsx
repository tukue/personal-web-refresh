const AboutSection = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="/profile.jpg" alt="Tukue Gebremariam Gebregergis" className="profile-image" />
        <div className="about-text">
          <p>I am an experienced system developer and system engineer with extensive background in cloud computing and IP networking. With a proven track record at companies like Ericsson AB, Discovery Network Sweden, and Telenor, I specialize in developing robust cloud solutions and implementing DevOps practices.</p>
          <p>My expertise spans across AWS cloud services, Java development, and system architecture design. I am passionate about solving real-world problems through cloud computing and continuously expanding my knowledge in emerging technologies.</p>
          <div className="languages">
            <h4>Languages</h4>
            <ul>
              <li>English - Professional</li>
              <li>Swedish - Basic conversational level</li>
              <li>French - Basic conversational level</li>
              <li>Amharic - Native</li>
              <li>Tigrigna - Native</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;