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
curl localhost:3000/hello?name=John
```

Finally, open the HTML `index.html` in a browser to interact with the configuration.