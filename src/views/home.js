import React from 'react'

import { Helmet } from 'react-helmet'

import SectionSeparatorComponent from '../components/section-separator-component'
import SkillComponent from '../components/skill-component'
import CertificateComponent from '../components/certificate-component'
import ExperienceComponent from '../components/experience-component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Marius Bledea | DevOps Solutions</title>
        <meta
          name="description"
          content="DevOps Consultant and Cloud Architect specializing in Azure, Terraform, Kubernetes, and cloud-native solutions."
        />
        <meta property="og:title" content="Marius Bledea | DevOps Solutions" />
        <meta
          property="og:description"
          content="DevOps Consultant and Cloud Architect specializing in Azure, Terraform, Kubernetes, and cloud-native solutions."
        />
      </Helmet>
      <div className="home-header">
        <div className="home-container-header">
          <div className="home-sub-container-logo">
            <a href="#about-me-hero" className="home-link">
              <strong className="home-dev-ops-solutions">
                Devops Solutions
              </strong>
            </a>
            <a href="#about-me-hero" className="home-link01">
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
            className="home-link02"
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
            className="home-link03"
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
          <h2 className="home-title">DevOps Consultant | Cloud Arhitect</h2>
          <span className="home-short-description">
            <span>DevOps Consultant experienced in</span>
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
        <SectionSeparatorComponent rootClassName="section-separator-component-root-class-name"></SectionSeparatorComponent>
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
      <div className="home-section-separator1">
        <span className="home-skills">
          <span>Skills and Expertise</span>
          <br></br>
        </span>
        <SectionSeparatorComponent rootClassName="section-separator-component-root-class-name1"></SectionSeparatorComponent>
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
          text21="Proficient in writing IaC templates, ensuring consistent and reproducible deployments while reducing manual intervention."
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
        <div className="home-section-separator2"></div>
      </div>
      <div id="certificates" className="home-certicates-container">
        <a
          href="https://learn.microsoft.com/api/credentials/share/en-us/MariusBledea/640A06F906B5FD44?sharingId=D8E208BBDA770BE2"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link04"
        >
          <CertificateComponent
            text="Microsoft Certified: Azure Solutions Architect Expert"
            image_src="/az-305.svg"
            rootClassName="certificate-component-root-class-name"
            className="home-component08"
          ></CertificateComponent>
        </a>
        <a
          href="https://learn.microsoft.com/api/credentials/share/en-us/MariusBledea/4F11C4C9590D5B50?sharingId=D8E208BBDA770BE2"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link05"
        >
          <CertificateComponent
            text="Microsoft Certified: DevOps Engineer Expert"
            image_src="/az-400.svg"
            rootClassName="certificate-component-root-class-name5"
            className="home-component09"
          ></CertificateComponent>
        </a>
        <a
          href="https://www.credly.com/badges/518172f5-b5c6-4d8b-af30-e241b920b041/public_url"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link06"
        >
          <CertificateComponent
            text="HashiCorp Certified: Terraform Associate (002)"
            image_src="/terraform1.svg"
            rootClassName="certificate-component-root-class-name4"
            className="home-component10"
          ></CertificateComponent>
        </a>
        <a
          href="https://learn.microsoft.com/api/credentials/share/en-us/MariusBledea/AFFEABF605D14341?sharingId=D8E208BBDA770BE2"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link07"
        >
          <CertificateComponent
            text="Microsoft Certified: Azure Security Engineer Associate"
            image_src="/az-500.svg"
            rootClassName="certificate-component-root-class-name1"
            className="home-component11"
          ></CertificateComponent>
        </a>
        <a
          href="https://learn.microsoft.com/api/credentials/share/en-us/MariusBledea/367E55D797427299?sharingId=D8E208BBDA770BE2"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link08"
        >
          <CertificateComponent
            text="Microsoft Certified: Azure Administrator Associate"
            image_src="/az-104.svg"
            rootClassName="certificate-component-root-class-name3"
            className="home-component12"
          ></CertificateComponent>
        </a>
        <a
          href="https://learn.microsoft.com/api/credentials/share/en-us/MariusBledea/AEE5DE13514CF910?sharingId=D8E208BBDA770BE2"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link09"
        >
          <CertificateComponent
            text="Microsoft Certified: Azure Fundamentals 900"
            image_src="/az-900.svg"
            rootClassName="certificate-component-root-class-name2"
            className="home-component13"
          ></CertificateComponent>
        </a>
      </div>
      <div id="workexperience" className="home-certs-work-exp-separator">
        <span className="home-work-exp">
          <span>Work Experience</span>
          <br></br>
        </span>
        <SectionSeparatorComponent rootClassName="section-separator-component-root-class-name2"></SectionSeparatorComponent>
      </div>
      <div id="workexp-container" className="home-work-exp-container">
        <ExperienceComponent
          Period="Jun 2022 - present"
          Company="Accesa"
          Position="Senior DevOps Engineer"
          Description1="Led 2 projects both on the infrastructure provisioning side, but also on implementing best practices in terms of building and deploying applications. Optimise build pipelines by decreasing the build time from 13 to 4 minutes (±70%)."
          Description11="Worked with one of Germany's largest investment funds, where I exclusively work with cloud-native solutions. My responsibilities there encompass building highly scalable CI/CD pipelines in Azure DevOps, deploying applications using Helm charts, and conducting proof-of-concept (PoC) explorations of new technologies."
          Description12="Actively propose innovative ways to enhance the overall development and deployment processes, making a significant impact on the organization's cloud-native strategy and its effectiveness in leveraging Azure services."
          rootClassName="experience-component-root-class-name"
        ></ExperienceComponent>
        <ExperienceComponent
          Period="Jan 2021 - Jun 2022"
          Company="Endava"
          Position="DevOps Engineer"
          Description1="As an integral member of a dynamic, cross-functional team, I contributed to the development of an insurance application for one of the UK's largest corporations. My role was centered on infrastructure management, which was fully hosted on the Azure cloud platform, and I took on the responsibility of overseeing monthly releases to production."
          Description11="I proactively sought opportunities to enhance the efficiency and productivity of my colleagues. by keenly observing their daily routines and identifying areas where automation could eliminate repetitive tasks. "
          Description12="This approach not only streamlined our workflow but also freed up valuable time for the team to focus on more strategic and high-impact activities."
          rootClassName="experience-component-root-class-name2"
        ></ExperienceComponent>
        <ExperienceComponent
          Period="Nov 2020 - Dec 2020"
          Company="Endava"
          Position="DevOps Intern"
          Description1="I immersed myself in a diverse array of technologies that form the backbone of modern software development and deployment. "
          Description11=" I became proficient in Git for version control, network troubleshooting, Linux, Bash scripting, and cloud platforms like AWS and Azure. I also delved into the concepts of Continuous Integration and Continuous Deployment (CI/CD)."
          Description12="The highlight of my internship was a project where I showcased my proficiency in these technologies. I successfully deployed a Java web application as a container on an AWS EC2 instance using Jenkins. The entire deployment process was automated and triggered by Git commits in GitLab."
          rootClassName="experience-component-root-class-name1"
        ></ExperienceComponent>
      </div>
      <div id="contact" className="home-contact">
        <div className="home-content-container">
          <h2 className="home-get-in-touch">Get in touch</h2>
          <div className="home-contact-method-container">
            <div className="home-email">
              <a
                href="mailto:bledea.marius97@gmail.com?subject=DevOps Solutions request"
                className="home-link10"
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
              <a href="tel:+40751336708" className="home-link11">
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
