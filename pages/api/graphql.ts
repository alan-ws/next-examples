import { NextRequest } from "next/server";
import { createSchema, createYoga } from "graphql-yoga";
import { ExecutionContext } from "graphql/execution/execute";
import { nanoid } from "nanoid";

export const config = {
  runtime: "edge",
};

const yoga = createYoga<ExecutionContext>({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        todos: TodoList
        todo(id: ID!, name: String!): TodoItem
      }

      type Mutation {
        addTodo(value: String!): TodoItem
        deleteTodo(id: ID!, name: String!): Boolean
      }

      type TodoList {
        results: [TodoItem]
      }

      type TodoItem {
        name: String
        value: String
      }
    `,
    resolvers: {
      Query: {
        todos: async () => {
          const res = await fetch(`${process.env.KV_REST_API_URL}/smembers`, {
            headers: {
              Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
            },
          });
          const data = await res.json();
          return {
            results: data,
          };
        },
        todo: async (_, { name }) => ({ name }),
      },
      // TodoItem: {
      //   value: async ({ name }: any, _, __) => {
      //     const res = await fetch(
      //       `${process.env.KV_REST_API_URL}/smembers/${name}`,
      //       {
      //         headers: {
      //           Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      //         },
      //       }
      //     );
      //     const data: { result: [] } = await res.json();
      //     console.log(data);
      //     const result = data.result.find((r) => r === "".substring(0, 16));
      //     return {
      //       name: result,
      //     };
      //   },
      // },
      Mutation: {
        addTodo: async (_, { value }, __) => {
          const id = nanoid(16);
          await fetch(
            `${process.env.KV_REST_API_URL}/sadd/${id}:todos/${value}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
              },
            }
          );

          return {
            name: id,
            value,
          };
        },
        deleteTodo: async (_, { id, name }, __) => {
          await fetch(
            `${process.env.KV_REST_API_URL}/srem/${id}:todos/${name}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
              },
            }
          );
        },
      },
    },
  }),
});

export default async function handler(req: NextRequest, ctx: ExecutionContext) {
  return await yoga.handleRequest(req, ctx);
}
