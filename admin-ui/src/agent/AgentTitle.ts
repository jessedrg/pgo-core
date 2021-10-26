import { Agent as TAgent } from "../api/agent/Agent";

export const AGENT_TITLE_FIELD = "id";

export const AgentTitle = (record: TAgent): string => {
  return record.id || record.id;
};
