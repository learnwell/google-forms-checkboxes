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
1. Added a [markdown renderer](https://github.com/jfcere/ngx-markdown#ngx-markdown) for questions so that we have something that's an upgrade from what other websites currently offer us!
1. Toggled between answer key and edit question modes. Only one question will be in edit mode at any given time.
1. Styled the textarea to work well for single-line questions AND multi-line questions.
    * Used flex-layout to `stretch` and provide maximum horizontal area to the textarea.
    * Used [cdkTextareaAutosize](https://material.angular.io/cdk/text-field/overview) for autosizing.
    * Wrapped in `mat-form-field` for all the material benefits.
1. Added [hot module reloading](https://github.com/angular/angular-cli/wiki/stories-configure-hmr) in hopes that it will speed up development.
1. Added the answer choices as editable text when in *Edit Question* mode.
1. Enhanced editable answer choices with a `drag_indicator` icon via [`matListIcon`](https://material.angular.io/components/list/overview#lists-with-icons).
1. Added drag-&-drop capability for answer choices.
1. Added a textarea for editing answers in *Edit Question* mode.
1. Overrode material styles with higher [CSS specificity](https://github.com/angular/material2/issues/8707#issuecomment-348654115) to resize the material list when textarea resizing occurs.
1. Removed [unneccesary code](https://github.com/angular/material2/issues/15813) that does nothing when resizing textarea.
1. The `drag_indicator` for questions should continue to be [centered](https://github.com/angular/flex-layout/wiki/fxFlexAlign-API), even in *Edit Question* mode.
1. Fixed `drag_indicator` for answers with the missing `cdkDragHandle` directive.
1. Use `flex-layout` instead of CSS shortcuts like `.example-full-width {width: 100%;}` to layout the editable answers such that they take up all of the remaining width.
1. Added markdown renderer for answers in *Answer Key* mode. Updated layout to accommodate markdown rendering for multi-line answers.

# Roadmap
1. Updated drag-drop such that something that was being edited but was dagged-&-dropped, continues to be in the edited state.
1. In *Edit Question* mode, don't show real checkboxes only empty checkbox on the left of the textfield
1. If a question is clicked (this could be anywhere within the markdown renderer's area) switch to *EDIT QUESTION* mode and show a textarea for editing the question's text.
1. add toolbar w/ button for adding new questions
1. when moving a box that was in answer key mode the preview should be in the Answer Key mode too
1. when moving a box that was in Edit Question mode the preview should be in the Edit Question mode too BUT options should not show

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
