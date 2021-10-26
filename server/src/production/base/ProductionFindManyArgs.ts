import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductionWhereInput } from "./ProductionWhereInput";
import { Type } from "class-transformer";
import { ProductionOrderByInput } from "./ProductionOrderByInput";

@ArgsType()
class ProductionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductionWhereInput,
  })
  @Field(() => ProductionWhereInput, { nullable: true })
  @Type(() => ProductionWhereInput)
  where?: ProductionWhereInput;

  @ApiProperty({
    required: false,
    type: ProductionOrderByInput,
  })
  @Field(() => ProductionOrderByInput, { nullable: true })
  @Type(() => ProductionOrderByInput)
  orderBy?: ProductionOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductionFindManyArgs };
