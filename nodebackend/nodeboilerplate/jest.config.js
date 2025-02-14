module.exports = {
    testEnvironment: 'node',
    verbose: true,
    coverageDirectory: 'coverage',
    collectCoverage: true,
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    testPathIgnorePatterns: ['/node_modules/'],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70
        }
    }
};