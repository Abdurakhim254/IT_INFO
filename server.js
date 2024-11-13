import app from "./src/app.js"
import { connectMongodb } from "./src/Db/index.js";
import { logger } from "./src/utils/index.js"

const startapp = async () => {
  try {
    await connectMongodb()
    app.listen(3000, () => {
      logger.info(`Server started on port  ${3000}`);
    });
  } catch (error) {
    logger.error(error.message)
  }
}

startapp()