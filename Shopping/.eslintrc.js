module.exports = {
  root: true,
  extends: '@react-native-community',
  "prefer-destructuring": ["error", {
    "VariableDeclarator": {
      "array": false,
      "object": true
    },
    "AssignmentExpression": {
      "array": true,
      "object": false
    }
  }, {
      "enforceForRenamedProperties": false
    }]
};
