import { ArgsType, Field } from "@nestjs/graphql";
import { SessionWhereUniqueInput } from "./SessionWhereUniqueInput";
import { SessionUpdateInput } from "./SessionUpdateInput";

@ArgsType()
class UpdateSessionArgs {
  @Field(() => SessionWhereUniqueInput, { nullable: false })
  where!: SessionWhereUniqueInput;
  @Field(() => SessionUpdateInput, { nullable: false })
  data!: SessionUpdateInput;
}

export { UpdateSessionArgs };
