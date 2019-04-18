const FormData = require('form-data');
const axios = require('axios');
const axiosRetry = require('axios-retry');

  exports.sendRequest = function(options, apikey) {
      if(!options) {
        throw new Error('You need to specify the options');
      }
      if(!apikey) {
          throw new Error('apiKey is required!');
      }

      const {url = false, file = false, Base64Image = false, retries = 3, timeout = 10000} = options;
      delete options.retries;
      delete options.timeout;
      
      const api = 'https://api.ocr.space/parse/image';
      if(!url && !file && !Base64Image) {
          throw new Error('You need to specify one of : url or Base64Image');
      }

      const form = new FormData();

      if(url) {
        form.append('url',url);
        delete options.url;
      }
      else if (file) {
          form.append("file", file);
          delete options.file;
      } else {
            form.append('Base64Image', Base64Image);
            delete options.Base64Image;
      }
      
      for (const option in options) {
            form.append(option, options[option]);
      }
      
      form.append('apikey', apikey);
      const headers = Object.assign({apikey},form.getHeaders());

      // AXIOS

      const httpClient = axios.create();
      httpClient.defaults.timeout = timeout;
      axiosRetry(httpClient, { retries: retries });

      return httpClient.post(api,form,{headers: headers});
    };