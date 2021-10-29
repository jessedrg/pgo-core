import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OfferWhereUniqueInput } from "../../offer/base/OfferWhereUniqueInput";

import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsString,
  IsJSON,
  IsEnum,
  IsNumber,
  IsBoolean,
} from "class-validator";

import { Type } from "class-transformer";
import { PartOnShapeWhereUniqueInput } from "../../partOnShape/base/PartOnShapeWhereUniqueInput";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";
import { EnumPartStatus } from "./EnumPartStatus";
@InputType()
class PartCreateInput {
  @ApiProperty({
    required: false,
    type: () => OfferWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OfferWhereUniqueInput)
  @IsOptional()
  @Field(() => OfferWhereUniqueInput, {
    nullable: true,
  })
  offer?: OfferWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PartOnShapeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PartOnShapeWhereUniqueInput)
  @IsOptional()
  @Field(() => PartOnShapeWhereUniqueInput, {
    nullable: true,
  })
  partonshape?: PartOnShapeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  parts?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  process?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  quantities?: JsonValue | null;

  @ApiProperty({
    required: false,
    type: () => QuoteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuoteWhereUniqueInput)
  @IsOptional()
  @Field(() => QuoteWhereUniqueInput, {
    nullable: true,
  })
  quote?: QuoteWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumPartStatus,
  })
  @IsEnum(EnumPartStatus)
  @IsOptional()
  @Field(() => EnumPartStatus, {
    nullable: true,
  })
  status?: "draft" | "pending" | "rejected" | "publish" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  surface?: number | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  visible?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  volume?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  volumeBoundingBox?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  volumeChips?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  x?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  y?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  z?: number | null;
}
export { PartCreateInput };
