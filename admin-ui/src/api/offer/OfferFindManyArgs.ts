import { OfferWhereInput } from "./OfferWhereInput";
import { OfferOrderByInput } from "./OfferOrderByInput";

export type OfferFindManyArgs = {
  where?: OfferWhereInput;
  orderBy?: OfferOrderByInput;
  skip?: number;
  take?: number;
};
