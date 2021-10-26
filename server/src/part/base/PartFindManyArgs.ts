import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PartWhereInput } from "./PartWhereInput";
import { Type } from "class-transformer";
import { PartOrderByInput } from "./PartOrderByInput";

@ArgsType()
class PartFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PartWhereInput,
  })
  @Field(() => PartWhereInput, { nullable: true })
  @Type(() => PartWhereInput)
  where?: PartWhereInput;

  @ApiProperty({
    required: false,
    type: PartOrderByInput,
  })
  @Field(() => PartOrderByInput, { nullable: true })
  @Type(() => PartOrderByInput)
  orderBy?: PartOrderByInput;

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

export { PartFindManyArgs };
