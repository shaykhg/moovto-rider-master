import {Injectable} from '@angular/core';
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult} from '@ionic-native/native-geocoder/ngx';
import {BehaviorSubject, Observable} from 'rxjs';
import {Plugins} from '@capacitor/core';
const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
/**
 * This service is used to Location related tasks,
 * this service uses Ionic's native plugins to get current location and for geocoding purpose
 */
export class LocationService {

  public locationListener: BehaviorSubject<any> = new BehaviorSubject({valid: false});
  private options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(private nativeGeocoder: NativeGeocoder) {
  }

  /**
   * This function can help with reverse geocoding. Converting coordinates to addresses,
   * @param lat Latitude
   * @param lng Longitude
   */
  public reverseGeoCode(lat: number, lng: number): Observable<any> {
    return new Observable(observer => {
      this.nativeGeocoder.reverseGeocode(lat, lng, this.options)
          .then((result: NativeGeocoderResult[]) => {
            console.log(JSON.stringify(result[0]));
            observer.next(result[0]);
            observer.complete();
          })
          .catch((err: any) => {
            console.log(err);
            observer.error({msg: 'An error occurred while reverse geocoding', error: err});
            observer.complete();
          });
    });
  }

  /**
   * This function can help with geocoding. Converting addresses to coordinates,
   * @param address Address which needs to be converted to coordinate
   */
  public addressToCoordinates(address: string): Observable<any> {
    return new Observable(observer => {
      this.nativeGeocoder.forwardGeocode(address, this.options)
          .then((result: NativeGeocoderResult[]) => {
            console.log(JSON.stringify(result[0]));
            observer.next({lat: result[0].latitude, lng: result[0].longitude});
            observer.complete();
          })
          .catch((err: any) => {
            console.log(err);
            observer.error({msg: 'An error occurred while reverse geocoding', error: err});
            observer.complete();
          });
    });
  }

  /**
   * This function returns current location of user in form of Observable
   */
  public getCurrentLocation(): Observable<any> {
    return new Observable(observer => {
      Geolocation.getCurrentPosition().then((resp) => {
        observer.next({lat: resp.coords.latitude, lng: resp.coords.longitude});
        observer.complete();
      }).catch((err) => {
        observer.error({msg: 'An error occurred while reverse geocoding', error: err});
        observer.complete();
      });

    });
  }

  /**
   * This function starts location updates once called, it updates globally
   * defined property of this class named locationListener and it can be subscribed
   * to listen events of location update.
   */
  public startLocationUpdates() {
    Geolocation.watchPosition({}, (position, err) => {
      console.log('Position Change', position);
      if ('coords' in position) {
        this.locationListener.next({valid: true, lat: position.coords.latitude, lng: position.coords.longitude});
      }
    });
  }

}
