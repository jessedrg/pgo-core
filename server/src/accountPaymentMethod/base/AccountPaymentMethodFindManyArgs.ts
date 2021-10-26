import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountPaymentMethodWhereInput } from "./AccountPaymentMethodWhereInput";
import { Type } from "class-transformer";
import { AccountPaymentMethodOrderByInput } from "./AccountPaymentMethodOrderByInput";

@ArgsType()
class AccountPaymentMethodFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AccountPaymentMethodWhereInput,
  })
  @Field(() => AccountPaymentMethodWhereInput, { nullable: true })
  @Type(() => AccountPaymentMethodWhereInput)
  where?: AccountPaymentMethodWhereInput;

  @ApiProperty({
    required: false,
    type: AccountPaymentMethodOrderByInput,
  })
  @Field(() => AccountPaymentMethodOrderByInput, { nullable: true })
  @Type(() => AccountPaymentMethodOrderByInput)
  orderBy?: AccountPaymentMethodOrderByInput;

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

export { AccountPaymentMethodFindManyArgs };
