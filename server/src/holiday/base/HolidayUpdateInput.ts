import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, ValidateNested } from "class-validator";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class HolidayUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  day?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProviderWhereUniqueInput)
  @IsOptional()
  @Field(() => ProviderWhereUniqueInput, {
    nullable: true,
  })
  provider?: ProviderWhereUniqueInput | null;
}
export { HolidayUpdateInput };
