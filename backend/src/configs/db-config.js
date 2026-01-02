const mongoose = require("mongoose");
const { DB_URL } = require("./server.config.js");

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("successfully connected to DB ✅");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;