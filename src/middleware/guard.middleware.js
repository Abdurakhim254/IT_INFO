import { logger } from "../utils/winston.js";

export const roleGuard = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    console.log(userRole)
    if (roles.includes(userRole)) {
      next()
    } else {
      logger.error("Permission Denied")
      res.status(403).send("Permission Denied");
    }
  };
};  