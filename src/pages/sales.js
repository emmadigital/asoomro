import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function SalesPage() {
  return (
    <>
      <Seo title="Sales" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="sales" heading="Sales" />
      </Page>
    </>
  );
}
