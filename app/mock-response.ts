export var MockResponse:any = {
    "console": "Welcome to Javalab v0.4.0 !\r\n$ java -version : 1.8.0_66 Java HotSpot(TM) 64-Bit Server VM",
    "filesTree": [
        {
            "id": "e3c59fb7-f1fc-4d74-b0fb-d8b52d731287",
            "label": "dependencies",
            "icon": "fa-file-text-o",
            "data": "testCompile 'junit:junit:+'\n",
            "children": []
        },
        {
            "id": "e0549dae-1e0b-4819-8ccb-1ea3d790b7ae",
            "label": "src/main/java/",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                "id": "71c8eed2-9732-45b4-8299-5eca126bdce3",
                "label": "com.company.project",
                "icon": "fa fa-th-large",
                "parentId": "e0549dae-1e0b-4819-8ccb-1ea3d790b7ae",
                "children": [{
                    "id": "e597e833-8f97-4a13-b119-71a3b093aecc",
                    "label": "HelloWorld.java",
                    "icon": "fa-file-text-o",
                    "data": "package com.company.project;\n\npublic class HelloWorld {\n\n    public static void main(String[] args) {\n        System.out.println(\"hello world java!\");\n    }\n\n}\n",
                    "cursor": "",
                    "parentId": "71c8eed2-9732-45b4-8299-5eca126bdce3",
                    "children": []
                }]
            }]
        },
        {
            "id": "765b381c-0bb1-4102-af25-8649d1e7aae8",
            "label": "src/test/java/",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                "id": "4078a5de-f759-439d-8f7c-8053db298999",
                "label": "com.company.project",
                "icon": "fa fa-th-large",
                "parentId": "765b381c-0bb1-4102-af25-8649d1e7aae8",
                "children": [{
                    "id": "d45d9ee5-d049-4e46-8ee4-f6abe6ad6fe6",
                    "label": "HelloWorldTest.java",
                    "icon": "fa-file-text-o",
                    "data": "package com.company.project;\n\nimport org.junit.*;\n\npublic class HelloWorldTest {\n\n    @Test\n    public void test() {\n        Assert.assertEquals(1, 1);\n    }\n}\n",
                    "cursor": "",
                    "parentId": "4078a5de-f759-439d-8f7c-8053db298999",
                    "children": []
                }]
            }]
        }
    ],
    "runnableNode": {"mainClass": false, "testClass": false},
    "initConfig": {
        "language": "java",
        "languageMode": "ace/mode/java",
        "javaClasses": [{
            "label": "HelloWorld.java",
            "path": "com.company.project.HelloWorld"
        }, {"label": "HelloWorldTest.java", "path": "com.company.project.HelloWorldTest"}]
    }
};
