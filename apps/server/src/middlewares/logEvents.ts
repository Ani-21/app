import { RequestHandler } from 'express'

import { format } from 'date-fns'

import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

export const logEvent = async (message: string, logName: string) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
  const logItem = `${dateTime}\n${message}`
  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
    }

    await fsPromises.appendFile(
      path.join(__dirname, '..', 'logs', logName),
      logItem,
    )
  } catch (err) {
    throw new Error('Failed to write the event')
  }
}

export const logger: RequestHandler = (req, res, next) => {
  logEvent(`${req.method}\t${req.headers?.origin}\t${req.url}`, 'reqLog.txt')
  next()
}
