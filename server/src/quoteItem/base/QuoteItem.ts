import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Price } from "../../price/base/Price";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsNumber,
  IsInt,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Part } from "../../part/base/Part";
import { Provider } from "../../provider/base/Provider";
import { Quote } from "../../quote/base/Quote";
import { EnumQuoteItemStatus } from "./EnumQuoteItemStatus";
@ObjectType()
class QuoteItem {
  @ApiProperty({
    required: false,
    type: () => [Price],
  })
  @ValidateNested()
  @Type(() => Price)
  @IsOptional()
  basePrices?: Array<Price>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  constructionType!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  margins!: number | null;

  @ApiProperty({
    required: false,
    type: () => Part,
  })
  @ValidateNested()
  @Type(() => Part)
  @IsOptional()
  part?: Part | null;

  @ApiProperty({
    required: false,
    type: () => [Price],
  })
  @ValidateNested()
  @Type(() => Price)
  @IsOptional()
  prices?: Array<Price>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  productionDays!: number | null;

  @ApiProperty({
    required: false,
    type: () => Provider,
  })
  @ValidateNested()
  @Type(() => Provider)
  @IsOptional()
  provider?: Provider | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantities!: number | null;

  @ApiProperty({
    required: false,
    type: () => Quote,
  })
  @ValidateNested()
  @Type(() => Quote)
  @IsOptional()
  quote?: Quote | null;

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

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { QuoteItem };
