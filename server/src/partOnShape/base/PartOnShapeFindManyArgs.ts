import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PartOnShapeWhereInput } from "./PartOnShapeWhereInput";
import { Type } from "class-transformer";
import { PartOnShapeOrderByInput } from "./PartOnShapeOrderByInput";

@ArgsType()
class PartOnShapeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PartOnShapeWhereInput,
  })
  @Field(() => PartOnShapeWhereInput, { nullable: true })
  @Type(() => PartOnShapeWhereInput)
  where?: PartOnShapeWhereInput;

  @ApiProperty({
    required: false,
    type: PartOnShapeOrderByInput,
  })
  @Field(() => PartOnShapeOrderByInput, { nullable: true })
  @Type(() => PartOnShapeOrderByInput)
  orderBy?: PartOnShapeOrderByInput;

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

export { PartOnShapeFindManyArgs };
