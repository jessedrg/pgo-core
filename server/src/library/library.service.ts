import { Injectable } from '@nestjs/common';
import { Countries } from './staticJSON/countries';
@Injectable()
export class LibraryService {
  findPhonePrefix(countryCode: string) {
    if (!Countries) {
      throw new Error('Country code not defined');
    }
    return Countries.countryCode.phone;
  }
  getCountryByPrefix(countryCode: string) {
    if (!Countries.countryCode) {
      throw new Error('Country code not defined');
    }
    return Countries.countryCode.name;
  }
  getIdiomByCodeCountry(countryCode: string) {
    if (!Countries.countryCode) {
      throw new Error('Country code not defined');
    }
    return Countries.countryCode.languages;
  }
}
