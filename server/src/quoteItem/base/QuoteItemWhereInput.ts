import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PartWhereUniqueInput } from "../../part/base/PartWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";
import { EnumQuoteItemStatus } from "./EnumQuoteItemStatus";
@InputType()
class QuoteItemWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  constructionType?: StringNullableFilter;

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
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  margins?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PartWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PartWhereUniqueInput)
  @IsOptional()
  @Field(() => PartWhereUniqueInput, {
    nullable: true,
  })
  part?: PartWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  productionDays?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProviderWhereUniqueInput)
  @IsOptional()
  @Field(() => ProviderWhereUniqueInput, {
    nullable: true,
  })
  provider?: ProviderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  quantities?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => QuoteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuoteWhereUniqueInput)
  @IsOptional()
  @Field(() => QuoteWhereUniqueInput, {
    nullable: true,
  })
  quote?: QuoteWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumQuoteItemStatus,
  })
  @IsEnum(EnumQuoteItemStatus)
  @IsOptional()
  @Field(() => EnumQuoteItemStatus, {
    nullable: true,
  })
  status?: "pending" | "completed" | "rejected" | "canceled";
}
export { QuoteItemWhereInput };
