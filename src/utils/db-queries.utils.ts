import { Mysqldb } from '../events/config';
var mysqlPool = require('mysql');

export class DbQueriesUtils {
  constructor() {}

  public async getQuery(query: string): Promise<any> {
    console.log('In sqlUtil calling getTeamsList functions');
    var response;
    const pool = mysqlPool.createPool({
      host: Mysqldb.host,
      user: Mysqldb.user,
      password: Mysqldb.password,
      database: Mysqldb.database,
    });

    try {
      pool.getConnection(function(err: any, connection: any) {
        connection.query(query, function(error: any, results: any, fields: any) {
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
    return response;
  }
}
