import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  authMethod?: string | null;
  sessionToken?: string | null;
  userId?: UserWhereUniqueInput | null;
};
