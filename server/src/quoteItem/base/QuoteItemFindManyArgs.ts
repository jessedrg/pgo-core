import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuoteItemWhereInput } from "./QuoteItemWhereInput";
import { Type } from "class-transformer";
import { QuoteItemOrderByInput } from "./QuoteItemOrderByInput";

@ArgsType()
class QuoteItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuoteItemWhereInput,
  })
  @Field(() => QuoteItemWhereInput, { nullable: true })
  @Type(() => QuoteItemWhereInput)
  where?: QuoteItemWhereInput;

  @ApiProperty({
    required: false,
    type: QuoteItemOrderByInput,
  })
  @Field(() => QuoteItemOrderByInput, { nullable: true })
  @Type(() => QuoteItemOrderByInput)
  orderBy?: QuoteItemOrderByInput;

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

export { QuoteItemFindManyArgs };
