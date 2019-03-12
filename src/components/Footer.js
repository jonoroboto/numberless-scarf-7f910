import React from 'react';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                {_.get(this.props, 'pageContext.site.siteMetadata.footer.social_icons') && 
                    <ul className="icons special">
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_icons'), (item, item_idx) => (
                            <li key={item_idx}><a className={'icon ' + _.get(item, 'icon')} href={_.get(item, 'url')}><span className="label">{_.get(item, 'title')}</span></a></li>
                        ))}
                    </ul>
                }
                {_.get(this.props, 'pageContext.site.siteMetadata.footer.copyright') && 
                    <p className="copyright">
                        {ReactHtmlParser(_.get(this.props, 'pageContext.site.siteMetadata.footer.copyright'))}
                    </p>
                }
            </footer>
        );
    }
}
