/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const accessControlRecordName: msRest.OperationURLParameter = {
  parameterPath: "accessControlRecordName",
  mapper: {
    required: true,
    serializedName: "accessControlRecordName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const backupElementName: msRest.OperationURLParameter = {
  parameterPath: "backupElementName",
  mapper: {
    required: true,
    serializedName: "backupElementName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const backupName: msRest.OperationURLParameter = {
  parameterPath: "backupName",
  mapper: {
    required: true,
    serializedName: "backupName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const backupPolicyName: msRest.OperationURLParameter = {
  parameterPath: "backupPolicyName",
  mapper: {
    required: true,
    serializedName: "backupPolicyName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const backupScheduleName: msRest.OperationURLParameter = {
  parameterPath: "backupScheduleName",
  mapper: {
    required: true,
    serializedName: "backupScheduleName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const backupType: msRest.OperationQueryParameter = {
  parameterPath: "backupType",
  mapper: {
    required: true,
    serializedName: "backupType",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const bandwidthSettingName: msRest.OperationURLParameter = {
  parameterPath: "bandwidthSettingName",
  mapper: {
    required: true,
    serializedName: "bandwidthSettingName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const deviceName: msRest.OperationURLParameter = {
  parameterPath: "deviceName",
  mapper: {
    required: true,
    serializedName: "deviceName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const filter0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const filter1: msRest.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    required: true,
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const hardwareComponentGroupName: msRest.OperationURLParameter = {
  parameterPath: "hardwareComponentGroupName",
  mapper: {
    required: true,
    serializedName: "hardwareComponentGroupName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const ifMatch: msRest.OperationParameter = {
  parameterPath: "ifMatch",
  mapper: {
    required: true,
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const jobName: msRest.OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    required: true,
    serializedName: "jobName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const managerName: msRest.OperationURLParameter = {
  parameterPath: "managerName",
  mapper: {
    required: true,
    serializedName: "managerName",
    constraints: {
      MaxLength: 50,
      MinLength: 2
    },
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const sourceDeviceName: msRest.OperationURLParameter = {
  parameterPath: "sourceDeviceName",
  mapper: {
    required: true,
    serializedName: "sourceDeviceName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const storageAccountCredentialName: msRest.OperationURLParameter = {
  parameterPath: "storageAccountCredentialName",
  mapper: {
    required: true,
    serializedName: "storageAccountCredentialName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const volumeContainerName: msRest.OperationURLParameter = {
  parameterPath: "volumeContainerName",
  mapper: {
    required: true,
    serializedName: "volumeContainerName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const volumeName: msRest.OperationURLParameter = {
  parameterPath: "volumeName",
  mapper: {
    required: true,
    serializedName: "volumeName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};