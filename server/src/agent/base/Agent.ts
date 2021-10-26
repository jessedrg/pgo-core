import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Account } from "../../account/base/Account";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsJSON,
} from "class-validator";
import { Type } from "class-transformer";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
@ObjectType()
class Agent {
  @ApiProperty({
    required: false,
    type: () => Account,
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  accountId?: Account | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  zones!: JsonValue | null;
}
export { Agent };
