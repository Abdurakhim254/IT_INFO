import { Logtail } from "@logtail/node";
import { config } from "dotenv";

config();

const logtail = new Logtail(process.env.LOGGER_TOKEN);

logtail.error("Something bad happened");
logtail.info("Log message with structured data .", {
  item: "Orange Soda",
  price: 100.0,
});


logtail.flush()
