import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { HolidayWhereUniqueInput } from "../../holiday/base/HolidayWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
@InputType()
class ProviderWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  currency?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  dateFormat?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => HolidayWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HolidayWhereUniqueInput)
  @IsOptional()
  @Field(() => HolidayWhereUniqueInput, {
    nullable: true,
  })
  holidaysId?: HolidayWhereUniqueInput;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  rating?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonNullableFilter,
  })
  @Type(() => JsonNullableFilter)
  @IsOptional()
  @Field(() => JsonNullableFilter, {
    nullable: true,
  })
  ratingData?: JsonNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  shippmentDates?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonNullableFilter,
  })
  @Type(() => JsonNullableFilter)
  @IsOptional()
  @Field(() => JsonNullableFilter, {
    nullable: true,
  })
  technologies?: JsonNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  typeson?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonNullableFilter,
  })
  @Type(() => JsonNullableFilter)
  @IsOptional()
  @Field(() => JsonNullableFilter, {
    nullable: true,
  })
  workingDays?: JsonNullableFilter;
}
export { ProviderWhereInput };
