import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	base: "/project-philosophy-web/",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	}
	// build: {
	//     watch: {
	//         // https://rollupjs.org/configuration-options/#watch
	//     },
	// },
});
