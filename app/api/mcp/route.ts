import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { createPersonMcpServer } from "@/lib/mcp-server";

async function handler(req: Request) {
  const server = createPersonMcpServer();

  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  await server.connect(transport);

  return transport.handleRequest(req);
}

export { handler as GET, handler as POST, handler as DELETE };
