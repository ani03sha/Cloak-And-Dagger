import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Home page</h1>
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
						/> 
					))}
				</div>
			);
		} } />
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
			}
			excerpt
		}
		}
	}
}
`;
