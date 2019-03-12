import React from 'react';
import _ from 'lodash';
import classNames from '../utils/classNames';

import markdownify from '../utils/markdownify';
import link from '../utils/link';
import safePrefix from '../utils/safePrefix';

export default class Features extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="special">
                <header className="major">
                    <h2>{_.get(this.props, 'section.title')}</h2>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                </header>
                <section className="features">
                    {_.map(_.get(this.props, 'section.features'), (feature, feature_idx) => (
                        <section key={feature_idx}>
                            <span className={'icon major ' + _.get(feature, 'icon')}/>
                            <h3>{_.get(feature, 'title')}</h3>
                            {markdownify(_.get(feature, 'text'))}
                        </section>
                    ))}
                </section>
                {_.get(this.props, 'section.actions') && 
                    <footer className="major">
                        <ul className="actions special">
                            {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                                <li key={action_idx}><a href={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(link(this.props.pageContext.pages, _.get(action, 'url'))))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</a></li>
                            ))}
                        </ul>
                    </footer>
                }
            </section>
        );
    }
}
