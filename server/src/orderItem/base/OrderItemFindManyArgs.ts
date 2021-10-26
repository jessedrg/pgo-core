import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemWhereInput } from "./OrderItemWhereInput";
import { Type } from "class-transformer";
import { OrderItemOrderByInput } from "./OrderItemOrderByInput";

@ArgsType()
class OrderItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrderItemWhereInput,
  })
  @Field(() => OrderItemWhereInput, { nullable: true })
  @Type(() => OrderItemWhereInput)
  where?: OrderItemWhereInput;

  @ApiProperty({
    required: false,
    type: OrderItemOrderByInput,
  })
  @Field(() => OrderItemOrderByInput, { nullable: true })
  @Type(() => OrderItemOrderByInput)
  orderBy?: OrderItemOrderByInput;

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

export { OrderItemFindManyArgs };
