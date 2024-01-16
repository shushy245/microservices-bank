import Transaction from "../model/Transaction";

export const getHistory = async (req, res) => {
  const username = req.params.username;

  try {
    const transactions = await Transaction.find({
      $or: [{ from: username }, { to: username }],
    });

    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const saveTransaction = async (req, res) => {
  const { from, to, amount } = req.body;

  try {
    const transaction = await Transaction.create({
      from,
      to,
      amount,
    });

    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
