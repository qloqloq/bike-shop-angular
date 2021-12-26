import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Cart } from "./cart";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    url = environment.baseUrl + "/api/cart";

    constructor(private http: HttpClient) { }

    public get(): Observable<Cart> {
        return this.http.get<Cart>(this.url);
    }

    public add(id: number): Observable<any> {
        return this.http.post(`${this.url}/${id}`, {body: null});
    }


    public remove(id: number, quantity: number): Observable<any> {
        return this.http.delete<any>(`${this.url}/${id}`);
    }

}