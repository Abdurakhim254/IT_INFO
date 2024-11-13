import {createLogger,format,transports} from "winston"
import "winston-mongodb"
import { Logtail } from "@logtail/node"
import { LogtailTransport } from "@logtail/winston"
import {config} from "dotenv"

config()

const logtail=new Logtail(process.env.LOGGER_TOKEN)

export const logger=createLogger({
    level:'error',
    format:format.combine(
        format.timestamp(),
        format.json(),
        format.colorize({all:true})
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename:'application.log'}),
        new LogtailTransport(logtail),
        new transports.MongoDB({
            level:'error',
            db:'mongodb://localhost:27017/test',
            collection:'error_logs',
            // options:{useUnifiedTopology:true}
        })
    ]
})    



























// logger.error("This is an error message")
// logger.warn("This is a warning message")
// logger.info("This is an info message")
// logger.verbose("This is a verbose  message")
// logger.debug("This is a debug message")
// logger.silly("This is a silly message")