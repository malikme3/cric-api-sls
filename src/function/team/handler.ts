import { Handler, Context, Callback } from 'aws-lambda';

import { TeamController } from '../../contorller/team.controller';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const teams: Handler = (event: any, context: Context, callback: Callback) => {
  let response = new TeamController().getTeamsList();

  const res: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify(response),
  };
  callback(undefined, res);
};
export { teams };
