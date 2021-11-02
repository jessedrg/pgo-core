import { ArgsType, Field } from "@nestjs/graphql";
import { OrganizationPaymentMethodCreateInput } from "./OrganizationPaymentMethodCreateInput";

@ArgsType()
class CreateOrganizationPaymentMethodArgs {
  @Field(() => OrganizationPaymentMethodCreateInput, { nullable: false })
  data!: OrganizationPaymentMethodCreateInput;
}

export { CreateOrganizationPaymentMethodArgs };
