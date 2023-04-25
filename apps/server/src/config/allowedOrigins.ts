/* eslint-disable import/no-extraneous-dependencies */
import cors from 'cors'

export const allowedOrigins = ['http://localhost:3000']

export const options: cors.CorsOptions = {
  origin: allowedOrigins,
}
