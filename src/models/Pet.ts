import type Pet from '../types/Pet';
import { v4 as uuidv4 } from 'uuid';


// function createPet(name: string, dateOfBirth: Date, breed: string, imageBase64: string): Pet {
function createPet(name: string, dateOfBirth: Date, breed: string): Pet {
    if (Math.random() < 0.05) {
        throw "Failed to create pet"
    } else {
        return {
            id: uuidv4(),
            name,
            dateOfBirth,
            breed,
            // photo: imageBase64
        };
    }
}

export default createPet;