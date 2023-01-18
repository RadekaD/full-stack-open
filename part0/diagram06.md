```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created - returns JSON of input content

    Note over browser: Returns the submitted content as an application/json content-type

   

```