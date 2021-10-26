import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PartWhereUniqueInput } from "../../part/base/PartWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductionWhereUniqueInput } from "../../production/base/ProductionWhereUniqueInput";
@InputType()
class ProductionItemUpdateInput {
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
    type: () => ProductionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductionWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductionWhereUniqueInput, {
    nullable: true,
  })
  productionId?: ProductionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  shippedQuantity?: number | null;
}
export { ProductionItemUpdateInput };
