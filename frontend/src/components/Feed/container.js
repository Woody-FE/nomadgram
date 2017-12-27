import React, { Component } from "react";
import Feed from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { getFeed } = this.props;
    if (!this.props.feed) {
      getFeed();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.feed) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { feed } = this.props;
    return <Feed {...this.state} feed={feed} />;
  }
}

export default Container;
