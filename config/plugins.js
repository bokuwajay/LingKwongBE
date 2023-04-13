module.exports = ({env}) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dvhxzhrgz'),
        api_key: env('575976895146488'),
        api_secret: env('9BDiD6kxP-xCHeNN9WcrhIG6yN4'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
