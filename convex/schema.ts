import { defineSchema, defineTable } from "convex/schema";
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
    userId: v.id("users"), 
  }).index("by_user", ["userId"]),
});
