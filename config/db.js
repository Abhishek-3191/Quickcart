// import mongoose from "mongoose";

// let cached=global.mongoose

// if(!cached){
//     cached=global.mongoose={conn:null, promise:null}
// }

// async function connectDB() {
//     if(cached.conn){
//         return cached.conn
//     }
//     if(!cached.promise){
//         const opts={
//             bufferCommands:false
//         }
//         // cached.promise=mongoose.connect(`${process.env.MONGODB_URI}/quickcart`,opts).then(mongoose=>{
//         //     return mongoose
//         // })
//         cached.promise=mongoose.connect(process.env.MONGODB_URI,opts).then(mongoose=>{
//                 return mongoose
//             })
//     }
//     cached.conn=await cached.promise
//     return cached.conn
// }

// export default connectDB
import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log("⚡ Already connected to MongoDB");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    console.log("🔄 Connecting to MongoDB...");

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("✅ MongoDB Connected!");
        return mongoose;
      })
      .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err.message);
        throw err; // Ensure the error propagates
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
