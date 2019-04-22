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
import * as Mappers from "../models/faceMappers";
import * as Parameters from "../models/parameters";
import { FaceClientContext } from "../faceClientContext";

/** Class representing a Face. */
export class Face {
  private readonly client: FaceClientContext;

  /**
   * Create a Face.
   * @param {FaceClientContext} client Reference to the service client.
   */
  constructor(client: FaceClientContext) {
    this.client = client;
  }

  /**
   * Given query face's faceId, to search the similar-looking faces from a faceId array, a face list
   * or a large face list. faceId array contains the faces created by [Face -
   * Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), which will
   * expire 24 hours after creation. A "faceListId" is created by [FaceList -
   * Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524b) containing
   * persistedFaceIds that will not expire. And a "largeFaceListId" is created by [LargeFaceList -
   * Create](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc) containing
   * persistedFaceIds that will also not expire. Depending on the input the returned similar faces
   * list contains faceIds or persistedFaceIds ranked by similarity.
   * <br/>Find similar has two working modes, "matchPerson" and "matchFace". "matchPerson" is the
   * default mode that it tries to find faces of the same person as possible by using internal
   * same-person thresholds. It is useful to find a known person's other photos. Note that an empty
   * list will be returned if no faces pass the internal thresholds. "matchFace" mode ignores
   * same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It
   * can be used in the cases like searching celebrity-looking faces.
   * <br/>The 'recognitionModel' associated with the query face's faceId should be the same as the
   * 'recognitionModel' used by the target faceId array, face list or large face list.
   * @param faceId FaceId of the query face. User needs to call Face - Detect first to get a valid
   * faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceFindSimilarResponse>
   */
  findSimilar(faceId: string, options?: Models.FaceFindSimilarOptionalParams): Promise<Models.FaceFindSimilarResponse>;
  /**
   * @param faceId FaceId of the query face. User needs to call Face - Detect first to get a valid
   * faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call
   * @param callback The callback
   */
  findSimilar(faceId: string, callback: msRest.ServiceCallback<Models.SimilarFace[]>): void;
  /**
   * @param faceId FaceId of the query face. User needs to call Face - Detect first to get a valid
   * faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call
   * @param options The optional parameters
   * @param callback The callback
   */
  findSimilar(faceId: string, options: Models.FaceFindSimilarOptionalParams, callback: msRest.ServiceCallback<Models.SimilarFace[]>): void;
  findSimilar(faceId: string, options?: Models.FaceFindSimilarOptionalParams | msRest.ServiceCallback<Models.SimilarFace[]>, callback?: msRest.ServiceCallback<Models.SimilarFace[]>): Promise<Models.FaceFindSimilarResponse> {
    return this.client.sendOperationRequest(
      {
        faceId,
        options
      },
      findSimilarOperationSpec,
      callback) as Promise<Models.FaceFindSimilarResponse>;
  }

  /**
   * Divide candidate faces into groups based on face similarity.<br />
   * * The output is one or more disjointed face groups and a messyGroup. A face group contains faces
   * that have similar looking, often of the same person. Face groups are ranked by group size, i.e.
   * number of faces. Notice that faces belonging to a same person might be split into several groups
   * in the result.
   * * MessyGroup is a special face group containing faces that cannot find any similar counterpart
   * face from original faces. The messyGroup will not appear in the result if all faces found their
   * counterparts.
   * * Group API needs at least 2 candidate faces and 1000 at most. We suggest to try [Face -
   * Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a) when you
   * only have 2 candidate faces.
   * * The 'recognitionModel' associated with the query faces' faceIds should be the same.
   * @param faceIds Array of candidate faceId created by Face - Detect. The maximum is 1000 faces
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceGroupResponse>
   */
  group(faceIds: string[], options?: msRest.RequestOptionsBase): Promise<Models.FaceGroupResponse>;
  /**
   * @param faceIds Array of candidate faceId created by Face - Detect. The maximum is 1000 faces
   * @param callback The callback
   */
  group(faceIds: string[], callback: msRest.ServiceCallback<Models.GroupResult>): void;
  /**
   * @param faceIds Array of candidate faceId created by Face - Detect. The maximum is 1000 faces
   * @param options The optional parameters
   * @param callback The callback
   */
  group(faceIds: string[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GroupResult>): void;
  group(faceIds: string[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GroupResult>, callback?: msRest.ServiceCallback<Models.GroupResult>): Promise<Models.FaceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        faceIds,
        options
      },
      groupOperationSpec,
      callback) as Promise<Models.FaceGroupResponse>;
  }

  /**
   * 1-to-many identification to find the closest matches of the specific query person face from a
   * person group or large person group.
   * <br/> For each face in the faceIds array, Face Identify will compute similarities between the
   * query face and all the faces in the person group (given by personGroupId) or large person group
   * (given by largePersonGroupId), and return candidate person(s) for that face ranked by similarity
   * confidence. The person group/large person group should be trained to make it ready for
   * identification. See more in [PersonGroup -
   * Train](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249) and
   * [LargePersonGroup -
   * Train](/docs/services/563879b61984550e40cbbe8d/operations/599ae2d16ac60f11b48b5aa4).
   * <br/>
   *
   * Remarks:<br />
   * * The algorithm allows more than one face to be identified independently at the same request,
   * but no more than 10 faces.
   * * Each person in the person group/large person group could have more than one face, but no more
   * than 248 faces.
   * * Higher face image quality means better identification precision. Please consider high-quality
   * faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
   * * Number of candidates returned is restricted by maxNumOfCandidatesReturned and
   * confidenceThreshold. If no person is identified, the returned candidates will be an empty array.
   * * Try [Face - Find
   * Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237) when you
   * need to find similar faces from a face list/large face list instead of a person group/large
   * person group.
   * * The 'recognitionModel' associated with the query faces' faceIds should be the same as the
   * 'recognitionModel' used by the target person group or large person group.
   * @param faceIds Array of query faces faceIds, created by the Face - Detect. Each of the faces are
   * identified independently. The valid number of faceIds is between [1, 10].
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceIdentifyResponse>
   */
  identify(faceIds: string[], options?: Models.FaceIdentifyOptionalParams): Promise<Models.FaceIdentifyResponse>;
  /**
   * @param faceIds Array of query faces faceIds, created by the Face - Detect. Each of the faces are
   * identified independently. The valid number of faceIds is between [1, 10].
   * @param callback The callback
   */
  identify(faceIds: string[], callback: msRest.ServiceCallback<Models.IdentifyResult[]>): void;
  /**
   * @param faceIds Array of query faces faceIds, created by the Face - Detect. Each of the faces are
   * identified independently. The valid number of faceIds is between [1, 10].
   * @param options The optional parameters
   * @param callback The callback
   */
  identify(faceIds: string[], options: Models.FaceIdentifyOptionalParams, callback: msRest.ServiceCallback<Models.IdentifyResult[]>): void;
  identify(faceIds: string[], options?: Models.FaceIdentifyOptionalParams | msRest.ServiceCallback<Models.IdentifyResult[]>, callback?: msRest.ServiceCallback<Models.IdentifyResult[]>): Promise<Models.FaceIdentifyResponse> {
    return this.client.sendOperationRequest(
      {
        faceIds,
        options
      },
      identifyOperationSpec,
      callback) as Promise<Models.FaceIdentifyResponse>;
  }

  /**
   * Verify whether two faces belong to a same person or whether one face belongs to a person.
   * <br/>
   * Remarks:<br />
   * * Higher face image quality means better identification precision. Please consider high-quality
   * faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
   * * For the scenarios that are sensitive to accuracy please make your own judgment.
   * * The 'recognitionModel' associated with the query faces' faceIds should be the same as the
   * 'recognitionModel' used by the target face, person group or large person group.
   * @param faceId1 FaceId of the first face, comes from Face - Detect
   * @param faceId2 FaceId of the second face, comes from Face - Detect
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceVerifyFaceToFaceResponse>
   */
  verifyFaceToFace(faceId1: string, faceId2: string, options?: msRest.RequestOptionsBase): Promise<Models.FaceVerifyFaceToFaceResponse>;
  /**
   * @param faceId1 FaceId of the first face, comes from Face - Detect
   * @param faceId2 FaceId of the second face, comes from Face - Detect
   * @param callback The callback
   */
  verifyFaceToFace(faceId1: string, faceId2: string, callback: msRest.ServiceCallback<Models.VerifyResult>): void;
  /**
   * @param faceId1 FaceId of the first face, comes from Face - Detect
   * @param faceId2 FaceId of the second face, comes from Face - Detect
   * @param options The optional parameters
   * @param callback The callback
   */
  verifyFaceToFace(faceId1: string, faceId2: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VerifyResult>): void;
  verifyFaceToFace(faceId1: string, faceId2: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VerifyResult>, callback?: msRest.ServiceCallback<Models.VerifyResult>): Promise<Models.FaceVerifyFaceToFaceResponse> {
    return this.client.sendOperationRequest(
      {
        faceId1,
        faceId2,
        options
      },
      verifyFaceToFaceOperationSpec,
      callback) as Promise<Models.FaceVerifyFaceToFaceResponse>;
  }

  /**
   * Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks,
   * and attributes.<br />
   * * Optional parameters including faceId, landmarks, and attributes. Attributes include age,
   * gender, headPose, smile, facialHair, glasses, emotion, hair, makeup, occlusion, accessories,
   * blur, exposure and noise.
   * * The extracted face feature, instead of the actual image, will be stored on server. The faceId
   * is an identifier of the face feature and will be used in [Face -
   * Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239), [Face -
   * Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a), and [Face
   * - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). It
   * will expire 24 hours after the detection call.
   * * Higher face image quality means better detection and recognition precision. Please consider
   * high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or
   * bigger.
   * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is
   * from 1KB to 6MB.
   * * Faces are detectable when its size is 36x36 to 4096x4096 pixels. If need to detect very small
   * but clear faces, please try to enlarge the input image.
   * * Up to 64 faces can be returned for an image. Faces are ranked by face rectangle size from
   * large to small.
   * * Face detector prefer frontal and near-frontal faces. There are cases that faces may not be
   * detected, e.g. exceptionally large face angles (head-pose) or being occluded, or wrong image
   * orientation.
   * * Attributes (age, gender, headPose, smile, facialHair, glasses, emotion, hair, makeup,
   * occlusion, accessories, blur, exposure and noise) may not be perfectly accurate. HeadPose's
   * pitch value is a reserved field and will always return 0.
   * * Different 'recognitionModel' values are provided. If follow-up operations like Verify,
   * Identify, Find Similar are needed, please specify the recognition model with 'recognitionModel'
   * parameter. The default value for 'recognitionModel' is 'recognition_01', if latest model needed,
   * please explicitly specify the model you need in this parameter. Once specified, the detected
   * faceIds will be associated with the specified recognition model. More details, please refer to
   * [How to specify a recognition
   * model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-recognition-model)
   * @param url Publicly reachable URL of an image
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceDetectWithUrlResponse>
   */
  detectWithUrl(url: string, options?: Models.FaceDetectWithUrlOptionalParams): Promise<Models.FaceDetectWithUrlResponse>;
  /**
   * @param url Publicly reachable URL of an image
   * @param callback The callback
   */
  detectWithUrl(url: string, callback: msRest.ServiceCallback<Models.DetectedFace[]>): void;
  /**
   * @param url Publicly reachable URL of an image
   * @param options The optional parameters
   * @param callback The callback
   */
  detectWithUrl(url: string, options: Models.FaceDetectWithUrlOptionalParams, callback: msRest.ServiceCallback<Models.DetectedFace[]>): void;
  detectWithUrl(url: string, options?: Models.FaceDetectWithUrlOptionalParams | msRest.ServiceCallback<Models.DetectedFace[]>, callback?: msRest.ServiceCallback<Models.DetectedFace[]>): Promise<Models.FaceDetectWithUrlResponse> {
    return this.client.sendOperationRequest(
      {
        url,
        options
      },
      detectWithUrlOperationSpec,
      callback) as Promise<Models.FaceDetectWithUrlResponse>;
  }

  /**
   * Verify whether two faces belong to a same person. Compares a face Id with a Person Id
   * @param faceId FaceId of the face, comes from Face - Detect
   * @param personId Specify a certain person in a person group or a large person group. personId is
   * created in PersonGroup Person - Create or LargePersonGroup Person - Create.
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceVerifyFaceToPersonResponse>
   */
  verifyFaceToPerson(faceId: string, personId: string, options?: Models.FaceVerifyFaceToPersonOptionalParams): Promise<Models.FaceVerifyFaceToPersonResponse>;
  /**
   * @param faceId FaceId of the face, comes from Face - Detect
   * @param personId Specify a certain person in a person group or a large person group. personId is
   * created in PersonGroup Person - Create or LargePersonGroup Person - Create.
   * @param callback The callback
   */
  verifyFaceToPerson(faceId: string, personId: string, callback: msRest.ServiceCallback<Models.VerifyResult>): void;
  /**
   * @param faceId FaceId of the face, comes from Face - Detect
   * @param personId Specify a certain person in a person group or a large person group. personId is
   * created in PersonGroup Person - Create or LargePersonGroup Person - Create.
   * @param options The optional parameters
   * @param callback The callback
   */
  verifyFaceToPerson(faceId: string, personId: string, options: Models.FaceVerifyFaceToPersonOptionalParams, callback: msRest.ServiceCallback<Models.VerifyResult>): void;
  verifyFaceToPerson(faceId: string, personId: string, options?: Models.FaceVerifyFaceToPersonOptionalParams | msRest.ServiceCallback<Models.VerifyResult>, callback?: msRest.ServiceCallback<Models.VerifyResult>): Promise<Models.FaceVerifyFaceToPersonResponse> {
    return this.client.sendOperationRequest(
      {
        faceId,
        personId,
        options
      },
      verifyFaceToPersonOperationSpec,
      callback) as Promise<Models.FaceVerifyFaceToPersonResponse>;
  }

  /**
   * Detect human faces in an image and returns face locations, and optionally with faceIds,
   * landmarks, and attributes.
   * @param image An image stream.
   * @param [options] The optional parameters
   * @returns Promise<Models.FaceDetectWithStreamResponse>
   */
  detectWithStream(image: msRest.HttpRequestBody, options?: Models.FaceDetectWithStreamOptionalParams): Promise<Models.FaceDetectWithStreamResponse>;
  /**
   * @param image An image stream.
   * @param callback The callback
   */
  detectWithStream(image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.DetectedFace[]>): void;
  /**
   * @param image An image stream.
   * @param options The optional parameters
   * @param callback The callback
   */
  detectWithStream(image: msRest.HttpRequestBody, options: Models.FaceDetectWithStreamOptionalParams, callback: msRest.ServiceCallback<Models.DetectedFace[]>): void;
  detectWithStream(image: msRest.HttpRequestBody, options?: Models.FaceDetectWithStreamOptionalParams | msRest.ServiceCallback<Models.DetectedFace[]>, callback?: msRest.ServiceCallback<Models.DetectedFace[]>): Promise<Models.FaceDetectWithStreamResponse> {
    return this.client.sendOperationRequest(
      {
        image,
        options
      },
      detectWithStreamOperationSpec,
      callback) as Promise<Models.FaceDetectWithStreamResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const findSimilarOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "findsimilars",
  requestBody: {
    parameterPath: {
      faceId: "faceId",
      faceListId: [
        "options",
        "faceListId"
      ],
      largeFaceListId: [
        "options",
        "largeFaceListId"
      ],
      faceIds: [
        "options",
        "faceIds"
      ],
      maxNumOfCandidatesReturned: [
        "options",
        "maxNumOfCandidatesReturned"
      ],
      mode: [
        "options",
        "mode"
      ]
    },
    mapper: {
      ...Mappers.FindSimilarRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SimilarFace"
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

const groupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "group",
  requestBody: {
    parameterPath: {
      faceIds: "faceIds"
    },
    mapper: {
      ...Mappers.GroupRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GroupResult
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const identifyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "identify",
  requestBody: {
    parameterPath: {
      faceIds: "faceIds",
      personGroupId: [
        "options",
        "personGroupId"
      ],
      largePersonGroupId: [
        "options",
        "largePersonGroupId"
      ],
      maxNumOfCandidatesReturned: [
        "options",
        "maxNumOfCandidatesReturned"
      ],
      confidenceThreshold: [
        "options",
        "confidenceThreshold"
      ]
    },
    mapper: {
      ...Mappers.IdentifyRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IdentifyResult"
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

const verifyFaceToFaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "verify",
  requestBody: {
    parameterPath: {
      faceId1: "faceId1",
      faceId2: "faceId2"
    },
    mapper: {
      ...Mappers.VerifyFaceToFaceRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VerifyResult
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const detectWithUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "detect",
  queryParameters: [
    Parameters.returnFaceId,
    Parameters.returnFaceLandmarks,
    Parameters.returnFaceAttributes,
    Parameters.recognitionModel,
    Parameters.returnRecognitionModel
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
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DetectedFace"
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

const verifyFaceToPersonOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "verify",
  requestBody: {
    parameterPath: {
      faceId: "faceId",
      personGroupId: [
        "options",
        "personGroupId"
      ],
      largePersonGroupId: [
        "options",
        "largePersonGroupId"
      ],
      personId: "personId"
    },
    mapper: {
      ...Mappers.VerifyFaceToPersonRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VerifyResult
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const detectWithStreamOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "detect",
  queryParameters: [
    Parameters.returnFaceId,
    Parameters.returnFaceLandmarks,
    Parameters.returnFaceAttributes,
    Parameters.recognitionModel,
    Parameters.returnRecognitionModel
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
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DetectedFace"
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
