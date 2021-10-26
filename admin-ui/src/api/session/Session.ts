import { User } from "../user/User";

export type Session = {
  authMethod: string | null;
  createdAt: Date;
  id: string;
  sessionToken: string | null;
  updatedAt: Date;
  userId?: User | null;
};
