import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef} from "angular2/core";
import "rxjs/Rx";
import {NavBarComponent} from "./nav-bar/navbar.component";
import {TagsComponent} from "./tags/tags.component";
import {JavalabService} from "./javalab.service";
import {DescriptionComponent} from "./description/description.component";
import {FileManagerComponent} from "./filemanager/filemanager.component";
import {TerminalComponent} from "./terminal/terminal.component";
import {CodeMirrorComponent} from "./codemirror/codemirror.component";

@Component({
    selector: 'javalab-app',
    templateUrl: './app/app.html',
    directives: [DescriptionComponent, FileManagerComponent, NavBarComponent, TagsComponent, TerminalComponent, CodeMirrorComponent],
    providers: [JavalabService]
})
export class AppComponent implements OnInit, AfterViewInit {

    data:any;
    height:number;

    @ViewChild(TerminalComponent)
    terminal:TerminalComponent;

    @ViewChild(CodeMirrorComponent)
    editor:CodeMirrorComponent;

    @ViewChild(NavBarComponent)
    navBar:NavBarComponent;

    @ViewChild(FileManagerComponent)
    filemanager:FileManagerComponent;

    constructor(private _javalabService:JavalabService, private _changeDetectionRef:ChangeDetectorRef) {
        //this.attachWindowEvents(); //TODO: activate on prod
    }

    private attachWindowEvents() {
        window.onbeforeunload = (e) => {
            e = e || window.event;
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = 'Code not saved!';
        };
    };

    getHeroes() {
        this.data = this._javalabService.getHeroes();
        console.log("message from server:", JSON.stringify(this.data));
    }

    ngOnInit() {
        this.getHeroes();
    }

    ngAfterViewInit():any {
        this.filemanager.files =  [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    {
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [
                            {
                                "label": "Expenses.doc",
                                "icon": "fa-file-text-o",
                                "data": "Expenses Document"
                            },
                            {
                                "label": "Resume.doc",
                                "icon": "fa-file-text-o",
                                "data": "Resume Document"
                            }
                        ]
                    }
                ]
            }
        ];

        this._changeDetectionRef.detectChanges();

    }


    onResize(event) {
        var minWidthDesktop = 980;
        if (window.innerWidth < minWidthDesktop) {
            return;
        }

        var windowHeight = window.innerHeight;
        var extNavHeight = this.navBar.height;
        //  Define height for each element based on %
        var codeEditorHeight = (windowHeight * 0.75) - extNavHeight;
        var consoleHeight = (windowHeight * 0.25) - extNavHeight;

        // resize elements
        this.editor.updateHeight(codeEditorHeight);
        this.terminal.updateHeight(consoleHeight);
    }

}
