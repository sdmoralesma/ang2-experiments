import {Component, EventEmitter, Output} from "@angular/core";
import {AutoComplete, Button, Toolbar, Dialog, SplitButton, SplitButtonItem} from "primeng/primeng";
import {FileNode} from "../common";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav-bar/nav-bar.html',
    styleUrls: ['./app/nav-bar/nav-bar.css'],
    directives: [AutoComplete, Toolbar, Button, Dialog, SplitButton, SplitButtonItem, ROUTER_DIRECTIVES]
})
export class NavBarComponent {
    selected:FileNode;
    suggestions:FileNode[];
    options:FileNode[];

    displayDialog:boolean = false;

    @Output() runCodeClicked = new EventEmitter();
    @Output() testCodeClicked = new EventEmitter();
    @Output() downloadClicked = new EventEmitter();

    search(event) {
        let query = event.query;
        this.suggestions = this.filterOptions(query, this.options);
    }

    private filterOptions(query, options:FileNode[]):FileNode[] {
        let filtered:any[] = [];
        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            if (option.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(option);
            }
        }
        return filtered;
    }

    handleDropdownClick($event) {
        this.suggestions = [];

        //mimic remote call
        setTimeout(() => {
            this.suggestions = this.options;
        }, 100);
    }

    runCode() {
        this.runCodeClicked.emit(this.selected);
    }

    testCode() {
        this.testCodeClicked.emit(this.selected);
    }

    download() {
        this.downloadClicked.emit("");
    }

    newWorkspace (){
        alert("new");
    }
}
