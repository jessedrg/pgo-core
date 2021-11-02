import { ArgsType, Field } from "@nestjs/graphql";
import { OrganizationPaymentMethodWhereUniqueInput } from "./OrganizationPaymentMethodWhereUniqueInput";
import { OrganizationPaymentMethodUpdateInput } from "./OrganizationPaymentMethodUpdateInput";

@ArgsType()
class UpdateOrganizationPaymentMethodArgs {
  @Field(() => OrganizationPaymentMethodWhereUniqueInput, { nullable: false })
  where!: OrganizationPaymentMethodWhereUniqueInput;
  @Field(() => OrganizationPaymentMethodUpdateInput, { nullable: false })
  data!: OrganizationPaymentMethodUpdateInput;
}

export { UpdateOrganizationPaymentMethodArgs };
