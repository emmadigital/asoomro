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
        <InterestsSection sectionId="details" heading="Skill Set" />
        <InterestsSection sectionId="acheive" heading="Acheivements" />
        <ProjectsSection sectionId="sales" heading="My Portfolio" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}