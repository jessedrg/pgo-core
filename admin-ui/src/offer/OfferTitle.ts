import { Offer as TOffer } from "../api/offer/Offer";

export const OFFER_TITLE_FIELD = "id";

export const OfferTitle = (record: TOffer): string => {
  return record.id || record.id;
};
