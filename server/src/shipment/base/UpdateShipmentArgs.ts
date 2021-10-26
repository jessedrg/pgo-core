import { ArgsType, Field } from "@nestjs/graphql";
import { ShipmentWhereUniqueInput } from "./ShipmentWhereUniqueInput";
import { ShipmentUpdateInput } from "./ShipmentUpdateInput";

@ArgsType()
class UpdateShipmentArgs {
  @Field(() => ShipmentWhereUniqueInput, { nullable: false })
  where!: ShipmentWhereUniqueInput;
  @Field(() => ShipmentUpdateInput, { nullable: false })
  data!: ShipmentUpdateInput;
}

export { UpdateShipmentArgs };
