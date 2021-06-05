import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <article className="vh-100 dt w-100">
          <div className="dtc v-mid tc white ph3 ph4-l">
            <h1 className="f1"> Oops, an error has occured </h1>
          </div>
        </article>
      );
    } else return this.props.children;
  }
}

export default ErrorBoundry;
