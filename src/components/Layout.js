import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                </Helmet>
                    {this.props.children}
                    <Footer {...this.props} />
            </React.Fragment>
        );
    }
}
