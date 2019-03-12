import React from 'react';
import _ from 'lodash';

import markdownify from '../utils/markdownify';

export default class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <header className="major">
                    <h1>{_.get(this.props, 'pageContext.frontmatter.banner.title')}</h1>
                    {markdownify(_.get(this.props, 'pageContext.frontmatter.banner.subtitle'))}
                </header>
                {_.get(this.props, 'pageContext.frontmatter.banner.show_scroll_button') && 
                    <ul className="actions fixed special">
                        <li><a className="button large primary icon solo fa-angle-down scrolly" href="#main">
                            <span className="label">Learn More</span>
                            </a></li>
                    </ul>
                }
            </section>
        );
    }
}
