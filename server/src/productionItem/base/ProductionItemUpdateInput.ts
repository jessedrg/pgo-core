import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductionWhereUniqueInput } from "../../production/base/ProductionWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class ProductionItemUpdateInput {
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
  production?: ProductionWhereUniqueInput | null;

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
