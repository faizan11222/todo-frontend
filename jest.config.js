module.exports = {
  testMatch: [
    "**/src/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios).+\\.js$",
    "<rootDir>/node_modules/",
  ],
  extensionsToTreatAsEsm: [".js", ".jsx"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/build/", "/dist/", "/public/"],
};
