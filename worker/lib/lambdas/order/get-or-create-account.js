export default async function getOrCreateAccount(message, context) {
  const { http, rejectUnless } = context;
  const order = message;

  // YOUR CODE HERE

  // THE NEXT LAMBDA WILL REQUIRE AN ACCOUNT AND IT'S ID THEREFOR WE RETURN IT.

  return { type: "account", id };
}
