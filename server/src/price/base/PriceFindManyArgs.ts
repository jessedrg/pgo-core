import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PriceWhereInput } from "./PriceWhereInput";
import { Type } from "class-transformer";
import { PriceOrderByInput } from "./PriceOrderByInput";

@ArgsType()
class PriceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PriceWhereInput,
  })
  @Field(() => PriceWhereInput, { nullable: true })
  @Type(() => PriceWhereInput)
  where?: PriceWhereInput;

  @ApiProperty({
    required: false,
    type: PriceOrderByInput,
  })
  @Field(() => PriceOrderByInput, { nullable: true })
  @Type(() => PriceOrderByInput)
  orderBy?: PriceOrderByInput;

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

export { PriceFindManyArgs };
