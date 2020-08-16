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
      <h1>Huh what a wonderful about page</h1>
      <p class="text-primary">Oi mate</p>
      <footer>
        <p>Footer here</p>
      </footer>
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
