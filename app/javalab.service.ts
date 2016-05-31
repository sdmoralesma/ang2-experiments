import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class JavalabService {

    private javalab = "assets/json/mock-response.json";
    // private javalab = "localhost:48080/rest/process/new"; //TODO: fix CORS filter

    constructor(private http:Http) {
    }

    getMockResponse() {
        return this.http.get(this.javalab).map((res:Response) => res.json());
        // return this.initialData
    }
}