//Unit test for PetRepository
import { describe, expect, test } from "vitest";
import PetRepository from "./PetRepository";
import exp from "constants";

describe("Pet Repository", () => {
    test("Pet name was not provided", () => {
        // expect(() => PetRepository.create("", new Date("2019-01-01"), "Bulldog", "data:image/base64")).toThrowError("Pet name was not provided");
        expect(() => PetRepository.create("", new Date("2019-01-01"), "Bulldog")).toThrowError("Pet name was not provided");

    })

    test("Pet breed was not provided", () => {
        // expect(() => PetRepository.create("Bobby", new Date("2019-01-01"), "", "data:image/base64")).toThrowError("Pet breed was not provided");
        expect(() => PetRepository.create("Bobby", new Date("2019-01-01"), "")).toThrowError("Pet breed was not provided");

    })

    test("Pet image was not provided", () => {
        // expect(() => PetRepository.create("Bobby", new Date("2019-01-01"), "Bulldog", "")).toThrowError("Pet image was not provided");
        expect(() => PetRepository.create("Bobby", new Date("2019-01-01"), "Bulldog")).toThrowError("Pet image was not provided");

    })

    test("Pet image was provided but not as a base64 string", () => {
        // expect(() => PetRepository.create("Bobby", new Date("2019-01-01"), "Bulldog", "notBase64")).toThrowError("Pet image was not provided as a base64 string");
        expect(() => PetRepository.create("Bobby", new Date("2019-01-01"), "Bulldog")).toThrowError("Pet image was not provided as a base64 string");
    })

    test("Pet is created sucessfully and added to the Pets list in the repository", () => {
        // const pet = PetRepository.create("Bobby", new Date("2019-01-01"), "Bulldog", "data:image/base64");
        const pet = PetRepository.create("Bobby", new Date("2019-01-01"), "Bulldog");
        expect(PetRepository.getAll()).toContain(pet);
    })
});