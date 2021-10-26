import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProviderWhereInput } from "./ProviderWhereInput";
import { Type } from "class-transformer";
import { ProviderOrderByInput } from "./ProviderOrderByInput";

@ArgsType()
class ProviderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProviderWhereInput,
  })
  @Field(() => ProviderWhereInput, { nullable: true })
  @Type(() => ProviderWhereInput)
  where?: ProviderWhereInput;

  @ApiProperty({
    required: false,
    type: ProviderOrderByInput,
  })
  @Field(() => ProviderOrderByInput, { nullable: true })
  @Type(() => ProviderOrderByInput)
  orderBy?: ProviderOrderByInput;

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

export { ProviderFindManyArgs };
