const { truncate } = require('node:fs')

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Portfolio",
    assetPrefix: "/Portfolio/public/",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
}

module.exports = {
    eslint: {
        ignoreDuringBuilds: true
    },    
    nextConfig
}
