const request = require('supertest');
const app = require('../app');
const dbHandler = require('./setup');
const User = require('../models/user');

describe('User API', () => {
    beforeAll(async () => await dbHandler.connect());
    afterEach(async () => await dbHandler.clearDatabase());
    afterAll(async () => await dbHandler.closeDatabase());

    describe('POST /api/users/register', () => {
        it('should create a new user', async () => {
            const userData = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            };

            const response = await request(app)
                .post('/api/users/register')
                .send(userData);

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('status', 'success');
            expect(response.body.data).toHaveProperty('username', userData.username);
            expect(response.body.data).toHaveProperty('email', userData.email);
            expect(response.body.data).not.toHaveProperty('password');
        });

        it('should not create user with invalid data', async () => {
            const userData = {
                username: 'te',
                email: 'invalid-email',
                password: 'pass'
            };

            const response = await request(app)
                .post('/api/users/register')
                .send(userData);

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('status', 'error');
            expect(response.body).toHaveProperty('errors');
        });
    });

    describe('POST /api/users/login', () => {
        it('should login existing user', async () => {
            // Create a user first
            const user = new User({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            });
            await user.save();

            const loginData = {
                email: 'test@example.com',
                password: 'password123'
            };

            const response = await request(app)
                .post('/api/users/login')
                .send(loginData);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('status', 'success');
            expect(response.body).toHaveProperty('token');
        });

        it('should not login with wrong credentials', async () => {
            const loginData = {
                email: 'test@example.com',
                password: 'wrongpassword'
            };

            const response = await request(app)
                .post('/api/users/login')
                .send(loginData);

            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('status', 'error');
        });
    });
});