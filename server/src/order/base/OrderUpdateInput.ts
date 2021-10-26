import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsJSON,
  IsString,
  IsInt,
  IsEnum,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { ShipmentWhereUniqueInput } from "../../shipment/base/ShipmentWhereUniqueInput";
import { EnumOrderState } from "./EnumOrderState";
@InputType()
class OrderUpdateInput {
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
  acountId?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  billingAddress?: JsonValue | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customNo?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimatedDays?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  fees?: JsonValue | null;

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
  organizationId?: OrganizationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ShipmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShipmentWhereUniqueInput)
  @IsOptional()
  @Field(() => ShipmentWhereUniqueInput, {
    nullable: true,
  })
  shipmentId?: ShipmentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  shippingaddress?: JsonValue | null;

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
  subtotal?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  taxes?: JsonValue | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  total?: number | null;
}
export { OrderUpdateInput };
