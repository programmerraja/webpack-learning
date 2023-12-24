import webpack from "webpack";
const config = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },

  optimization: {
    minimize: true,
    usedExports: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      NICE_FEATURE: JSON.stringify(false ),
      EXPERIMENTAL_FEATURE: JSON.stringify(false),
    }),
  ],
};

export default config;
