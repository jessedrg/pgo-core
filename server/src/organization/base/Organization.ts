import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountPaymentMethod } from "../../accountPaymentMethod/base/AccountPaymentMethod";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Address } from "../../address/base/Address";
import { Order } from "../../order/base/Order";
import { User } from "../../user/base/User";
@ObjectType()
class Organization {
  @ApiProperty({
    required: false,
    type: () => [AccountPaymentMethod],
  })
  @ValidateNested()
  @Type(() => AccountPaymentMethod)
  @IsOptional()
  accountPaymentMethodInOrganization?: Array<AccountPaymentMethod>;

  @ApiProperty({
    required: false,
    type: () => Address,
  })
  @ValidateNested()
  @Type(() => Address)
  @IsOptional()
  contactAdressId?: Address | null;

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
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  organizationInOrder?: Array<Order>;

  @ApiProperty({
    required: false,
    type: () => AccountPaymentMethod,
  })
  @ValidateNested()
  @Type(() => AccountPaymentMethod)
  @IsOptional()
  paymenMethodId?: AccountPaymentMethod | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  usersInOrganization?: Array<User>;
}
export { Organization };
