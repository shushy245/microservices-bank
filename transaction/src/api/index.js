import { Router } from "express";
import { AsyncRouter } from "express-async-router";

import { getHistory, saveTransaction } from "./controller.js";

const router = AsyncRouter(Router());

router.get("/history", getHistory);
router.post("/", saveTransaction);

export default router;
