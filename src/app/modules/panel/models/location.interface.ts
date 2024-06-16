export interface LocationResponse {
  success: boolean;
  error: Error;
}

export interface Error {
  code: number;
  type: string;
  info: string;
}

export interface Location extends LocationResponse {
  ip: string;
  type: string;
  continentCode: string;
  continentName: string;
  countryCode: string;
  countryName: string;
  regionCode: string;
  regionName: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  location: LocationClass;
}

export interface LocationClass {
  geonameId: number;
  capital: string;
  languages: Language[];
  countryFlag: string;
  countryFlagEmoji: string;
  countryFlagEmojiUnicode: string;
  callingCode: string;
  isEu: boolean;
}

export interface Language {
  code: string;
  name: string;
  native: string;
}
