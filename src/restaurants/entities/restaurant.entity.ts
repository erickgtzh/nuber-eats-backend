import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { type } from 'os';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { isString } from 'util';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant  {

  @PrimaryGeneratedColumn()
  @Field(type => Number)
  id: number;

  @Field(type => String)
  @Column()
  @Length(5)
  name: string;

  @Field(type => Boolean, { nullable: true })
  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  isVegan: boolean;

  @Field(type => String)
  @Column()
  @IsString()
  address: string;

}
