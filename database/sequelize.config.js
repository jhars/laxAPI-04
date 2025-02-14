require('dotenv').config();
const process = require('process');
const { DB_HOST, DATABASE_URL } = process.env
  // production: {
  //  use_env_variable: 'DATABASE_URL',
  //  dialect: 'postgres',
  //  protocol: 'postgres',
  //  ssl: true,
  //  dialectOptions: {
  //    ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //    },
  //  },
  // },
module.exports = {
  production: {
   use_env_variable: DATABASE_URL,
   host: DB_HOST,
   port:'5432',
   dialect: 'postgres',
   dialectOptions: {
       ssl: {
         require: true,
         rejectUnauthorized: false
       }
     }
  },

  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT  
  }
  
};