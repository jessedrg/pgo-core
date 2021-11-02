import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum } from "class-validator";
import { EnumOrganizationPaymentMethodType } from "./EnumOrganizationPaymentMethodType";
@InputType()
class OrganizationPaymentMethodWhereInput {
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
    enum: EnumOrganizationPaymentMethodType,
  })
  @IsEnum(EnumOrganizationPaymentMethodType)
  @IsOptional()
  @Field(() => EnumOrganizationPaymentMethodType, {
    nullable: true,
  })
  type?: "bankAccount" | "card" | "deferred" | "paypal";
}
export { OrganizationPaymentMethodWhereInput };
