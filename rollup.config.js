import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: 'index.css', // Extract CSS to a separate file
        modules: false,
        use: ['sass'],
        minimize: true,
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
        input: "src/index.ts", // Point to your main source file
    output: [{ file: packageJson.types, format: "esm" }], // Use the types entry from package.json
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];