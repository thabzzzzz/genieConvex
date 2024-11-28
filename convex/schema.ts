import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    password: v.string(), 
    name: v.string(),
  }).index("by_email", ["email"]),
  
  items: defineTable({
    title: v.string(),
    description: v.string(),
    userId: v.id("users"), // Reference to users table
  }).index("by_user", ["userId"]),
});
