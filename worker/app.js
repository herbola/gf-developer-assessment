import { start, route } from "@bonniernews/b0rker";

import validate from "./lib/lambdas/order/validate.js";
import getOrCreateAccount from "./lib/lambdas/order/get-or-create-account.js";
import getOrCreateSubscription from "./lib/lambdas/order/get-or-create-subscription.js";

const app = start({
  recipes: [
    {
      namespace: "sequence",
      name: "order",
      sequence: [
        route(".validate.source", validate),
        route(".get-or-create.account", getOrCreateAccount),
        route(".get-or-create.subscription", getOrCreateSubscription),
      ],
    },
  ],
});

export default app;
