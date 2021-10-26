import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Account } from "../../account/base/Account";

import {
  ValidateNested,
  IsOptional,
  IsJSON,
  IsString,
  IsDate,
  IsInt,
  IsEnum,
  IsNumber,
} from "class-validator";

import { Type } from "class-transformer";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { Payment } from "../../payment/base/Payment";
import { Organization } from "../../organization/base/Organization";
import { Production } from "../../production/base/Production";
import { Shipment } from "../../shipment/base/Shipment";
import { EnumOrderState } from "./EnumOrderState";
@ObjectType()
class Order {
  @ApiProperty({
    required: false,
    type: () => Account,
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  acountId?: Account | null;

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
  customNo!: string | null;

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
  orderInOrderItem?: Array<OrderItem>;

  @ApiProperty({
    required: false,
    type: () => [Payment],
  })
  @ValidateNested()
  @Type(() => Payment)
  @IsOptional()
  orderInPayment?: Array<Payment>;

  @ApiProperty({
    required: false,
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organizationId?: Organization | null;

  @ApiProperty({
    required: false,
    type: () => [Production],
  })
  @ValidateNested()
  @Type(() => Production)
  @IsOptional()
  productionsInOrders?: Array<Production>;

  @ApiProperty({
    required: false,
    type: () => Shipment,
  })
  @ValidateNested()
  @Type(() => Shipment)
  @IsOptional()
  shipmentId?: Shipment | null;

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
    enum: EnumOrderState,
    isArray: true,
  })
  @IsEnum(EnumOrderState, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumOrderState], {
    nullable: true,
  })
  state?: Array<
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
