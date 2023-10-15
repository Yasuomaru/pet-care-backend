import { Request, Response } from "express";
import Pet from '../types/Pet';
import PetRepository from "../repository/PetRepository";

const PetController = {
    index: (req: Request, res: Response) => {
        try {
            res.json(PetRepository.getAll());
        } catch (error) {
            const message = error.message || "Enable to fetch data";
            res.status(500).json({ message });
        }
    },

    show: (req: Request, res: Response) => {
        try {
            res.json(PetRepository.getById(req.params.id));
        } catch (error) {
            const message = error.message || "Pet not found";
            res.status(404).json({ message });
        }
    },

    create: (req: Request, res: Response) => {
        try {
            const { name, dateOfBirth, breed, photo } = req.body;
            // const pet = PetRepository.create(name, dateOfBirth, breed, photo);
            const pet = PetRepository.create(name, dateOfBirth, breed);
            res.status(201).json(pet);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    update: (req: Request, res: Response) => {
        try {
            const { name, dateOfBirth, breed, photo } = req.body;
            // const pet = PetRepository.update(req.params.id, name, dateOfBirth, breed, photo);
            const pet = PetRepository.update(req.params.id, name, dateOfBirth, breed);
            res.status(200).json(pet);
        } catch (error) {
            const message = error.message || "Pet not found";
            res.status(404).json({ message });
        }
    },

    delete: (req: Request, res: Response) => {
        try {
            PetRepository.delete(req.params.id);
            res.status(204).json({ message: `Pet with id ${req.params.id} was deleted` });
        } catch (error) {
            const message = error.message || "Pet not found";
            res.status(404).json({ message });
        }
    }
};

export default PetController;