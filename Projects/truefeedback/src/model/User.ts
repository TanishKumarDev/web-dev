import mongoose, { Schema, Document } from "mongoose";

// Interface defining the shape of a Message document
export interface Message extends Document {
    content: string;
    createdAt: Date;
}

// Mongoose schema for the Message model
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true // Message content is required
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically sets the timestamp on creation
        required: true
    }
});

// Interface defining the shape of a User document
export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpire: Date;
    isVarified: boolean;
    isAcceptingMessage: boolean;
    createdAt: Date;
    messages: Message[]; // Array of Message documents
}

// Mongoose schema for the User model
const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures email uniqueness.
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // More reliable for standard email formats

    },
    password: {
        type: String,
        required: true
    },
    verifyCode: {
        type: String,
        required: true
    },
    verifyCodeExpire: {
        type: Date,
        required: true
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    isVarified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    messages: {
        type: [MessageSchema], // Embeds Message documents within User
        default: []
    }
});

// Export models
export const MessageModel = mongoose.models.Message || mongoose.model<Message>("Message", MessageSchema);
export const UserModel = mongoose.models.User || mongoose.model<User>("User", UserSchema);

// ─────────────────────────────────────────────────────────────
// Next.js Import & Runtime Notes
// 
// 1. Imports run on both server and client based on usage context.
// 2. Static imports (at top) are resolved at build time.
// 3. Dynamic imports (inside functions) allow conditional or client-only loading.
//
// Edge Case:
// Next.js does not inherently know if the user is visiting for the first time 
// or if the app is already running. Each request is stateless by default.
//
// Solution:
// Use cookies, headers, or session logic to track returning users or first-time visits.
//
// Example:
// const isFirstTime = !req.cookies.userVisit;
// ─────────────────────────────────────────────────────────────
