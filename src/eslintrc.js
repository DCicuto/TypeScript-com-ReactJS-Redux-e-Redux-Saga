module.exports = {
    env: {
      browser: true,
      es2021: true, // Atualizado p/ versão mais recente do ECMAScript
      jest: true,
    },
    extends: [
      'react-app',
      'airbnb',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // Usa o Prettier com regras recomendadas
    ],
    parser: '@typescript-eslint/parser', // Adiciona o parser para TypeScript
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2021, // Atualizado para a versão mais recente do ECMAScript
      sourceType: 'module',
    },
    plugins: ['react', 'import', 'jsx-a11y', '@typescript-eslint', 'prettier'],
    rules: {
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.tsx'], // Permite apenas arquivos .tsx
        },
      ],
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      'prettier/prettier': 'error', // Faz com que o Prettier exiba erros se o código não estiver formatado corretamente
      'react/react-in-jsx-scope': 'off', // Desativa a regra para importar React no JSX (necessário apenas em versões anteriores ao React 17)
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
  };
  