# CORS sandbox

Install dependencies:

```sh
yarn install
```

Create the `.env` and setup the CORS configuration:

```sh
# Other options are "express", "express_with_options", and "none"
CORS_MODE="manual"
```

Start the server:

```sh
yarn dev
```

Check that the service is running:

```sh
curl 'localhost:8080/hello?name=John'
```

To run the client `index.html`:

```
npx serve .
```

#### AWS S3 WebSite

In case you want to deploy to S3:

```sh
terraform init
terraform apply -auto-approve
```

WebSite should be available here:

```
https://bucket-s3-web-56789.s3-website.sa-east-1.amazonaws.com
```
