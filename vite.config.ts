import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { repoName } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
    strictPort: true,
  },
  base: `/${repoName}/`,
  plugins: [reactRefresh()],
});
