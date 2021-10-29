import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  IsJSON,
  IsDate,
  IsString,
  ValidateNested,
} from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Type } from "class-transformer";
import { Offer } from "../../offer/base/Offer";
import { PartMessage } from "../../partMessage/base/PartMessage";
import { Quote } from "../../quote/base/Quote";
import { User } from "../../user/base/User";
@ObjectType()
class Account {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  active!: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  configuration!: JsonValue | null;

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
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Offer],
  })
  @ValidateNested()
  @Type(() => Offer)
  @IsOptional()
  offers?: Array<Offer>;

  @ApiProperty({
    required: false,
    type: () => [PartMessage],
  })
  @ValidateNested()
  @Type(() => PartMessage)
  @IsOptional()
  partMessages?: Array<PartMessage>;

  @ApiProperty({
    required: false,
    type: () => [PartMessage],
  })
  @ValidateNested()
  @Type(() => PartMessage)
  @IsOptional()
  partSender?: Array<PartMessage>;

  @ApiProperty({
    required: false,
    type: () => [Quote],
  })
  @ValidateNested()
  @Type(() => Quote)
  @IsOptional()
  quotes?: Array<Quote>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  users?: Array<User>;
}
export { Account };
