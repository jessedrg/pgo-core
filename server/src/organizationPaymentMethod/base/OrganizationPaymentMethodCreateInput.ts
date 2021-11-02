import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsOptional, IsEnum } from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { EnumOrganizationPaymentMethodType } from "./EnumOrganizationPaymentMethodType";
@InputType()
class OrganizationPaymentMethodCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  data?: JsonValue | null;

  @ApiProperty({
    required: false,
    enum: EnumOrganizationPaymentMethodType,
  })
  @IsEnum(EnumOrganizationPaymentMethodType)
  @IsOptional()
  @Field(() => EnumOrganizationPaymentMethodType, {
    nullable: true,
  })
  type?: "bankAccount" | "card" | "deferred" | "paypal" | null;
}
export { OrganizationPaymentMethodCreateInput };
