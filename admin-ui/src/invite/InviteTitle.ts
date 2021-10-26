import { Invite as TInvite } from "../api/invite/Invite";

export const INVITE_TITLE_FIELD = "id";

export const InviteTitle = (record: TInvite): string => {
  return record.id || record.id;
};
