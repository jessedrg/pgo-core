import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountWhereInput } from "./AccountWhereInput";
import { Type } from "class-transformer";
import { AccountOrderByInput } from "./AccountOrderByInput";

@ArgsType()
class AccountFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AccountWhereInput,
  })
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput;

  @ApiProperty({
    required: false,
    type: AccountOrderByInput,
  })
  @Field(() => AccountOrderByInput, { nullable: true })
  @Type(() => AccountOrderByInput)
  orderBy?: AccountOrderByInput;

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

export { AccountFindManyArgs };
