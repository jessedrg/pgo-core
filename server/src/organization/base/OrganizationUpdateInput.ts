import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { AccountPaymentMethodWhereUniqueInput } from "../../accountPaymentMethod/base/AccountPaymentMethodWhereUniqueInput";
@InputType()
class OrganizationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  contactAdressId?: AddressWhereUniqueInput | null;

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
    type: () => AccountPaymentMethodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountPaymentMethodWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountPaymentMethodWhereUniqueInput, {
    nullable: true,
  })
  paymenMethodId?: AccountPaymentMethodWhereUniqueInput | null;
}
export { OrganizationUpdateInput };
