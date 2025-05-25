// src/lib/dbConnect.ts

import mongoose from "mongoose";

// Type defining the connection state object
type ConnectionObject = {
  isConnected: number;
};

// Global connection object to track mongoose connection status
const connection: ConnectionObject = {
  isConnected: 0,
};

// Async function to connect to MongoDB
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    // Connect to MongoDB using connection string from environment variable
    const db = await mongoose.connect(process.env.MONGODB_URI || ``, {});

    // Fix: mongoose connection readyState is a number, accessed via db.connection.readyState (not db.connection[0].readyState)
    connection.isConnected = db.connection.readyState;

    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process with failure code
  }
}

export default dbConnect;
