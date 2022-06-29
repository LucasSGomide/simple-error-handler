import { createErrorHandler } from './config/CreateErrorHandler'
import { BadRequestError, NotFoundError } from './domain/errors'

const ErrorHandler = createErrorHandler()

export { ErrorHandler, BadRequestError, NotFoundError }
