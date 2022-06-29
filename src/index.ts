import { ErrorsHandler } from './application/errorHandler/ErrorsHandler'
import {
    BadRequestErrorHandler,
    NotFoundErrorHandler,
} from './application/handlers'

export default function errorHandler() {
    return ErrorsHandler.build([
        new BadRequestErrorHandler(),
        new NotFoundErrorHandler(),
    ])
}
