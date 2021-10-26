import { ArgsType, Field } from "@nestjs/graphql";
import { OfferWhereUniqueInput } from "./OfferWhereUniqueInput";

@ArgsType()
class DeleteOfferArgs {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  where!: OfferWhereUniqueInput;
}

export { DeleteOfferArgs };
