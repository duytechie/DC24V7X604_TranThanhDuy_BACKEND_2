import "dotenv/config";
import app from "./app.js";
import config from "./app/config/index.js";
import MongoDB from "./app/utils/mongodb.utils.js";

async function startServer() {
  try {
    await MongoDB.connect(config.db.url);
    console.log("Connected to the database!");
    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit();
  }
}

startServer();
