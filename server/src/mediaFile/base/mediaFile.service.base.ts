import { PrismaService } from "nestjs-prisma";
import { Prisma, MediaFile, Part } from "@prisma/client";

export class MediaFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MediaFileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaFileFindManyArgs>
  ): Promise<number> {
    return this.prisma.mediaFile.count(args);
  }

  async findMany<T extends Prisma.MediaFileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaFileFindManyArgs>
  ): Promise<MediaFile[]> {
    return this.prisma.mediaFile.findMany(args);
  }
  async findOne<T extends Prisma.MediaFileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaFileFindUniqueArgs>
  ): Promise<MediaFile | null> {
    return this.prisma.mediaFile.findUnique(args);
  }
  async create<T extends Prisma.MediaFileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaFileCreateArgs>
  ): Promise<MediaFile> {
    return this.prisma.mediaFile.create<T>(args);
  }
  async update<T extends Prisma.MediaFileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaFileUpdateArgs>
  ): Promise<MediaFile> {
    return this.prisma.mediaFile.update<T>(args);
  }
  async delete<T extends Prisma.MediaFileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaFileDeleteArgs>
  ): Promise<MediaFile> {
    return this.prisma.mediaFile.delete(args);
  }

  async findBlueprintInPart(
    parentId: string,
    args: Prisma.PartFindManyArgs
  ): Promise<Part[]> {
    return this.prisma.mediaFile
      .findUnique({
        where: { id: parentId },
      })
      .blueprintInPart(args);
  }

  async findOriginalBluePrintInPart(
    parentId: string,
    args: Prisma.PartFindManyArgs
  ): Promise<Part[]> {
    return this.prisma.mediaFile
      .findUnique({
        where: { id: parentId },
      })
      .originalBluePrintInPart(args);
  }

  async findOriginalModelInPart(
    parentId: string,
    args: Prisma.PartFindManyArgs
  ): Promise<Part[]> {
    return this.prisma.mediaFile
      .findUnique({
        where: { id: parentId },
      })
      .originalModelInPart(args);
  }

  async findStepModelInPart(
    parentId: string,
    args: Prisma.PartFindManyArgs
  ): Promise<Part[]> {
    return this.prisma.mediaFile
      .findUnique({
        where: { id: parentId },
      })
      .stepModelInPart(args);
  }

  async findStlModelInPart(
    parentId: string,
    args: Prisma.PartFindManyArgs
  ): Promise<Part[]> {
    return this.prisma.mediaFile
      .findUnique({
        where: { id: parentId },
      })
      .stlModelInPart(args);
  }
}
