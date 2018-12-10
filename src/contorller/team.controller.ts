import { TeamService } from '../service/team.service';

export class TeamController {
  constructor() {}
  public async getTeamsList(paramEvent?: any): Promise<any> {
    console.log('In controller calling getTeamsList functions');
    let res: any;
    try {
      res = await new TeamService().getTeamsList();
    } catch (error) {
      if (error) {
        console.error('Error in TeamController: ', error);
        res = error;
      }
    }
    return res;
  }
}
