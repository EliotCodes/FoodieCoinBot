const winston = require('winston');
const path = require('path');
const fs = require('fs').promises;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(__dirname, '../logs/error.log'), level: 'error' }),
    new winston.transports.File({ filename: path.join(__dirname, '../logs/combined.log') })
  ],
});


async function createLogDirectory(){
  try {
    await fs.access(path.join(__dirname, '../logs'));
  } catch (error) {
    await fs.mkdir(path.join(__dirname, '../logs'));
  }

}

createLogDirectory();







module.exports = { logger };