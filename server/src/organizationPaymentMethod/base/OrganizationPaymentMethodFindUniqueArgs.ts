import { ArgsType, Field } from "@nestjs/graphql";
import { OrganizationPaymentMethodWhereUniqueInput } from "./OrganizationPaymentMethodWhereUniqueInput";

@ArgsType()
class OrganizationPaymentMethodFindUniqueArgs {
  @Field(() => OrganizationPaymentMethodWhereUniqueInput, { nullable: false })
  where!: OrganizationPaymentMethodWhereUniqueInput;
}

export { OrganizationPaymentMethodFindUniqueArgs };
