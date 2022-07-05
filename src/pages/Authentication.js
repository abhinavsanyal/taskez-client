import React from 'react';
import { AuthenticationSection, Row, Col, Stack } from '../features';
import illustrationSrc from './assets/heroimg.svg';

const AuthPage = () => {
  return (
    <Row fullScreen>
      <Col size={1}>
      <img src={illustrationSrc} alt="illustration" />
      </Col>
      <Col size={1}>
        <AuthenticationSection />
      </Col>
    </Row>
  )
}

export default AuthPage