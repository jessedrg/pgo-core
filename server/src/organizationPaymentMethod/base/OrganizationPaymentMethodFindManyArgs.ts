import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationPaymentMethodWhereInput } from "./OrganizationPaymentMethodWhereInput";
import { Type } from "class-transformer";
import { OrganizationPaymentMethodOrderByInput } from "./OrganizationPaymentMethodOrderByInput";

@ArgsType()
class OrganizationPaymentMethodFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrganizationPaymentMethodWhereInput,
  })
  @Field(() => OrganizationPaymentMethodWhereInput, { nullable: true })
  @Type(() => OrganizationPaymentMethodWhereInput)
  where?: OrganizationPaymentMethodWhereInput;

  @ApiProperty({
    required: false,
    type: OrganizationPaymentMethodOrderByInput,
  })
  @Field(() => OrganizationPaymentMethodOrderByInput, { nullable: true })
  @Type(() => OrganizationPaymentMethodOrderByInput)
  orderBy?: OrganizationPaymentMethodOrderByInput;

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

export { OrganizationPaymentMethodFindManyArgs };
