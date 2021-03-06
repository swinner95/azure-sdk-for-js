## An isomorphic javascript sdk for - LUISAuthoringClient

This package contains an isomorphic SDK for LUISAuthoringClient.

### Currently supported environments

- Node.js version 6.x.x or higher
- Browser JavaScript

### How to Install

```bash
npm install @azure/cognitiveservices-luis-authoring
```

### How to use

#### nodejs - Authentication, client creation and listPhraseLists features as an example written in TypeScript.

##### Install @azure/ms-rest-nodeauth

```bash
npm install @azure/ms-rest-nodeauth
```

##### Sample code

```typescript
import * as msRest from "@azure/ms-rest-js";
import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";
import { LUISAuthoringClient, LUISAuthoringModels, LUISAuthoringMappers } from "@azure/cognitiveservices-luis-authoring";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

msRestNodeAuth.interactiveLogin().then((creds) => {
  const client = new LUISAuthoringClient(creds, subscriptionId);
  const appId = ec7b1657-199d-4d8a-bbb2-89a11a42e02a;
  const versionId = "testversionId";
  const skip = 1;
  const take = 1;
  client.features.listPhraseLists(appId, versionId, skip, take).then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.error(err);
});
```

#### browser - Authentication, client creation and listPhraseLists features as an example written in JavaScript.

##### Install @azure/ms-rest-browserauth

```bash
npm install @azure/ms-rest-browserauth
```

##### Sample code

See https://github.com/Azure/ms-rest-browserauth to learn how to authenticate to Azure in the browser.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>@azure/cognitiveservices-luis-authoring sample</title>
    <script src="node_modules/@azure/ms-rest-js/dist/msRest.browser.js"></script>
    <script src="node_modules/@azure/ms-rest-browserauth/dist/msAuth.js"></script>
    <script src="node_modules/@azure/cognitiveservices-luis-authoring/dist/cognitiveservices-luis-authoring.js"></script>
    <script type="text/javascript">
      const subscriptionId = "<Subscription_Id>";
      const authManager = new msAuth.AuthManager({
        clientId: "<client id for your Azure AD app>",
        tenant: "<optional tenant for your organization>"
      });
      authManager.finalizeLogin().then((res) => {
        if (!res.isLoggedIn) {
          // may cause redirects
          authManager.login();
        }
        const client = new Azure.CognitiveservicesLuisAuthoring.LUISAuthoringClient(res.creds, subscriptionId);
        const appId = ec7b1657-199d-4d8a-bbb2-89a11a42e02a;
        const versionId = "testversionId";
        const skip = 1;
        const take = 1;
        client.features.listPhraseLists(appId, versionId, skip, take).then((result) => {
          console.log("The result is:");
          console.log(result);
        }).catch((err) => {
          console.log("An error occurred:");
          console.error(err);
        });
      });
    </script>
  </head>
  <body></body>
</html>
```

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)


![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js/sdk/cognitiveservices/cognitiveservices-luis-authoring/README.png)
