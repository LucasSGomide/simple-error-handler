import { Response } from 'express'

export function getResponseMock() {
    const res: Partial<Response> = {
        set: jest.fn(),
        status: jest.fn((code: number) => res as Response),
        json: jest.fn(),
        send: jest.fn(),
    }

    return res as Response
}
