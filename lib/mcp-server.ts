import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export function createPersonMcpServer() {
  const server = new McpServer({
    name: "person-crud-mcp",
    version: "1.0.0",
  });

  // ─── List all persons ───────────────────────────────────────────────
  server.tool(
    "list_persons",
    "List all persons in the database. Returns an array of person records.",
    {},
    async () => {
      const persons = await prisma.person.findMany({
        orderBy: { createdAt: "desc" },
      });
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(persons, null, 2),
          },
        ],
      };
    }
  );

  // ─── Get a single person ────────────────────────────────────────────
  server.tool(
    "get_person",
    "Get a single person by their ID.",
    { id: z.string().describe("The unique ID of the person") },
    async ({ id }) => {
      const person = await prisma.person.findUnique({ where: { id } });
      if (!person) {
        return {
          content: [{ type: "text" as const, text: "Person not found." }],
          isError: true,
        };
      }
      return {
        content: [
          { type: "text" as const, text: JSON.stringify(person, null, 2) },
        ],
      };
    }
  );

  // ─── Create a person ───────────────────────────────────────────────
  server.tool(
    "create_person",
    "Create a new person record. firstName, lastName, and email are required.",
    {
      firstName: z.string().describe("First name of the person"),
      lastName: z.string().describe("Last name of the person"),
      email: z.string().email().describe("Email address (must be unique)"),
      phone: z.string().optional().describe("Phone number (optional)"),
      age: z.number().int().min(1).max(120).optional().describe("Age (optional)"),
    },
    async ({ firstName, lastName, email, phone, age }) => {
      try {
        const person = await prisma.person.create({
          data: { firstName, lastName, email, phone: phone ?? null, age: age ?? null },
        });
        return {
          content: [
            {
              type: "text" as const,
              text: `Person created successfully:\n${JSON.stringify(person, null, 2)}`,
            },
          ],
        };
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        return {
          content: [{ type: "text" as const, text: `Error creating person: ${msg}` }],
          isError: true,
        };
      }
    }
  );

  // ─── Update a person ───────────────────────────────────────────────
  server.tool(
    "update_person",
    "Update an existing person by ID. Only provided fields will be changed.",
    {
      id: z.string().describe("The unique ID of the person to update"),
      firstName: z.string().optional().describe("New first name"),
      lastName: z.string().optional().describe("New last name"),
      email: z.string().email().optional().describe("New email address"),
      phone: z.string().optional().describe("New phone number"),
      age: z.number().int().min(1).max(120).optional().describe("New age"),
    },
    async ({ id, firstName, lastName, email, phone, age }) => {
      try {
        const person = await prisma.person.update({
          where: { id },
          data: {
            ...(firstName !== undefined && { firstName }),
            ...(lastName !== undefined && { lastName }),
            ...(email !== undefined && { email }),
            ...(phone !== undefined && { phone }),
            ...(age !== undefined && { age }),
          },
        });
        return {
          content: [
            {
              type: "text" as const,
              text: `Person updated successfully:\n${JSON.stringify(person, null, 2)}`,
            },
          ],
        };
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        return {
          content: [{ type: "text" as const, text: `Error updating person: ${msg}` }],
          isError: true,
        };
      }
    }
  );

  // ─── Delete a person ───────────────────────────────────────────────
  server.tool(
    "delete_person",
    "Delete a person by ID. This action cannot be undone.",
    { id: z.string().describe("The unique ID of the person to delete") },
    async ({ id }) => {
      try {
        await prisma.person.delete({ where: { id } });
        return {
          content: [
            { type: "text" as const, text: `Person ${id} deleted successfully.` },
          ],
        };
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        return {
          content: [{ type: "text" as const, text: `Error deleting person: ${msg}` }],
          isError: true,
        };
      }
    }
  );

  // ─── Search persons ────────────────────────────────────────────────
  server.tool(
    "search_persons",
    "Search persons by first name, last name, or email. Case-insensitive partial match.",
    { query: z.string().describe("Search query (matches name or email)") },
    async ({ query }) => {
      const persons = await prisma.person.findMany({
        where: {
          OR: [
            { firstName: { contains: query, mode: "insensitive" } },
            { lastName: { contains: query, mode: "insensitive" } },
            { email: { contains: query, mode: "insensitive" } },
          ],
        },
        orderBy: { createdAt: "desc" },
      });
      return {
        content: [
          {
            type: "text" as const,
            text:
              persons.length > 0
                ? JSON.stringify(persons, null, 2)
                : "No persons found matching the query.",
          },
        ],
      };
    }
  );

  return server;
}
