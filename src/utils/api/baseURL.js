export const baseURL =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'production'
    ? '/api/v1'
    : 'http://localhost:3001/api/v1';