import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class InviteWhereInput {
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
  accountId?: AccountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  active?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  expiresAt?: DateTimeNullableFilter;

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
}
export { InviteWhereInput };
