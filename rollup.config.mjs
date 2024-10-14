// rollup.config.mjs
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

export default [
  // JavaScript Bundling Configuration
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main, // "dist/cjs/index.js"
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module, // "dist/esm/index.js"
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true, // Ensures declarations are placed correctly
      }),
    ],
    external: ['react', 'react-dom'],
  },
  // Declaration Files Configuration
  // {
  //   input: "dist/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],
  // },
];
