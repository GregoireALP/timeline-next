/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    host: "localhost",
    port: 3306,
    database: "timeline",
    user: "root",
    password: "",
    cookie: {
      secret: "2tZChI8yRAIqUZH6"
    },
  },
  publicRuntimeConfig: {
    host: "localhost:3000",
  }
}
