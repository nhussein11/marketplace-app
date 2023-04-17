import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const listingsRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ listingId: z.string() }))
    .query(async ({ input, ctx }) => {
      return await ctx.prisma.listing.findUnique({
        where: {
          id: input.listingId,
        },
      });
    }),
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.listing.findMany({
      where: {
        userId: ctx.auth.userId,
      },
    });
  }),
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const listing = await ctx.prisma.listing.create({
        data: {
          ...input,
          userId: ctx.auth.userId,
        },
      });

      return listing;
    }),
  sendMessage: protectedProcedure
    .input(
      z.object({ message: z.string(), listingId: z.string() })
    )
    .mutation(async ({ input, ctx }) => {
      const message = await ctx.prisma.message.create({
        data: {
          message: input.message,
          listingId: input.listingId,
          fromUser: ctx.auth.userId,
          fromUserName: ctx.auth.user?.username ?? "Unknown",
        },
      });

      if (!message) {
        throw new Error("Cannot send message!");
      }

      return message;
  })
})
