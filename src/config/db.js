const mongoose = require("mongoose");

const connectDB = async () => {
    // console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI); // Debugging step
    if (!process.env.MONGO_URI) {
        console.error("❌ MONGO_URI is not defined. Check your .env file.");
        process.exit(1);
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected...");
    } catch (err) {
        console.error("❌ Error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
