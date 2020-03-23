import React from "react";
import Spinner from "./Spinnerr";
import AddMovie from "./MovieList"
import MovieList from "./MovieList";

const HOC = WrappedComponent => {
  return class HOC extends React.Component {
    constructor(props,MovieList) {
      super(props,MovieList);
      this.state = {
        timeup: true
      };

      setTimeout(
        () =>
          this.setState({
            timeup: false
          }),
        2000
      );
      console.log(this.state.timeup);
    }

    render() {
      return this.state.timeup ? (
        <Spinner />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default HOC;