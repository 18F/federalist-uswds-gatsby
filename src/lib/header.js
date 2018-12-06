import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { navigation } from 'uswds_components';
import UswdsComponent from './uswds_component';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  extended: PropTypes.bool,
  mega: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  extended: false,
  mega: false,
};

const propsToClasses = props => ({
  'usa-header-basic': !props.extended,
  'usa-header-basic-megamenu': props.mega && !props.extended,
  'usa-header-extended': props.extended,
});

const Header = ({ className, children, ...props }) => {
  const render = ref => (
    <header
      className={cx('usa-header', propsToClasses(props), className)}
      role="banner"
      ref={ref}
    >
      <div className="usa-navbar">
        <div className="usa-logo" id="extended-logo">
          <em className="usa-logo-text">
            <a href="/" title="Home" aria-label="Home">
              {props.title}
            </a>
          </em>
        </div>
        <button className="usa-menu-btn">Menu</button>
      </div>
      {children}
    </header>
  );

  return <UswdsComponent uswdsComponent={navigation} render={render} />;
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
