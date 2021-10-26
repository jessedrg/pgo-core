import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Account } from "../../account/base/Account";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { EnumPaymentStatus } from "./EnumPaymentStatus";
@ObjectType()
class Payment {
  @ApiProperty({
    required: false,
    type: () => Account,
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  accountId?: Account | null;

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
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  orderId?: Order | null;

  @ApiProperty({
    required: false,
    enum: EnumPaymentStatus,
  })
  @IsEnum(EnumPaymentStatus)
  @IsOptional()
  @Field(() => EnumPaymentStatus, {
    nullable: true,
  })
  status?: "pending" | "completed" | "rejected" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionId!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionUserId!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Payment };
