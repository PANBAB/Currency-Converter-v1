import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity="warning"
          variant="filled"
          action={
            <Button
              aria-label="close"
              color="inherit"
              variant="outlined"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </Button>
          }
          sx={{ mb: 2 }}
        >
          The rates are referenced to EUR - Euro.
        </Alert>
      </Collapse>
    </Box>
  );
}
