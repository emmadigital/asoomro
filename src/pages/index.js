import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  AchievementsSection,
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
        <ProjectsSection sectionId="sales" heading="My Portfolio" />
        <AchievementsSection sectionId="achieve" heading="Achievements" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}