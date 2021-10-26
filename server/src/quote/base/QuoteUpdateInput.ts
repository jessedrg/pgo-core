import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { EnumQuoteStatus } from "./EnumQuoteStatus";
@InputType()
class QuoteUpdateInput {
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
  accountId?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  completedAt?: Date | null;

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
  providerId?: ProviderWhereUniqueInput | null;

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
}
export { QuoteUpdateInput };
