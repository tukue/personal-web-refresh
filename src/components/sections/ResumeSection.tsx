const ResumeSection = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <div className="resume-grid">
        <div className="resume-section">
          <h3>Certifications</h3>
          <ul className="certification-list">
            <li>System verification - ISTQB Certified Tester Foundation</li>
            <li>Java design pattern certification</li>
            <li>Certified AWS Cloud Practitioner</li>
            <li>Certified AWS Solution Architect Associate</li>
            <li>Microsoft Certified Azure Fundamentals</li>
            <li>Terraform Certified Associate</li>
            <li>AWS Developer Associate</li>
            <li>Certified Scrum Product Owner</li>
            <li>AWS Certified AI Practitioner</li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Technical Skills</h3>
          <div className="skills-categories">
            <div className="skill-category">
              <h4>Programming</h4>
              <ul className="skills-list">
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend Technologies</h4>
              <ul className="skills-list">
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>Flask</li>
                <li>Express.js</li>
                <li>Django</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Frontend Technologies</h4>
              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Cloud experience</h4>
              <ul className="skills-list">
                <li>AWS</li>
                <li>Azure</li>
                <li>Google</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h3>Work Experience</h3>
          <div className="resume-item">
            <h4>Senior Cloud Engineer</h4>
            <p>Enigio</p>
            <p>May 2024 – Oct 2024</p>
            <p>Implemented event-driven applications using AWS CloudFormation, Lambda functions, and integrated various AWS cloud services. Focused on security scanning using Security Hub.</p>
          </div>
          <div className="resume-item">
            <h4>DevOps Engineer / SRE</h4>
            <p>Digital Route</p>
            <p>Jun 2023 – Oct 2024</p>
            <p>Infrastructure as code using Terraform, AWS services development, Kubernetes, operational automation, and AWS security implementations.</p>
          </div>
          <div className="resume-item">
            <h4>Cloud Developer/DevOps Engineer Consultant</h4>
            <p>Knowit</p>
            <p>Jan 2021 – May 2023</p>
            <p>Cloud migration, infrastructure automation, AWS serverless development, and CI/CD implementation using Azure DevOps.</p>
          </div>
          <div className="resume-item">
            <h4>Backend Developer</h4>
            <p>DXC Technology</p>
            <p>Jan 2016 – Jan 2021</p>
            <p>Developed backend Restful APIs for CRM application using spring boot Framework, hibernate following TmForum standard for interoperability as part of the Digital.</p>
          </div>
          <div className="resume-item">
            <h4>System Developer</h4>
            <p>Discovery Network Sweden</p>
            <p>Mar 2016 – Dec 2017</p>
            <p>Developed java applications that integrate with TV planning apps. Testing and deploying a new release of the TV planning system. Troubleshooting system failure, and migrated apps to AWS cloud (DNS, network architecturte designs).</p>
          </div>
          <div className="resume-item">
            <h4>System Developer</h4>
            <p>Ericsson AB</p>
            <p>Aug 2014 – Dec 2015</p>
            <p>Embedded system feature development using C for a Hetnet feature in 4G software; end to end testing,and feature verification; detailed LTE system knowledge; scrum and continuous integration; good programming skill in Java and python.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;