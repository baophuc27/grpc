import * as $protobuf from "protobufjs";
/** Namespace user. */
export namespace user {

    /** Represents a UserService */
    class UserService extends $protobuf.rpc.Service {

        /**
         * Constructs a new UserService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UserService;

        /**
         * Calls register.
         * @param request RegisterRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and TokenResponse
         */
        public register(request: user.IRegisterRequest, callback: user.UserService.registerCallback): void;

        /**
         * Calls register.
         * @param request RegisterRequest message or plain object
         * @returns Promise
         */
        public register(request: user.IRegisterRequest): Promise<user.TokenResponse>;

        /**
         * Calls login.
         * @param request LoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and TokenResponse
         */
        public login(request: user.ILoginRequest, callback: user.UserService.loginCallback): void;

        /**
         * Calls login.
         * @param request LoginRequest message or plain object
         * @returns Promise
         */
        public login(request: user.ILoginRequest): Promise<user.TokenResponse>;

        /**
         * Calls getUser.
         * @param request GetUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UserInfoResponse
         */
        public getUser(request: user.IGetUserRequest, callback: user.UserService.getUserCallback): void;

        /**
         * Calls getUser.
         * @param request GetUserRequest message or plain object
         * @returns Promise
         */
        public getUser(request: user.IGetUserRequest): Promise<user.UserInfoResponse>;
    }

    namespace UserService {

        /**
         * Callback as used by {@link user.UserService#register}.
         * @param error Error, if any
         * @param [response] TokenResponse
         */
        type registerCallback = (error: (Error|null), response?: user.TokenResponse) => void;

        /**
         * Callback as used by {@link user.UserService#login}.
         * @param error Error, if any
         * @param [response] TokenResponse
         */
        type loginCallback = (error: (Error|null), response?: user.TokenResponse) => void;

        /**
         * Callback as used by {@link user.UserService#getUser}.
         * @param error Error, if any
         * @param [response] UserInfoResponse
         */
        type getUserCallback = (error: (Error|null), response?: user.UserInfoResponse) => void;
    }

    /** Properties of a Date. */
    interface IDate {

        /** Date year */
        year?: (number|null);

        /** Date month */
        month?: (number|null);

        /** Date day */
        day?: (number|null);
    }

    /** Represents a Date. */
    class Date implements IDate {

        /**
         * Constructs a new Date.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IDate);

        /** Date year. */
        public year: number;

        /** Date month. */
        public month: number;

        /** Date day. */
        public day: number;

        /**
         * Creates a new Date instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Date instance
         */
        public static create(properties?: user.IDate): user.Date;

        /**
         * Encodes the specified Date message. Does not implicitly {@link user.Date.verify|verify} messages.
         * @param message Date message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Date message, length delimited. Does not implicitly {@link user.Date.verify|verify} messages.
         * @param message Date message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Date message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Date
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.Date;

        /**
         * Decodes a Date message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Date
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.Date;

        /**
         * Verifies a Date message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Date message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Date
         */
        public static fromObject(object: { [k: string]: any }): user.Date;

        /**
         * Creates a plain object from a Date message. Also converts values to other types if specified.
         * @param message Date
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Date to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Address. */
    interface IAddress {

        /** Address houseNumber */
        houseNumber?: (string|null);

        /** Address streetName */
        streetName?: (string|null);

        /** Address village */
        village?: (string|null);

        /** Address district */
        district?: (string|null);

        /** Address province */
        province?: (string|null);
    }

    /** Represents an Address. */
    class Address implements IAddress {

        /**
         * Constructs a new Address.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IAddress);

        /** Address houseNumber. */
        public houseNumber: string;

        /** Address streetName. */
        public streetName: string;

        /** Address village. */
        public village: string;

        /** Address district. */
        public district: string;

        /** Address province. */
        public province: string;

        /**
         * Creates a new Address instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Address instance
         */
        public static create(properties?: user.IAddress): user.Address;

        /**
         * Encodes the specified Address message. Does not implicitly {@link user.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link user.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.Address;

        /**
         * Decodes an Address message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.Address;

        /**
         * Verifies an Address message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Address
         */
        public static fromObject(object: { [k: string]: any }): user.Address;

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @param message Address
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Address to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterRequest. */
    interface IRegisterRequest {

        /** RegisterRequest email */
        email?: (string|null);

        /** RegisterRequest firstName */
        firstName?: (string|null);

        /** RegisterRequest lastName */
        lastName?: (string|null);

        /** RegisterRequest dateOfBirth */
        dateOfBirth?: (string|null);

        /** RegisterRequest address */
        address?: (string|null);

        /** RegisterRequest phone */
        phone?: (string|null);

        /** RegisterRequest password */
        password?: (string|null);
    }

    /** Represents a RegisterRequest. */
    class RegisterRequest implements IRegisterRequest {

        /**
         * Constructs a new RegisterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRegisterRequest);

        /** RegisterRequest email. */
        public email: string;

        /** RegisterRequest firstName. */
        public firstName: string;

        /** RegisterRequest lastName. */
        public lastName: string;

        /** RegisterRequest dateOfBirth. */
        public dateOfBirth: string;

        /** RegisterRequest address. */
        public address: string;

        /** RegisterRequest phone. */
        public phone: string;

        /** RegisterRequest password. */
        public password: string;

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterRequest instance
         */
        public static create(properties?: user.IRegisterRequest): user.RegisterRequest;

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link user.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link user.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RegisterRequest;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RegisterRequest;

        /**
         * Verifies a RegisterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterRequest
         */
        public static fromObject(object: { [k: string]: any }): user.RegisterRequest;

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @param message RegisterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest email */
        email?: (string|null);

        /** LoginRequest password */
        password?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginRequest);

        /** LoginRequest email. */
        public email: string;

        /** LoginRequest password. */
        public password: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: user.ILoginRequest): user.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserRequest. */
    interface IGetUserRequest {

        /** GetUserRequest user_id */
        user_id?: (string|null);
    }

    /** Represents a GetUserRequest. */
    class GetUserRequest implements IGetUserRequest {

        /**
         * Constructs a new GetUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IGetUserRequest);

        /** GetUserRequest user_id. */
        public user_id: string;

        /**
         * Creates a new GetUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserRequest instance
         */
        public static create(properties?: user.IGetUserRequest): user.GetUserRequest;

        /**
         * Encodes the specified GetUserRequest message. Does not implicitly {@link user.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IGetUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link user.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IGetUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.GetUserRequest;

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.GetUserRequest;

        /**
         * Verifies a GetUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserRequest
         */
        public static fromObject(object: { [k: string]: any }): user.GetUserRequest;

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @param message GetUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.GetUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VerifyRequest. */
    interface IVerifyRequest {

        /** VerifyRequest token */
        token?: (string|null);
    }

    /** Represents a VerifyRequest. */
    class VerifyRequest implements IVerifyRequest {

        /**
         * Constructs a new VerifyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IVerifyRequest);

        /** VerifyRequest token. */
        public token: string;

        /**
         * Creates a new VerifyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyRequest instance
         */
        public static create(properties?: user.IVerifyRequest): user.VerifyRequest;

        /**
         * Encodes the specified VerifyRequest message. Does not implicitly {@link user.VerifyRequest.verify|verify} messages.
         * @param message VerifyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyRequest message, length delimited. Does not implicitly {@link user.VerifyRequest.verify|verify} messages.
         * @param message VerifyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.VerifyRequest;

        /**
         * Decodes a VerifyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.VerifyRequest;

        /**
         * Verifies a VerifyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyRequest
         */
        public static fromObject(object: { [k: string]: any }): user.VerifyRequest;

        /**
         * Creates a plain object from a VerifyRequest message. Also converts values to other types if specified.
         * @param message VerifyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.VerifyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TokenResponse. */
    interface ITokenResponse {

        /** TokenResponse token */
        token?: (string|null);
    }

    /** Represents a TokenResponse. */
    class TokenResponse implements ITokenResponse {

        /**
         * Constructs a new TokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ITokenResponse);

        /** TokenResponse token. */
        public token: string;

        /**
         * Creates a new TokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenResponse instance
         */
        public static create(properties?: user.ITokenResponse): user.TokenResponse;

        /**
         * Encodes the specified TokenResponse message. Does not implicitly {@link user.TokenResponse.verify|verify} messages.
         * @param message TokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ITokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenResponse message, length delimited. Does not implicitly {@link user.TokenResponse.verify|verify} messages.
         * @param message TokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ITokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.TokenResponse;

        /**
         * Decodes a TokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.TokenResponse;

        /**
         * Verifies a TokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenResponse
         */
        public static fromObject(object: { [k: string]: any }): user.TokenResponse;

        /**
         * Creates a plain object from a TokenResponse message. Also converts values to other types if specified.
         * @param message TokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.TokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfoResponse. */
    interface IUserInfoResponse {

        /** UserInfoResponse email */
        email?: (string|null);

        /** UserInfoResponse first_name */
        first_name?: (string|null);

        /** UserInfoResponse last_name */
        last_name?: (string|null);

        /** UserInfoResponse date_of_birth */
        date_of_birth?: (string|null);

        /** UserInfoResponse address */
        address?: (string|null);

        /** UserInfoResponse phone */
        phone?: (string|null);
    }

    /** Represents a UserInfoResponse. */
    class UserInfoResponse implements IUserInfoResponse {

        /**
         * Constructs a new UserInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserInfoResponse);

        /** UserInfoResponse email. */
        public email: string;

        /** UserInfoResponse first_name. */
        public first_name: string;

        /** UserInfoResponse last_name. */
        public last_name: string;

        /** UserInfoResponse date_of_birth. */
        public date_of_birth: string;

        /** UserInfoResponse address. */
        public address: string;

        /** UserInfoResponse phone. */
        public phone: string;

        /**
         * Creates a new UserInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfoResponse instance
         */
        public static create(properties?: user.IUserInfoResponse): user.UserInfoResponse;

        /**
         * Encodes the specified UserInfoResponse message. Does not implicitly {@link user.UserInfoResponse.verify|verify} messages.
         * @param message UserInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUserInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfoResponse message, length delimited. Does not implicitly {@link user.UserInfoResponse.verify|verify} messages.
         * @param message UserInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUserInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UserInfoResponse;

        /**
         * Decodes a UserInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UserInfoResponse;

        /**
         * Verifies a UserInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): user.UserInfoResponse;

        /**
         * Creates a plain object from a UserInfoResponse message. Also converts values to other types if specified.
         * @param message UserInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
