import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SessionWhereInput } from "./SessionWhereInput";
import { Type } from "class-transformer";
import { SessionOrderByInput } from "./SessionOrderByInput";

@ArgsType()
class SessionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SessionWhereInput,
  })
  @Field(() => SessionWhereInput, { nullable: true })
  @Type(() => SessionWhereInput)
  where?: SessionWhereInput;

  @ApiProperty({
    required: false,
    type: SessionOrderByInput,
  })
  @Field(() => SessionOrderByInput, { nullable: true })
  @Type(() => SessionOrderByInput)
  orderBy?: SessionOrderByInput;

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

export { SessionFindManyArgs };
