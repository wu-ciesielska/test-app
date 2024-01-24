import request from 'supertest';
import app from '../src/app';

describe('Dogs API', () => {
    it('GET /dogs - should return all dogs', async () => {
      const response = await request(app).get('/dogs').expect(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  
    it('POST /dogs - should create a new dog', async () => {
      const newDog = { name: 'Dash', breed: 'Corgi', age: 6, favoriteToy: 'Frisbee' };
      const response = await request(app).post('/dogs').send(newDog).expect(201);
      expect(response.body).toMatchObject(newDog);
    });
  
    it('GET /dogs/:id - should return a dog by id', async () => {
      const response = await request(app).get('/dogs/1').expect(200);
      expect(response.body.id).toBe(1);
    });
  
    it('PUT /dogs/:id - should update a dog', async () => {
      const updatedInfo = { age: 4 };
      const response = await request(app).put('/dogs/1').send(updatedInfo).expect(200);
      expect(response.body.age).toBe(4);
    });
  
    it('DELETE /dogs/:id - should delete a dog', async () => {
      await request(app).delete('/dogs/1').expect(204);
      await request(app).get('/dogs/1').expect(404);
    });
  });