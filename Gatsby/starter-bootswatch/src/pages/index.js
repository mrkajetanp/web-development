import "../styles/main.scss"

import React from "react"
import { Helmet } from "react-helmet"

import Button from "react-bootstrap/Button"
import { Card } from "react-bootstrap"

function Head() {
  return (
    <Helmet>
      <title>Great title</title>
    </Helmet>
  )
}

function Home() {
  return (
    <div>
      <h1>Hello there</h1>
      <p class="text-primary">Oi mate</p>
      <Button text="oi" />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Home />
      </div>
    )
  }
}
