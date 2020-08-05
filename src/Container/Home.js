import React, { Component } from "react";
import { connect } from "react-redux";
import PropsTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  state = {
    isLoading: true,
    products: [],
    error: "",
  };
  componentDidMount() {}

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
}

// This func determines what state is passed to our component via props
function mapStateToProps(state, ownProps) {
  return {
    //
  };
}

// This lets us declare what action is passed to our component on props
function mapDispatchToProps(dispatch) {
  return {
    //
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
