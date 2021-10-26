import { ArgsType, Field } from "@nestjs/graphql";
import { ShipmentWhereUniqueInput } from "./ShipmentWhereUniqueInput";

@ArgsType()
class ShipmentFindUniqueArgs {
  @Field(() => ShipmentWhereUniqueInput, { nullable: false })
  where!: ShipmentWhereUniqueInput;
}

export { ShipmentFindUniqueArgs };
