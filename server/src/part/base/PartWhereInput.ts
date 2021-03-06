import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { MediaFileWhereUniqueInput } from "../../mediaFile/base/MediaFileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OfferWhereUniqueInput } from "../../offer/base/OfferWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { PartConfigurationWhereUniqueInput } from "../../partConfiguration/base/PartConfigurationWhereUniqueInput";
import { PartOnShapeWhereUniqueInput } from "../../partOnShape/base/PartOnShapeWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumPartStatus } from "./EnumPartStatus";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
@InputType()
class PartWhereInput {
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
  account?: AccountWhereUniqueInput;

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
  blueprint?: MediaFileWhereUniqueInput;

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
    type: () => OfferWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OfferWhereUniqueInput)
  @IsOptional()
  @Field(() => OfferWhereUniqueInput, {
    nullable: true,
  })
  offer?: OfferWhereUniqueInput;

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
  organization?: OrganizationWhereUniqueInput;

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
  originalBlueprint?: MediaFileWhereUniqueInput;

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
  originalModel?: MediaFileWhereUniqueInput;

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
  partConfiguration?: PartConfigurationWhereUniqueInput;

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
  partOnShape?: PartOnShapeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  partsCount?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  process?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPartStatus,
  })
  @IsEnum(EnumPartStatus)
  @IsOptional()
  @Field(() => EnumPartStatus, {
    nullable: true,
  })
  status?: "draft" | "pending" | "rejected" | "publish";

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
  stepModel?: MediaFileWhereUniqueInput;

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
  stlModel?: MediaFileWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  surface?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  visible?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  volume?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  volumeBoundingBox?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  volumeChips?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  x?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  y?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  z?: FloatNullableFilter;
}
export { PartWhereInput };
