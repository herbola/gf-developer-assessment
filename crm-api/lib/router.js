import express from "express";

import db from "./db.js";

const router = express.Router();

/* BODY SCHEMA
{
  email: "jane.doe@example.org",
  firstName: "jane",
  lastName: "doe",
  phoneNumber: "0700112233",
}
*/

router.post("/account", (req, res) => {
  const { email, firstName, lastName, phoneNumber } = req.body;

  const existingAccount = db.accounts.find((account) => account.email === email);
  if (existingAccount) {
    return res.status(409).json({
      type: "account",
      id: existingAccount.id,
      errors: [ {
        title: "Conflict",
        status: "conflict",
        details: `An account with email: ${email} already exists`,
      } ],
    });

  }
  const id = `some-account-id-${db.accounts.length + 1}`;
  db.accounts.push({
    id,
    email,
    firstName,
    lastName,
    phoneNumber
  });

  res.status(201).json({ type: "account", id });
});

export default router;