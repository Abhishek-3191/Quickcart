import connectDB from "./config/db.js";
import User from "./models/User.js"; 

async function testInsert() {
    console.log("🔄 Testing User Insert...");

    await connectDB();

    try {
        const user = await User.create({
            _id: "test123",
            email: "test@example.com",
            name: "Test User",
            imageUrl: "https://example.com/test.jpg",
        });

        console.log("✅ Test User Inserted Successfully!", user);
    } catch (error) {
        console.error("❌ Error Inserting User:", error);
    }
}

testInsert();
