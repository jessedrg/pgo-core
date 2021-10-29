import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumQuoteStatus } from "./EnumQuoteStatus";
@ObjectType()
class Quote {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  completedAt!: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumQuoteStatus,
    isArray: true,
  })
  @IsEnum(EnumQuoteStatus, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumQuoteStatus], {
    nullable: true,
  })
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Quote };
