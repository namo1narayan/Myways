import React from 'react'
import sunrise from './picture/sunrise.svg';
import sunset from './picture/sunset.svg';
import CardContent from '@material-ui/core/CardContent';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

  const HomePageHeader = () => {
    return (
        
      <header >
      <h2> Today's Forecast for New York City,NY,United States</h2>
    <div >
    <div className='flex-container'>

    <Row xs={1} md={4} className="g-1">
      {Array.from({ length: 1 }).map((_, idx) => (
        
        <Col>
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Morning</Card.Title>
          <Card.Text>25°C</Card.Text>
          <Card.Img height={25} width={25} src={sunrise} />
        </Card.Body>
        <Card.Footer>0%</Card.Footer>
      </Card>

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Afternoon</Card.Title>
          <Card.Text>30°C</Card.Text>
          <Card.Img height={25} width={25} src={sunrise} />
        </Card.Body>
        <Card.Footer>5%</Card.Footer>
      </Card>

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Evening</Card.Title>
          <Card.Text>25°C</Card.Text>
          <Card.Img height={25} width={25} src={sunset} />
        </Card.Body>
        <Card.Footer>0%</Card.Footer>
      </Card>

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Morning</Card.Title>
          <Card.Text>20°C</Card.Text>
          <Card.Img height={25} width={25} src={sunrise} />
        </Card.Body>
        <Card.Footer>--</Card.Footer>
      </Card>
 </Col>
 
      ))}
    </Row>
    </div>
    <Button variant="dark">Next Hours</Button>
        </div>
    </header>
      
    );
  };

function Today({today}) {
    return (
        <CardContent>
            <HomePageHeader/>
        </CardContent>    

            
    );
};

export default Today;