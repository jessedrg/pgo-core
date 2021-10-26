import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShipmentWhereInput } from "./ShipmentWhereInput";
import { Type } from "class-transformer";
import { ShipmentOrderByInput } from "./ShipmentOrderByInput";

@ArgsType()
class ShipmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ShipmentWhereInput,
  })
  @Field(() => ShipmentWhereInput, { nullable: true })
  @Type(() => ShipmentWhereInput)
  where?: ShipmentWhereInput;

  @ApiProperty({
    required: false,
    type: ShipmentOrderByInput,
  })
  @Field(() => ShipmentOrderByInput, { nullable: true })
  @Type(() => ShipmentOrderByInput)
  orderBy?: ShipmentOrderByInput;

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

export { ShipmentFindManyArgs };
