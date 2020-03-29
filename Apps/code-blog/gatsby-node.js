const authors = require('./src/util/authors');
const { slugify } = require ('./src/util/utilityFunctions');
const path = require('path');
const _ = require('lodash');


exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    if(node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        });
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const singlePostTemplate = path.resolve('src/templates/single-post.js');

    const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        tagsPage: path.resolve('src/templates/tags-page.js'),
        tagsPost: path.resolve('src/templates/tags-post.js')
    };

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }
        const posts = res.data.allMarkdownRemark.edges;
        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    slug: node.fields.slug,
                    imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
                }
            })
        })
        let tags = [];
        _.forEach(posts, edge => {
            if(_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });
        let tagPostCount = {};
        tags.forEach(tag => {
            tagPostCount[tag] = (tagPostCount[tag] || 0) + 1;
        });
        tags = _.uniq(tags);
        createPage({
            path: `/tags`,
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCount,
            }
        })
        tags.forEach(tag => {
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagsPost,
                context: {
                    tag
                }
            })
        });
    })
}