import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  authMethod?: string | null;
  sessionToken?: string | null;
  userId?: UserWhereUniqueInput | null;
};
