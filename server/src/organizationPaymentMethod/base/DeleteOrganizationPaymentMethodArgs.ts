import { ArgsType, Field } from "@nestjs/graphql";
import { OrganizationPaymentMethodWhereUniqueInput } from "./OrganizationPaymentMethodWhereUniqueInput";

@ArgsType()
class DeleteOrganizationPaymentMethodArgs {
  @Field(() => OrganizationPaymentMethodWhereUniqueInput, { nullable: false })
  where!: OrganizationPaymentMethodWhereUniqueInput;
}

export { DeleteOrganizationPaymentMethodArgs };
