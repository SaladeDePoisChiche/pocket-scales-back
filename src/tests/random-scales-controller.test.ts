import request from 'supertest';
import { server } from './jest.setup'

import { describe } from 'node:test';

describe('GET Random Scales Controller', () => {

    it('should be up and running', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200);
    })

    it('should get a random scale',  async () => {
        const res = await request(server).get('/random');
        expect(res.status).toBe(200);
    })

    it('should validate answer', async () =>  {
        const answerItem = {tonic: "C", scale: ["C", "D", "E", "F", "G", "A", "B"]};
        const res = await request(server).post('/answer').send(answerItem);
        expect(res.status).toBe(200);
    })

    it('should notify wrong answer', async () =>  {
        const answerItem = {tonic: "C", scale: ["C", "#D", "E", "F", "G", "A", "B"]};
        const res = await request(server).post('/answer').send(answerItem);
        expect(res.status).toBe(200);
    })

})