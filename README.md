# api_ocr_space
A simple way to connect to ocr space api with node.js

## Options
The module supports all the options from the ocr space api
plus it provides some additional ones:


- **`file`** this option can be a path to a local image or a buffer, **automaticaly detects** `filetype`
- **`timeout`** here you can specify the timeout for the api requests by default a value of *`10000`* is used.
- **`retries`** the number of request retries, by default the value is *`3`*

> *Note that the `api key` is not provided in the options but in a separate value.*
> *This is done to separate the options from the `api key` to improve readability of the actual options.* 

### Ocr Space Api Post Options

You can reference the available options [here](https://ocr.space/ocrapi "Ocr Space Api Post Options")

## Example usage

**Parse an image using a url**
```
(async () => {
    const api = require('api_ocr_space');
    
    try {
        const apiKey = "YOUR_API_KEY";
        const options = {
            url: "http://dl.a9t9.com/ocrbenchmark/eng.png"
        };
        
        const res = await api.sendRequest(options, apiKey);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }

})();
```
**Parse a local image**
```
(async () => {
    const api = require('api_ocr_space');
    
    try {
        const apiKey = "YOUR_API_KEY";
        const options = {
            file: "myimage.jpg",
        };
        
        const res = await api.sendRequest(options, apiKey);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
})();

```


### Advanced usage
**(supported after version 1.1.1)
specify retries and timeout**

```
(async () => {
    const api = require('api_ocr_space');
    
    try {
        const apiKey = "YOUR_API_KEY";
        const options = {
            url: "http://dl.a9t9.com/ocrbenchmark/eng.png",
            retries: 4,
            timeout: 5000
        };
        
        const res = await api.sendRequest(options, apiKey);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
})();
```

