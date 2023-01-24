module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    "plugins": [
        ["module:react-native-dotenv", {
            "moduleName": "@env",
            "path": "./envs/.env",
            "safe": true,
            "allowUndefined": false
        }]
    ]
};
