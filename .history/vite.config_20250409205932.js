import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration
export default defineConfig({
	base: "/myapp/", // Ensure the base path is correct
	plugins: [react()],
});
