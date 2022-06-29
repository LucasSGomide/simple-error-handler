import { createErrorHandler } from './config/CreateErrorHandler'
import { BadRequestError, NotFoundError } from './domain/errors'

export default createErrorHandler()

export { BadRequestError, NotFoundError }
