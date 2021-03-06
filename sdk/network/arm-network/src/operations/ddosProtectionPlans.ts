/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/ddosProtectionPlansMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a DdosProtectionPlans. */
export class DdosProtectionPlans {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a DdosProtectionPlans.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified DDoS protection plan.
   * @param resourceGroupName The name of the resource group.
   * @param ddosProtectionPlanName The name of the DDoS protection plan.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, ddosProtectionPlanName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,ddosProtectionPlanName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets information about the specified DDoS protection plan.
   * @param resourceGroupName The name of the resource group.
   * @param ddosProtectionPlanName The name of the DDoS protection plan.
   * @param [options] The optional parameters
   * @returns Promise<Models.DdosProtectionPlansGetResponse>
   */
  get(resourceGroupName: string, ddosProtectionPlanName: string, options?: msRest.RequestOptionsBase): Promise<Models.DdosProtectionPlansGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ddosProtectionPlanName The name of the DDoS protection plan.
   * @param callback The callback
   */
  get(resourceGroupName: string, ddosProtectionPlanName: string, callback: msRest.ServiceCallback<Models.DdosProtectionPlan>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ddosProtectionPlanName The name of the DDoS protection plan.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, ddosProtectionPlanName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DdosProtectionPlan>): void;
  get(resourceGroupName: string, ddosProtectionPlanName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DdosProtectionPlan>, callback?: msRest.ServiceCallback<Models.DdosProtectionPlan>): Promise<Models.DdosProtectionPlansGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ddosProtectionPlanName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DdosProtectionPlansGetResponse>;
  }

  /**
   * Creates or updates a DDoS protection plan.
   * @param resourceGroupName The name of the resource group.
   * @param ddosProtectionPlanName The name of the DDoS protection plan.
   * @param parameters Parameters supplied to the create or update operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DdosProtectionPlansCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, ddosProtectionPlanName: string, parameters: Models.DdosProtectionPlan, options?: msRest.RequestOptionsBase): Promise<Models.DdosProtectionPlansCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,ddosProtectionPlanName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DdosProtectionPlansCreateOrUpdateResponse>;
  }

  /**
   * Gets all DDoS protection plans in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.DdosProtectionPlansListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.DdosProtectionPlansListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DdosProtectionPlanListResult>, callback?: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): Promise<Models.DdosProtectionPlansListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DdosProtectionPlansListResponse>;
  }

  /**
   * Gets all the DDoS protection plans in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.DdosProtectionPlansListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DdosProtectionPlansListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DdosProtectionPlanListResult>, callback?: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): Promise<Models.DdosProtectionPlansListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.DdosProtectionPlansListByResourceGroupResponse>;
  }

  /**
   * Deletes the specified DDoS protection plan.
   * @param resourceGroupName The name of the resource group.
   * @param ddosProtectionPlanName The name of the DDoS protection plan.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, ddosProtectionPlanName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        ddosProtectionPlanName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a DDoS protection plan.
   * @param resourceGroupName The name of the resource group.
   * @param ddosProtectionPlanName The name of the DDoS protection plan.
   * @param parameters Parameters supplied to the create or update operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, ddosProtectionPlanName: string, parameters: Models.DdosProtectionPlan, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        ddosProtectionPlanName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all DDoS protection plans in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DdosProtectionPlansListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DdosProtectionPlansListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DdosProtectionPlanListResult>, callback?: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): Promise<Models.DdosProtectionPlansListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DdosProtectionPlansListNextResponse>;
  }

  /**
   * Gets all the DDoS protection plans in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DdosProtectionPlansListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DdosProtectionPlansListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DdosProtectionPlanListResult>, callback?: msRest.ServiceCallback<Models.DdosProtectionPlanListResult>): Promise<Models.DdosProtectionPlansListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.DdosProtectionPlansListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.ddosProtectionPlanName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DdosProtectionPlan
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/ddosProtectionPlans",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DdosProtectionPlanListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DdosProtectionPlanListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.ddosProtectionPlanName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.ddosProtectionPlanName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DdosProtectionPlan,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DdosProtectionPlan
    },
    201: {
      bodyMapper: Mappers.DdosProtectionPlan
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DdosProtectionPlanListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DdosProtectionPlanListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
