import { ArgsType, Field } from "@nestjs/graphql";
import { OrganizationCreateInput } from "./OrganizationCreateInput";

@ArgsType()
class CreateOrganizationArgs {
  @Field(() => OrganizationCreateInput, { nullable: false })
  data!: OrganizationCreateInput;
}

export { CreateOrganizationArgs };
