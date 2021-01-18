/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.UserService = (function() {

        /**
         * Constructs a new UserService service.
         * @memberof user
         * @classdesc Represents a UserService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UserService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @function create
         * @memberof user.UserService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UserService} RPC service. Useful where requests and/or responses are streamed.
         */
        UserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link user.UserService#register}.
         * @memberof user.UserService
         * @typedef registerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.TokenResponse} [response] TokenResponse
         */

        /**
         * Calls register.
         * @function register
         * @memberof user.UserService
         * @instance
         * @param {user.IRegisterRequest} request RegisterRequest message or plain object
         * @param {user.UserService.registerCallback} callback Node-style callback called with the error, if any, and TokenResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.register = function register(request, callback) {
            return this.rpcCall(register, $root.user.RegisterRequest, $root.user.TokenResponse, request, callback);
        }, "name", { value: "register" });

        /**
         * Calls register.
         * @function register
         * @memberof user.UserService
         * @instance
         * @param {user.IRegisterRequest} request RegisterRequest message or plain object
         * @returns {Promise<user.TokenResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#login}.
         * @memberof user.UserService
         * @typedef loginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.TokenResponse} [response] TokenResponse
         */

        /**
         * Calls login.
         * @function login
         * @memberof user.UserService
         * @instance
         * @param {user.ILoginRequest} request LoginRequest message or plain object
         * @param {user.UserService.loginCallback} callback Node-style callback called with the error, if any, and TokenResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.user.LoginRequest, $root.user.TokenResponse, request, callback);
        }, "name", { value: "login" });

        /**
         * Calls login.
         * @function login
         * @memberof user.UserService
         * @instance
         * @param {user.ILoginRequest} request LoginRequest message or plain object
         * @returns {Promise<user.TokenResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link user.UserService#getUser}.
         * @memberof user.UserService
         * @typedef getUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserInfoResponse} [response] UserInfoResponse
         */

        /**
         * Calls getUser.
         * @function getUser
         * @memberof user.UserService
         * @instance
         * @param {user.IGetUserRequest} request GetUserRequest message or plain object
         * @param {user.UserService.getUserCallback} callback Node-style callback called with the error, if any, and UserInfoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.getUser = function getUser(request, callback) {
            return this.rpcCall(getUser, $root.user.GetUserRequest, $root.user.UserInfoResponse, request, callback);
        }, "name", { value: "getUser" });

        /**
         * Calls getUser.
         * @function getUser
         * @memberof user.UserService
         * @instance
         * @param {user.IGetUserRequest} request GetUserRequest message or plain object
         * @returns {Promise<user.UserInfoResponse>} Promise
         * @variation 2
         */

        return UserService;
    })();

    user.Date = (function() {

        /**
         * Properties of a Date.
         * @memberof user
         * @interface IDate
         * @property {number|null} [year] Date year
         * @property {number|null} [month] Date month
         * @property {number|null} [day] Date day
         */

        /**
         * Constructs a new Date.
         * @memberof user
         * @classdesc Represents a Date.
         * @implements IDate
         * @constructor
         * @param {user.IDate=} [properties] Properties to set
         */
        function Date(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Date year.
         * @member {number} year
         * @memberof user.Date
         * @instance
         */
        Date.prototype.year = 0;

        /**
         * Date month.
         * @member {number} month
         * @memberof user.Date
         * @instance
         */
        Date.prototype.month = 0;

        /**
         * Date day.
         * @member {number} day
         * @memberof user.Date
         * @instance
         */
        Date.prototype.day = 0;

        /**
         * Creates a new Date instance using the specified properties.
         * @function create
         * @memberof user.Date
         * @static
         * @param {user.IDate=} [properties] Properties to set
         * @returns {user.Date} Date instance
         */
        Date.create = function create(properties) {
            return new Date(properties);
        };

        /**
         * Encodes the specified Date message. Does not implicitly {@link user.Date.verify|verify} messages.
         * @function encode
         * @memberof user.Date
         * @static
         * @param {user.IDate} message Date message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Date.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.year != null && Object.hasOwnProperty.call(message, "year"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.year);
            if (message.month != null && Object.hasOwnProperty.call(message, "month"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.month);
            if (message.day != null && Object.hasOwnProperty.call(message, "day"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.day);
            return writer;
        };

        /**
         * Encodes the specified Date message, length delimited. Does not implicitly {@link user.Date.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.Date
         * @static
         * @param {user.IDate} message Date message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Date.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Date message from the specified reader or buffer.
         * @function decode
         * @memberof user.Date
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.Date} Date
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Date.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.Date();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.year = reader.int32();
                    break;
                case 2:
                    message.month = reader.int32();
                    break;
                case 3:
                    message.day = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Date message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.Date
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.Date} Date
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Date.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Date message.
         * @function verify
         * @memberof user.Date
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Date.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.year != null && message.hasOwnProperty("year"))
                if (!$util.isInteger(message.year))
                    return "year: integer expected";
            if (message.month != null && message.hasOwnProperty("month"))
                if (!$util.isInteger(message.month))
                    return "month: integer expected";
            if (message.day != null && message.hasOwnProperty("day"))
                if (!$util.isInteger(message.day))
                    return "day: integer expected";
            return null;
        };

        /**
         * Creates a Date message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.Date
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.Date} Date
         */
        Date.fromObject = function fromObject(object) {
            if (object instanceof $root.user.Date)
                return object;
            var message = new $root.user.Date();
            if (object.year != null)
                message.year = object.year | 0;
            if (object.month != null)
                message.month = object.month | 0;
            if (object.day != null)
                message.day = object.day | 0;
            return message;
        };

        /**
         * Creates a plain object from a Date message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.Date
         * @static
         * @param {user.Date} message Date
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Date.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.year = 0;
                object.month = 0;
                object.day = 0;
            }
            if (message.year != null && message.hasOwnProperty("year"))
                object.year = message.year;
            if (message.month != null && message.hasOwnProperty("month"))
                object.month = message.month;
            if (message.day != null && message.hasOwnProperty("day"))
                object.day = message.day;
            return object;
        };

        /**
         * Converts this Date to JSON.
         * @function toJSON
         * @memberof user.Date
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Date.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Date;
    })();

    user.Address = (function() {

        /**
         * Properties of an Address.
         * @memberof user
         * @interface IAddress
         * @property {string|null} [houseNumber] Address houseNumber
         * @property {string|null} [streetName] Address streetName
         * @property {string|null} [village] Address village
         * @property {string|null} [district] Address district
         * @property {string|null} [province] Address province
         */

        /**
         * Constructs a new Address.
         * @memberof user
         * @classdesc Represents an Address.
         * @implements IAddress
         * @constructor
         * @param {user.IAddress=} [properties] Properties to set
         */
        function Address(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Address houseNumber.
         * @member {string} houseNumber
         * @memberof user.Address
         * @instance
         */
        Address.prototype.houseNumber = "";

        /**
         * Address streetName.
         * @member {string} streetName
         * @memberof user.Address
         * @instance
         */
        Address.prototype.streetName = "";

        /**
         * Address village.
         * @member {string} village
         * @memberof user.Address
         * @instance
         */
        Address.prototype.village = "";

        /**
         * Address district.
         * @member {string} district
         * @memberof user.Address
         * @instance
         */
        Address.prototype.district = "";

        /**
         * Address province.
         * @member {string} province
         * @memberof user.Address
         * @instance
         */
        Address.prototype.province = "";

        /**
         * Creates a new Address instance using the specified properties.
         * @function create
         * @memberof user.Address
         * @static
         * @param {user.IAddress=} [properties] Properties to set
         * @returns {user.Address} Address instance
         */
        Address.create = function create(properties) {
            return new Address(properties);
        };

        /**
         * Encodes the specified Address message. Does not implicitly {@link user.Address.verify|verify} messages.
         * @function encode
         * @memberof user.Address
         * @static
         * @param {user.IAddress} message Address message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Address.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.houseNumber != null && Object.hasOwnProperty.call(message, "houseNumber"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.houseNumber);
            if (message.streetName != null && Object.hasOwnProperty.call(message, "streetName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.streetName);
            if (message.village != null && Object.hasOwnProperty.call(message, "village"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.village);
            if (message.district != null && Object.hasOwnProperty.call(message, "district"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.district);
            if (message.province != null && Object.hasOwnProperty.call(message, "province"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.province);
            return writer;
        };

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link user.Address.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.Address
         * @static
         * @param {user.IAddress} message Address message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Address.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @function decode
         * @memberof user.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.Address} Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Address.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.Address();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.houseNumber = reader.string();
                    break;
                case 2:
                    message.streetName = reader.string();
                    break;
                case 3:
                    message.village = reader.string();
                    break;
                case 4:
                    message.district = reader.string();
                    break;
                case 5:
                    message.province = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Address message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.Address} Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Address.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Address message.
         * @function verify
         * @memberof user.Address
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Address.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.houseNumber != null && message.hasOwnProperty("houseNumber"))
                if (!$util.isString(message.houseNumber))
                    return "houseNumber: string expected";
            if (message.streetName != null && message.hasOwnProperty("streetName"))
                if (!$util.isString(message.streetName))
                    return "streetName: string expected";
            if (message.village != null && message.hasOwnProperty("village"))
                if (!$util.isString(message.village))
                    return "village: string expected";
            if (message.district != null && message.hasOwnProperty("district"))
                if (!$util.isString(message.district))
                    return "district: string expected";
            if (message.province != null && message.hasOwnProperty("province"))
                if (!$util.isString(message.province))
                    return "province: string expected";
            return null;
        };

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.Address
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.Address} Address
         */
        Address.fromObject = function fromObject(object) {
            if (object instanceof $root.user.Address)
                return object;
            var message = new $root.user.Address();
            if (object.houseNumber != null)
                message.houseNumber = String(object.houseNumber);
            if (object.streetName != null)
                message.streetName = String(object.streetName);
            if (object.village != null)
                message.village = String(object.village);
            if (object.district != null)
                message.district = String(object.district);
            if (object.province != null)
                message.province = String(object.province);
            return message;
        };

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.Address
         * @static
         * @param {user.Address} message Address
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Address.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.houseNumber = "";
                object.streetName = "";
                object.village = "";
                object.district = "";
                object.province = "";
            }
            if (message.houseNumber != null && message.hasOwnProperty("houseNumber"))
                object.houseNumber = message.houseNumber;
            if (message.streetName != null && message.hasOwnProperty("streetName"))
                object.streetName = message.streetName;
            if (message.village != null && message.hasOwnProperty("village"))
                object.village = message.village;
            if (message.district != null && message.hasOwnProperty("district"))
                object.district = message.district;
            if (message.province != null && message.hasOwnProperty("province"))
                object.province = message.province;
            return object;
        };

        /**
         * Converts this Address to JSON.
         * @function toJSON
         * @memberof user.Address
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Address.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Address;
    })();

    user.RegisterRequest = (function() {

        /**
         * Properties of a RegisterRequest.
         * @memberof user
         * @interface IRegisterRequest
         * @property {string|null} [email] RegisterRequest email
         * @property {string|null} [firstName] RegisterRequest firstName
         * @property {string|null} [lastName] RegisterRequest lastName
         * @property {string|null} [dateOfBirth] RegisterRequest dateOfBirth
         * @property {string|null} [address] RegisterRequest address
         * @property {string|null} [phone] RegisterRequest phone
         * @property {string|null} [password] RegisterRequest password
         */

        /**
         * Constructs a new RegisterRequest.
         * @memberof user
         * @classdesc Represents a RegisterRequest.
         * @implements IRegisterRequest
         * @constructor
         * @param {user.IRegisterRequest=} [properties] Properties to set
         */
        function RegisterRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterRequest email.
         * @member {string} email
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.email = "";

        /**
         * RegisterRequest firstName.
         * @member {string} firstName
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.firstName = "";

        /**
         * RegisterRequest lastName.
         * @member {string} lastName
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.lastName = "";

        /**
         * RegisterRequest dateOfBirth.
         * @member {string} dateOfBirth
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.dateOfBirth = "";

        /**
         * RegisterRequest address.
         * @member {string} address
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.address = "";

        /**
         * RegisterRequest phone.
         * @member {string} phone
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.phone = "";

        /**
         * RegisterRequest password.
         * @member {string} password
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.password = "";

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @function create
         * @memberof user.RegisterRequest
         * @static
         * @param {user.IRegisterRequest=} [properties] Properties to set
         * @returns {user.RegisterRequest} RegisterRequest instance
         */
        RegisterRequest.create = function create(properties) {
            return new RegisterRequest(properties);
        };

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link user.RegisterRequest.verify|verify} messages.
         * @function encode
         * @memberof user.RegisterRequest
         * @static
         * @param {user.IRegisterRequest} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            if (message.dateOfBirth != null && Object.hasOwnProperty.call(message, "dateOfBirth"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.dateOfBirth);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.address);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.phone);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link user.RegisterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RegisterRequest
         * @static
         * @param {user.IRegisterRequest} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RegisterRequest} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RegisterRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.firstName = reader.string();
                    break;
                case 3:
                    message.lastName = reader.string();
                    break;
                case 4:
                    message.dateOfBirth = reader.string();
                    break;
                case 5:
                    message.address = reader.string();
                    break;
                case 6:
                    message.phone = reader.string();
                    break;
                case 7:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RegisterRequest} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterRequest message.
         * @function verify
         * @memberof user.RegisterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.dateOfBirth != null && message.hasOwnProperty("dateOfBirth"))
                if (!$util.isString(message.dateOfBirth))
                    return "dateOfBirth: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RegisterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RegisterRequest} RegisterRequest
         */
        RegisterRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RegisterRequest)
                return object;
            var message = new $root.user.RegisterRequest();
            if (object.email != null)
                message.email = String(object.email);
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.dateOfBirth != null)
                message.dateOfBirth = String(object.dateOfBirth);
            if (object.address != null)
                message.address = String(object.address);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RegisterRequest
         * @static
         * @param {user.RegisterRequest} message RegisterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.email = "";
                object.firstName = "";
                object.lastName = "";
                object.dateOfBirth = "";
                object.address = "";
                object.phone = "";
                object.password = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.dateOfBirth != null && message.hasOwnProperty("dateOfBirth"))
                object.dateOfBirth = message.dateOfBirth;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this RegisterRequest to JSON.
         * @function toJSON
         * @memberof user.RegisterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterRequest;
    })();

    user.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof user
         * @interface ILoginRequest
         * @property {string|null} [email] LoginRequest email
         * @property {string|null} [password] LoginRequest password
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof user
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {user.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest email.
         * @member {string} email
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.email = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest=} [properties] Properties to set
         * @returns {user.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginRequest)
                return object;
            var message = new $root.user.LoginRequest();
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginRequest
         * @static
         * @param {user.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.email = "";
                object.password = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof user.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    user.GetUserRequest = (function() {

        /**
         * Properties of a GetUserRequest.
         * @memberof user
         * @interface IGetUserRequest
         * @property {string|null} [user_id] GetUserRequest user_id
         */

        /**
         * Constructs a new GetUserRequest.
         * @memberof user
         * @classdesc Represents a GetUserRequest.
         * @implements IGetUserRequest
         * @constructor
         * @param {user.IGetUserRequest=} [properties] Properties to set
         */
        function GetUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserRequest user_id.
         * @member {string} user_id
         * @memberof user.GetUserRequest
         * @instance
         */
        GetUserRequest.prototype.user_id = "";

        /**
         * Creates a new GetUserRequest instance using the specified properties.
         * @function create
         * @memberof user.GetUserRequest
         * @static
         * @param {user.IGetUserRequest=} [properties] Properties to set
         * @returns {user.GetUserRequest} GetUserRequest instance
         */
        GetUserRequest.create = function create(properties) {
            return new GetUserRequest(properties);
        };

        /**
         * Encodes the specified GetUserRequest message. Does not implicitly {@link user.GetUserRequest.verify|verify} messages.
         * @function encode
         * @memberof user.GetUserRequest
         * @static
         * @param {user.IGetUserRequest} message GetUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_id);
            return writer;
        };

        /**
         * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link user.GetUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.GetUserRequest
         * @static
         * @param {user.IGetUserRequest} message GetUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.GetUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.GetUserRequest} GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.GetUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.GetUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.GetUserRequest} GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserRequest message.
         * @function verify
         * @memberof user.GetUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isString(message.user_id))
                    return "user_id: string expected";
            return null;
        };

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.GetUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.GetUserRequest} GetUserRequest
         */
        GetUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.GetUserRequest)
                return object;
            var message = new $root.user.GetUserRequest();
            if (object.user_id != null)
                message.user_id = String(object.user_id);
            return message;
        };

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.GetUserRequest
         * @static
         * @param {user.GetUserRequest} message GetUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user_id = "";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            return object;
        };

        /**
         * Converts this GetUserRequest to JSON.
         * @function toJSON
         * @memberof user.GetUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserRequest;
    })();

    user.VerifyRequest = (function() {

        /**
         * Properties of a VerifyRequest.
         * @memberof user
         * @interface IVerifyRequest
         * @property {string|null} [token] VerifyRequest token
         */

        /**
         * Constructs a new VerifyRequest.
         * @memberof user
         * @classdesc Represents a VerifyRequest.
         * @implements IVerifyRequest
         * @constructor
         * @param {user.IVerifyRequest=} [properties] Properties to set
         */
        function VerifyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyRequest token.
         * @member {string} token
         * @memberof user.VerifyRequest
         * @instance
         */
        VerifyRequest.prototype.token = "";

        /**
         * Creates a new VerifyRequest instance using the specified properties.
         * @function create
         * @memberof user.VerifyRequest
         * @static
         * @param {user.IVerifyRequest=} [properties] Properties to set
         * @returns {user.VerifyRequest} VerifyRequest instance
         */
        VerifyRequest.create = function create(properties) {
            return new VerifyRequest(properties);
        };

        /**
         * Encodes the specified VerifyRequest message. Does not implicitly {@link user.VerifyRequest.verify|verify} messages.
         * @function encode
         * @memberof user.VerifyRequest
         * @static
         * @param {user.IVerifyRequest} message VerifyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified VerifyRequest message, length delimited. Does not implicitly {@link user.VerifyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.VerifyRequest
         * @static
         * @param {user.IVerifyRequest} message VerifyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VerifyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.VerifyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.VerifyRequest} VerifyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.VerifyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VerifyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.VerifyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.VerifyRequest} VerifyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifyRequest message.
         * @function verify
         * @memberof user.VerifyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a VerifyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.VerifyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.VerifyRequest} VerifyRequest
         */
        VerifyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.VerifyRequest)
                return object;
            var message = new $root.user.VerifyRequest();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a VerifyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.VerifyRequest
         * @static
         * @param {user.VerifyRequest} message VerifyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this VerifyRequest to JSON.
         * @function toJSON
         * @memberof user.VerifyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VerifyRequest;
    })();

    user.TokenResponse = (function() {

        /**
         * Properties of a TokenResponse.
         * @memberof user
         * @interface ITokenResponse
         * @property {string|null} [token] TokenResponse token
         */

        /**
         * Constructs a new TokenResponse.
         * @memberof user
         * @classdesc Represents a TokenResponse.
         * @implements ITokenResponse
         * @constructor
         * @param {user.ITokenResponse=} [properties] Properties to set
         */
        function TokenResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenResponse token.
         * @member {string} token
         * @memberof user.TokenResponse
         * @instance
         */
        TokenResponse.prototype.token = "";

        /**
         * Creates a new TokenResponse instance using the specified properties.
         * @function create
         * @memberof user.TokenResponse
         * @static
         * @param {user.ITokenResponse=} [properties] Properties to set
         * @returns {user.TokenResponse} TokenResponse instance
         */
        TokenResponse.create = function create(properties) {
            return new TokenResponse(properties);
        };

        /**
         * Encodes the specified TokenResponse message. Does not implicitly {@link user.TokenResponse.verify|verify} messages.
         * @function encode
         * @memberof user.TokenResponse
         * @static
         * @param {user.ITokenResponse} message TokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified TokenResponse message, length delimited. Does not implicitly {@link user.TokenResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.TokenResponse
         * @static
         * @param {user.ITokenResponse} message TokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.TokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.TokenResponse} TokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.TokenResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.TokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.TokenResponse} TokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenResponse message.
         * @function verify
         * @memberof user.TokenResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a TokenResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.TokenResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.TokenResponse} TokenResponse
         */
        TokenResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.TokenResponse)
                return object;
            var message = new $root.user.TokenResponse();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a TokenResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.TokenResponse
         * @static
         * @param {user.TokenResponse} message TokenResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this TokenResponse to JSON.
         * @function toJSON
         * @memberof user.TokenResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TokenResponse;
    })();

    user.UserInfoResponse = (function() {

        /**
         * Properties of a UserInfoResponse.
         * @memberof user
         * @interface IUserInfoResponse
         * @property {string|null} [email] UserInfoResponse email
         * @property {string|null} [first_name] UserInfoResponse first_name
         * @property {string|null} [last_name] UserInfoResponse last_name
         * @property {string|null} [date_of_birth] UserInfoResponse date_of_birth
         * @property {string|null} [address] UserInfoResponse address
         * @property {string|null} [phone] UserInfoResponse phone
         */

        /**
         * Constructs a new UserInfoResponse.
         * @memberof user
         * @classdesc Represents a UserInfoResponse.
         * @implements IUserInfoResponse
         * @constructor
         * @param {user.IUserInfoResponse=} [properties] Properties to set
         */
        function UserInfoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfoResponse email.
         * @member {string} email
         * @memberof user.UserInfoResponse
         * @instance
         */
        UserInfoResponse.prototype.email = "";

        /**
         * UserInfoResponse first_name.
         * @member {string} first_name
         * @memberof user.UserInfoResponse
         * @instance
         */
        UserInfoResponse.prototype.first_name = "";

        /**
         * UserInfoResponse last_name.
         * @member {string} last_name
         * @memberof user.UserInfoResponse
         * @instance
         */
        UserInfoResponse.prototype.last_name = "";

        /**
         * UserInfoResponse date_of_birth.
         * @member {string} date_of_birth
         * @memberof user.UserInfoResponse
         * @instance
         */
        UserInfoResponse.prototype.date_of_birth = "";

        /**
         * UserInfoResponse address.
         * @member {string} address
         * @memberof user.UserInfoResponse
         * @instance
         */
        UserInfoResponse.prototype.address = "";

        /**
         * UserInfoResponse phone.
         * @member {string} phone
         * @memberof user.UserInfoResponse
         * @instance
         */
        UserInfoResponse.prototype.phone = "";

        /**
         * Creates a new UserInfoResponse instance using the specified properties.
         * @function create
         * @memberof user.UserInfoResponse
         * @static
         * @param {user.IUserInfoResponse=} [properties] Properties to set
         * @returns {user.UserInfoResponse} UserInfoResponse instance
         */
        UserInfoResponse.create = function create(properties) {
            return new UserInfoResponse(properties);
        };

        /**
         * Encodes the specified UserInfoResponse message. Does not implicitly {@link user.UserInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof user.UserInfoResponse
         * @static
         * @param {user.IUserInfoResponse} message UserInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.first_name != null && Object.hasOwnProperty.call(message, "first_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.first_name);
            if (message.last_name != null && Object.hasOwnProperty.call(message, "last_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.last_name);
            if (message.date_of_birth != null && Object.hasOwnProperty.call(message, "date_of_birth"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.date_of_birth);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.address);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.phone);
            return writer;
        };

        /**
         * Encodes the specified UserInfoResponse message, length delimited. Does not implicitly {@link user.UserInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UserInfoResponse
         * @static
         * @param {user.IUserInfoResponse} message UserInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.UserInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UserInfoResponse} UserInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UserInfoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.first_name = reader.string();
                    break;
                case 3:
                    message.last_name = reader.string();
                    break;
                case 4:
                    message.date_of_birth = reader.string();
                    break;
                case 5:
                    message.address = reader.string();
                    break;
                case 6:
                    message.phone = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UserInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UserInfoResponse} UserInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfoResponse message.
         * @function verify
         * @memberof user.UserInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.first_name != null && message.hasOwnProperty("first_name"))
                if (!$util.isString(message.first_name))
                    return "first_name: string expected";
            if (message.last_name != null && message.hasOwnProperty("last_name"))
                if (!$util.isString(message.last_name))
                    return "last_name: string expected";
            if (message.date_of_birth != null && message.hasOwnProperty("date_of_birth"))
                if (!$util.isString(message.date_of_birth))
                    return "date_of_birth: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            return null;
        };

        /**
         * Creates a UserInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UserInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UserInfoResponse} UserInfoResponse
         */
        UserInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UserInfoResponse)
                return object;
            var message = new $root.user.UserInfoResponse();
            if (object.email != null)
                message.email = String(object.email);
            if (object.first_name != null)
                message.first_name = String(object.first_name);
            if (object.last_name != null)
                message.last_name = String(object.last_name);
            if (object.date_of_birth != null)
                message.date_of_birth = String(object.date_of_birth);
            if (object.address != null)
                message.address = String(object.address);
            if (object.phone != null)
                message.phone = String(object.phone);
            return message;
        };

        /**
         * Creates a plain object from a UserInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UserInfoResponse
         * @static
         * @param {user.UserInfoResponse} message UserInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.email = "";
                object.first_name = "";
                object.last_name = "";
                object.date_of_birth = "";
                object.address = "";
                object.phone = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.first_name != null && message.hasOwnProperty("first_name"))
                object.first_name = message.first_name;
            if (message.last_name != null && message.hasOwnProperty("last_name"))
                object.last_name = message.last_name;
            if (message.date_of_birth != null && message.hasOwnProperty("date_of_birth"))
                object.date_of_birth = message.date_of_birth;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            return object;
        };

        /**
         * Converts this UserInfoResponse to JSON.
         * @function toJSON
         * @memberof user.UserInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfoResponse;
    })();

    return user;
})();

module.exports = $root;
