import { ArgsType, Field } from "@nestjs/graphql";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";
import { OrganizationUpdateInput } from "./OrganizationUpdateInput";

@ArgsType()
class UpdateOrganizationArgs {
  @Field(() => OrganizationWhereUniqueInput, { nullable: false })
  where!: OrganizationWhereUniqueInput;
  @Field(() => OrganizationUpdateInput, { nullable: false })
  data!: OrganizationUpdateInput;
}

export { UpdateOrganizationArgs };
