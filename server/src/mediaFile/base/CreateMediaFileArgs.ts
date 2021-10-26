import { ArgsType, Field } from "@nestjs/graphql";
import { MediaFileCreateInput } from "./MediaFileCreateInput";

@ArgsType()
class CreateMediaFileArgs {
  @Field(() => MediaFileCreateInput, { nullable: false })
  data!: MediaFileCreateInput;
}

export { CreateMediaFileArgs };
