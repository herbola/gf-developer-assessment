
export default async function getOrCreateAccount(message, context) {
  const { http, rejectUnless } = context;
  const order = message;

  const response = await http.post({
    path: "/account",
    body: {
      email: order.email,
      firstName: order.firstName,
      lastName: order.lastName,
      phoneNumber: order.phoneNumber,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  // THE NEXT LAMBDA WILL REQUIRE AN ACCOUNT AND IT'S ID THEREFOR WE RETURN IT.

  return { type: response.data.type, id: response.data.id };
}
