export default async function getOrCreateSubscription(message, context) {
  const { rejectUnless, http, findOrReject } = context;
  const { productCode, payment } = message;

  const accountId = findOrReject(message.data, "account", "id");

  // YOUR CODE HERE

  // WE RETURN THE SUBSCRIPTION HERE FOR TRACEABILITY

  return { type: "subscription", id };
}
