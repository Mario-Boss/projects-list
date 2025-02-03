/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        dataSource: 'local', // posible values: "local", "express"
        expressAPIsource: "http://localhost:3003/api" // when using "express" value above, please run command "npm run server" in separated terminal to start express.js server
    }
};

export default nextConfig;
