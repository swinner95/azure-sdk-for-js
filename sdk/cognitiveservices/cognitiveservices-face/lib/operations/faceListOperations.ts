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
import * as Models from "../models";
import * as Mappers from "../models/faceListOperationsMappers";
import * as Parameters from "../models/parameters";
import { FaceClientContext } from "../faceClientContext";

/** Class representing a FaceListOperations. */
export class FaceListOperations {
  private readonly client: FaceClientContext;

  /**
   * Create a FaceListOperations.
   * @param {FaceClientContext} client Reference to the service client.
   */
  constructor(client: FaceClientContext) {
    this.client = client;
  }

  /**
   * Create an empty face list with user-specified faceListId, name, an optional userData and
   * recognitionModel. Up to 64 face lists are allowed in one subscription.
   * <br /> Face list is a list of faces, up to 1,000 faces, and used by [Face - Find
   * Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237).
   * <br /> After creation, user should use [FaceList - Add
   * Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395250) to import the
   * faces. Faces are stored on server until [FaceList -
   * Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524f) is called.
   * <br /> Find Similar is used for scenario like finding celebrity-like faces, similar face
   * filtering, or as a light way face identification. But if the actual use is to identify person,
   * please use
   * [PersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244) /
   * [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d)
   * and [Face -
   * Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
   * <br /> Please consider
   * [LargeFaceList](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc)
   * when the face number is large. It can support up to 1,000,000 faces. 'recognitionModel' should
   * be specified to associate with this face list. The default value for 'recognitionModel' is
   * 'recognition_01', if the latest model needed, please explicitly specify the model you need in
   * this parameter. New faces that are added to an existing face list will use the recognition model
   * that's already associated with the collection. Existing face features in a face list can't be
   * updated to features extracted by another version of recognition model.
   * @param faceListId Id referencing a particular face list.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  create(faceListId: string, options?: Models.FaceListCreateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param callback The callback
   */
  create(faceListId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(faceListId: string, options: Models.FaceListCreateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  create(faceListId: string, options?: Models.FaceListCreateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        options
      },
      createOperationSpec,
      callback);
  }

  /**
   * Retrieve a face list’s faceListId, name, userData, recognitionModel and faces in the face list.
   * @param faceListId Id referencing a particular face list.
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceListGetResponse>
   */
  get(faceListId: string, options?: Models.FaceListGetOptionalParams): Promise<Models.FaceListGetResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param callback The callback
   */
  get(faceListId: string, callback: msRest.ServiceCallback<Models.FaceList>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(faceListId: string, options: Models.FaceListGetOptionalParams, callback: msRest.ServiceCallback<Models.FaceList>): void;
  get(faceListId: string, options?: Models.FaceListGetOptionalParams | msRest.ServiceCallback<Models.FaceList>, callback?: msRest.ServiceCallback<Models.FaceList>): Promise<Models.FaceListGetResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FaceListGetResponse>;
  }

  /**
   * Update information of a face list.
   * @param faceListId Id referencing a particular face list.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(faceListId: string, options?: Models.FaceListUpdateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param callback The callback
   */
  update(faceListId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(faceListId: string, options: Models.FaceListUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  update(faceListId: string, options?: Models.FaceListUpdateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Delete an existing face list according to faceListId. Persisted face images in the face list
   * will also be deleted.
   * @param faceListId Id referencing a particular face list.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(faceListId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param callback The callback
   */
  deleteMethod(faceListId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(faceListId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(faceListId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * List face lists’ faceListId, name, userData and recognitionModel. <br />
   * To get face information inside faceList use [FaceList -
   * Get](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c)
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceListListResponse>
   */
  list(options?: Models.FaceListListOptionalParams): Promise<Models.FaceListListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.FaceList[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.FaceListListOptionalParams, callback: msRest.ServiceCallback<Models.FaceList[]>): void;
  list(options?: Models.FaceListListOptionalParams | msRest.ServiceCallback<Models.FaceList[]>, callback?: msRest.ServiceCallback<Models.FaceList[]>): Promise<Models.FaceListListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FaceListListResponse>;
  }

  /**
   * Delete an existing face from a face list (given by a persistedFaceId and a faceListId).
   * Persisted image related to the face will also be deleted.
   * @param faceListId Id referencing a particular face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteFace(faceListId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param callback The callback
   */
  deleteFace(faceListId: string, persistedFaceId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteFace(faceListId: string, persistedFaceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteFace(faceListId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        persistedFaceId,
        options
      },
      deleteFaceOperationSpec,
      callback);
  }

  /**
   * Add a face to a face list. The input face is specified as an image with a targetFace rectangle.
   * It returns a persistedFaceId representing the added face, and persistedFaceId will not expire.
   * @param faceListId Id referencing a particular face list.
   * @param url Publicly reachable URL of an image
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceListAddFaceFromUrlResponse>
   */
  addFaceFromUrl(faceListId: string, url: string, options?: Models.FaceListAddFaceFromUrlOptionalParams): Promise<Models.FaceListAddFaceFromUrlResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param url Publicly reachable URL of an image
   * @param callback The callback
   */
  addFaceFromUrl(faceListId: string, url: string, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param url Publicly reachable URL of an image
   * @param options The optional parameters
   * @param callback The callback
   */
  addFaceFromUrl(faceListId: string, url: string, options: Models.FaceListAddFaceFromUrlOptionalParams, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  addFaceFromUrl(faceListId: string, url: string, options?: Models.FaceListAddFaceFromUrlOptionalParams | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.FaceListAddFaceFromUrlResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        url,
        options
      },
      addFaceFromUrlOperationSpec,
      callback) as Promise<Models.FaceListAddFaceFromUrlResponse>;
  }

  /**
   * Add a face to a face list. The input face is specified as an image with a targetFace rectangle.
   * It returns a persistedFaceId representing the added face, and persistedFaceId will not expire.
   * @param faceListId Id referencing a particular face list.
   * @param image An image stream.
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceListAddFaceFromStreamResponse>
   */
  addFaceFromStream(faceListId: string, image: msRest.HttpRequestBody, options?: Models.FaceListAddFaceFromStreamOptionalParams): Promise<Models.FaceListAddFaceFromStreamResponse>;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param image An image stream.
   * @param callback The callback
   */
  addFaceFromStream(faceListId: string, image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param faceListId Id referencing a particular face list.
   * @param image An image stream.
   * @param options The optional parameters
   * @param callback The callback
   */
  addFaceFromStream(faceListId: string, image: msRest.HttpRequestBody, options: Models.FaceListAddFaceFromStreamOptionalParams, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  addFaceFromStream(faceListId: string, image: msRest.HttpRequestBody, options?: Models.FaceListAddFaceFromStreamOptionalParams | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.FaceListAddFaceFromStreamResponse> {
    return this.client.sendOperationRequest(
      {
        faceListId,
        image,
        options
      },
      addFaceFromStreamOperationSpec,
      callback) as Promise<Models.FaceListAddFaceFromStreamResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "facelists/{faceListId}",
  urlParameters: [
    Parameters.faceListId
  ],
  requestBody: {
    parameterPath: {
      name: [
        "options",
        "name"
      ],
      userData: [
        "options",
        "userData"
      ],
      recognitionModel: [
        "options",
        "recognitionModel"
      ]
    },
    mapper: {
      ...Mappers.MetaDataContract,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "facelists/{faceListId}",
  urlParameters: [
    Parameters.faceListId
  ],
  queryParameters: [
    Parameters.returnRecognitionModel
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FaceList
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "facelists/{faceListId}",
  urlParameters: [
    Parameters.faceListId
  ],
  requestBody: {
    parameterPath: {
      name: [
        "options",
        "name"
      ],
      userData: [
        "options",
        "userData"
      ]
    },
    mapper: {
      ...Mappers.NameAndUserDataContract,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "facelists/{faceListId}",
  urlParameters: [
    Parameters.faceListId
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "facelists",
  queryParameters: [
    Parameters.returnRecognitionModel
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FaceList"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteFaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "facelists/{faceListId}/persistedfaces/{persistedFaceId}",
  urlParameters: [
    Parameters.faceListId,
    Parameters.persistedFaceId
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addFaceFromUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "facelists/{faceListId}/persistedfaces",
  urlParameters: [
    Parameters.faceListId
  ],
  queryParameters: [
    Parameters.userData,
    Parameters.targetFace
  ],
  requestBody: {
    parameterPath: {
      url: "url"
    },
    mapper: {
      ...Mappers.ImageUrl,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addFaceFromStreamOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "facelists/{faceListId}/persistedfaces",
  urlParameters: [
    Parameters.faceListId
  ],
  queryParameters: [
    Parameters.userData,
    Parameters.targetFace
  ],
  requestBody: {
    parameterPath: "image",
    mapper: {
      required: true,
      serializedName: "Image",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/octet-stream",
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};
