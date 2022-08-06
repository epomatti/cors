# CORS Sandbox

Install dependencies:

```sh
yarn install
```

Create the `.env` and setup the CORS configuration:

```sh
CORS="manual"
# CORS="express"
# CORS="none"
```

Start the server:

```sh
yarn dev
```

Check that the service is running:

```sh
curl 'localhost:3000/hello?name=John'
```

Finally, open the HTML `index.html` in a browser to interact with the configuration.


#### AWS S3 WebSite

In case you want to deploy to S3:

```sh
terraform init
terraform apply -auto-approve
```

WebSite should be available here:

http://bucket-s3-web-56789.s3-website.sa-east-1.amazonaws.com