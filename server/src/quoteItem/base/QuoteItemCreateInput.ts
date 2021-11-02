import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsInt,
  IsEnum,
} from "class-validator";
import { PartWhereUniqueInput } from "../../part/base/PartWhereUniqueInput";
import { Type } from "class-transformer";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";
import { EnumQuoteItemStatus } from "./EnumQuoteItemStatus";
@InputType()
class QuoteItemCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  constructionType?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  margins?: number | null;

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
  part?: PartWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  productionDays?: number | null;

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
  provider?: ProviderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantities?: number | null;

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
  quote?: QuoteWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumQuoteItemStatus,
  })
  @IsEnum(EnumQuoteItemStatus)
  @IsOptional()
  @Field(() => EnumQuoteItemStatus, {
    nullable: true,
  })
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
}
export { QuoteItemCreateInput };
