import React, { Component } from 'react';

const WithLogging = WrappedComponent => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${this.displayName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.displayName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

  return WithLoggingComponent;
};

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

export default WithLogging;
