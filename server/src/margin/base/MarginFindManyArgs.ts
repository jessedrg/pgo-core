import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MarginWhereInput } from "./MarginWhereInput";
import { Type } from "class-transformer";
import { MarginOrderByInput } from "./MarginOrderByInput";

@ArgsType()
class MarginFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MarginWhereInput,
  })
  @Field(() => MarginWhereInput, { nullable: true })
  @Type(() => MarginWhereInput)
  where?: MarginWhereInput;

  @ApiProperty({
    required: false,
    type: MarginOrderByInput,
  })
  @Field(() => MarginOrderByInput, { nullable: true })
  @Type(() => MarginOrderByInput)
  orderBy?: MarginOrderByInput;

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

export { MarginFindManyArgs };
