import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import Sidebar from "../components/Sidebar"
import { Row, Col } from 'reactstrap';


const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Home page</h1>
		<Row>
			<Col md="8">
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
			</Col>
			<Sidebar />
		</Row>
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
