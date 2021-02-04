import React, { useState } from 'react'
import "./Contact.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject2, setSubject2] = useState('');
  const [submit, setSubmit] = useState('');
  const [reset, setReset] = useState('');


  function onSubmit(e) {
    setSubmit({
      name: name,
      email: email,
      message: message
    });
    console.log(submit);
  }

  function onReset(e) {
    setReset({
      name: "",
      email: "",
      message: ""
    });
    console.log(reset);
  }



  function handleName(e) {
    const name = `${encodeURIComponent(e.target.value)}`;
    setName(name);
  }

  function handleEmail(e) {
    const email = `${encodeURIComponent(e.target.value)}`
    setEmail(email);
  }

  function handleSubject2(e) {
    const subject2 = `${encodeURIComponent(e.target.value)}`
    setSubject2(subject2);
  }

  function handleMessage(e) {
    const message = `${encodeURIComponent(e.target.value)}`
    setMessage(message);
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} md={8} lg={6}>
        <Paper elevation={0} color="#E2E9F0" className="box">
          <form action={`mailto:examplemail1@gmail.com?cc=${email}&subject=Migr-AI-tion%20Contact%20Page:%20${subject2}&body=(Please%20click%20on%20the%20send%20button)%0d%0a%0d%0aName:%20${name}%0d%0aEmail:%20${email}%0d%0aSubject:%20${subject2}%0d%0aMessage:%20${message}%0d%0a%0d%0aThank%20you%20for%20your%20contribution!`} method="post" encType="text">
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
                  onChange={handleName}
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
                  onChange={handleEmail}
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
                  onChange={handleSubject2}
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
                  onChange={handleMessage}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type='submit' name="submit" value={submit} onClick={onSubmit}>Submit</Button>
                <Button type='reset' name="reset" value={reset} onClick={onReset}>Reset</Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
