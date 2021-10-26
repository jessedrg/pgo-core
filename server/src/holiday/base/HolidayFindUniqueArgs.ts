import { ArgsType, Field } from "@nestjs/graphql";
import { HolidayWhereUniqueInput } from "./HolidayWhereUniqueInput";

@ArgsType()
class HolidayFindUniqueArgs {
  @Field(() => HolidayWhereUniqueInput, { nullable: false })
  where!: HolidayWhereUniqueInput;
}

export { HolidayFindUniqueArgs };
