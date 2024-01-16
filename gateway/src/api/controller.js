import axios from "axios";

export const getHistory = async (req, res) => {
  const username = req.params.username;

  try {
    const history = await axios.get("http://localhost:9001/api/history", {
      username,
    });

    if (!history)
      return res.status(404).json({ message: "No transaction history found" });

    res.status(200).json(history);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const makeTransaction = async (req, res) => {
  const { from, to, amount } = req.body;

  let message = "";

  try {
    await axios.post("http://localhost:9000/api/user/transaction", {
      from,
      to,
      amount,
    });

    message += "Transaction completed successfully, ";

    await axios.post("http://localhost:9001/api/transaction", {
      from,
      to,
      amount,
    });

    message += "Transaction log saved successfully";

    axios.post("http://localhost:9002/api/notification", {
      recipient: to.username,
    });

    return res.status(200).json({ message });
  } catch (error) {
    console.error(error.response.data.message);
    res.status(error.response.status || 500).json({
      message: `${message}${
        error.response.data.message || "Internal Server Error"
      }`,
    });
  }
};
