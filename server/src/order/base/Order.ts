import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsJSON,
  IsOptional,
  IsString,
  IsDate,
  IsInt,
  ValidateNested,
  IsEnum,
  IsNumber,
} from "class-validator";

import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Type } from "class-transformer";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { Payment } from "../../payment/base/Payment";
import { Production } from "../../production/base/Production";
import { Shipment } from "../../shipment/base/Shipment";
import { EnumOrderStatus } from "./EnumOrderStatus";
@ObjectType()
class Order {
  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  billingAddress!: JsonValue | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment!: string | null;

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
  customCode!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimatedDays!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  fees!: JsonValue | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [OrderItem],
  })
  @ValidateNested()
  @Type(() => OrderItem)
  @IsOptional()
  orderItems?: Array<OrderItem>;

  @ApiProperty({
    required: false,
    type: () => Payment,
  })
  @ValidateNested()
  @Type(() => Payment)
  @IsOptional()
  payment?: Payment | null;

  @ApiProperty({
    required: false,
    type: () => [Production],
  })
  @ValidateNested()
  @Type(() => Production)
  @IsOptional()
  productions?: Array<Production>;

  @ApiProperty({
    required: false,
    type: () => [Shipment],
  })
  @ValidateNested()
  @Type(() => Shipment)
  @IsOptional()
  shipments?: Array<Shipment>;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  shippingaddress!: JsonValue | null;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
    isArray: true,
  })
  @IsEnum(EnumOrderStatus, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumOrderStatus], {
    nullable: true,
  })
  status?: Array<
    | "onHold"
    | "failed"
    | "processing"
    | "production"
    | "quality"
    | "shipped"
    | "completed"
    | "cancelled"
    | "refound"
  >;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  subtotal!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  taxes!: JsonValue | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  total!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Order };
