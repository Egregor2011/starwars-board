import '@testing-library/jest-dom';
import server from '../mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
beforeEach(() => server.resetHandlers());

//  Close server after all tests
afterAll(() => server.close());
