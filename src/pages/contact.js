import React from "react";
import Layout from "../components/lib/Layout";
import MainNavbar from "../components/nav/MainNavbar";
import ContactForm from '../components/ContactForm';
import ContentWrapper from '../components/ContentWrapper';
import H1 from "../components/lib/text/H1";
import Text from "../components/lib/text/Text";
import Content from '../content/text-content.yaml';

const IndexPage = () => {
  return (
    <Layout>
      <title>{Content.contact.title}</title>
      <MainNavbar />
      <ContentWrapper narrow={true} className="m-top-40">
        <H1>Contact</H1>
        <ContactForm>
          <p className="m-bottom-40">
            <Text>{Content.contact.paragraph}</Text>
          </p>
        </ContactForm>
      </ContentWrapper>
    </Layout>
  )
}

export default IndexPage
