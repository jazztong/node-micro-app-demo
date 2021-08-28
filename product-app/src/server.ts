// server.ts
import app from "./app";

const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
