import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";

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
import { MediaFileWhereUniqueInput } from "../../mediaFile/base/MediaFileWhereUniqueInput";
import { OfferWhereUniqueInput } from "../../offer/base/OfferWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { PartConfigurationWhereUniqueInput } from "../../partConfiguration/base/PartConfigurationWhereUniqueInput";
import { PartOnShapeWhereUniqueInput } from "../../partOnShape/base/PartOnShapeWhereUniqueInput";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { EnumPartStatus } from "./EnumPartStatus";
@InputType()
class PartCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  account?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MediaFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MediaFileWhereUniqueInput)
  @IsOptional()
  @Field(() => MediaFileWhereUniqueInput, {
    nullable: true,
  })
  blueprint?: MediaFileWhereUniqueInput | null;

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
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MediaFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MediaFileWhereUniqueInput)
  @IsOptional()
  @Field(() => MediaFileWhereUniqueInput, {
    nullable: true,
  })
  originalBlueprint?: MediaFileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MediaFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MediaFileWhereUniqueInput)
  @IsOptional()
  @Field(() => MediaFileWhereUniqueInput, {
    nullable: true,
  })
  originalModel?: MediaFileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PartConfigurationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PartConfigurationWhereUniqueInput)
  @IsOptional()
  @Field(() => PartConfigurationWhereUniqueInput, {
    nullable: true,
  })
  partConfiguration?: PartConfigurationWhereUniqueInput | null;

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
  partOnShape?: PartOnShapeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  partsCount?: number | null;

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
    type: () => MediaFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MediaFileWhereUniqueInput)
  @IsOptional()
  @Field(() => MediaFileWhereUniqueInput, {
    nullable: true,
  })
  stepModel?: MediaFileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MediaFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MediaFileWhereUniqueInput)
  @IsOptional()
  @Field(() => MediaFileWhereUniqueInput, {
    nullable: true,
  })
  stlModel?: MediaFileWhereUniqueInput | null;

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
