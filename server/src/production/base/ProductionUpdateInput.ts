import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { Type } from "class-transformer";
import { PartWhereUniqueInput } from "../../part/base/PartWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { EnumProductionStatus } from "./EnumProductionStatus";
@InputType()
class ProductionUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  discomformity?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  orderId?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PartWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PartWhereUniqueInput)
  @IsOptional()
  @Field(() => PartWhereUniqueInput, {
    nullable: true,
  })
  partId?: PartWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProviderWhereUniqueInput)
  @IsOptional()
  @Field(() => ProviderWhereUniqueInput, {
    nullable: true,
  })
  providerId?: ProviderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumProductionStatus,
  })
  @IsEnum(EnumProductionStatus)
  @IsOptional()
  @Field(() => EnumProductionStatus, {
    nullable: true,
  })
  status?:
    | "pending"
    | "processing"
    | "shipped"
    | "quality"
    | "completed"
    | "canceled"
    | "rejected"
    | null;
}
export { ProductionUpdateInput };
