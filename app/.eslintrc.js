module.exports = {
    env: { // concerne les variables d'environnement autorisées
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true, // on indique qu'on utilise jest
    },
    extends: [
        "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: "2022",
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        "no-use-before-define": ["error", { functions: false }], // permet d'avoir la définition de la fonction après son appel
        "max-len": ["off", { ignoreComments: true }],
        "no-restricted-syntax": 0,
    },
};
