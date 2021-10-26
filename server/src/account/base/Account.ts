import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Offer } from "../../offer/base/Offer";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsJSON,
  IsDate,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { Agent } from "../../agent/base/Agent";
import { Payment } from "../../payment/base/Payment";
import { AccountPaymentMethod } from "../../accountPaymentMethod/base/AccountPaymentMethod";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Invite } from "../../invite/base/Invite";
import { PartMessage } from "../../partMessage/base/PartMessage";
import { Quote } from "../../quote/base/Quote";
import { User } from "../../user/base/User";
@ObjectType()
class Account {
  @ApiProperty({
    required: false,
    type: () => [Offer],
  })
  @ValidateNested()
  @Type(() => Offer)
  @IsOptional()
  account?: Array<Offer>;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  accountIdInOrder?: Array<Order>;

  @ApiProperty({
    required: false,
    type: () => [Agent],
  })
  @ValidateNested()
  @Type(() => Agent)
  @IsOptional()
  accountInAgent?: Array<Agent>;

  @ApiProperty({
    required: false,
    type: () => [Payment],
  })
  @ValidateNested()
  @Type(() => Payment)
  @IsOptional()
  accountInPayment?: Array<Payment>;

  @ApiProperty({
    required: false,
    type: () => [AccountPaymentMethod],
  })
  @ValidateNested()
  @Type(() => AccountPaymentMethod)
  @IsOptional()
  accountPaymentMethodsInAccount?: Array<AccountPaymentMethod>;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  active!: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  configuration!: JsonValue | null;

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
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Invite],
  })
  @ValidateNested()
  @Type(() => Invite)
  @IsOptional()
  invitesInAccount?: Array<Invite>;

  @ApiProperty({
    required: false,
    type: () => [PartMessage],
  })
  @ValidateNested()
  @Type(() => PartMessage)
  @IsOptional()
  partMessagesInReciever?: Array<PartMessage>;

  @ApiProperty({
    required: false,
    type: () => [PartMessage],
  })
  @ValidateNested()
  @Type(() => PartMessage)
  @IsOptional()
  partMessagesInSender?: Array<PartMessage>;

  @ApiProperty({
    required: false,
    type: () => [Quote],
  })
  @ValidateNested()
  @Type(() => Quote)
  @IsOptional()
  quote?: Array<Quote>;

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
  usersInAccount?: Array<User>;
}
export { Account };
