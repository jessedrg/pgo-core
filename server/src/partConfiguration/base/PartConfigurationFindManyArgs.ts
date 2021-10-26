import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PartConfigurationWhereInput } from "./PartConfigurationWhereInput";
import { Type } from "class-transformer";
import { PartConfigurationOrderByInput } from "./PartConfigurationOrderByInput";

@ArgsType()
class PartConfigurationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PartConfigurationWhereInput,
  })
  @Field(() => PartConfigurationWhereInput, { nullable: true })
  @Type(() => PartConfigurationWhereInput)
  where?: PartConfigurationWhereInput;

  @ApiProperty({
    required: false,
    type: PartConfigurationOrderByInput,
  })
  @Field(() => PartConfigurationOrderByInput, { nullable: true })
  @Type(() => PartConfigurationOrderByInput)
  orderBy?: PartConfigurationOrderByInput;

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

export { PartConfigurationFindManyArgs };
