const config = {
  server: {
    baseUrl: process.env.REACT_APP_SERVER_URL || 'http://localhost:8080',
    api: {
      v1: '/api/v1',
    },
  },
};

export default config;
