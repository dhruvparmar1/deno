module.exports = {
  petstore: {
    output: {
      mode: 'tags-split',
      target: 'src/api/endpoints.ts',
      schemas: 'src/api/model',
      client: 'react-query',
      override: {
        mutator: {
          path: './use-custom-instance.ts',
          name: 'useCustomInstance',
        },
      },
    },
    input: {
      target: 'https://petstore3.swagger.io/api/v3/openapi.json',
    },
  },
};
