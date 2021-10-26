import { ArgsType, Field } from "@nestjs/graphql";
import { OfferWhereUniqueInput } from "./OfferWhereUniqueInput";

@ArgsType()
class OfferFindUniqueArgs {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  where!: OfferWhereUniqueInput;
}

export { OfferFindUniqueArgs };
