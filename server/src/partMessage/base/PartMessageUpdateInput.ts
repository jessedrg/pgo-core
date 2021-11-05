import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { PartWhereUniqueInput } from "../../part/base/PartWhereUniqueInput";
import { Type } from "class-transformer";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { EnumPartMessageUserType } from "./EnumPartMessageUserType";
@InputType()
class PartMessageUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string | null;

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
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  sender?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  type?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPartMessageUserType,
  })
  @IsEnum(EnumPartMessageUserType)
  @IsOptional()
  @Field(() => EnumPartMessageUserType, {
    nullable: true,
  })
  userType?: "Agent" | "Client" | "Provider" | null;
}
export { PartMessageUpdateInput };
