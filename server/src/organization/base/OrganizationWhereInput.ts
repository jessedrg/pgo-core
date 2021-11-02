import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationPaymentMethodWhereUniqueInput } from "../../organizationPaymentMethod/base/OrganizationPaymentMethodWhereUniqueInput";
@InputType()
class OrganizationWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OrganizationPaymentMethodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationPaymentMethodWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationPaymentMethodWhereUniqueInput, {
    nullable: true,
  })
  paymentMethod?: OrganizationPaymentMethodWhereUniqueInput;
}
export { OrganizationWhereInput };
