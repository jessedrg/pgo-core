import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { PartWhereUniqueInput } from "../../part/base/PartWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { EnumProductionStatus } from "./EnumProductionStatus";
@InputType()
class ProductionWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  discomformity?: BooleanNullableFilter;

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
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  orderId?: OrderWhereUniqueInput;

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
  partId?: PartWhereUniqueInput;

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
  providerId?: ProviderWhereUniqueInput;

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
    | "rejected";
}
export { ProductionWhereInput };
