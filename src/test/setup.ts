import '@testing-library/jest-dom';
import server from '../mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());
