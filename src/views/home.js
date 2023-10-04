import React from 'react'

import { Helmet } from 'react-helmet'

import SkillComponent from '../components/skill-component'
import CertificateComponent from '../components/certificate-component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Marius Bledea - DevOps | Cloud Arhitect</title>
        <meta property="og:title" content="Marius Bledea - DevOps | Cloud Arhitect" />
      </Helmet>
      <div className="home-header">
        <div className="home-container-header">
          <div className="home-sub-container-logo">
            <a href="#about-me-hero" className="home-link">
              <strong className="home-dev-ops-solutions">
                Devops Solutions
              </strong>
            </a>
            <a href="#about-me-hero" className="home-link1">
              <img
                alt="image"
                src="/my_logo.svg"
                loading="eager"
                className="home-logo"
              />
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/bledea-marius/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <img
              alt="image"
              src="/linkedin.svg"
              loading="eager"
              className="home-linkedin"
            />
          </a>
          <a
            href="https://github.com/bledeamarius"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            <img
              alt="image"
              src="/github.svg"
              loading="lazy"
              className="home-github"
            />
          </a>
        </div>
      </div>
      <div id="about-me-hero" className="home-about-me-hero">
        <div className="home-hero-text-container">
          <h1 className="home-name">Marius Bledea</h1>
          <h2 className="home-title">DevOps Engineer | Cloud Arhitect</h2>
          <span className="home-short-description">
            <span>DevOps Engineer experienced in</span>
            <br className="home-text01 Section-Text"></br>
            <span>Azure, Terraform, Kubernetes, and</span>
            <br className="home-text03 Section-Text"></br>
            <span>Cloud Native Solutions.</span>
          </span>
          <div className="home-container-buttons">
            <a href="#contact" autoFocus className="home-cta-btn">
              <span className="home-text05">
                <span className="Anchor home-text06">Get in Touch</span>
                <br></br>
              </span>
            </a>
            <button type="button" autoFocus className="home-button">
              <span className="home-text08">
                <span className="home-text09">Download resume</span>
                <br className="home-text10"></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="home-section-separator">
        <span className="home-about-me">About Me</span>
        <div id="subtitles" className="home-section-separator1"></div>
      </div>
      <div id="aboutme" className="home-about-me-content">
        <div className="home-container1">
          <img
            alt="image"
            src="/selfie.svg"
            loading="eager"
            className="home-image"
          />
          <div className="home-container2">
            <img
              alt="image"
              src="/quotes.svg"
              loading="lazy"
              className="home-quotes"
            />
            <div className="home-container3">
              <span className="home-text11">
                Empowering Efficiency Through DevOps: Relentlessly Automating,
                Never ClickOps.
              </span>
            </div>
          </div>
        </div>
        <div className="home-container4"></div>
        <div className="home-container5">
          <div className="home-heading-container">
            <span className="home-description">
              <span>
                I am a DevOps Engineer experienced in Azure, Terraform,
                Kubernetes, and Cloud Native Solutions. I&apos;m specialized in
                designing and implementing cloud infrastructure, automating
                deployment processes, and optimising application performance.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text15"></br>
              <span>
                With my expertise I can help streamline your development and
                deployment workflows. Contact me to discuss your project
                requirements and find out how I can contribute to your team.
              </span>
            </span>
          </div>
          <div className="home-nr-container">
            <div className="home-completed-proj-container">
              <span className="home-nr-completed-proj">
                <span>8</span>
                <br></br>
                <br></br>
              </span>
            </div>
            <div className="home-container6">
              <span className="home-plus">
                <span className="home-text20">+</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-completed-proj-desc-container">
            <h1 className="home-completed-proj-heading">Completed projects</h1>
            <span className="home-description1">
              <span className="home-text22">
                Managed and optimized Azure infrastructure using Terraform.
                Implemented and maintained Kubernetes clusters. Developed and
                deployed cloud native solutions to enhance application
                performance and scalability.
              </span>
              <br className="home-text23"></br>
              <br className="home-text24"></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-section-separator2">
        <span className="home-skills">
          <span>Skills and Expertise</span>
          <br></br>
        </span>
        <div className="home-section-separator3"></div>
      </div>
      <div id="skills" className="home-skills1"></div>
      <div className="home-container-skills">
        <SkillComponent
          text="lkj"
          text2="Azure Infrastructure Design and Implementation"
          text21="Implements and manages Azure infrastructure using Terraform."
          image_src="/azure.svg"
          image_src1="/azure.svg"
          rootClassName="skill-component-root-class-name"
        ></SkillComponent>
        <SkillComponent
          text2="Kubernetes and Container Orchestration"
          text21="Proficient in container orchestration with Kubernetes."
          image_src1="/kube.svg"
          rootClassName="skill-component-root-class-name3"
        ></SkillComponent>
        <SkillComponent
          text2="Infrastructure as Code (IaC) Expertise"
          text21="Proficient in writing infrastructure as code (IaC) templates, ensuring consistent and reproducible deployments while reducing manual intervention"
          image_src1="/terraform.svg"
          rootClassName="skill-component-root-class-name4"
        ></SkillComponent>
        <SkillComponent
          text2="Cloud Infrastructure Design and Optimization"
          text21="Designs and deploys cloud native solutions to optimize application performance and reliability."
          image_src1="/cloud.svg"
          rootClassName="skill-component-root-class-name1"
        ></SkillComponent>
        <SkillComponent
          text2="Cloud Security and Compliance"
          text21="Implements robust security practices and compliance policies, to protect cloud environments and data."
          image_src1="/security.svg"
          rootClassName="skill-component-root-class-name2"
        ></SkillComponent>
        <SkillComponent
          text2="CI/CD Pipelines"
          text21="Develops automated CI/CD pipelines to ensure rapid and reliable application deployment, testing, and delivery, promoting a DevOps culture."
          image_src1="/pipeline1.svg"
          rootClassName="skill-component-root-class-name5"
        ></SkillComponent>
      </div>
      <div className="home-skills-certs-separator">
        <span className="home-certs">
          <span>Certificates</span>
          <br></br>
        </span>
        <div className="home-section-separator4"></div>
      </div>
      <div className="home-section-separator5"></div>
      <div id="certificates" className="home-certicates-container">
        <CertificateComponent
          rootClassName="certificate-component-root-class-name"
          image_src="/az-305.svg"
          text="Microsoft Certified: Azure Solutions Architect Expert"
        ></CertificateComponent>
        <CertificateComponent
          rootClassName="certificate-component-root-class-name5"
          image_src="/az-400.svg"
          text="Microsoft Certified: DevOps Engineer Expert"
        ></CertificateComponent>
        <CertificateComponent
          rootClassName="certificate-component-root-class-name4"
          image_src="/terraform1.svg"
          text="HashiCorp Certified: Terraform Associate (002)"
        ></CertificateComponent>
        <CertificateComponent
          rootClassName="certificate-component-root-class-name1"
          image_src="/az-500.svg"
          text="Microsoft Certified: Azure Security Engineer Associate"
        ></CertificateComponent>
        <CertificateComponent
          rootClassName="certificate-component-root-class-name3"
          image_src="/az-104.svg"
          text="Microsoft Certified: Azure Administrator Associate"
        ></CertificateComponent>
        <CertificateComponent
          rootClassName="certificate-component-root-class-name2"
          image_src="/az-900.svg"
          text="Microsoft Certified: Azure Fundamentals"
        ></CertificateComponent>
      </div>
      <div id="contact" className="home-contact">
        <div className="home-content-container">
          <h2 className="home-get-in-touch">Get in touch</h2>
          <div className="home-contact-method-container">
            <div className="home-email">
              <a
                href="mailto:bledea.marius97@gmail.com?subject=DevOps Solutions request"
                className="home-link4"
              >
                <img
                  alt="image"
                  src="/email.svg"
                  loading="eager"
                  className="home-email1"
                />
              </a>
              <a
                href="mailto:bledea.marius97@gmail.com?subject="
                className="home-email-address"
              >
                bledea.marius97@gmail.com
              </a>
            </div>
            <div className="home-phone">
              <a href="tel:+40751336708" className="home-link5">
                <img
                  alt="image"
                  src="/cellphone.svg"
                  loading="eager"
                  className="home-cellphone"
                />
              </a>
              <a href="tel:+40751336708" className="home-phone-number">
                +40 751 336 708
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
