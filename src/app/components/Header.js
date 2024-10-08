"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
  return (
    <header className="bg-dark text-white text-center py-5">
      <Container>
        <Row>
          <Col>
            <h1>FBT Functional Body Training</h1>
            <p>Transform your body with functional workouts</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
