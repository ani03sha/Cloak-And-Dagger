import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
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
									title={node.frontmatter.title} 
									path={node.frontmatter.path} 
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
			<Col md="4">
				<div style={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.4)"}}></div>
			</Col>
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
					path
					tags
					image {
						childImageSharp {
							fluid(maxWidth: 600) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				excerpt
			}
		}
	}
}
`;
