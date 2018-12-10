import { Handler, Context, Callback } from 'aws-lambda';

import { Mysqldb } from './config';
var mysqlPool = require('mysql');

interface HelloResponse {
  statusCode: number;
  body: string;
}

const teams: Handler = (event: any, context: Context, callback: Callback) => {
  var response;
  const pool = mysqlPool.createPool({
    host: Mysqldb.host,
    user: Mysqldb.user,
    password: Mysqldb.password,
    database: Mysqldb.database,
  });

  try {
    // const 343 rows = await mysql.query('desc teams ');
    pool.getConnection(function(err: any, connection: any) {
      // Use the connection
      connection.query('SELECT * from teams', function(error: any, results: any, fields: any) {
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        if (error) {
          response = error;
        } else console.log(results[0]);
        response = results;
      });
    });
  } catch (err) {
    response = err;
    console.log('rr ', err);
  }

  const res: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify(response),
  };
  callback(undefined, res);
};

export { teams };
