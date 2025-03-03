import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function SalesInsightsPage() {
  return (
    <>
      <Seo title="Sales-Insights" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="sales-insights" heading="SalesInsigts" />
      </Page>
    </>
  );
}
