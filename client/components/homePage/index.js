import React from "react";
export default class HomePage extends React.Component {
  componentDidMount() {
    console.log("渲染了HomePage");
  }
  render() {
    return <h1>Hello React SSR66</h1>;
  }
}
