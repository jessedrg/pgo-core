import { ArgsType, Field } from "@nestjs/graphql";
import { MediaFileWhereUniqueInput } from "./MediaFileWhereUniqueInput";

@ArgsType()
class MediaFileFindUniqueArgs {
  @Field(() => MediaFileWhereUniqueInput, { nullable: false })
  where!: MediaFileWhereUniqueInput;
}

export { MediaFileFindUniqueArgs };
