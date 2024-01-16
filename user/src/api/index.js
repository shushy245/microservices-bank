import { Router } from "express";
import { AsyncRouter } from "express-async-router";

import { getUser, makeTransaction } from "./controller.js";

const router = AsyncRouter(Router());

router.get("/:username", getUser);
router.post("/transaction", makeTransaction);

export default router;
