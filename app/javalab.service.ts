import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {FileNode} from "./filemanager/filemanager.component";
import "rxjs/add/operator/toPromise";

@Injectable()
export class JavalabService {

    model;

    constructor(private http:Http) {
    }

    initialize() {
        let url = "assets/json/mock-response.json";
        //  let url = "http://localhost:48080/rest/process/init/java";
        return this.http.get(url)
            .toPromise()
            .then(res => {
                let json = res.json();
                this.model = json;
                return json;
            })
            .catch(this.handleError);
    }

    runCode(param) {
        let runCodeURL = "http://localhost:48080/rest/process/run";

        let body = JSON.stringify({param});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(runCodeURL, body, options)
            .toPromise()
            .then(res => res.json())
            .catch(error => this.handleError);
    }

    private handleError(error:any) {
        console.error("An error occurred:", error);
        return Promise.reject(error.message || error);
    }

    findNodeById(id:string, tree:FileNode[]):FileNode {
        for (var node of tree) {
            var found = this.searchNode(id, node);
            if (found !== null) {
                return found;
            }
        }
    }

    private searchNode(id:string, node:FileNode) {
        if (node.id === id) {
            return node;
        } else if (node.children !== null && node.children !== undefined) {
            var result = null;
            for (var i = 0; result === null && i < node.children.length; i++) {
                result = this.searchNode(id, node.children[i]);
            }
            return result;
        }
        return null;
    }
}