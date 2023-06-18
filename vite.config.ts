import { defineConfig } from "vite";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: "@",
          replacement: resolve(projectRootDir, "src"),
        },
      ],
    }),
  ],
});
