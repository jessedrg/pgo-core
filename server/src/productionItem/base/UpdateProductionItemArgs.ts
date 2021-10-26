import { ArgsType, Field } from "@nestjs/graphql";
import { ProductionItemWhereUniqueInput } from "./ProductionItemWhereUniqueInput";
import { ProductionItemUpdateInput } from "./ProductionItemUpdateInput";

@ArgsType()
class UpdateProductionItemArgs {
  @Field(() => ProductionItemWhereUniqueInput, { nullable: false })
  where!: ProductionItemWhereUniqueInput;
  @Field(() => ProductionItemUpdateInput, { nullable: false })
  data!: ProductionItemUpdateInput;
}

export { UpdateProductionItemArgs };
