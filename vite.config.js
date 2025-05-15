import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/jenncrypted.github.io/",
    css: {
        module: {
            localConvention: "camelCase",
        },
    },
});
