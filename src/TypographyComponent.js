import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define your custom theme using createTheme
const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif", // Change the default font-family
    h1: {
      fontSize: "2.5rem", // Increase the font size for h1
      fontWeight: 700, // Increase the font weight for h1
    },
    h2: {
      fontSize: "2rem", // Customize h2 font size
    },
    body1: {
      fontSize: "1rem", // Customize body text font size
      lineHeight: 1.5, // Adjust line-height for better readability
    },
  },
  palette: {
    primary: {
      main: "#007bff", // Change the primary color
    },
    secondary: {
      main: "#ff5722", // Change the secondary color
    },
  },
});

// Define a custom theme with responsive typography
const resTheme = createTheme({
  typography: {
    h1: {
      fontSize: "2.5rem", // Default font size
      fontWeight: 700, // Default font weight
    },
    body1: {
      fontSize: "1rem", // Default font size
    },
    // Define responsive typography
    [theme.breakpoints.up("sm")]: {
      h1: {
        fontSize: "3rem", // Larger font size for screens >= 600px width
      },
      body1: {
        fontSize: "1.25rem", // Larger font size for screens >= 600px width
      },
    },
    [theme.breakpoints.up("md")]: {
      h1: {
        fontSize: "4rem", // Even larger font size for screens >= 960px width
      },
      body1: {
        fontSize: "1.5rem", // Even larger font size for screens >= 960px width
      },
    },
  },
});

const TypographyComponent = () => {
  return (
    <div>
      <Container>
        <Typography variant="h1" gutterBottom>
          Heading 1
        </Typography>
        <Typography variant="h2" gutterBottom>
          Heading 2
        </Typography>
        <Typography variant="h3" gutterBottom>
          Heading 3
        </Typography>
        <Typography variant="h4" gutterBottom>
          Heading 4
        </Typography>
        <Typography variant="h5" gutterBottom>
          Heading 5
        </Typography>
        <Typography variant="h6" gutterBottom>
          Heading 6
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Subtitle 1: A smaller heading
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Subtitle 2: An even smaller heading
        </Typography>
        <Typography variant="body1" paragraph>
          Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique.
        </Typography>
        <Typography variant="body2" paragraph>
          Body 2: Integer blandit urna nec nisi dapibus, non fermentum arcu
          vulputate.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          Button Text
        </Typography>
        <Typography variant="caption" display="block">
          Caption: A small text to describe something.
        </Typography>
        <Typography variant="overline" display="block">
          Overline: A decorative line of text.
        </Typography>
      </Container>
      <hr />
      <ThemeProvider theme={theme}>
        <Container>
          <Typography variant="h1" gutterBottom>
            Customized Heading 1
          </Typography>
          <Typography variant="h2" gutterBottom>
            Customized Heading 2
          </Typography>
          <Typography variant="body1" paragraph>
            This is a customized body text with a different font size and
            line-height.
          </Typography>
          <Typography variant="body1" color="primary">
            This text is in a custom primary color.
          </Typography>
          <Typography variant="body1" color="secondary">
            This text is in a custom secondary color.
          </Typography>
        </Container>
      </ThemeProvider>
      <hr />
      <ThemeProvider theme={resTheme}>
        <Container>
          <Typography variant="h1" gutterBottom>
            Responsive Heading 1
          </Typography>
          <Typography variant="body1" paragraph>
            This is a responsive body text that adjusts its size based on screen
            width.
          </Typography>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default TypographyComponent;
