module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 13,
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "vue/vue3-essential",
        "@typescript-eslint"
    ],
    "rules": {
      "semi": false
    }
};
