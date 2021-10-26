import { ArgsType, Field } from "@nestjs/graphql";
import { OrderItemWhereUniqueInput } from "./OrderItemWhereUniqueInput";

@ArgsType()
class DeleteOrderItemArgs {
  @Field(() => OrderItemWhereUniqueInput, { nullable: false })
  where!: OrderItemWhereUniqueInput;
}

export { DeleteOrderItemArgs };
