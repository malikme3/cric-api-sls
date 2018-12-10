import { Handler, Context, Callback } from 'aws-lambda';
import { Mysqldb } from './config';
var mysql = require('mysql');

interface HelloResponse {
  statusCode: number;
  body: string;
}

const getTeanms: Handler = (event: any, context: Context, callback: Callback) => {
  let sql: any = Mysqldb;
  console.log('sql: ', sql, '  mysql: ', mysql);

  // var pool = mysql.createPool({
  //   host: sql.host,
  //   user: sql.user,
  //   password: sql.password,
  //   database: sql.database,
  // });

  // pool.getConnection(function(err: any, connection: any) {
  //   // Use the connection
  //   connection.query('SELECT * from teams', function(error: any, results: any, fields: any) {
  //     // And done with the connection.
  //     connection.release();
  //     // Handle error after the release.
  //     if (error) throw error + '  ererere error';
  //     else console.log(results[0] + '  yahoo');
  //     // process.exit();
  //   });
  // });

  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(Math.random() * 10) + ' actual: ' + sql.host,
    }),
  };

  callback(undefined, response);
};

export { getTeanms };
