import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Row, Col, Container } from "./components/Grid";

class App extends React.Component {

  state = {
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Nav />
          </Row>
          <Row>
            <Content />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
