import { ArgsType, Field } from "@nestjs/graphql";
import { OrderItemWhereUniqueInput } from "./OrderItemWhereUniqueInput";

@ArgsType()
class OrderItemFindUniqueArgs {
  @Field(() => OrderItemWhereUniqueInput, { nullable: false })
  where!: OrderItemWhereUniqueInput;
}

export { OrderItemFindUniqueArgs };
