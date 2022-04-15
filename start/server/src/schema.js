const { gql } = require("apollo-server");
const { readFileSync } = require("fs");

// we must convert the file Buffer to a UTF-8 string
const schema = readFileSync(require.resolve("./schema.graphql")).toString(
  "utf-8"
);

const typeDefs = gql(schema);

module.exports = typeDefs;
