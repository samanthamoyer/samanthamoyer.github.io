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

function getPortfolioPieceUrl(slug) {
  return `/portfolio/${slug}`;
}

export default function PortfolioIndex({ data, children }) {
  const { allMdx: { edges }} = data;

  return (
    <Layout>
      <title>{Content.portfolio.title}</title>
      <MainNavbar />
      <ContentWrapper>
        <H1 className="m-top-80">{Content.portfolio.header}</H1>
        <Grid>
          {edges.map(({ node: { id, frontmatter: { title, tags, description, slug }}}) => (
            <GridTile key={id} href={getPortfolioPieceUrl(slug)}>
              <Column justify="space-between" height="100%">
                <H2 className="text-center m-bottom-0">{title}</H2>
                <p className="text-center m-top-10"><Text color={SECONDARY}>{tags}</Text></p>
                <p><Text size={14} color={SECONDARY}>{description}</Text></p>
                <p className="text-center justify-end"><Text color={SECONDARY} bold={true} decoration="underline">Read More</Text></p>
              </Column>
            </GridTile>
          ))}
        </Grid>
      </ContentWrapper>
    </Layout>
  );
}

PortfolioIndex.propTypes = {
  
};

export const query = graphql`
query PortfolioPieces {
  allMdx(filter: {frontmatter: {type: {eq: "portfolio"}}}) {
    edges {
      node {
        frontmatter {
          title,
          slug,
          tags,
          description
        }
        id
      }
    }
  }
}`
