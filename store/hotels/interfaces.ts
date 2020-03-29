import { actionTypes } from './actions';

// Action interfaces
export interface GetHotels {
  type: actionTypes.GET_HOTELS;
}

export interface GetHotelsSuccess {
  type: actionTypes.GET_HOTELS_SUCCESS;
  entities: Array<object>;
}

export interface GetHotelsFail {
  type: actionTypes.GET_HOTELS_FAIL;
  error: Error;
}

// Hotel interfaces
export interface HotelInterface {
  address: AddressInterface;
  checkInTime: string;
  code: string;
  contacts: Array<ContactInterface>;
  currency: string;
  image: string;
  languages: Array<LanguageInterface>;
  name: string;
  occupancySettings: OccupancySettings;
  website: string;
}

export interface ContactInterface {
  phone: string;
  email: string;
  type: 'main' | 'booking';
}

export interface LanguageInterface {
  code: string;
  isDefault: boolean;
}

export interface AddressInterface {
  city: string;
  street: string;
  streetNumber: string;
  streetNumberAddition: string;
  postalCode: string;
  gps: string;
}

export interface OccupancySettings {
  baby: {
    maxAge: number;
    minAge: number;
  };
  child: {
    maxAge: number;
    minAge: number;
  };
}
