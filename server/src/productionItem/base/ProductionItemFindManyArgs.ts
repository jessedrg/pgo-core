import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductionItemWhereInput } from "./ProductionItemWhereInput";
import { Type } from "class-transformer";
import { ProductionItemOrderByInput } from "./ProductionItemOrderByInput";

@ArgsType()
class ProductionItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductionItemWhereInput,
  })
  @Field(() => ProductionItemWhereInput, { nullable: true })
  @Type(() => ProductionItemWhereInput)
  where?: ProductionItemWhereInput;

  @ApiProperty({
    required: false,
    type: ProductionItemOrderByInput,
  })
  @Field(() => ProductionItemOrderByInput, { nullable: true })
  @Type(() => ProductionItemOrderByInput)
  orderBy?: ProductionItemOrderByInput;

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

export { ProductionItemFindManyArgs };
