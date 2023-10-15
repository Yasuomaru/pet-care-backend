import createPet from "../models/Pet";
import type Pet from "../types/Pet";

const PetRepository = {
    pets: [] as Pet[],

    // create(name: string, dateOfBirth: Date, breed: string, imageBase64: string): Pet {
    create(name: string, dateOfBirth: Date, breed: string): Pet {
        if (!name) {
            throw new Error("Pet name was not provided");
        }
        if (!breed) {
            throw new Error("Pet breed was not provided");
        }
        // if (!imageBase64) {
        //     throw new Error("Pet image was not provided");
        // }
        // if (!imageBase64.startsWith("data:image/")) {
        //     throw new Error("Pet image was not provided as a base64 string");
        // }

        // const pet = createPet(name, dateOfBirth, breed, imageBase64);
        const pet = createPet(name, dateOfBirth, breed);
        this.pets.push(pet);
        return pet;
    },

    // update(id: string, name: string, dateOfBirth: Date, breed: string, imageBase64: string): Pet {
    update(id: string, name: string, dateOfBirth: Date, breed: string): Pet {
        if (!name) {
            throw new Error("Pet name was not provided");
        }
        if (!breed) {
            throw new Error("Pet breed was not provided");
        }
        // if (!imageBase64) {
        //     throw new Error("Pet image was not provided");
        // }
        // if (!imageBase64.startsWith("data:image/")) {
        //     throw new Error("Pet image was not provided as a base64 string");
        // }

        const pet = this.getById(id);
        if (!pet) {
            throw new Error("Pet not found");
        }

        pet.name = name;
        pet.dateOfBirth = dateOfBirth;
        pet.breed = breed;
        // pet.photo = imageBase64;

        return pet;
    },

    delete(id: string): void {
        const pet = this.getById(id);
        if (!pet) {
            throw new Error("Pet not found");
        }
        this.pets.splice(this.pets.indexOf(pet), 1);
    },

    getById(id: string): Pet | undefined {
        if(!id) throw new Error("Pet id was not provided")
        const pet = this.pets.find(pet => pet.id === id);
        
        if (!pet) {
            throw new Error("Pet not found");
        }

        return pet;
    },

    getAll(): Pet[] {
        return this.pets;
    },

    getByName(name: string): Pet | undefined {
        return this.pets.find(pet => pet.name === name);
    },

    getByBreed(breed: string): Pet[] {
        return this.pets.filter(pet => pet.breed === breed);
    },

    getByDateOfBirth(dateOfBirth: Date): Pet[] {
        return this.pets.filter(pet => pet.dateOfBirth === dateOfBirth);
    },

    getByDateOfBirthRange(start: Date, end: Date): Pet[] {
        return this.pets.filter(pet => pet.dateOfBirth >= start && pet.dateOfBirth <= end);
    },



}

export default PetRepository;