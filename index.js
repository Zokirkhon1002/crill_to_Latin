const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({ secret: "my secret key", resave: false, saveUninitialized: false })
);

// handle bars
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

// initialize routes
app.use("/", require("./routes/translate"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
