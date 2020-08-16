// example theme
import { deep } from "@theme-ui/presets"

export default {
  ...deep,
  colors: {
    ...deep.colors,
    primary: "red",
  },
  styles: {
    ...deep.styles,
    root: {
      margin: 0,
      padding: 0,
    },
    p: {
      fontSize: 18,
      textAlign: "right",
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    ...deep.buttons,
    primary: {
      color: "black",
      bg: "yellow",
      "&:hover": {
        bg: "green",
      },
    },
  },
  footer: {
    textAlign: "center",
    // color: "textMuted",
    // px: [2, 3],
    // py: [3, 3],
  },
}

// export default {
//   colors: {
//     text: "#000",
//     primary: "green",
//     background: "#fff",
//   },
// footer: {
//   textAlign: `center`,
//   display: `block`,
//   position: `absolute`,
//   bottom: 0,
//   color: `textMuted`,
//   px: [2, 3],
// py: [3, 4],
// },
// }
