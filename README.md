# Greenfield developer assessment

## Background

Jane's car broke down on her way to work, and she won't come in until tomorrow.

Stakeholders are expecting this this code to be up and running in production later today.
Fortunately for us Jane was working test-driven, however the test doesn't seem to pass and there seems to be some missing code.

Can you help us??

## The task

In the **worker** folder there's a test [sequence-feature](./worker/test/feature/order/sequence-feature.js) that doesn't work.
We are pretty sure that Jane knew what she was doing while writing the test, you can add logs as you see fit though!

The lambdas that needs some love is:
- [get-or-create-account](./worker/lib/lambdas/order/get-or-create-account.js)
- [get-or-create-subscription](./worker/lib/lambdas/order/get-or-create-subscription.js)

### Logs

After a test run the logs can be found in `./worker/logs/test.log`

### Idempotency

Please remember that these lambdas need to be idempontent, meaning that the state of the entity the lambda modifies should not be changed if it runs a second time with the same input.

### More info

This monorepo contains 3 different applications.
- **crm-api**, an application that handles customer data such as an account
- **subscription-api**, an application that handles subscriptions and payment methods
- **worker**, an application handling messages being pushed by google pubsub
