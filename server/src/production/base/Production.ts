import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ProductionItem } from "../../productionItem/base/ProductionItem";
import { EnumProductionStatus } from "./EnumProductionStatus";
@ObjectType()
class Production {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  discomformity!: boolean | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Production,
  })
  @ValidateNested()
  @Type(() => Production)
  @IsOptional()
  parentId?: Production | null;

  @ApiProperty({
    required: false,
    type: () => [Production],
  })
  @ValidateNested()
  @Type(() => Production)
  @IsOptional()
  production?: Array<Production>;

  @ApiProperty({
    required: false,
    type: () => [ProductionItem],
  })
  @ValidateNested()
  @Type(() => ProductionItem)
  @IsOptional()
  productionItemInProduction?: Array<ProductionItem>;

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

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Production };
