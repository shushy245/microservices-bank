import User from "../model/User.js";

export const getUser = async (req, res) => {
  const username = req.params.username;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ username: user.username, balance: user.balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const makeTransaction = async (req, res) => {
  const { from, to, amount } = req.body;

  if (!from || !to || amount <= 0)
    return res.status(400).json({ message: "Invalid transfer" });

  try {
    const sender = await User.findOne({ username: from });
    const recipient = await User.findOne({ username: to });

    if (!sender || !recipient)
      return res
        .status(400)
        .json({ message: "Sender/Recipient could not be found" });

    sender.balance -= +amount;
    recipient.balance += +amount;

    if (sender.balance < 0)
      return res
        .status(400)
        .json({ message: "Sender doesn't have sufficient funds" });

    await sender.save();
    await recipient.save();

    res.status(201).json({ message: "Transfer successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
