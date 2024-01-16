import { Router } from "express";
import { AsyncRouter } from "express-async-router";

const router = AsyncRouter(Router());

router.post("/", (req, res) => {
  try {
    console.log(`sendNotification()`);

    res.status(200).json({ message: "Notification sent" });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
