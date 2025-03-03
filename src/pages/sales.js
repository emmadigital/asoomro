import React from "react";
import { ProjectsSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function SalesPage() {
  return (
    <>
      <Seo title="Sales" useTitleTemplate={true} noIndex={true} />
      <Page>
        <ProjectsSection sectionId="sales" heading="Sales" />
      </Page>
    </>
  );
}
