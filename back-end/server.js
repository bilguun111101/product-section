const app = require("./app");
const connectMongo = require("./db");
const port = process.env.PORT || 5000;

require("dotenv").config();

connectMongo();

app.listen(port, () => {
    console.log(`server is Listening you on http://localhost:${port}`);
})