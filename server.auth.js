const express = require("express");
const basicAuth = require("express-basic-auth");
const PORT = 3000;
const app = express();
//
app.use("/admin", basicAuth({
    users: { 'user': 'pass' },
    challenge: true,
}), express.static("public/admin"));
//
app.use("/", express.static("public/") );
app.listen(PORT, () => {
  console.log("app listening on port " + PORT + " " + new Date());
});


