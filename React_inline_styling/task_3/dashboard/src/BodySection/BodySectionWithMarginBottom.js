import React, { Component } from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render () {
    return (
      <div className={css(styles.BodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  BodySectionWithMargin: {
    marginBottom: '40px',
    width: '90%',
    alignItems: 'left',
  }
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default BodySectionWithMarginBottom;
