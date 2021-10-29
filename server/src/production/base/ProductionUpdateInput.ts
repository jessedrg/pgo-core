import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsEnum } from "class-validator";
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
