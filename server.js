const express = require("express");
const PORT = 3000;
const app = express();
//
const passport = require("passport");
const passportHttp = require("passport-http");
passport.use(new passportHttp.BasicStrategy(
    function (username, password, done) {
      if(username=="user" && password=="pass"){
        return done(null,true);
      }else{
        return done(null, false);
      }
    }
));
app.use("/admin", passport.authenticate("basic",{session: false}), express.static("public/admin") );
//
app.use("/", express.static("public/") );

app.listen(PORT, () => {
  console.log("app listening on port " + PORT + " " + new Date());
});


