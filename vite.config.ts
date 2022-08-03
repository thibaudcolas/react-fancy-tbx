import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, `src/lib/${pkg.name}.ts`),
      formats: ["es", "cjs"],
      // formats: ['es', 'umd',],
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        // ...Object.keys(pkg.peerDependencies),
        "react/jsx-runtime",
      ],
      output: {
        globals: {
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});
