# React - Themeswitcher

 The Dynamic Theme Change can be achieved by loading the needed theme to the style tag dynamically using AJAX call. 

## Create a React application

To create a React application, refer to [`getting started`](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started/) document.

## Add Style Tag

In `index.html` file, add style tag for dynamic theme change. 

```typescript
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Syncfusion React DropDownList</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 for React Components" />
    <meta name="author" content="Syncfusion" />
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>

    <!-- add style tag for dynamic theme change -->
    <style id="theme"></style>
</head>

<body>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

</html>

```

## Use Ajax for Dynamic Theme Change

In `index.tsx` file, add below `onChange` function.

```typescript
   public onChange(e: any) {
        if (e && e.itemData.value) {
            const ajax: Ajax = new Ajax('http://cdn.syncfusion.com/ej2/' + e.itemData.value + '.css', 'GET', true);
            ajax.send().then((result: any) => {
            const styleTag: any = document.getElementById('theme');
            styleTag.innerHTML=`/*${e.itemData.value}*/` + result;
            });
          }       
  };

 ```

 Whenever the `onChange` function gets triggered, the corresponding CSS file of the selected theme is applied to the DOM element using AJAX.

## Build and Run the Application

``` bash
# install dependencies
npm install

# build the application 
npm run build

# run the application
npm run start

```
