import React from "react";
import Layout from "../components/lib/Layout";
import MainNavbar from "../components/nav/MainNavbar";
import Content from '../content/text-content.yaml';
import ContentWrapper from "../components/ContentWrapper";
import H1 from "../components/lib/text/H1";
import PortraitImage from '../content/portrait.jpeg';
import Jumbotron from "../components/lib/containers/Jumbotron";
import Row from "../components/lib/containers/Row";
import Image from "../components/lib/Image";
import Text from "../components/lib/text/Text";

const IndexPage = () => {
  return (
    <Layout>
      <title>{Content.home.title}</title>
      <MainNavbar />
      <ContentWrapper>
        <Jumbotron className="m-top-40">
          <Row>
            <div>
              <H1 className="m-top-0">{Content.home.header}</H1>
              <p><Text>{Content.home.paragraph}</Text></p>
            </div>
            <Image src={PortraitImage} />
          </Row>
        </Jumbotron>
      </ContentWrapper>
    </Layout>
  )
}

export default IndexPage
