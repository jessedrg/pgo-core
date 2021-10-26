import { ArgsType, Field } from "@nestjs/graphql";
import { HolidayWhereUniqueInput } from "./HolidayWhereUniqueInput";

@ArgsType()
class DeleteHolidayArgs {
  @Field(() => HolidayWhereUniqueInput, { nullable: false })
  where!: HolidayWhereUniqueInput;
}

export { DeleteHolidayArgs };
