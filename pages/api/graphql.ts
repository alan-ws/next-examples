import { NextRequest, NextResponse } from "next/server";
import { createSchema, createYoga } from "graphql-yoga";
import { ExecutionContext } from "graphql/execution/execute";

export const config = {
  runtime: "edge",
};

const yoga = createYoga<ExecutionContext>({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String!
      }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello World!",
      },
    },
  }),
});

export default async function handler(req: NextRequest, ctx: ExecutionContext) {
  return await yoga.handleRequest(req, ctx);
}
