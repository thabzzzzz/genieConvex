import { query } from "./_generated/server";

export const listItems = query({
  handler: async (ctx) => {
    return await ctx.db.query("items").collect();
  },
});
