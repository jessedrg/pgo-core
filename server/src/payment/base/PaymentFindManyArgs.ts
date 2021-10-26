import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentWhereInput } from "./PaymentWhereInput";
import { Type } from "class-transformer";
import { PaymentOrderByInput } from "./PaymentOrderByInput";

@ArgsType()
class PaymentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentWhereInput,
  })
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: PaymentWhereInput;

  @ApiProperty({
    required: false,
    type: PaymentOrderByInput,
  })
  @Field(() => PaymentOrderByInput, { nullable: true })
  @Type(() => PaymentOrderByInput)
  orderBy?: PaymentOrderByInput;

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

export { PaymentFindManyArgs };
