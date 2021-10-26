import { ArgsType, Field } from "@nestjs/graphql";
import { MediaFileWhereUniqueInput } from "./MediaFileWhereUniqueInput";

@ArgsType()
class DeleteMediaFileArgs {
  @Field(() => MediaFileWhereUniqueInput, { nullable: false })
  where!: MediaFileWhereUniqueInput;
}

export { DeleteMediaFileArgs };
