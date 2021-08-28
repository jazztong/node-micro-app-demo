/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  //file to run before jest start
  setupFilesAfterEnv: ["<rootDir>/src/singleton.ts"],
  reporters: ["default", "jest-junit"],
  collectCoverage: true,
  coverageReporters: ["text", "cobertura"],
};
