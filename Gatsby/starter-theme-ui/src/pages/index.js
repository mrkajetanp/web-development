import React from "react"
import { Helmet } from "react-helmet"

import { Container, Flex, Box, Button, Divider } from "theme-ui"

function Head() {
  return (
    <Helmet>
      <title>Great title</title>
    </Helmet>
  )
}

function Home() {
  return (
    <Box sx={{ flex: "0 1 auto", fontSize: 18, m: 3 }} color="white">
      Beep Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      congue rhoncus arcu et vehicula. In ac nisi vel magna tristique fermentum
      a sit amet massa. Integer varius molestie magna, eu venenatis neque
      fringilla quis. Proin blandit nisi nec scelerisque consectetur. Duis sit
      amet dui lectus. Maecenas nec fringilla felis. Mauris dolor est, blandit
      quis facilisis vitae, euismod ut arcu. Nullam pharetra diam nulla, ac
      venenatis lectus interdum vitae. Ut tincidunt lacus quis libero dictum
      egestas. Vivamus sit amet laoreet enim. Quisque ut ante dui. Etiam nec
      pellentesque nulla. Sed eleifend accumsan porttitor. Etiam placerat a arcu
      ac suscipit. In a congue velit, nec viverra lectus. Nam malesuada sapien
      nec lacus consequat feugiat. Donec vel arcu a tortor tincidunt consectetur
      vitae ut risus. Donec porta sapien non risus mollis vestibulum.
      Pellentesque tempor scelerisque elit eu tincidunt. Nam eu velit lectus.
      Duis ac velit pharetra, commodo purus sit amet, feugiat metus. Fusce sem
      lacus, blandit in dapibus vitae, cursus a eros. Sed luctus dapibus nunc a
      mattis. Vestibulum nec iaculis turpis. Vestibulum eu turpis augue. Mauris
      nibh justo, eleifend in malesuada quis, blandit bibendum neque. Quisque
      sapien felis, ultrices ut diam non, molestie ultricies tortor. Etiam urna
      tortor, commodo at viverra id, dignissim at risus. Nunc dapibus augue eu
      mi scelerisque, vitae pharetra nisl vulputate. Praesent vitae euismod
      dolor. Donec lacinia nisl quis est rutrum mattis. Aliquam eleifend justo
      eget dolor maximus porttitor. Duis bibendum tempus magna, sed fringilla
      velit dapibus sed. Vestibulum tristique condimentum orci, id rhoncus sem
      venenatis at. Cras vel facilisis felis, sit amet euismod nibh. In id magna
      a magna semper vehicula. Morbi sed urna ut lectus blandit ultricies. Nunc
      finibus pharetra sem, ac feugiat libero mollis sed. Vivamus vehicula nisl
      nec congue semper. Etiam venenatis aliquam congue. Nunc non interdum
      turpis, quis vehicula purus. In nisl magna, bibendum eget molestie
      aliquam, porta vel neque. Suspendisse gravida ultricies tellus. Integer
      vel ex massa. Ut mattis tristique tellus et placerat. Beep Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Vivamus congue rhoncus arcu
      et vehicula. In ac nisi vel magna tristique fermentum a sit amet massa.
      Integer varius molestie magna, eu venenatis neque fringilla quis. Proin
      blandit nisi nec scelerisque consectetur. Duis sit amet dui lectus.
      Maecenas nec fringilla felis. Mauris dolor est, blandit quis facilisis
      vitae, euismod ut arcu. Nullam pharetra diam nulla, ac venenatis lectus
      interdum vitae. Ut tincidunt lacus quis libero dictum egestas. Vivamus sit
      amet laoreet enim. Quisque ut ante dui. Etiam nec pellentesque nulla. Sed
      eleifend accumsan porttitor. Etiam placerat a arcu ac suscipit. In a
      congue velit, nec viverra lectus. Nam malesuada sapien nec lacus consequat
      feugiat. Donec vel arcu a tortor tincidunt consectetur vitae ut risus.
      Donec porta sapien non risus mollis vestibulum. Pellentesque tempor
      scelerisque elit eu tincidunt. Nam eu velit lectus. Duis ac velit
      pharetra, commodo purus sit amet, feugiat metus. Fusce sem lacus, blandit
      in dapibus vitae, cursus a eros. Sed luctus dapibus nunc a mattis.
      Vestibulum nec iaculis turpis. Vestibulum eu turpis augue. Mauris nibh
      justo, eleifend in malesuada quis, blandit bibendum neque. Quisque sapien
      felis, ultrices ut diam non, molestie ultricies tortor. Etiam urna tortor,
      commodo at viverra id, dignissim at risus. Nunc dapibus augue eu mi
      scelerisque, vitae pharetra nisl vulputate. Praesent vitae euismod dolor.
      Donec lacinia nisl quis est rutrum mattis. Aliquam eleifend justo eget
      dolor maximus porttitor. Duis bibendum tempus magna, sed fringilla velit
      dapibus sed. Vestibulum tristique condimentum orci, id rhoncus sem
      venenatis at. Cras vel facilisis felis, sit amet euismod nibh. In id magna
      a magna semper vehicula. Morbi sed urna ut lectus blandit ultricies. Nunc
      finibus pharetra sem, ac feugiat libero mollis sed. Vivamus vehicula nisl
      nec congue semper. Etiam venenatis aliquam congue. Nunc non interdum
      turpis, quis vehicula purus. In nisl magna, bibendum eget molestie
      aliquam, porta vel neque. Suspendisse gravida ultricies tellus. Integer
      vel ex massa. Ut mattis tristique tellus et placerat.
    </Box>
  )
}

function Footer() {
  return (
    <Box
      sx={{
        flex: "0 1 auto",
        justifyContent: "flex-end",
      }}
      variant="footer"
    >
      <Divider sx={{ background: "white" }} />
      <p>Text one</p>
    </Box>
  )
}

function Hero() {
  return (
    <Flex sx={{ height: "100vh", background: "teal" }}>
      <p>Hello there</p>
    </Flex>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Box p={0} m={0}>
        {/* <Head /> */}
        <Hero />
        <Flex
          sx={{
            // background: "white",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100vh",
          }}
        >
          <Button sx={{ flex: "0 1 auto" }} mx={[5, 5]}>
            Beep
          </Button>
          <Home />
          <Box sx={{ background: "red", textAlign: "center", mx: [5, 5] }}>
            test
          </Box>
          <Footer />
        </Flex>
      </Box>
    )
  }
}
