import { describe, expect, test } from "vitest";
import createPet from "./Pet";


describe("Pet Model", () => {
    test("Pet is created sucessfully", () => {
        // const pet = createPet("Bobby", new Date("2019-01-01"), "Bulldog", "data:image/base64");
        const pet = createPet("Bobby", new Date("2019-01-01"), "Bulldog");
        expect(pet).toBeDefined();
        expect(pet.name).toBe("Bobby");
        expect(pet.dateOfBirth).toEqual(new Date("2019-01-01"));
        expect(pet.breed).toBe("Bulldog");
        // expect(pet.photo).toBe("data:image/base64");
    })
});