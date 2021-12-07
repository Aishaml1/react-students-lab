import React from 'react';
import './index.css';
import { Card }from 'react-bootstrap';
import Score from './Scores';

const student = (props) => {
    return (
    <div>
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header style={{color: "blue"}}>{props.name}</Card.Header>
    <Card.Body>
      <Card.Title>
          <Score scores={props.scores} />
      </Card.Title>
      <Card.Text>
      {props.bio}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
    
    )
}
export default student

