const subscription = {
  request: {
    path: "/subscription",
    method: "post",
    body: {
      accountId: "some-account-id",
      productCode: "expressen_3mån_gratis",
      payment: {
        method: "KLARNA",
        token: "edf46eaf-c299-48a3-9471-eae65744e26e",
      },
    },
  },
  statusCode: 201,
  body: {
    id: "some-subscription-id",
    type: "subscription",
  },
};

export default subscription;
