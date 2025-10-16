import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        base: "./",
        build: {
            outDir: "build",
        },
        css: {
            postcss: {
                plugins: [
                    autoprefixer({}), // add options if needed
                ],
            },
        },
        plugins: [react()],
        resolve: {
            alias: [
                {
                    find: "src/",
                    replacement: `${path.resolve(__dirname, "src")}/`,
                },
                {
                    find: "@",
                    replacement: path.resolve(__dirname, "src"),
                },
                {
                    find: "@api",
                    replacement: path.resolve(__dirname, "src/api"),
                },
                {
                    find: "@hooks",
                    replacement: path.resolve(__dirname, "src/hooks"),
                },
                {
                    find: "@components",
                    replacement: path.resolve(__dirname, "src/components"),
                },
                {
                    find: "@layout",
                    replacement: path.resolve(__dirname, "src/layout"),
                },
                {
                    find: "@scss",
                    replacement: path.resolve(__dirname, "src/scss"),
                },
                {
                    find: "@views",
                    replacement: path.resolve(__dirname, "src/views"),
                },
            ],
            extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".scss"],
        },
        server: {
            port: 3000,
            host: true,
            open: false,
            proxy: {
                // https://vitejs.dev/config/server-options.html
            },
        },
    }
})
