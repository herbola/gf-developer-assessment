import {
  fakePubSub,
  fakeApi as initFakeApi,
  runSequence,
  fakeGcpAuth
} from "@bonniernews/lu-test";

import app from "../../../app.js";
import manifest from "../../data/manifest.js";

const fakeApi = initFakeApi();

Feature("Sequence Feature", () => {
  beforeEachScenario(() => {
    fakePubSub.reset();
    fakeApi.reset();
    fakeGcpAuth.enableGetRequestHeaders();
  });
  Scenario("Processing an order", () => {

    let accountBody;
    Given("we can talk to crm-api", () => {
      fakeApi
        .post("/account", (body) => (accountBody = body))
        .reply(201, manifest.account.body);
    });

    let subscriptionBody;
    And("we can talk to subscription-api", () => {
      fakeApi
        .get("/subscription")
        .query({"order-id": manifest.message.id})
        .reply(200, { data: [] });

      fakeApi
        .post("/subscription", (body) => (subscriptionBody = body))
        .reply(201, manifest.subscription.body);
    });

    let last;
    When("we invoke the sequence", async () => {
      const { message } = manifest;
      last = await runSequence(
        app,
        "trigger.sequence.order",
        message
      );
    });

    Then("we should get a processed message", () => {
      last.message.should.eql({
        ...manifest.message,
        data: [
          {
            type: "account",
            id: "some-account-id",
          },
          {
            type: "subscription",
            id: "some-subscription-id",
          },
        ],
      });
    });

    And("we should have posted the correct account to crm-api", () => {
      accountBody.should.eql(manifest.account.request.body);
    });

    And(
      "we should have posted the correct subscription to subscription-api",
      () => {
        subscriptionBody.should.eql(manifest.subscription.request.body);
      }
    );
  });
});
