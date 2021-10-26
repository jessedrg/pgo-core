import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationWhereInput } from "./OrganizationWhereInput";
import { Type } from "class-transformer";
import { OrganizationOrderByInput } from "./OrganizationOrderByInput";

@ArgsType()
class OrganizationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrganizationWhereInput,
  })
  @Field(() => OrganizationWhereInput, { nullable: true })
  @Type(() => OrganizationWhereInput)
  where?: OrganizationWhereInput;

  @ApiProperty({
    required: false,
    type: OrganizationOrderByInput,
  })
  @Field(() => OrganizationOrderByInput, { nullable: true })
  @Type(() => OrganizationOrderByInput)
  orderBy?: OrganizationOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OrganizationFindManyArgs };
