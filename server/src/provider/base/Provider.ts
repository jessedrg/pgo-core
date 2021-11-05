import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
  IsJSON,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { Holiday } from "../../holiday/base/Holiday";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
import { Quote } from "../../quote/base/Quote";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
@ObjectType()
class Provider {
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
  currency!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dateFormat!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Holiday],
  })
  @ValidateNested()
  @Type(() => Holiday)
  @IsOptional()
  holidays?: Array<Holiday>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [QuoteItem],
  })
  @ValidateNested()
  @Type(() => QuoteItem)
  @IsOptional()
  quoteItems?: Array<QuoteItem>;

  @ApiProperty({
    required: false,
    type: () => [Quote],
  })
  @ValidateNested()
  @Type(() => Quote)
  @IsOptional()
  quotes?: Array<Quote>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  ratingData!: JsonValue | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  shipmentDays!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  technologies!: JsonValue | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  type!: string | null;

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
  workingDays!: JsonValue | null;
}
export { Provider };
