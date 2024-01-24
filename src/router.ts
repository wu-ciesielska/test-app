import { Router } from "express";
import { addDog, deleteDog, getDogById, getDogs, updateDog } from "./controller";


const router = Router();

router.get("/dogs", getDogs);
router.get("/dogs/:id", getDogById);
router.post("/dogs", addDog);
router.put("/dogs/:id", updateDog);
router.delete("/dogs/:id", deleteDog);

export default router;