import { Router } from "express";
import { AsyncRouter } from "express-async-router";

import { makeTransaction, getHistory } from "./controller.js";

const router = AsyncRouter(Router());

router.post("/transaction", makeTransaction);
router.get("/history", getHistory);

export default router;
