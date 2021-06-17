module.exports = {
  reactStrictMode: true,
};
module.exports = {
  env: {
    APP_NAME: "Express Coffee",
    BASE_URL: "http://localhost:3003/api/v1",
  },
  async rewrites() {
    return [
      // Jadi kalau akses halaman login cukup pakai /login
      {
        source: "/signup", // pengganti path pada react js
        destination: "/auth/signup", // lokasi path
      },
    ];
  },
};
