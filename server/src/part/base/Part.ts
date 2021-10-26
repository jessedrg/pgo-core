import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsDate,
  IsString,
  ValidateNested,
  IsOptional,
  IsInt,
  IsJSON,
  IsEnum,
  IsNumber,
  IsBoolean,
} from "class-validator";

import { Type } from "class-transformer";
import { Offer } from "../../offer/base/Offer";
import { PartConfiguration } from "../../partConfiguration/base/PartConfiguration";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { ProductionItem } from "../../productionItem/base/ProductionItem";
import { PartMessage } from "../../partMessage/base/PartMessage";
import { PartOnShape } from "../../partOnShape/base/PartOnShape";
import { Production } from "../../production/base/Production";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
import { EnumPartStatus } from "./EnumPartStatus";
@ObjectType()
class Part {
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
    type: () => [Offer],
  })
  @ValidateNested()
  @Type(() => Offer)
  @IsOptional()
  offersInPart?: Array<Offer>;

  @ApiProperty({
    required: false,
    type: () => [PartConfiguration],
  })
  @ValidateNested()
  @Type(() => PartConfiguration)
  @IsOptional()
  part?: Array<PartConfiguration>;

  @ApiProperty({
    required: false,
    type: () => [OrderItem],
  })
  @ValidateNested()
  @Type(() => OrderItem)
  @IsOptional()
  partInOrderItem?: Array<OrderItem>;

  @ApiProperty({
    required: false,
    type: () => [ProductionItem],
  })
  @ValidateNested()
  @Type(() => ProductionItem)
  @IsOptional()
  partInProduction?: Array<ProductionItem>;

  @ApiProperty({
    required: false,
    type: () => [PartMessage],
  })
  @ValidateNested()
  @Type(() => PartMessage)
  @IsOptional()
  partMessagesInPart?: Array<PartMessage>;

  @ApiProperty({
    required: false,
    type: () => [PartOnShape],
  })
  @ValidateNested()
  @Type(() => PartOnShape)
  @IsOptional()
  partOnShape?: Array<PartOnShape>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  parts!: number | null;

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
    type: () => [Production],
  })
  @ValidateNested()
  @Type(() => Production)
  @IsOptional()
  productionsInParts?: Array<Production>;

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
  quoteItem?: Array<QuoteItem>;

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
