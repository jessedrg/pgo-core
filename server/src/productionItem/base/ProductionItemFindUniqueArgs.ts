import { ArgsType, Field } from "@nestjs/graphql";
import { ProductionItemWhereUniqueInput } from "./ProductionItemWhereUniqueInput";

@ArgsType()
class ProductionItemFindUniqueArgs {
  @Field(() => ProductionItemWhereUniqueInput, { nullable: false })
  where!: ProductionItemWhereUniqueInput;
}

export { ProductionItemFindUniqueArgs };
