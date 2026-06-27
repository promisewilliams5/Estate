
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

export default function ContactSection() {
  return (
    <Box
      sx={{
        py: 12,
        background: "#f8fafc",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          textAlign="center"
          mb={4}
          fontWeight="bold"
          sx={{ color: "#0f172a" }}
        >
          Contact Us
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
          }}
        >
          <TextField fullWidth label="Full Name" margin="normal" />

          <TextField fullWidth label="Email Address" margin="normal" />

          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            margin="normal"
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              py: 1.5,
              background: "#2563eb",
              fontWeight: "bold",
              borderRadius: 2,
              textTransform: "none",
              "&:hover": {
                background: "#1d4ed8",
              },
            }}
          >
            Send Message
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}