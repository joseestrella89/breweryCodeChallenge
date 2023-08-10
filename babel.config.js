module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: './envs/.env',
                safe: true,
                allowUndefined: false,
            },
        ],
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@Assets': './app/assets',
                    '@Components': './app/components',
                    '@Config': './app/config',
                    '@Constants': './app/constants',
                    '@Hooks': './app/hooks',
                    '@Models': './app/models',
                    '@Navigators': './app/navigators',
                    '@Redux': './app/redux',
                    '@Screens': './app/screens',
                    '@Services': './app/services',
                    '@Mocks': './__tests__/mocks',
                },
            },
        ],
    ],
};
