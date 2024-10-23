import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AppConstants {
    public static BASE_URL = 'https://api.easyshifters.com';
    public static APP_API_URL = 'https://www.easyshifters.com/api';
    public static ONGOING = false;
    public static ADDED = false;
    public static ORDER = {
        items : []
    };
    public static API = {

        LOGIN: AppConstants.BASE_URL + '/auth/local',
        CATEGORIES: AppConstants.BASE_URL + '/categories?enable=true',
        REGISTER: AppConstants.BASE_URL + '/auth/local/register',
        VEHICLES: AppConstants.BASE_URL + '/vehicles',
        CHARGES: AppConstants.BASE_URL + '/charges',
        USER: AppConstants.BASE_URL + '/users',
        SEND_EMAIL: AppConstants.APP_API_URL + '/sendEmail',
        ORDERS: AppConstants.BASE_URL + '/orders',
        NOTIFICATIONS: AppConstants.BASE_URL + '/notifications',
        EXTRA_CHARGES: AppConstants.BASE_URL + '/extracharges',
        GET_COORDINATES: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
        GET_ADDRESS: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
        RIDERS: AppConstants.BASE_URL + '/riders'


    };
    public static API_KEY_MAP = '';
    public static IS_LOGGED_IN = false;
    public static user;
    public static token = '';
    static FACEBOOK_ID = '561573537644778';
    static GOOGLE_ID = '231615036695-gklc894u9a3k5ei32e01svbrld7f9nn4.apps.googleusercontent.com';
    static lng: number;
    static lat: number;

    public static GET_MAPS_URL(latLng) {
        return AppConstants.API.GET_ADDRESS + latLng + '&key=' + AppConstants.API_KEY_MAP;
    }

}
