import { ArgsType, Field } from "@nestjs/graphql";
import { ProductionCreateInput } from "./ProductionCreateInput";

@ArgsType()
class CreateProductionArgs {
  @Field(() => ProductionCreateInput, { nullable: false })
  data!: ProductionCreateInput;
}

export { CreateProductionArgs };
