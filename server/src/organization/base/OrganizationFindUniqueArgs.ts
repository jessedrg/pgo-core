import { ArgsType, Field } from "@nestjs/graphql";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";

@ArgsType()
class OrganizationFindUniqueArgs {
  @Field(() => OrganizationWhereUniqueInput, { nullable: false })
  where!: OrganizationWhereUniqueInput;
}

export { OrganizationFindUniqueArgs };
