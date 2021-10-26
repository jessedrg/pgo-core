import { ArgsType, Field } from "@nestjs/graphql";
import { MediaFileWhereUniqueInput } from "./MediaFileWhereUniqueInput";
import { MediaFileUpdateInput } from "./MediaFileUpdateInput";

@ArgsType()
class UpdateMediaFileArgs {
  @Field(() => MediaFileWhereUniqueInput, { nullable: false })
  where!: MediaFileWhereUniqueInput;
  @Field(() => MediaFileUpdateInput, { nullable: false })
  data!: MediaFileUpdateInput;
}

export { UpdateMediaFileArgs };
