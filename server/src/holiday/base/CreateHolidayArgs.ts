import { ArgsType, Field } from "@nestjs/graphql";
import { HolidayCreateInput } from "./HolidayCreateInput";

@ArgsType()
class CreateHolidayArgs {
  @Field(() => HolidayCreateInput, { nullable: false })
  data!: HolidayCreateInput;
}

export { CreateHolidayArgs };
