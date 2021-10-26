import { ArgsType, Field } from "@nestjs/graphql";
import { ShipmentCreateInput } from "./ShipmentCreateInput";

@ArgsType()
class CreateShipmentArgs {
  @Field(() => ShipmentCreateInput, { nullable: false })
  data!: ShipmentCreateInput;
}

export { CreateShipmentArgs };
