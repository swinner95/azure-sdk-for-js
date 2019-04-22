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
import * as Mappers from "../models/billingSubscriptionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a BillingSubscriptions. */
export class BillingSubscriptions {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a BillingSubscriptions.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists billing subscriptions by billing account name.
   * @param billingAccountName billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByBillingAccountNameResponse>
   */
  listByBillingAccountName(billingAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByBillingAccountNameResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param callback The callback
   */
  listByBillingAccountName(billingAccountName: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountName(billingAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByBillingAccountName(billingAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByBillingAccountNameResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountNameOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByBillingAccountNameResponse>;
  }

  /**
   * Lists billing subscriptions by billing profile name.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByBillingProfileNameResponse>
   */
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByBillingProfileNameResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param callback The callback
   */
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByBillingProfileNameResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      listByBillingProfileNameOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByBillingProfileNameResponse>;
  }

  /**
   * Lists billing subscription by invoice section name.
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByInvoiceSectionNameResponse>
   */
  listByInvoiceSectionName(billingAccountName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByInvoiceSectionNameResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param callback The callback
   */
  listByInvoiceSectionName(billingAccountName: string, invoiceSectionName: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSectionName(billingAccountName: string, invoiceSectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByInvoiceSectionName(billingAccountName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByInvoiceSectionNameResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        invoiceSectionName,
        options
      },
      listByInvoiceSectionNameOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByInvoiceSectionNameResponse>;
  }

  /**
   * Get a single billing subscription by name.
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param billingSubscriptionName Billing Subscription Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsGetResponse>
   */
  get(billingAccountName: string, invoiceSectionName: string, billingSubscriptionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsGetResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param billingSubscriptionName Billing Subscription Id.
   * @param callback The callback
   */
  get(billingAccountName: string, invoiceSectionName: string, billingSubscriptionName: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionSummary>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param billingSubscriptionName Billing Subscription Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, invoiceSectionName: string, billingSubscriptionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionSummary>): void;
  get(billingAccountName: string, invoiceSectionName: string, billingSubscriptionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionSummary>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionSummary>): Promise<Models.BillingSubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        invoiceSectionName,
        billingSubscriptionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsGetResponse>;
  }

  /**
   * Transfers the modern subscription from one invoice section to another within a billing account.
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param billingSubscriptionName Billing Subscription Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsTransferResponse>
   */
  transfer(billingAccountName: string, invoiceSectionName: string, billingSubscriptionName: string, options?: Models.BillingSubscriptionsTransferOptionalParams): Promise<Models.BillingSubscriptionsTransferResponse> {
    return this.beginTransfer(billingAccountName,invoiceSectionName,billingSubscriptionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BillingSubscriptionsTransferResponse>;
  }

  /**
   * Transfers the modern subscription from one invoice section to another within a billing account.
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param billingSubscriptionName Billing Subscription Id.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTransfer(billingAccountName: string, invoiceSectionName: string, billingSubscriptionName: string, options?: Models.BillingSubscriptionsBeginTransferOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        invoiceSectionName,
        billingSubscriptionName,
        options
      },
      beginTransferOperationSpec,
      options);
  }

  /**
   * Lists billing subscriptions by billing account name.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByBillingAccountNameNextResponse>
   */
  listByBillingAccountNameNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByBillingAccountNameNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNameNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNameNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByBillingAccountNameNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByBillingAccountNameNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNameNextOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByBillingAccountNameNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBillingAccountNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingSubscriptions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/billingSubscriptions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/billingSubscriptions/{billingSubscriptionName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName,
    Parameters.billingSubscriptionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionSummary
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginTransferOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/billingSubscriptions/{billingSubscriptionName}/transfer",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName,
    Parameters.billingSubscriptionName
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      destinationInvoiceSectionId: [
        "options",
        "destinationInvoiceSectionId"
      ]
    },
    mapper: {
      ...Mappers.TransferBillingSubscriptionRequestProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TransferBillingSubscriptionResult,
      headersMapper: Mappers.BillingSubscriptionsTransferHeaders
    },
    202: {
      headersMapper: Mappers.BillingSubscriptionsTransferHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountNameNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
