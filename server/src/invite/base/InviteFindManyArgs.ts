import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InviteWhereInput } from "./InviteWhereInput";
import { Type } from "class-transformer";
import { InviteOrderByInput } from "./InviteOrderByInput";

@ArgsType()
class InviteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InviteWhereInput,
  })
  @Field(() => InviteWhereInput, { nullable: true })
  @Type(() => InviteWhereInput)
  where?: InviteWhereInput;

  @ApiProperty({
    required: false,
    type: InviteOrderByInput,
  })
  @Field(() => InviteOrderByInput, { nullable: true })
  @Type(() => InviteOrderByInput)
  orderBy?: InviteOrderByInput;

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

export { InviteFindManyArgs };
