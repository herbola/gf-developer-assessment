const account = {
  request: {
    path: "/account",
    method: "post",
    body: {
      email: "jane.doe@example.org",
      firstName: "jane",
      lastName: "doe",
      phoneNumber: "0700112233",
    },
  },
  statusCode: 201,
  body: {
    id: "some-account-id",
    type: "account",
  },
};

export default account;
