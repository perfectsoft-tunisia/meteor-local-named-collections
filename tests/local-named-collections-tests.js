// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by local-named-collections.js.
import { name as packageName } from "meteor/perfectsoft:local-named-collections";

// Write your tests here!
// Here is an example.
Tinytest.add('local-named-collections - example', function (test) {
  test.equal(packageName, "local-named-collections");
});
