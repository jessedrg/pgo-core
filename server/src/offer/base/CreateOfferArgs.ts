import { ArgsType, Field } from "@nestjs/graphql";
import { OfferCreateInput } from "./OfferCreateInput";

@ArgsType()
class CreateOfferArgs {
  @Field(() => OfferCreateInput, { nullable: false })
  data!: OfferCreateInput;
}

export { CreateOfferArgs };
