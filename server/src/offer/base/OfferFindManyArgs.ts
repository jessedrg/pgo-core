import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OfferWhereInput } from "./OfferWhereInput";
import { Type } from "class-transformer";
import { OfferOrderByInput } from "./OfferOrderByInput";

@ArgsType()
class OfferFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OfferWhereInput,
  })
  @Field(() => OfferWhereInput, { nullable: true })
  @Type(() => OfferWhereInput)
  where?: OfferWhereInput;

  @ApiProperty({
    required: false,
    type: OfferOrderByInput,
  })
  @Field(() => OfferOrderByInput, { nullable: true })
  @Type(() => OfferOrderByInput)
  orderBy?: OfferOrderByInput;

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

export { OfferFindManyArgs };
