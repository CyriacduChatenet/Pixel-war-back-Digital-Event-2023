import { Team } from "src/team/entities/team.entity";

export class SignupUserInputDTO {
  username: string;
  email: string;
  password: string;
  team: Team;
  totalScore: number;
  isBan: boolean;
}
