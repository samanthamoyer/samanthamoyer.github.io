import { graphql } from "gatsby";
import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import Grid from '../../components/lib/containers/Grid';
import GridTile from '../../components/lib/containers/GridTile';
import Layout from "../../components/lib/Layout";
import MainNavbar from "../../components/nav/MainNavbar";
import Content from '../../content/text-content.yaml';
import H1 from "../../components/lib/text/H1";
import H2 from '../../components/lib/text/H2';
import Text from "../../components/lib/text/Text";
import { SECONDARY } from "../../constants/theme";
import Column from '../../components/lib/containers/Column';
import { MDXRenderer } from "gatsby-plugin-mdx"

function getPortfolioPieceUrl(slug) {
  return `/portfolio/${slug}`;
}

export default function PortfolioIndex({ data }) {
  const { mdx: { body, frontmatter: { tags, title }} } = data;
  return (
    <Layout>
      <title>{title}</title>
      <MainNavbar />
      <ContentWrapper>
        <H1 className="m-top-80">{title}</H1>
        <MDXRenderer>{body}</MDXRenderer>
      </ContentWrapper>
    </Layout>
  );
}

PortfolioIndex.propTypes = {
  
};

export const query = graphql`
query PortfolioPiece($frontmatter__slug: String) {
  mdx(frontmatter: {slug: { eq: $frontmatter__slug }}) {
    id
    body
    frontmatter {
      tags
      title
    }
  }
}`
