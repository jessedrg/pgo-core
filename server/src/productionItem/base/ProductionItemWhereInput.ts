import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { PartWhereUniqueInput } from "../../part/base/PartWhereUniqueInput";
import { ProductionWhereUniqueInput } from "../../production/base/ProductionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
@InputType()
class ProductionItemWhereInput {
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
    type: () => PartWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PartWhereUniqueInput)
  @IsOptional()
  @Field(() => PartWhereUniqueInput, {
    nullable: true,
  })
  part?: PartWhereUniqueInput;

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
  production?: ProductionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  quantity?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  shippedQuantity?: IntNullableFilter;
}
export { ProductionItemWhereInput };
