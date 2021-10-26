import { ArgsType, Field } from "@nestjs/graphql";
import { HolidayWhereUniqueInput } from "./HolidayWhereUniqueInput";
import { HolidayUpdateInput } from "./HolidayUpdateInput";

@ArgsType()
class UpdateHolidayArgs {
  @Field(() => HolidayWhereUniqueInput, { nullable: false })
  where!: HolidayWhereUniqueInput;
  @Field(() => HolidayUpdateInput, { nullable: false })
  data!: HolidayUpdateInput;
}

export { UpdateHolidayArgs };
