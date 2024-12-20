import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const login = mutation({
  args: { 
    email: v.string(), 
    password: v.string() 
  },
  handler: async (ctx, { email, password }) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), email))
      .first();

    if (!user || user.password !== password) { 
      throw new Error("Invalid credentials");
    }

    return user;
  },
});

export const register = mutation({
  args: {
    email: v.string(),
    password: v.string(),
    name: v.string(),
  },
  handler: async (ctx, { email, password, name }) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), email))
      .first();

    if (existingUser) {
      throw new Error("User already exists");
    }

    const userId = await ctx.db.insert("users", {
      email,
      password, 
      name,
    });

    return { userId };
  },
});
export const getUser = query({
    args: { userId: v.id("users") },
    handler: async (ctx, { userId }) => {
      const user = await ctx.db.get(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return {
        _id: user._id,
        name: user.name,
        email: user.email
      };
    },
  });
