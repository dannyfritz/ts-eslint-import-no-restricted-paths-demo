module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "import"
    ],
    "rules": {
        "import/no-restricted-paths": ["error", {
            "basePath": "./src",
            "zones": [
                {
                    "target": "./atoms",
                    "from": ".",
                    "message": "Atoms cannot import other components!"
                },
                {
                    "target": "./molecules",
                    "from": ".",
                    "except": ["./atoms"],
                    "message": "Molecules can only import atoms!"
                }
            ]
        }]
    }
}
