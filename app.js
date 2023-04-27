const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const options = {
    root: path.join(__dirname)
};
app.get("/", (req, res) => res.type("html").send(html));
app.get("/arduino.json", (req, res) => res.sendFile("./arduino.json", options, function (err) {
    if (err) {
        next(err);
    } else {
        console.log('Sent:', "arduino.json");
    }
}));
app.get("/app.json", (req, res) => res.sendFile("./app.json", options, function (err) {
    if (err) {
        next(err);
    } else {
        console.log('Sent:', "app.json");
    }
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`