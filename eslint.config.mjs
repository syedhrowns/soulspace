import { defineConfig } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
  {
    ignores: [
      ".next/**",
      ".next-dev/**",
      "node_modules/**",
      "dist/**",
      "out/**",
      "vite.config.ts",
    ],
  },
  {
    extends: [...next],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]);
