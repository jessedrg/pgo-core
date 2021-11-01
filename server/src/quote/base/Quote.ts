import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Account } from "../../account/base/Account";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Part } from "../../part/base/Part";
import { Provider } from "../../provider/base/Provider";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
import { EnumQuoteStatus } from "./EnumQuoteStatus";
@ObjectType()
class Quote {
  @ApiProperty({
    required: false,
    type: () => Account,
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  account?: Account | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  completedAt!: Date | null;

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
    type: () => [Part],
  })
  @ValidateNested()
  @Type(() => Part)
  @IsOptional()
  parts?: Array<Part>;

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
    type: () => [QuoteItem],
  })
  @ValidateNested()
  @Type(() => QuoteItem)
  @IsOptional()
  quoteItems?: Array<QuoteItem>;

  @ApiProperty({
    required: false,
    enum: EnumQuoteStatus,
    isArray: true,
  })
  @IsEnum(EnumQuoteStatus, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumQuoteStatus], {
    nullable: true,
  })
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Quote };
