import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumPaymentStatus } from "./EnumPaymentStatus";
import { IsEnum, IsOptional, IsString } from "class-validator";
@InputType()
class PaymentCreateInput {
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
  transactionId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionUserId?: string | null;
}
export { PaymentCreateInput };
