import { Router } from "express";
import { getRandomScale } from "../services/random-scales.service";

const router = Router();

/**
 * Get a random scale
 * @auth optional
 * @route {GET} /random
 * @returns scale: a random scale
 */
router.get(
  "/",
  (req, res) => {
      const result = getRandomScale();
      res.json(result);
  }
);

export default router;
