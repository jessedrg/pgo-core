import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Account } from "../../account/base/Account";

import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsInt,
  IsJSON,
  IsEnum,
  IsNumber,
  IsBoolean,
} from "class-validator";

import { Type } from "class-transformer";
import { MediaFile } from "../../mediaFile/base/MediaFile";
import { Offer } from "../../offer/base/Offer";
import { Organization } from "../../organization/base/Organization";
import { PartConfiguration } from "../../partConfiguration/base/PartConfiguration";
import { PartMessage } from "../../partMessage/base/PartMessage";
import { PartOnShape } from "../../partOnShape/base/PartOnShape";
import { ProductionItem } from "../../productionItem/base/ProductionItem";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
import { EnumPartStatus } from "./EnumPartStatus";
@ObjectType()
class Part {
  @ApiProperty({
    required: false,
    type: () => Account,
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  account?: Account | null;

  @ApiProperty({
    required: false,
    type: () => MediaFile,
  })
  @ValidateNested()
  @Type(() => MediaFile)
  @IsOptional()
  blueprint?: MediaFile | null;

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
    required: false,
    type: () => Offer,
  })
  @ValidateNested()
  @Type(() => Offer)
  @IsOptional()
  offer?: Offer | null;

  @ApiProperty({
    required: false,
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Organization | null;

  @ApiProperty({
    required: false,
    type: () => MediaFile,
  })
  @ValidateNested()
  @Type(() => MediaFile)
  @IsOptional()
  originalBlueprint?: MediaFile | null;

  @ApiProperty({
    required: false,
    type: () => MediaFile,
  })
  @ValidateNested()
  @Type(() => MediaFile)
  @IsOptional()
  originalModel?: MediaFile | null;

  @ApiProperty({
    required: false,
    type: () => PartConfiguration,
  })
  @ValidateNested()
  @Type(() => PartConfiguration)
  @IsOptional()
  partConfiguration?: PartConfiguration | null;

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
    type: () => PartOnShape,
  })
  @ValidateNested()
  @Type(() => PartOnShape)
  @IsOptional()
  partOnShape?: PartOnShape | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  partsCount!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  process!: string | null;

  @ApiProperty({
    required: false,
    type: () => [ProductionItem],
  })
  @ValidateNested()
  @Type(() => ProductionItem)
  @IsOptional()
  productionItems?: Array<ProductionItem>;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  quantities!: JsonValue | null;

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
    type: () => MediaFile,
  })
  @ValidateNested()
  @Type(() => MediaFile)
  @IsOptional()
  stepModel?: MediaFile | null;

  @ApiProperty({
    required: false,
    type: () => MediaFile,
  })
  @ValidateNested()
  @Type(() => MediaFile)
  @IsOptional()
  stlModel?: MediaFile | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  surface!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  visible!: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  volume!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  volumeBoundingBox!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  volumeChips!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  x!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  y!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  z!: number | null;
}
export { Part };
