import { ArgsType, Field } from "@nestjs/graphql";
import { ShipmentWhereUniqueInput } from "./ShipmentWhereUniqueInput";

@ArgsType()
class DeleteShipmentArgs {
  @Field(() => ShipmentWhereUniqueInput, { nullable: false })
  where!: ShipmentWhereUniqueInput;
}

export { DeleteShipmentArgs };
