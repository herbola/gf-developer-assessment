export default async function getOrCreateSubscription(message, context) {
  const { rejectUnless, http, findOrReject } = context;
  const { productCode, payment } = message;

  const accountId = findOrReject(message.data, "account", "id");

  // YOUR CODE HERE

  const response = await http.post(
    {
      path: "/subscription",
      body: {
        accountId,
        productCode,
        payment,
      },
      headers: {
        "Content-Type": "application/json",
      }
    },
  );


  

  return { type: response.data.type, id: response.data.id };
}
