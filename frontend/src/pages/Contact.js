import "./Contact.css";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Contact() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} md={8} lg={6}>
        <Paper elevation={0} color="#E2E9F0" className="box">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="subject"
                name="subject"
                label="Subject"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="message"
                name="message"
                label="Message"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="outlined">Send</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}