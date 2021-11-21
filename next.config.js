/** @type {import('next').NextConfig} */
const { withKeystone } = require("@keystone-next/keystone/next");
module.exports = withKeystone({
  reacStrictMode: true,
});