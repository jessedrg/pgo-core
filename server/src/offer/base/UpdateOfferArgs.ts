import { ArgsType, Field } from "@nestjs/graphql";
import { OfferWhereUniqueInput } from "./OfferWhereUniqueInput";
import { OfferUpdateInput } from "./OfferUpdateInput";

@ArgsType()
class UpdateOfferArgs {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  where!: OfferWhereUniqueInput;
  @Field(() => OfferUpdateInput, { nullable: false })
  data!: OfferUpdateInput;
}

export { UpdateOfferArgs };
