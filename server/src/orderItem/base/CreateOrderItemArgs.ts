import { ArgsType, Field } from "@nestjs/graphql";
import { OrderItemCreateInput } from "./OrderItemCreateInput";

@ArgsType()
class CreateOrderItemArgs {
  @Field(() => OrderItemCreateInput, { nullable: false })
  data!: OrderItemCreateInput;
}

export { CreateOrderItemArgs };
