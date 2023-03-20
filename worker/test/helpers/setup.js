import events from "events";
import nock from "nock";
import "mocha-cakes-2";
import chai from "chai";

// Make sure dates are displayed in the correct timezone
process.env.TZ = "Europe/Stockholm";

// Tests should always run in test environment to prevent accidental deletion of
// real elasticsearch indices etc.
// This file is required with ./test/mocha.opts
process.env.NODE_ENV = "test";
events.EventEmitter.defaultMaxListeners = 256;
// Setup common test libraries

chai.config.truncateThreshold = 0;
chai.config.includeStack = true;

Object.assign(global, { should: chai.should() });

nock.enableNetConnect(/(localhost|127\.0\.0\.1):\d+/);
