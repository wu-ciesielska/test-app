import request from 'supertest';
import app from '../src/app';

describe('App Endpoints', () => {
  it('GET / should return Hello world!', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200);

    expect(response.text).toEqual('Hello world!');
  });
});