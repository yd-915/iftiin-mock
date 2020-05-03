import React from "react"
import { Col, Card } from "react-bootstrap"

const TipsNTricks = (props) => {
  return (
    <Col>
      <Col >
        <h1 className="h1dr">Tips & Tricks</h1>
      </Col>
      <Col style={{ marginTop: '38px'}} >
        <Card>
          <Card.Body>{props.tip}</Card.Body>
        </Card>
      </Col>
    </Col>
  )
}

export default TipsNTricks

// TODO :fix the static amrgin
