module.exports = ({env}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.49wcu1u.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'db_lk_backend'),
        username: env('DATABASE_USERNAME', 'bokuwajay'),
        password: env('DATABASE_PASSWORD', 'Jay900515!'),
        // uri: env(
        //   'mongodb+srv://bokuwajay:Jay900515!@cluster0.49wcu1u.mongodb.net/db_lk_backend?retryWrites=true&w=majority',
        // ),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
