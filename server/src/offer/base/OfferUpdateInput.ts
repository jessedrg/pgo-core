import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumOfferStatus } from "./EnumOfferStatus";
@InputType()
class OfferUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  account?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customNumber?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  publishedAt?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumOfferStatus,
  })
  @IsEnum(EnumOfferStatus)
  @IsOptional()
  @Field(() => EnumOfferStatus, {
    nullable: true,
  })
  status?: "draft" | "pending" | "publish" | "rejected" | null;
}
export { OfferUpdateInput };
