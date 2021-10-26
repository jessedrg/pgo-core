import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgentWhereInput } from "./AgentWhereInput";
import { Type } from "class-transformer";
import { AgentOrderByInput } from "./AgentOrderByInput";

@ArgsType()
class AgentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AgentWhereInput,
  })
  @Field(() => AgentWhereInput, { nullable: true })
  @Type(() => AgentWhereInput)
  where?: AgentWhereInput;

  @ApiProperty({
    required: false,
    type: AgentOrderByInput,
  })
  @Field(() => AgentOrderByInput, { nullable: true })
  @Type(() => AgentOrderByInput)
  orderBy?: AgentOrderByInput;

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

export { AgentFindManyArgs };
