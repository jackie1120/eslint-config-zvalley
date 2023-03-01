module.exports = {
  rules: {
    eqeqeq: "error",
    quotes: ["error", "double", { "avoidEscape": true }],
    semi: ["error", "always"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}