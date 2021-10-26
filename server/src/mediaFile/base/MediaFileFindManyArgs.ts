import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MediaFileWhereInput } from "./MediaFileWhereInput";
import { Type } from "class-transformer";
import { MediaFileOrderByInput } from "./MediaFileOrderByInput";

@ArgsType()
class MediaFileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MediaFileWhereInput,
  })
  @Field(() => MediaFileWhereInput, { nullable: true })
  @Type(() => MediaFileWhereInput)
  where?: MediaFileWhereInput;

  @ApiProperty({
    required: false,
    type: MediaFileOrderByInput,
  })
  @Field(() => MediaFileOrderByInput, { nullable: true })
  @Type(() => MediaFileOrderByInput)
  orderBy?: MediaFileOrderByInput;

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

export { MediaFileFindManyArgs };
