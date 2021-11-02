import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsJSON,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Organization } from "../../organization/base/Organization";
import { EnumOrganizationPaymentMethodType } from "./EnumOrganizationPaymentMethodType";
@ObjectType()
class OrganizationPaymentMethod {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  data!: JsonValue | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Organization],
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Array<Organization>;

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

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { OrganizationPaymentMethod };
