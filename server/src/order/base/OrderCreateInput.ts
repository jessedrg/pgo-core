import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsJSON,
  IsOptional,
  IsString,
  IsInt,
  ValidateNested,
  IsEnum,
  IsNumber,
} from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumOrderStatus } from "./EnumOrderStatus";
@InputType()
class OrderCreateInput {
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
  customCode?: string | null;

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
    type: () => PaymentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentWhereUniqueInput, {
    nullable: true,
  })
  payment?: PaymentWhereUniqueInput | null;

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
export { OrderCreateInput };
