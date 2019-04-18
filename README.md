# api_ocr_space
A simple way to connect to ocr space api with node.js

## Example usage

parse an image using a url
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


