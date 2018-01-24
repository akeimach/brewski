import React from "react";
import ReactGA from "react-ga";
ReactGA.initialize("UA-112511668-2");


const Analytics = (WrappedComponent) => {

  const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };

  const HOC = class extends React.Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;
      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };

  return HOC;
}

export default Analytics;