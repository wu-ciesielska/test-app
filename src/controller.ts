import express, { Request, Response } from 'express';

let dogs = [
    { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 3, favoriteToy: 'Ball' },
    { id: 2, name: 'Goldie', breed: 'Labrador', age: 4, favoriteToy: 'Plush Chicken' },
    { id: 3, name: 'Cloud', breed: 'Samoyed', age: 1, favoriteToy: 'Bone' },
];
  
// GET all dogs
const getDogs = async (req: Request, res: Response) => {
    res.status(200).json(dogs);
};

// GET a dog by id
const getDogById = async (req: Request, res: Response) => {
    const dog = dogs.find(d => d.id === parseInt(req.params.id));
    if (dog) {
      res.status(200).json(dog);
    } else {
      res.status(404).send('Dog not found');
    }
} ;

//POST a new dog
const addDog = async (req: Request, res: Response) => {
    const newDog = { id: Date.now(), ...req.body };
    dogs.push(newDog);
    res.status(201).json(newDog);
};



// PUT to update a dog
const updateDog = async (req: Request, res: Response) => {
    const index = dogs.findIndex(d => d.id === parseInt(req.params.id));
    if (index >= 0) {
      const updatedDog = { ...dogs[index], ...req.body };
      dogs[index] = updatedDog;
      res.status(200).json(updatedDog);
    } else {
      res.status(404).send('Dog not found');
    }
};

// DELETE a dog
const deleteDog = async (req: Request, res: Response) => {
    const index = dogs.findIndex(d => d.id === parseInt(req.params.id));
    if (index >= 0) {
      dogs = dogs.filter(d => d.id !== parseInt(req.params.id));
      res.status(204).send("Deleted");
    } else {
      res.status(404).send('Dog not found');
    }
}

export { getDogs, getDogById, addDog, updateDog, deleteDog };