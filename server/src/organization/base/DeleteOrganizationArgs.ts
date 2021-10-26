import { ArgsType, Field } from "@nestjs/graphql";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";

@ArgsType()
class DeleteOrganizationArgs {
  @Field(() => OrganizationWhereUniqueInput, { nullable: false })
  where!: OrganizationWhereUniqueInput;
}

export { DeleteOrganizationArgs };
