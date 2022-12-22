const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const port = 3000;
const path = require("path");

nunjucks.express(app);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.listen(port, () => {
	console.log(`Listening on 0.0.0.0:${port}`);
});
