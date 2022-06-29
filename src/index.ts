import { createErrorHandler as ErrorHandler } from './config/CreateErrorHandler'
import { BadRequestError, NotFoundError } from './domain/errors'

export default ErrorHandler

export { BadRequestError, NotFoundError }
