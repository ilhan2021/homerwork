import React from 'react'
import {Carousel,Form,Button} from "react-bootstrap";


function Home() {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/1600x900"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/1600x901"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/1600x902"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label><h4>E-mail address</h4></Form.Label>
      <Form.Control type="email" placeholder="Enter e-mail" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label><h4>Görüşleriniz</h4></Form.Label>
      <Form.Control type="text" placeholder="Görüşleriniz..." />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </div>
  )
}

export default Home