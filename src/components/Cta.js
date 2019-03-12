import React from 'react';
import _ from 'lodash';
import classNames from '../utils/classNames';

import markdownify from '../utils/markdownify';
import link from '../utils/link';
import safePrefix from '../utils/safePrefix';

export default class Cta extends React.Component {
    render() {
        return (
            <section id="cta" className={'wrapper ' + _.get(this.props, 'pageContext.frontmatter.cta.background_style') + ' special'}>
                <div className="inner">
                    <header className="major">
                        <h2>{_.get(this.props, 'pageContext.frontmatter.cta.title')}</h2>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.cta.text'))}
                    </header>
                    {_.get(this.props, 'pageContext.frontmatter.cta.actions') && 
                        <ul className="actions special">
                            {_.map(_.get(this.props, 'pageContext.frontmatter.cta.actions'), (action, action_idx) => (
                                <li key={action_idx}><a href={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(link(this.props.pageContext.pages, _.get(action, 'url'))))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</a></li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        );
    }
}
