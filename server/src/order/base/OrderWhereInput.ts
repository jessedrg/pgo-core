import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { ShipmentWhereUniqueInput } from "../../shipment/base/ShipmentWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
@InputType()
class OrderWhereInput {
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
  acountId?: AccountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: JsonNullableFilter,
  })
  @Type(() => JsonNullableFilter)
  @IsOptional()
  @Field(() => JsonNullableFilter, {
    nullable: true,
  })
  billingAddress?: JsonNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  comment?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  customNo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  estimatedDays?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonNullableFilter,
  })
  @Type(() => JsonNullableFilter)
  @IsOptional()
  @Field(() => JsonNullableFilter, {
    nullable: true,
  })
  fees?: JsonNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  organizationId?: OrganizationWhereUniqueInput;

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
  shipmentId?: ShipmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: JsonNullableFilter,
  })
  @Type(() => JsonNullableFilter)
  @IsOptional()
  @Field(() => JsonNullableFilter, {
    nullable: true,
  })
  shippingaddress?: JsonNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  subtotal?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonNullableFilter,
  })
  @Type(() => JsonNullableFilter)
  @IsOptional()
  @Field(() => JsonNullableFilter, {
    nullable: true,
  })
  taxes?: JsonNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  total?: FloatNullableFilter;
}
export { OrderWhereInput };
