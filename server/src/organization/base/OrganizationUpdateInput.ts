import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { OrganizationPaymentMethodWhereUniqueInput } from "../../organizationPaymentMethod/base/OrganizationPaymentMethodWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class OrganizationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

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
  paymentMethod?: OrganizationPaymentMethodWhereUniqueInput | null;
}
export { OrganizationUpdateInput };
