import React from 'react';
import _ from 'lodash';

import markdownify from '../utils/markdownify';
import safePrefix from '../utils/safePrefix';

export default class Spotlights extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="spotlights special">
                {_.map(_.orderBy(_.filter(_.get(this.props, 'pageContext.pages'), ['frontmatter.home.spotlights.enabled', true]), 'frontmatter.home.spotlights.weight'), (section_page, section_page_idx) => (
                    <section key={section_page_idx}>
                        <header className="major">
                            <h3>{_.get(section_page, 'frontmatter.title')}</h3>
                        </header>
                        {_.get(section_page, 'frontmatter.home.spotlights.home_img_path') && 
                            <div className="image fit">
                                <img src={_.get(section_page, 'frontmatter.home.spotlights.home_img_path')} alt="" />
                            </div>
                        }
                        {markdownify(_.get(section_page, 'frontmatter.home.spotlights.excerpt'))}
                        <ul className="actions special">
                            <li><a href={safePrefix(_.get(section_page, 'url'))} className="button">Learn More</a></li>
                        </ul>
                    </section>
                ))}
            </section>
        );
    }
}
