import React from 'react';
import _ from 'lodash';

import safePrefix from '../utils/safePrefix';
import markdownify from '../utils/markdownify';

export default class Highlights extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="highlights">
                {_.map(_.orderBy(_.filter(_.get(this.props, 'pageContext.pages'), ['frontmatter.home.highlights.enabled', true]), 'frontmatter.home.highlights.weight'), (section_page, section_page_idx) => (
                    <section key={section_page_idx}>
                        {_.get(section_page, 'frontmatter.home.highlights.home_img') && 
                            <a className="image" href={safePrefix(_.get(section_page, 'url'))}>
                                <img src={safePrefix(_.get(section_page, 'frontmatter.home.highlights.home_img.path'))} data-position={_.get(section_page, 'frontmatter.home.highlights.home_img.data_position')} alt="" />
                            </a>
                        }
                        <div className="content">
                            <header className="major">
                                <h2>{_.get(section_page, 'frontmatter.title')}</h2>
                                {markdownify(_.get(section_page, 'frontmatter.subtitle'))}
                            </header>
                            {markdownify(_.get(section_page, 'frontmatter.home.highlights.excerpt'))}
                            <ul className="actions">
                                <li><a href={safePrefix(_.get(section_page, 'url'))} className="button">Learn More</a></li>
                            </ul>
                        </div>
                    </section>
                ))}
            </section>
        );
    }
}
