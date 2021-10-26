import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PartMessageWhereInput } from "./PartMessageWhereInput";
import { Type } from "class-transformer";
import { PartMessageOrderByInput } from "./PartMessageOrderByInput";

@ArgsType()
class PartMessageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PartMessageWhereInput,
  })
  @Field(() => PartMessageWhereInput, { nullable: true })
  @Type(() => PartMessageWhereInput)
  where?: PartMessageWhereInput;

  @ApiProperty({
    required: false,
    type: PartMessageOrderByInput,
  })
  @Field(() => PartMessageOrderByInput, { nullable: true })
  @Type(() => PartMessageOrderByInput)
  orderBy?: PartMessageOrderByInput;

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

export { PartMessageFindManyArgs };
