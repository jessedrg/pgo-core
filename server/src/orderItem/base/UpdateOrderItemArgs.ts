import { ArgsType, Field } from "@nestjs/graphql";
import { OrderItemWhereUniqueInput } from "./OrderItemWhereUniqueInput";
import { OrderItemUpdateInput } from "./OrderItemUpdateInput";

@ArgsType()
class UpdateOrderItemArgs {
  @Field(() => OrderItemWhereUniqueInput, { nullable: false })
  where!: OrderItemWhereUniqueInput;
  @Field(() => OrderItemUpdateInput, { nullable: false })
  data!: OrderItemUpdateInput;
}

export { UpdateOrderItemArgs };
