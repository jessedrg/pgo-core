import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, IsInt, IsEnum } from "class-validator";
import { EnumQuoteItemStatus } from "./EnumQuoteItemStatus";
@InputType()
class QuoteItemCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  basePrices?: number | null;

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
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  prices?: number | null;

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
