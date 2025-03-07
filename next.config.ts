const { truncate } = require('node:fs')
import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    basePath: "/Portfolio",
    output: "export",  // <=== enables static exports
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}


export default nextConfig
