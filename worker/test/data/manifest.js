import subscription from "./subscription.js";
import account from "./account.js";

const manifest = {
  message: {
    id: "some-order-id",
    email: "jane.doe@example.org",
    firstName: "jane",
    lastName: "doe",
    phoneNumber: "0700112233",
    productCode: "expressen_3mån_gratis",
    payment: {
      method: "KLARNA",
      token: "edf46eaf-c299-48a3-9471-eae65744e26e",
    },
  },
  account,
  subscription,
};

export default manifest;
