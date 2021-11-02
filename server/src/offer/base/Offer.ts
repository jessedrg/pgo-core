import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Account } from "../../account/base/Account";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Part } from "../../part/base/Part";
import { EnumOfferStatus } from "./EnumOfferStatus";
@ObjectType()
class Offer {
  @ApiProperty({
    required: false,
    type: () => Account,
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  account?: Account | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customNumber!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Part],
  })
  @ValidateNested()
  @Type(() => Part)
  @IsOptional()
  parts?: Array<Part>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  publishedAt!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumOfferStatus,
  })
  @IsEnum(EnumOfferStatus)
  @IsOptional()
  @Field(() => EnumOfferStatus, {
    nullable: true,
  })
  status?: "draft" | "pending" | "publish" | "rejected" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Offer };
