module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        // '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    },
    // testEnvironment: "node",
    // extensionsToTreatAsEsm: [".js", ".mjs"],
    // testEnvironment: 'jsdom',
    testEnvironment: 'jsdom',
    setupFiles: ['./setup.js'],

    // for code coverage
    collectCoverage: true,
    collectCoverageFrom: ["components/**/*.{js}"],
    coverageThreshold: {
        global: {
            lines: 80
        }
    }


};
