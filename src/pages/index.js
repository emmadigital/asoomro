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
      <Seo title="Amresha Soomro | An accomplished IT Project Manager" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog', 'Medium']} />
        <InterestsSection sectionId="details" heading="Skill Set" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}