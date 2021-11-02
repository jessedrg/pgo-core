import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Account } from "../../account/base/Account";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Address } from "../../address/base/Address";
import { Part } from "../../part/base/Part";
import { OrganizationPaymentMethod } from "../../organizationPaymentMethod/base/OrganizationPaymentMethod";
@ObjectType()
class Organization {
  @ApiProperty({
    required: false,
    type: () => [Account],
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  accounts?: Array<Account>;

  @ApiProperty({
    required: false,
    type: () => [Address],
  })
  @ValidateNested()
  @Type(() => Address)
  @IsOptional()
  addresses?: Array<Address>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Part],
  })
  @ValidateNested()
  @Type(() => Part)
  @IsOptional()
  parts?: Array<Part>;

  @ApiProperty({
    required: false,
    type: () => OrganizationPaymentMethod,
  })
  @ValidateNested()
  @Type(() => OrganizationPaymentMethod)
  @IsOptional()
  paymentMethod?: OrganizationPaymentMethod | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Organization };
