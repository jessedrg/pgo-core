import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Part } from "../../part/base/Part";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
@ObjectType()
class MediaFile {
  @ApiProperty({
    required: false,
    type: () => [Part],
  })
  @ValidateNested()
  @Type(() => Part)
  @IsOptional()
  blueprintInPart?: Array<Part>;

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
    type: () => [Part],
  })
  @ValidateNested()
  @Type(() => Part)
  @IsOptional()
  originalBluePrintInPart?: Array<Part>;

  @ApiProperty({
    required: false,
    type: () => [Part],
  })
  @ValidateNested()
  @Type(() => Part)
  @IsOptional()
  originalModelInPart?: Array<Part>;

  @ApiProperty({
    required: false,
    type: () => [Part],
  })
  @ValidateNested()
  @Type(() => Part)
  @IsOptional()
  stepModelInPart?: Array<Part>;

  @ApiProperty({
    required: false,
    type: () => [Part],
  })
  @ValidateNested()
  @Type(() => Part)
  @IsOptional()
  stlModelInPart?: Array<Part>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  type!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url!: string | null;
}
export { MediaFile };
