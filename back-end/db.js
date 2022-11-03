const { connect } = require("mongoose");

require("dotenv").config();
const uri = process.env.MONGO_URL || "";

const connectMongo = async () => {
    const connection = await connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopolofy: true,
    })
    console.log(`Mongo connection is successfully`);
}

module.exports = connectMongo;