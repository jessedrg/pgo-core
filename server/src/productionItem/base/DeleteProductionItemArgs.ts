import { ArgsType, Field } from "@nestjs/graphql";
import { ProductionItemWhereUniqueInput } from "./ProductionItemWhereUniqueInput";

@ArgsType()
class DeleteProductionItemArgs {
  @Field(() => ProductionItemWhereUniqueInput, { nullable: false })
  where!: ProductionItemWhereUniqueInput;
}

export { DeleteProductionItemArgs };
