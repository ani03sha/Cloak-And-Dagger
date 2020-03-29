import React from 'react';
import Layout from '../components/layout';
import { Button, Badge } from 'reactstrap';
import { slugify } from '../util/utilityFunctions';
import SEO from '../components/seo';

const TagsPage = ({ pageContext }) => {
    const { tags, tagPostCount } = pageContext;
    return (
        <Layout pageTitle="All Tags">
            <SEO title="All Tags" keywords={['tags', 'topics']} />
            <ul>
                {tags.map(tag => (
                    <li key={tag} style={{marginBottom: '10px'}}>
                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                            {tag} <Badge color="light">
                                {tagPostCount[tag]}
                            </Badge>
                        </Button>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export default TagsPage;