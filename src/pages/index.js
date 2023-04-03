import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Anna Humphrey Writing Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Blog Posts" sources={['Blog','Medium']} /> 
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="skill&technologies" heading="Skills & Tools" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="contact" heading="Get in touch" />
      </Page>
    </>
  );
}
