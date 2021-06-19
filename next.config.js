module.exports = {
  env: {
    BASE_URL: "http://localhost:3005/backend5/api/v1",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/signup",
        destination: "/auth/signup",
      },
    ];
  },
};
