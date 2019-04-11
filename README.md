# GoogleFormsCheckboxes

1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version `7.3.8`.

    ```
    npm install -g @angular/cli
    ng new google-forms-checkboxes
    cd google-forms-checkboxes
    git init
    git commit -m "initial commit"
    git remote add origin git@github.com:learnwell/google-forms-checkboxes.git
    git push -u origin master
    ```
1. Configured angular-material in one fell swoop: `ng add @angular/material`

    ```
    $ ng add @angular/material
    Installing packages for tooling via npm.
    npm WARN @angular/material@7.3.7 requires a peer of @angular/cdk@7.3.7 but none is installed. You must install peer dependencies yourself.

    + @angular/material@7.3.7
    added 1 package in 16.716s
    Installed packages for tooling via npm.
    ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
    ? Set up HammerJS for gesture recognition? Yes
    ? Set up browser animations for Angular Material? Yes
    UPDATE package.json (1412 bytes)
    added 3 packages in 11.623s
    UPDATE src/main.ts (391 bytes)
    UPDATE src/app/app.module.ts (423 bytes)
    UPDATE angular.json (4124 bytes)
    UPDATE src/index.html (489 bytes)
    UPDATE src/styles.css (181 bytes)
    ```
1. Added common material components and made sure basic material styled designs show up
1. Used [mat-card](https://material.angular.io/components/card/overview) with [flex-layout](https://github.com/angular/flex-layout) for displaying dummy data in *ANSWER KEY* mode.
1. Used [mat-selection-list](https://material.angular.io/components/list/overview#selection-lists) for displaying available answers.
1. Arrange the content neatly into [basic card sections](https://material.angular.io/components/card/overview#basic-card-sections)
1. Added basic drag-&-drop functionality for questions by following angular CDK's example on [reordering lists](https://material.angular.io/cdk/drag-drop/overview#reordering-lists)
    * The dependencies for the CDK had already been installed in a previous step when we used a [schematic](https://material.angular.io/guide/schematics) to add material via: `ng add @angular/material`
1. Selected a material icon and added it as a [handle](https://material.angular.io/cdk/drag-drop/overview#customizing-the-drag-area-using-a-handle) for dragging & dropping.
1. Laid out the `drag_indicator` and question text on top of each other like a column and centered them.
1. Rotated the icon for a more familiar look-&-feel, which is closer to what people see in google forms usually.
1. Fixed the drag & drop which was missing the binding to a function to act on the "drop" event.
1. Added a [drag preview](https://material.angular.io/cdk/drag-drop/overview#customizing-the-drag-preview) which is smaller than the full body and offers a better experience when moving it around.
1. We are in *ANSWER KEY* mode right now so added a button in [mat-card-actions](https://material.angular.io/components/card/overview#basic-card-sections) to indicate that a user can toggle to *EDIT QUESTION* mode. Nothing is wired yet.
1. Added a [drag placeholder](https://material.angular.io/cdk/drag-drop/overview#customizing-the-drag-placeholder) to serve as a visual cue for where the dropped item will go.
1. Locked drag direction in the y-plane (up & down only).

# Conventions

1. Place any `mat*` directives inline with starting element tag

    ```
    <element mat-blah>
      ...
    <element>
    ```
1. Place any `cdk*` directives in the 1st line right after the starting element tag

    ```
    <element mat-blah
      cdk-blah
      >
      ...
    <element>
    ```
1. Place any flex-layout directive in the 2nd line after the starting element tag
    ```
    <element mat-blah
      cdk-blah
      fxLayout="column"
      >
      ...
    <element>
    ```
1. Place any structural directives in the 3rd line after the starting element tag
    ```
    <element mat-blah
      cdk-blah
      fxLayout="column"
      *ngFor="let blah of blahs; let i = index"
      >
      ...
    <element>
    ```
