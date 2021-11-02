import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsDate,
  IsString,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
@ObjectType()
class Price {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount!: number | null;

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
  currency!: string | null;

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
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity!: number | null;

  @ApiProperty({
    required: false,
    type: () => [QuoteItem],
  })
  @ValidateNested()
  @Type(() => QuoteItem)
  @IsOptional()
  quoteItemBasePrices?: Array<QuoteItem>;

  @ApiProperty({
    required: false,
    type: () => [QuoteItem],
  })
  @ValidateNested()
  @Type(() => QuoteItem)
  @IsOptional()
  quoteItemPrices?: Array<QuoteItem>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Price };
