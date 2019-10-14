const request = require('supertest');
const server = require('../../../api/server.js');

describe('the server', () => {
    describe('GET /', () => {
        it('should run the testing env', () => {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
});

