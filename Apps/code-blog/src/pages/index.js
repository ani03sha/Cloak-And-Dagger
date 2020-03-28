import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"


const IndexPage = () => (
	<Layout pageTitle="Code Blog">
		<SEO title="Home" />
		<StaticQuery query={indexQuery} render={ data => {
			return(
				<div>
					{data.allMarkdownRemark.edges.map(({node}) => (
						<Post 
							key={node.id}
							title={node.frontmatter.title} 
							slug={node.fields.slug} 
							author={node.frontmatter.author} 
							date={node.frontmatter.date} 
							body={node.excerpt} 
							fluid={node.frontmatter.image.childImageSharp.fluid}
							tags={node.frontmatter.tags}
						/> 
					))}
				</div>
			);
		}}/>
	</Layout>
)

export default IndexPage;

const indexQuery = graphql`
query {
	allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
		edges {
			node {
				id
				frontmatter {
					title
					date (formatString: "MMM Do YYYY")
					author
					tags
					image {
						childImageSharp {
							fluid(maxWidth: 600) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				fields {
					slug
				}
				excerpt
			}
		}
	}
}
`;
