const FormData = require('form-data');
const axios = require('axios');


  exports.sendRequest = function(options, apikey) {
      if(!options) {
        throw new Error('You need to specify the options');
      }
      if(!apikey) {
          throw new Error('apiKey is required!');
      }

      const {url = false, file = false, Base64Image = false} = options;
      const api = 'https://api.ocr.space/parse/image';
      if(!url && !file && !Base64Image) {
          throw new Error('You need to specify one of : url, file or Base64Image');
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

      return axios.post(api,form,{headers: headers});
    };