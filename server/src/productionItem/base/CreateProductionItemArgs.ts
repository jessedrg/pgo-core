import { ArgsType, Field } from "@nestjs/graphql";
import { ProductionItemCreateInput } from "./ProductionItemCreateInput";

@ArgsType()
class CreateProductionItemArgs {
  @Field(() => ProductionItemCreateInput, { nullable: false })
  data!: ProductionItemCreateInput;
}

export { CreateProductionItemArgs };
