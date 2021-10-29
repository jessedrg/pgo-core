import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PartWhereUniqueInput } from "../../part/base/PartWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
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
  part?: PartWhereUniqueInput | null;

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
