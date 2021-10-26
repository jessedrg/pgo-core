import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuoteWhereInput } from "./QuoteWhereInput";
import { Type } from "class-transformer";
import { QuoteOrderByInput } from "./QuoteOrderByInput";

@ArgsType()
class QuoteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuoteWhereInput,
  })
  @Field(() => QuoteWhereInput, { nullable: true })
  @Type(() => QuoteWhereInput)
  where?: QuoteWhereInput;

  @ApiProperty({
    required: false,
    type: QuoteOrderByInput,
  })
  @Field(() => QuoteOrderByInput, { nullable: true })
  @Type(() => QuoteOrderByInput)
  orderBy?: QuoteOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { QuoteFindManyArgs };
