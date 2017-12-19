import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Container } from "./components/Grid";

class App extends React.Component {

  state = {
  };

  render() {
    return (
      <div>
        <Container fullwidth>
          <Nav />
        </Container>
        <Container fluid>
          <Content />
        </Container>
      </div>
    );
  }
}

export default App;
