import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HolidayWhereInput } from "./HolidayWhereInput";
import { Type } from "class-transformer";
import { HolidayOrderByInput } from "./HolidayOrderByInput";

@ArgsType()
class HolidayFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HolidayWhereInput,
  })
  @Field(() => HolidayWhereInput, { nullable: true })
  @Type(() => HolidayWhereInput)
  where?: HolidayWhereInput;

  @ApiProperty({
    required: false,
    type: HolidayOrderByInput,
  })
  @Field(() => HolidayOrderByInput, { nullable: true })
  @Type(() => HolidayOrderByInput)
  orderBy?: HolidayOrderByInput;

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

export { HolidayFindManyArgs };
