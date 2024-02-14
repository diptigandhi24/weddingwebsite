"use client";
import Box from "@mui/material/Box";
import { useCallback } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Zoom from "@mui/material/Zoom";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { withStyles } from "@mui/material";

const styles = withStyles({
  root: {
    visibility: "visibile",
  },
});

function ScrollToTopFab() {
  // Use `window` instead of `body` as `document` will be `undefined` when the
  // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
  const trigger = useScrollTrigger({
    threshold: 100,
  });
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const classes = styles();
  return (
    <Zoom in={trigger} className={classes.root}>
      <Box
        role="presentation"
        // Place the button in the bottom right corner.
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 100,
          border: "1px solid black",
          backgroundColor: "red",
          visibility: "visibile",
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  );
}
export default ScrollToTopFab;
