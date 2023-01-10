import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private teamRepository: Repository<Team>,
  ) {}
  create(createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamRepository.save(createTeamDto);
  }

  findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  findOne(id: string): Promise<Team> {
    return this.teamRepository.findOneBy({ id });
  }

  update(id: string, updateTeamDto: UpdateTeamDto): Promise<UpdateResult> {
    return this.teamRepository.update(id, updateTeamDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.teamRepository.delete(id);
  }
}
