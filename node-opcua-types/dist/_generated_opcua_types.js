"use strict";
// --------- This code has been automatically generated !!! 2019-09-05T21:06:22.721Z
/**
 * @module node-opcua-types
 */
// tslint:disable:no-this-assignment
// tslint:disable:max-classes-per-file
// tslint:disable:no-empty-interface
// tslint:disable:no-trailing-whitespace
// tslint:disable:array-type
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const node_opcua_assert_1 = require("node-opcua-assert");
const node_opcua_basic_types_1 = require("node-opcua-basic-types");
const node_opcua_data_model_1 = require("node-opcua-data-model");
const node_opcua_data_value_1 = require("node-opcua-data-value");
const node_opcua_extension_object_1 = require("node-opcua-extension-object");
const node_opcua_factory_1 = require("node-opcua-factory");
const node_opcua_nodeid_1 = require("node-opcua-nodeid");
const node_opcua_numeric_range_1 = require("node-opcua-numeric-range");
const node_opcua_status_code_1 = require("node-opcua-status-code");
const node_opcua_variant_1 = require("node-opcua-variant");
class DataTypeDefinition extends node_opcua_factory_1.BaseUAObject {
    constructor(options) {
        super();
    }
}
exports.DataTypeDefinition = DataTypeDefinition;
// --------------------------------------------------------------------------------------------
const schemaEUInformation = node_opcua_factory_1.buildStructuredType({
    name: "EUInformation",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "namespaceUri",
            fieldType: "UAString",
        },
        {
            name: "unitId",
            fieldType: "Int32",
        },
        {
            name: "displayName",
            fieldType: "LocalizedText",
        },
        {
            name: "description",
            fieldType: "LocalizedText",
        },
    ]
});
class EUInformation extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = EUInformation.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.namespaceUri = node_opcua_factory_1.initialize_field(schema.fields[0], options.namespaceUri);
        this.unitId = node_opcua_factory_1.initialize_field(schema.fields[1], options.unitId);
        this.displayName = node_opcua_factory_1.initialize_field(schema.fields[2], options.displayName);
        this.description = node_opcua_factory_1.initialize_field(schema.fields[3], options.description);
    }
    static get schema() { return schemaEUInformation; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.namespaceUri, stream);
        node_opcua_basic_types_1.encodeInt32(this.unitId, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.displayName, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.description, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.namespaceUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.unitId = node_opcua_basic_types_1.decodeInt32(stream);
        this.displayName = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.description = node_opcua_data_model_1.decodeLocalizedText(stream);
    }
    get schema() { return schemaEUInformation; }
}
EUInformation.possibleFields = [
    "namespaceUri",
    "unitId",
    "displayName",
    "description"
];
EUInformation.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(889, 0);
EUInformation.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(888, 0);
exports.EUInformation = EUInformation;
EUInformation.schema.encodingDefaultBinary = EUInformation.encodingDefaultBinary;
EUInformation.schema.encodingDefaultXml = EUInformation.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EUInformation", EUInformation);
// --------------------------------------------------------------------------------------------
const schemaRange = node_opcua_factory_1.buildStructuredType({
    name: "Range",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "low",
            fieldType: "Double",
        },
        {
            name: "high",
            fieldType: "Double",
        },
    ]
});
class Range extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = Range.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.low = node_opcua_factory_1.initialize_field(schema.fields[0], options.low);
        this.high = node_opcua_factory_1.initialize_field(schema.fields[1], options.high);
    }
    static get schema() { return schemaRange; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDouble(this.low, stream);
        node_opcua_basic_types_1.encodeDouble(this.high, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.low = node_opcua_basic_types_1.decodeDouble(stream);
        this.high = node_opcua_basic_types_1.decodeDouble(stream);
    }
    get schema() { return schemaRange; }
}
Range.possibleFields = [
    "low",
    "high"
];
Range.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(886, 0);
Range.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(885, 0);
exports.Range = Range;
Range.schema.encodingDefaultBinary = Range.encodingDefaultBinary;
Range.schema.encodingDefaultXml = Range.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("Range", Range);
// --------------------------------------------------------------------------------------------
var AxisScaleEnumeration;
(function (AxisScaleEnumeration) {
    AxisScaleEnumeration[AxisScaleEnumeration["Linear"] = 0] = "Linear";
    AxisScaleEnumeration[AxisScaleEnumeration["Log"] = 1] = "Log";
    AxisScaleEnumeration[AxisScaleEnumeration["Ln"] = 2] = "Ln";
    AxisScaleEnumeration[AxisScaleEnumeration["Invalid"] = 4294967295] = "Invalid";
})(AxisScaleEnumeration = exports.AxisScaleEnumeration || (exports.AxisScaleEnumeration = {}));
const schemaAxisScaleEnumeration = {
    enumValues: AxisScaleEnumeration,
    flaggable: false,
    minValue: 0,
    maxValue: 2,
    name: "AxisScaleEnumeration"
};
function decodeAxisScaleEnumeration(stream) {
    let value = stream.readUInt32();
    value = (value < schemaAxisScaleEnumeration.minValue || value > schemaAxisScaleEnumeration.maxValue) ? AxisScaleEnumeration.Invalid : value;
    return value;
}
function encodeAxisScaleEnumeration(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationAxisScaleEnumeration = node_opcua_factory_1.registerEnumeration(schemaAxisScaleEnumeration);
// --------------------------------------------------------------------------------------------
const schemaAxisInformation = node_opcua_factory_1.buildStructuredType({
    name: "AxisInformation",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "engineeringUnits",
            fieldType: "EUInformation",
        },
        {
            name: "euRange",
            fieldType: "Range",
        },
        {
            name: "title",
            fieldType: "LocalizedText",
        },
        {
            name: "axisScaleType",
            fieldType: "AxisScaleEnumeration",
        },
        {
            name: "axisSteps",
            fieldType: "Double",
            isArray: true
        },
    ]
});
class AxisInformation extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AxisInformation.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.engineeringUnits = new EUInformation();
            this.euRange = new Range();
        }
        this.engineeringUnits = new EUInformation(options.engineeringUnits);
        this.euRange = new Range(options.euRange);
        this.title = node_opcua_factory_1.initialize_field(schema.fields[2], options.title);
        this.axisScaleType = this.setAxisScaleType(node_opcua_factory_1.initialize_field(schema.fields[3], options.axisScaleType));
        this.axisSteps = node_opcua_factory_1.initialize_field_array(schema.fields[4], options.axisSteps);
    }
    static get schema() { return schemaAxisInformation; }
    encode(stream) {
        super.encode(stream);
        this.engineeringUnits.encode(stream);
        this.euRange.encode(stream);
        node_opcua_data_model_1.encodeLocalizedText(this.title, stream);
        encodeAxisScaleEnumeration(this.axisScaleType, stream);
        node_opcua_basic_types_1.encodeArray(this.axisSteps, stream, node_opcua_basic_types_1.encodeDouble);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.engineeringUnits.decode(stream);
        this.euRange.decode(stream);
        this.title = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.axisScaleType = decodeAxisScaleEnumeration(stream);
        this.axisSteps = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeDouble);
    }
    // Define Enumeration setters
    setAxisScaleType(value) {
        const coercedValue = exports._enumerationAxisScaleEnumeration.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to AxisScaleEnumeration :" + value);
        }
        this.axisScaleType = coercedValue.value;
        return this.axisScaleType;
    }
    get schema() { return schemaAxisInformation; }
}
AxisInformation.possibleFields = [
    "engineeringUnits",
    "euRange",
    "title",
    "axisScaleType",
    "axisSteps"
];
AxisInformation.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12089, 0);
AxisInformation.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12081, 0);
exports.AxisInformation = AxisInformation;
AxisInformation.schema.encodingDefaultBinary = AxisInformation.encodingDefaultBinary;
AxisInformation.schema.encodingDefaultXml = AxisInformation.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AxisInformation", AxisInformation);
// --------------------------------------------------------------------------------------------
const schemaFilterOperand = node_opcua_factory_1.buildStructuredType({
    name: "FilterOperand",
    baseType: "ExtensionObject",
    fields: []
});
class FilterOperand extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = FilterOperand.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaFilterOperand; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaFilterOperand; }
}
FilterOperand.possibleFields = [];
FilterOperand.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(591, 0);
FilterOperand.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(590, 0);
exports.FilterOperand = FilterOperand;
FilterOperand.schema.encodingDefaultBinary = FilterOperand.encodingDefaultBinary;
FilterOperand.schema.encodingDefaultXml = FilterOperand.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("FilterOperand", FilterOperand);
// --------------------------------------------------------------------------------------------
const schemaSimpleAttributeOperand = node_opcua_factory_1.buildStructuredType({
    name: "SimpleAttributeOperand",
    baseType: "FilterOperand",
    fields: [
        {
            name: "typeDefinitionId",
            fieldType: "NodeId",
        },
        {
            name: "browsePath",
            fieldType: "QualifiedName",
            isArray: true
        },
        {
            name: "attributeId",
            fieldType: "UInt32",
        },
        {
            name: "indexRange",
            fieldType: "NumericRange",
        },
    ]
});
class SimpleAttributeOperand extends FilterOperand {
    constructor(options) {
        super(options);
        const schema = SimpleAttributeOperand.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.typeDefinitionId = node_opcua_factory_1.initialize_field(schema.fields[0], options.typeDefinitionId);
        this.browsePath = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.browsePath);
        this.attributeId = node_opcua_factory_1.initialize_field(schema.fields[2], options.attributeId);
        this.indexRange = node_opcua_factory_1.initialize_field(schema.fields[3], options.indexRange);
    }
    static get schema() { return schemaSimpleAttributeOperand; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.typeDefinitionId, stream);
        node_opcua_basic_types_1.encodeArray(this.browsePath, stream, node_opcua_data_model_1.encodeQualifiedName);
        node_opcua_basic_types_1.encodeUInt32(this.attributeId, stream);
        node_opcua_numeric_range_1.encodeNumericRange(this.indexRange, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.typeDefinitionId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.browsePath = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeQualifiedName);
        this.attributeId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.indexRange = node_opcua_numeric_range_1.decodeNumericRange(stream);
    }
    get schema() { return schemaSimpleAttributeOperand; }
}
SimpleAttributeOperand.possibleFields = [
    "typeDefinitionId",
    "browsePath",
    "attributeId",
    "indexRange"
];
SimpleAttributeOperand.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(603, 0);
SimpleAttributeOperand.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(602, 0);
exports.SimpleAttributeOperand = SimpleAttributeOperand;
SimpleAttributeOperand.schema.encodingDefaultBinary = SimpleAttributeOperand.encodingDefaultBinary;
SimpleAttributeOperand.schema.encodingDefaultXml = SimpleAttributeOperand.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SimpleAttributeOperand", SimpleAttributeOperand);
// --------------------------------------------------------------------------------------------
const schemaKeyValuePair = node_opcua_factory_1.buildStructuredType({
    name: "KeyValuePair",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "key",
            fieldType: "QualifiedName",
        },
        {
            name: "value",
            fieldType: "Variant",
        },
    ]
});
class KeyValuePair extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = KeyValuePair.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.key = node_opcua_factory_1.initialize_field(schema.fields[0], options.key);
        this.value = node_opcua_factory_1.initialize_field(schema.fields[1], options.value);
    }
    static get schema() { return schemaKeyValuePair; }
    encode(stream) {
        super.encode(stream);
        node_opcua_data_model_1.encodeQualifiedName(this.key, stream);
        node_opcua_variant_1.encodeVariant(this.value, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.key = node_opcua_data_model_1.decodeQualifiedName(stream);
        this.value = node_opcua_variant_1.decodeVariant(stream);
    }
    get schema() { return schemaKeyValuePair; }
}
KeyValuePair.possibleFields = [
    "key",
    "value"
];
KeyValuePair.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(14846, 0);
KeyValuePair.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14802, 0);
exports.KeyValuePair = KeyValuePair;
KeyValuePair.schema.encodingDefaultBinary = KeyValuePair.encodingDefaultBinary;
KeyValuePair.schema.encodingDefaultXml = KeyValuePair.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("KeyValuePair", KeyValuePair);
// --------------------------------------------------------------------------------------------
const schemaAdditionalParametersType = node_opcua_factory_1.buildStructuredType({
    name: "AdditionalParametersType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "parameters",
            fieldType: "KeyValuePair",
            isArray: true
        },
    ]
});
class AdditionalParametersType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AdditionalParametersType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.parameters = null; /* null array */
        }
        this.parameters = []; // should default
        if (options.parameters) {
            node_opcua_assert_1.assert(_.isArray(options.parameters));
            this.parameters = options.parameters.map((e) => new KeyValuePair(e));
        }
    }
    static get schema() { return schemaAdditionalParametersType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.parameters, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.parameters = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaAdditionalParametersType; }
}
AdditionalParametersType.possibleFields = [
    "parameters"
];
AdditionalParametersType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(17537, 0);
AdditionalParametersType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(17541, 0);
exports.AdditionalParametersType = AdditionalParametersType;
AdditionalParametersType.schema.encodingDefaultBinary = AdditionalParametersType.encodingDefaultBinary;
AdditionalParametersType.schema.encodingDefaultXml = AdditionalParametersType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AdditionalParametersType", AdditionalParametersType);
// --------------------------------------------------------------------------------------------
const schemaEphemeralKeyType = node_opcua_factory_1.buildStructuredType({
    name: "EphemeralKeyType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "publicKey",
            fieldType: "ByteString",
        },
        {
            name: "signature",
            fieldType: "ByteString",
        },
    ]
});
class EphemeralKeyType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = EphemeralKeyType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.publicKey = node_opcua_factory_1.initialize_field(schema.fields[0], options.publicKey);
        this.signature = node_opcua_factory_1.initialize_field(schema.fields[1], options.signature);
    }
    static get schema() { return schemaEphemeralKeyType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeByteString(this.publicKey, stream);
        node_opcua_basic_types_1.encodeByteString(this.signature, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.publicKey = node_opcua_basic_types_1.decodeByteString(stream);
        this.signature = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaEphemeralKeyType; }
}
EphemeralKeyType.possibleFields = [
    "publicKey",
    "signature"
];
EphemeralKeyType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(17549, 0);
EphemeralKeyType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(17553, 0);
exports.EphemeralKeyType = EphemeralKeyType;
EphemeralKeyType.schema.encodingDefaultBinary = EphemeralKeyType.encodingDefaultBinary;
EphemeralKeyType.schema.encodingDefaultXml = EphemeralKeyType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EphemeralKeyType", EphemeralKeyType);
// --------------------------------------------------------------------------------------------
var MessageSecurityMode;
(function (MessageSecurityMode) {
    MessageSecurityMode[MessageSecurityMode["Invalid"] = 0] = "Invalid";
    MessageSecurityMode[MessageSecurityMode["None"] = 1] = "None";
    MessageSecurityMode[MessageSecurityMode["Sign"] = 2] = "Sign";
    MessageSecurityMode[MessageSecurityMode["SignAndEncrypt"] = 3] = "SignAndEncrypt";
})(MessageSecurityMode = exports.MessageSecurityMode || (exports.MessageSecurityMode = {}));
const schemaMessageSecurityMode = {
    enumValues: MessageSecurityMode,
    flaggable: false,
    minValue: 0,
    maxValue: 3,
    name: "MessageSecurityMode"
};
function decodeMessageSecurityMode(stream) {
    let value = stream.readUInt32();
    value = (value < schemaMessageSecurityMode.minValue || value > schemaMessageSecurityMode.maxValue) ? MessageSecurityMode.Invalid : value;
    return value;
}
function encodeMessageSecurityMode(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationMessageSecurityMode = node_opcua_factory_1.registerEnumeration(schemaMessageSecurityMode);
// --------------------------------------------------------------------------------------------
const schemaEndpointType = node_opcua_factory_1.buildStructuredType({
    name: "EndpointType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "endpointUrl",
            fieldType: "UAString",
        },
        {
            name: "securityMode",
            fieldType: "MessageSecurityMode",
        },
        {
            name: "securityPolicyUri",
            fieldType: "UAString",
        },
        {
            name: "transportProfileUri",
            fieldType: "UAString",
        },
    ]
});
class EndpointType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = EndpointType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.endpointUrl = node_opcua_factory_1.initialize_field(schema.fields[0], options.endpointUrl);
        this.securityMode = this.setSecurityMode(node_opcua_factory_1.initialize_field(schema.fields[1], options.securityMode));
        this.securityPolicyUri = node_opcua_factory_1.initialize_field(schema.fields[2], options.securityPolicyUri);
        this.transportProfileUri = node_opcua_factory_1.initialize_field(schema.fields[3], options.transportProfileUri);
    }
    static get schema() { return schemaEndpointType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.endpointUrl, stream);
        encodeMessageSecurityMode(this.securityMode, stream);
        node_opcua_basic_types_1.encodeUAString(this.securityPolicyUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.transportProfileUri, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.endpointUrl = node_opcua_basic_types_1.decodeUAString(stream);
        this.securityMode = decodeMessageSecurityMode(stream);
        this.securityPolicyUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.transportProfileUri = node_opcua_basic_types_1.decodeUAString(stream);
    }
    // Define Enumeration setters
    setSecurityMode(value) {
        const coercedValue = exports._enumerationMessageSecurityMode.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to MessageSecurityMode :" + value);
        }
        this.securityMode = coercedValue.value;
        return this.securityMode;
    }
    get schema() { return schemaEndpointType; }
}
EndpointType.possibleFields = [
    "endpointUrl",
    "securityMode",
    "securityPolicyUri",
    "transportProfileUri"
];
EndpointType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15671, 0);
EndpointType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15949, 0);
exports.EndpointType = EndpointType;
EndpointType.schema.encodingDefaultBinary = EndpointType.encodingDefaultBinary;
EndpointType.schema.encodingDefaultXml = EndpointType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EndpointType", EndpointType);
// --------------------------------------------------------------------------------------------
var IdentityCriteriaType;
(function (IdentityCriteriaType) {
    IdentityCriteriaType[IdentityCriteriaType["UserName"] = 1] = "UserName";
    IdentityCriteriaType[IdentityCriteriaType["Thumbprint"] = 2] = "Thumbprint";
    IdentityCriteriaType[IdentityCriteriaType["Role"] = 3] = "Role";
    IdentityCriteriaType[IdentityCriteriaType["GroupId"] = 4] = "GroupId";
    IdentityCriteriaType[IdentityCriteriaType["Anonymous"] = 5] = "Anonymous";
    IdentityCriteriaType[IdentityCriteriaType["AuthenticatedUser"] = 6] = "AuthenticatedUser";
    IdentityCriteriaType[IdentityCriteriaType["Invalid"] = 4294967295] = "Invalid";
})(IdentityCriteriaType = exports.IdentityCriteriaType || (exports.IdentityCriteriaType = {}));
const schemaIdentityCriteriaType = {
    enumValues: IdentityCriteriaType,
    flaggable: false,
    minValue: 1,
    maxValue: 6,
    name: "IdentityCriteriaType"
};
function decodeIdentityCriteriaType(stream) {
    let value = stream.readUInt32();
    value = (value < schemaIdentityCriteriaType.minValue || value > schemaIdentityCriteriaType.maxValue) ? IdentityCriteriaType.Invalid : value;
    return value;
}
function encodeIdentityCriteriaType(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationIdentityCriteriaType = node_opcua_factory_1.registerEnumeration(schemaIdentityCriteriaType);
// --------------------------------------------------------------------------------------------
const schemaIdentityMappingRuleType = node_opcua_factory_1.buildStructuredType({
    name: "IdentityMappingRuleType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "criteriaType",
            fieldType: "IdentityCriteriaType",
        },
        {
            name: "criteria",
            fieldType: "UAString",
        },
    ]
});
class IdentityMappingRuleType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = IdentityMappingRuleType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.criteriaType = this.setCriteriaType(node_opcua_factory_1.initialize_field(schema.fields[0], options.criteriaType));
        this.criteria = node_opcua_factory_1.initialize_field(schema.fields[1], options.criteria);
    }
    static get schema() { return schemaIdentityMappingRuleType; }
    encode(stream) {
        super.encode(stream);
        encodeIdentityCriteriaType(this.criteriaType, stream);
        node_opcua_basic_types_1.encodeUAString(this.criteria, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.criteriaType = decodeIdentityCriteriaType(stream);
        this.criteria = node_opcua_basic_types_1.decodeUAString(stream);
    }
    // Define Enumeration setters
    setCriteriaType(value) {
        const coercedValue = exports._enumerationIdentityCriteriaType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to IdentityCriteriaType :" + value);
        }
        this.criteriaType = coercedValue.value;
        return this.criteriaType;
    }
    get schema() { return schemaIdentityMappingRuleType; }
}
IdentityMappingRuleType.possibleFields = [
    "criteriaType",
    "criteria"
];
IdentityMappingRuleType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15736, 0);
IdentityMappingRuleType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15728, 0);
exports.IdentityMappingRuleType = IdentityMappingRuleType;
IdentityMappingRuleType.schema.encodingDefaultBinary = IdentityMappingRuleType.encodingDefaultBinary;
IdentityMappingRuleType.schema.encodingDefaultXml = IdentityMappingRuleType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("IdentityMappingRuleType", IdentityMappingRuleType);
// --------------------------------------------------------------------------------------------
const schemaTrustListDataType = node_opcua_factory_1.buildStructuredType({
    name: "TrustListDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "specifiedLists",
            fieldType: "UInt32",
        },
        {
            name: "trustedCertificates",
            fieldType: "ByteString",
            isArray: true
        },
        {
            name: "trustedCrls",
            fieldType: "ByteString",
            isArray: true
        },
        {
            name: "issuerCertificates",
            fieldType: "ByteString",
            isArray: true
        },
        {
            name: "issuerCrls",
            fieldType: "ByteString",
            isArray: true
        },
    ]
});
class TrustListDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = TrustListDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.specifiedLists = node_opcua_factory_1.initialize_field(schema.fields[0], options.specifiedLists);
        this.trustedCertificates = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.trustedCertificates);
        this.trustedCrls = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.trustedCrls);
        this.issuerCertificates = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.issuerCertificates);
        this.issuerCrls = node_opcua_factory_1.initialize_field_array(schema.fields[4], options.issuerCrls);
    }
    static get schema() { return schemaTrustListDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.specifiedLists, stream);
        node_opcua_basic_types_1.encodeArray(this.trustedCertificates, stream, node_opcua_basic_types_1.encodeByteString);
        node_opcua_basic_types_1.encodeArray(this.trustedCrls, stream, node_opcua_basic_types_1.encodeByteString);
        node_opcua_basic_types_1.encodeArray(this.issuerCertificates, stream, node_opcua_basic_types_1.encodeByteString);
        node_opcua_basic_types_1.encodeArray(this.issuerCrls, stream, node_opcua_basic_types_1.encodeByteString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.specifiedLists = node_opcua_basic_types_1.decodeUInt32(stream);
        this.trustedCertificates = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeByteString);
        this.trustedCrls = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeByteString);
        this.issuerCertificates = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeByteString);
        this.issuerCrls = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeByteString);
    }
    get schema() { return schemaTrustListDataType; }
}
TrustListDataType.possibleFields = [
    "specifiedLists",
    "trustedCertificates",
    "trustedCrls",
    "issuerCertificates",
    "issuerCrls"
];
TrustListDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12680, 0);
TrustListDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12676, 0);
exports.TrustListDataType = TrustListDataType;
TrustListDataType.schema.encodingDefaultBinary = TrustListDataType.encodingDefaultBinary;
TrustListDataType.schema.encodingDefaultXml = TrustListDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("TrustListDataType", TrustListDataType);
// --------------------------------------------------------------------------------------------
const schemaDecimalDataType = node_opcua_factory_1.buildStructuredType({
    name: "DecimalDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "scale",
            fieldType: "Int16",
        },
        {
            name: "value",
            fieldType: "ByteString",
        },
    ]
});
class DecimalDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DecimalDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.scale = node_opcua_factory_1.initialize_field(schema.fields[0], options.scale);
        this.value = node_opcua_factory_1.initialize_field(schema.fields[1], options.value);
    }
    static get schema() { return schemaDecimalDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeInt16(this.scale, stream);
        node_opcua_basic_types_1.encodeByteString(this.value, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.scale = node_opcua_basic_types_1.decodeInt16(stream);
        this.value = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaDecimalDataType; }
}
DecimalDataType.possibleFields = [
    "scale",
    "value"
];
DecimalDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(17863, 0);
DecimalDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(17862, 0);
exports.DecimalDataType = DecimalDataType;
DecimalDataType.schema.encodingDefaultBinary = DecimalDataType.encodingDefaultBinary;
DecimalDataType.schema.encodingDefaultXml = DecimalDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DecimalDataType", DecimalDataType);
// --------------------------------------------------------------------------------------------
const schemaStructureField = node_opcua_factory_1.buildStructuredType({
    name: "StructureField",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "name",
            fieldType: "UAString",
        },
        {
            name: "description",
            fieldType: "LocalizedText",
        },
        {
            name: "dataType",
            fieldType: "NodeId",
        },
        {
            name: "valueRank",
            fieldType: "Int32",
        },
        {
            name: "arrayDimensions",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "maxStringLength",
            fieldType: "UInt32",
        },
        {
            name: "isOptional",
            fieldType: "UABoolean",
        },
    ]
});
class StructureField extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = StructureField.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[0], options.name);
        this.description = node_opcua_factory_1.initialize_field(schema.fields[1], options.description);
        this.dataType = node_opcua_factory_1.initialize_field(schema.fields[2], options.dataType);
        this.valueRank = node_opcua_factory_1.initialize_field(schema.fields[3], options.valueRank);
        this.arrayDimensions = node_opcua_factory_1.initialize_field_array(schema.fields[4], options.arrayDimensions);
        this.maxStringLength = node_opcua_factory_1.initialize_field(schema.fields[5], options.maxStringLength);
        this.isOptional = node_opcua_factory_1.initialize_field(schema.fields[6], options.isOptional);
    }
    static get schema() { return schemaStructureField; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.description, stream);
        node_opcua_basic_types_1.encodeNodeId(this.dataType, stream);
        node_opcua_basic_types_1.encodeInt32(this.valueRank, stream);
        node_opcua_basic_types_1.encodeArray(this.arrayDimensions, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeUInt32(this.maxStringLength, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isOptional, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
        this.description = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.dataType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.valueRank = node_opcua_basic_types_1.decodeInt32(stream);
        this.arrayDimensions = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.maxStringLength = node_opcua_basic_types_1.decodeUInt32(stream);
        this.isOptional = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaStructureField; }
}
StructureField.possibleFields = [
    "name",
    "description",
    "dataType",
    "valueRank",
    "arrayDimensions",
    "maxStringLength",
    "isOptional"
];
StructureField.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(14844, 0);
StructureField.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14800, 0);
exports.StructureField = StructureField;
StructureField.schema.encodingDefaultBinary = StructureField.encodingDefaultBinary;
StructureField.schema.encodingDefaultXml = StructureField.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("StructureField", StructureField);
// --------------------------------------------------------------------------------------------
var StructureType;
(function (StructureType) {
    StructureType[StructureType["Structure"] = 0] = "Structure";
    StructureType[StructureType["StructureWithOptionalFields"] = 1] = "StructureWithOptionalFields";
    StructureType[StructureType["Union"] = 2] = "Union";
    StructureType[StructureType["Invalid"] = 4294967295] = "Invalid";
})(StructureType = exports.StructureType || (exports.StructureType = {}));
const schemaStructureType = {
    enumValues: StructureType,
    flaggable: false,
    minValue: 0,
    maxValue: 2,
    name: "StructureType"
};
function decodeStructureType(stream) {
    let value = stream.readUInt32();
    value = (value < schemaStructureType.minValue || value > schemaStructureType.maxValue) ? StructureType.Invalid : value;
    return value;
}
function encodeStructureType(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationStructureType = node_opcua_factory_1.registerEnumeration(schemaStructureType);
// --------------------------------------------------------------------------------------------
const schemaStructureDefinition = node_opcua_factory_1.buildStructuredType({
    name: "StructureDefinition",
    baseType: "DataTypeDefinition",
    fields: [
        {
            name: "defaultEncodingId",
            fieldType: "NodeId",
        },
        {
            name: "baseDataType",
            fieldType: "NodeId",
        },
        {
            name: "structureType",
            fieldType: "StructureType",
        },
        {
            name: "fields",
            fieldType: "StructureField",
            isArray: true
        },
    ]
});
class StructureDefinition extends DataTypeDefinition {
    constructor(options) {
        super(options);
        const schema = StructureDefinition.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.fields = null; /* null array */
        }
        this.defaultEncodingId = node_opcua_factory_1.initialize_field(schema.fields[0], options.defaultEncodingId);
        this.baseDataType = node_opcua_factory_1.initialize_field(schema.fields[1], options.baseDataType);
        this.structureType = this.setStructureType(node_opcua_factory_1.initialize_field(schema.fields[2], options.structureType));
        this.fields = []; // should default
        if (options.fields) {
            node_opcua_assert_1.assert(_.isArray(options.fields));
            this.fields = options.fields.map((e) => new StructureField(e));
        }
    }
    static get schema() { return schemaStructureDefinition; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.defaultEncodingId, stream);
        node_opcua_basic_types_1.encodeNodeId(this.baseDataType, stream);
        encodeStructureType(this.structureType, stream);
        node_opcua_basic_types_1.encodeArray(this.fields, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.defaultEncodingId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.baseDataType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.structureType = decodeStructureType(stream);
        this.fields = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new StructureField();
            obj.decode(stream1);
            return obj;
        });
    }
    // Define Enumeration setters
    setStructureType(value) {
        const coercedValue = exports._enumerationStructureType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to StructureType :" + value);
        }
        this.structureType = coercedValue.value;
        return this.structureType;
    }
    get schema() { return schemaStructureDefinition; }
}
StructureDefinition.possibleFields = [
    "defaultEncodingId",
    "baseDataType",
    "structureType",
    "fields"
];
StructureDefinition.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(122, 0);
StructureDefinition.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14798, 0);
exports.StructureDefinition = StructureDefinition;
StructureDefinition.schema.encodingDefaultBinary = StructureDefinition.encodingDefaultBinary;
StructureDefinition.schema.encodingDefaultXml = StructureDefinition.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("StructureDefinition", StructureDefinition);
// --------------------------------------------------------------------------------------------
const schemaDataTypeDescription = node_opcua_factory_1.buildStructuredType({
    name: "DataTypeDescription",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "dataTypeId",
            fieldType: "NodeId",
        },
        {
            name: "name",
            fieldType: "QualifiedName",
        },
    ]
});
class DataTypeDescription extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DataTypeDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.dataTypeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.dataTypeId);
        this.name = node_opcua_factory_1.initialize_field(schema.fields[1], options.name);
    }
    static get schema() { return schemaDataTypeDescription; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.dataTypeId, stream);
        node_opcua_data_model_1.encodeQualifiedName(this.name, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.dataTypeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.name = node_opcua_data_model_1.decodeQualifiedName(stream);
    }
    get schema() { return schemaDataTypeDescription; }
}
DataTypeDescription.possibleFields = [
    "dataTypeId",
    "name"
];
DataTypeDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(125, 0);
DataTypeDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14796, 0);
exports.DataTypeDescription = DataTypeDescription;
DataTypeDescription.schema.encodingDefaultBinary = DataTypeDescription.encodingDefaultBinary;
DataTypeDescription.schema.encodingDefaultXml = DataTypeDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataTypeDescription", DataTypeDescription);
// --------------------------------------------------------------------------------------------
const schemaStructureDescription = node_opcua_factory_1.buildStructuredType({
    name: "StructureDescription",
    baseType: "DataTypeDescription",
    fields: [
        {
            name: "structureDefinition",
            fieldType: "StructureDefinition",
        },
    ]
});
class StructureDescription extends DataTypeDescription {
    constructor(options) {
        super(options);
        const schema = StructureDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.structureDefinition = new StructureDefinition();
        }
        this.structureDefinition = new StructureDefinition(options.structureDefinition);
    }
    static get schema() { return schemaStructureDescription; }
    encode(stream) {
        super.encode(stream);
        this.structureDefinition.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.structureDefinition.decode(stream);
    }
    get schema() { return schemaStructureDescription; }
}
StructureDescription.possibleFields = [
    "structureDefinition"
];
StructureDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(126, 0);
StructureDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15589, 0);
exports.StructureDescription = StructureDescription;
StructureDescription.schema.encodingDefaultBinary = StructureDescription.encodingDefaultBinary;
StructureDescription.schema.encodingDefaultXml = StructureDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("StructureDescription", StructureDescription);
// --------------------------------------------------------------------------------------------
const schemaEnumValueType = node_opcua_factory_1.buildStructuredType({
    name: "EnumValueType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "value",
            fieldType: "Int64",
        },
        {
            name: "displayName",
            fieldType: "LocalizedText",
        },
        {
            name: "description",
            fieldType: "LocalizedText",
        },
    ]
});
class EnumValueType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = EnumValueType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.value = node_opcua_factory_1.initialize_field(schema.fields[0], options.value);
        this.displayName = node_opcua_factory_1.initialize_field(schema.fields[1], options.displayName);
        this.description = node_opcua_factory_1.initialize_field(schema.fields[2], options.description);
    }
    static get schema() { return schemaEnumValueType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeInt64(this.value, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.displayName, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.description, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.value = node_opcua_basic_types_1.decodeInt64(stream);
        this.displayName = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.description = node_opcua_data_model_1.decodeLocalizedText(stream);
    }
    get schema() { return schemaEnumValueType; }
}
EnumValueType.possibleFields = [
    "value",
    "displayName",
    "description"
];
EnumValueType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(8251, 0);
EnumValueType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(7616, 0);
exports.EnumValueType = EnumValueType;
EnumValueType.schema.encodingDefaultBinary = EnumValueType.encodingDefaultBinary;
EnumValueType.schema.encodingDefaultXml = EnumValueType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EnumValueType", EnumValueType);
// --------------------------------------------------------------------------------------------
const schemaEnumField = node_opcua_factory_1.buildStructuredType({
    name: "EnumField",
    baseType: "EnumValueType",
    fields: [
        {
            name: "name",
            fieldType: "UAString",
        },
    ]
});
class EnumField extends EnumValueType {
    constructor(options) {
        super(options);
        const schema = EnumField.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[0], options.name);
    }
    static get schema() { return schemaEnumField; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
    }
    get schema() { return schemaEnumField; }
}
EnumField.possibleFields = [
    "name"
];
EnumField.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(14845, 0);
EnumField.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14801, 0);
exports.EnumField = EnumField;
EnumField.schema.encodingDefaultBinary = EnumField.encodingDefaultBinary;
EnumField.schema.encodingDefaultXml = EnumField.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EnumField", EnumField);
// --------------------------------------------------------------------------------------------
const schemaEnumDefinition = node_opcua_factory_1.buildStructuredType({
    name: "EnumDefinition",
    baseType: "DataTypeDefinition",
    fields: [
        {
            name: "fields",
            fieldType: "EnumField",
            isArray: true
        },
    ]
});
class EnumDefinition extends DataTypeDefinition {
    constructor(options) {
        super(options);
        const schema = EnumDefinition.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.fields = null; /* null array */
        }
        this.fields = []; // should default
        if (options.fields) {
            node_opcua_assert_1.assert(_.isArray(options.fields));
            this.fields = options.fields.map((e) => new EnumField(e));
        }
    }
    static get schema() { return schemaEnumDefinition; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.fields, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.fields = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EnumField();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaEnumDefinition; }
}
EnumDefinition.possibleFields = [
    "fields"
];
EnumDefinition.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(123, 0);
EnumDefinition.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14799, 0);
exports.EnumDefinition = EnumDefinition;
EnumDefinition.schema.encodingDefaultBinary = EnumDefinition.encodingDefaultBinary;
EnumDefinition.schema.encodingDefaultXml = EnumDefinition.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EnumDefinition", EnumDefinition);
// --------------------------------------------------------------------------------------------
const schemaEnumDescription = node_opcua_factory_1.buildStructuredType({
    name: "EnumDescription",
    baseType: "DataTypeDescription",
    fields: [
        {
            name: "enumDefinition",
            fieldType: "EnumDefinition",
        },
        {
            name: "builtInType",
            fieldType: "Byte",
        },
    ]
});
class EnumDescription extends DataTypeDescription {
    constructor(options) {
        super(options);
        const schema = EnumDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.enumDefinition = new EnumDefinition();
        }
        this.enumDefinition = new EnumDefinition(options.enumDefinition);
        this.builtInType = node_opcua_factory_1.initialize_field(schema.fields[1], options.builtInType);
    }
    static get schema() { return schemaEnumDescription; }
    encode(stream) {
        super.encode(stream);
        this.enumDefinition.encode(stream);
        node_opcua_basic_types_1.encodeByte(this.builtInType, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.enumDefinition.decode(stream);
        this.builtInType = node_opcua_basic_types_1.decodeByte(stream);
    }
    get schema() { return schemaEnumDescription; }
}
EnumDescription.possibleFields = [
    "enumDefinition",
    "builtInType"
];
EnumDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(127, 0);
EnumDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15590, 0);
exports.EnumDescription = EnumDescription;
EnumDescription.schema.encodingDefaultBinary = EnumDescription.encodingDefaultBinary;
EnumDescription.schema.encodingDefaultXml = EnumDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EnumDescription", EnumDescription);
// --------------------------------------------------------------------------------------------
const schemaSimpleTypeDescription = node_opcua_factory_1.buildStructuredType({
    name: "SimpleTypeDescription",
    baseType: "DataTypeDescription",
    fields: [
        {
            name: "baseDataType",
            fieldType: "NodeId",
        },
        {
            name: "builtInType",
            fieldType: "Byte",
        },
    ]
});
class SimpleTypeDescription extends DataTypeDescription {
    constructor(options) {
        super(options);
        const schema = SimpleTypeDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.baseDataType = node_opcua_factory_1.initialize_field(schema.fields[0], options.baseDataType);
        this.builtInType = node_opcua_factory_1.initialize_field(schema.fields[1], options.builtInType);
    }
    static get schema() { return schemaSimpleTypeDescription; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.baseDataType, stream);
        node_opcua_basic_types_1.encodeByte(this.builtInType, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.baseDataType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.builtInType = node_opcua_basic_types_1.decodeByte(stream);
    }
    get schema() { return schemaSimpleTypeDescription; }
}
SimpleTypeDescription.possibleFields = [
    "baseDataType",
    "builtInType"
];
SimpleTypeDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15421, 0);
SimpleTypeDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15529, 0);
exports.SimpleTypeDescription = SimpleTypeDescription;
SimpleTypeDescription.schema.encodingDefaultBinary = SimpleTypeDescription.encodingDefaultBinary;
SimpleTypeDescription.schema.encodingDefaultXml = SimpleTypeDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SimpleTypeDescription", SimpleTypeDescription);
// --------------------------------------------------------------------------------------------
const schemaDataTypeSchemaHeader = node_opcua_factory_1.buildStructuredType({
    name: "DataTypeSchemaHeader",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "namespaces",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "structureDataTypes",
            fieldType: "StructureDescription",
            isArray: true
        },
        {
            name: "enumDataTypes",
            fieldType: "EnumDescription",
            isArray: true
        },
        {
            name: "simpleDataTypes",
            fieldType: "SimpleTypeDescription",
            isArray: true
        },
    ]
});
class DataTypeSchemaHeader extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DataTypeSchemaHeader.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.structureDataTypes = null; /* null array */
            this.enumDataTypes = null; /* null array */
            this.simpleDataTypes = null; /* null array */
        }
        this.namespaces = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.namespaces);
        this.structureDataTypes = []; // should default
        if (options.structureDataTypes) {
            node_opcua_assert_1.assert(_.isArray(options.structureDataTypes));
            this.structureDataTypes = options.structureDataTypes.map((e) => new StructureDescription(e));
        }
        this.enumDataTypes = []; // should default
        if (options.enumDataTypes) {
            node_opcua_assert_1.assert(_.isArray(options.enumDataTypes));
            this.enumDataTypes = options.enumDataTypes.map((e) => new EnumDescription(e));
        }
        this.simpleDataTypes = []; // should default
        if (options.simpleDataTypes) {
            node_opcua_assert_1.assert(_.isArray(options.simpleDataTypes));
            this.simpleDataTypes = options.simpleDataTypes.map((e) => new SimpleTypeDescription(e));
        }
    }
    static get schema() { return schemaDataTypeSchemaHeader; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.namespaces, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeArray(this.structureDataTypes, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.enumDataTypes, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.simpleDataTypes, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.namespaces = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.structureDataTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new StructureDescription();
            obj.decode(stream1);
            return obj;
        });
        this.enumDataTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EnumDescription();
            obj.decode(stream1);
            return obj;
        });
        this.simpleDataTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new SimpleTypeDescription();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaDataTypeSchemaHeader; }
}
DataTypeSchemaHeader.possibleFields = [
    "namespaces",
    "structureDataTypes",
    "enumDataTypes",
    "simpleDataTypes"
];
DataTypeSchemaHeader.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15676, 0);
DataTypeSchemaHeader.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15950, 0);
exports.DataTypeSchemaHeader = DataTypeSchemaHeader;
DataTypeSchemaHeader.schema.encodingDefaultBinary = DataTypeSchemaHeader.encodingDefaultBinary;
DataTypeSchemaHeader.schema.encodingDefaultXml = DataTypeSchemaHeader.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataTypeSchemaHeader", DataTypeSchemaHeader);
// --------------------------------------------------------------------------------------------
const schemaUABinaryFileDataType = node_opcua_factory_1.buildStructuredType({
    name: "UABinaryFileDataType",
    baseType: "DataTypeSchemaHeader",
    fields: [
        {
            name: "namespaces",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "structureDataTypes",
            fieldType: "StructureDescription",
            isArray: true
        },
        {
            name: "enumDataTypes",
            fieldType: "EnumDescription",
            isArray: true
        },
        {
            name: "simpleDataTypes",
            fieldType: "SimpleTypeDescription",
            isArray: true
        },
        {
            name: "schemaLocation",
            fieldType: "UAString",
        },
        {
            name: "fileHeader",
            fieldType: "KeyValuePair",
            isArray: true
        },
        {
            name: "body",
            fieldType: "Variant",
        },
    ]
});
class UABinaryFileDataType extends DataTypeSchemaHeader {
    constructor(options) {
        super(options);
        const schema = UABinaryFileDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.structureDataTypes = null; /* null array */
            this.enumDataTypes = null; /* null array */
            this.simpleDataTypes = null; /* null array */
            this.fileHeader = null; /* null array */
        }
        this.namespaces = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.namespaces);
        this.structureDataTypes = []; // should default
        if (options.structureDataTypes) {
            node_opcua_assert_1.assert(_.isArray(options.structureDataTypes));
            this.structureDataTypes = options.structureDataTypes.map((e) => new StructureDescription(e));
        }
        this.enumDataTypes = []; // should default
        if (options.enumDataTypes) {
            node_opcua_assert_1.assert(_.isArray(options.enumDataTypes));
            this.enumDataTypes = options.enumDataTypes.map((e) => new EnumDescription(e));
        }
        this.simpleDataTypes = []; // should default
        if (options.simpleDataTypes) {
            node_opcua_assert_1.assert(_.isArray(options.simpleDataTypes));
            this.simpleDataTypes = options.simpleDataTypes.map((e) => new SimpleTypeDescription(e));
        }
        this.schemaLocation = node_opcua_factory_1.initialize_field(schema.fields[4], options.schemaLocation);
        this.fileHeader = []; // should default
        if (options.fileHeader) {
            node_opcua_assert_1.assert(_.isArray(options.fileHeader));
            this.fileHeader = options.fileHeader.map((e) => new KeyValuePair(e));
        }
        this.body = node_opcua_factory_1.initialize_field(schema.fields[6], options.body);
    }
    static get schema() { return schemaUABinaryFileDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.namespaces, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeArray(this.structureDataTypes, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.enumDataTypes, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.simpleDataTypes, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUAString(this.schemaLocation, stream);
        node_opcua_basic_types_1.encodeArray(this.fileHeader, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_variant_1.encodeVariant(this.body, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.namespaces = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.structureDataTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new StructureDescription();
            obj.decode(stream1);
            return obj;
        });
        this.enumDataTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EnumDescription();
            obj.decode(stream1);
            return obj;
        });
        this.simpleDataTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new SimpleTypeDescription();
            obj.decode(stream1);
            return obj;
        });
        this.schemaLocation = node_opcua_basic_types_1.decodeUAString(stream);
        this.fileHeader = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
        this.body = node_opcua_variant_1.decodeVariant(stream);
    }
    get schema() { return schemaUABinaryFileDataType; }
}
UABinaryFileDataType.possibleFields = [
    "namespaces",
    "structureDataTypes",
    "enumDataTypes",
    "simpleDataTypes",
    "schemaLocation",
    "fileHeader",
    "body"
];
UABinaryFileDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15422, 0);
UABinaryFileDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15531, 0);
exports.UABinaryFileDataType = UABinaryFileDataType;
UABinaryFileDataType.schema.encodingDefaultBinary = UABinaryFileDataType.encodingDefaultBinary;
UABinaryFileDataType.schema.encodingDefaultXml = UABinaryFileDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UABinaryFileDataType", UABinaryFileDataType);
// --------------------------------------------------------------------------------------------
var DataSetFieldFlags;
(function (DataSetFieldFlags) {
    DataSetFieldFlags[DataSetFieldFlags["None"] = 0] = "None";
    DataSetFieldFlags[DataSetFieldFlags["PromotedField"] = 1] = "PromotedField";
    DataSetFieldFlags[DataSetFieldFlags["Invalid"] = 4294967295] = "Invalid";
})(DataSetFieldFlags = exports.DataSetFieldFlags || (exports.DataSetFieldFlags = {}));
const schemaDataSetFieldFlags = {
    enumValues: DataSetFieldFlags,
    flaggable: false,
    minValue: 0,
    maxValue: 1,
    name: "DataSetFieldFlags"
};
function decodeDataSetFieldFlags(stream) {
    let value = stream.readUInt32();
    value = (value < schemaDataSetFieldFlags.minValue || value > schemaDataSetFieldFlags.maxValue) ? DataSetFieldFlags.Invalid : value;
    return value;
}
function encodeDataSetFieldFlags(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationDataSetFieldFlags = node_opcua_factory_1.registerEnumeration(schemaDataSetFieldFlags);
// --------------------------------------------------------------------------------------------
const schemaFieldMetaData = node_opcua_factory_1.buildStructuredType({
    name: "FieldMetaData",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "name",
            fieldType: "UAString",
        },
        {
            name: "description",
            fieldType: "LocalizedText",
        },
        {
            name: "fieldFlags",
            fieldType: "DataSetFieldFlags",
        },
        {
            name: "builtInType",
            fieldType: "Byte",
        },
        {
            name: "dataType",
            fieldType: "NodeId",
        },
        {
            name: "valueRank",
            fieldType: "Int32",
        },
        {
            name: "arrayDimensions",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "maxStringLength",
            fieldType: "UInt32",
        },
        {
            name: "dataSetFieldId",
            fieldType: "Guid",
        },
        {
            name: "properties",
            fieldType: "KeyValuePair",
            isArray: true
        },
    ]
});
class FieldMetaData extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = FieldMetaData.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.properties = null; /* null array */
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[0], options.name);
        this.description = node_opcua_factory_1.initialize_field(schema.fields[1], options.description);
        this.fieldFlags = this.setFieldFlags(node_opcua_factory_1.initialize_field(schema.fields[2], options.fieldFlags));
        this.builtInType = node_opcua_factory_1.initialize_field(schema.fields[3], options.builtInType);
        this.dataType = node_opcua_factory_1.initialize_field(schema.fields[4], options.dataType);
        this.valueRank = node_opcua_factory_1.initialize_field(schema.fields[5], options.valueRank);
        this.arrayDimensions = node_opcua_factory_1.initialize_field_array(schema.fields[6], options.arrayDimensions);
        this.maxStringLength = node_opcua_factory_1.initialize_field(schema.fields[7], options.maxStringLength);
        this.dataSetFieldId = node_opcua_factory_1.initialize_field(schema.fields[8], options.dataSetFieldId);
        this.properties = []; // should default
        if (options.properties) {
            node_opcua_assert_1.assert(_.isArray(options.properties));
            this.properties = options.properties.map((e) => new KeyValuePair(e));
        }
    }
    static get schema() { return schemaFieldMetaData; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.description, stream);
        encodeDataSetFieldFlags(this.fieldFlags, stream);
        node_opcua_basic_types_1.encodeByte(this.builtInType, stream);
        node_opcua_basic_types_1.encodeNodeId(this.dataType, stream);
        node_opcua_basic_types_1.encodeInt32(this.valueRank, stream);
        node_opcua_basic_types_1.encodeArray(this.arrayDimensions, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeUInt32(this.maxStringLength, stream);
        node_opcua_basic_types_1.encodeGuid(this.dataSetFieldId, stream);
        node_opcua_basic_types_1.encodeArray(this.properties, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
        this.description = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.fieldFlags = decodeDataSetFieldFlags(stream);
        this.builtInType = node_opcua_basic_types_1.decodeByte(stream);
        this.dataType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.valueRank = node_opcua_basic_types_1.decodeInt32(stream);
        this.arrayDimensions = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.maxStringLength = node_opcua_basic_types_1.decodeUInt32(stream);
        this.dataSetFieldId = node_opcua_basic_types_1.decodeGuid(stream);
        this.properties = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
    }
    // Define Enumeration setters
    setFieldFlags(value) {
        const coercedValue = exports._enumerationDataSetFieldFlags.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to DataSetFieldFlags :" + value);
        }
        this.fieldFlags = coercedValue.value;
        return this.fieldFlags;
    }
    get schema() { return schemaFieldMetaData; }
}
FieldMetaData.possibleFields = [
    "name",
    "description",
    "fieldFlags",
    "builtInType",
    "dataType",
    "valueRank",
    "arrayDimensions",
    "maxStringLength",
    "dataSetFieldId",
    "properties"
];
FieldMetaData.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(14839, 0);
FieldMetaData.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14795, 0);
exports.FieldMetaData = FieldMetaData;
FieldMetaData.schema.encodingDefaultBinary = FieldMetaData.encodingDefaultBinary;
FieldMetaData.schema.encodingDefaultXml = FieldMetaData.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("FieldMetaData", FieldMetaData);
// --------------------------------------------------------------------------------------------
const schemaConfigurationVersionDataType = node_opcua_factory_1.buildStructuredType({
    name: "ConfigurationVersionDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "majorVersion",
            fieldType: "UInt32",
        },
        {
            name: "minorVersion",
            fieldType: "UInt32",
        },
    ]
});
class ConfigurationVersionDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ConfigurationVersionDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.majorVersion = node_opcua_factory_1.initialize_field(schema.fields[0], options.majorVersion);
        this.minorVersion = node_opcua_factory_1.initialize_field(schema.fields[1], options.minorVersion);
    }
    static get schema() { return schemaConfigurationVersionDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.majorVersion, stream);
        node_opcua_basic_types_1.encodeUInt32(this.minorVersion, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.majorVersion = node_opcua_basic_types_1.decodeUInt32(stream);
        this.minorVersion = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaConfigurationVersionDataType; }
}
ConfigurationVersionDataType.possibleFields = [
    "majorVersion",
    "minorVersion"
];
ConfigurationVersionDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(14847, 0);
ConfigurationVersionDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14803, 0);
exports.ConfigurationVersionDataType = ConfigurationVersionDataType;
ConfigurationVersionDataType.schema.encodingDefaultBinary = ConfigurationVersionDataType.encodingDefaultBinary;
ConfigurationVersionDataType.schema.encodingDefaultXml = ConfigurationVersionDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ConfigurationVersionDataType", ConfigurationVersionDataType);
// --------------------------------------------------------------------------------------------
const schemaDataSetMetaDataType = node_opcua_factory_1.buildStructuredType({
    name: "DataSetMetaDataType",
    baseType: "DataTypeSchemaHeader",
    fields: [
        {
            name: "namespaces",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "structureDataTypes",
            fieldType: "StructureDescription",
            isArray: true
        },
        {
            name: "enumDataTypes",
            fieldType: "EnumDescription",
            isArray: true
        },
        {
            name: "simpleDataTypes",
            fieldType: "SimpleTypeDescription",
            isArray: true
        },
        {
            name: "name",
            fieldType: "UAString",
        },
        {
            name: "description",
            fieldType: "LocalizedText",
        },
        {
            name: "fields",
            fieldType: "FieldMetaData",
            isArray: true
        },
        {
            name: "dataSetClassId",
            fieldType: "Guid",
        },
        {
            name: "configurationVersion",
            fieldType: "ConfigurationVersionDataType",
        },
    ]
});
class DataSetMetaDataType extends DataTypeSchemaHeader {
    constructor(options) {
        super(options);
        const schema = DataSetMetaDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.structureDataTypes = null; /* null array */
            this.enumDataTypes = null; /* null array */
            this.simpleDataTypes = null; /* null array */
            this.fields = null; /* null array */
            this.configurationVersion = new ConfigurationVersionDataType();
        }
        this.namespaces = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.namespaces);
        this.structureDataTypes = []; // should default
        if (options.structureDataTypes) {
            node_opcua_assert_1.assert(_.isArray(options.structureDataTypes));
            this.structureDataTypes = options.structureDataTypes.map((e) => new StructureDescription(e));
        }
        this.enumDataTypes = []; // should default
        if (options.enumDataTypes) {
            node_opcua_assert_1.assert(_.isArray(options.enumDataTypes));
            this.enumDataTypes = options.enumDataTypes.map((e) => new EnumDescription(e));
        }
        this.simpleDataTypes = []; // should default
        if (options.simpleDataTypes) {
            node_opcua_assert_1.assert(_.isArray(options.simpleDataTypes));
            this.simpleDataTypes = options.simpleDataTypes.map((e) => new SimpleTypeDescription(e));
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[4], options.name);
        this.description = node_opcua_factory_1.initialize_field(schema.fields[5], options.description);
        this.fields = []; // should default
        if (options.fields) {
            node_opcua_assert_1.assert(_.isArray(options.fields));
            this.fields = options.fields.map((e) => new FieldMetaData(e));
        }
        this.dataSetClassId = node_opcua_factory_1.initialize_field(schema.fields[7], options.dataSetClassId);
        this.configurationVersion = new ConfigurationVersionDataType(options.configurationVersion);
    }
    static get schema() { return schemaDataSetMetaDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.namespaces, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeArray(this.structureDataTypes, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.enumDataTypes, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.simpleDataTypes, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.description, stream);
        node_opcua_basic_types_1.encodeArray(this.fields, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeGuid(this.dataSetClassId, stream);
        this.configurationVersion.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.namespaces = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.structureDataTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new StructureDescription();
            obj.decode(stream1);
            return obj;
        });
        this.enumDataTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EnumDescription();
            obj.decode(stream1);
            return obj;
        });
        this.simpleDataTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new SimpleTypeDescription();
            obj.decode(stream1);
            return obj;
        });
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
        this.description = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.fields = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new FieldMetaData();
            obj.decode(stream1);
            return obj;
        });
        this.dataSetClassId = node_opcua_basic_types_1.decodeGuid(stream);
        this.configurationVersion.decode(stream);
    }
    get schema() { return schemaDataSetMetaDataType; }
}
DataSetMetaDataType.possibleFields = [
    "namespaces",
    "structureDataTypes",
    "enumDataTypes",
    "simpleDataTypes",
    "name",
    "description",
    "fields",
    "dataSetClassId",
    "configurationVersion"
];
DataSetMetaDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(124, 0);
DataSetMetaDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14794, 0);
exports.DataSetMetaDataType = DataSetMetaDataType;
DataSetMetaDataType.schema.encodingDefaultBinary = DataSetMetaDataType.encodingDefaultBinary;
DataSetMetaDataType.schema.encodingDefaultXml = DataSetMetaDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataSetMetaDataType", DataSetMetaDataType);
// --------------------------------------------------------------------------------------------
const schemaPublishedDataSetDataType = node_opcua_factory_1.buildStructuredType({
    name: "PublishedDataSetDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "name",
            fieldType: "UAString",
        },
        {
            name: "dataSetFolder",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "dataSetMetaData",
            fieldType: "DataSetMetaDataType",
        },
        {
            name: "extensionFields",
            fieldType: "KeyValuePair",
            isArray: true
        },
        {
            name: "dataSetSource",
            fieldType: "ExtensionObject",
        },
    ]
});
class PublishedDataSetDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = PublishedDataSetDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.dataSetMetaData = new DataSetMetaDataType();
            this.extensionFields = null; /* null array */
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[0], options.name);
        this.dataSetFolder = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.dataSetFolder);
        this.dataSetMetaData = new DataSetMetaDataType(options.dataSetMetaData);
        this.extensionFields = []; // should default
        if (options.extensionFields) {
            node_opcua_assert_1.assert(_.isArray(options.extensionFields));
            this.extensionFields = options.extensionFields.map((e) => new KeyValuePair(e));
        }
        this.dataSetSource = node_opcua_factory_1.initialize_field(schema.fields[4], options.dataSetSource);
    }
    static get schema() { return schemaPublishedDataSetDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
        node_opcua_basic_types_1.encodeArray(this.dataSetFolder, stream, node_opcua_basic_types_1.encodeUAString);
        this.dataSetMetaData.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.extensionFields, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_extension_object_1.encodeExtensionObject(this.dataSetSource, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
        this.dataSetFolder = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.dataSetMetaData.decode(stream);
        this.extensionFields = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
        this.dataSetSource = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    get schema() { return schemaPublishedDataSetDataType; }
}
PublishedDataSetDataType.possibleFields = [
    "name",
    "dataSetFolder",
    "dataSetMetaData",
    "extensionFields",
    "dataSetSource"
];
PublishedDataSetDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15677, 0);
PublishedDataSetDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15951, 0);
exports.PublishedDataSetDataType = PublishedDataSetDataType;
PublishedDataSetDataType.schema.encodingDefaultBinary = PublishedDataSetDataType.encodingDefaultBinary;
PublishedDataSetDataType.schema.encodingDefaultXml = PublishedDataSetDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PublishedDataSetDataType", PublishedDataSetDataType);
// --------------------------------------------------------------------------------------------
const schemaPublishedDataSetSourceDataType = node_opcua_factory_1.buildStructuredType({
    name: "PublishedDataSetSourceDataType",
    baseType: "ExtensionObject",
    fields: []
});
class PublishedDataSetSourceDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = PublishedDataSetSourceDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaPublishedDataSetSourceDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaPublishedDataSetSourceDataType; }
}
PublishedDataSetSourceDataType.possibleFields = [];
PublishedDataSetSourceDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15678, 0);
PublishedDataSetSourceDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15952, 0);
exports.PublishedDataSetSourceDataType = PublishedDataSetSourceDataType;
PublishedDataSetSourceDataType.schema.encodingDefaultBinary = PublishedDataSetSourceDataType.encodingDefaultBinary;
PublishedDataSetSourceDataType.schema.encodingDefaultXml = PublishedDataSetSourceDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PublishedDataSetSourceDataType", PublishedDataSetSourceDataType);
// --------------------------------------------------------------------------------------------
const schemaPublishedVariableDataType = node_opcua_factory_1.buildStructuredType({
    name: "PublishedVariableDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "publishedVariable",
            fieldType: "NodeId",
        },
        {
            name: "attributeId",
            fieldType: "UInt32",
        },
        {
            name: "samplingIntervalHint",
            fieldType: "Double",
        },
        {
            name: "deadbandType",
            fieldType: "UInt32",
        },
        {
            name: "deadbandValue",
            fieldType: "Double",
        },
        {
            name: "indexRange",
            fieldType: "NumericRange",
        },
        {
            name: "substituteValue",
            fieldType: "Variant",
        },
        {
            name: "metaDataProperties",
            fieldType: "QualifiedName",
            isArray: true
        },
    ]
});
class PublishedVariableDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = PublishedVariableDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.publishedVariable = node_opcua_factory_1.initialize_field(schema.fields[0], options.publishedVariable);
        this.attributeId = node_opcua_factory_1.initialize_field(schema.fields[1], options.attributeId);
        this.samplingIntervalHint = node_opcua_factory_1.initialize_field(schema.fields[2], options.samplingIntervalHint);
        this.deadbandType = node_opcua_factory_1.initialize_field(schema.fields[3], options.deadbandType);
        this.deadbandValue = node_opcua_factory_1.initialize_field(schema.fields[4], options.deadbandValue);
        this.indexRange = node_opcua_factory_1.initialize_field(schema.fields[5], options.indexRange);
        this.substituteValue = node_opcua_factory_1.initialize_field(schema.fields[6], options.substituteValue);
        this.metaDataProperties = node_opcua_factory_1.initialize_field_array(schema.fields[7], options.metaDataProperties);
    }
    static get schema() { return schemaPublishedVariableDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.publishedVariable, stream);
        node_opcua_basic_types_1.encodeUInt32(this.attributeId, stream);
        node_opcua_basic_types_1.encodeDouble(this.samplingIntervalHint, stream);
        node_opcua_basic_types_1.encodeUInt32(this.deadbandType, stream);
        node_opcua_basic_types_1.encodeDouble(this.deadbandValue, stream);
        node_opcua_numeric_range_1.encodeNumericRange(this.indexRange, stream);
        node_opcua_variant_1.encodeVariant(this.substituteValue, stream);
        node_opcua_basic_types_1.encodeArray(this.metaDataProperties, stream, node_opcua_data_model_1.encodeQualifiedName);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.publishedVariable = node_opcua_basic_types_1.decodeNodeId(stream);
        this.attributeId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.samplingIntervalHint = node_opcua_basic_types_1.decodeDouble(stream);
        this.deadbandType = node_opcua_basic_types_1.decodeUInt32(stream);
        this.deadbandValue = node_opcua_basic_types_1.decodeDouble(stream);
        this.indexRange = node_opcua_numeric_range_1.decodeNumericRange(stream);
        this.substituteValue = node_opcua_variant_1.decodeVariant(stream);
        this.metaDataProperties = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeQualifiedName);
    }
    get schema() { return schemaPublishedVariableDataType; }
}
PublishedVariableDataType.possibleFields = [
    "publishedVariable",
    "attributeId",
    "samplingIntervalHint",
    "deadbandType",
    "deadbandValue",
    "indexRange",
    "substituteValue",
    "metaDataProperties"
];
PublishedVariableDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(14323, 0);
PublishedVariableDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14319, 0);
exports.PublishedVariableDataType = PublishedVariableDataType;
PublishedVariableDataType.schema.encodingDefaultBinary = PublishedVariableDataType.encodingDefaultBinary;
PublishedVariableDataType.schema.encodingDefaultXml = PublishedVariableDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PublishedVariableDataType", PublishedVariableDataType);
// --------------------------------------------------------------------------------------------
const schemaPublishedDataItemsDataType = node_opcua_factory_1.buildStructuredType({
    name: "PublishedDataItemsDataType",
    baseType: "PublishedDataSetSourceDataType",
    fields: [
        {
            name: "publishedData",
            fieldType: "PublishedVariableDataType",
            isArray: true
        },
    ]
});
class PublishedDataItemsDataType extends PublishedDataSetSourceDataType {
    constructor(options) {
        super(options);
        const schema = PublishedDataItemsDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.publishedData = null; /* null array */
        }
        this.publishedData = []; // should default
        if (options.publishedData) {
            node_opcua_assert_1.assert(_.isArray(options.publishedData));
            this.publishedData = options.publishedData.map((e) => new PublishedVariableDataType(e));
        }
    }
    static get schema() { return schemaPublishedDataItemsDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.publishedData, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.publishedData = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new PublishedVariableDataType();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaPublishedDataItemsDataType; }
}
PublishedDataItemsDataType.possibleFields = [
    "publishedData"
];
PublishedDataItemsDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15679, 0);
PublishedDataItemsDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15953, 0);
exports.PublishedDataItemsDataType = PublishedDataItemsDataType;
PublishedDataItemsDataType.schema.encodingDefaultBinary = PublishedDataItemsDataType.encodingDefaultBinary;
PublishedDataItemsDataType.schema.encodingDefaultXml = PublishedDataItemsDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PublishedDataItemsDataType", PublishedDataItemsDataType);
// --------------------------------------------------------------------------------------------
var FilterOperator;
(function (FilterOperator) {
    FilterOperator[FilterOperator["Equals"] = 0] = "Equals";
    FilterOperator[FilterOperator["IsNull"] = 1] = "IsNull";
    FilterOperator[FilterOperator["GreaterThan"] = 2] = "GreaterThan";
    FilterOperator[FilterOperator["LessThan"] = 3] = "LessThan";
    FilterOperator[FilterOperator["GreaterThanOrEqual"] = 4] = "GreaterThanOrEqual";
    FilterOperator[FilterOperator["LessThanOrEqual"] = 5] = "LessThanOrEqual";
    FilterOperator[FilterOperator["Like"] = 6] = "Like";
    FilterOperator[FilterOperator["Not"] = 7] = "Not";
    FilterOperator[FilterOperator["Between"] = 8] = "Between";
    FilterOperator[FilterOperator["InList"] = 9] = "InList";
    FilterOperator[FilterOperator["And"] = 10] = "And";
    FilterOperator[FilterOperator["Or"] = 11] = "Or";
    FilterOperator[FilterOperator["Cast"] = 12] = "Cast";
    FilterOperator[FilterOperator["InView"] = 13] = "InView";
    FilterOperator[FilterOperator["OfType"] = 14] = "OfType";
    FilterOperator[FilterOperator["RelatedTo"] = 15] = "RelatedTo";
    FilterOperator[FilterOperator["BitwiseAnd"] = 16] = "BitwiseAnd";
    FilterOperator[FilterOperator["BitwiseOr"] = 17] = "BitwiseOr";
    FilterOperator[FilterOperator["Invalid"] = 4294967295] = "Invalid";
})(FilterOperator = exports.FilterOperator || (exports.FilterOperator = {}));
const schemaFilterOperator = {
    enumValues: FilterOperator,
    flaggable: false,
    minValue: 0,
    maxValue: 17,
    name: "FilterOperator"
};
function decodeFilterOperator(stream) {
    let value = stream.readUInt32();
    value = (value < schemaFilterOperator.minValue || value > schemaFilterOperator.maxValue) ? FilterOperator.Invalid : value;
    return value;
}
function encodeFilterOperator(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationFilterOperator = node_opcua_factory_1.registerEnumeration(schemaFilterOperator);
// --------------------------------------------------------------------------------------------
const schemaContentFilterElement = node_opcua_factory_1.buildStructuredType({
    name: "ContentFilterElement",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "filterOperator",
            fieldType: "FilterOperator",
        },
        {
            name: "filterOperands",
            fieldType: "ExtensionObject",
            isArray: true
        },
    ]
});
class ContentFilterElement extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ContentFilterElement.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.filterOperator = this.setFilterOperator(node_opcua_factory_1.initialize_field(schema.fields[0], options.filterOperator));
        this.filterOperands = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.filterOperands);
    }
    static get schema() { return schemaContentFilterElement; }
    encode(stream) {
        super.encode(stream);
        encodeFilterOperator(this.filterOperator, stream);
        node_opcua_basic_types_1.encodeArray(this.filterOperands, stream, node_opcua_extension_object_1.encodeExtensionObject);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.filterOperator = decodeFilterOperator(stream);
        this.filterOperands = node_opcua_basic_types_1.decodeArray(stream, node_opcua_extension_object_1.decodeExtensionObject);
    }
    // Define Enumeration setters
    setFilterOperator(value) {
        const coercedValue = exports._enumerationFilterOperator.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to FilterOperator :" + value);
        }
        this.filterOperator = coercedValue.value;
        return this.filterOperator;
    }
    get schema() { return schemaContentFilterElement; }
}
ContentFilterElement.possibleFields = [
    "filterOperator",
    "filterOperands"
];
ContentFilterElement.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(585, 0);
ContentFilterElement.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(584, 0);
exports.ContentFilterElement = ContentFilterElement;
ContentFilterElement.schema.encodingDefaultBinary = ContentFilterElement.encodingDefaultBinary;
ContentFilterElement.schema.encodingDefaultXml = ContentFilterElement.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ContentFilterElement", ContentFilterElement);
// --------------------------------------------------------------------------------------------
const schemaContentFilter = node_opcua_factory_1.buildStructuredType({
    name: "ContentFilter",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "elements",
            fieldType: "ContentFilterElement",
            isArray: true
        },
    ]
});
class ContentFilter extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ContentFilter.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.elements = null; /* null array */
        }
        this.elements = []; // should default
        if (options.elements) {
            node_opcua_assert_1.assert(_.isArray(options.elements));
            this.elements = options.elements.map((e) => new ContentFilterElement(e));
        }
    }
    static get schema() { return schemaContentFilter; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.elements, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.elements = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ContentFilterElement();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaContentFilter; }
}
ContentFilter.possibleFields = [
    "elements"
];
ContentFilter.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(588, 0);
ContentFilter.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(587, 0);
exports.ContentFilter = ContentFilter;
ContentFilter.schema.encodingDefaultBinary = ContentFilter.encodingDefaultBinary;
ContentFilter.schema.encodingDefaultXml = ContentFilter.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ContentFilter", ContentFilter);
// --------------------------------------------------------------------------------------------
const schemaPublishedEventsDataType = node_opcua_factory_1.buildStructuredType({
    name: "PublishedEventsDataType",
    baseType: "PublishedDataSetSourceDataType",
    fields: [
        {
            name: "eventNotifier",
            fieldType: "NodeId",
        },
        {
            name: "selectedFields",
            fieldType: "SimpleAttributeOperand",
            isArray: true
        },
        {
            name: "filter",
            fieldType: "ContentFilter",
        },
    ]
});
class PublishedEventsDataType extends PublishedDataSetSourceDataType {
    constructor(options) {
        super(options);
        const schema = PublishedEventsDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.selectedFields = null; /* null array */
            this.filter = new ContentFilter();
        }
        this.eventNotifier = node_opcua_factory_1.initialize_field(schema.fields[0], options.eventNotifier);
        this.selectedFields = []; // should default
        if (options.selectedFields) {
            node_opcua_assert_1.assert(_.isArray(options.selectedFields));
            this.selectedFields = options.selectedFields.map((e) => new SimpleAttributeOperand(e));
        }
        this.filter = new ContentFilter(options.filter);
    }
    static get schema() { return schemaPublishedEventsDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.eventNotifier, stream);
        node_opcua_basic_types_1.encodeArray(this.selectedFields, stream, (obj, stream1) => { obj.encode(stream1); });
        this.filter.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.eventNotifier = node_opcua_basic_types_1.decodeNodeId(stream);
        this.selectedFields = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new SimpleAttributeOperand();
            obj.decode(stream1);
            return obj;
        });
        this.filter.decode(stream);
    }
    get schema() { return schemaPublishedEventsDataType; }
}
PublishedEventsDataType.possibleFields = [
    "eventNotifier",
    "selectedFields",
    "filter"
];
PublishedEventsDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15681, 0);
PublishedEventsDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15954, 0);
exports.PublishedEventsDataType = PublishedEventsDataType;
PublishedEventsDataType.schema.encodingDefaultBinary = PublishedEventsDataType.encodingDefaultBinary;
PublishedEventsDataType.schema.encodingDefaultXml = PublishedEventsDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PublishedEventsDataType", PublishedEventsDataType);
// --------------------------------------------------------------------------------------------
var DataSetFieldContentMask;
(function (DataSetFieldContentMask) {
    DataSetFieldContentMask[DataSetFieldContentMask["None"] = 0] = "None";
    DataSetFieldContentMask[DataSetFieldContentMask["StatusCode"] = 1] = "StatusCode";
    DataSetFieldContentMask[DataSetFieldContentMask["SourceTimestamp"] = 2] = "SourceTimestamp";
    DataSetFieldContentMask[DataSetFieldContentMask["ServerTimestamp"] = 4] = "ServerTimestamp";
    DataSetFieldContentMask[DataSetFieldContentMask["SourcePicoSeconds"] = 8] = "SourcePicoSeconds";
    DataSetFieldContentMask[DataSetFieldContentMask["ServerPicoSeconds"] = 16] = "ServerPicoSeconds";
    DataSetFieldContentMask[DataSetFieldContentMask["RawData"] = 32] = "RawData";
    DataSetFieldContentMask[DataSetFieldContentMask["Invalid"] = 4294967295] = "Invalid";
})(DataSetFieldContentMask = exports.DataSetFieldContentMask || (exports.DataSetFieldContentMask = {}));
const schemaDataSetFieldContentMask = {
    enumValues: DataSetFieldContentMask,
    flaggable: true,
    name: "DataSetFieldContentMask"
};
function decodeDataSetFieldContentMask(stream) {
    return stream.readUInt32();
}
function encodeDataSetFieldContentMask(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationDataSetFieldContentMask = node_opcua_factory_1.registerEnumeration(schemaDataSetFieldContentMask);
// --------------------------------------------------------------------------------------------
const schemaDataSetWriterDataType = node_opcua_factory_1.buildStructuredType({
    name: "DataSetWriterDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "name",
            fieldType: "UAString",
        },
        {
            name: "enabled",
            fieldType: "UABoolean",
        },
        {
            name: "dataSetWriterId",
            fieldType: "UInt16",
        },
        {
            name: "dataSetFieldContentMask",
            fieldType: "DataSetFieldContentMask",
        },
        {
            name: "keyFrameCount",
            fieldType: "UInt32",
        },
        {
            name: "dataSetName",
            fieldType: "UAString",
        },
        {
            name: "dataSetWriterProperties",
            fieldType: "KeyValuePair",
            isArray: true
        },
        {
            name: "transportSettings",
            fieldType: "ExtensionObject",
        },
        {
            name: "messageSettings",
            fieldType: "ExtensionObject",
        },
    ]
});
class DataSetWriterDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DataSetWriterDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.dataSetWriterProperties = null; /* null array */
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[0], options.name);
        this.enabled = node_opcua_factory_1.initialize_field(schema.fields[1], options.enabled);
        this.dataSetWriterId = node_opcua_factory_1.initialize_field(schema.fields[2], options.dataSetWriterId);
        this.dataSetFieldContentMask = this.setDataSetFieldContentMask(node_opcua_factory_1.initialize_field(schema.fields[3], options.dataSetFieldContentMask));
        this.keyFrameCount = node_opcua_factory_1.initialize_field(schema.fields[4], options.keyFrameCount);
        this.dataSetName = node_opcua_factory_1.initialize_field(schema.fields[5], options.dataSetName);
        this.dataSetWriterProperties = []; // should default
        if (options.dataSetWriterProperties) {
            node_opcua_assert_1.assert(_.isArray(options.dataSetWriterProperties));
            this.dataSetWriterProperties = options.dataSetWriterProperties.map((e) => new KeyValuePair(e));
        }
        this.transportSettings = node_opcua_factory_1.initialize_field(schema.fields[7], options.transportSettings);
        this.messageSettings = node_opcua_factory_1.initialize_field(schema.fields[8], options.messageSettings);
    }
    static get schema() { return schemaDataSetWriterDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.enabled, stream);
        node_opcua_basic_types_1.encodeUInt16(this.dataSetWriterId, stream);
        encodeDataSetFieldContentMask(this.dataSetFieldContentMask, stream);
        node_opcua_basic_types_1.encodeUInt32(this.keyFrameCount, stream);
        node_opcua_basic_types_1.encodeUAString(this.dataSetName, stream);
        node_opcua_basic_types_1.encodeArray(this.dataSetWriterProperties, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_extension_object_1.encodeExtensionObject(this.transportSettings, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.messageSettings, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
        this.enabled = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.dataSetWriterId = node_opcua_basic_types_1.decodeUInt16(stream);
        this.dataSetFieldContentMask = decodeDataSetFieldContentMask(stream);
        this.keyFrameCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.dataSetName = node_opcua_basic_types_1.decodeUAString(stream);
        this.dataSetWriterProperties = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
        this.transportSettings = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.messageSettings = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    // Define Enumeration setters
    setDataSetFieldContentMask(value) {
        const coercedValue = exports._enumerationDataSetFieldContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to DataSetFieldContentMask :" + value);
        }
        this.dataSetFieldContentMask = coercedValue.value;
        return this.dataSetFieldContentMask;
    }
    get schema() { return schemaDataSetWriterDataType; }
}
DataSetWriterDataType.possibleFields = [
    "name",
    "enabled",
    "dataSetWriterId",
    "dataSetFieldContentMask",
    "keyFrameCount",
    "dataSetName",
    "dataSetWriterProperties",
    "transportSettings",
    "messageSettings"
];
DataSetWriterDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15682, 0);
DataSetWriterDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15955, 0);
exports.DataSetWriterDataType = DataSetWriterDataType;
DataSetWriterDataType.schema.encodingDefaultBinary = DataSetWriterDataType.encodingDefaultBinary;
DataSetWriterDataType.schema.encodingDefaultXml = DataSetWriterDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataSetWriterDataType", DataSetWriterDataType);
// --------------------------------------------------------------------------------------------
const schemaDataSetWriterTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "DataSetWriterTransportDataType",
    baseType: "ExtensionObject",
    fields: []
});
class DataSetWriterTransportDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DataSetWriterTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaDataSetWriterTransportDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaDataSetWriterTransportDataType; }
}
DataSetWriterTransportDataType.possibleFields = [];
DataSetWriterTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15683, 0);
DataSetWriterTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15956, 0);
exports.DataSetWriterTransportDataType = DataSetWriterTransportDataType;
DataSetWriterTransportDataType.schema.encodingDefaultBinary = DataSetWriterTransportDataType.encodingDefaultBinary;
DataSetWriterTransportDataType.schema.encodingDefaultXml = DataSetWriterTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataSetWriterTransportDataType", DataSetWriterTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaDataSetWriterMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "DataSetWriterMessageDataType",
    baseType: "ExtensionObject",
    fields: []
});
class DataSetWriterMessageDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DataSetWriterMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaDataSetWriterMessageDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaDataSetWriterMessageDataType; }
}
DataSetWriterMessageDataType.possibleFields = [];
DataSetWriterMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15688, 0);
DataSetWriterMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15987, 0);
exports.DataSetWriterMessageDataType = DataSetWriterMessageDataType;
DataSetWriterMessageDataType.schema.encodingDefaultBinary = DataSetWriterMessageDataType.encodingDefaultBinary;
DataSetWriterMessageDataType.schema.encodingDefaultXml = DataSetWriterMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataSetWriterMessageDataType", DataSetWriterMessageDataType);
// --------------------------------------------------------------------------------------------
var ApplicationType;
(function (ApplicationType) {
    ApplicationType[ApplicationType["Server"] = 0] = "Server";
    ApplicationType[ApplicationType["Client"] = 1] = "Client";
    ApplicationType[ApplicationType["ClientAndServer"] = 2] = "ClientAndServer";
    ApplicationType[ApplicationType["DiscoveryServer"] = 3] = "DiscoveryServer";
    ApplicationType[ApplicationType["Invalid"] = 4294967295] = "Invalid";
})(ApplicationType = exports.ApplicationType || (exports.ApplicationType = {}));
const schemaApplicationType = {
    enumValues: ApplicationType,
    flaggable: false,
    minValue: 0,
    maxValue: 3,
    name: "ApplicationType"
};
function decodeApplicationType(stream) {
    let value = stream.readUInt32();
    value = (value < schemaApplicationType.minValue || value > schemaApplicationType.maxValue) ? ApplicationType.Invalid : value;
    return value;
}
function encodeApplicationType(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationApplicationType = node_opcua_factory_1.registerEnumeration(schemaApplicationType);
// --------------------------------------------------------------------------------------------
const schemaApplicationDescription = node_opcua_factory_1.buildStructuredType({
    name: "ApplicationDescription",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "applicationUri",
            fieldType: "UAString",
        },
        {
            name: "productUri",
            fieldType: "UAString",
        },
        {
            name: "applicationName",
            fieldType: "LocalizedText",
        },
        {
            name: "applicationType",
            fieldType: "ApplicationType",
        },
        {
            name: "gatewayServerUri",
            fieldType: "UAString",
        },
        {
            name: "discoveryProfileUri",
            fieldType: "UAString",
        },
        {
            name: "discoveryUrls",
            fieldType: "UAString",
            isArray: true
        },
    ]
});
class ApplicationDescription extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ApplicationDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.applicationUri = node_opcua_factory_1.initialize_field(schema.fields[0], options.applicationUri);
        this.productUri = node_opcua_factory_1.initialize_field(schema.fields[1], options.productUri);
        this.applicationName = node_opcua_factory_1.initialize_field(schema.fields[2], options.applicationName);
        this.applicationType = this.setApplicationType(node_opcua_factory_1.initialize_field(schema.fields[3], options.applicationType));
        this.gatewayServerUri = node_opcua_factory_1.initialize_field(schema.fields[4], options.gatewayServerUri);
        this.discoveryProfileUri = node_opcua_factory_1.initialize_field(schema.fields[5], options.discoveryProfileUri);
        this.discoveryUrls = node_opcua_factory_1.initialize_field_array(schema.fields[6], options.discoveryUrls);
    }
    static get schema() { return schemaApplicationDescription; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.applicationUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.productUri, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.applicationName, stream);
        encodeApplicationType(this.applicationType, stream);
        node_opcua_basic_types_1.encodeUAString(this.gatewayServerUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.discoveryProfileUri, stream);
        node_opcua_basic_types_1.encodeArray(this.discoveryUrls, stream, node_opcua_basic_types_1.encodeUAString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.applicationUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.productUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.applicationName = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.applicationType = decodeApplicationType(stream);
        this.gatewayServerUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.discoveryProfileUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.discoveryUrls = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
    }
    // Define Enumeration setters
    setApplicationType(value) {
        const coercedValue = exports._enumerationApplicationType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to ApplicationType :" + value);
        }
        this.applicationType = coercedValue.value;
        return this.applicationType;
    }
    get schema() { return schemaApplicationDescription; }
}
ApplicationDescription.possibleFields = [
    "applicationUri",
    "productUri",
    "applicationName",
    "applicationType",
    "gatewayServerUri",
    "discoveryProfileUri",
    "discoveryUrls"
];
ApplicationDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(310, 0);
ApplicationDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(309, 0);
exports.ApplicationDescription = ApplicationDescription;
ApplicationDescription.schema.encodingDefaultBinary = ApplicationDescription.encodingDefaultBinary;
ApplicationDescription.schema.encodingDefaultXml = ApplicationDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ApplicationDescription", ApplicationDescription);
// --------------------------------------------------------------------------------------------
var UserTokenType;
(function (UserTokenType) {
    UserTokenType[UserTokenType["Anonymous"] = 0] = "Anonymous";
    UserTokenType[UserTokenType["UserName"] = 1] = "UserName";
    UserTokenType[UserTokenType["Certificate"] = 2] = "Certificate";
    UserTokenType[UserTokenType["IssuedToken"] = 3] = "IssuedToken";
    UserTokenType[UserTokenType["Invalid"] = 4294967295] = "Invalid";
})(UserTokenType = exports.UserTokenType || (exports.UserTokenType = {}));
const schemaUserTokenType = {
    enumValues: UserTokenType,
    flaggable: false,
    minValue: 0,
    maxValue: 3,
    name: "UserTokenType"
};
function decodeUserTokenType(stream) {
    let value = stream.readUInt32();
    value = (value < schemaUserTokenType.minValue || value > schemaUserTokenType.maxValue) ? UserTokenType.Invalid : value;
    return value;
}
function encodeUserTokenType(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationUserTokenType = node_opcua_factory_1.registerEnumeration(schemaUserTokenType);
// --------------------------------------------------------------------------------------------
const schemaUserTokenPolicy = node_opcua_factory_1.buildStructuredType({
    name: "UserTokenPolicy",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "policyId",
            fieldType: "UAString",
        },
        {
            name: "tokenType",
            fieldType: "UserTokenType",
        },
        {
            name: "issuedTokenType",
            fieldType: "UAString",
        },
        {
            name: "issuerEndpointUrl",
            fieldType: "UAString",
        },
        {
            name: "securityPolicyUri",
            fieldType: "UAString",
        },
    ]
});
class UserTokenPolicy extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = UserTokenPolicy.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.policyId = node_opcua_factory_1.initialize_field(schema.fields[0], options.policyId);
        this.tokenType = this.setTokenType(node_opcua_factory_1.initialize_field(schema.fields[1], options.tokenType));
        this.issuedTokenType = node_opcua_factory_1.initialize_field(schema.fields[2], options.issuedTokenType);
        this.issuerEndpointUrl = node_opcua_factory_1.initialize_field(schema.fields[3], options.issuerEndpointUrl);
        this.securityPolicyUri = node_opcua_factory_1.initialize_field(schema.fields[4], options.securityPolicyUri);
    }
    static get schema() { return schemaUserTokenPolicy; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.policyId, stream);
        encodeUserTokenType(this.tokenType, stream);
        node_opcua_basic_types_1.encodeUAString(this.issuedTokenType, stream);
        node_opcua_basic_types_1.encodeUAString(this.issuerEndpointUrl, stream);
        node_opcua_basic_types_1.encodeUAString(this.securityPolicyUri, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.policyId = node_opcua_basic_types_1.decodeUAString(stream);
        this.tokenType = decodeUserTokenType(stream);
        this.issuedTokenType = node_opcua_basic_types_1.decodeUAString(stream);
        this.issuerEndpointUrl = node_opcua_basic_types_1.decodeUAString(stream);
        this.securityPolicyUri = node_opcua_basic_types_1.decodeUAString(stream);
    }
    // Define Enumeration setters
    setTokenType(value) {
        const coercedValue = exports._enumerationUserTokenType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to UserTokenType :" + value);
        }
        this.tokenType = coercedValue.value;
        return this.tokenType;
    }
    get schema() { return schemaUserTokenPolicy; }
}
UserTokenPolicy.possibleFields = [
    "policyId",
    "tokenType",
    "issuedTokenType",
    "issuerEndpointUrl",
    "securityPolicyUri"
];
UserTokenPolicy.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(306, 0);
UserTokenPolicy.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(305, 0);
exports.UserTokenPolicy = UserTokenPolicy;
UserTokenPolicy.schema.encodingDefaultBinary = UserTokenPolicy.encodingDefaultBinary;
UserTokenPolicy.schema.encodingDefaultXml = UserTokenPolicy.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UserTokenPolicy", UserTokenPolicy);
// --------------------------------------------------------------------------------------------
const schemaEndpointDescription = node_opcua_factory_1.buildStructuredType({
    name: "EndpointDescription",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "endpointUrl",
            fieldType: "UAString",
        },
        {
            name: "server",
            fieldType: "ApplicationDescription",
        },
        {
            name: "serverCertificate",
            fieldType: "ByteString",
        },
        {
            name: "securityMode",
            fieldType: "MessageSecurityMode",
        },
        {
            name: "securityPolicyUri",
            fieldType: "UAString",
        },
        {
            name: "userIdentityTokens",
            fieldType: "UserTokenPolicy",
            isArray: true
        },
        {
            name: "transportProfileUri",
            fieldType: "UAString",
        },
        {
            name: "securityLevel",
            fieldType: "Byte",
        },
    ]
});
class EndpointDescription extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = EndpointDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.server = new ApplicationDescription();
            this.userIdentityTokens = null; /* null array */
        }
        this.endpointUrl = node_opcua_factory_1.initialize_field(schema.fields[0], options.endpointUrl);
        this.server = new ApplicationDescription(options.server);
        this.serverCertificate = node_opcua_factory_1.initialize_field(schema.fields[2], options.serverCertificate);
        this.securityMode = this.setSecurityMode(node_opcua_factory_1.initialize_field(schema.fields[3], options.securityMode));
        this.securityPolicyUri = node_opcua_factory_1.initialize_field(schema.fields[4], options.securityPolicyUri);
        this.userIdentityTokens = []; // should default
        if (options.userIdentityTokens) {
            node_opcua_assert_1.assert(_.isArray(options.userIdentityTokens));
            this.userIdentityTokens = options.userIdentityTokens.map((e) => new UserTokenPolicy(e));
        }
        this.transportProfileUri = node_opcua_factory_1.initialize_field(schema.fields[6], options.transportProfileUri);
        this.securityLevel = node_opcua_factory_1.initialize_field(schema.fields[7], options.securityLevel);
    }
    static get schema() { return schemaEndpointDescription; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.endpointUrl, stream);
        this.server.encode(stream);
        node_opcua_basic_types_1.encodeByteString(this.serverCertificate, stream);
        encodeMessageSecurityMode(this.securityMode, stream);
        node_opcua_basic_types_1.encodeUAString(this.securityPolicyUri, stream);
        node_opcua_basic_types_1.encodeArray(this.userIdentityTokens, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUAString(this.transportProfileUri, stream);
        node_opcua_basic_types_1.encodeByte(this.securityLevel, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.endpointUrl = node_opcua_basic_types_1.decodeUAString(stream);
        this.server.decode(stream);
        this.serverCertificate = node_opcua_basic_types_1.decodeByteString(stream);
        this.securityMode = decodeMessageSecurityMode(stream);
        this.securityPolicyUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.userIdentityTokens = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new UserTokenPolicy();
            obj.decode(stream1);
            return obj;
        });
        this.transportProfileUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.securityLevel = node_opcua_basic_types_1.decodeByte(stream);
    }
    // Define Enumeration setters
    setSecurityMode(value) {
        const coercedValue = exports._enumerationMessageSecurityMode.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to MessageSecurityMode :" + value);
        }
        this.securityMode = coercedValue.value;
        return this.securityMode;
    }
    get schema() { return schemaEndpointDescription; }
}
EndpointDescription.possibleFields = [
    "endpointUrl",
    "server",
    "serverCertificate",
    "securityMode",
    "securityPolicyUri",
    "userIdentityTokens",
    "transportProfileUri",
    "securityLevel"
];
EndpointDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(314, 0);
EndpointDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(313, 0);
exports.EndpointDescription = EndpointDescription;
EndpointDescription.schema.encodingDefaultBinary = EndpointDescription.encodingDefaultBinary;
EndpointDescription.schema.encodingDefaultXml = EndpointDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EndpointDescription", EndpointDescription);
// --------------------------------------------------------------------------------------------
const schemaPubSubGroupDataType = node_opcua_factory_1.buildStructuredType({
    name: "PubSubGroupDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "name",
            fieldType: "UAString",
        },
        {
            name: "enabled",
            fieldType: "UABoolean",
        },
        {
            name: "securityMode",
            fieldType: "MessageSecurityMode",
        },
        {
            name: "securityGroupId",
            fieldType: "UAString",
        },
        {
            name: "securityKeyServices",
            fieldType: "EndpointDescription",
            isArray: true
        },
        {
            name: "maxNetworkMessageSize",
            fieldType: "UInt32",
        },
        {
            name: "groupProperties",
            fieldType: "KeyValuePair",
            isArray: true
        },
    ]
});
class PubSubGroupDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = PubSubGroupDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.securityKeyServices = null; /* null array */
            this.groupProperties = null; /* null array */
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[0], options.name);
        this.enabled = node_opcua_factory_1.initialize_field(schema.fields[1], options.enabled);
        this.securityMode = this.setSecurityMode(node_opcua_factory_1.initialize_field(schema.fields[2], options.securityMode));
        this.securityGroupId = node_opcua_factory_1.initialize_field(schema.fields[3], options.securityGroupId);
        this.securityKeyServices = []; // should default
        if (options.securityKeyServices) {
            node_opcua_assert_1.assert(_.isArray(options.securityKeyServices));
            this.securityKeyServices = options.securityKeyServices.map((e) => new EndpointDescription(e));
        }
        this.maxNetworkMessageSize = node_opcua_factory_1.initialize_field(schema.fields[5], options.maxNetworkMessageSize);
        this.groupProperties = []; // should default
        if (options.groupProperties) {
            node_opcua_assert_1.assert(_.isArray(options.groupProperties));
            this.groupProperties = options.groupProperties.map((e) => new KeyValuePair(e));
        }
    }
    static get schema() { return schemaPubSubGroupDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.enabled, stream);
        encodeMessageSecurityMode(this.securityMode, stream);
        node_opcua_basic_types_1.encodeUAString(this.securityGroupId, stream);
        node_opcua_basic_types_1.encodeArray(this.securityKeyServices, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUInt32(this.maxNetworkMessageSize, stream);
        node_opcua_basic_types_1.encodeArray(this.groupProperties, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
        this.enabled = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.securityMode = decodeMessageSecurityMode(stream);
        this.securityGroupId = node_opcua_basic_types_1.decodeUAString(stream);
        this.securityKeyServices = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EndpointDescription();
            obj.decode(stream1);
            return obj;
        });
        this.maxNetworkMessageSize = node_opcua_basic_types_1.decodeUInt32(stream);
        this.groupProperties = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
    }
    // Define Enumeration setters
    setSecurityMode(value) {
        const coercedValue = exports._enumerationMessageSecurityMode.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to MessageSecurityMode :" + value);
        }
        this.securityMode = coercedValue.value;
        return this.securityMode;
    }
    get schema() { return schemaPubSubGroupDataType; }
}
PubSubGroupDataType.possibleFields = [
    "name",
    "enabled",
    "securityMode",
    "securityGroupId",
    "securityKeyServices",
    "maxNetworkMessageSize",
    "groupProperties"
];
PubSubGroupDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15689, 0);
PubSubGroupDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15988, 0);
exports.PubSubGroupDataType = PubSubGroupDataType;
PubSubGroupDataType.schema.encodingDefaultBinary = PubSubGroupDataType.encodingDefaultBinary;
PubSubGroupDataType.schema.encodingDefaultXml = PubSubGroupDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PubSubGroupDataType", PubSubGroupDataType);
// --------------------------------------------------------------------------------------------
const schemaWriterGroupDataType = node_opcua_factory_1.buildStructuredType({
    name: "WriterGroupDataType",
    baseType: "PubSubGroupDataType",
    fields: [
        {
            name: "securityKeyServices",
            fieldType: "EndpointDescription",
            isArray: true
        },
        {
            name: "groupProperties",
            fieldType: "KeyValuePair",
            isArray: true
        },
        {
            name: "writerGroupId",
            fieldType: "UInt16",
        },
        {
            name: "publishingInterval",
            fieldType: "Double",
        },
        {
            name: "keepAliveTime",
            fieldType: "Double",
        },
        {
            name: "priority",
            fieldType: "Byte",
        },
        {
            name: "localeIds",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "headerLayoutUri",
            fieldType: "UAString",
        },
        {
            name: "transportSettings",
            fieldType: "ExtensionObject",
        },
        {
            name: "messageSettings",
            fieldType: "ExtensionObject",
        },
        {
            name: "dataSetWriters",
            fieldType: "DataSetWriterDataType",
            isArray: true
        },
    ]
});
class WriterGroupDataType extends PubSubGroupDataType {
    constructor(options) {
        super(options);
        const schema = WriterGroupDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.securityKeyServices = null; /* null array */
            this.groupProperties = null; /* null array */
            this.dataSetWriters = null; /* null array */
        }
        this.securityKeyServices = []; // should default
        if (options.securityKeyServices) {
            node_opcua_assert_1.assert(_.isArray(options.securityKeyServices));
            this.securityKeyServices = options.securityKeyServices.map((e) => new EndpointDescription(e));
        }
        this.groupProperties = []; // should default
        if (options.groupProperties) {
            node_opcua_assert_1.assert(_.isArray(options.groupProperties));
            this.groupProperties = options.groupProperties.map((e) => new KeyValuePair(e));
        }
        this.writerGroupId = node_opcua_factory_1.initialize_field(schema.fields[2], options.writerGroupId);
        this.publishingInterval = node_opcua_factory_1.initialize_field(schema.fields[3], options.publishingInterval);
        this.keepAliveTime = node_opcua_factory_1.initialize_field(schema.fields[4], options.keepAliveTime);
        this.priority = node_opcua_factory_1.initialize_field(schema.fields[5], options.priority);
        this.localeIds = node_opcua_factory_1.initialize_field_array(schema.fields[6], options.localeIds);
        this.headerLayoutUri = node_opcua_factory_1.initialize_field(schema.fields[7], options.headerLayoutUri);
        this.transportSettings = node_opcua_factory_1.initialize_field(schema.fields[8], options.transportSettings);
        this.messageSettings = node_opcua_factory_1.initialize_field(schema.fields[9], options.messageSettings);
        this.dataSetWriters = []; // should default
        if (options.dataSetWriters) {
            node_opcua_assert_1.assert(_.isArray(options.dataSetWriters));
            this.dataSetWriters = options.dataSetWriters.map((e) => new DataSetWriterDataType(e));
        }
    }
    static get schema() { return schemaWriterGroupDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.securityKeyServices, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.groupProperties, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUInt16(this.writerGroupId, stream);
        node_opcua_basic_types_1.encodeDouble(this.publishingInterval, stream);
        node_opcua_basic_types_1.encodeDouble(this.keepAliveTime, stream);
        node_opcua_basic_types_1.encodeByte(this.priority, stream);
        node_opcua_basic_types_1.encodeArray(this.localeIds, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeUAString(this.headerLayoutUri, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.transportSettings, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.messageSettings, stream);
        node_opcua_basic_types_1.encodeArray(this.dataSetWriters, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.securityKeyServices = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EndpointDescription();
            obj.decode(stream1);
            return obj;
        });
        this.groupProperties = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
        this.writerGroupId = node_opcua_basic_types_1.decodeUInt16(stream);
        this.publishingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.keepAliveTime = node_opcua_basic_types_1.decodeDouble(stream);
        this.priority = node_opcua_basic_types_1.decodeByte(stream);
        this.localeIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.headerLayoutUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.transportSettings = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.messageSettings = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.dataSetWriters = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new DataSetWriterDataType();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaWriterGroupDataType; }
}
WriterGroupDataType.possibleFields = [
    "securityKeyServices",
    "groupProperties",
    "writerGroupId",
    "publishingInterval",
    "keepAliveTime",
    "priority",
    "localeIds",
    "headerLayoutUri",
    "transportSettings",
    "messageSettings",
    "dataSetWriters"
];
WriterGroupDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(21150, 0);
WriterGroupDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(21174, 0);
exports.WriterGroupDataType = WriterGroupDataType;
WriterGroupDataType.schema.encodingDefaultBinary = WriterGroupDataType.encodingDefaultBinary;
WriterGroupDataType.schema.encodingDefaultXml = WriterGroupDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("WriterGroupDataType", WriterGroupDataType);
// --------------------------------------------------------------------------------------------
const schemaWriterGroupTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "WriterGroupTransportDataType",
    baseType: "ExtensionObject",
    fields: []
});
class WriterGroupTransportDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = WriterGroupTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaWriterGroupTransportDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaWriterGroupTransportDataType; }
}
WriterGroupTransportDataType.possibleFields = [];
WriterGroupTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15691, 0);
WriterGroupTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15990, 0);
exports.WriterGroupTransportDataType = WriterGroupTransportDataType;
WriterGroupTransportDataType.schema.encodingDefaultBinary = WriterGroupTransportDataType.encodingDefaultBinary;
WriterGroupTransportDataType.schema.encodingDefaultXml = WriterGroupTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("WriterGroupTransportDataType", WriterGroupTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaWriterGroupMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "WriterGroupMessageDataType",
    baseType: "ExtensionObject",
    fields: []
});
class WriterGroupMessageDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = WriterGroupMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaWriterGroupMessageDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaWriterGroupMessageDataType; }
}
WriterGroupMessageDataType.possibleFields = [];
WriterGroupMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15693, 0);
WriterGroupMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15991, 0);
exports.WriterGroupMessageDataType = WriterGroupMessageDataType;
WriterGroupMessageDataType.schema.encodingDefaultBinary = WriterGroupMessageDataType.encodingDefaultBinary;
WriterGroupMessageDataType.schema.encodingDefaultXml = WriterGroupMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("WriterGroupMessageDataType", WriterGroupMessageDataType);
// --------------------------------------------------------------------------------------------
const schemaDataSetReaderDataType = node_opcua_factory_1.buildStructuredType({
    name: "DataSetReaderDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "name",
            fieldType: "UAString",
        },
        {
            name: "enabled",
            fieldType: "UABoolean",
        },
        {
            name: "publisherId",
            fieldType: "Variant",
        },
        {
            name: "writerGroupId",
            fieldType: "UInt16",
        },
        {
            name: "dataSetWriterId",
            fieldType: "UInt16",
        },
        {
            name: "dataSetMetaData",
            fieldType: "DataSetMetaDataType",
        },
        {
            name: "dataSetFieldContentMask",
            fieldType: "DataSetFieldContentMask",
        },
        {
            name: "messageReceiveTimeout",
            fieldType: "Double",
        },
        {
            name: "keyFrameCount",
            fieldType: "UInt32",
        },
        {
            name: "headerLayoutUri",
            fieldType: "UAString",
        },
        {
            name: "securityMode",
            fieldType: "MessageSecurityMode",
        },
        {
            name: "securityGroupId",
            fieldType: "UAString",
        },
        {
            name: "securityKeyServices",
            fieldType: "EndpointDescription",
            isArray: true
        },
        {
            name: "dataSetReaderProperties",
            fieldType: "KeyValuePair",
            isArray: true
        },
        {
            name: "transportSettings",
            fieldType: "ExtensionObject",
        },
        {
            name: "messageSettings",
            fieldType: "ExtensionObject",
        },
        {
            name: "subscribedDataSet",
            fieldType: "ExtensionObject",
        },
    ]
});
class DataSetReaderDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DataSetReaderDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.dataSetMetaData = new DataSetMetaDataType();
            this.securityKeyServices = null; /* null array */
            this.dataSetReaderProperties = null; /* null array */
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[0], options.name);
        this.enabled = node_opcua_factory_1.initialize_field(schema.fields[1], options.enabled);
        this.publisherId = node_opcua_factory_1.initialize_field(schema.fields[2], options.publisherId);
        this.writerGroupId = node_opcua_factory_1.initialize_field(schema.fields[3], options.writerGroupId);
        this.dataSetWriterId = node_opcua_factory_1.initialize_field(schema.fields[4], options.dataSetWriterId);
        this.dataSetMetaData = new DataSetMetaDataType(options.dataSetMetaData);
        this.dataSetFieldContentMask = this.setDataSetFieldContentMask(node_opcua_factory_1.initialize_field(schema.fields[6], options.dataSetFieldContentMask));
        this.messageReceiveTimeout = node_opcua_factory_1.initialize_field(schema.fields[7], options.messageReceiveTimeout);
        this.keyFrameCount = node_opcua_factory_1.initialize_field(schema.fields[8], options.keyFrameCount);
        this.headerLayoutUri = node_opcua_factory_1.initialize_field(schema.fields[9], options.headerLayoutUri);
        this.securityMode = this.setSecurityMode(node_opcua_factory_1.initialize_field(schema.fields[10], options.securityMode));
        this.securityGroupId = node_opcua_factory_1.initialize_field(schema.fields[11], options.securityGroupId);
        this.securityKeyServices = []; // should default
        if (options.securityKeyServices) {
            node_opcua_assert_1.assert(_.isArray(options.securityKeyServices));
            this.securityKeyServices = options.securityKeyServices.map((e) => new EndpointDescription(e));
        }
        this.dataSetReaderProperties = []; // should default
        if (options.dataSetReaderProperties) {
            node_opcua_assert_1.assert(_.isArray(options.dataSetReaderProperties));
            this.dataSetReaderProperties = options.dataSetReaderProperties.map((e) => new KeyValuePair(e));
        }
        this.transportSettings = node_opcua_factory_1.initialize_field(schema.fields[14], options.transportSettings);
        this.messageSettings = node_opcua_factory_1.initialize_field(schema.fields[15], options.messageSettings);
        this.subscribedDataSet = node_opcua_factory_1.initialize_field(schema.fields[16], options.subscribedDataSet);
    }
    static get schema() { return schemaDataSetReaderDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.enabled, stream);
        node_opcua_variant_1.encodeVariant(this.publisherId, stream);
        node_opcua_basic_types_1.encodeUInt16(this.writerGroupId, stream);
        node_opcua_basic_types_1.encodeUInt16(this.dataSetWriterId, stream);
        this.dataSetMetaData.encode(stream);
        encodeDataSetFieldContentMask(this.dataSetFieldContentMask, stream);
        node_opcua_basic_types_1.encodeDouble(this.messageReceiveTimeout, stream);
        node_opcua_basic_types_1.encodeUInt32(this.keyFrameCount, stream);
        node_opcua_basic_types_1.encodeUAString(this.headerLayoutUri, stream);
        encodeMessageSecurityMode(this.securityMode, stream);
        node_opcua_basic_types_1.encodeUAString(this.securityGroupId, stream);
        node_opcua_basic_types_1.encodeArray(this.securityKeyServices, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.dataSetReaderProperties, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_extension_object_1.encodeExtensionObject(this.transportSettings, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.messageSettings, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.subscribedDataSet, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
        this.enabled = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.publisherId = node_opcua_variant_1.decodeVariant(stream);
        this.writerGroupId = node_opcua_basic_types_1.decodeUInt16(stream);
        this.dataSetWriterId = node_opcua_basic_types_1.decodeUInt16(stream);
        this.dataSetMetaData.decode(stream);
        this.dataSetFieldContentMask = decodeDataSetFieldContentMask(stream);
        this.messageReceiveTimeout = node_opcua_basic_types_1.decodeDouble(stream);
        this.keyFrameCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.headerLayoutUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.securityMode = decodeMessageSecurityMode(stream);
        this.securityGroupId = node_opcua_basic_types_1.decodeUAString(stream);
        this.securityKeyServices = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EndpointDescription();
            obj.decode(stream1);
            return obj;
        });
        this.dataSetReaderProperties = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
        this.transportSettings = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.messageSettings = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.subscribedDataSet = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    // Define Enumeration setters
    setDataSetFieldContentMask(value) {
        const coercedValue = exports._enumerationDataSetFieldContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to DataSetFieldContentMask :" + value);
        }
        this.dataSetFieldContentMask = coercedValue.value;
        return this.dataSetFieldContentMask;
    }
    setSecurityMode(value) {
        const coercedValue = exports._enumerationMessageSecurityMode.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to MessageSecurityMode :" + value);
        }
        this.securityMode = coercedValue.value;
        return this.securityMode;
    }
    get schema() { return schemaDataSetReaderDataType; }
}
DataSetReaderDataType.possibleFields = [
    "name",
    "enabled",
    "publisherId",
    "writerGroupId",
    "dataSetWriterId",
    "dataSetMetaData",
    "dataSetFieldContentMask",
    "messageReceiveTimeout",
    "keyFrameCount",
    "headerLayoutUri",
    "securityMode",
    "securityGroupId",
    "securityKeyServices",
    "dataSetReaderProperties",
    "transportSettings",
    "messageSettings",
    "subscribedDataSet"
];
DataSetReaderDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15703, 0);
DataSetReaderDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16007, 0);
exports.DataSetReaderDataType = DataSetReaderDataType;
DataSetReaderDataType.schema.encodingDefaultBinary = DataSetReaderDataType.encodingDefaultBinary;
DataSetReaderDataType.schema.encodingDefaultXml = DataSetReaderDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataSetReaderDataType", DataSetReaderDataType);
// --------------------------------------------------------------------------------------------
const schemaReaderGroupDataType = node_opcua_factory_1.buildStructuredType({
    name: "ReaderGroupDataType",
    baseType: "PubSubGroupDataType",
    fields: [
        {
            name: "securityKeyServices",
            fieldType: "EndpointDescription",
            isArray: true
        },
        {
            name: "groupProperties",
            fieldType: "KeyValuePair",
            isArray: true
        },
        {
            name: "transportSettings",
            fieldType: "ExtensionObject",
        },
        {
            name: "messageSettings",
            fieldType: "ExtensionObject",
        },
        {
            name: "dataSetReaders",
            fieldType: "DataSetReaderDataType",
            isArray: true
        },
    ]
});
class ReaderGroupDataType extends PubSubGroupDataType {
    constructor(options) {
        super(options);
        const schema = ReaderGroupDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.securityKeyServices = null; /* null array */
            this.groupProperties = null; /* null array */
            this.dataSetReaders = null; /* null array */
        }
        this.securityKeyServices = []; // should default
        if (options.securityKeyServices) {
            node_opcua_assert_1.assert(_.isArray(options.securityKeyServices));
            this.securityKeyServices = options.securityKeyServices.map((e) => new EndpointDescription(e));
        }
        this.groupProperties = []; // should default
        if (options.groupProperties) {
            node_opcua_assert_1.assert(_.isArray(options.groupProperties));
            this.groupProperties = options.groupProperties.map((e) => new KeyValuePair(e));
        }
        this.transportSettings = node_opcua_factory_1.initialize_field(schema.fields[2], options.transportSettings);
        this.messageSettings = node_opcua_factory_1.initialize_field(schema.fields[3], options.messageSettings);
        this.dataSetReaders = []; // should default
        if (options.dataSetReaders) {
            node_opcua_assert_1.assert(_.isArray(options.dataSetReaders));
            this.dataSetReaders = options.dataSetReaders.map((e) => new DataSetReaderDataType(e));
        }
    }
    static get schema() { return schemaReaderGroupDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.securityKeyServices, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.groupProperties, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_extension_object_1.encodeExtensionObject(this.transportSettings, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.messageSettings, stream);
        node_opcua_basic_types_1.encodeArray(this.dataSetReaders, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.securityKeyServices = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EndpointDescription();
            obj.decode(stream1);
            return obj;
        });
        this.groupProperties = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
        this.transportSettings = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.messageSettings = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.dataSetReaders = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new DataSetReaderDataType();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaReaderGroupDataType; }
}
ReaderGroupDataType.possibleFields = [
    "securityKeyServices",
    "groupProperties",
    "transportSettings",
    "messageSettings",
    "dataSetReaders"
];
ReaderGroupDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(21153, 0);
ReaderGroupDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(21177, 0);
exports.ReaderGroupDataType = ReaderGroupDataType;
ReaderGroupDataType.schema.encodingDefaultBinary = ReaderGroupDataType.encodingDefaultBinary;
ReaderGroupDataType.schema.encodingDefaultXml = ReaderGroupDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReaderGroupDataType", ReaderGroupDataType);
// --------------------------------------------------------------------------------------------
const schemaPubSubConnectionDataType = node_opcua_factory_1.buildStructuredType({
    name: "PubSubConnectionDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "name",
            fieldType: "UAString",
        },
        {
            name: "enabled",
            fieldType: "UABoolean",
        },
        {
            name: "publisherId",
            fieldType: "Variant",
        },
        {
            name: "transportProfileUri",
            fieldType: "UAString",
        },
        {
            name: "address",
            fieldType: "ExtensionObject",
        },
        {
            name: "connectionProperties",
            fieldType: "KeyValuePair",
            isArray: true
        },
        {
            name: "transportSettings",
            fieldType: "ExtensionObject",
        },
        {
            name: "writerGroups",
            fieldType: "WriterGroupDataType",
            isArray: true
        },
        {
            name: "readerGroups",
            fieldType: "ReaderGroupDataType",
            isArray: true
        },
    ]
});
class PubSubConnectionDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = PubSubConnectionDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.connectionProperties = null; /* null array */
            this.writerGroups = null; /* null array */
            this.readerGroups = null; /* null array */
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[0], options.name);
        this.enabled = node_opcua_factory_1.initialize_field(schema.fields[1], options.enabled);
        this.publisherId = node_opcua_factory_1.initialize_field(schema.fields[2], options.publisherId);
        this.transportProfileUri = node_opcua_factory_1.initialize_field(schema.fields[3], options.transportProfileUri);
        this.address = node_opcua_factory_1.initialize_field(schema.fields[4], options.address);
        this.connectionProperties = []; // should default
        if (options.connectionProperties) {
            node_opcua_assert_1.assert(_.isArray(options.connectionProperties));
            this.connectionProperties = options.connectionProperties.map((e) => new KeyValuePair(e));
        }
        this.transportSettings = node_opcua_factory_1.initialize_field(schema.fields[6], options.transportSettings);
        this.writerGroups = []; // should default
        if (options.writerGroups) {
            node_opcua_assert_1.assert(_.isArray(options.writerGroups));
            this.writerGroups = options.writerGroups.map((e) => new WriterGroupDataType(e));
        }
        this.readerGroups = []; // should default
        if (options.readerGroups) {
            node_opcua_assert_1.assert(_.isArray(options.readerGroups));
            this.readerGroups = options.readerGroups.map((e) => new ReaderGroupDataType(e));
        }
    }
    static get schema() { return schemaPubSubConnectionDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.enabled, stream);
        node_opcua_variant_1.encodeVariant(this.publisherId, stream);
        node_opcua_basic_types_1.encodeUAString(this.transportProfileUri, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.address, stream);
        node_opcua_basic_types_1.encodeArray(this.connectionProperties, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_extension_object_1.encodeExtensionObject(this.transportSettings, stream);
        node_opcua_basic_types_1.encodeArray(this.writerGroups, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.readerGroups, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
        this.enabled = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.publisherId = node_opcua_variant_1.decodeVariant(stream);
        this.transportProfileUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.address = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.connectionProperties = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new KeyValuePair();
            obj.decode(stream1);
            return obj;
        });
        this.transportSettings = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.writerGroups = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new WriterGroupDataType();
            obj.decode(stream1);
            return obj;
        });
        this.readerGroups = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReaderGroupDataType();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaPubSubConnectionDataType; }
}
PubSubConnectionDataType.possibleFields = [
    "name",
    "enabled",
    "publisherId",
    "transportProfileUri",
    "address",
    "connectionProperties",
    "transportSettings",
    "writerGroups",
    "readerGroups"
];
PubSubConnectionDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15694, 0);
PubSubConnectionDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15992, 0);
exports.PubSubConnectionDataType = PubSubConnectionDataType;
PubSubConnectionDataType.schema.encodingDefaultBinary = PubSubConnectionDataType.encodingDefaultBinary;
PubSubConnectionDataType.schema.encodingDefaultXml = PubSubConnectionDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PubSubConnectionDataType", PubSubConnectionDataType);
// --------------------------------------------------------------------------------------------
const schemaConnectionTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "ConnectionTransportDataType",
    baseType: "ExtensionObject",
    fields: []
});
class ConnectionTransportDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ConnectionTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaConnectionTransportDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaConnectionTransportDataType; }
}
ConnectionTransportDataType.possibleFields = [];
ConnectionTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15695, 0);
ConnectionTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15993, 0);
exports.ConnectionTransportDataType = ConnectionTransportDataType;
ConnectionTransportDataType.schema.encodingDefaultBinary = ConnectionTransportDataType.encodingDefaultBinary;
ConnectionTransportDataType.schema.encodingDefaultXml = ConnectionTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ConnectionTransportDataType", ConnectionTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaNetworkAddressDataType = node_opcua_factory_1.buildStructuredType({
    name: "NetworkAddressDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "networkInterface",
            fieldType: "UAString",
        },
    ]
});
class NetworkAddressDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = NetworkAddressDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.networkInterface = node_opcua_factory_1.initialize_field(schema.fields[0], options.networkInterface);
    }
    static get schema() { return schemaNetworkAddressDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.networkInterface, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.networkInterface = node_opcua_basic_types_1.decodeUAString(stream);
    }
    get schema() { return schemaNetworkAddressDataType; }
}
NetworkAddressDataType.possibleFields = [
    "networkInterface"
];
NetworkAddressDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(21151, 0);
NetworkAddressDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(21175, 0);
exports.NetworkAddressDataType = NetworkAddressDataType;
NetworkAddressDataType.schema.encodingDefaultBinary = NetworkAddressDataType.encodingDefaultBinary;
NetworkAddressDataType.schema.encodingDefaultXml = NetworkAddressDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("NetworkAddressDataType", NetworkAddressDataType);
// --------------------------------------------------------------------------------------------
const schemaNetworkAddressUrlDataType = node_opcua_factory_1.buildStructuredType({
    name: "NetworkAddressUrlDataType",
    baseType: "NetworkAddressDataType",
    fields: [
        {
            name: "url",
            fieldType: "UAString",
        },
    ]
});
class NetworkAddressUrlDataType extends NetworkAddressDataType {
    constructor(options) {
        super(options);
        const schema = NetworkAddressUrlDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.url = node_opcua_factory_1.initialize_field(schema.fields[0], options.url);
    }
    static get schema() { return schemaNetworkAddressUrlDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.url, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.url = node_opcua_basic_types_1.decodeUAString(stream);
    }
    get schema() { return schemaNetworkAddressUrlDataType; }
}
NetworkAddressUrlDataType.possibleFields = [
    "url"
];
NetworkAddressUrlDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(21152, 0);
NetworkAddressUrlDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(21176, 0);
exports.NetworkAddressUrlDataType = NetworkAddressUrlDataType;
NetworkAddressUrlDataType.schema.encodingDefaultBinary = NetworkAddressUrlDataType.encodingDefaultBinary;
NetworkAddressUrlDataType.schema.encodingDefaultXml = NetworkAddressUrlDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("NetworkAddressUrlDataType", NetworkAddressUrlDataType);
// --------------------------------------------------------------------------------------------
const schemaReaderGroupTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "ReaderGroupTransportDataType",
    baseType: "ExtensionObject",
    fields: []
});
class ReaderGroupTransportDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ReaderGroupTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaReaderGroupTransportDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaReaderGroupTransportDataType; }
}
ReaderGroupTransportDataType.possibleFields = [];
ReaderGroupTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15701, 0);
ReaderGroupTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15995, 0);
exports.ReaderGroupTransportDataType = ReaderGroupTransportDataType;
ReaderGroupTransportDataType.schema.encodingDefaultBinary = ReaderGroupTransportDataType.encodingDefaultBinary;
ReaderGroupTransportDataType.schema.encodingDefaultXml = ReaderGroupTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReaderGroupTransportDataType", ReaderGroupTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaReaderGroupMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "ReaderGroupMessageDataType",
    baseType: "ExtensionObject",
    fields: []
});
class ReaderGroupMessageDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ReaderGroupMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaReaderGroupMessageDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaReaderGroupMessageDataType; }
}
ReaderGroupMessageDataType.possibleFields = [];
ReaderGroupMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15702, 0);
ReaderGroupMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15996, 0);
exports.ReaderGroupMessageDataType = ReaderGroupMessageDataType;
ReaderGroupMessageDataType.schema.encodingDefaultBinary = ReaderGroupMessageDataType.encodingDefaultBinary;
ReaderGroupMessageDataType.schema.encodingDefaultXml = ReaderGroupMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReaderGroupMessageDataType", ReaderGroupMessageDataType);
// --------------------------------------------------------------------------------------------
const schemaDataSetReaderTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "DataSetReaderTransportDataType",
    baseType: "ExtensionObject",
    fields: []
});
class DataSetReaderTransportDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DataSetReaderTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaDataSetReaderTransportDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaDataSetReaderTransportDataType; }
}
DataSetReaderTransportDataType.possibleFields = [];
DataSetReaderTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15705, 0);
DataSetReaderTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16008, 0);
exports.DataSetReaderTransportDataType = DataSetReaderTransportDataType;
DataSetReaderTransportDataType.schema.encodingDefaultBinary = DataSetReaderTransportDataType.encodingDefaultBinary;
DataSetReaderTransportDataType.schema.encodingDefaultXml = DataSetReaderTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataSetReaderTransportDataType", DataSetReaderTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaDataSetReaderMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "DataSetReaderMessageDataType",
    baseType: "ExtensionObject",
    fields: []
});
class DataSetReaderMessageDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DataSetReaderMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaDataSetReaderMessageDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaDataSetReaderMessageDataType; }
}
DataSetReaderMessageDataType.possibleFields = [];
DataSetReaderMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15706, 0);
DataSetReaderMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16009, 0);
exports.DataSetReaderMessageDataType = DataSetReaderMessageDataType;
DataSetReaderMessageDataType.schema.encodingDefaultBinary = DataSetReaderMessageDataType.encodingDefaultBinary;
DataSetReaderMessageDataType.schema.encodingDefaultXml = DataSetReaderMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataSetReaderMessageDataType", DataSetReaderMessageDataType);
// --------------------------------------------------------------------------------------------
const schemaSubscribedDataSetDataType = node_opcua_factory_1.buildStructuredType({
    name: "SubscribedDataSetDataType",
    baseType: "ExtensionObject",
    fields: []
});
class SubscribedDataSetDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SubscribedDataSetDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaSubscribedDataSetDataType; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaSubscribedDataSetDataType; }
}
SubscribedDataSetDataType.possibleFields = [];
SubscribedDataSetDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15707, 0);
SubscribedDataSetDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16010, 0);
exports.SubscribedDataSetDataType = SubscribedDataSetDataType;
SubscribedDataSetDataType.schema.encodingDefaultBinary = SubscribedDataSetDataType.encodingDefaultBinary;
SubscribedDataSetDataType.schema.encodingDefaultXml = SubscribedDataSetDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SubscribedDataSetDataType", SubscribedDataSetDataType);
// --------------------------------------------------------------------------------------------
var OverrideValueHandling;
(function (OverrideValueHandling) {
    OverrideValueHandling[OverrideValueHandling["Disabled"] = 0] = "Disabled";
    OverrideValueHandling[OverrideValueHandling["LastUsableValue"] = 1] = "LastUsableValue";
    OverrideValueHandling[OverrideValueHandling["OverrideValue"] = 2] = "OverrideValue";
    OverrideValueHandling[OverrideValueHandling["Invalid"] = 4294967295] = "Invalid";
})(OverrideValueHandling = exports.OverrideValueHandling || (exports.OverrideValueHandling = {}));
const schemaOverrideValueHandling = {
    enumValues: OverrideValueHandling,
    flaggable: false,
    minValue: 0,
    maxValue: 2,
    name: "OverrideValueHandling"
};
function decodeOverrideValueHandling(stream) {
    let value = stream.readUInt32();
    value = (value < schemaOverrideValueHandling.minValue || value > schemaOverrideValueHandling.maxValue) ? OverrideValueHandling.Invalid : value;
    return value;
}
function encodeOverrideValueHandling(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationOverrideValueHandling = node_opcua_factory_1.registerEnumeration(schemaOverrideValueHandling);
// --------------------------------------------------------------------------------------------
const schemaFieldTargetDataType = node_opcua_factory_1.buildStructuredType({
    name: "FieldTargetDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "dataSetFieldId",
            fieldType: "Guid",
        },
        {
            name: "receiverIndexRange",
            fieldType: "UAString",
        },
        {
            name: "targetNodeId",
            fieldType: "NodeId",
        },
        {
            name: "attributeId",
            fieldType: "UInt32",
        },
        {
            name: "writeIndexRange",
            fieldType: "UAString",
        },
        {
            name: "overrideValueHandling",
            fieldType: "OverrideValueHandling",
        },
        {
            name: "overrideValue",
            fieldType: "Variant",
        },
    ]
});
class FieldTargetDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = FieldTargetDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.dataSetFieldId = node_opcua_factory_1.initialize_field(schema.fields[0], options.dataSetFieldId);
        this.receiverIndexRange = node_opcua_factory_1.initialize_field(schema.fields[1], options.receiverIndexRange);
        this.targetNodeId = node_opcua_factory_1.initialize_field(schema.fields[2], options.targetNodeId);
        this.attributeId = node_opcua_factory_1.initialize_field(schema.fields[3], options.attributeId);
        this.writeIndexRange = node_opcua_factory_1.initialize_field(schema.fields[4], options.writeIndexRange);
        this.overrideValueHandling = this.setOverrideValueHandling(node_opcua_factory_1.initialize_field(schema.fields[5], options.overrideValueHandling));
        this.overrideValue = node_opcua_factory_1.initialize_field(schema.fields[6], options.overrideValue);
    }
    static get schema() { return schemaFieldTargetDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeGuid(this.dataSetFieldId, stream);
        node_opcua_basic_types_1.encodeUAString(this.receiverIndexRange, stream);
        node_opcua_basic_types_1.encodeNodeId(this.targetNodeId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.attributeId, stream);
        node_opcua_basic_types_1.encodeUAString(this.writeIndexRange, stream);
        encodeOverrideValueHandling(this.overrideValueHandling, stream);
        node_opcua_variant_1.encodeVariant(this.overrideValue, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.dataSetFieldId = node_opcua_basic_types_1.decodeGuid(stream);
        this.receiverIndexRange = node_opcua_basic_types_1.decodeUAString(stream);
        this.targetNodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.attributeId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.writeIndexRange = node_opcua_basic_types_1.decodeUAString(stream);
        this.overrideValueHandling = decodeOverrideValueHandling(stream);
        this.overrideValue = node_opcua_variant_1.decodeVariant(stream);
    }
    // Define Enumeration setters
    setOverrideValueHandling(value) {
        const coercedValue = exports._enumerationOverrideValueHandling.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to OverrideValueHandling :" + value);
        }
        this.overrideValueHandling = coercedValue.value;
        return this.overrideValueHandling;
    }
    get schema() { return schemaFieldTargetDataType; }
}
FieldTargetDataType.possibleFields = [
    "dataSetFieldId",
    "receiverIndexRange",
    "targetNodeId",
    "attributeId",
    "writeIndexRange",
    "overrideValueHandling",
    "overrideValue"
];
FieldTargetDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(14848, 0);
FieldTargetDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(14804, 0);
exports.FieldTargetDataType = FieldTargetDataType;
FieldTargetDataType.schema.encodingDefaultBinary = FieldTargetDataType.encodingDefaultBinary;
FieldTargetDataType.schema.encodingDefaultXml = FieldTargetDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("FieldTargetDataType", FieldTargetDataType);
// --------------------------------------------------------------------------------------------
const schemaTargetVariablesDataType = node_opcua_factory_1.buildStructuredType({
    name: "TargetVariablesDataType",
    baseType: "SubscribedDataSetDataType",
    fields: [
        {
            name: "targetVariables",
            fieldType: "FieldTargetDataType",
            isArray: true
        },
    ]
});
class TargetVariablesDataType extends SubscribedDataSetDataType {
    constructor(options) {
        super(options);
        const schema = TargetVariablesDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.targetVariables = null; /* null array */
        }
        this.targetVariables = []; // should default
        if (options.targetVariables) {
            node_opcua_assert_1.assert(_.isArray(options.targetVariables));
            this.targetVariables = options.targetVariables.map((e) => new FieldTargetDataType(e));
        }
    }
    static get schema() { return schemaTargetVariablesDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.targetVariables, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.targetVariables = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new FieldTargetDataType();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaTargetVariablesDataType; }
}
TargetVariablesDataType.possibleFields = [
    "targetVariables"
];
TargetVariablesDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15712, 0);
TargetVariablesDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16011, 0);
exports.TargetVariablesDataType = TargetVariablesDataType;
TargetVariablesDataType.schema.encodingDefaultBinary = TargetVariablesDataType.encodingDefaultBinary;
TargetVariablesDataType.schema.encodingDefaultXml = TargetVariablesDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("TargetVariablesDataType", TargetVariablesDataType);
// --------------------------------------------------------------------------------------------
var PermissionType;
(function (PermissionType) {
    PermissionType[PermissionType["None"] = 0] = "None";
    PermissionType[PermissionType["Browse"] = 1] = "Browse";
    PermissionType[PermissionType["ReadRolePermissions"] = 2] = "ReadRolePermissions";
    PermissionType[PermissionType["WriteAttribute"] = 4] = "WriteAttribute";
    PermissionType[PermissionType["WriteRolePermissions"] = 8] = "WriteRolePermissions";
    PermissionType[PermissionType["WriteHistorizing"] = 16] = "WriteHistorizing";
    PermissionType[PermissionType["Read"] = 32] = "Read";
    PermissionType[PermissionType["Write"] = 64] = "Write";
    PermissionType[PermissionType["ReadHistory"] = 128] = "ReadHistory";
    PermissionType[PermissionType["InsertHistory"] = 256] = "InsertHistory";
    PermissionType[PermissionType["ModifyHistory"] = 512] = "ModifyHistory";
    PermissionType[PermissionType["DeleteHistory"] = 1024] = "DeleteHistory";
    PermissionType[PermissionType["ReceiveEvents"] = 2048] = "ReceiveEvents";
    PermissionType[PermissionType["Call"] = 4096] = "Call";
    PermissionType[PermissionType["AddReference"] = 8192] = "AddReference";
    PermissionType[PermissionType["RemoveReference"] = 16384] = "RemoveReference";
    PermissionType[PermissionType["DeleteNode"] = 32768] = "DeleteNode";
    PermissionType[PermissionType["AddNode"] = 65536] = "AddNode";
    PermissionType[PermissionType["Invalid"] = 4294967295] = "Invalid";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
const schemaPermissionType = {
    enumValues: PermissionType,
    flaggable: true,
    name: "PermissionType"
};
function decodePermissionType(stream) {
    return stream.readUInt32();
}
function encodePermissionType(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationPermissionType = node_opcua_factory_1.registerEnumeration(schemaPermissionType);
// --------------------------------------------------------------------------------------------
const schemaRolePermissionType = node_opcua_factory_1.buildStructuredType({
    name: "RolePermissionType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "roleId",
            fieldType: "NodeId",
        },
        {
            name: "permissions",
            fieldType: "PermissionType",
        },
    ]
});
class RolePermissionType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RolePermissionType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.roleId = node_opcua_factory_1.initialize_field(schema.fields[0], options.roleId);
        this.permissions = this.setPermissions(node_opcua_factory_1.initialize_field(schema.fields[1], options.permissions));
    }
    static get schema() { return schemaRolePermissionType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.roleId, stream);
        encodePermissionType(this.permissions, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.roleId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.permissions = decodePermissionType(stream);
    }
    // Define Enumeration setters
    setPermissions(value) {
        const coercedValue = exports._enumerationPermissionType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to PermissionType :" + value);
        }
        this.permissions = coercedValue.value;
        return this.permissions;
    }
    get schema() { return schemaRolePermissionType; }
}
RolePermissionType.possibleFields = [
    "roleId",
    "permissions"
];
RolePermissionType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(128, 0);
RolePermissionType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16126, 0);
exports.RolePermissionType = RolePermissionType;
RolePermissionType.schema.encodingDefaultBinary = RolePermissionType.encodingDefaultBinary;
RolePermissionType.schema.encodingDefaultXml = RolePermissionType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RolePermissionType", RolePermissionType);
// --------------------------------------------------------------------------------------------
const schemaSubscribedDataSetMirrorDataType = node_opcua_factory_1.buildStructuredType({
    name: "SubscribedDataSetMirrorDataType",
    baseType: "SubscribedDataSetDataType",
    fields: [
        {
            name: "parentNodeName",
            fieldType: "UAString",
        },
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
    ]
});
class SubscribedDataSetMirrorDataType extends SubscribedDataSetDataType {
    constructor(options) {
        super(options);
        const schema = SubscribedDataSetMirrorDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
        }
        this.parentNodeName = node_opcua_factory_1.initialize_field(schema.fields[0], options.parentNodeName);
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
    }
    static get schema() { return schemaSubscribedDataSetMirrorDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.parentNodeName, stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.parentNodeName = node_opcua_basic_types_1.decodeUAString(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaSubscribedDataSetMirrorDataType; }
}
SubscribedDataSetMirrorDataType.possibleFields = [
    "parentNodeName",
    "rolePermissions"
];
SubscribedDataSetMirrorDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15713, 0);
SubscribedDataSetMirrorDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16012, 0);
exports.SubscribedDataSetMirrorDataType = SubscribedDataSetMirrorDataType;
SubscribedDataSetMirrorDataType.schema.encodingDefaultBinary = SubscribedDataSetMirrorDataType.encodingDefaultBinary;
SubscribedDataSetMirrorDataType.schema.encodingDefaultXml = SubscribedDataSetMirrorDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SubscribedDataSetMirrorDataType", SubscribedDataSetMirrorDataType);
// --------------------------------------------------------------------------------------------
const schemaPubSubConfigurationDataType = node_opcua_factory_1.buildStructuredType({
    name: "PubSubConfigurationDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "publishedDataSets",
            fieldType: "PublishedDataSetDataType",
            isArray: true
        },
        {
            name: "connections",
            fieldType: "PubSubConnectionDataType",
            isArray: true
        },
        {
            name: "enabled",
            fieldType: "UABoolean",
        },
    ]
});
class PubSubConfigurationDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = PubSubConfigurationDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.publishedDataSets = null; /* null array */
            this.connections = null; /* null array */
        }
        this.publishedDataSets = []; // should default
        if (options.publishedDataSets) {
            node_opcua_assert_1.assert(_.isArray(options.publishedDataSets));
            this.publishedDataSets = options.publishedDataSets.map((e) => new PublishedDataSetDataType(e));
        }
        this.connections = []; // should default
        if (options.connections) {
            node_opcua_assert_1.assert(_.isArray(options.connections));
            this.connections = options.connections.map((e) => new PubSubConnectionDataType(e));
        }
        this.enabled = node_opcua_factory_1.initialize_field(schema.fields[2], options.enabled);
    }
    static get schema() { return schemaPubSubConfigurationDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.publishedDataSets, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.connections, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUABoolean(this.enabled, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.publishedDataSets = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new PublishedDataSetDataType();
            obj.decode(stream1);
            return obj;
        });
        this.connections = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new PubSubConnectionDataType();
            obj.decode(stream1);
            return obj;
        });
        this.enabled = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaPubSubConfigurationDataType; }
}
PubSubConfigurationDataType.possibleFields = [
    "publishedDataSets",
    "connections",
    "enabled"
];
PubSubConfigurationDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(21154, 0);
PubSubConfigurationDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(21178, 0);
exports.PubSubConfigurationDataType = PubSubConfigurationDataType;
PubSubConfigurationDataType.schema.encodingDefaultBinary = PubSubConfigurationDataType.encodingDefaultBinary;
PubSubConfigurationDataType.schema.encodingDefaultXml = PubSubConfigurationDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PubSubConfigurationDataType", PubSubConfigurationDataType);
// --------------------------------------------------------------------------------------------
var DataSetOrderingType;
(function (DataSetOrderingType) {
    DataSetOrderingType[DataSetOrderingType["Undefined"] = 0] = "Undefined";
    DataSetOrderingType[DataSetOrderingType["AscendingWriterId"] = 1] = "AscendingWriterId";
    DataSetOrderingType[DataSetOrderingType["AscendingWriterIdSingle"] = 2] = "AscendingWriterIdSingle";
    DataSetOrderingType[DataSetOrderingType["Invalid"] = 4294967295] = "Invalid";
})(DataSetOrderingType = exports.DataSetOrderingType || (exports.DataSetOrderingType = {}));
const schemaDataSetOrderingType = {
    enumValues: DataSetOrderingType,
    flaggable: false,
    minValue: 0,
    maxValue: 2,
    name: "DataSetOrderingType"
};
function decodeDataSetOrderingType(stream) {
    let value = stream.readUInt32();
    value = (value < schemaDataSetOrderingType.minValue || value > schemaDataSetOrderingType.maxValue) ? DataSetOrderingType.Invalid : value;
    return value;
}
function encodeDataSetOrderingType(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationDataSetOrderingType = node_opcua_factory_1.registerEnumeration(schemaDataSetOrderingType);
// --------------------------------------------------------------------------------------------
var UadpNetworkMessageContentMask;
(function (UadpNetworkMessageContentMask) {
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["None"] = 0] = "None";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["PublisherId"] = 1] = "PublisherId";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["GroupHeader"] = 2] = "GroupHeader";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["WriterGroupId"] = 4] = "WriterGroupId";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["GroupVersion"] = 8] = "GroupVersion";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["NetworkMessageNumber"] = 16] = "NetworkMessageNumber";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["SequenceNumber"] = 32] = "SequenceNumber";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["PayloadHeader"] = 64] = "PayloadHeader";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["Timestamp"] = 128] = "Timestamp";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["PicoSeconds"] = 256] = "PicoSeconds";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["DataSetClassId"] = 512] = "DataSetClassId";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["PromotedFields"] = 1024] = "PromotedFields";
    UadpNetworkMessageContentMask[UadpNetworkMessageContentMask["Invalid"] = 4294967295] = "Invalid";
})(UadpNetworkMessageContentMask = exports.UadpNetworkMessageContentMask || (exports.UadpNetworkMessageContentMask = {}));
const schemaUadpNetworkMessageContentMask = {
    enumValues: UadpNetworkMessageContentMask,
    flaggable: true,
    name: "UadpNetworkMessageContentMask"
};
function decodeUadpNetworkMessageContentMask(stream) {
    return stream.readUInt32();
}
function encodeUadpNetworkMessageContentMask(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationUadpNetworkMessageContentMask = node_opcua_factory_1.registerEnumeration(schemaUadpNetworkMessageContentMask);
// --------------------------------------------------------------------------------------------
const schemaUadpWriterGroupMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "UadpWriterGroupMessageDataType",
    baseType: "WriterGroupMessageDataType",
    fields: [
        {
            name: "groupVersion",
            fieldType: "UInt32",
        },
        {
            name: "dataSetOrdering",
            fieldType: "DataSetOrderingType",
        },
        {
            name: "networkMessageContentMask",
            fieldType: "UadpNetworkMessageContentMask",
        },
        {
            name: "samplingOffset",
            fieldType: "Double",
        },
        {
            name: "publishingOffset",
            fieldType: "Double",
            isArray: true
        },
    ]
});
class UadpWriterGroupMessageDataType extends WriterGroupMessageDataType {
    constructor(options) {
        super(options);
        const schema = UadpWriterGroupMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.groupVersion = node_opcua_factory_1.initialize_field(schema.fields[0], options.groupVersion);
        this.dataSetOrdering = this.setDataSetOrdering(node_opcua_factory_1.initialize_field(schema.fields[1], options.dataSetOrdering));
        this.networkMessageContentMask = this.setNetworkMessageContentMask(node_opcua_factory_1.initialize_field(schema.fields[2], options.networkMessageContentMask));
        this.samplingOffset = node_opcua_factory_1.initialize_field(schema.fields[3], options.samplingOffset);
        this.publishingOffset = node_opcua_factory_1.initialize_field_array(schema.fields[4], options.publishingOffset);
    }
    static get schema() { return schemaUadpWriterGroupMessageDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.groupVersion, stream);
        encodeDataSetOrderingType(this.dataSetOrdering, stream);
        encodeUadpNetworkMessageContentMask(this.networkMessageContentMask, stream);
        node_opcua_basic_types_1.encodeDouble(this.samplingOffset, stream);
        node_opcua_basic_types_1.encodeArray(this.publishingOffset, stream, node_opcua_basic_types_1.encodeDouble);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.groupVersion = node_opcua_basic_types_1.decodeUInt32(stream);
        this.dataSetOrdering = decodeDataSetOrderingType(stream);
        this.networkMessageContentMask = decodeUadpNetworkMessageContentMask(stream);
        this.samplingOffset = node_opcua_basic_types_1.decodeDouble(stream);
        this.publishingOffset = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeDouble);
    }
    // Define Enumeration setters
    setDataSetOrdering(value) {
        const coercedValue = exports._enumerationDataSetOrderingType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to DataSetOrderingType :" + value);
        }
        this.dataSetOrdering = coercedValue.value;
        return this.dataSetOrdering;
    }
    setNetworkMessageContentMask(value) {
        const coercedValue = exports._enumerationUadpNetworkMessageContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to UadpNetworkMessageContentMask :" + value);
        }
        this.networkMessageContentMask = coercedValue.value;
        return this.networkMessageContentMask;
    }
    get schema() { return schemaUadpWriterGroupMessageDataType; }
}
UadpWriterGroupMessageDataType.possibleFields = [
    "groupVersion",
    "dataSetOrdering",
    "networkMessageContentMask",
    "samplingOffset",
    "publishingOffset"
];
UadpWriterGroupMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15715, 0);
UadpWriterGroupMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16014, 0);
exports.UadpWriterGroupMessageDataType = UadpWriterGroupMessageDataType;
UadpWriterGroupMessageDataType.schema.encodingDefaultBinary = UadpWriterGroupMessageDataType.encodingDefaultBinary;
UadpWriterGroupMessageDataType.schema.encodingDefaultXml = UadpWriterGroupMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UadpWriterGroupMessageDataType", UadpWriterGroupMessageDataType);
// --------------------------------------------------------------------------------------------
var UadpDataSetMessageContentMask;
(function (UadpDataSetMessageContentMask) {
    UadpDataSetMessageContentMask[UadpDataSetMessageContentMask["None"] = 0] = "None";
    UadpDataSetMessageContentMask[UadpDataSetMessageContentMask["Timestamp"] = 1] = "Timestamp";
    UadpDataSetMessageContentMask[UadpDataSetMessageContentMask["PicoSeconds"] = 2] = "PicoSeconds";
    UadpDataSetMessageContentMask[UadpDataSetMessageContentMask["Status"] = 4] = "Status";
    UadpDataSetMessageContentMask[UadpDataSetMessageContentMask["MajorVersion"] = 8] = "MajorVersion";
    UadpDataSetMessageContentMask[UadpDataSetMessageContentMask["MinorVersion"] = 16] = "MinorVersion";
    UadpDataSetMessageContentMask[UadpDataSetMessageContentMask["SequenceNumber"] = 32] = "SequenceNumber";
    UadpDataSetMessageContentMask[UadpDataSetMessageContentMask["Invalid"] = 4294967295] = "Invalid";
})(UadpDataSetMessageContentMask = exports.UadpDataSetMessageContentMask || (exports.UadpDataSetMessageContentMask = {}));
const schemaUadpDataSetMessageContentMask = {
    enumValues: UadpDataSetMessageContentMask,
    flaggable: true,
    name: "UadpDataSetMessageContentMask"
};
function decodeUadpDataSetMessageContentMask(stream) {
    return stream.readUInt32();
}
function encodeUadpDataSetMessageContentMask(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationUadpDataSetMessageContentMask = node_opcua_factory_1.registerEnumeration(schemaUadpDataSetMessageContentMask);
// --------------------------------------------------------------------------------------------
const schemaUadpDataSetWriterMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "UadpDataSetWriterMessageDataType",
    baseType: "DataSetWriterMessageDataType",
    fields: [
        {
            name: "dataSetMessageContentMask",
            fieldType: "UadpDataSetMessageContentMask",
        },
        {
            name: "configuredSize",
            fieldType: "UInt16",
        },
        {
            name: "networkMessageNumber",
            fieldType: "UInt16",
        },
        {
            name: "dataSetOffset",
            fieldType: "UInt16",
        },
    ]
});
class UadpDataSetWriterMessageDataType extends DataSetWriterMessageDataType {
    constructor(options) {
        super(options);
        const schema = UadpDataSetWriterMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.dataSetMessageContentMask = this.setDataSetMessageContentMask(node_opcua_factory_1.initialize_field(schema.fields[0], options.dataSetMessageContentMask));
        this.configuredSize = node_opcua_factory_1.initialize_field(schema.fields[1], options.configuredSize);
        this.networkMessageNumber = node_opcua_factory_1.initialize_field(schema.fields[2], options.networkMessageNumber);
        this.dataSetOffset = node_opcua_factory_1.initialize_field(schema.fields[3], options.dataSetOffset);
    }
    static get schema() { return schemaUadpDataSetWriterMessageDataType; }
    encode(stream) {
        super.encode(stream);
        encodeUadpDataSetMessageContentMask(this.dataSetMessageContentMask, stream);
        node_opcua_basic_types_1.encodeUInt16(this.configuredSize, stream);
        node_opcua_basic_types_1.encodeUInt16(this.networkMessageNumber, stream);
        node_opcua_basic_types_1.encodeUInt16(this.dataSetOffset, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.dataSetMessageContentMask = decodeUadpDataSetMessageContentMask(stream);
        this.configuredSize = node_opcua_basic_types_1.decodeUInt16(stream);
        this.networkMessageNumber = node_opcua_basic_types_1.decodeUInt16(stream);
        this.dataSetOffset = node_opcua_basic_types_1.decodeUInt16(stream);
    }
    // Define Enumeration setters
    setDataSetMessageContentMask(value) {
        const coercedValue = exports._enumerationUadpDataSetMessageContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to UadpDataSetMessageContentMask :" + value);
        }
        this.dataSetMessageContentMask = coercedValue.value;
        return this.dataSetMessageContentMask;
    }
    get schema() { return schemaUadpDataSetWriterMessageDataType; }
}
UadpDataSetWriterMessageDataType.possibleFields = [
    "dataSetMessageContentMask",
    "configuredSize",
    "networkMessageNumber",
    "dataSetOffset"
];
UadpDataSetWriterMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15717, 0);
UadpDataSetWriterMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16015, 0);
exports.UadpDataSetWriterMessageDataType = UadpDataSetWriterMessageDataType;
UadpDataSetWriterMessageDataType.schema.encodingDefaultBinary = UadpDataSetWriterMessageDataType.encodingDefaultBinary;
UadpDataSetWriterMessageDataType.schema.encodingDefaultXml = UadpDataSetWriterMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UadpDataSetWriterMessageDataType", UadpDataSetWriterMessageDataType);
// --------------------------------------------------------------------------------------------
const schemaUadpDataSetReaderMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "UadpDataSetReaderMessageDataType",
    baseType: "DataSetReaderMessageDataType",
    fields: [
        {
            name: "groupVersion",
            fieldType: "UInt32",
        },
        {
            name: "networkMessageNumber",
            fieldType: "UInt16",
        },
        {
            name: "dataSetOffset",
            fieldType: "UInt16",
        },
        {
            name: "dataSetClassId",
            fieldType: "Guid",
        },
        {
            name: "networkMessageContentMask",
            fieldType: "UadpNetworkMessageContentMask",
        },
        {
            name: "dataSetMessageContentMask",
            fieldType: "UadpDataSetMessageContentMask",
        },
        {
            name: "publishingInterval",
            fieldType: "Double",
        },
        {
            name: "receiveOffset",
            fieldType: "Double",
        },
        {
            name: "processingOffset",
            fieldType: "Double",
        },
    ]
});
class UadpDataSetReaderMessageDataType extends DataSetReaderMessageDataType {
    constructor(options) {
        super(options);
        const schema = UadpDataSetReaderMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.groupVersion = node_opcua_factory_1.initialize_field(schema.fields[0], options.groupVersion);
        this.networkMessageNumber = node_opcua_factory_1.initialize_field(schema.fields[1], options.networkMessageNumber);
        this.dataSetOffset = node_opcua_factory_1.initialize_field(schema.fields[2], options.dataSetOffset);
        this.dataSetClassId = node_opcua_factory_1.initialize_field(schema.fields[3], options.dataSetClassId);
        this.networkMessageContentMask = this.setNetworkMessageContentMask(node_opcua_factory_1.initialize_field(schema.fields[4], options.networkMessageContentMask));
        this.dataSetMessageContentMask = this.setDataSetMessageContentMask(node_opcua_factory_1.initialize_field(schema.fields[5], options.dataSetMessageContentMask));
        this.publishingInterval = node_opcua_factory_1.initialize_field(schema.fields[6], options.publishingInterval);
        this.receiveOffset = node_opcua_factory_1.initialize_field(schema.fields[7], options.receiveOffset);
        this.processingOffset = node_opcua_factory_1.initialize_field(schema.fields[8], options.processingOffset);
    }
    static get schema() { return schemaUadpDataSetReaderMessageDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.groupVersion, stream);
        node_opcua_basic_types_1.encodeUInt16(this.networkMessageNumber, stream);
        node_opcua_basic_types_1.encodeUInt16(this.dataSetOffset, stream);
        node_opcua_basic_types_1.encodeGuid(this.dataSetClassId, stream);
        encodeUadpNetworkMessageContentMask(this.networkMessageContentMask, stream);
        encodeUadpDataSetMessageContentMask(this.dataSetMessageContentMask, stream);
        node_opcua_basic_types_1.encodeDouble(this.publishingInterval, stream);
        node_opcua_basic_types_1.encodeDouble(this.receiveOffset, stream);
        node_opcua_basic_types_1.encodeDouble(this.processingOffset, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.groupVersion = node_opcua_basic_types_1.decodeUInt32(stream);
        this.networkMessageNumber = node_opcua_basic_types_1.decodeUInt16(stream);
        this.dataSetOffset = node_opcua_basic_types_1.decodeUInt16(stream);
        this.dataSetClassId = node_opcua_basic_types_1.decodeGuid(stream);
        this.networkMessageContentMask = decodeUadpNetworkMessageContentMask(stream);
        this.dataSetMessageContentMask = decodeUadpDataSetMessageContentMask(stream);
        this.publishingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.receiveOffset = node_opcua_basic_types_1.decodeDouble(stream);
        this.processingOffset = node_opcua_basic_types_1.decodeDouble(stream);
    }
    // Define Enumeration setters
    setNetworkMessageContentMask(value) {
        const coercedValue = exports._enumerationUadpNetworkMessageContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to UadpNetworkMessageContentMask :" + value);
        }
        this.networkMessageContentMask = coercedValue.value;
        return this.networkMessageContentMask;
    }
    setDataSetMessageContentMask(value) {
        const coercedValue = exports._enumerationUadpDataSetMessageContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to UadpDataSetMessageContentMask :" + value);
        }
        this.dataSetMessageContentMask = coercedValue.value;
        return this.dataSetMessageContentMask;
    }
    get schema() { return schemaUadpDataSetReaderMessageDataType; }
}
UadpDataSetReaderMessageDataType.possibleFields = [
    "groupVersion",
    "networkMessageNumber",
    "dataSetOffset",
    "dataSetClassId",
    "networkMessageContentMask",
    "dataSetMessageContentMask",
    "publishingInterval",
    "receiveOffset",
    "processingOffset"
];
UadpDataSetReaderMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15718, 0);
UadpDataSetReaderMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16016, 0);
exports.UadpDataSetReaderMessageDataType = UadpDataSetReaderMessageDataType;
UadpDataSetReaderMessageDataType.schema.encodingDefaultBinary = UadpDataSetReaderMessageDataType.encodingDefaultBinary;
UadpDataSetReaderMessageDataType.schema.encodingDefaultXml = UadpDataSetReaderMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UadpDataSetReaderMessageDataType", UadpDataSetReaderMessageDataType);
// --------------------------------------------------------------------------------------------
var JsonNetworkMessageContentMask;
(function (JsonNetworkMessageContentMask) {
    JsonNetworkMessageContentMask[JsonNetworkMessageContentMask["None"] = 0] = "None";
    JsonNetworkMessageContentMask[JsonNetworkMessageContentMask["NetworkMessageHeader"] = 1] = "NetworkMessageHeader";
    JsonNetworkMessageContentMask[JsonNetworkMessageContentMask["DataSetMessageHeader"] = 2] = "DataSetMessageHeader";
    JsonNetworkMessageContentMask[JsonNetworkMessageContentMask["SingleDataSetMessage"] = 4] = "SingleDataSetMessage";
    JsonNetworkMessageContentMask[JsonNetworkMessageContentMask["PublisherId"] = 8] = "PublisherId";
    JsonNetworkMessageContentMask[JsonNetworkMessageContentMask["DataSetClassId"] = 16] = "DataSetClassId";
    JsonNetworkMessageContentMask[JsonNetworkMessageContentMask["ReplyTo"] = 32] = "ReplyTo";
    JsonNetworkMessageContentMask[JsonNetworkMessageContentMask["Invalid"] = 4294967295] = "Invalid";
})(JsonNetworkMessageContentMask = exports.JsonNetworkMessageContentMask || (exports.JsonNetworkMessageContentMask = {}));
const schemaJsonNetworkMessageContentMask = {
    enumValues: JsonNetworkMessageContentMask,
    flaggable: true,
    name: "JsonNetworkMessageContentMask"
};
function decodeJsonNetworkMessageContentMask(stream) {
    return stream.readUInt32();
}
function encodeJsonNetworkMessageContentMask(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationJsonNetworkMessageContentMask = node_opcua_factory_1.registerEnumeration(schemaJsonNetworkMessageContentMask);
// --------------------------------------------------------------------------------------------
const schemaJsonWriterGroupMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "JsonWriterGroupMessageDataType",
    baseType: "WriterGroupMessageDataType",
    fields: [
        {
            name: "networkMessageContentMask",
            fieldType: "JsonNetworkMessageContentMask",
        },
    ]
});
class JsonWriterGroupMessageDataType extends WriterGroupMessageDataType {
    constructor(options) {
        super(options);
        const schema = JsonWriterGroupMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.networkMessageContentMask = this.setNetworkMessageContentMask(node_opcua_factory_1.initialize_field(schema.fields[0], options.networkMessageContentMask));
    }
    static get schema() { return schemaJsonWriterGroupMessageDataType; }
    encode(stream) {
        super.encode(stream);
        encodeJsonNetworkMessageContentMask(this.networkMessageContentMask, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.networkMessageContentMask = decodeJsonNetworkMessageContentMask(stream);
    }
    // Define Enumeration setters
    setNetworkMessageContentMask(value) {
        const coercedValue = exports._enumerationJsonNetworkMessageContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to JsonNetworkMessageContentMask :" + value);
        }
        this.networkMessageContentMask = coercedValue.value;
        return this.networkMessageContentMask;
    }
    get schema() { return schemaJsonWriterGroupMessageDataType; }
}
JsonWriterGroupMessageDataType.possibleFields = [
    "networkMessageContentMask"
];
JsonWriterGroupMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15719, 0);
JsonWriterGroupMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16017, 0);
exports.JsonWriterGroupMessageDataType = JsonWriterGroupMessageDataType;
JsonWriterGroupMessageDataType.schema.encodingDefaultBinary = JsonWriterGroupMessageDataType.encodingDefaultBinary;
JsonWriterGroupMessageDataType.schema.encodingDefaultXml = JsonWriterGroupMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("JsonWriterGroupMessageDataType", JsonWriterGroupMessageDataType);
// --------------------------------------------------------------------------------------------
var JsonDataSetMessageContentMask;
(function (JsonDataSetMessageContentMask) {
    JsonDataSetMessageContentMask[JsonDataSetMessageContentMask["None"] = 0] = "None";
    JsonDataSetMessageContentMask[JsonDataSetMessageContentMask["DataSetWriterId"] = 1] = "DataSetWriterId";
    JsonDataSetMessageContentMask[JsonDataSetMessageContentMask["MetaDataVersion"] = 2] = "MetaDataVersion";
    JsonDataSetMessageContentMask[JsonDataSetMessageContentMask["SequenceNumber"] = 4] = "SequenceNumber";
    JsonDataSetMessageContentMask[JsonDataSetMessageContentMask["Timestamp"] = 8] = "Timestamp";
    JsonDataSetMessageContentMask[JsonDataSetMessageContentMask["Status"] = 16] = "Status";
    JsonDataSetMessageContentMask[JsonDataSetMessageContentMask["Invalid"] = 4294967295] = "Invalid";
})(JsonDataSetMessageContentMask = exports.JsonDataSetMessageContentMask || (exports.JsonDataSetMessageContentMask = {}));
const schemaJsonDataSetMessageContentMask = {
    enumValues: JsonDataSetMessageContentMask,
    flaggable: true,
    name: "JsonDataSetMessageContentMask"
};
function decodeJsonDataSetMessageContentMask(stream) {
    return stream.readUInt32();
}
function encodeJsonDataSetMessageContentMask(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationJsonDataSetMessageContentMask = node_opcua_factory_1.registerEnumeration(schemaJsonDataSetMessageContentMask);
// --------------------------------------------------------------------------------------------
const schemaJsonDataSetWriterMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "JsonDataSetWriterMessageDataType",
    baseType: "DataSetWriterMessageDataType",
    fields: [
        {
            name: "dataSetMessageContentMask",
            fieldType: "JsonDataSetMessageContentMask",
        },
    ]
});
class JsonDataSetWriterMessageDataType extends DataSetWriterMessageDataType {
    constructor(options) {
        super(options);
        const schema = JsonDataSetWriterMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.dataSetMessageContentMask = this.setDataSetMessageContentMask(node_opcua_factory_1.initialize_field(schema.fields[0], options.dataSetMessageContentMask));
    }
    static get schema() { return schemaJsonDataSetWriterMessageDataType; }
    encode(stream) {
        super.encode(stream);
        encodeJsonDataSetMessageContentMask(this.dataSetMessageContentMask, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.dataSetMessageContentMask = decodeJsonDataSetMessageContentMask(stream);
    }
    // Define Enumeration setters
    setDataSetMessageContentMask(value) {
        const coercedValue = exports._enumerationJsonDataSetMessageContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to JsonDataSetMessageContentMask :" + value);
        }
        this.dataSetMessageContentMask = coercedValue.value;
        return this.dataSetMessageContentMask;
    }
    get schema() { return schemaJsonDataSetWriterMessageDataType; }
}
JsonDataSetWriterMessageDataType.possibleFields = [
    "dataSetMessageContentMask"
];
JsonDataSetWriterMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15724, 0);
JsonDataSetWriterMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16018, 0);
exports.JsonDataSetWriterMessageDataType = JsonDataSetWriterMessageDataType;
JsonDataSetWriterMessageDataType.schema.encodingDefaultBinary = JsonDataSetWriterMessageDataType.encodingDefaultBinary;
JsonDataSetWriterMessageDataType.schema.encodingDefaultXml = JsonDataSetWriterMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("JsonDataSetWriterMessageDataType", JsonDataSetWriterMessageDataType);
// --------------------------------------------------------------------------------------------
const schemaJsonDataSetReaderMessageDataType = node_opcua_factory_1.buildStructuredType({
    name: "JsonDataSetReaderMessageDataType",
    baseType: "DataSetReaderMessageDataType",
    fields: [
        {
            name: "networkMessageContentMask",
            fieldType: "JsonNetworkMessageContentMask",
        },
        {
            name: "dataSetMessageContentMask",
            fieldType: "JsonDataSetMessageContentMask",
        },
    ]
});
class JsonDataSetReaderMessageDataType extends DataSetReaderMessageDataType {
    constructor(options) {
        super(options);
        const schema = JsonDataSetReaderMessageDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.networkMessageContentMask = this.setNetworkMessageContentMask(node_opcua_factory_1.initialize_field(schema.fields[0], options.networkMessageContentMask));
        this.dataSetMessageContentMask = this.setDataSetMessageContentMask(node_opcua_factory_1.initialize_field(schema.fields[1], options.dataSetMessageContentMask));
    }
    static get schema() { return schemaJsonDataSetReaderMessageDataType; }
    encode(stream) {
        super.encode(stream);
        encodeJsonNetworkMessageContentMask(this.networkMessageContentMask, stream);
        encodeJsonDataSetMessageContentMask(this.dataSetMessageContentMask, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.networkMessageContentMask = decodeJsonNetworkMessageContentMask(stream);
        this.dataSetMessageContentMask = decodeJsonDataSetMessageContentMask(stream);
    }
    // Define Enumeration setters
    setNetworkMessageContentMask(value) {
        const coercedValue = exports._enumerationJsonNetworkMessageContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to JsonNetworkMessageContentMask :" + value);
        }
        this.networkMessageContentMask = coercedValue.value;
        return this.networkMessageContentMask;
    }
    setDataSetMessageContentMask(value) {
        const coercedValue = exports._enumerationJsonDataSetMessageContentMask.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to JsonDataSetMessageContentMask :" + value);
        }
        this.dataSetMessageContentMask = coercedValue.value;
        return this.dataSetMessageContentMask;
    }
    get schema() { return schemaJsonDataSetReaderMessageDataType; }
}
JsonDataSetReaderMessageDataType.possibleFields = [
    "networkMessageContentMask",
    "dataSetMessageContentMask"
];
JsonDataSetReaderMessageDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15725, 0);
JsonDataSetReaderMessageDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16019, 0);
exports.JsonDataSetReaderMessageDataType = JsonDataSetReaderMessageDataType;
JsonDataSetReaderMessageDataType.schema.encodingDefaultBinary = JsonDataSetReaderMessageDataType.encodingDefaultBinary;
JsonDataSetReaderMessageDataType.schema.encodingDefaultXml = JsonDataSetReaderMessageDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("JsonDataSetReaderMessageDataType", JsonDataSetReaderMessageDataType);
// --------------------------------------------------------------------------------------------
const schemaDatagramConnectionTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "DatagramConnectionTransportDataType",
    baseType: "ConnectionTransportDataType",
    fields: [
        {
            name: "discoveryAddress",
            fieldType: "ExtensionObject",
        },
    ]
});
class DatagramConnectionTransportDataType extends ConnectionTransportDataType {
    constructor(options) {
        super(options);
        const schema = DatagramConnectionTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.discoveryAddress = node_opcua_factory_1.initialize_field(schema.fields[0], options.discoveryAddress);
    }
    static get schema() { return schemaDatagramConnectionTransportDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.discoveryAddress, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.discoveryAddress = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    get schema() { return schemaDatagramConnectionTransportDataType; }
}
DatagramConnectionTransportDataType.possibleFields = [
    "discoveryAddress"
];
DatagramConnectionTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(17468, 0);
DatagramConnectionTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(17472, 0);
exports.DatagramConnectionTransportDataType = DatagramConnectionTransportDataType;
DatagramConnectionTransportDataType.schema.encodingDefaultBinary = DatagramConnectionTransportDataType.encodingDefaultBinary;
DatagramConnectionTransportDataType.schema.encodingDefaultXml = DatagramConnectionTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DatagramConnectionTransportDataType", DatagramConnectionTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaDatagramWriterGroupTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "DatagramWriterGroupTransportDataType",
    baseType: "WriterGroupTransportDataType",
    fields: [
        {
            name: "messageRepeatCount",
            fieldType: "Byte",
        },
        {
            name: "messageRepeatDelay",
            fieldType: "Double",
        },
    ]
});
class DatagramWriterGroupTransportDataType extends WriterGroupTransportDataType {
    constructor(options) {
        super(options);
        const schema = DatagramWriterGroupTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.messageRepeatCount = node_opcua_factory_1.initialize_field(schema.fields[0], options.messageRepeatCount);
        this.messageRepeatDelay = node_opcua_factory_1.initialize_field(schema.fields[1], options.messageRepeatDelay);
    }
    static get schema() { return schemaDatagramWriterGroupTransportDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeByte(this.messageRepeatCount, stream);
        node_opcua_basic_types_1.encodeDouble(this.messageRepeatDelay, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.messageRepeatCount = node_opcua_basic_types_1.decodeByte(stream);
        this.messageRepeatDelay = node_opcua_basic_types_1.decodeDouble(stream);
    }
    get schema() { return schemaDatagramWriterGroupTransportDataType; }
}
DatagramWriterGroupTransportDataType.possibleFields = [
    "messageRepeatCount",
    "messageRepeatDelay"
];
DatagramWriterGroupTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(21155, 0);
DatagramWriterGroupTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(21179, 0);
exports.DatagramWriterGroupTransportDataType = DatagramWriterGroupTransportDataType;
DatagramWriterGroupTransportDataType.schema.encodingDefaultBinary = DatagramWriterGroupTransportDataType.encodingDefaultBinary;
DatagramWriterGroupTransportDataType.schema.encodingDefaultXml = DatagramWriterGroupTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DatagramWriterGroupTransportDataType", DatagramWriterGroupTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaBrokerConnectionTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "BrokerConnectionTransportDataType",
    baseType: "ConnectionTransportDataType",
    fields: [
        {
            name: "resourceUri",
            fieldType: "UAString",
        },
        {
            name: "authenticationProfileUri",
            fieldType: "UAString",
        },
    ]
});
class BrokerConnectionTransportDataType extends ConnectionTransportDataType {
    constructor(options) {
        super(options);
        const schema = BrokerConnectionTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.resourceUri = node_opcua_factory_1.initialize_field(schema.fields[0], options.resourceUri);
        this.authenticationProfileUri = node_opcua_factory_1.initialize_field(schema.fields[1], options.authenticationProfileUri);
    }
    static get schema() { return schemaBrokerConnectionTransportDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.resourceUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.authenticationProfileUri, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.resourceUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.authenticationProfileUri = node_opcua_basic_types_1.decodeUAString(stream);
    }
    get schema() { return schemaBrokerConnectionTransportDataType; }
}
BrokerConnectionTransportDataType.possibleFields = [
    "resourceUri",
    "authenticationProfileUri"
];
BrokerConnectionTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15479, 0);
BrokerConnectionTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15579, 0);
exports.BrokerConnectionTransportDataType = BrokerConnectionTransportDataType;
BrokerConnectionTransportDataType.schema.encodingDefaultBinary = BrokerConnectionTransportDataType.encodingDefaultBinary;
BrokerConnectionTransportDataType.schema.encodingDefaultXml = BrokerConnectionTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrokerConnectionTransportDataType", BrokerConnectionTransportDataType);
// --------------------------------------------------------------------------------------------
var BrokerTransportQualityOfService;
(function (BrokerTransportQualityOfService) {
    BrokerTransportQualityOfService[BrokerTransportQualityOfService["NotSpecified"] = 0] = "NotSpecified";
    BrokerTransportQualityOfService[BrokerTransportQualityOfService["BestEffort"] = 1] = "BestEffort";
    BrokerTransportQualityOfService[BrokerTransportQualityOfService["AtLeastOnce"] = 2] = "AtLeastOnce";
    BrokerTransportQualityOfService[BrokerTransportQualityOfService["AtMostOnce"] = 3] = "AtMostOnce";
    BrokerTransportQualityOfService[BrokerTransportQualityOfService["ExactlyOnce"] = 4] = "ExactlyOnce";
    BrokerTransportQualityOfService[BrokerTransportQualityOfService["Invalid"] = 4294967295] = "Invalid";
})(BrokerTransportQualityOfService = exports.BrokerTransportQualityOfService || (exports.BrokerTransportQualityOfService = {}));
const schemaBrokerTransportQualityOfService = {
    enumValues: BrokerTransportQualityOfService,
    flaggable: false,
    minValue: 0,
    maxValue: 4,
    name: "BrokerTransportQualityOfService"
};
function decodeBrokerTransportQualityOfService(stream) {
    let value = stream.readUInt32();
    value = (value < schemaBrokerTransportQualityOfService.minValue || value > schemaBrokerTransportQualityOfService.maxValue) ? BrokerTransportQualityOfService.Invalid : value;
    return value;
}
function encodeBrokerTransportQualityOfService(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationBrokerTransportQualityOfService = node_opcua_factory_1.registerEnumeration(schemaBrokerTransportQualityOfService);
// --------------------------------------------------------------------------------------------
const schemaBrokerWriterGroupTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "BrokerWriterGroupTransportDataType",
    baseType: "WriterGroupTransportDataType",
    fields: [
        {
            name: "queueName",
            fieldType: "UAString",
        },
        {
            name: "resourceUri",
            fieldType: "UAString",
        },
        {
            name: "authenticationProfileUri",
            fieldType: "UAString",
        },
        {
            name: "requestedDeliveryGuarantee",
            fieldType: "BrokerTransportQualityOfService",
        },
    ]
});
class BrokerWriterGroupTransportDataType extends WriterGroupTransportDataType {
    constructor(options) {
        super(options);
        const schema = BrokerWriterGroupTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.queueName = node_opcua_factory_1.initialize_field(schema.fields[0], options.queueName);
        this.resourceUri = node_opcua_factory_1.initialize_field(schema.fields[1], options.resourceUri);
        this.authenticationProfileUri = node_opcua_factory_1.initialize_field(schema.fields[2], options.authenticationProfileUri);
        this.requestedDeliveryGuarantee = this.setRequestedDeliveryGuarantee(node_opcua_factory_1.initialize_field(schema.fields[3], options.requestedDeliveryGuarantee));
    }
    static get schema() { return schemaBrokerWriterGroupTransportDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.queueName, stream);
        node_opcua_basic_types_1.encodeUAString(this.resourceUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.authenticationProfileUri, stream);
        encodeBrokerTransportQualityOfService(this.requestedDeliveryGuarantee, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.queueName = node_opcua_basic_types_1.decodeUAString(stream);
        this.resourceUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.authenticationProfileUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.requestedDeliveryGuarantee = decodeBrokerTransportQualityOfService(stream);
    }
    // Define Enumeration setters
    setRequestedDeliveryGuarantee(value) {
        const coercedValue = exports._enumerationBrokerTransportQualityOfService.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to BrokerTransportQualityOfService :" + value);
        }
        this.requestedDeliveryGuarantee = coercedValue.value;
        return this.requestedDeliveryGuarantee;
    }
    get schema() { return schemaBrokerWriterGroupTransportDataType; }
}
BrokerWriterGroupTransportDataType.possibleFields = [
    "queueName",
    "resourceUri",
    "authenticationProfileUri",
    "requestedDeliveryGuarantee"
];
BrokerWriterGroupTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15727, 0);
BrokerWriterGroupTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16021, 0);
exports.BrokerWriterGroupTransportDataType = BrokerWriterGroupTransportDataType;
BrokerWriterGroupTransportDataType.schema.encodingDefaultBinary = BrokerWriterGroupTransportDataType.encodingDefaultBinary;
BrokerWriterGroupTransportDataType.schema.encodingDefaultXml = BrokerWriterGroupTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrokerWriterGroupTransportDataType", BrokerWriterGroupTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaBrokerDataSetWriterTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "BrokerDataSetWriterTransportDataType",
    baseType: "DataSetWriterTransportDataType",
    fields: [
        {
            name: "queueName",
            fieldType: "UAString",
        },
        {
            name: "resourceUri",
            fieldType: "UAString",
        },
        {
            name: "authenticationProfileUri",
            fieldType: "UAString",
        },
        {
            name: "requestedDeliveryGuarantee",
            fieldType: "BrokerTransportQualityOfService",
        },
        {
            name: "metaDataQueueName",
            fieldType: "UAString",
        },
        {
            name: "metaDataUpdateTime",
            fieldType: "Double",
        },
    ]
});
class BrokerDataSetWriterTransportDataType extends DataSetWriterTransportDataType {
    constructor(options) {
        super(options);
        const schema = BrokerDataSetWriterTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.queueName = node_opcua_factory_1.initialize_field(schema.fields[0], options.queueName);
        this.resourceUri = node_opcua_factory_1.initialize_field(schema.fields[1], options.resourceUri);
        this.authenticationProfileUri = node_opcua_factory_1.initialize_field(schema.fields[2], options.authenticationProfileUri);
        this.requestedDeliveryGuarantee = this.setRequestedDeliveryGuarantee(node_opcua_factory_1.initialize_field(schema.fields[3], options.requestedDeliveryGuarantee));
        this.metaDataQueueName = node_opcua_factory_1.initialize_field(schema.fields[4], options.metaDataQueueName);
        this.metaDataUpdateTime = node_opcua_factory_1.initialize_field(schema.fields[5], options.metaDataUpdateTime);
    }
    static get schema() { return schemaBrokerDataSetWriterTransportDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.queueName, stream);
        node_opcua_basic_types_1.encodeUAString(this.resourceUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.authenticationProfileUri, stream);
        encodeBrokerTransportQualityOfService(this.requestedDeliveryGuarantee, stream);
        node_opcua_basic_types_1.encodeUAString(this.metaDataQueueName, stream);
        node_opcua_basic_types_1.encodeDouble(this.metaDataUpdateTime, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.queueName = node_opcua_basic_types_1.decodeUAString(stream);
        this.resourceUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.authenticationProfileUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.requestedDeliveryGuarantee = decodeBrokerTransportQualityOfService(stream);
        this.metaDataQueueName = node_opcua_basic_types_1.decodeUAString(stream);
        this.metaDataUpdateTime = node_opcua_basic_types_1.decodeDouble(stream);
    }
    // Define Enumeration setters
    setRequestedDeliveryGuarantee(value) {
        const coercedValue = exports._enumerationBrokerTransportQualityOfService.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to BrokerTransportQualityOfService :" + value);
        }
        this.requestedDeliveryGuarantee = coercedValue.value;
        return this.requestedDeliveryGuarantee;
    }
    get schema() { return schemaBrokerDataSetWriterTransportDataType; }
}
BrokerDataSetWriterTransportDataType.possibleFields = [
    "queueName",
    "resourceUri",
    "authenticationProfileUri",
    "requestedDeliveryGuarantee",
    "metaDataQueueName",
    "metaDataUpdateTime"
];
BrokerDataSetWriterTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15729, 0);
BrokerDataSetWriterTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16022, 0);
exports.BrokerDataSetWriterTransportDataType = BrokerDataSetWriterTransportDataType;
BrokerDataSetWriterTransportDataType.schema.encodingDefaultBinary = BrokerDataSetWriterTransportDataType.encodingDefaultBinary;
BrokerDataSetWriterTransportDataType.schema.encodingDefaultXml = BrokerDataSetWriterTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrokerDataSetWriterTransportDataType", BrokerDataSetWriterTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaBrokerDataSetReaderTransportDataType = node_opcua_factory_1.buildStructuredType({
    name: "BrokerDataSetReaderTransportDataType",
    baseType: "DataSetReaderTransportDataType",
    fields: [
        {
            name: "queueName",
            fieldType: "UAString",
        },
        {
            name: "resourceUri",
            fieldType: "UAString",
        },
        {
            name: "authenticationProfileUri",
            fieldType: "UAString",
        },
        {
            name: "requestedDeliveryGuarantee",
            fieldType: "BrokerTransportQualityOfService",
        },
        {
            name: "metaDataQueueName",
            fieldType: "UAString",
        },
    ]
});
class BrokerDataSetReaderTransportDataType extends DataSetReaderTransportDataType {
    constructor(options) {
        super(options);
        const schema = BrokerDataSetReaderTransportDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.queueName = node_opcua_factory_1.initialize_field(schema.fields[0], options.queueName);
        this.resourceUri = node_opcua_factory_1.initialize_field(schema.fields[1], options.resourceUri);
        this.authenticationProfileUri = node_opcua_factory_1.initialize_field(schema.fields[2], options.authenticationProfileUri);
        this.requestedDeliveryGuarantee = this.setRequestedDeliveryGuarantee(node_opcua_factory_1.initialize_field(schema.fields[3], options.requestedDeliveryGuarantee));
        this.metaDataQueueName = node_opcua_factory_1.initialize_field(schema.fields[4], options.metaDataQueueName);
    }
    static get schema() { return schemaBrokerDataSetReaderTransportDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.queueName, stream);
        node_opcua_basic_types_1.encodeUAString(this.resourceUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.authenticationProfileUri, stream);
        encodeBrokerTransportQualityOfService(this.requestedDeliveryGuarantee, stream);
        node_opcua_basic_types_1.encodeUAString(this.metaDataQueueName, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.queueName = node_opcua_basic_types_1.decodeUAString(stream);
        this.resourceUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.authenticationProfileUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.requestedDeliveryGuarantee = decodeBrokerTransportQualityOfService(stream);
        this.metaDataQueueName = node_opcua_basic_types_1.decodeUAString(stream);
    }
    // Define Enumeration setters
    setRequestedDeliveryGuarantee(value) {
        const coercedValue = exports._enumerationBrokerTransportQualityOfService.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to BrokerTransportQualityOfService :" + value);
        }
        this.requestedDeliveryGuarantee = coercedValue.value;
        return this.requestedDeliveryGuarantee;
    }
    get schema() { return schemaBrokerDataSetReaderTransportDataType; }
}
BrokerDataSetReaderTransportDataType.possibleFields = [
    "queueName",
    "resourceUri",
    "authenticationProfileUri",
    "requestedDeliveryGuarantee",
    "metaDataQueueName"
];
BrokerDataSetReaderTransportDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15733, 0);
BrokerDataSetReaderTransportDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(16023, 0);
exports.BrokerDataSetReaderTransportDataType = BrokerDataSetReaderTransportDataType;
BrokerDataSetReaderTransportDataType.schema.encodingDefaultBinary = BrokerDataSetReaderTransportDataType.encodingDefaultBinary;
BrokerDataSetReaderTransportDataType.schema.encodingDefaultXml = BrokerDataSetReaderTransportDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrokerDataSetReaderTransportDataType", BrokerDataSetReaderTransportDataType);
// --------------------------------------------------------------------------------------------
const schemaReferenceNode = node_opcua_factory_1.buildStructuredType({
    name: "ReferenceNode",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "referenceTypeId",
            fieldType: "NodeId",
        },
        {
            name: "isInverse",
            fieldType: "UABoolean",
        },
        {
            name: "targetId",
            fieldType: "ExpandedNodeId",
        },
    ]
});
class ReferenceNode extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ReferenceNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.referenceTypeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.referenceTypeId);
        this.isInverse = node_opcua_factory_1.initialize_field(schema.fields[1], options.isInverse);
        this.targetId = node_opcua_factory_1.initialize_field(schema.fields[2], options.targetId);
    }
    static get schema() { return schemaReferenceNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.referenceTypeId, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isInverse, stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.targetId, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.referenceTypeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.isInverse = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.targetId = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
    }
    get schema() { return schemaReferenceNode; }
}
ReferenceNode.possibleFields = [
    "referenceTypeId",
    "isInverse",
    "targetId"
];
ReferenceNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(287, 0);
ReferenceNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(286, 0);
exports.ReferenceNode = ReferenceNode;
ReferenceNode.schema.encodingDefaultBinary = ReferenceNode.encodingDefaultBinary;
ReferenceNode.schema.encodingDefaultXml = ReferenceNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReferenceNode", ReferenceNode);
// --------------------------------------------------------------------------------------------
var NodeClass;
(function (NodeClass) {
    NodeClass[NodeClass["Unspecified"] = 0] = "Unspecified";
    NodeClass[NodeClass["Object"] = 1] = "Object";
    NodeClass[NodeClass["Variable"] = 2] = "Variable";
    NodeClass[NodeClass["Method"] = 4] = "Method";
    NodeClass[NodeClass["ObjectType"] = 8] = "ObjectType";
    NodeClass[NodeClass["VariableType"] = 16] = "VariableType";
    NodeClass[NodeClass["ReferenceType"] = 32] = "ReferenceType";
    NodeClass[NodeClass["DataType"] = 64] = "DataType";
    NodeClass[NodeClass["View"] = 128] = "View";
    NodeClass[NodeClass["Invalid"] = 4294967295] = "Invalid";
})(NodeClass = exports.NodeClass || (exports.NodeClass = {}));
const schemaNodeClass = {
    enumValues: NodeClass,
    flaggable: true,
    name: "NodeClass"
};
function decodeNodeClass(stream) {
    return stream.readUInt32();
}
function encodeNodeClass(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationNodeClass = node_opcua_factory_1.registerEnumeration(schemaNodeClass);
// --------------------------------------------------------------------------------------------
const schemaNode = node_opcua_factory_1.buildStructuredType({
    name: "Node",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "nodeId",
            fieldType: "NodeId",
        },
        {
            name: "nodeClass",
            fieldType: "NodeClass",
        },
        {
            name: "browseName",
            fieldType: "QualifiedName",
        },
        {
            name: "displayName",
            fieldType: "LocalizedText",
        },
        {
            name: "description",
            fieldType: "LocalizedText",
        },
        {
            name: "writeMask",
            fieldType: "UInt32",
        },
        {
            name: "userWriteMask",
            fieldType: "UInt32",
        },
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "accessRestrictions",
            fieldType: "UInt16",
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
    ]
});
class Node extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = Node.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
        this.nodeClass = this.setNodeClass(node_opcua_factory_1.initialize_field(schema.fields[1], options.nodeClass));
        this.browseName = node_opcua_factory_1.initialize_field(schema.fields[2], options.browseName);
        this.displayName = node_opcua_factory_1.initialize_field(schema.fields[3], options.displayName);
        this.description = node_opcua_factory_1.initialize_field(schema.fields[4], options.description);
        this.writeMask = node_opcua_factory_1.initialize_field(schema.fields[5], options.writeMask);
        this.userWriteMask = node_opcua_factory_1.initialize_field(schema.fields[6], options.userWriteMask);
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.accessRestrictions = node_opcua_factory_1.initialize_field(schema.fields[9], options.accessRestrictions);
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
    }
    static get schema() { return schemaNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.nodeId, stream);
        encodeNodeClass(this.nodeClass, stream);
        node_opcua_data_model_1.encodeQualifiedName(this.browseName, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.displayName, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.description, stream);
        node_opcua_basic_types_1.encodeUInt32(this.writeMask, stream);
        node_opcua_basic_types_1.encodeUInt32(this.userWriteMask, stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUInt16(this.accessRestrictions, stream);
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.nodeClass = decodeNodeClass(stream);
        this.browseName = node_opcua_data_model_1.decodeQualifiedName(stream);
        this.displayName = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.description = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.writeMask = node_opcua_basic_types_1.decodeUInt32(stream);
        this.userWriteMask = node_opcua_basic_types_1.decodeUInt32(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.accessRestrictions = node_opcua_basic_types_1.decodeUInt16(stream);
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
    }
    // Define Enumeration setters
    setNodeClass(value) {
        const coercedValue = exports._enumerationNodeClass.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to NodeClass :" + value);
        }
        this.nodeClass = coercedValue.value;
        return this.nodeClass;
    }
    get schema() { return schemaNode; }
}
Node.possibleFields = [
    "nodeId",
    "nodeClass",
    "browseName",
    "displayName",
    "description",
    "writeMask",
    "userWriteMask",
    "rolePermissions",
    "userRolePermissions",
    "accessRestrictions",
    "references"
];
Node.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(260, 0);
Node.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(259, 0);
exports.Node = Node;
Node.schema.encodingDefaultBinary = Node.encodingDefaultBinary;
Node.schema.encodingDefaultXml = Node.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("Node", Node);
// --------------------------------------------------------------------------------------------
const schemaInstanceNode = node_opcua_factory_1.buildStructuredType({
    name: "InstanceNode",
    baseType: "Node",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
    ]
});
class InstanceNode extends Node {
    constructor(options) {
        super(options);
        const schema = InstanceNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
    }
    static get schema() { return schemaInstanceNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaInstanceNode; }
}
InstanceNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references"
];
InstanceNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(11889, 0);
InstanceNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(11887, 0);
exports.InstanceNode = InstanceNode;
InstanceNode.schema.encodingDefaultBinary = InstanceNode.encodingDefaultBinary;
InstanceNode.schema.encodingDefaultXml = InstanceNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("InstanceNode", InstanceNode);
// --------------------------------------------------------------------------------------------
const schemaTypeNode = node_opcua_factory_1.buildStructuredType({
    name: "TypeNode",
    baseType: "Node",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
    ]
});
class TypeNode extends Node {
    constructor(options) {
        super(options);
        const schema = TypeNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
    }
    static get schema() { return schemaTypeNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaTypeNode; }
}
TypeNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references"
];
TypeNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(11890, 0);
TypeNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(11888, 0);
exports.TypeNode = TypeNode;
TypeNode.schema.encodingDefaultBinary = TypeNode.encodingDefaultBinary;
TypeNode.schema.encodingDefaultXml = TypeNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("TypeNode", TypeNode);
// --------------------------------------------------------------------------------------------
const schemaObjectNode = node_opcua_factory_1.buildStructuredType({
    name: "ObjectNode",
    baseType: "InstanceNode",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
        {
            name: "eventNotifier",
            fieldType: "Byte",
        },
    ]
});
class ObjectNode extends InstanceNode {
    constructor(options) {
        super(options);
        const schema = ObjectNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
        this.eventNotifier = node_opcua_factory_1.initialize_field(schema.fields[3], options.eventNotifier);
    }
    static get schema() { return schemaObjectNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeByte(this.eventNotifier, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
        this.eventNotifier = node_opcua_basic_types_1.decodeByte(stream);
    }
    get schema() { return schemaObjectNode; }
}
ObjectNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references",
    "eventNotifier"
];
ObjectNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(263, 0);
ObjectNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(262, 0);
exports.ObjectNode = ObjectNode;
ObjectNode.schema.encodingDefaultBinary = ObjectNode.encodingDefaultBinary;
ObjectNode.schema.encodingDefaultXml = ObjectNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ObjectNode", ObjectNode);
// --------------------------------------------------------------------------------------------
const schemaObjectTypeNode = node_opcua_factory_1.buildStructuredType({
    name: "ObjectTypeNode",
    baseType: "TypeNode",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
        {
            name: "isAbstract",
            fieldType: "UABoolean",
        },
    ]
});
class ObjectTypeNode extends TypeNode {
    constructor(options) {
        super(options);
        const schema = ObjectTypeNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
        this.isAbstract = node_opcua_factory_1.initialize_field(schema.fields[3], options.isAbstract);
    }
    static get schema() { return schemaObjectTypeNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUABoolean(this.isAbstract, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
        this.isAbstract = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaObjectTypeNode; }
}
ObjectTypeNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references",
    "isAbstract"
];
ObjectTypeNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(266, 0);
ObjectTypeNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(265, 0);
exports.ObjectTypeNode = ObjectTypeNode;
ObjectTypeNode.schema.encodingDefaultBinary = ObjectTypeNode.encodingDefaultBinary;
ObjectTypeNode.schema.encodingDefaultXml = ObjectTypeNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ObjectTypeNode", ObjectTypeNode);
// --------------------------------------------------------------------------------------------
const schemaVariableNode = node_opcua_factory_1.buildStructuredType({
    name: "VariableNode",
    baseType: "InstanceNode",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
        {
            name: "value",
            fieldType: "Variant",
        },
        {
            name: "dataType",
            fieldType: "NodeId",
        },
        {
            name: "valueRank",
            fieldType: "Int32",
        },
        {
            name: "arrayDimensions",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "accessLevel",
            fieldType: "Byte",
        },
        {
            name: "userAccessLevel",
            fieldType: "Byte",
        },
        {
            name: "minimumSamplingInterval",
            fieldType: "Double",
        },
        {
            name: "historizing",
            fieldType: "UABoolean",
        },
        {
            name: "accessLevelEx",
            fieldType: "UInt32",
        },
    ]
});
class VariableNode extends InstanceNode {
    constructor(options) {
        super(options);
        const schema = VariableNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
        this.value = node_opcua_factory_1.initialize_field(schema.fields[3], options.value);
        this.dataType = node_opcua_factory_1.initialize_field(schema.fields[4], options.dataType);
        this.valueRank = node_opcua_factory_1.initialize_field(schema.fields[5], options.valueRank);
        this.arrayDimensions = node_opcua_factory_1.initialize_field_array(schema.fields[6], options.arrayDimensions);
        this.accessLevel = node_opcua_factory_1.initialize_field(schema.fields[7], options.accessLevel);
        this.userAccessLevel = node_opcua_factory_1.initialize_field(schema.fields[8], options.userAccessLevel);
        this.minimumSamplingInterval = node_opcua_factory_1.initialize_field(schema.fields[9], options.minimumSamplingInterval);
        this.historizing = node_opcua_factory_1.initialize_field(schema.fields[10], options.historizing);
        this.accessLevelEx = node_opcua_factory_1.initialize_field(schema.fields[11], options.accessLevelEx);
    }
    static get schema() { return schemaVariableNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_variant_1.encodeVariant(this.value, stream);
        node_opcua_basic_types_1.encodeNodeId(this.dataType, stream);
        node_opcua_basic_types_1.encodeInt32(this.valueRank, stream);
        node_opcua_basic_types_1.encodeArray(this.arrayDimensions, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeByte(this.accessLevel, stream);
        node_opcua_basic_types_1.encodeByte(this.userAccessLevel, stream);
        node_opcua_basic_types_1.encodeDouble(this.minimumSamplingInterval, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.historizing, stream);
        node_opcua_basic_types_1.encodeUInt32(this.accessLevelEx, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
        this.value = node_opcua_variant_1.decodeVariant(stream);
        this.dataType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.valueRank = node_opcua_basic_types_1.decodeInt32(stream);
        this.arrayDimensions = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.accessLevel = node_opcua_basic_types_1.decodeByte(stream);
        this.userAccessLevel = node_opcua_basic_types_1.decodeByte(stream);
        this.minimumSamplingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.historizing = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.accessLevelEx = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaVariableNode; }
}
VariableNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references",
    "value",
    "dataType",
    "valueRank",
    "arrayDimensions",
    "accessLevel",
    "userAccessLevel",
    "minimumSamplingInterval",
    "historizing",
    "accessLevelEx"
];
VariableNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(269, 0);
VariableNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(268, 0);
exports.VariableNode = VariableNode;
VariableNode.schema.encodingDefaultBinary = VariableNode.encodingDefaultBinary;
VariableNode.schema.encodingDefaultXml = VariableNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("VariableNode", VariableNode);
// --------------------------------------------------------------------------------------------
const schemaVariableTypeNode = node_opcua_factory_1.buildStructuredType({
    name: "VariableTypeNode",
    baseType: "TypeNode",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
        {
            name: "value",
            fieldType: "Variant",
        },
        {
            name: "dataType",
            fieldType: "NodeId",
        },
        {
            name: "valueRank",
            fieldType: "Int32",
        },
        {
            name: "arrayDimensions",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "isAbstract",
            fieldType: "UABoolean",
        },
    ]
});
class VariableTypeNode extends TypeNode {
    constructor(options) {
        super(options);
        const schema = VariableTypeNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
        this.value = node_opcua_factory_1.initialize_field(schema.fields[3], options.value);
        this.dataType = node_opcua_factory_1.initialize_field(schema.fields[4], options.dataType);
        this.valueRank = node_opcua_factory_1.initialize_field(schema.fields[5], options.valueRank);
        this.arrayDimensions = node_opcua_factory_1.initialize_field_array(schema.fields[6], options.arrayDimensions);
        this.isAbstract = node_opcua_factory_1.initialize_field(schema.fields[7], options.isAbstract);
    }
    static get schema() { return schemaVariableTypeNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_variant_1.encodeVariant(this.value, stream);
        node_opcua_basic_types_1.encodeNodeId(this.dataType, stream);
        node_opcua_basic_types_1.encodeInt32(this.valueRank, stream);
        node_opcua_basic_types_1.encodeArray(this.arrayDimensions, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeUABoolean(this.isAbstract, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
        this.value = node_opcua_variant_1.decodeVariant(stream);
        this.dataType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.valueRank = node_opcua_basic_types_1.decodeInt32(stream);
        this.arrayDimensions = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.isAbstract = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaVariableTypeNode; }
}
VariableTypeNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references",
    "value",
    "dataType",
    "valueRank",
    "arrayDimensions",
    "isAbstract"
];
VariableTypeNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(272, 0);
VariableTypeNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(271, 0);
exports.VariableTypeNode = VariableTypeNode;
VariableTypeNode.schema.encodingDefaultBinary = VariableTypeNode.encodingDefaultBinary;
VariableTypeNode.schema.encodingDefaultXml = VariableTypeNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("VariableTypeNode", VariableTypeNode);
// --------------------------------------------------------------------------------------------
const schemaReferenceTypeNode = node_opcua_factory_1.buildStructuredType({
    name: "ReferenceTypeNode",
    baseType: "TypeNode",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
        {
            name: "isAbstract",
            fieldType: "UABoolean",
        },
        {
            name: "symmetric",
            fieldType: "UABoolean",
        },
        {
            name: "inverseName",
            fieldType: "LocalizedText",
        },
    ]
});
class ReferenceTypeNode extends TypeNode {
    constructor(options) {
        super(options);
        const schema = ReferenceTypeNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
        this.isAbstract = node_opcua_factory_1.initialize_field(schema.fields[3], options.isAbstract);
        this.symmetric = node_opcua_factory_1.initialize_field(schema.fields[4], options.symmetric);
        this.inverseName = node_opcua_factory_1.initialize_field(schema.fields[5], options.inverseName);
    }
    static get schema() { return schemaReferenceTypeNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUABoolean(this.isAbstract, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.symmetric, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.inverseName, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
        this.isAbstract = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.symmetric = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.inverseName = node_opcua_data_model_1.decodeLocalizedText(stream);
    }
    get schema() { return schemaReferenceTypeNode; }
}
ReferenceTypeNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references",
    "isAbstract",
    "symmetric",
    "inverseName"
];
ReferenceTypeNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(275, 0);
ReferenceTypeNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(274, 0);
exports.ReferenceTypeNode = ReferenceTypeNode;
ReferenceTypeNode.schema.encodingDefaultBinary = ReferenceTypeNode.encodingDefaultBinary;
ReferenceTypeNode.schema.encodingDefaultXml = ReferenceTypeNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReferenceTypeNode", ReferenceTypeNode);
// --------------------------------------------------------------------------------------------
const schemaMethodNode = node_opcua_factory_1.buildStructuredType({
    name: "MethodNode",
    baseType: "InstanceNode",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
        {
            name: "executable",
            fieldType: "UABoolean",
        },
        {
            name: "userExecutable",
            fieldType: "UABoolean",
        },
    ]
});
class MethodNode extends InstanceNode {
    constructor(options) {
        super(options);
        const schema = MethodNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
        this.executable = node_opcua_factory_1.initialize_field(schema.fields[3], options.executable);
        this.userExecutable = node_opcua_factory_1.initialize_field(schema.fields[4], options.userExecutable);
    }
    static get schema() { return schemaMethodNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUABoolean(this.executable, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.userExecutable, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
        this.executable = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.userExecutable = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaMethodNode; }
}
MethodNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references",
    "executable",
    "userExecutable"
];
MethodNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(278, 0);
MethodNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(277, 0);
exports.MethodNode = MethodNode;
MethodNode.schema.encodingDefaultBinary = MethodNode.encodingDefaultBinary;
MethodNode.schema.encodingDefaultXml = MethodNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MethodNode", MethodNode);
// --------------------------------------------------------------------------------------------
const schemaViewNode = node_opcua_factory_1.buildStructuredType({
    name: "ViewNode",
    baseType: "InstanceNode",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
        {
            name: "containsNoLoops",
            fieldType: "UABoolean",
        },
        {
            name: "eventNotifier",
            fieldType: "Byte",
        },
    ]
});
class ViewNode extends InstanceNode {
    constructor(options) {
        super(options);
        const schema = ViewNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
        this.containsNoLoops = node_opcua_factory_1.initialize_field(schema.fields[3], options.containsNoLoops);
        this.eventNotifier = node_opcua_factory_1.initialize_field(schema.fields[4], options.eventNotifier);
    }
    static get schema() { return schemaViewNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUABoolean(this.containsNoLoops, stream);
        node_opcua_basic_types_1.encodeByte(this.eventNotifier, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
        this.containsNoLoops = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.eventNotifier = node_opcua_basic_types_1.decodeByte(stream);
    }
    get schema() { return schemaViewNode; }
}
ViewNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references",
    "containsNoLoops",
    "eventNotifier"
];
ViewNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(281, 0);
ViewNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(280, 0);
exports.ViewNode = ViewNode;
ViewNode.schema.encodingDefaultBinary = ViewNode.encodingDefaultBinary;
ViewNode.schema.encodingDefaultXml = ViewNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ViewNode", ViewNode);
// --------------------------------------------------------------------------------------------
const schemaDataTypeNode = node_opcua_factory_1.buildStructuredType({
    name: "DataTypeNode",
    baseType: "TypeNode",
    fields: [
        {
            name: "rolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "userRolePermissions",
            fieldType: "RolePermissionType",
            isArray: true
        },
        {
            name: "references",
            fieldType: "ReferenceNode",
            isArray: true
        },
        {
            name: "isAbstract",
            fieldType: "UABoolean",
        },
        {
            name: "dataTypeDefinition",
            fieldType: "ExtensionObject",
        },
    ]
});
class DataTypeNode extends TypeNode {
    constructor(options) {
        super(options);
        const schema = DataTypeNode.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.rolePermissions = null; /* null array */
            this.userRolePermissions = null; /* null array */
            this.references = null; /* null array */
        }
        this.rolePermissions = []; // should default
        if (options.rolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.rolePermissions));
            this.rolePermissions = options.rolePermissions.map((e) => new RolePermissionType(e));
        }
        this.userRolePermissions = []; // should default
        if (options.userRolePermissions) {
            node_opcua_assert_1.assert(_.isArray(options.userRolePermissions));
            this.userRolePermissions = options.userRolePermissions.map((e) => new RolePermissionType(e));
        }
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceNode(e));
        }
        this.isAbstract = node_opcua_factory_1.initialize_field(schema.fields[3], options.isAbstract);
        this.dataTypeDefinition = node_opcua_factory_1.initialize_field(schema.fields[4], options.dataTypeDefinition);
    }
    static get schema() { return schemaDataTypeNode; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.rolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.userRolePermissions, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeUABoolean(this.isAbstract, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.dataTypeDefinition, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.rolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.userRolePermissions = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RolePermissionType();
            obj.decode(stream1);
            return obj;
        });
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceNode();
            obj.decode(stream1);
            return obj;
        });
        this.isAbstract = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.dataTypeDefinition = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    get schema() { return schemaDataTypeNode; }
}
DataTypeNode.possibleFields = [
    "rolePermissions",
    "userRolePermissions",
    "references",
    "isAbstract",
    "dataTypeDefinition"
];
DataTypeNode.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(284, 0);
DataTypeNode.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(283, 0);
exports.DataTypeNode = DataTypeNode;
DataTypeNode.schema.encodingDefaultBinary = DataTypeNode.encodingDefaultBinary;
DataTypeNode.schema.encodingDefaultXml = DataTypeNode.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataTypeNode", DataTypeNode);
// --------------------------------------------------------------------------------------------
const schemaArgument = node_opcua_factory_1.buildStructuredType({
    name: "Argument",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "name",
            fieldType: "UAString",
        },
        {
            name: "dataType",
            fieldType: "NodeId",
        },
        {
            name: "valueRank",
            fieldType: "Int32",
        },
        {
            name: "arrayDimensions",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "description",
            fieldType: "LocalizedText",
        },
    ]
});
class Argument extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = Argument.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.name = node_opcua_factory_1.initialize_field(schema.fields[0], options.name);
        this.dataType = node_opcua_factory_1.initialize_field(schema.fields[1], options.dataType);
        this.valueRank = node_opcua_factory_1.initialize_field(schema.fields[2], options.valueRank);
        this.arrayDimensions = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.arrayDimensions);
        this.description = node_opcua_factory_1.initialize_field(schema.fields[4], options.description);
    }
    static get schema() { return schemaArgument; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.name, stream);
        node_opcua_basic_types_1.encodeNodeId(this.dataType, stream);
        node_opcua_basic_types_1.encodeInt32(this.valueRank, stream);
        node_opcua_basic_types_1.encodeArray(this.arrayDimensions, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_data_model_1.encodeLocalizedText(this.description, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.name = node_opcua_basic_types_1.decodeUAString(stream);
        this.dataType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.valueRank = node_opcua_basic_types_1.decodeInt32(stream);
        this.arrayDimensions = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.description = node_opcua_data_model_1.decodeLocalizedText(stream);
    }
    get schema() { return schemaArgument; }
}
Argument.possibleFields = [
    "name",
    "dataType",
    "valueRank",
    "arrayDimensions",
    "description"
];
Argument.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(298, 0);
Argument.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(297, 0);
exports.Argument = Argument;
Argument.schema.encodingDefaultBinary = Argument.encodingDefaultBinary;
Argument.schema.encodingDefaultXml = Argument.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("Argument", Argument);
// --------------------------------------------------------------------------------------------
const schemaOptionSet = node_opcua_factory_1.buildStructuredType({
    name: "OptionSet",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "value",
            fieldType: "ByteString",
        },
        {
            name: "validBits",
            fieldType: "ByteString",
        },
    ]
});
class OptionSet extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = OptionSet.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.value = node_opcua_factory_1.initialize_field(schema.fields[0], options.value);
        this.validBits = node_opcua_factory_1.initialize_field(schema.fields[1], options.validBits);
    }
    static get schema() { return schemaOptionSet; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeByteString(this.value, stream);
        node_opcua_basic_types_1.encodeByteString(this.validBits, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.value = node_opcua_basic_types_1.decodeByteString(stream);
        this.validBits = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaOptionSet; }
}
OptionSet.possibleFields = [
    "value",
    "validBits"
];
OptionSet.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12765, 0);
OptionSet.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12757, 0);
exports.OptionSet = OptionSet;
OptionSet.schema.encodingDefaultBinary = OptionSet.encodingDefaultBinary;
OptionSet.schema.encodingDefaultXml = OptionSet.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("OptionSet", OptionSet);
// --------------------------------------------------------------------------------------------
const schemaUnion = node_opcua_factory_1.buildStructuredType({
    name: "Union",
    baseType: "ExtensionObject",
    fields: []
});
class Union extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = Union.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaUnion; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaUnion; }
}
Union.possibleFields = [];
Union.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12766, 0);
Union.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12758, 0);
exports.Union = Union;
Union.schema.encodingDefaultBinary = Union.encodingDefaultBinary;
Union.schema.encodingDefaultXml = Union.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("Union", Union);
// --------------------------------------------------------------------------------------------
const schemaTimeZoneDataType = node_opcua_factory_1.buildStructuredType({
    name: "TimeZoneDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "offset",
            fieldType: "Int16",
        },
        {
            name: "daylightSavingInOffset",
            fieldType: "UABoolean",
        },
    ]
});
class TimeZoneDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = TimeZoneDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.offset = node_opcua_factory_1.initialize_field(schema.fields[0], options.offset);
        this.daylightSavingInOffset = node_opcua_factory_1.initialize_field(schema.fields[1], options.daylightSavingInOffset);
    }
    static get schema() { return schemaTimeZoneDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeInt16(this.offset, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.daylightSavingInOffset, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.offset = node_opcua_basic_types_1.decodeInt16(stream);
        this.daylightSavingInOffset = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaTimeZoneDataType; }
}
TimeZoneDataType.possibleFields = [
    "offset",
    "daylightSavingInOffset"
];
TimeZoneDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(8917, 0);
TimeZoneDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(8913, 0);
exports.TimeZoneDataType = TimeZoneDataType;
TimeZoneDataType.schema.encodingDefaultBinary = TimeZoneDataType.encodingDefaultBinary;
TimeZoneDataType.schema.encodingDefaultXml = TimeZoneDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("TimeZoneDataType", TimeZoneDataType);
// --------------------------------------------------------------------------------------------
const schemaRequestHeader = node_opcua_factory_1.buildStructuredType({
    name: "RequestHeader",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "authenticationToken",
            fieldType: "NodeId",
        },
        {
            name: "timestamp",
            fieldType: "DateTime",
        },
        {
            name: "requestHandle",
            fieldType: "UInt32",
        },
        {
            name: "returnDiagnostics",
            fieldType: "UInt32",
        },
        {
            name: "auditEntryId",
            fieldType: "UAString",
        },
        {
            name: "timeoutHint",
            fieldType: "UInt32",
        },
        {
            name: "additionalHeader",
            fieldType: "ExtensionObject",
        },
    ]
});
class RequestHeader extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RequestHeader.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.authenticationToken = node_opcua_factory_1.initialize_field(schema.fields[0], options.authenticationToken);
        this.timestamp = node_opcua_factory_1.initialize_field(schema.fields[1], options.timestamp);
        this.requestHandle = node_opcua_factory_1.initialize_field(schema.fields[2], options.requestHandle);
        this.returnDiagnostics = node_opcua_factory_1.initialize_field(schema.fields[3], options.returnDiagnostics);
        this.auditEntryId = node_opcua_factory_1.initialize_field(schema.fields[4], options.auditEntryId);
        this.timeoutHint = node_opcua_factory_1.initialize_field(schema.fields[5], options.timeoutHint);
        this.additionalHeader = node_opcua_factory_1.initialize_field(schema.fields[6], options.additionalHeader);
    }
    static get schema() { return schemaRequestHeader; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.authenticationToken, stream);
        node_opcua_basic_types_1.encodeDateTime(this.timestamp, stream);
        node_opcua_basic_types_1.encodeUInt32(this.requestHandle, stream);
        node_opcua_basic_types_1.encodeUInt32(this.returnDiagnostics, stream);
        node_opcua_basic_types_1.encodeUAString(this.auditEntryId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.timeoutHint, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.additionalHeader, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.authenticationToken = node_opcua_basic_types_1.decodeNodeId(stream);
        this.timestamp = node_opcua_basic_types_1.decodeDateTime(stream);
        this.requestHandle = node_opcua_basic_types_1.decodeUInt32(stream);
        this.returnDiagnostics = node_opcua_basic_types_1.decodeUInt32(stream);
        this.auditEntryId = node_opcua_basic_types_1.decodeUAString(stream);
        this.timeoutHint = node_opcua_basic_types_1.decodeUInt32(stream);
        this.additionalHeader = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    get schema() { return schemaRequestHeader; }
}
RequestHeader.possibleFields = [
    "authenticationToken",
    "timestamp",
    "requestHandle",
    "returnDiagnostics",
    "auditEntryId",
    "timeoutHint",
    "additionalHeader"
];
RequestHeader.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(391, 0);
RequestHeader.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(390, 0);
exports.RequestHeader = RequestHeader;
RequestHeader.schema.encodingDefaultBinary = RequestHeader.encodingDefaultBinary;
RequestHeader.schema.encodingDefaultXml = RequestHeader.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RequestHeader", RequestHeader);
// --------------------------------------------------------------------------------------------
const schemaResponseHeader = node_opcua_factory_1.buildStructuredType({
    name: "ResponseHeader",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "timestamp",
            fieldType: "DateTime",
        },
        {
            name: "requestHandle",
            fieldType: "UInt32",
        },
        {
            name: "serviceResult",
            fieldType: "StatusCode",
        },
        {
            name: "serviceDiagnostics",
            fieldType: "DiagnosticInfo",
        },
        {
            name: "stringTable",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "additionalHeader",
            fieldType: "ExtensionObject",
        },
    ]
});
class ResponseHeader extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ResponseHeader.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.timestamp = node_opcua_factory_1.initialize_field(schema.fields[0], options.timestamp);
        this.requestHandle = node_opcua_factory_1.initialize_field(schema.fields[1], options.requestHandle);
        this.serviceResult = node_opcua_factory_1.initialize_field(schema.fields[2], options.serviceResult);
        this.serviceDiagnostics = node_opcua_factory_1.initialize_field(schema.fields[3], options.serviceDiagnostics);
        this.stringTable = node_opcua_factory_1.initialize_field_array(schema.fields[4], options.stringTable);
        this.additionalHeader = node_opcua_factory_1.initialize_field(schema.fields[5], options.additionalHeader);
    }
    static get schema() { return schemaResponseHeader; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDateTime(this.timestamp, stream);
        node_opcua_basic_types_1.encodeUInt32(this.requestHandle, stream);
        node_opcua_status_code_1.encodeStatusCode(this.serviceResult, stream);
        node_opcua_data_model_1.encodeDiagnosticInfo(this.serviceDiagnostics, stream);
        node_opcua_basic_types_1.encodeArray(this.stringTable, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_extension_object_1.encodeExtensionObject(this.additionalHeader, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.timestamp = node_opcua_basic_types_1.decodeDateTime(stream);
        this.requestHandle = node_opcua_basic_types_1.decodeUInt32(stream);
        this.serviceResult = node_opcua_status_code_1.decodeStatusCode(stream);
        this.serviceDiagnostics = node_opcua_data_model_1.decodeDiagnosticInfo(stream);
        this.stringTable = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.additionalHeader = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    get schema() { return schemaResponseHeader; }
}
ResponseHeader.possibleFields = [
    "timestamp",
    "requestHandle",
    "serviceResult",
    "serviceDiagnostics",
    "stringTable",
    "additionalHeader"
];
ResponseHeader.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(394, 0);
ResponseHeader.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(393, 0);
exports.ResponseHeader = ResponseHeader;
ResponseHeader.schema.encodingDefaultBinary = ResponseHeader.encodingDefaultBinary;
ResponseHeader.schema.encodingDefaultXml = ResponseHeader.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ResponseHeader", ResponseHeader);
// --------------------------------------------------------------------------------------------
const schemaServiceFault = node_opcua_factory_1.buildStructuredType({
    name: "ServiceFault",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
    ]
});
class ServiceFault extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ServiceFault.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
    }
    static get schema() { return schemaServiceFault; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
    }
    get schema() { return schemaServiceFault; }
}
ServiceFault.possibleFields = [
    "responseHeader"
];
ServiceFault.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(397, 0);
ServiceFault.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(396, 0);
exports.ServiceFault = ServiceFault;
ServiceFault.schema.encodingDefaultBinary = ServiceFault.encodingDefaultBinary;
ServiceFault.schema.encodingDefaultXml = ServiceFault.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ServiceFault", ServiceFault);
// --------------------------------------------------------------------------------------------
const schemaSessionlessInvokeRequestType = node_opcua_factory_1.buildStructuredType({
    name: "SessionlessInvokeRequestType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "urisVersion",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "namespaceUris",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "serverUris",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "localeIds",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "serviceId",
            fieldType: "UInt32",
        },
    ]
});
class SessionlessInvokeRequestType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SessionlessInvokeRequestType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.urisVersion = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.urisVersion);
        this.namespaceUris = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.namespaceUris);
        this.serverUris = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.serverUris);
        this.localeIds = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.localeIds);
        this.serviceId = node_opcua_factory_1.initialize_field(schema.fields[4], options.serviceId);
    }
    static get schema() { return schemaSessionlessInvokeRequestType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.urisVersion, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeArray(this.namespaceUris, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeArray(this.serverUris, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeArray(this.localeIds, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeUInt32(this.serviceId, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.urisVersion = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.namespaceUris = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.serverUris = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.localeIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.serviceId = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaSessionlessInvokeRequestType; }
}
SessionlessInvokeRequestType.possibleFields = [
    "urisVersion",
    "namespaceUris",
    "serverUris",
    "localeIds",
    "serviceId"
];
SessionlessInvokeRequestType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15903, 0);
SessionlessInvokeRequestType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15902, 0);
exports.SessionlessInvokeRequestType = SessionlessInvokeRequestType;
SessionlessInvokeRequestType.schema.encodingDefaultBinary = SessionlessInvokeRequestType.encodingDefaultBinary;
SessionlessInvokeRequestType.schema.encodingDefaultXml = SessionlessInvokeRequestType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SessionlessInvokeRequestType", SessionlessInvokeRequestType);
// --------------------------------------------------------------------------------------------
const schemaSessionlessInvokeResponseType = node_opcua_factory_1.buildStructuredType({
    name: "SessionlessInvokeResponseType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "namespaceUris",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "serverUris",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "serviceId",
            fieldType: "UInt32",
        },
    ]
});
class SessionlessInvokeResponseType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SessionlessInvokeResponseType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.namespaceUris = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.namespaceUris);
        this.serverUris = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.serverUris);
        this.serviceId = node_opcua_factory_1.initialize_field(schema.fields[2], options.serviceId);
    }
    static get schema() { return schemaSessionlessInvokeResponseType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.namespaceUris, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeArray(this.serverUris, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeUInt32(this.serviceId, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.namespaceUris = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.serverUris = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.serviceId = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaSessionlessInvokeResponseType; }
}
SessionlessInvokeResponseType.possibleFields = [
    "namespaceUris",
    "serverUris",
    "serviceId"
];
SessionlessInvokeResponseType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(21001, 0);
SessionlessInvokeResponseType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(21000, 0);
exports.SessionlessInvokeResponseType = SessionlessInvokeResponseType;
SessionlessInvokeResponseType.schema.encodingDefaultBinary = SessionlessInvokeResponseType.encodingDefaultBinary;
SessionlessInvokeResponseType.schema.encodingDefaultXml = SessionlessInvokeResponseType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SessionlessInvokeResponseType", SessionlessInvokeResponseType);
// --------------------------------------------------------------------------------------------
const schemaFindServersRequest = node_opcua_factory_1.buildStructuredType({
    name: "FindServersRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "endpointUrl",
            fieldType: "UAString",
        },
        {
            name: "localeIds",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "serverUris",
            fieldType: "UAString",
            isArray: true
        },
    ]
});
class FindServersRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = FindServersRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.endpointUrl = node_opcua_factory_1.initialize_field(schema.fields[1], options.endpointUrl);
        this.localeIds = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.localeIds);
        this.serverUris = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.serverUris);
    }
    static get schema() { return schemaFindServersRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.endpointUrl, stream);
        node_opcua_basic_types_1.encodeArray(this.localeIds, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeArray(this.serverUris, stream, node_opcua_basic_types_1.encodeUAString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.endpointUrl = node_opcua_basic_types_1.decodeUAString(stream);
        this.localeIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.serverUris = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
    }
    get schema() { return schemaFindServersRequest; }
}
FindServersRequest.possibleFields = [
    "requestHeader",
    "endpointUrl",
    "localeIds",
    "serverUris"
];
FindServersRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(422, 0);
FindServersRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(421, 0);
exports.FindServersRequest = FindServersRequest;
FindServersRequest.schema.encodingDefaultBinary = FindServersRequest.encodingDefaultBinary;
FindServersRequest.schema.encodingDefaultXml = FindServersRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("FindServersRequest", FindServersRequest);
// --------------------------------------------------------------------------------------------
const schemaFindServersResponse = node_opcua_factory_1.buildStructuredType({
    name: "FindServersResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "servers",
            fieldType: "ApplicationDescription",
            isArray: true
        },
    ]
});
class FindServersResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = FindServersResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.servers = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.servers = []; // should default
        if (options.servers) {
            node_opcua_assert_1.assert(_.isArray(options.servers));
            this.servers = options.servers.map((e) => new ApplicationDescription(e));
        }
    }
    static get schema() { return schemaFindServersResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.servers, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.servers = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ApplicationDescription();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaFindServersResponse; }
}
FindServersResponse.possibleFields = [
    "responseHeader",
    "servers"
];
FindServersResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(425, 0);
FindServersResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(424, 0);
exports.FindServersResponse = FindServersResponse;
FindServersResponse.schema.encodingDefaultBinary = FindServersResponse.encodingDefaultBinary;
FindServersResponse.schema.encodingDefaultXml = FindServersResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("FindServersResponse", FindServersResponse);
// --------------------------------------------------------------------------------------------
const schemaServerOnNetwork = node_opcua_factory_1.buildStructuredType({
    name: "ServerOnNetwork",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "recordId",
            fieldType: "UInt32",
        },
        {
            name: "serverName",
            fieldType: "UAString",
        },
        {
            name: "discoveryUrl",
            fieldType: "UAString",
        },
        {
            name: "serverCapabilities",
            fieldType: "UAString",
            isArray: true
        },
    ]
});
class ServerOnNetwork extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ServerOnNetwork.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.recordId = node_opcua_factory_1.initialize_field(schema.fields[0], options.recordId);
        this.serverName = node_opcua_factory_1.initialize_field(schema.fields[1], options.serverName);
        this.discoveryUrl = node_opcua_factory_1.initialize_field(schema.fields[2], options.discoveryUrl);
        this.serverCapabilities = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.serverCapabilities);
    }
    static get schema() { return schemaServerOnNetwork; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.recordId, stream);
        node_opcua_basic_types_1.encodeUAString(this.serverName, stream);
        node_opcua_basic_types_1.encodeUAString(this.discoveryUrl, stream);
        node_opcua_basic_types_1.encodeArray(this.serverCapabilities, stream, node_opcua_basic_types_1.encodeUAString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.recordId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.serverName = node_opcua_basic_types_1.decodeUAString(stream);
        this.discoveryUrl = node_opcua_basic_types_1.decodeUAString(stream);
        this.serverCapabilities = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
    }
    get schema() { return schemaServerOnNetwork; }
}
ServerOnNetwork.possibleFields = [
    "recordId",
    "serverName",
    "discoveryUrl",
    "serverCapabilities"
];
ServerOnNetwork.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12207, 0);
ServerOnNetwork.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12195, 0);
exports.ServerOnNetwork = ServerOnNetwork;
ServerOnNetwork.schema.encodingDefaultBinary = ServerOnNetwork.encodingDefaultBinary;
ServerOnNetwork.schema.encodingDefaultXml = ServerOnNetwork.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ServerOnNetwork", ServerOnNetwork);
// --------------------------------------------------------------------------------------------
const schemaFindServersOnNetworkRequest = node_opcua_factory_1.buildStructuredType({
    name: "FindServersOnNetworkRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "startingRecordId",
            fieldType: "UInt32",
        },
        {
            name: "maxRecordsToReturn",
            fieldType: "UInt32",
        },
        {
            name: "serverCapabilityFilter",
            fieldType: "UAString",
            isArray: true
        },
    ]
});
class FindServersOnNetworkRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = FindServersOnNetworkRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.startingRecordId = node_opcua_factory_1.initialize_field(schema.fields[1], options.startingRecordId);
        this.maxRecordsToReturn = node_opcua_factory_1.initialize_field(schema.fields[2], options.maxRecordsToReturn);
        this.serverCapabilityFilter = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.serverCapabilityFilter);
    }
    static get schema() { return schemaFindServersOnNetworkRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.startingRecordId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxRecordsToReturn, stream);
        node_opcua_basic_types_1.encodeArray(this.serverCapabilityFilter, stream, node_opcua_basic_types_1.encodeUAString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.startingRecordId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.maxRecordsToReturn = node_opcua_basic_types_1.decodeUInt32(stream);
        this.serverCapabilityFilter = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
    }
    get schema() { return schemaFindServersOnNetworkRequest; }
}
FindServersOnNetworkRequest.possibleFields = [
    "requestHeader",
    "startingRecordId",
    "maxRecordsToReturn",
    "serverCapabilityFilter"
];
FindServersOnNetworkRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12208, 0);
FindServersOnNetworkRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12196, 0);
exports.FindServersOnNetworkRequest = FindServersOnNetworkRequest;
FindServersOnNetworkRequest.schema.encodingDefaultBinary = FindServersOnNetworkRequest.encodingDefaultBinary;
FindServersOnNetworkRequest.schema.encodingDefaultXml = FindServersOnNetworkRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("FindServersOnNetworkRequest", FindServersOnNetworkRequest);
// --------------------------------------------------------------------------------------------
const schemaFindServersOnNetworkResponse = node_opcua_factory_1.buildStructuredType({
    name: "FindServersOnNetworkResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "lastCounterResetTime",
            fieldType: "DateTime",
        },
        {
            name: "servers",
            fieldType: "ServerOnNetwork",
            isArray: true
        },
    ]
});
class FindServersOnNetworkResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = FindServersOnNetworkResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.servers = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.lastCounterResetTime = node_opcua_factory_1.initialize_field(schema.fields[1], options.lastCounterResetTime);
        this.servers = []; // should default
        if (options.servers) {
            node_opcua_assert_1.assert(_.isArray(options.servers));
            this.servers = options.servers.map((e) => new ServerOnNetwork(e));
        }
    }
    static get schema() { return schemaFindServersOnNetworkResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeDateTime(this.lastCounterResetTime, stream);
        node_opcua_basic_types_1.encodeArray(this.servers, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.lastCounterResetTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.servers = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ServerOnNetwork();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaFindServersOnNetworkResponse; }
}
FindServersOnNetworkResponse.possibleFields = [
    "responseHeader",
    "lastCounterResetTime",
    "servers"
];
FindServersOnNetworkResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12209, 0);
FindServersOnNetworkResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12197, 0);
exports.FindServersOnNetworkResponse = FindServersOnNetworkResponse;
FindServersOnNetworkResponse.schema.encodingDefaultBinary = FindServersOnNetworkResponse.encodingDefaultBinary;
FindServersOnNetworkResponse.schema.encodingDefaultXml = FindServersOnNetworkResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("FindServersOnNetworkResponse", FindServersOnNetworkResponse);
// --------------------------------------------------------------------------------------------
const schemaGetEndpointsRequest = node_opcua_factory_1.buildStructuredType({
    name: "GetEndpointsRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "endpointUrl",
            fieldType: "UAString",
        },
        {
            name: "localeIds",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "profileUris",
            fieldType: "UAString",
            isArray: true
        },
    ]
});
class GetEndpointsRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = GetEndpointsRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.endpointUrl = node_opcua_factory_1.initialize_field(schema.fields[1], options.endpointUrl);
        this.localeIds = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.localeIds);
        this.profileUris = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.profileUris);
    }
    static get schema() { return schemaGetEndpointsRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.endpointUrl, stream);
        node_opcua_basic_types_1.encodeArray(this.localeIds, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeArray(this.profileUris, stream, node_opcua_basic_types_1.encodeUAString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.endpointUrl = node_opcua_basic_types_1.decodeUAString(stream);
        this.localeIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.profileUris = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
    }
    get schema() { return schemaGetEndpointsRequest; }
}
GetEndpointsRequest.possibleFields = [
    "requestHeader",
    "endpointUrl",
    "localeIds",
    "profileUris"
];
GetEndpointsRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(428, 0);
GetEndpointsRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(427, 0);
exports.GetEndpointsRequest = GetEndpointsRequest;
GetEndpointsRequest.schema.encodingDefaultBinary = GetEndpointsRequest.encodingDefaultBinary;
GetEndpointsRequest.schema.encodingDefaultXml = GetEndpointsRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("GetEndpointsRequest", GetEndpointsRequest);
// --------------------------------------------------------------------------------------------
const schemaGetEndpointsResponse = node_opcua_factory_1.buildStructuredType({
    name: "GetEndpointsResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "endpoints",
            fieldType: "EndpointDescription",
            isArray: true
        },
    ]
});
class GetEndpointsResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = GetEndpointsResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.endpoints = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.endpoints = []; // should default
        if (options.endpoints) {
            node_opcua_assert_1.assert(_.isArray(options.endpoints));
            this.endpoints = options.endpoints.map((e) => new EndpointDescription(e));
        }
    }
    static get schema() { return schemaGetEndpointsResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.endpoints, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.endpoints = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EndpointDescription();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaGetEndpointsResponse; }
}
GetEndpointsResponse.possibleFields = [
    "responseHeader",
    "endpoints"
];
GetEndpointsResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(431, 0);
GetEndpointsResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(430, 0);
exports.GetEndpointsResponse = GetEndpointsResponse;
GetEndpointsResponse.schema.encodingDefaultBinary = GetEndpointsResponse.encodingDefaultBinary;
GetEndpointsResponse.schema.encodingDefaultXml = GetEndpointsResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("GetEndpointsResponse", GetEndpointsResponse);
// --------------------------------------------------------------------------------------------
const schemaRegisteredServer = node_opcua_factory_1.buildStructuredType({
    name: "RegisteredServer",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "serverUri",
            fieldType: "UAString",
        },
        {
            name: "productUri",
            fieldType: "UAString",
        },
        {
            name: "serverNames",
            fieldType: "LocalizedText",
            isArray: true
        },
        {
            name: "serverType",
            fieldType: "ApplicationType",
        },
        {
            name: "gatewayServerUri",
            fieldType: "UAString",
        },
        {
            name: "discoveryUrls",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "semaphoreFilePath",
            fieldType: "UAString",
        },
        {
            name: "isOnline",
            fieldType: "UABoolean",
        },
    ]
});
class RegisteredServer extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RegisteredServer.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.serverUri = node_opcua_factory_1.initialize_field(schema.fields[0], options.serverUri);
        this.productUri = node_opcua_factory_1.initialize_field(schema.fields[1], options.productUri);
        this.serverNames = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.serverNames);
        this.serverType = this.setServerType(node_opcua_factory_1.initialize_field(schema.fields[3], options.serverType));
        this.gatewayServerUri = node_opcua_factory_1.initialize_field(schema.fields[4], options.gatewayServerUri);
        this.discoveryUrls = node_opcua_factory_1.initialize_field_array(schema.fields[5], options.discoveryUrls);
        this.semaphoreFilePath = node_opcua_factory_1.initialize_field(schema.fields[6], options.semaphoreFilePath);
        this.isOnline = node_opcua_factory_1.initialize_field(schema.fields[7], options.isOnline);
    }
    static get schema() { return schemaRegisteredServer; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.serverUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.productUri, stream);
        node_opcua_basic_types_1.encodeArray(this.serverNames, stream, node_opcua_data_model_1.encodeLocalizedText);
        encodeApplicationType(this.serverType, stream);
        node_opcua_basic_types_1.encodeUAString(this.gatewayServerUri, stream);
        node_opcua_basic_types_1.encodeArray(this.discoveryUrls, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeUAString(this.semaphoreFilePath, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isOnline, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.serverUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.productUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.serverNames = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeLocalizedText);
        this.serverType = decodeApplicationType(stream);
        this.gatewayServerUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.discoveryUrls = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.semaphoreFilePath = node_opcua_basic_types_1.decodeUAString(stream);
        this.isOnline = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    // Define Enumeration setters
    setServerType(value) {
        const coercedValue = exports._enumerationApplicationType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to ApplicationType :" + value);
        }
        this.serverType = coercedValue.value;
        return this.serverType;
    }
    get schema() { return schemaRegisteredServer; }
}
RegisteredServer.possibleFields = [
    "serverUri",
    "productUri",
    "serverNames",
    "serverType",
    "gatewayServerUri",
    "discoveryUrls",
    "semaphoreFilePath",
    "isOnline"
];
RegisteredServer.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(434, 0);
RegisteredServer.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(433, 0);
exports.RegisteredServer = RegisteredServer;
RegisteredServer.schema.encodingDefaultBinary = RegisteredServer.encodingDefaultBinary;
RegisteredServer.schema.encodingDefaultXml = RegisteredServer.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RegisteredServer", RegisteredServer);
// --------------------------------------------------------------------------------------------
const schemaRegisterServerRequest = node_opcua_factory_1.buildStructuredType({
    name: "RegisterServerRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "server",
            fieldType: "RegisteredServer",
        },
    ]
});
class RegisterServerRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RegisterServerRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.server = new RegisteredServer();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.server = new RegisteredServer(options.server);
    }
    static get schema() { return schemaRegisterServerRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        this.server.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.server.decode(stream);
    }
    get schema() { return schemaRegisterServerRequest; }
}
RegisterServerRequest.possibleFields = [
    "requestHeader",
    "server"
];
RegisterServerRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(437, 0);
RegisterServerRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(436, 0);
exports.RegisterServerRequest = RegisterServerRequest;
RegisterServerRequest.schema.encodingDefaultBinary = RegisterServerRequest.encodingDefaultBinary;
RegisterServerRequest.schema.encodingDefaultXml = RegisterServerRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RegisterServerRequest", RegisterServerRequest);
// --------------------------------------------------------------------------------------------
const schemaRegisterServerResponse = node_opcua_factory_1.buildStructuredType({
    name: "RegisterServerResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
    ]
});
class RegisterServerResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RegisterServerResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
    }
    static get schema() { return schemaRegisterServerResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
    }
    get schema() { return schemaRegisterServerResponse; }
}
RegisterServerResponse.possibleFields = [
    "responseHeader"
];
RegisterServerResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(440, 0);
RegisterServerResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(439, 0);
exports.RegisterServerResponse = RegisterServerResponse;
RegisterServerResponse.schema.encodingDefaultBinary = RegisterServerResponse.encodingDefaultBinary;
RegisterServerResponse.schema.encodingDefaultXml = RegisterServerResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RegisterServerResponse", RegisterServerResponse);
// --------------------------------------------------------------------------------------------
const schemaDiscoveryConfiguration = node_opcua_factory_1.buildStructuredType({
    name: "DiscoveryConfiguration",
    baseType: "ExtensionObject",
    fields: []
});
class DiscoveryConfiguration extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DiscoveryConfiguration.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaDiscoveryConfiguration; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaDiscoveryConfiguration; }
}
DiscoveryConfiguration.possibleFields = [];
DiscoveryConfiguration.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12900, 0);
DiscoveryConfiguration.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12892, 0);
exports.DiscoveryConfiguration = DiscoveryConfiguration;
DiscoveryConfiguration.schema.encodingDefaultBinary = DiscoveryConfiguration.encodingDefaultBinary;
DiscoveryConfiguration.schema.encodingDefaultXml = DiscoveryConfiguration.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DiscoveryConfiguration", DiscoveryConfiguration);
// --------------------------------------------------------------------------------------------
const schemaMdnsDiscoveryConfiguration = node_opcua_factory_1.buildStructuredType({
    name: "MdnsDiscoveryConfiguration",
    baseType: "DiscoveryConfiguration",
    fields: [
        {
            name: "mdnsServerName",
            fieldType: "UAString",
        },
        {
            name: "serverCapabilities",
            fieldType: "UAString",
            isArray: true
        },
    ]
});
class MdnsDiscoveryConfiguration extends DiscoveryConfiguration {
    constructor(options) {
        super(options);
        const schema = MdnsDiscoveryConfiguration.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.mdnsServerName = node_opcua_factory_1.initialize_field(schema.fields[0], options.mdnsServerName);
        this.serverCapabilities = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.serverCapabilities);
    }
    static get schema() { return schemaMdnsDiscoveryConfiguration; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.mdnsServerName, stream);
        node_opcua_basic_types_1.encodeArray(this.serverCapabilities, stream, node_opcua_basic_types_1.encodeUAString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.mdnsServerName = node_opcua_basic_types_1.decodeUAString(stream);
        this.serverCapabilities = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
    }
    get schema() { return schemaMdnsDiscoveryConfiguration; }
}
MdnsDiscoveryConfiguration.possibleFields = [
    "mdnsServerName",
    "serverCapabilities"
];
MdnsDiscoveryConfiguration.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12901, 0);
MdnsDiscoveryConfiguration.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12893, 0);
exports.MdnsDiscoveryConfiguration = MdnsDiscoveryConfiguration;
MdnsDiscoveryConfiguration.schema.encodingDefaultBinary = MdnsDiscoveryConfiguration.encodingDefaultBinary;
MdnsDiscoveryConfiguration.schema.encodingDefaultXml = MdnsDiscoveryConfiguration.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MdnsDiscoveryConfiguration", MdnsDiscoveryConfiguration);
// --------------------------------------------------------------------------------------------
const schemaRegisterServer2Request = node_opcua_factory_1.buildStructuredType({
    name: "RegisterServer2Request",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "server",
            fieldType: "RegisteredServer",
        },
        {
            name: "discoveryConfiguration",
            fieldType: "ExtensionObject",
            isArray: true
        },
    ]
});
class RegisterServer2Request extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RegisterServer2Request.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.server = new RegisteredServer();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.server = new RegisteredServer(options.server);
        this.discoveryConfiguration = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.discoveryConfiguration);
    }
    static get schema() { return schemaRegisterServer2Request; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        this.server.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.discoveryConfiguration, stream, node_opcua_extension_object_1.encodeExtensionObject);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.server.decode(stream);
        this.discoveryConfiguration = node_opcua_basic_types_1.decodeArray(stream, node_opcua_extension_object_1.decodeExtensionObject);
    }
    get schema() { return schemaRegisterServer2Request; }
}
RegisterServer2Request.possibleFields = [
    "requestHeader",
    "server",
    "discoveryConfiguration"
];
RegisterServer2Request.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12211, 0);
RegisterServer2Request.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12199, 0);
exports.RegisterServer2Request = RegisterServer2Request;
RegisterServer2Request.schema.encodingDefaultBinary = RegisterServer2Request.encodingDefaultBinary;
RegisterServer2Request.schema.encodingDefaultXml = RegisterServer2Request.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RegisterServer2Request", RegisterServer2Request);
// --------------------------------------------------------------------------------------------
const schemaRegisterServer2Response = node_opcua_factory_1.buildStructuredType({
    name: "RegisterServer2Response",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "configurationResults",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class RegisterServer2Response extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RegisterServer2Response.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.configurationResults = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.configurationResults);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaRegisterServer2Response; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.configurationResults, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.configurationResults = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaRegisterServer2Response; }
}
RegisterServer2Response.possibleFields = [
    "responseHeader",
    "configurationResults",
    "diagnosticInfos"
];
RegisterServer2Response.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12212, 0);
RegisterServer2Response.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12200, 0);
exports.RegisterServer2Response = RegisterServer2Response;
RegisterServer2Response.schema.encodingDefaultBinary = RegisterServer2Response.encodingDefaultBinary;
RegisterServer2Response.schema.encodingDefaultXml = RegisterServer2Response.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RegisterServer2Response", RegisterServer2Response);
// --------------------------------------------------------------------------------------------
const schemaChannelSecurityToken = node_opcua_factory_1.buildStructuredType({
    name: "ChannelSecurityToken",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "channelId",
            fieldType: "UInt32",
        },
        {
            name: "tokenId",
            fieldType: "UInt32",
        },
        {
            name: "createdAt",
            fieldType: "DateTime",
        },
        {
            name: "revisedLifetime",
            fieldType: "UInt32",
        },
    ]
});
class ChannelSecurityToken extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ChannelSecurityToken.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.channelId = node_opcua_factory_1.initialize_field(schema.fields[0], options.channelId);
        this.tokenId = node_opcua_factory_1.initialize_field(schema.fields[1], options.tokenId);
        this.createdAt = node_opcua_factory_1.initialize_field(schema.fields[2], options.createdAt);
        this.revisedLifetime = node_opcua_factory_1.initialize_field(schema.fields[3], options.revisedLifetime);
    }
    static get schema() { return schemaChannelSecurityToken; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.channelId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.tokenId, stream);
        node_opcua_basic_types_1.encodeDateTime(this.createdAt, stream);
        node_opcua_basic_types_1.encodeUInt32(this.revisedLifetime, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.channelId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.tokenId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.createdAt = node_opcua_basic_types_1.decodeDateTime(stream);
        this.revisedLifetime = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaChannelSecurityToken; }
}
ChannelSecurityToken.possibleFields = [
    "channelId",
    "tokenId",
    "createdAt",
    "revisedLifetime"
];
ChannelSecurityToken.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(443, 0);
ChannelSecurityToken.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(442, 0);
exports.ChannelSecurityToken = ChannelSecurityToken;
ChannelSecurityToken.schema.encodingDefaultBinary = ChannelSecurityToken.encodingDefaultBinary;
ChannelSecurityToken.schema.encodingDefaultXml = ChannelSecurityToken.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ChannelSecurityToken", ChannelSecurityToken);
// --------------------------------------------------------------------------------------------
var SecurityTokenRequestType;
(function (SecurityTokenRequestType) {
    SecurityTokenRequestType[SecurityTokenRequestType["Issue"] = 0] = "Issue";
    SecurityTokenRequestType[SecurityTokenRequestType["Renew"] = 1] = "Renew";
    SecurityTokenRequestType[SecurityTokenRequestType["Invalid"] = 4294967295] = "Invalid";
})(SecurityTokenRequestType = exports.SecurityTokenRequestType || (exports.SecurityTokenRequestType = {}));
const schemaSecurityTokenRequestType = {
    enumValues: SecurityTokenRequestType,
    flaggable: false,
    minValue: 0,
    maxValue: 1,
    name: "SecurityTokenRequestType"
};
function decodeSecurityTokenRequestType(stream) {
    let value = stream.readUInt32();
    value = (value < schemaSecurityTokenRequestType.minValue || value > schemaSecurityTokenRequestType.maxValue) ? SecurityTokenRequestType.Invalid : value;
    return value;
}
function encodeSecurityTokenRequestType(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationSecurityTokenRequestType = node_opcua_factory_1.registerEnumeration(schemaSecurityTokenRequestType);
// --------------------------------------------------------------------------------------------
const schemaOpenSecureChannelRequest = node_opcua_factory_1.buildStructuredType({
    name: "OpenSecureChannelRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "clientProtocolVersion",
            fieldType: "UInt32",
        },
        {
            name: "requestType",
            fieldType: "SecurityTokenRequestType",
        },
        {
            name: "securityMode",
            fieldType: "MessageSecurityMode",
        },
        {
            name: "clientNonce",
            fieldType: "ByteString",
        },
        {
            name: "requestedLifetime",
            fieldType: "UInt32",
        },
    ]
});
class OpenSecureChannelRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = OpenSecureChannelRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.clientProtocolVersion = node_opcua_factory_1.initialize_field(schema.fields[1], options.clientProtocolVersion);
        this.requestType = this.setRequestType(node_opcua_factory_1.initialize_field(schema.fields[2], options.requestType));
        this.securityMode = this.setSecurityMode(node_opcua_factory_1.initialize_field(schema.fields[3], options.securityMode));
        this.clientNonce = node_opcua_factory_1.initialize_field(schema.fields[4], options.clientNonce);
        this.requestedLifetime = node_opcua_factory_1.initialize_field(schema.fields[5], options.requestedLifetime);
    }
    static get schema() { return schemaOpenSecureChannelRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.clientProtocolVersion, stream);
        encodeSecurityTokenRequestType(this.requestType, stream);
        encodeMessageSecurityMode(this.securityMode, stream);
        node_opcua_basic_types_1.encodeByteString(this.clientNonce, stream);
        node_opcua_basic_types_1.encodeUInt32(this.requestedLifetime, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.clientProtocolVersion = node_opcua_basic_types_1.decodeUInt32(stream);
        this.requestType = decodeSecurityTokenRequestType(stream);
        this.securityMode = decodeMessageSecurityMode(stream);
        this.clientNonce = node_opcua_basic_types_1.decodeByteString(stream);
        this.requestedLifetime = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    // Define Enumeration setters
    setRequestType(value) {
        const coercedValue = exports._enumerationSecurityTokenRequestType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to SecurityTokenRequestType :" + value);
        }
        this.requestType = coercedValue.value;
        return this.requestType;
    }
    setSecurityMode(value) {
        const coercedValue = exports._enumerationMessageSecurityMode.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to MessageSecurityMode :" + value);
        }
        this.securityMode = coercedValue.value;
        return this.securityMode;
    }
    get schema() { return schemaOpenSecureChannelRequest; }
}
OpenSecureChannelRequest.possibleFields = [
    "requestHeader",
    "clientProtocolVersion",
    "requestType",
    "securityMode",
    "clientNonce",
    "requestedLifetime"
];
OpenSecureChannelRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(446, 0);
OpenSecureChannelRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(445, 0);
exports.OpenSecureChannelRequest = OpenSecureChannelRequest;
OpenSecureChannelRequest.schema.encodingDefaultBinary = OpenSecureChannelRequest.encodingDefaultBinary;
OpenSecureChannelRequest.schema.encodingDefaultXml = OpenSecureChannelRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("OpenSecureChannelRequest", OpenSecureChannelRequest);
// --------------------------------------------------------------------------------------------
const schemaOpenSecureChannelResponse = node_opcua_factory_1.buildStructuredType({
    name: "OpenSecureChannelResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "serverProtocolVersion",
            fieldType: "UInt32",
        },
        {
            name: "securityToken",
            fieldType: "ChannelSecurityToken",
        },
        {
            name: "serverNonce",
            fieldType: "ByteString",
        },
    ]
});
class OpenSecureChannelResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = OpenSecureChannelResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.securityToken = new ChannelSecurityToken();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.serverProtocolVersion = node_opcua_factory_1.initialize_field(schema.fields[1], options.serverProtocolVersion);
        this.securityToken = new ChannelSecurityToken(options.securityToken);
        this.serverNonce = node_opcua_factory_1.initialize_field(schema.fields[3], options.serverNonce);
    }
    static get schema() { return schemaOpenSecureChannelResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.serverProtocolVersion, stream);
        this.securityToken.encode(stream);
        node_opcua_basic_types_1.encodeByteString(this.serverNonce, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.serverProtocolVersion = node_opcua_basic_types_1.decodeUInt32(stream);
        this.securityToken.decode(stream);
        this.serverNonce = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaOpenSecureChannelResponse; }
}
OpenSecureChannelResponse.possibleFields = [
    "responseHeader",
    "serverProtocolVersion",
    "securityToken",
    "serverNonce"
];
OpenSecureChannelResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(449, 0);
OpenSecureChannelResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(448, 0);
exports.OpenSecureChannelResponse = OpenSecureChannelResponse;
OpenSecureChannelResponse.schema.encodingDefaultBinary = OpenSecureChannelResponse.encodingDefaultBinary;
OpenSecureChannelResponse.schema.encodingDefaultXml = OpenSecureChannelResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("OpenSecureChannelResponse", OpenSecureChannelResponse);
// --------------------------------------------------------------------------------------------
const schemaCloseSecureChannelRequest = node_opcua_factory_1.buildStructuredType({
    name: "CloseSecureChannelRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
    ]
});
class CloseSecureChannelRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CloseSecureChannelRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
    }
    static get schema() { return schemaCloseSecureChannelRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
    }
    get schema() { return schemaCloseSecureChannelRequest; }
}
CloseSecureChannelRequest.possibleFields = [
    "requestHeader"
];
CloseSecureChannelRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(452, 0);
CloseSecureChannelRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(451, 0);
exports.CloseSecureChannelRequest = CloseSecureChannelRequest;
CloseSecureChannelRequest.schema.encodingDefaultBinary = CloseSecureChannelRequest.encodingDefaultBinary;
CloseSecureChannelRequest.schema.encodingDefaultXml = CloseSecureChannelRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CloseSecureChannelRequest", CloseSecureChannelRequest);
// --------------------------------------------------------------------------------------------
const schemaCloseSecureChannelResponse = node_opcua_factory_1.buildStructuredType({
    name: "CloseSecureChannelResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
    ]
});
class CloseSecureChannelResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CloseSecureChannelResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
    }
    static get schema() { return schemaCloseSecureChannelResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
    }
    get schema() { return schemaCloseSecureChannelResponse; }
}
CloseSecureChannelResponse.possibleFields = [
    "responseHeader"
];
CloseSecureChannelResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(455, 0);
CloseSecureChannelResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(454, 0);
exports.CloseSecureChannelResponse = CloseSecureChannelResponse;
CloseSecureChannelResponse.schema.encodingDefaultBinary = CloseSecureChannelResponse.encodingDefaultBinary;
CloseSecureChannelResponse.schema.encodingDefaultXml = CloseSecureChannelResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CloseSecureChannelResponse", CloseSecureChannelResponse);
// --------------------------------------------------------------------------------------------
const schemaSignedSoftwareCertificate = node_opcua_factory_1.buildStructuredType({
    name: "SignedSoftwareCertificate",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "certificateData",
            fieldType: "ByteString",
        },
        {
            name: "signature",
            fieldType: "ByteString",
        },
    ]
});
class SignedSoftwareCertificate extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SignedSoftwareCertificate.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.certificateData = node_opcua_factory_1.initialize_field(schema.fields[0], options.certificateData);
        this.signature = node_opcua_factory_1.initialize_field(schema.fields[1], options.signature);
    }
    static get schema() { return schemaSignedSoftwareCertificate; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeByteString(this.certificateData, stream);
        node_opcua_basic_types_1.encodeByteString(this.signature, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.certificateData = node_opcua_basic_types_1.decodeByteString(stream);
        this.signature = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaSignedSoftwareCertificate; }
}
SignedSoftwareCertificate.possibleFields = [
    "certificateData",
    "signature"
];
SignedSoftwareCertificate.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(346, 0);
SignedSoftwareCertificate.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(345, 0);
exports.SignedSoftwareCertificate = SignedSoftwareCertificate;
SignedSoftwareCertificate.schema.encodingDefaultBinary = SignedSoftwareCertificate.encodingDefaultBinary;
SignedSoftwareCertificate.schema.encodingDefaultXml = SignedSoftwareCertificate.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SignedSoftwareCertificate", SignedSoftwareCertificate);
// --------------------------------------------------------------------------------------------
const schemaSignatureData = node_opcua_factory_1.buildStructuredType({
    name: "SignatureData",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "algorithm",
            fieldType: "UAString",
        },
        {
            name: "signature",
            fieldType: "ByteString",
        },
    ]
});
class SignatureData extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SignatureData.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.algorithm = node_opcua_factory_1.initialize_field(schema.fields[0], options.algorithm);
        this.signature = node_opcua_factory_1.initialize_field(schema.fields[1], options.signature);
    }
    static get schema() { return schemaSignatureData; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.algorithm, stream);
        node_opcua_basic_types_1.encodeByteString(this.signature, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.algorithm = node_opcua_basic_types_1.decodeUAString(stream);
        this.signature = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaSignatureData; }
}
SignatureData.possibleFields = [
    "algorithm",
    "signature"
];
SignatureData.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(458, 0);
SignatureData.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(457, 0);
exports.SignatureData = SignatureData;
SignatureData.schema.encodingDefaultBinary = SignatureData.encodingDefaultBinary;
SignatureData.schema.encodingDefaultXml = SignatureData.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SignatureData", SignatureData);
// --------------------------------------------------------------------------------------------
const schemaCreateSessionRequest = node_opcua_factory_1.buildStructuredType({
    name: "CreateSessionRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "clientDescription",
            fieldType: "ApplicationDescription",
        },
        {
            name: "serverUri",
            fieldType: "UAString",
        },
        {
            name: "endpointUrl",
            fieldType: "UAString",
        },
        {
            name: "sessionName",
            fieldType: "UAString",
        },
        {
            name: "clientNonce",
            fieldType: "ByteString",
        },
        {
            name: "clientCertificate",
            fieldType: "ByteString",
        },
        {
            name: "requestedSessionTimeout",
            fieldType: "Double",
        },
        {
            name: "maxResponseMessageSize",
            fieldType: "UInt32",
        },
    ]
});
class CreateSessionRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CreateSessionRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.clientDescription = new ApplicationDescription();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.clientDescription = new ApplicationDescription(options.clientDescription);
        this.serverUri = node_opcua_factory_1.initialize_field(schema.fields[2], options.serverUri);
        this.endpointUrl = node_opcua_factory_1.initialize_field(schema.fields[3], options.endpointUrl);
        this.sessionName = node_opcua_factory_1.initialize_field(schema.fields[4], options.sessionName);
        this.clientNonce = node_opcua_factory_1.initialize_field(schema.fields[5], options.clientNonce);
        this.clientCertificate = node_opcua_factory_1.initialize_field(schema.fields[6], options.clientCertificate);
        this.requestedSessionTimeout = node_opcua_factory_1.initialize_field(schema.fields[7], options.requestedSessionTimeout);
        this.maxResponseMessageSize = node_opcua_factory_1.initialize_field(schema.fields[8], options.maxResponseMessageSize);
    }
    static get schema() { return schemaCreateSessionRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        this.clientDescription.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.serverUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.endpointUrl, stream);
        node_opcua_basic_types_1.encodeUAString(this.sessionName, stream);
        node_opcua_basic_types_1.encodeByteString(this.clientNonce, stream);
        node_opcua_basic_types_1.encodeByteString(this.clientCertificate, stream);
        node_opcua_basic_types_1.encodeDouble(this.requestedSessionTimeout, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxResponseMessageSize, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.clientDescription.decode(stream);
        this.serverUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.endpointUrl = node_opcua_basic_types_1.decodeUAString(stream);
        this.sessionName = node_opcua_basic_types_1.decodeUAString(stream);
        this.clientNonce = node_opcua_basic_types_1.decodeByteString(stream);
        this.clientCertificate = node_opcua_basic_types_1.decodeByteString(stream);
        this.requestedSessionTimeout = node_opcua_basic_types_1.decodeDouble(stream);
        this.maxResponseMessageSize = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaCreateSessionRequest; }
}
CreateSessionRequest.possibleFields = [
    "requestHeader",
    "clientDescription",
    "serverUri",
    "endpointUrl",
    "sessionName",
    "clientNonce",
    "clientCertificate",
    "requestedSessionTimeout",
    "maxResponseMessageSize"
];
CreateSessionRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(461, 0);
CreateSessionRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(460, 0);
exports.CreateSessionRequest = CreateSessionRequest;
CreateSessionRequest.schema.encodingDefaultBinary = CreateSessionRequest.encodingDefaultBinary;
CreateSessionRequest.schema.encodingDefaultXml = CreateSessionRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CreateSessionRequest", CreateSessionRequest);
// --------------------------------------------------------------------------------------------
const schemaCreateSessionResponse = node_opcua_factory_1.buildStructuredType({
    name: "CreateSessionResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "sessionId",
            fieldType: "NodeId",
        },
        {
            name: "authenticationToken",
            fieldType: "NodeId",
        },
        {
            name: "revisedSessionTimeout",
            fieldType: "Double",
        },
        {
            name: "serverNonce",
            fieldType: "ByteString",
        },
        {
            name: "serverCertificate",
            fieldType: "ByteString",
        },
        {
            name: "serverEndpoints",
            fieldType: "EndpointDescription",
            isArray: true
        },
        {
            name: "serverSoftwareCertificates",
            fieldType: "SignedSoftwareCertificate",
            isArray: true
        },
        {
            name: "serverSignature",
            fieldType: "SignatureData",
        },
        {
            name: "maxRequestMessageSize",
            fieldType: "UInt32",
        },
    ]
});
class CreateSessionResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CreateSessionResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.serverEndpoints = null; /* null array */
            this.serverSoftwareCertificates = null; /* null array */
            this.serverSignature = new SignatureData();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.sessionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.sessionId);
        this.authenticationToken = node_opcua_factory_1.initialize_field(schema.fields[2], options.authenticationToken);
        this.revisedSessionTimeout = node_opcua_factory_1.initialize_field(schema.fields[3], options.revisedSessionTimeout);
        this.serverNonce = node_opcua_factory_1.initialize_field(schema.fields[4], options.serverNonce);
        this.serverCertificate = node_opcua_factory_1.initialize_field(schema.fields[5], options.serverCertificate);
        this.serverEndpoints = []; // should default
        if (options.serverEndpoints) {
            node_opcua_assert_1.assert(_.isArray(options.serverEndpoints));
            this.serverEndpoints = options.serverEndpoints.map((e) => new EndpointDescription(e));
        }
        this.serverSoftwareCertificates = []; // should default
        if (options.serverSoftwareCertificates) {
            node_opcua_assert_1.assert(_.isArray(options.serverSoftwareCertificates));
            this.serverSoftwareCertificates = options.serverSoftwareCertificates.map((e) => new SignedSoftwareCertificate(e));
        }
        this.serverSignature = new SignatureData(options.serverSignature);
        this.maxRequestMessageSize = node_opcua_factory_1.initialize_field(schema.fields[9], options.maxRequestMessageSize);
    }
    static get schema() { return schemaCreateSessionResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.sessionId, stream);
        node_opcua_basic_types_1.encodeNodeId(this.authenticationToken, stream);
        node_opcua_basic_types_1.encodeDouble(this.revisedSessionTimeout, stream);
        node_opcua_basic_types_1.encodeByteString(this.serverNonce, stream);
        node_opcua_basic_types_1.encodeByteString(this.serverCertificate, stream);
        node_opcua_basic_types_1.encodeArray(this.serverEndpoints, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.serverSoftwareCertificates, stream, (obj, stream1) => { obj.encode(stream1); });
        this.serverSignature.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxRequestMessageSize, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.sessionId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.authenticationToken = node_opcua_basic_types_1.decodeNodeId(stream);
        this.revisedSessionTimeout = node_opcua_basic_types_1.decodeDouble(stream);
        this.serverNonce = node_opcua_basic_types_1.decodeByteString(stream);
        this.serverCertificate = node_opcua_basic_types_1.decodeByteString(stream);
        this.serverEndpoints = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EndpointDescription();
            obj.decode(stream1);
            return obj;
        });
        this.serverSoftwareCertificates = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new SignedSoftwareCertificate();
            obj.decode(stream1);
            return obj;
        });
        this.serverSignature.decode(stream);
        this.maxRequestMessageSize = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaCreateSessionResponse; }
}
CreateSessionResponse.possibleFields = [
    "responseHeader",
    "sessionId",
    "authenticationToken",
    "revisedSessionTimeout",
    "serverNonce",
    "serverCertificate",
    "serverEndpoints",
    "serverSoftwareCertificates",
    "serverSignature",
    "maxRequestMessageSize"
];
CreateSessionResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(464, 0);
CreateSessionResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(463, 0);
exports.CreateSessionResponse = CreateSessionResponse;
CreateSessionResponse.schema.encodingDefaultBinary = CreateSessionResponse.encodingDefaultBinary;
CreateSessionResponse.schema.encodingDefaultXml = CreateSessionResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CreateSessionResponse", CreateSessionResponse);
// --------------------------------------------------------------------------------------------
const schemaUserIdentityToken = node_opcua_factory_1.buildStructuredType({
    name: "UserIdentityToken",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "policyId",
            fieldType: "UAString",
        },
    ]
});
class UserIdentityToken extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = UserIdentityToken.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.policyId = node_opcua_factory_1.initialize_field(schema.fields[0], options.policyId);
    }
    static get schema() { return schemaUserIdentityToken; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.policyId, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.policyId = node_opcua_basic_types_1.decodeUAString(stream);
    }
    get schema() { return schemaUserIdentityToken; }
}
UserIdentityToken.possibleFields = [
    "policyId"
];
UserIdentityToken.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(318, 0);
UserIdentityToken.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(317, 0);
exports.UserIdentityToken = UserIdentityToken;
UserIdentityToken.schema.encodingDefaultBinary = UserIdentityToken.encodingDefaultBinary;
UserIdentityToken.schema.encodingDefaultXml = UserIdentityToken.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UserIdentityToken", UserIdentityToken);
// --------------------------------------------------------------------------------------------
const schemaAnonymousIdentityToken = node_opcua_factory_1.buildStructuredType({
    name: "AnonymousIdentityToken",
    baseType: "UserIdentityToken",
    fields: []
});
class AnonymousIdentityToken extends UserIdentityToken {
    constructor(options) {
        super(options);
        const schema = AnonymousIdentityToken.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaAnonymousIdentityToken; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaAnonymousIdentityToken; }
}
AnonymousIdentityToken.possibleFields = [];
AnonymousIdentityToken.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(321, 0);
AnonymousIdentityToken.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(320, 0);
exports.AnonymousIdentityToken = AnonymousIdentityToken;
AnonymousIdentityToken.schema.encodingDefaultBinary = AnonymousIdentityToken.encodingDefaultBinary;
AnonymousIdentityToken.schema.encodingDefaultXml = AnonymousIdentityToken.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AnonymousIdentityToken", AnonymousIdentityToken);
// --------------------------------------------------------------------------------------------
const schemaUserNameIdentityToken = node_opcua_factory_1.buildStructuredType({
    name: "UserNameIdentityToken",
    baseType: "UserIdentityToken",
    fields: [
        {
            name: "userName",
            fieldType: "UAString",
        },
        {
            name: "password",
            fieldType: "ByteString",
        },
        {
            name: "encryptionAlgorithm",
            fieldType: "UAString",
        },
    ]
});
class UserNameIdentityToken extends UserIdentityToken {
    constructor(options) {
        super(options);
        const schema = UserNameIdentityToken.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.userName = node_opcua_factory_1.initialize_field(schema.fields[0], options.userName);
        this.password = node_opcua_factory_1.initialize_field(schema.fields[1], options.password);
        this.encryptionAlgorithm = node_opcua_factory_1.initialize_field(schema.fields[2], options.encryptionAlgorithm);
    }
    static get schema() { return schemaUserNameIdentityToken; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.userName, stream);
        node_opcua_basic_types_1.encodeByteString(this.password, stream);
        node_opcua_basic_types_1.encodeUAString(this.encryptionAlgorithm, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.userName = node_opcua_basic_types_1.decodeUAString(stream);
        this.password = node_opcua_basic_types_1.decodeByteString(stream);
        this.encryptionAlgorithm = node_opcua_basic_types_1.decodeUAString(stream);
    }
    get schema() { return schemaUserNameIdentityToken; }
}
UserNameIdentityToken.possibleFields = [
    "userName",
    "password",
    "encryptionAlgorithm"
];
UserNameIdentityToken.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(324, 0);
UserNameIdentityToken.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(323, 0);
exports.UserNameIdentityToken = UserNameIdentityToken;
UserNameIdentityToken.schema.encodingDefaultBinary = UserNameIdentityToken.encodingDefaultBinary;
UserNameIdentityToken.schema.encodingDefaultXml = UserNameIdentityToken.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UserNameIdentityToken", UserNameIdentityToken);
// --------------------------------------------------------------------------------------------
const schemaX509IdentityToken = node_opcua_factory_1.buildStructuredType({
    name: "X509IdentityToken",
    baseType: "UserIdentityToken",
    fields: [
        {
            name: "certificateData",
            fieldType: "ByteString",
        },
    ]
});
class X509IdentityToken extends UserIdentityToken {
    constructor(options) {
        super(options);
        const schema = X509IdentityToken.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.certificateData = node_opcua_factory_1.initialize_field(schema.fields[0], options.certificateData);
    }
    static get schema() { return schemaX509IdentityToken; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeByteString(this.certificateData, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.certificateData = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaX509IdentityToken; }
}
X509IdentityToken.possibleFields = [
    "certificateData"
];
X509IdentityToken.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(327, 0);
X509IdentityToken.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(326, 0);
exports.X509IdentityToken = X509IdentityToken;
X509IdentityToken.schema.encodingDefaultBinary = X509IdentityToken.encodingDefaultBinary;
X509IdentityToken.schema.encodingDefaultXml = X509IdentityToken.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("X509IdentityToken", X509IdentityToken);
// --------------------------------------------------------------------------------------------
const schemaIssuedIdentityToken = node_opcua_factory_1.buildStructuredType({
    name: "IssuedIdentityToken",
    baseType: "UserIdentityToken",
    fields: [
        {
            name: "tokenData",
            fieldType: "ByteString",
        },
        {
            name: "encryptionAlgorithm",
            fieldType: "UAString",
        },
    ]
});
class IssuedIdentityToken extends UserIdentityToken {
    constructor(options) {
        super(options);
        const schema = IssuedIdentityToken.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.tokenData = node_opcua_factory_1.initialize_field(schema.fields[0], options.tokenData);
        this.encryptionAlgorithm = node_opcua_factory_1.initialize_field(schema.fields[1], options.encryptionAlgorithm);
    }
    static get schema() { return schemaIssuedIdentityToken; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeByteString(this.tokenData, stream);
        node_opcua_basic_types_1.encodeUAString(this.encryptionAlgorithm, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.tokenData = node_opcua_basic_types_1.decodeByteString(stream);
        this.encryptionAlgorithm = node_opcua_basic_types_1.decodeUAString(stream);
    }
    get schema() { return schemaIssuedIdentityToken; }
}
IssuedIdentityToken.possibleFields = [
    "tokenData",
    "encryptionAlgorithm"
];
IssuedIdentityToken.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(940, 0);
IssuedIdentityToken.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(939, 0);
exports.IssuedIdentityToken = IssuedIdentityToken;
IssuedIdentityToken.schema.encodingDefaultBinary = IssuedIdentityToken.encodingDefaultBinary;
IssuedIdentityToken.schema.encodingDefaultXml = IssuedIdentityToken.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("IssuedIdentityToken", IssuedIdentityToken);
// --------------------------------------------------------------------------------------------
const schemaActivateSessionRequest = node_opcua_factory_1.buildStructuredType({
    name: "ActivateSessionRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "clientSignature",
            fieldType: "SignatureData",
        },
        {
            name: "clientSoftwareCertificates",
            fieldType: "SignedSoftwareCertificate",
            isArray: true
        },
        {
            name: "localeIds",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "userIdentityToken",
            fieldType: "ExtensionObject",
        },
        {
            name: "userTokenSignature",
            fieldType: "SignatureData",
        },
    ]
});
class ActivateSessionRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ActivateSessionRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.clientSignature = new SignatureData();
            this.clientSoftwareCertificates = null; /* null array */
            this.userTokenSignature = new SignatureData();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.clientSignature = new SignatureData(options.clientSignature);
        this.clientSoftwareCertificates = []; // should default
        if (options.clientSoftwareCertificates) {
            node_opcua_assert_1.assert(_.isArray(options.clientSoftwareCertificates));
            this.clientSoftwareCertificates = options.clientSoftwareCertificates.map((e) => new SignedSoftwareCertificate(e));
        }
        this.localeIds = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.localeIds);
        this.userIdentityToken = node_opcua_factory_1.initialize_field(schema.fields[4], options.userIdentityToken);
        this.userTokenSignature = new SignatureData(options.userTokenSignature);
    }
    static get schema() { return schemaActivateSessionRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        this.clientSignature.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.clientSoftwareCertificates, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.localeIds, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_extension_object_1.encodeExtensionObject(this.userIdentityToken, stream);
        this.userTokenSignature.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.clientSignature.decode(stream);
        this.clientSoftwareCertificates = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new SignedSoftwareCertificate();
            obj.decode(stream1);
            return obj;
        });
        this.localeIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.userIdentityToken = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.userTokenSignature.decode(stream);
    }
    get schema() { return schemaActivateSessionRequest; }
}
ActivateSessionRequest.possibleFields = [
    "requestHeader",
    "clientSignature",
    "clientSoftwareCertificates",
    "localeIds",
    "userIdentityToken",
    "userTokenSignature"
];
ActivateSessionRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(467, 0);
ActivateSessionRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(466, 0);
exports.ActivateSessionRequest = ActivateSessionRequest;
ActivateSessionRequest.schema.encodingDefaultBinary = ActivateSessionRequest.encodingDefaultBinary;
ActivateSessionRequest.schema.encodingDefaultXml = ActivateSessionRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ActivateSessionRequest", ActivateSessionRequest);
// --------------------------------------------------------------------------------------------
const schemaActivateSessionResponse = node_opcua_factory_1.buildStructuredType({
    name: "ActivateSessionResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "serverNonce",
            fieldType: "ByteString",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class ActivateSessionResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ActivateSessionResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.serverNonce = node_opcua_factory_1.initialize_field(schema.fields[1], options.serverNonce);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.diagnosticInfos);
    }
    static get schema() { return schemaActivateSessionResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeByteString(this.serverNonce, stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.serverNonce = node_opcua_basic_types_1.decodeByteString(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaActivateSessionResponse; }
}
ActivateSessionResponse.possibleFields = [
    "responseHeader",
    "serverNonce",
    "results",
    "diagnosticInfos"
];
ActivateSessionResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(470, 0);
ActivateSessionResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(469, 0);
exports.ActivateSessionResponse = ActivateSessionResponse;
ActivateSessionResponse.schema.encodingDefaultBinary = ActivateSessionResponse.encodingDefaultBinary;
ActivateSessionResponse.schema.encodingDefaultXml = ActivateSessionResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ActivateSessionResponse", ActivateSessionResponse);
// --------------------------------------------------------------------------------------------
const schemaCloseSessionRequest = node_opcua_factory_1.buildStructuredType({
    name: "CloseSessionRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "deleteSubscriptions",
            fieldType: "UABoolean",
        },
    ]
});
class CloseSessionRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CloseSessionRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.deleteSubscriptions = node_opcua_factory_1.initialize_field(schema.fields[1], options.deleteSubscriptions);
    }
    static get schema() { return schemaCloseSessionRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.deleteSubscriptions, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.deleteSubscriptions = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaCloseSessionRequest; }
}
CloseSessionRequest.possibleFields = [
    "requestHeader",
    "deleteSubscriptions"
];
CloseSessionRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(473, 0);
CloseSessionRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(472, 0);
exports.CloseSessionRequest = CloseSessionRequest;
CloseSessionRequest.schema.encodingDefaultBinary = CloseSessionRequest.encodingDefaultBinary;
CloseSessionRequest.schema.encodingDefaultXml = CloseSessionRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CloseSessionRequest", CloseSessionRequest);
// --------------------------------------------------------------------------------------------
const schemaCloseSessionResponse = node_opcua_factory_1.buildStructuredType({
    name: "CloseSessionResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
    ]
});
class CloseSessionResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CloseSessionResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
    }
    static get schema() { return schemaCloseSessionResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
    }
    get schema() { return schemaCloseSessionResponse; }
}
CloseSessionResponse.possibleFields = [
    "responseHeader"
];
CloseSessionResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(476, 0);
CloseSessionResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(475, 0);
exports.CloseSessionResponse = CloseSessionResponse;
CloseSessionResponse.schema.encodingDefaultBinary = CloseSessionResponse.encodingDefaultBinary;
CloseSessionResponse.schema.encodingDefaultXml = CloseSessionResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CloseSessionResponse", CloseSessionResponse);
// --------------------------------------------------------------------------------------------
const schemaCancelRequest = node_opcua_factory_1.buildStructuredType({
    name: "CancelRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "requestHandle",
            fieldType: "UInt32",
        },
    ]
});
class CancelRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CancelRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.requestHandle = node_opcua_factory_1.initialize_field(schema.fields[1], options.requestHandle);
    }
    static get schema() { return schemaCancelRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.requestHandle, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.requestHandle = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaCancelRequest; }
}
CancelRequest.possibleFields = [
    "requestHeader",
    "requestHandle"
];
CancelRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(479, 0);
CancelRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(478, 0);
exports.CancelRequest = CancelRequest;
CancelRequest.schema.encodingDefaultBinary = CancelRequest.encodingDefaultBinary;
CancelRequest.schema.encodingDefaultXml = CancelRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CancelRequest", CancelRequest);
// --------------------------------------------------------------------------------------------
const schemaCancelResponse = node_opcua_factory_1.buildStructuredType({
    name: "CancelResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "cancelCount",
            fieldType: "UInt32",
        },
    ]
});
class CancelResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CancelResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.cancelCount = node_opcua_factory_1.initialize_field(schema.fields[1], options.cancelCount);
    }
    static get schema() { return schemaCancelResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.cancelCount, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.cancelCount = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaCancelResponse; }
}
CancelResponse.possibleFields = [
    "responseHeader",
    "cancelCount"
];
CancelResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(482, 0);
CancelResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(481, 0);
exports.CancelResponse = CancelResponse;
CancelResponse.schema.encodingDefaultBinary = CancelResponse.encodingDefaultBinary;
CancelResponse.schema.encodingDefaultXml = CancelResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CancelResponse", CancelResponse);
// --------------------------------------------------------------------------------------------
const schemaNodeAttributes = node_opcua_factory_1.buildStructuredType({
    name: "NodeAttributes",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "specifiedAttributes",
            fieldType: "UInt32",
        },
        {
            name: "displayName",
            fieldType: "LocalizedText",
        },
        {
            name: "description",
            fieldType: "LocalizedText",
        },
        {
            name: "writeMask",
            fieldType: "UInt32",
        },
        {
            name: "userWriteMask",
            fieldType: "UInt32",
        },
    ]
});
class NodeAttributes extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = NodeAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.specifiedAttributes = node_opcua_factory_1.initialize_field(schema.fields[0], options.specifiedAttributes);
        this.displayName = node_opcua_factory_1.initialize_field(schema.fields[1], options.displayName);
        this.description = node_opcua_factory_1.initialize_field(schema.fields[2], options.description);
        this.writeMask = node_opcua_factory_1.initialize_field(schema.fields[3], options.writeMask);
        this.userWriteMask = node_opcua_factory_1.initialize_field(schema.fields[4], options.userWriteMask);
    }
    static get schema() { return schemaNodeAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.specifiedAttributes, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.displayName, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.description, stream);
        node_opcua_basic_types_1.encodeUInt32(this.writeMask, stream);
        node_opcua_basic_types_1.encodeUInt32(this.userWriteMask, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.specifiedAttributes = node_opcua_basic_types_1.decodeUInt32(stream);
        this.displayName = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.description = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.writeMask = node_opcua_basic_types_1.decodeUInt32(stream);
        this.userWriteMask = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaNodeAttributes; }
}
NodeAttributes.possibleFields = [
    "specifiedAttributes",
    "displayName",
    "description",
    "writeMask",
    "userWriteMask"
];
NodeAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(351, 0);
NodeAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(350, 0);
exports.NodeAttributes = NodeAttributes;
NodeAttributes.schema.encodingDefaultBinary = NodeAttributes.encodingDefaultBinary;
NodeAttributes.schema.encodingDefaultXml = NodeAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("NodeAttributes", NodeAttributes);
// --------------------------------------------------------------------------------------------
const schemaObjectAttributes = node_opcua_factory_1.buildStructuredType({
    name: "ObjectAttributes",
    baseType: "NodeAttributes",
    fields: [
        {
            name: "eventNotifier",
            fieldType: "Byte",
        },
    ]
});
class ObjectAttributes extends NodeAttributes {
    constructor(options) {
        super(options);
        const schema = ObjectAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.eventNotifier = node_opcua_factory_1.initialize_field(schema.fields[0], options.eventNotifier);
    }
    static get schema() { return schemaObjectAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeByte(this.eventNotifier, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.eventNotifier = node_opcua_basic_types_1.decodeByte(stream);
    }
    get schema() { return schemaObjectAttributes; }
}
ObjectAttributes.possibleFields = [
    "eventNotifier"
];
ObjectAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(354, 0);
ObjectAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(353, 0);
exports.ObjectAttributes = ObjectAttributes;
ObjectAttributes.schema.encodingDefaultBinary = ObjectAttributes.encodingDefaultBinary;
ObjectAttributes.schema.encodingDefaultXml = ObjectAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ObjectAttributes", ObjectAttributes);
// --------------------------------------------------------------------------------------------
const schemaVariableAttributes = node_opcua_factory_1.buildStructuredType({
    name: "VariableAttributes",
    baseType: "NodeAttributes",
    fields: [
        {
            name: "value",
            fieldType: "Variant",
        },
        {
            name: "dataType",
            fieldType: "NodeId",
        },
        {
            name: "valueRank",
            fieldType: "Int32",
        },
        {
            name: "arrayDimensions",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "accessLevel",
            fieldType: "Byte",
        },
        {
            name: "userAccessLevel",
            fieldType: "Byte",
        },
        {
            name: "minimumSamplingInterval",
            fieldType: "Double",
        },
        {
            name: "historizing",
            fieldType: "UABoolean",
        },
    ]
});
class VariableAttributes extends NodeAttributes {
    constructor(options) {
        super(options);
        const schema = VariableAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.value = node_opcua_factory_1.initialize_field(schema.fields[0], options.value);
        this.dataType = node_opcua_factory_1.initialize_field(schema.fields[1], options.dataType);
        this.valueRank = node_opcua_factory_1.initialize_field(schema.fields[2], options.valueRank);
        this.arrayDimensions = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.arrayDimensions);
        this.accessLevel = node_opcua_factory_1.initialize_field(schema.fields[4], options.accessLevel);
        this.userAccessLevel = node_opcua_factory_1.initialize_field(schema.fields[5], options.userAccessLevel);
        this.minimumSamplingInterval = node_opcua_factory_1.initialize_field(schema.fields[6], options.minimumSamplingInterval);
        this.historizing = node_opcua_factory_1.initialize_field(schema.fields[7], options.historizing);
    }
    static get schema() { return schemaVariableAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_variant_1.encodeVariant(this.value, stream);
        node_opcua_basic_types_1.encodeNodeId(this.dataType, stream);
        node_opcua_basic_types_1.encodeInt32(this.valueRank, stream);
        node_opcua_basic_types_1.encodeArray(this.arrayDimensions, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeByte(this.accessLevel, stream);
        node_opcua_basic_types_1.encodeByte(this.userAccessLevel, stream);
        node_opcua_basic_types_1.encodeDouble(this.minimumSamplingInterval, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.historizing, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.value = node_opcua_variant_1.decodeVariant(stream);
        this.dataType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.valueRank = node_opcua_basic_types_1.decodeInt32(stream);
        this.arrayDimensions = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.accessLevel = node_opcua_basic_types_1.decodeByte(stream);
        this.userAccessLevel = node_opcua_basic_types_1.decodeByte(stream);
        this.minimumSamplingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.historizing = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaVariableAttributes; }
}
VariableAttributes.possibleFields = [
    "value",
    "dataType",
    "valueRank",
    "arrayDimensions",
    "accessLevel",
    "userAccessLevel",
    "minimumSamplingInterval",
    "historizing"
];
VariableAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(357, 0);
VariableAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(356, 0);
exports.VariableAttributes = VariableAttributes;
VariableAttributes.schema.encodingDefaultBinary = VariableAttributes.encodingDefaultBinary;
VariableAttributes.schema.encodingDefaultXml = VariableAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("VariableAttributes", VariableAttributes);
// --------------------------------------------------------------------------------------------
const schemaMethodAttributes = node_opcua_factory_1.buildStructuredType({
    name: "MethodAttributes",
    baseType: "NodeAttributes",
    fields: [
        {
            name: "executable",
            fieldType: "UABoolean",
        },
        {
            name: "userExecutable",
            fieldType: "UABoolean",
        },
    ]
});
class MethodAttributes extends NodeAttributes {
    constructor(options) {
        super(options);
        const schema = MethodAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.executable = node_opcua_factory_1.initialize_field(schema.fields[0], options.executable);
        this.userExecutable = node_opcua_factory_1.initialize_field(schema.fields[1], options.userExecutable);
    }
    static get schema() { return schemaMethodAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.executable, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.userExecutable, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.executable = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.userExecutable = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaMethodAttributes; }
}
MethodAttributes.possibleFields = [
    "executable",
    "userExecutable"
];
MethodAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(360, 0);
MethodAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(359, 0);
exports.MethodAttributes = MethodAttributes;
MethodAttributes.schema.encodingDefaultBinary = MethodAttributes.encodingDefaultBinary;
MethodAttributes.schema.encodingDefaultXml = MethodAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MethodAttributes", MethodAttributes);
// --------------------------------------------------------------------------------------------
const schemaObjectTypeAttributes = node_opcua_factory_1.buildStructuredType({
    name: "ObjectTypeAttributes",
    baseType: "NodeAttributes",
    fields: [
        {
            name: "isAbstract",
            fieldType: "UABoolean",
        },
    ]
});
class ObjectTypeAttributes extends NodeAttributes {
    constructor(options) {
        super(options);
        const schema = ObjectTypeAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.isAbstract = node_opcua_factory_1.initialize_field(schema.fields[0], options.isAbstract);
    }
    static get schema() { return schemaObjectTypeAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isAbstract, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.isAbstract = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaObjectTypeAttributes; }
}
ObjectTypeAttributes.possibleFields = [
    "isAbstract"
];
ObjectTypeAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(363, 0);
ObjectTypeAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(362, 0);
exports.ObjectTypeAttributes = ObjectTypeAttributes;
ObjectTypeAttributes.schema.encodingDefaultBinary = ObjectTypeAttributes.encodingDefaultBinary;
ObjectTypeAttributes.schema.encodingDefaultXml = ObjectTypeAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ObjectTypeAttributes", ObjectTypeAttributes);
// --------------------------------------------------------------------------------------------
const schemaVariableTypeAttributes = node_opcua_factory_1.buildStructuredType({
    name: "VariableTypeAttributes",
    baseType: "NodeAttributes",
    fields: [
        {
            name: "value",
            fieldType: "Variant",
        },
        {
            name: "dataType",
            fieldType: "NodeId",
        },
        {
            name: "valueRank",
            fieldType: "Int32",
        },
        {
            name: "arrayDimensions",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "isAbstract",
            fieldType: "UABoolean",
        },
    ]
});
class VariableTypeAttributes extends NodeAttributes {
    constructor(options) {
        super(options);
        const schema = VariableTypeAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.value = node_opcua_factory_1.initialize_field(schema.fields[0], options.value);
        this.dataType = node_opcua_factory_1.initialize_field(schema.fields[1], options.dataType);
        this.valueRank = node_opcua_factory_1.initialize_field(schema.fields[2], options.valueRank);
        this.arrayDimensions = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.arrayDimensions);
        this.isAbstract = node_opcua_factory_1.initialize_field(schema.fields[4], options.isAbstract);
    }
    static get schema() { return schemaVariableTypeAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_variant_1.encodeVariant(this.value, stream);
        node_opcua_basic_types_1.encodeNodeId(this.dataType, stream);
        node_opcua_basic_types_1.encodeInt32(this.valueRank, stream);
        node_opcua_basic_types_1.encodeArray(this.arrayDimensions, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeUABoolean(this.isAbstract, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.value = node_opcua_variant_1.decodeVariant(stream);
        this.dataType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.valueRank = node_opcua_basic_types_1.decodeInt32(stream);
        this.arrayDimensions = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.isAbstract = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaVariableTypeAttributes; }
}
VariableTypeAttributes.possibleFields = [
    "value",
    "dataType",
    "valueRank",
    "arrayDimensions",
    "isAbstract"
];
VariableTypeAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(366, 0);
VariableTypeAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(365, 0);
exports.VariableTypeAttributes = VariableTypeAttributes;
VariableTypeAttributes.schema.encodingDefaultBinary = VariableTypeAttributes.encodingDefaultBinary;
VariableTypeAttributes.schema.encodingDefaultXml = VariableTypeAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("VariableTypeAttributes", VariableTypeAttributes);
// --------------------------------------------------------------------------------------------
const schemaReferenceTypeAttributes = node_opcua_factory_1.buildStructuredType({
    name: "ReferenceTypeAttributes",
    baseType: "NodeAttributes",
    fields: [
        {
            name: "isAbstract",
            fieldType: "UABoolean",
        },
        {
            name: "symmetric",
            fieldType: "UABoolean",
        },
        {
            name: "inverseName",
            fieldType: "LocalizedText",
        },
    ]
});
class ReferenceTypeAttributes extends NodeAttributes {
    constructor(options) {
        super(options);
        const schema = ReferenceTypeAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.isAbstract = node_opcua_factory_1.initialize_field(schema.fields[0], options.isAbstract);
        this.symmetric = node_opcua_factory_1.initialize_field(schema.fields[1], options.symmetric);
        this.inverseName = node_opcua_factory_1.initialize_field(schema.fields[2], options.inverseName);
    }
    static get schema() { return schemaReferenceTypeAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isAbstract, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.symmetric, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.inverseName, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.isAbstract = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.symmetric = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.inverseName = node_opcua_data_model_1.decodeLocalizedText(stream);
    }
    get schema() { return schemaReferenceTypeAttributes; }
}
ReferenceTypeAttributes.possibleFields = [
    "isAbstract",
    "symmetric",
    "inverseName"
];
ReferenceTypeAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(369, 0);
ReferenceTypeAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(368, 0);
exports.ReferenceTypeAttributes = ReferenceTypeAttributes;
ReferenceTypeAttributes.schema.encodingDefaultBinary = ReferenceTypeAttributes.encodingDefaultBinary;
ReferenceTypeAttributes.schema.encodingDefaultXml = ReferenceTypeAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReferenceTypeAttributes", ReferenceTypeAttributes);
// --------------------------------------------------------------------------------------------
const schemaDataTypeAttributes = node_opcua_factory_1.buildStructuredType({
    name: "DataTypeAttributes",
    baseType: "NodeAttributes",
    fields: [
        {
            name: "isAbstract",
            fieldType: "UABoolean",
        },
    ]
});
class DataTypeAttributes extends NodeAttributes {
    constructor(options) {
        super(options);
        const schema = DataTypeAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.isAbstract = node_opcua_factory_1.initialize_field(schema.fields[0], options.isAbstract);
    }
    static get schema() { return schemaDataTypeAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isAbstract, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.isAbstract = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaDataTypeAttributes; }
}
DataTypeAttributes.possibleFields = [
    "isAbstract"
];
DataTypeAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(372, 0);
DataTypeAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(371, 0);
exports.DataTypeAttributes = DataTypeAttributes;
DataTypeAttributes.schema.encodingDefaultBinary = DataTypeAttributes.encodingDefaultBinary;
DataTypeAttributes.schema.encodingDefaultXml = DataTypeAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataTypeAttributes", DataTypeAttributes);
// --------------------------------------------------------------------------------------------
const schemaViewAttributes = node_opcua_factory_1.buildStructuredType({
    name: "ViewAttributes",
    baseType: "NodeAttributes",
    fields: [
        {
            name: "containsNoLoops",
            fieldType: "UABoolean",
        },
        {
            name: "eventNotifier",
            fieldType: "Byte",
        },
    ]
});
class ViewAttributes extends NodeAttributes {
    constructor(options) {
        super(options);
        const schema = ViewAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.containsNoLoops = node_opcua_factory_1.initialize_field(schema.fields[0], options.containsNoLoops);
        this.eventNotifier = node_opcua_factory_1.initialize_field(schema.fields[1], options.eventNotifier);
    }
    static get schema() { return schemaViewAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.containsNoLoops, stream);
        node_opcua_basic_types_1.encodeByte(this.eventNotifier, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.containsNoLoops = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.eventNotifier = node_opcua_basic_types_1.decodeByte(stream);
    }
    get schema() { return schemaViewAttributes; }
}
ViewAttributes.possibleFields = [
    "containsNoLoops",
    "eventNotifier"
];
ViewAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(375, 0);
ViewAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(374, 0);
exports.ViewAttributes = ViewAttributes;
ViewAttributes.schema.encodingDefaultBinary = ViewAttributes.encodingDefaultBinary;
ViewAttributes.schema.encodingDefaultXml = ViewAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ViewAttributes", ViewAttributes);
// --------------------------------------------------------------------------------------------
const schemaGenericAttributeValue = node_opcua_factory_1.buildStructuredType({
    name: "GenericAttributeValue",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "attributeId",
            fieldType: "UInt32",
        },
        {
            name: "value",
            fieldType: "Variant",
        },
    ]
});
class GenericAttributeValue extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = GenericAttributeValue.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.attributeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.attributeId);
        this.value = node_opcua_factory_1.initialize_field(schema.fields[1], options.value);
    }
    static get schema() { return schemaGenericAttributeValue; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.attributeId, stream);
        node_opcua_variant_1.encodeVariant(this.value, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.attributeId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.value = node_opcua_variant_1.decodeVariant(stream);
    }
    get schema() { return schemaGenericAttributeValue; }
}
GenericAttributeValue.possibleFields = [
    "attributeId",
    "value"
];
GenericAttributeValue.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(17610, 0);
GenericAttributeValue.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(17608, 0);
exports.GenericAttributeValue = GenericAttributeValue;
GenericAttributeValue.schema.encodingDefaultBinary = GenericAttributeValue.encodingDefaultBinary;
GenericAttributeValue.schema.encodingDefaultXml = GenericAttributeValue.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("GenericAttributeValue", GenericAttributeValue);
// --------------------------------------------------------------------------------------------
const schemaGenericAttributes = node_opcua_factory_1.buildStructuredType({
    name: "GenericAttributes",
    baseType: "NodeAttributes",
    fields: [
        {
            name: "attributeValues",
            fieldType: "GenericAttributeValue",
            isArray: true
        },
    ]
});
class GenericAttributes extends NodeAttributes {
    constructor(options) {
        super(options);
        const schema = GenericAttributes.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.attributeValues = null; /* null array */
        }
        this.attributeValues = []; // should default
        if (options.attributeValues) {
            node_opcua_assert_1.assert(_.isArray(options.attributeValues));
            this.attributeValues = options.attributeValues.map((e) => new GenericAttributeValue(e));
        }
    }
    static get schema() { return schemaGenericAttributes; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.attributeValues, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.attributeValues = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new GenericAttributeValue();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaGenericAttributes; }
}
GenericAttributes.possibleFields = [
    "attributeValues"
];
GenericAttributes.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(17611, 0);
GenericAttributes.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(17609, 0);
exports.GenericAttributes = GenericAttributes;
GenericAttributes.schema.encodingDefaultBinary = GenericAttributes.encodingDefaultBinary;
GenericAttributes.schema.encodingDefaultXml = GenericAttributes.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("GenericAttributes", GenericAttributes);
// --------------------------------------------------------------------------------------------
const schemaAddNodesItem = node_opcua_factory_1.buildStructuredType({
    name: "AddNodesItem",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "parentNodeId",
            fieldType: "ExpandedNodeId",
        },
        {
            name: "referenceTypeId",
            fieldType: "NodeId",
        },
        {
            name: "requestedNewNodeId",
            fieldType: "ExpandedNodeId",
        },
        {
            name: "browseName",
            fieldType: "QualifiedName",
        },
        {
            name: "nodeClass",
            fieldType: "NodeClass",
        },
        {
            name: "nodeAttributes",
            fieldType: "ExtensionObject",
        },
        {
            name: "typeDefinition",
            fieldType: "ExpandedNodeId",
        },
    ]
});
class AddNodesItem extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AddNodesItem.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.parentNodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.parentNodeId);
        this.referenceTypeId = node_opcua_factory_1.initialize_field(schema.fields[1], options.referenceTypeId);
        this.requestedNewNodeId = node_opcua_factory_1.initialize_field(schema.fields[2], options.requestedNewNodeId);
        this.browseName = node_opcua_factory_1.initialize_field(schema.fields[3], options.browseName);
        this.nodeClass = this.setNodeClass(node_opcua_factory_1.initialize_field(schema.fields[4], options.nodeClass));
        this.nodeAttributes = node_opcua_factory_1.initialize_field(schema.fields[5], options.nodeAttributes);
        this.typeDefinition = node_opcua_factory_1.initialize_field(schema.fields[6], options.typeDefinition);
    }
    static get schema() { return schemaAddNodesItem; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.parentNodeId, stream);
        node_opcua_basic_types_1.encodeNodeId(this.referenceTypeId, stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.requestedNewNodeId, stream);
        node_opcua_data_model_1.encodeQualifiedName(this.browseName, stream);
        encodeNodeClass(this.nodeClass, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.nodeAttributes, stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.typeDefinition, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.parentNodeId = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
        this.referenceTypeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.requestedNewNodeId = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
        this.browseName = node_opcua_data_model_1.decodeQualifiedName(stream);
        this.nodeClass = decodeNodeClass(stream);
        this.nodeAttributes = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.typeDefinition = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
    }
    // Define Enumeration setters
    setNodeClass(value) {
        const coercedValue = exports._enumerationNodeClass.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to NodeClass :" + value);
        }
        this.nodeClass = coercedValue.value;
        return this.nodeClass;
    }
    get schema() { return schemaAddNodesItem; }
}
AddNodesItem.possibleFields = [
    "parentNodeId",
    "referenceTypeId",
    "requestedNewNodeId",
    "browseName",
    "nodeClass",
    "nodeAttributes",
    "typeDefinition"
];
AddNodesItem.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(378, 0);
AddNodesItem.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(377, 0);
exports.AddNodesItem = AddNodesItem;
AddNodesItem.schema.encodingDefaultBinary = AddNodesItem.encodingDefaultBinary;
AddNodesItem.schema.encodingDefaultXml = AddNodesItem.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AddNodesItem", AddNodesItem);
// --------------------------------------------------------------------------------------------
const schemaAddNodesResult = node_opcua_factory_1.buildStructuredType({
    name: "AddNodesResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "addedNodeId",
            fieldType: "NodeId",
        },
    ]
});
class AddNodesResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AddNodesResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.addedNodeId = node_opcua_factory_1.initialize_field(schema.fields[1], options.addedNodeId);
    }
    static get schema() { return schemaAddNodesResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeNodeId(this.addedNodeId, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.addedNodeId = node_opcua_basic_types_1.decodeNodeId(stream);
    }
    get schema() { return schemaAddNodesResult; }
}
AddNodesResult.possibleFields = [
    "statusCode",
    "addedNodeId"
];
AddNodesResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(485, 0);
AddNodesResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(484, 0);
exports.AddNodesResult = AddNodesResult;
AddNodesResult.schema.encodingDefaultBinary = AddNodesResult.encodingDefaultBinary;
AddNodesResult.schema.encodingDefaultXml = AddNodesResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AddNodesResult", AddNodesResult);
// --------------------------------------------------------------------------------------------
const schemaAddNodesRequest = node_opcua_factory_1.buildStructuredType({
    name: "AddNodesRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "nodesToAdd",
            fieldType: "AddNodesItem",
            isArray: true
        },
    ]
});
class AddNodesRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AddNodesRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.nodesToAdd = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.nodesToAdd = []; // should default
        if (options.nodesToAdd) {
            node_opcua_assert_1.assert(_.isArray(options.nodesToAdd));
            this.nodesToAdd = options.nodesToAdd.map((e) => new AddNodesItem(e));
        }
    }
    static get schema() { return schemaAddNodesRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.nodesToAdd, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.nodesToAdd = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new AddNodesItem();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaAddNodesRequest; }
}
AddNodesRequest.possibleFields = [
    "requestHeader",
    "nodesToAdd"
];
AddNodesRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(488, 0);
AddNodesRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(487, 0);
exports.AddNodesRequest = AddNodesRequest;
AddNodesRequest.schema.encodingDefaultBinary = AddNodesRequest.encodingDefaultBinary;
AddNodesRequest.schema.encodingDefaultXml = AddNodesRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AddNodesRequest", AddNodesRequest);
// --------------------------------------------------------------------------------------------
const schemaAddNodesResponse = node_opcua_factory_1.buildStructuredType({
    name: "AddNodesResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "AddNodesResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class AddNodesResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AddNodesResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new AddNodesResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaAddNodesResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new AddNodesResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaAddNodesResponse; }
}
AddNodesResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
AddNodesResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(491, 0);
AddNodesResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(490, 0);
exports.AddNodesResponse = AddNodesResponse;
AddNodesResponse.schema.encodingDefaultBinary = AddNodesResponse.encodingDefaultBinary;
AddNodesResponse.schema.encodingDefaultXml = AddNodesResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AddNodesResponse", AddNodesResponse);
// --------------------------------------------------------------------------------------------
const schemaAddReferencesItem = node_opcua_factory_1.buildStructuredType({
    name: "AddReferencesItem",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "sourceNodeId",
            fieldType: "NodeId",
        },
        {
            name: "referenceTypeId",
            fieldType: "NodeId",
        },
        {
            name: "isForward",
            fieldType: "UABoolean",
        },
        {
            name: "targetServerUri",
            fieldType: "UAString",
        },
        {
            name: "targetNodeId",
            fieldType: "ExpandedNodeId",
        },
        {
            name: "targetNodeClass",
            fieldType: "NodeClass",
        },
    ]
});
class AddReferencesItem extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AddReferencesItem.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.sourceNodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.sourceNodeId);
        this.referenceTypeId = node_opcua_factory_1.initialize_field(schema.fields[1], options.referenceTypeId);
        this.isForward = node_opcua_factory_1.initialize_field(schema.fields[2], options.isForward);
        this.targetServerUri = node_opcua_factory_1.initialize_field(schema.fields[3], options.targetServerUri);
        this.targetNodeId = node_opcua_factory_1.initialize_field(schema.fields[4], options.targetNodeId);
        this.targetNodeClass = this.setTargetNodeClass(node_opcua_factory_1.initialize_field(schema.fields[5], options.targetNodeClass));
    }
    static get schema() { return schemaAddReferencesItem; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.sourceNodeId, stream);
        node_opcua_basic_types_1.encodeNodeId(this.referenceTypeId, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isForward, stream);
        node_opcua_basic_types_1.encodeUAString(this.targetServerUri, stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.targetNodeId, stream);
        encodeNodeClass(this.targetNodeClass, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.sourceNodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.referenceTypeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.isForward = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.targetServerUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.targetNodeId = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
        this.targetNodeClass = decodeNodeClass(stream);
    }
    // Define Enumeration setters
    setTargetNodeClass(value) {
        const coercedValue = exports._enumerationNodeClass.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to NodeClass :" + value);
        }
        this.targetNodeClass = coercedValue.value;
        return this.targetNodeClass;
    }
    get schema() { return schemaAddReferencesItem; }
}
AddReferencesItem.possibleFields = [
    "sourceNodeId",
    "referenceTypeId",
    "isForward",
    "targetServerUri",
    "targetNodeId",
    "targetNodeClass"
];
AddReferencesItem.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(381, 0);
AddReferencesItem.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(380, 0);
exports.AddReferencesItem = AddReferencesItem;
AddReferencesItem.schema.encodingDefaultBinary = AddReferencesItem.encodingDefaultBinary;
AddReferencesItem.schema.encodingDefaultXml = AddReferencesItem.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AddReferencesItem", AddReferencesItem);
// --------------------------------------------------------------------------------------------
const schemaAddReferencesRequest = node_opcua_factory_1.buildStructuredType({
    name: "AddReferencesRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "referencesToAdd",
            fieldType: "AddReferencesItem",
            isArray: true
        },
    ]
});
class AddReferencesRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AddReferencesRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.referencesToAdd = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.referencesToAdd = []; // should default
        if (options.referencesToAdd) {
            node_opcua_assert_1.assert(_.isArray(options.referencesToAdd));
            this.referencesToAdd = options.referencesToAdd.map((e) => new AddReferencesItem(e));
        }
    }
    static get schema() { return schemaAddReferencesRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.referencesToAdd, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.referencesToAdd = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new AddReferencesItem();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaAddReferencesRequest; }
}
AddReferencesRequest.possibleFields = [
    "requestHeader",
    "referencesToAdd"
];
AddReferencesRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(494, 0);
AddReferencesRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(493, 0);
exports.AddReferencesRequest = AddReferencesRequest;
AddReferencesRequest.schema.encodingDefaultBinary = AddReferencesRequest.encodingDefaultBinary;
AddReferencesRequest.schema.encodingDefaultXml = AddReferencesRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AddReferencesRequest", AddReferencesRequest);
// --------------------------------------------------------------------------------------------
const schemaAddReferencesResponse = node_opcua_factory_1.buildStructuredType({
    name: "AddReferencesResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class AddReferencesResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AddReferencesResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaAddReferencesResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaAddReferencesResponse; }
}
AddReferencesResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
AddReferencesResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(497, 0);
AddReferencesResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(496, 0);
exports.AddReferencesResponse = AddReferencesResponse;
AddReferencesResponse.schema.encodingDefaultBinary = AddReferencesResponse.encodingDefaultBinary;
AddReferencesResponse.schema.encodingDefaultXml = AddReferencesResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AddReferencesResponse", AddReferencesResponse);
// --------------------------------------------------------------------------------------------
const schemaDeleteNodesItem = node_opcua_factory_1.buildStructuredType({
    name: "DeleteNodesItem",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "nodeId",
            fieldType: "NodeId",
        },
        {
            name: "deleteTargetReferences",
            fieldType: "UABoolean",
        },
    ]
});
class DeleteNodesItem extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteNodesItem.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
        this.deleteTargetReferences = node_opcua_factory_1.initialize_field(schema.fields[1], options.deleteTargetReferences);
    }
    static get schema() { return schemaDeleteNodesItem; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.nodeId, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.deleteTargetReferences, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.deleteTargetReferences = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaDeleteNodesItem; }
}
DeleteNodesItem.possibleFields = [
    "nodeId",
    "deleteTargetReferences"
];
DeleteNodesItem.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(384, 0);
DeleteNodesItem.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(383, 0);
exports.DeleteNodesItem = DeleteNodesItem;
DeleteNodesItem.schema.encodingDefaultBinary = DeleteNodesItem.encodingDefaultBinary;
DeleteNodesItem.schema.encodingDefaultXml = DeleteNodesItem.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteNodesItem", DeleteNodesItem);
// --------------------------------------------------------------------------------------------
const schemaDeleteNodesRequest = node_opcua_factory_1.buildStructuredType({
    name: "DeleteNodesRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "nodesToDelete",
            fieldType: "DeleteNodesItem",
            isArray: true
        },
    ]
});
class DeleteNodesRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteNodesRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.nodesToDelete = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.nodesToDelete = []; // should default
        if (options.nodesToDelete) {
            node_opcua_assert_1.assert(_.isArray(options.nodesToDelete));
            this.nodesToDelete = options.nodesToDelete.map((e) => new DeleteNodesItem(e));
        }
    }
    static get schema() { return schemaDeleteNodesRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.nodesToDelete, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.nodesToDelete = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new DeleteNodesItem();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaDeleteNodesRequest; }
}
DeleteNodesRequest.possibleFields = [
    "requestHeader",
    "nodesToDelete"
];
DeleteNodesRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(500, 0);
DeleteNodesRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(499, 0);
exports.DeleteNodesRequest = DeleteNodesRequest;
DeleteNodesRequest.schema.encodingDefaultBinary = DeleteNodesRequest.encodingDefaultBinary;
DeleteNodesRequest.schema.encodingDefaultXml = DeleteNodesRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteNodesRequest", DeleteNodesRequest);
// --------------------------------------------------------------------------------------------
const schemaDeleteNodesResponse = node_opcua_factory_1.buildStructuredType({
    name: "DeleteNodesResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class DeleteNodesResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteNodesResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaDeleteNodesResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaDeleteNodesResponse; }
}
DeleteNodesResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
DeleteNodesResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(503, 0);
DeleteNodesResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(502, 0);
exports.DeleteNodesResponse = DeleteNodesResponse;
DeleteNodesResponse.schema.encodingDefaultBinary = DeleteNodesResponse.encodingDefaultBinary;
DeleteNodesResponse.schema.encodingDefaultXml = DeleteNodesResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteNodesResponse", DeleteNodesResponse);
// --------------------------------------------------------------------------------------------
const schemaDeleteReferencesItem = node_opcua_factory_1.buildStructuredType({
    name: "DeleteReferencesItem",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "sourceNodeId",
            fieldType: "NodeId",
        },
        {
            name: "referenceTypeId",
            fieldType: "NodeId",
        },
        {
            name: "isForward",
            fieldType: "UABoolean",
        },
        {
            name: "targetNodeId",
            fieldType: "ExpandedNodeId",
        },
        {
            name: "deleteBidirectional",
            fieldType: "UABoolean",
        },
    ]
});
class DeleteReferencesItem extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteReferencesItem.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.sourceNodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.sourceNodeId);
        this.referenceTypeId = node_opcua_factory_1.initialize_field(schema.fields[1], options.referenceTypeId);
        this.isForward = node_opcua_factory_1.initialize_field(schema.fields[2], options.isForward);
        this.targetNodeId = node_opcua_factory_1.initialize_field(schema.fields[3], options.targetNodeId);
        this.deleteBidirectional = node_opcua_factory_1.initialize_field(schema.fields[4], options.deleteBidirectional);
    }
    static get schema() { return schemaDeleteReferencesItem; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.sourceNodeId, stream);
        node_opcua_basic_types_1.encodeNodeId(this.referenceTypeId, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isForward, stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.targetNodeId, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.deleteBidirectional, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.sourceNodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.referenceTypeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.isForward = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.targetNodeId = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
        this.deleteBidirectional = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaDeleteReferencesItem; }
}
DeleteReferencesItem.possibleFields = [
    "sourceNodeId",
    "referenceTypeId",
    "isForward",
    "targetNodeId",
    "deleteBidirectional"
];
DeleteReferencesItem.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(387, 0);
DeleteReferencesItem.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(386, 0);
exports.DeleteReferencesItem = DeleteReferencesItem;
DeleteReferencesItem.schema.encodingDefaultBinary = DeleteReferencesItem.encodingDefaultBinary;
DeleteReferencesItem.schema.encodingDefaultXml = DeleteReferencesItem.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteReferencesItem", DeleteReferencesItem);
// --------------------------------------------------------------------------------------------
const schemaDeleteReferencesRequest = node_opcua_factory_1.buildStructuredType({
    name: "DeleteReferencesRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "referencesToDelete",
            fieldType: "DeleteReferencesItem",
            isArray: true
        },
    ]
});
class DeleteReferencesRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteReferencesRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.referencesToDelete = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.referencesToDelete = []; // should default
        if (options.referencesToDelete) {
            node_opcua_assert_1.assert(_.isArray(options.referencesToDelete));
            this.referencesToDelete = options.referencesToDelete.map((e) => new DeleteReferencesItem(e));
        }
    }
    static get schema() { return schemaDeleteReferencesRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.referencesToDelete, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.referencesToDelete = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new DeleteReferencesItem();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaDeleteReferencesRequest; }
}
DeleteReferencesRequest.possibleFields = [
    "requestHeader",
    "referencesToDelete"
];
DeleteReferencesRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(506, 0);
DeleteReferencesRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(505, 0);
exports.DeleteReferencesRequest = DeleteReferencesRequest;
DeleteReferencesRequest.schema.encodingDefaultBinary = DeleteReferencesRequest.encodingDefaultBinary;
DeleteReferencesRequest.schema.encodingDefaultXml = DeleteReferencesRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteReferencesRequest", DeleteReferencesRequest);
// --------------------------------------------------------------------------------------------
const schemaDeleteReferencesResponse = node_opcua_factory_1.buildStructuredType({
    name: "DeleteReferencesResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class DeleteReferencesResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteReferencesResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaDeleteReferencesResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaDeleteReferencesResponse; }
}
DeleteReferencesResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
DeleteReferencesResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(509, 0);
DeleteReferencesResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(508, 0);
exports.DeleteReferencesResponse = DeleteReferencesResponse;
DeleteReferencesResponse.schema.encodingDefaultBinary = DeleteReferencesResponse.encodingDefaultBinary;
DeleteReferencesResponse.schema.encodingDefaultXml = DeleteReferencesResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteReferencesResponse", DeleteReferencesResponse);
// --------------------------------------------------------------------------------------------
const schemaViewDescription = node_opcua_factory_1.buildStructuredType({
    name: "ViewDescription",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "viewId",
            fieldType: "NodeId",
        },
        {
            name: "timestamp",
            fieldType: "DateTime",
        },
        {
            name: "viewVersion",
            fieldType: "UInt32",
        },
    ]
});
class ViewDescription extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ViewDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.viewId = node_opcua_factory_1.initialize_field(schema.fields[0], options.viewId);
        this.timestamp = node_opcua_factory_1.initialize_field(schema.fields[1], options.timestamp);
        this.viewVersion = node_opcua_factory_1.initialize_field(schema.fields[2], options.viewVersion);
    }
    static get schema() { return schemaViewDescription; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.viewId, stream);
        node_opcua_basic_types_1.encodeDateTime(this.timestamp, stream);
        node_opcua_basic_types_1.encodeUInt32(this.viewVersion, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.viewId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.timestamp = node_opcua_basic_types_1.decodeDateTime(stream);
        this.viewVersion = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaViewDescription; }
}
ViewDescription.possibleFields = [
    "viewId",
    "timestamp",
    "viewVersion"
];
ViewDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(513, 0);
ViewDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(512, 0);
exports.ViewDescription = ViewDescription;
ViewDescription.schema.encodingDefaultBinary = ViewDescription.encodingDefaultBinary;
ViewDescription.schema.encodingDefaultXml = ViewDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ViewDescription", ViewDescription);
// --------------------------------------------------------------------------------------------
const schemaBrowseDescription = node_opcua_factory_1.buildStructuredType({
    name: "BrowseDescription",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "nodeId",
            fieldType: "NodeId",
        },
        {
            name: "browseDirection",
            fieldType: "BrowseDirection",
        },
        {
            name: "referenceTypeId",
            fieldType: "NodeId",
        },
        {
            name: "includeSubtypes",
            fieldType: "UABoolean",
        },
        {
            name: "nodeClassMask",
            fieldType: "UInt32",
        },
        {
            name: "resultMask",
            fieldType: "UInt32",
        },
    ]
});
class BrowseDescription extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BrowseDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
        this.browseDirection = this.setBrowseDirection(node_opcua_factory_1.initialize_field(schema.fields[1], options.browseDirection));
        this.referenceTypeId = node_opcua_factory_1.initialize_field(schema.fields[2], options.referenceTypeId);
        this.includeSubtypes = node_opcua_factory_1.initialize_field(schema.fields[3], options.includeSubtypes);
        this.nodeClassMask = node_opcua_factory_1.initialize_field(schema.fields[4], options.nodeClassMask);
        this.resultMask = node_opcua_factory_1.initialize_field(schema.fields[5], options.resultMask);
    }
    static get schema() { return schemaBrowseDescription; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.nodeId, stream);
        node_opcua_data_model_1.encodeBrowseDirection(this.browseDirection, stream);
        node_opcua_basic_types_1.encodeNodeId(this.referenceTypeId, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.includeSubtypes, stream);
        node_opcua_basic_types_1.encodeUInt32(this.nodeClassMask, stream);
        node_opcua_basic_types_1.encodeUInt32(this.resultMask, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.browseDirection = node_opcua_data_model_1.decodeBrowseDirection(stream);
        this.referenceTypeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.includeSubtypes = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.nodeClassMask = node_opcua_basic_types_1.decodeUInt32(stream);
        this.resultMask = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    // Define Enumeration setters
    setBrowseDirection(value) {
        const coercedValue = node_opcua_data_model_1._enumerationBrowseDirection.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to BrowseDirection :" + value);
        }
        this.browseDirection = coercedValue.value;
        return this.browseDirection;
    }
    get schema() { return schemaBrowseDescription; }
}
BrowseDescription.possibleFields = [
    "nodeId",
    "browseDirection",
    "referenceTypeId",
    "includeSubtypes",
    "nodeClassMask",
    "resultMask"
];
BrowseDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(516, 0);
BrowseDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(515, 0);
exports.BrowseDescription = BrowseDescription;
BrowseDescription.schema.encodingDefaultBinary = BrowseDescription.encodingDefaultBinary;
BrowseDescription.schema.encodingDefaultXml = BrowseDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrowseDescription", BrowseDescription);
// --------------------------------------------------------------------------------------------
const schemaReferenceDescription = node_opcua_factory_1.buildStructuredType({
    name: "ReferenceDescription",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "referenceTypeId",
            fieldType: "NodeId",
        },
        {
            name: "isForward",
            fieldType: "UABoolean",
        },
        {
            name: "nodeId",
            fieldType: "ExpandedNodeId",
        },
        {
            name: "browseName",
            fieldType: "QualifiedName",
        },
        {
            name: "displayName",
            fieldType: "LocalizedText",
        },
        {
            name: "nodeClass",
            fieldType: "NodeClass",
        },
        {
            name: "typeDefinition",
            fieldType: "ExpandedNodeId",
        },
    ]
});
class ReferenceDescription extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ReferenceDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.referenceTypeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.referenceTypeId);
        this.isForward = node_opcua_factory_1.initialize_field(schema.fields[1], options.isForward);
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[2], options.nodeId);
        this.browseName = node_opcua_factory_1.initialize_field(schema.fields[3], options.browseName);
        this.displayName = node_opcua_factory_1.initialize_field(schema.fields[4], options.displayName);
        this.nodeClass = this.setNodeClass(node_opcua_factory_1.initialize_field(schema.fields[5], options.nodeClass));
        this.typeDefinition = node_opcua_factory_1.initialize_field(schema.fields[6], options.typeDefinition);
    }
    static get schema() { return schemaReferenceDescription; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.referenceTypeId, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isForward, stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.nodeId, stream);
        node_opcua_data_model_1.encodeQualifiedName(this.browseName, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.displayName, stream);
        encodeNodeClass(this.nodeClass, stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.typeDefinition, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.referenceTypeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.isForward = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.nodeId = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
        this.browseName = node_opcua_data_model_1.decodeQualifiedName(stream);
        this.displayName = node_opcua_data_model_1.decodeLocalizedText(stream);
        this.nodeClass = decodeNodeClass(stream);
        this.typeDefinition = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
    }
    // Define Enumeration setters
    setNodeClass(value) {
        const coercedValue = exports._enumerationNodeClass.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to NodeClass :" + value);
        }
        this.nodeClass = coercedValue.value;
        return this.nodeClass;
    }
    get schema() { return schemaReferenceDescription; }
}
ReferenceDescription.possibleFields = [
    "referenceTypeId",
    "isForward",
    "nodeId",
    "browseName",
    "displayName",
    "nodeClass",
    "typeDefinition"
];
ReferenceDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(520, 0);
ReferenceDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(519, 0);
exports.ReferenceDescription = ReferenceDescription;
ReferenceDescription.schema.encodingDefaultBinary = ReferenceDescription.encodingDefaultBinary;
ReferenceDescription.schema.encodingDefaultXml = ReferenceDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReferenceDescription", ReferenceDescription);
// --------------------------------------------------------------------------------------------
const schemaBrowseResult = node_opcua_factory_1.buildStructuredType({
    name: "BrowseResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "continuationPoint",
            fieldType: "ByteString",
        },
        {
            name: "references",
            fieldType: "ReferenceDescription",
            isArray: true
        },
    ]
});
class BrowseResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BrowseResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.references = null; /* null array */
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.continuationPoint = node_opcua_factory_1.initialize_field(schema.fields[1], options.continuationPoint);
        this.references = []; // should default
        if (options.references) {
            node_opcua_assert_1.assert(_.isArray(options.references));
            this.references = options.references.map((e) => new ReferenceDescription(e));
        }
    }
    static get schema() { return schemaBrowseResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeByteString(this.continuationPoint, stream);
        node_opcua_basic_types_1.encodeArray(this.references, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.continuationPoint = node_opcua_basic_types_1.decodeByteString(stream);
        this.references = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReferenceDescription();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaBrowseResult; }
}
BrowseResult.possibleFields = [
    "statusCode",
    "continuationPoint",
    "references"
];
BrowseResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(524, 0);
BrowseResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(523, 0);
exports.BrowseResult = BrowseResult;
BrowseResult.schema.encodingDefaultBinary = BrowseResult.encodingDefaultBinary;
BrowseResult.schema.encodingDefaultXml = BrowseResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrowseResult", BrowseResult);
// --------------------------------------------------------------------------------------------
const schemaBrowseRequest = node_opcua_factory_1.buildStructuredType({
    name: "BrowseRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "view",
            fieldType: "ViewDescription",
        },
        {
            name: "requestedMaxReferencesPerNode",
            fieldType: "UInt32",
        },
        {
            name: "nodesToBrowse",
            fieldType: "BrowseDescription",
            isArray: true
        },
    ]
});
class BrowseRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BrowseRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.view = new ViewDescription();
            this.nodesToBrowse = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.view = new ViewDescription(options.view);
        this.requestedMaxReferencesPerNode = node_opcua_factory_1.initialize_field(schema.fields[2], options.requestedMaxReferencesPerNode);
        this.nodesToBrowse = []; // should default
        if (options.nodesToBrowse) {
            node_opcua_assert_1.assert(_.isArray(options.nodesToBrowse));
            this.nodesToBrowse = options.nodesToBrowse.map((e) => new BrowseDescription(e));
        }
    }
    static get schema() { return schemaBrowseRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        this.view.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.requestedMaxReferencesPerNode, stream);
        node_opcua_basic_types_1.encodeArray(this.nodesToBrowse, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.view.decode(stream);
        this.requestedMaxReferencesPerNode = node_opcua_basic_types_1.decodeUInt32(stream);
        this.nodesToBrowse = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new BrowseDescription();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaBrowseRequest; }
}
BrowseRequest.possibleFields = [
    "requestHeader",
    "view",
    "requestedMaxReferencesPerNode",
    "nodesToBrowse"
];
BrowseRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(527, 0);
BrowseRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(526, 0);
exports.BrowseRequest = BrowseRequest;
BrowseRequest.schema.encodingDefaultBinary = BrowseRequest.encodingDefaultBinary;
BrowseRequest.schema.encodingDefaultXml = BrowseRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrowseRequest", BrowseRequest);
// --------------------------------------------------------------------------------------------
const schemaBrowseResponse = node_opcua_factory_1.buildStructuredType({
    name: "BrowseResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "BrowseResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class BrowseResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BrowseResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new BrowseResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaBrowseResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new BrowseResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaBrowseResponse; }
}
BrowseResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
BrowseResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(530, 0);
BrowseResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(529, 0);
exports.BrowseResponse = BrowseResponse;
BrowseResponse.schema.encodingDefaultBinary = BrowseResponse.encodingDefaultBinary;
BrowseResponse.schema.encodingDefaultXml = BrowseResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrowseResponse", BrowseResponse);
// --------------------------------------------------------------------------------------------
const schemaBrowseNextRequest = node_opcua_factory_1.buildStructuredType({
    name: "BrowseNextRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "releaseContinuationPoints",
            fieldType: "UABoolean",
        },
        {
            name: "continuationPoints",
            fieldType: "ByteString",
            isArray: true
        },
    ]
});
class BrowseNextRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BrowseNextRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.releaseContinuationPoints = node_opcua_factory_1.initialize_field(schema.fields[1], options.releaseContinuationPoints);
        this.continuationPoints = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.continuationPoints);
    }
    static get schema() { return schemaBrowseNextRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.releaseContinuationPoints, stream);
        node_opcua_basic_types_1.encodeArray(this.continuationPoints, stream, node_opcua_basic_types_1.encodeByteString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.releaseContinuationPoints = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.continuationPoints = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeByteString);
    }
    get schema() { return schemaBrowseNextRequest; }
}
BrowseNextRequest.possibleFields = [
    "requestHeader",
    "releaseContinuationPoints",
    "continuationPoints"
];
BrowseNextRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(533, 0);
BrowseNextRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(532, 0);
exports.BrowseNextRequest = BrowseNextRequest;
BrowseNextRequest.schema.encodingDefaultBinary = BrowseNextRequest.encodingDefaultBinary;
BrowseNextRequest.schema.encodingDefaultXml = BrowseNextRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrowseNextRequest", BrowseNextRequest);
// --------------------------------------------------------------------------------------------
const schemaBrowseNextResponse = node_opcua_factory_1.buildStructuredType({
    name: "BrowseNextResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "BrowseResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class BrowseNextResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BrowseNextResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new BrowseResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaBrowseNextResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new BrowseResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaBrowseNextResponse; }
}
BrowseNextResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
BrowseNextResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(536, 0);
BrowseNextResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(535, 0);
exports.BrowseNextResponse = BrowseNextResponse;
BrowseNextResponse.schema.encodingDefaultBinary = BrowseNextResponse.encodingDefaultBinary;
BrowseNextResponse.schema.encodingDefaultXml = BrowseNextResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrowseNextResponse", BrowseNextResponse);
// --------------------------------------------------------------------------------------------
const schemaRelativePathElement = node_opcua_factory_1.buildStructuredType({
    name: "RelativePathElement",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "referenceTypeId",
            fieldType: "NodeId",
        },
        {
            name: "isInverse",
            fieldType: "UABoolean",
        },
        {
            name: "includeSubtypes",
            fieldType: "UABoolean",
        },
        {
            name: "targetName",
            fieldType: "QualifiedName",
        },
    ]
});
class RelativePathElement extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RelativePathElement.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.referenceTypeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.referenceTypeId);
        this.isInverse = node_opcua_factory_1.initialize_field(schema.fields[1], options.isInverse);
        this.includeSubtypes = node_opcua_factory_1.initialize_field(schema.fields[2], options.includeSubtypes);
        this.targetName = node_opcua_factory_1.initialize_field(schema.fields[3], options.targetName);
    }
    static get schema() { return schemaRelativePathElement; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.referenceTypeId, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isInverse, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.includeSubtypes, stream);
        node_opcua_data_model_1.encodeQualifiedName(this.targetName, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.referenceTypeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.isInverse = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.includeSubtypes = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.targetName = node_opcua_data_model_1.decodeQualifiedName(stream);
    }
    get schema() { return schemaRelativePathElement; }
}
RelativePathElement.possibleFields = [
    "referenceTypeId",
    "isInverse",
    "includeSubtypes",
    "targetName"
];
RelativePathElement.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(539, 0);
RelativePathElement.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(538, 0);
exports.RelativePathElement = RelativePathElement;
RelativePathElement.schema.encodingDefaultBinary = RelativePathElement.encodingDefaultBinary;
RelativePathElement.schema.encodingDefaultXml = RelativePathElement.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RelativePathElement", RelativePathElement);
// --------------------------------------------------------------------------------------------
const schemaRelativePath = node_opcua_factory_1.buildStructuredType({
    name: "RelativePath",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "elements",
            fieldType: "RelativePathElement",
            isArray: true
        },
    ]
});
class RelativePath extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RelativePath.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.elements = null; /* null array */
        }
        this.elements = []; // should default
        if (options.elements) {
            node_opcua_assert_1.assert(_.isArray(options.elements));
            this.elements = options.elements.map((e) => new RelativePathElement(e));
        }
    }
    static get schema() { return schemaRelativePath; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.elements, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.elements = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new RelativePathElement();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaRelativePath; }
}
RelativePath.possibleFields = [
    "elements"
];
RelativePath.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(542, 0);
RelativePath.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(541, 0);
exports.RelativePath = RelativePath;
RelativePath.schema.encodingDefaultBinary = RelativePath.encodingDefaultBinary;
RelativePath.schema.encodingDefaultXml = RelativePath.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RelativePath", RelativePath);
// --------------------------------------------------------------------------------------------
const schemaBrowsePath = node_opcua_factory_1.buildStructuredType({
    name: "BrowsePath",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "startingNode",
            fieldType: "NodeId",
        },
        {
            name: "relativePath",
            fieldType: "RelativePath",
        },
    ]
});
class BrowsePath extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BrowsePath.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.relativePath = new RelativePath();
        }
        this.startingNode = node_opcua_factory_1.initialize_field(schema.fields[0], options.startingNode);
        this.relativePath = new RelativePath(options.relativePath);
    }
    static get schema() { return schemaBrowsePath; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.startingNode, stream);
        this.relativePath.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.startingNode = node_opcua_basic_types_1.decodeNodeId(stream);
        this.relativePath.decode(stream);
    }
    get schema() { return schemaBrowsePath; }
}
BrowsePath.possibleFields = [
    "startingNode",
    "relativePath"
];
BrowsePath.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(545, 0);
BrowsePath.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(544, 0);
exports.BrowsePath = BrowsePath;
BrowsePath.schema.encodingDefaultBinary = BrowsePath.encodingDefaultBinary;
BrowsePath.schema.encodingDefaultXml = BrowsePath.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrowsePath", BrowsePath);
// --------------------------------------------------------------------------------------------
const schemaBrowsePathTarget = node_opcua_factory_1.buildStructuredType({
    name: "BrowsePathTarget",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "targetId",
            fieldType: "ExpandedNodeId",
        },
        {
            name: "remainingPathIndex",
            fieldType: "UInt32",
        },
    ]
});
class BrowsePathTarget extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BrowsePathTarget.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.targetId = node_opcua_factory_1.initialize_field(schema.fields[0], options.targetId);
        this.remainingPathIndex = node_opcua_factory_1.initialize_field(schema.fields[1], options.remainingPathIndex);
    }
    static get schema() { return schemaBrowsePathTarget; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.targetId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.remainingPathIndex, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.targetId = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
        this.remainingPathIndex = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaBrowsePathTarget; }
}
BrowsePathTarget.possibleFields = [
    "targetId",
    "remainingPathIndex"
];
BrowsePathTarget.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(548, 0);
BrowsePathTarget.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(547, 0);
exports.BrowsePathTarget = BrowsePathTarget;
BrowsePathTarget.schema.encodingDefaultBinary = BrowsePathTarget.encodingDefaultBinary;
BrowsePathTarget.schema.encodingDefaultXml = BrowsePathTarget.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrowsePathTarget", BrowsePathTarget);
// --------------------------------------------------------------------------------------------
const schemaBrowsePathResult = node_opcua_factory_1.buildStructuredType({
    name: "BrowsePathResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "targets",
            fieldType: "BrowsePathTarget",
            isArray: true
        },
    ]
});
class BrowsePathResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BrowsePathResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.targets = null; /* null array */
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.targets = []; // should default
        if (options.targets) {
            node_opcua_assert_1.assert(_.isArray(options.targets));
            this.targets = options.targets.map((e) => new BrowsePathTarget(e));
        }
    }
    static get schema() { return schemaBrowsePathResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeArray(this.targets, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.targets = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new BrowsePathTarget();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaBrowsePathResult; }
}
BrowsePathResult.possibleFields = [
    "statusCode",
    "targets"
];
BrowsePathResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(551, 0);
BrowsePathResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(550, 0);
exports.BrowsePathResult = BrowsePathResult;
BrowsePathResult.schema.encodingDefaultBinary = BrowsePathResult.encodingDefaultBinary;
BrowsePathResult.schema.encodingDefaultXml = BrowsePathResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BrowsePathResult", BrowsePathResult);
// --------------------------------------------------------------------------------------------
const schemaTranslateBrowsePathsToNodeIdsRequest = node_opcua_factory_1.buildStructuredType({
    name: "TranslateBrowsePathsToNodeIdsRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "browsePaths",
            fieldType: "BrowsePath",
            isArray: true
        },
    ]
});
class TranslateBrowsePathsToNodeIdsRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = TranslateBrowsePathsToNodeIdsRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.browsePaths = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.browsePaths = []; // should default
        if (options.browsePaths) {
            node_opcua_assert_1.assert(_.isArray(options.browsePaths));
            this.browsePaths = options.browsePaths.map((e) => new BrowsePath(e));
        }
    }
    static get schema() { return schemaTranslateBrowsePathsToNodeIdsRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.browsePaths, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.browsePaths = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new BrowsePath();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaTranslateBrowsePathsToNodeIdsRequest; }
}
TranslateBrowsePathsToNodeIdsRequest.possibleFields = [
    "requestHeader",
    "browsePaths"
];
TranslateBrowsePathsToNodeIdsRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(554, 0);
TranslateBrowsePathsToNodeIdsRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(553, 0);
exports.TranslateBrowsePathsToNodeIdsRequest = TranslateBrowsePathsToNodeIdsRequest;
TranslateBrowsePathsToNodeIdsRequest.schema.encodingDefaultBinary = TranslateBrowsePathsToNodeIdsRequest.encodingDefaultBinary;
TranslateBrowsePathsToNodeIdsRequest.schema.encodingDefaultXml = TranslateBrowsePathsToNodeIdsRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("TranslateBrowsePathsToNodeIdsRequest", TranslateBrowsePathsToNodeIdsRequest);
// --------------------------------------------------------------------------------------------
const schemaTranslateBrowsePathsToNodeIdsResponse = node_opcua_factory_1.buildStructuredType({
    name: "TranslateBrowsePathsToNodeIdsResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "BrowsePathResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class TranslateBrowsePathsToNodeIdsResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = TranslateBrowsePathsToNodeIdsResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new BrowsePathResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaTranslateBrowsePathsToNodeIdsResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new BrowsePathResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaTranslateBrowsePathsToNodeIdsResponse; }
}
TranslateBrowsePathsToNodeIdsResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
TranslateBrowsePathsToNodeIdsResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(557, 0);
TranslateBrowsePathsToNodeIdsResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(556, 0);
exports.TranslateBrowsePathsToNodeIdsResponse = TranslateBrowsePathsToNodeIdsResponse;
TranslateBrowsePathsToNodeIdsResponse.schema.encodingDefaultBinary = TranslateBrowsePathsToNodeIdsResponse.encodingDefaultBinary;
TranslateBrowsePathsToNodeIdsResponse.schema.encodingDefaultXml = TranslateBrowsePathsToNodeIdsResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("TranslateBrowsePathsToNodeIdsResponse", TranslateBrowsePathsToNodeIdsResponse);
// --------------------------------------------------------------------------------------------
const schemaRegisterNodesRequest = node_opcua_factory_1.buildStructuredType({
    name: "RegisterNodesRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "nodesToRegister",
            fieldType: "NodeId",
            isArray: true
        },
    ]
});
class RegisterNodesRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RegisterNodesRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.nodesToRegister = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.nodesToRegister);
    }
    static get schema() { return schemaRegisterNodesRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.nodesToRegister, stream, node_opcua_basic_types_1.encodeNodeId);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.nodesToRegister = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeNodeId);
    }
    get schema() { return schemaRegisterNodesRequest; }
}
RegisterNodesRequest.possibleFields = [
    "requestHeader",
    "nodesToRegister"
];
RegisterNodesRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(560, 0);
RegisterNodesRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(559, 0);
exports.RegisterNodesRequest = RegisterNodesRequest;
RegisterNodesRequest.schema.encodingDefaultBinary = RegisterNodesRequest.encodingDefaultBinary;
RegisterNodesRequest.schema.encodingDefaultXml = RegisterNodesRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RegisterNodesRequest", RegisterNodesRequest);
// --------------------------------------------------------------------------------------------
const schemaRegisterNodesResponse = node_opcua_factory_1.buildStructuredType({
    name: "RegisterNodesResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "registeredNodeIds",
            fieldType: "NodeId",
            isArray: true
        },
    ]
});
class RegisterNodesResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RegisterNodesResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.registeredNodeIds = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.registeredNodeIds);
    }
    static get schema() { return schemaRegisterNodesResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.registeredNodeIds, stream, node_opcua_basic_types_1.encodeNodeId);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.registeredNodeIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeNodeId);
    }
    get schema() { return schemaRegisterNodesResponse; }
}
RegisterNodesResponse.possibleFields = [
    "responseHeader",
    "registeredNodeIds"
];
RegisterNodesResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(563, 0);
RegisterNodesResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(562, 0);
exports.RegisterNodesResponse = RegisterNodesResponse;
RegisterNodesResponse.schema.encodingDefaultBinary = RegisterNodesResponse.encodingDefaultBinary;
RegisterNodesResponse.schema.encodingDefaultXml = RegisterNodesResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RegisterNodesResponse", RegisterNodesResponse);
// --------------------------------------------------------------------------------------------
const schemaUnregisterNodesRequest = node_opcua_factory_1.buildStructuredType({
    name: "UnregisterNodesRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "nodesToUnregister",
            fieldType: "NodeId",
            isArray: true
        },
    ]
});
class UnregisterNodesRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = UnregisterNodesRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.nodesToUnregister = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.nodesToUnregister);
    }
    static get schema() { return schemaUnregisterNodesRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.nodesToUnregister, stream, node_opcua_basic_types_1.encodeNodeId);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.nodesToUnregister = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeNodeId);
    }
    get schema() { return schemaUnregisterNodesRequest; }
}
UnregisterNodesRequest.possibleFields = [
    "requestHeader",
    "nodesToUnregister"
];
UnregisterNodesRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(566, 0);
UnregisterNodesRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(565, 0);
exports.UnregisterNodesRequest = UnregisterNodesRequest;
UnregisterNodesRequest.schema.encodingDefaultBinary = UnregisterNodesRequest.encodingDefaultBinary;
UnregisterNodesRequest.schema.encodingDefaultXml = UnregisterNodesRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UnregisterNodesRequest", UnregisterNodesRequest);
// --------------------------------------------------------------------------------------------
const schemaUnregisterNodesResponse = node_opcua_factory_1.buildStructuredType({
    name: "UnregisterNodesResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
    ]
});
class UnregisterNodesResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = UnregisterNodesResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
    }
    static get schema() { return schemaUnregisterNodesResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
    }
    get schema() { return schemaUnregisterNodesResponse; }
}
UnregisterNodesResponse.possibleFields = [
    "responseHeader"
];
UnregisterNodesResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(569, 0);
UnregisterNodesResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(568, 0);
exports.UnregisterNodesResponse = UnregisterNodesResponse;
UnregisterNodesResponse.schema.encodingDefaultBinary = UnregisterNodesResponse.encodingDefaultBinary;
UnregisterNodesResponse.schema.encodingDefaultXml = UnregisterNodesResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UnregisterNodesResponse", UnregisterNodesResponse);
// --------------------------------------------------------------------------------------------
const schemaEndpointConfiguration = node_opcua_factory_1.buildStructuredType({
    name: "EndpointConfiguration",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "operationTimeout",
            fieldType: "Int32",
        },
        {
            name: "useBinaryEncoding",
            fieldType: "UABoolean",
        },
        {
            name: "maxStringLength",
            fieldType: "Int32",
        },
        {
            name: "maxByteStringLength",
            fieldType: "Int32",
        },
        {
            name: "maxArrayLength",
            fieldType: "Int32",
        },
        {
            name: "maxMessageSize",
            fieldType: "Int32",
        },
        {
            name: "maxBufferSize",
            fieldType: "Int32",
        },
        {
            name: "channelLifetime",
            fieldType: "Int32",
        },
        {
            name: "securityTokenLifetime",
            fieldType: "Int32",
        },
    ]
});
class EndpointConfiguration extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = EndpointConfiguration.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.operationTimeout = node_opcua_factory_1.initialize_field(schema.fields[0], options.operationTimeout);
        this.useBinaryEncoding = node_opcua_factory_1.initialize_field(schema.fields[1], options.useBinaryEncoding);
        this.maxStringLength = node_opcua_factory_1.initialize_field(schema.fields[2], options.maxStringLength);
        this.maxByteStringLength = node_opcua_factory_1.initialize_field(schema.fields[3], options.maxByteStringLength);
        this.maxArrayLength = node_opcua_factory_1.initialize_field(schema.fields[4], options.maxArrayLength);
        this.maxMessageSize = node_opcua_factory_1.initialize_field(schema.fields[5], options.maxMessageSize);
        this.maxBufferSize = node_opcua_factory_1.initialize_field(schema.fields[6], options.maxBufferSize);
        this.channelLifetime = node_opcua_factory_1.initialize_field(schema.fields[7], options.channelLifetime);
        this.securityTokenLifetime = node_opcua_factory_1.initialize_field(schema.fields[8], options.securityTokenLifetime);
    }
    static get schema() { return schemaEndpointConfiguration; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeInt32(this.operationTimeout, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.useBinaryEncoding, stream);
        node_opcua_basic_types_1.encodeInt32(this.maxStringLength, stream);
        node_opcua_basic_types_1.encodeInt32(this.maxByteStringLength, stream);
        node_opcua_basic_types_1.encodeInt32(this.maxArrayLength, stream);
        node_opcua_basic_types_1.encodeInt32(this.maxMessageSize, stream);
        node_opcua_basic_types_1.encodeInt32(this.maxBufferSize, stream);
        node_opcua_basic_types_1.encodeInt32(this.channelLifetime, stream);
        node_opcua_basic_types_1.encodeInt32(this.securityTokenLifetime, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.operationTimeout = node_opcua_basic_types_1.decodeInt32(stream);
        this.useBinaryEncoding = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.maxStringLength = node_opcua_basic_types_1.decodeInt32(stream);
        this.maxByteStringLength = node_opcua_basic_types_1.decodeInt32(stream);
        this.maxArrayLength = node_opcua_basic_types_1.decodeInt32(stream);
        this.maxMessageSize = node_opcua_basic_types_1.decodeInt32(stream);
        this.maxBufferSize = node_opcua_basic_types_1.decodeInt32(stream);
        this.channelLifetime = node_opcua_basic_types_1.decodeInt32(stream);
        this.securityTokenLifetime = node_opcua_basic_types_1.decodeInt32(stream);
    }
    get schema() { return schemaEndpointConfiguration; }
}
EndpointConfiguration.possibleFields = [
    "operationTimeout",
    "useBinaryEncoding",
    "maxStringLength",
    "maxByteStringLength",
    "maxArrayLength",
    "maxMessageSize",
    "maxBufferSize",
    "channelLifetime",
    "securityTokenLifetime"
];
EndpointConfiguration.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(333, 0);
EndpointConfiguration.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(332, 0);
exports.EndpointConfiguration = EndpointConfiguration;
EndpointConfiguration.schema.encodingDefaultBinary = EndpointConfiguration.encodingDefaultBinary;
EndpointConfiguration.schema.encodingDefaultXml = EndpointConfiguration.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EndpointConfiguration", EndpointConfiguration);
// --------------------------------------------------------------------------------------------
const schemaQueryDataDescription = node_opcua_factory_1.buildStructuredType({
    name: "QueryDataDescription",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "relativePath",
            fieldType: "RelativePath",
        },
        {
            name: "attributeId",
            fieldType: "UInt32",
        },
        {
            name: "indexRange",
            fieldType: "NumericRange",
        },
    ]
});
class QueryDataDescription extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = QueryDataDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.relativePath = new RelativePath();
        }
        this.relativePath = new RelativePath(options.relativePath);
        this.attributeId = node_opcua_factory_1.initialize_field(schema.fields[1], options.attributeId);
        this.indexRange = node_opcua_factory_1.initialize_field(schema.fields[2], options.indexRange);
    }
    static get schema() { return schemaQueryDataDescription; }
    encode(stream) {
        super.encode(stream);
        this.relativePath.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.attributeId, stream);
        node_opcua_numeric_range_1.encodeNumericRange(this.indexRange, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.relativePath.decode(stream);
        this.attributeId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.indexRange = node_opcua_numeric_range_1.decodeNumericRange(stream);
    }
    get schema() { return schemaQueryDataDescription; }
}
QueryDataDescription.possibleFields = [
    "relativePath",
    "attributeId",
    "indexRange"
];
QueryDataDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(572, 0);
QueryDataDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(571, 0);
exports.QueryDataDescription = QueryDataDescription;
QueryDataDescription.schema.encodingDefaultBinary = QueryDataDescription.encodingDefaultBinary;
QueryDataDescription.schema.encodingDefaultXml = QueryDataDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("QueryDataDescription", QueryDataDescription);
// --------------------------------------------------------------------------------------------
const schemaNodeTypeDescription = node_opcua_factory_1.buildStructuredType({
    name: "NodeTypeDescription",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "typeDefinitionNode",
            fieldType: "ExpandedNodeId",
        },
        {
            name: "includeSubTypes",
            fieldType: "UABoolean",
        },
        {
            name: "dataToReturn",
            fieldType: "QueryDataDescription",
            isArray: true
        },
    ]
});
class NodeTypeDescription extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = NodeTypeDescription.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.dataToReturn = null; /* null array */
        }
        this.typeDefinitionNode = node_opcua_factory_1.initialize_field(schema.fields[0], options.typeDefinitionNode);
        this.includeSubTypes = node_opcua_factory_1.initialize_field(schema.fields[1], options.includeSubTypes);
        this.dataToReturn = []; // should default
        if (options.dataToReturn) {
            node_opcua_assert_1.assert(_.isArray(options.dataToReturn));
            this.dataToReturn = options.dataToReturn.map((e) => new QueryDataDescription(e));
        }
    }
    static get schema() { return schemaNodeTypeDescription; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.typeDefinitionNode, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.includeSubTypes, stream);
        node_opcua_basic_types_1.encodeArray(this.dataToReturn, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.typeDefinitionNode = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
        this.includeSubTypes = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.dataToReturn = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new QueryDataDescription();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaNodeTypeDescription; }
}
NodeTypeDescription.possibleFields = [
    "typeDefinitionNode",
    "includeSubTypes",
    "dataToReturn"
];
NodeTypeDescription.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(575, 0);
NodeTypeDescription.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(574, 0);
exports.NodeTypeDescription = NodeTypeDescription;
NodeTypeDescription.schema.encodingDefaultBinary = NodeTypeDescription.encodingDefaultBinary;
NodeTypeDescription.schema.encodingDefaultXml = NodeTypeDescription.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("NodeTypeDescription", NodeTypeDescription);
// --------------------------------------------------------------------------------------------
const schemaQueryDataSet = node_opcua_factory_1.buildStructuredType({
    name: "QueryDataSet",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "nodeId",
            fieldType: "ExpandedNodeId",
        },
        {
            name: "typeDefinitionNode",
            fieldType: "ExpandedNodeId",
        },
        {
            name: "values",
            fieldType: "Variant",
            isArray: true
        },
    ]
});
class QueryDataSet extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = QueryDataSet.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
        this.typeDefinitionNode = node_opcua_factory_1.initialize_field(schema.fields[1], options.typeDefinitionNode);
        this.values = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.values);
    }
    static get schema() { return schemaQueryDataSet; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.nodeId, stream);
        node_opcua_basic_types_1.encodeExpandedNodeId(this.typeDefinitionNode, stream);
        node_opcua_basic_types_1.encodeArray(this.values, stream, node_opcua_variant_1.encodeVariant);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
        this.typeDefinitionNode = node_opcua_basic_types_1.decodeExpandedNodeId(stream);
        this.values = node_opcua_basic_types_1.decodeArray(stream, node_opcua_variant_1.decodeVariant);
    }
    get schema() { return schemaQueryDataSet; }
}
QueryDataSet.possibleFields = [
    "nodeId",
    "typeDefinitionNode",
    "values"
];
QueryDataSet.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(579, 0);
QueryDataSet.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(578, 0);
exports.QueryDataSet = QueryDataSet;
QueryDataSet.schema.encodingDefaultBinary = QueryDataSet.encodingDefaultBinary;
QueryDataSet.schema.encodingDefaultXml = QueryDataSet.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("QueryDataSet", QueryDataSet);
// --------------------------------------------------------------------------------------------
const schemaNodeReference = node_opcua_factory_1.buildStructuredType({
    name: "NodeReference",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "nodeId",
            fieldType: "NodeId",
        },
        {
            name: "referenceTypeId",
            fieldType: "NodeId",
        },
        {
            name: "isForward",
            fieldType: "UABoolean",
        },
        {
            name: "referencedNodeIds",
            fieldType: "NodeId",
            isArray: true
        },
    ]
});
class NodeReference extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = NodeReference.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
        this.referenceTypeId = node_opcua_factory_1.initialize_field(schema.fields[1], options.referenceTypeId);
        this.isForward = node_opcua_factory_1.initialize_field(schema.fields[2], options.isForward);
        this.referencedNodeIds = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.referencedNodeIds);
    }
    static get schema() { return schemaNodeReference; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.nodeId, stream);
        node_opcua_basic_types_1.encodeNodeId(this.referenceTypeId, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isForward, stream);
        node_opcua_basic_types_1.encodeArray(this.referencedNodeIds, stream, node_opcua_basic_types_1.encodeNodeId);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.referenceTypeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.isForward = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.referencedNodeIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeNodeId);
    }
    get schema() { return schemaNodeReference; }
}
NodeReference.possibleFields = [
    "nodeId",
    "referenceTypeId",
    "isForward",
    "referencedNodeIds"
];
NodeReference.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(582, 0);
NodeReference.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(581, 0);
exports.NodeReference = NodeReference;
NodeReference.schema.encodingDefaultBinary = NodeReference.encodingDefaultBinary;
NodeReference.schema.encodingDefaultXml = NodeReference.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("NodeReference", NodeReference);
// --------------------------------------------------------------------------------------------
const schemaElementOperand = node_opcua_factory_1.buildStructuredType({
    name: "ElementOperand",
    baseType: "FilterOperand",
    fields: [
        {
            name: "index",
            fieldType: "UInt32",
        },
    ]
});
class ElementOperand extends FilterOperand {
    constructor(options) {
        super(options);
        const schema = ElementOperand.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.index = node_opcua_factory_1.initialize_field(schema.fields[0], options.index);
    }
    static get schema() { return schemaElementOperand; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.index, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.index = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaElementOperand; }
}
ElementOperand.possibleFields = [
    "index"
];
ElementOperand.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(594, 0);
ElementOperand.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(593, 0);
exports.ElementOperand = ElementOperand;
ElementOperand.schema.encodingDefaultBinary = ElementOperand.encodingDefaultBinary;
ElementOperand.schema.encodingDefaultXml = ElementOperand.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ElementOperand", ElementOperand);
// --------------------------------------------------------------------------------------------
const schemaLiteralOperand = node_opcua_factory_1.buildStructuredType({
    name: "LiteralOperand",
    baseType: "FilterOperand",
    fields: [
        {
            name: "value",
            fieldType: "Variant",
        },
    ]
});
class LiteralOperand extends FilterOperand {
    constructor(options) {
        super(options);
        const schema = LiteralOperand.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.value = node_opcua_factory_1.initialize_field(schema.fields[0], options.value);
    }
    static get schema() { return schemaLiteralOperand; }
    encode(stream) {
        super.encode(stream);
        node_opcua_variant_1.encodeVariant(this.value, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.value = node_opcua_variant_1.decodeVariant(stream);
    }
    get schema() { return schemaLiteralOperand; }
}
LiteralOperand.possibleFields = [
    "value"
];
LiteralOperand.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(597, 0);
LiteralOperand.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(596, 0);
exports.LiteralOperand = LiteralOperand;
LiteralOperand.schema.encodingDefaultBinary = LiteralOperand.encodingDefaultBinary;
LiteralOperand.schema.encodingDefaultXml = LiteralOperand.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("LiteralOperand", LiteralOperand);
// --------------------------------------------------------------------------------------------
const schemaAttributeOperand = node_opcua_factory_1.buildStructuredType({
    name: "AttributeOperand",
    baseType: "FilterOperand",
    fields: [
        {
            name: "nodeId",
            fieldType: "NodeId",
        },
        {
            name: "alias",
            fieldType: "UAString",
        },
        {
            name: "browsePath",
            fieldType: "RelativePath",
        },
        {
            name: "attributeId",
            fieldType: "UInt32",
        },
        {
            name: "indexRange",
            fieldType: "NumericRange",
        },
    ]
});
class AttributeOperand extends FilterOperand {
    constructor(options) {
        super(options);
        const schema = AttributeOperand.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.browsePath = new RelativePath();
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
        this.alias = node_opcua_factory_1.initialize_field(schema.fields[1], options.alias);
        this.browsePath = new RelativePath(options.browsePath);
        this.attributeId = node_opcua_factory_1.initialize_field(schema.fields[3], options.attributeId);
        this.indexRange = node_opcua_factory_1.initialize_field(schema.fields[4], options.indexRange);
    }
    static get schema() { return schemaAttributeOperand; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.nodeId, stream);
        node_opcua_basic_types_1.encodeUAString(this.alias, stream);
        this.browsePath.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.attributeId, stream);
        node_opcua_numeric_range_1.encodeNumericRange(this.indexRange, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.alias = node_opcua_basic_types_1.decodeUAString(stream);
        this.browsePath.decode(stream);
        this.attributeId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.indexRange = node_opcua_numeric_range_1.decodeNumericRange(stream);
    }
    get schema() { return schemaAttributeOperand; }
}
AttributeOperand.possibleFields = [
    "nodeId",
    "alias",
    "browsePath",
    "attributeId",
    "indexRange"
];
AttributeOperand.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(600, 0);
AttributeOperand.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(599, 0);
exports.AttributeOperand = AttributeOperand;
AttributeOperand.schema.encodingDefaultBinary = AttributeOperand.encodingDefaultBinary;
AttributeOperand.schema.encodingDefaultXml = AttributeOperand.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AttributeOperand", AttributeOperand);
// --------------------------------------------------------------------------------------------
const schemaContentFilterElementResult = node_opcua_factory_1.buildStructuredType({
    name: "ContentFilterElementResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "operandStatusCodes",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "operandDiagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class ContentFilterElementResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ContentFilterElementResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.operandStatusCodes = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.operandStatusCodes);
        this.operandDiagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.operandDiagnosticInfos);
    }
    static get schema() { return schemaContentFilterElementResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeArray(this.operandStatusCodes, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.operandDiagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.operandStatusCodes = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.operandDiagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaContentFilterElementResult; }
}
ContentFilterElementResult.possibleFields = [
    "statusCode",
    "operandStatusCodes",
    "operandDiagnosticInfos"
];
ContentFilterElementResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(606, 0);
ContentFilterElementResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(605, 0);
exports.ContentFilterElementResult = ContentFilterElementResult;
ContentFilterElementResult.schema.encodingDefaultBinary = ContentFilterElementResult.encodingDefaultBinary;
ContentFilterElementResult.schema.encodingDefaultXml = ContentFilterElementResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ContentFilterElementResult", ContentFilterElementResult);
// --------------------------------------------------------------------------------------------
const schemaContentFilterResult = node_opcua_factory_1.buildStructuredType({
    name: "ContentFilterResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "elementResults",
            fieldType: "ContentFilterElementResult",
            isArray: true
        },
        {
            name: "elementDiagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class ContentFilterResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ContentFilterResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.elementResults = null; /* null array */
        }
        this.elementResults = []; // should default
        if (options.elementResults) {
            node_opcua_assert_1.assert(_.isArray(options.elementResults));
            this.elementResults = options.elementResults.map((e) => new ContentFilterElementResult(e));
        }
        this.elementDiagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.elementDiagnosticInfos);
    }
    static get schema() { return schemaContentFilterResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.elementResults, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.elementDiagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.elementResults = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ContentFilterElementResult();
            obj.decode(stream1);
            return obj;
        });
        this.elementDiagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaContentFilterResult; }
}
ContentFilterResult.possibleFields = [
    "elementResults",
    "elementDiagnosticInfos"
];
ContentFilterResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(609, 0);
ContentFilterResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(608, 0);
exports.ContentFilterResult = ContentFilterResult;
ContentFilterResult.schema.encodingDefaultBinary = ContentFilterResult.encodingDefaultBinary;
ContentFilterResult.schema.encodingDefaultXml = ContentFilterResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ContentFilterResult", ContentFilterResult);
// --------------------------------------------------------------------------------------------
const schemaParsingResult = node_opcua_factory_1.buildStructuredType({
    name: "ParsingResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "dataStatusCodes",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "dataDiagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class ParsingResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ParsingResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.dataStatusCodes = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.dataStatusCodes);
        this.dataDiagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.dataDiagnosticInfos);
    }
    static get schema() { return schemaParsingResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeArray(this.dataStatusCodes, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.dataDiagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.dataStatusCodes = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.dataDiagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaParsingResult; }
}
ParsingResult.possibleFields = [
    "statusCode",
    "dataStatusCodes",
    "dataDiagnosticInfos"
];
ParsingResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(612, 0);
ParsingResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(611, 0);
exports.ParsingResult = ParsingResult;
ParsingResult.schema.encodingDefaultBinary = ParsingResult.encodingDefaultBinary;
ParsingResult.schema.encodingDefaultXml = ParsingResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ParsingResult", ParsingResult);
// --------------------------------------------------------------------------------------------
const schemaQueryFirstRequest = node_opcua_factory_1.buildStructuredType({
    name: "QueryFirstRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "view",
            fieldType: "ViewDescription",
        },
        {
            name: "nodeTypes",
            fieldType: "NodeTypeDescription",
            isArray: true
        },
        {
            name: "filter",
            fieldType: "ContentFilter",
        },
        {
            name: "maxDataSetsToReturn",
            fieldType: "UInt32",
        },
        {
            name: "maxReferencesToReturn",
            fieldType: "UInt32",
        },
    ]
});
class QueryFirstRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = QueryFirstRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.view = new ViewDescription();
            this.nodeTypes = null; /* null array */
            this.filter = new ContentFilter();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.view = new ViewDescription(options.view);
        this.nodeTypes = []; // should default
        if (options.nodeTypes) {
            node_opcua_assert_1.assert(_.isArray(options.nodeTypes));
            this.nodeTypes = options.nodeTypes.map((e) => new NodeTypeDescription(e));
        }
        this.filter = new ContentFilter(options.filter);
        this.maxDataSetsToReturn = node_opcua_factory_1.initialize_field(schema.fields[4], options.maxDataSetsToReturn);
        this.maxReferencesToReturn = node_opcua_factory_1.initialize_field(schema.fields[5], options.maxReferencesToReturn);
    }
    static get schema() { return schemaQueryFirstRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        this.view.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.nodeTypes, stream, (obj, stream1) => { obj.encode(stream1); });
        this.filter.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxDataSetsToReturn, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxReferencesToReturn, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.view.decode(stream);
        this.nodeTypes = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new NodeTypeDescription();
            obj.decode(stream1);
            return obj;
        });
        this.filter.decode(stream);
        this.maxDataSetsToReturn = node_opcua_basic_types_1.decodeUInt32(stream);
        this.maxReferencesToReturn = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaQueryFirstRequest; }
}
QueryFirstRequest.possibleFields = [
    "requestHeader",
    "view",
    "nodeTypes",
    "filter",
    "maxDataSetsToReturn",
    "maxReferencesToReturn"
];
QueryFirstRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(615, 0);
QueryFirstRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(614, 0);
exports.QueryFirstRequest = QueryFirstRequest;
QueryFirstRequest.schema.encodingDefaultBinary = QueryFirstRequest.encodingDefaultBinary;
QueryFirstRequest.schema.encodingDefaultXml = QueryFirstRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("QueryFirstRequest", QueryFirstRequest);
// --------------------------------------------------------------------------------------------
const schemaQueryFirstResponse = node_opcua_factory_1.buildStructuredType({
    name: "QueryFirstResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "queryDataSets",
            fieldType: "QueryDataSet",
            isArray: true
        },
        {
            name: "continuationPoint",
            fieldType: "ByteString",
        },
        {
            name: "parsingResults",
            fieldType: "ParsingResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
        {
            name: "filterResult",
            fieldType: "ContentFilterResult",
        },
    ]
});
class QueryFirstResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = QueryFirstResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.queryDataSets = null; /* null array */
            this.parsingResults = null; /* null array */
            this.filterResult = new ContentFilterResult();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.queryDataSets = []; // should default
        if (options.queryDataSets) {
            node_opcua_assert_1.assert(_.isArray(options.queryDataSets));
            this.queryDataSets = options.queryDataSets.map((e) => new QueryDataSet(e));
        }
        this.continuationPoint = node_opcua_factory_1.initialize_field(schema.fields[2], options.continuationPoint);
        this.parsingResults = []; // should default
        if (options.parsingResults) {
            node_opcua_assert_1.assert(_.isArray(options.parsingResults));
            this.parsingResults = options.parsingResults.map((e) => new ParsingResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[4], options.diagnosticInfos);
        this.filterResult = new ContentFilterResult(options.filterResult);
    }
    static get schema() { return schemaQueryFirstResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.queryDataSets, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeByteString(this.continuationPoint, stream);
        node_opcua_basic_types_1.encodeArray(this.parsingResults, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
        this.filterResult.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.queryDataSets = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new QueryDataSet();
            obj.decode(stream1);
            return obj;
        });
        this.continuationPoint = node_opcua_basic_types_1.decodeByteString(stream);
        this.parsingResults = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ParsingResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
        this.filterResult.decode(stream);
    }
    get schema() { return schemaQueryFirstResponse; }
}
QueryFirstResponse.possibleFields = [
    "responseHeader",
    "queryDataSets",
    "continuationPoint",
    "parsingResults",
    "diagnosticInfos",
    "filterResult"
];
QueryFirstResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(618, 0);
QueryFirstResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(617, 0);
exports.QueryFirstResponse = QueryFirstResponse;
QueryFirstResponse.schema.encodingDefaultBinary = QueryFirstResponse.encodingDefaultBinary;
QueryFirstResponse.schema.encodingDefaultXml = QueryFirstResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("QueryFirstResponse", QueryFirstResponse);
// --------------------------------------------------------------------------------------------
const schemaQueryNextRequest = node_opcua_factory_1.buildStructuredType({
    name: "QueryNextRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "releaseContinuationPoint",
            fieldType: "UABoolean",
        },
        {
            name: "continuationPoint",
            fieldType: "ByteString",
        },
    ]
});
class QueryNextRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = QueryNextRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.releaseContinuationPoint = node_opcua_factory_1.initialize_field(schema.fields[1], options.releaseContinuationPoint);
        this.continuationPoint = node_opcua_factory_1.initialize_field(schema.fields[2], options.continuationPoint);
    }
    static get schema() { return schemaQueryNextRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.releaseContinuationPoint, stream);
        node_opcua_basic_types_1.encodeByteString(this.continuationPoint, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.releaseContinuationPoint = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.continuationPoint = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaQueryNextRequest; }
}
QueryNextRequest.possibleFields = [
    "requestHeader",
    "releaseContinuationPoint",
    "continuationPoint"
];
QueryNextRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(621, 0);
QueryNextRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(620, 0);
exports.QueryNextRequest = QueryNextRequest;
QueryNextRequest.schema.encodingDefaultBinary = QueryNextRequest.encodingDefaultBinary;
QueryNextRequest.schema.encodingDefaultXml = QueryNextRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("QueryNextRequest", QueryNextRequest);
// --------------------------------------------------------------------------------------------
const schemaQueryNextResponse = node_opcua_factory_1.buildStructuredType({
    name: "QueryNextResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "queryDataSets",
            fieldType: "QueryDataSet",
            isArray: true
        },
        {
            name: "revisedContinuationPoint",
            fieldType: "ByteString",
        },
    ]
});
class QueryNextResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = QueryNextResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.queryDataSets = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.queryDataSets = []; // should default
        if (options.queryDataSets) {
            node_opcua_assert_1.assert(_.isArray(options.queryDataSets));
            this.queryDataSets = options.queryDataSets.map((e) => new QueryDataSet(e));
        }
        this.revisedContinuationPoint = node_opcua_factory_1.initialize_field(schema.fields[2], options.revisedContinuationPoint);
    }
    static get schema() { return schemaQueryNextResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.queryDataSets, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeByteString(this.revisedContinuationPoint, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.queryDataSets = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new QueryDataSet();
            obj.decode(stream1);
            return obj;
        });
        this.revisedContinuationPoint = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaQueryNextResponse; }
}
QueryNextResponse.possibleFields = [
    "responseHeader",
    "queryDataSets",
    "revisedContinuationPoint"
];
QueryNextResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(624, 0);
QueryNextResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(623, 0);
exports.QueryNextResponse = QueryNextResponse;
QueryNextResponse.schema.encodingDefaultBinary = QueryNextResponse.encodingDefaultBinary;
QueryNextResponse.schema.encodingDefaultXml = QueryNextResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("QueryNextResponse", QueryNextResponse);
// --------------------------------------------------------------------------------------------
const schemaReadValueId = node_opcua_factory_1.buildStructuredType({
    name: "ReadValueId",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "nodeId",
            fieldType: "NodeId",
        },
        {
            name: "attributeId",
            fieldType: "UInt32",
        },
        {
            name: "indexRange",
            fieldType: "NumericRange",
        },
        {
            name: "dataEncoding",
            fieldType: "QualifiedName",
        },
    ]
});
class ReadValueId extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ReadValueId.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
        this.attributeId = node_opcua_factory_1.initialize_field(schema.fields[1], options.attributeId);
        this.indexRange = node_opcua_factory_1.initialize_field(schema.fields[2], options.indexRange);
        this.dataEncoding = node_opcua_factory_1.initialize_field(schema.fields[3], options.dataEncoding);
    }
    static get schema() { return schemaReadValueId; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.nodeId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.attributeId, stream);
        node_opcua_numeric_range_1.encodeNumericRange(this.indexRange, stream);
        node_opcua_data_model_1.encodeQualifiedName(this.dataEncoding, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.attributeId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.indexRange = node_opcua_numeric_range_1.decodeNumericRange(stream);
        this.dataEncoding = node_opcua_data_model_1.decodeQualifiedName(stream);
    }
    get schema() { return schemaReadValueId; }
}
ReadValueId.possibleFields = [
    "nodeId",
    "attributeId",
    "indexRange",
    "dataEncoding"
];
ReadValueId.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(628, 0);
ReadValueId.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(627, 0);
exports.ReadValueId = ReadValueId;
ReadValueId.schema.encodingDefaultBinary = ReadValueId.encodingDefaultBinary;
ReadValueId.schema.encodingDefaultXml = ReadValueId.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReadValueId", ReadValueId);
// --------------------------------------------------------------------------------------------
const schemaReadRequest = node_opcua_factory_1.buildStructuredType({
    name: "ReadRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "maxAge",
            fieldType: "Double",
        },
        {
            name: "timestampsToReturn",
            fieldType: "TimestampsToReturn",
        },
        {
            name: "nodesToRead",
            fieldType: "ReadValueId",
            isArray: true
        },
    ]
});
class ReadRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ReadRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.nodesToRead = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.maxAge = node_opcua_factory_1.initialize_field(schema.fields[1], options.maxAge);
        this.timestampsToReturn = this.setTimestampsToReturn(node_opcua_factory_1.initialize_field(schema.fields[2], options.timestampsToReturn));
        this.nodesToRead = []; // should default
        if (options.nodesToRead) {
            node_opcua_assert_1.assert(_.isArray(options.nodesToRead));
            this.nodesToRead = options.nodesToRead.map((e) => new ReadValueId(e));
        }
    }
    static get schema() { return schemaReadRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeDouble(this.maxAge, stream);
        node_opcua_data_value_1.encodeTimestampsToReturn(this.timestampsToReturn, stream);
        node_opcua_basic_types_1.encodeArray(this.nodesToRead, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.maxAge = node_opcua_basic_types_1.decodeDouble(stream);
        this.timestampsToReturn = node_opcua_data_value_1.decodeTimestampsToReturn(stream);
        this.nodesToRead = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ReadValueId();
            obj.decode(stream1);
            return obj;
        });
    }
    // Define Enumeration setters
    setTimestampsToReturn(value) {
        const coercedValue = node_opcua_data_value_1._enumerationTimestampsToReturn.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to TimestampsToReturn :" + value);
        }
        this.timestampsToReturn = coercedValue.value;
        return this.timestampsToReturn;
    }
    get schema() { return schemaReadRequest; }
}
ReadRequest.possibleFields = [
    "requestHeader",
    "maxAge",
    "timestampsToReturn",
    "nodesToRead"
];
ReadRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(631, 0);
ReadRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(630, 0);
exports.ReadRequest = ReadRequest;
ReadRequest.schema.encodingDefaultBinary = ReadRequest.encodingDefaultBinary;
ReadRequest.schema.encodingDefaultXml = ReadRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReadRequest", ReadRequest);
// --------------------------------------------------------------------------------------------
const schemaReadResponse = node_opcua_factory_1.buildStructuredType({
    name: "ReadResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "DataValue",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class ReadResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ReadResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaReadResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_data_value_1.encodeDataValue);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_value_1.decodeDataValue);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaReadResponse; }
}
ReadResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
ReadResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(634, 0);
ReadResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(633, 0);
exports.ReadResponse = ReadResponse;
ReadResponse.schema.encodingDefaultBinary = ReadResponse.encodingDefaultBinary;
ReadResponse.schema.encodingDefaultXml = ReadResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReadResponse", ReadResponse);
// --------------------------------------------------------------------------------------------
const schemaHistoryReadValueId = node_opcua_factory_1.buildStructuredType({
    name: "HistoryReadValueId",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "nodeId",
            fieldType: "NodeId",
        },
        {
            name: "indexRange",
            fieldType: "NumericRange",
        },
        {
            name: "dataEncoding",
            fieldType: "QualifiedName",
        },
        {
            name: "continuationPoint",
            fieldType: "ByteString",
        },
    ]
});
class HistoryReadValueId extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryReadValueId.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
        this.indexRange = node_opcua_factory_1.initialize_field(schema.fields[1], options.indexRange);
        this.dataEncoding = node_opcua_factory_1.initialize_field(schema.fields[2], options.dataEncoding);
        this.continuationPoint = node_opcua_factory_1.initialize_field(schema.fields[3], options.continuationPoint);
    }
    static get schema() { return schemaHistoryReadValueId; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.nodeId, stream);
        node_opcua_numeric_range_1.encodeNumericRange(this.indexRange, stream);
        node_opcua_data_model_1.encodeQualifiedName(this.dataEncoding, stream);
        node_opcua_basic_types_1.encodeByteString(this.continuationPoint, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.indexRange = node_opcua_numeric_range_1.decodeNumericRange(stream);
        this.dataEncoding = node_opcua_data_model_1.decodeQualifiedName(stream);
        this.continuationPoint = node_opcua_basic_types_1.decodeByteString(stream);
    }
    get schema() { return schemaHistoryReadValueId; }
}
HistoryReadValueId.possibleFields = [
    "nodeId",
    "indexRange",
    "dataEncoding",
    "continuationPoint"
];
HistoryReadValueId.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(637, 0);
HistoryReadValueId.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(636, 0);
exports.HistoryReadValueId = HistoryReadValueId;
HistoryReadValueId.schema.encodingDefaultBinary = HistoryReadValueId.encodingDefaultBinary;
HistoryReadValueId.schema.encodingDefaultXml = HistoryReadValueId.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryReadValueId", HistoryReadValueId);
// --------------------------------------------------------------------------------------------
const schemaHistoryReadResult = node_opcua_factory_1.buildStructuredType({
    name: "HistoryReadResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "continuationPoint",
            fieldType: "ByteString",
        },
        {
            name: "historyData",
            fieldType: "ExtensionObject",
        },
    ]
});
class HistoryReadResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryReadResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.continuationPoint = node_opcua_factory_1.initialize_field(schema.fields[1], options.continuationPoint);
        this.historyData = node_opcua_factory_1.initialize_field(schema.fields[2], options.historyData);
    }
    static get schema() { return schemaHistoryReadResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeByteString(this.continuationPoint, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.historyData, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.continuationPoint = node_opcua_basic_types_1.decodeByteString(stream);
        this.historyData = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    get schema() { return schemaHistoryReadResult; }
}
HistoryReadResult.possibleFields = [
    "statusCode",
    "continuationPoint",
    "historyData"
];
HistoryReadResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(640, 0);
HistoryReadResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(639, 0);
exports.HistoryReadResult = HistoryReadResult;
HistoryReadResult.schema.encodingDefaultBinary = HistoryReadResult.encodingDefaultBinary;
HistoryReadResult.schema.encodingDefaultXml = HistoryReadResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryReadResult", HistoryReadResult);
// --------------------------------------------------------------------------------------------
const schemaHistoryReadDetails = node_opcua_factory_1.buildStructuredType({
    name: "HistoryReadDetails",
    baseType: "ExtensionObject",
    fields: []
});
class HistoryReadDetails extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryReadDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaHistoryReadDetails; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaHistoryReadDetails; }
}
HistoryReadDetails.possibleFields = [];
HistoryReadDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(643, 0);
HistoryReadDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(642, 0);
exports.HistoryReadDetails = HistoryReadDetails;
HistoryReadDetails.schema.encodingDefaultBinary = HistoryReadDetails.encodingDefaultBinary;
HistoryReadDetails.schema.encodingDefaultXml = HistoryReadDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryReadDetails", HistoryReadDetails);
// --------------------------------------------------------------------------------------------
const schemaMonitoringFilter = node_opcua_factory_1.buildStructuredType({
    name: "MonitoringFilter",
    baseType: "ExtensionObject",
    fields: []
});
class MonitoringFilter extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = MonitoringFilter.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaMonitoringFilter; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaMonitoringFilter; }
}
MonitoringFilter.possibleFields = [];
MonitoringFilter.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(721, 0);
MonitoringFilter.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(720, 0);
exports.MonitoringFilter = MonitoringFilter;
MonitoringFilter.schema.encodingDefaultBinary = MonitoringFilter.encodingDefaultBinary;
MonitoringFilter.schema.encodingDefaultXml = MonitoringFilter.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MonitoringFilter", MonitoringFilter);
// --------------------------------------------------------------------------------------------
const schemaEventFilter = node_opcua_factory_1.buildStructuredType({
    name: "EventFilter",
    baseType: "MonitoringFilter",
    fields: [
        {
            name: "selectClauses",
            fieldType: "SimpleAttributeOperand",
            isArray: true
        },
        {
            name: "whereClause",
            fieldType: "ContentFilter",
        },
    ]
});
class EventFilter extends MonitoringFilter {
    constructor(options) {
        super(options);
        const schema = EventFilter.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.selectClauses = null; /* null array */
            this.whereClause = new ContentFilter();
        }
        this.selectClauses = []; // should default
        if (options.selectClauses) {
            node_opcua_assert_1.assert(_.isArray(options.selectClauses));
            this.selectClauses = options.selectClauses.map((e) => new SimpleAttributeOperand(e));
        }
        this.whereClause = new ContentFilter(options.whereClause);
    }
    static get schema() { return schemaEventFilter; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.selectClauses, stream, (obj, stream1) => { obj.encode(stream1); });
        this.whereClause.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.selectClauses = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new SimpleAttributeOperand();
            obj.decode(stream1);
            return obj;
        });
        this.whereClause.decode(stream);
    }
    get schema() { return schemaEventFilter; }
}
EventFilter.possibleFields = [
    "selectClauses",
    "whereClause"
];
EventFilter.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(727, 0);
EventFilter.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(726, 0);
exports.EventFilter = EventFilter;
EventFilter.schema.encodingDefaultBinary = EventFilter.encodingDefaultBinary;
EventFilter.schema.encodingDefaultXml = EventFilter.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EventFilter", EventFilter);
// --------------------------------------------------------------------------------------------
const schemaReadEventDetails = node_opcua_factory_1.buildStructuredType({
    name: "ReadEventDetails",
    baseType: "HistoryReadDetails",
    fields: [
        {
            name: "numValuesPerNode",
            fieldType: "UInt32",
        },
        {
            name: "startTime",
            fieldType: "DateTime",
        },
        {
            name: "endTime",
            fieldType: "DateTime",
        },
        {
            name: "filter",
            fieldType: "EventFilter",
        },
    ]
});
class ReadEventDetails extends HistoryReadDetails {
    constructor(options) {
        super(options);
        const schema = ReadEventDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.filter = new EventFilter();
        }
        this.numValuesPerNode = node_opcua_factory_1.initialize_field(schema.fields[0], options.numValuesPerNode);
        this.startTime = node_opcua_factory_1.initialize_field(schema.fields[1], options.startTime);
        this.endTime = node_opcua_factory_1.initialize_field(schema.fields[2], options.endTime);
        this.filter = new EventFilter(options.filter);
    }
    static get schema() { return schemaReadEventDetails; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.numValuesPerNode, stream);
        node_opcua_basic_types_1.encodeDateTime(this.startTime, stream);
        node_opcua_basic_types_1.encodeDateTime(this.endTime, stream);
        this.filter.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.numValuesPerNode = node_opcua_basic_types_1.decodeUInt32(stream);
        this.startTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.endTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.filter.decode(stream);
    }
    get schema() { return schemaReadEventDetails; }
}
ReadEventDetails.possibleFields = [
    "numValuesPerNode",
    "startTime",
    "endTime",
    "filter"
];
ReadEventDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(646, 0);
ReadEventDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(645, 0);
exports.ReadEventDetails = ReadEventDetails;
ReadEventDetails.schema.encodingDefaultBinary = ReadEventDetails.encodingDefaultBinary;
ReadEventDetails.schema.encodingDefaultXml = ReadEventDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReadEventDetails", ReadEventDetails);
// --------------------------------------------------------------------------------------------
const schemaReadRawModifiedDetails = node_opcua_factory_1.buildStructuredType({
    name: "ReadRawModifiedDetails",
    baseType: "HistoryReadDetails",
    fields: [
        {
            name: "isReadModified",
            fieldType: "UABoolean",
        },
        {
            name: "startTime",
            fieldType: "DateTime",
        },
        {
            name: "endTime",
            fieldType: "DateTime",
        },
        {
            name: "numValuesPerNode",
            fieldType: "UInt32",
        },
        {
            name: "returnBounds",
            fieldType: "UABoolean",
        },
    ]
});
class ReadRawModifiedDetails extends HistoryReadDetails {
    constructor(options) {
        super(options);
        const schema = ReadRawModifiedDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.isReadModified = node_opcua_factory_1.initialize_field(schema.fields[0], options.isReadModified);
        this.startTime = node_opcua_factory_1.initialize_field(schema.fields[1], options.startTime);
        this.endTime = node_opcua_factory_1.initialize_field(schema.fields[2], options.endTime);
        this.numValuesPerNode = node_opcua_factory_1.initialize_field(schema.fields[3], options.numValuesPerNode);
        this.returnBounds = node_opcua_factory_1.initialize_field(schema.fields[4], options.returnBounds);
    }
    static get schema() { return schemaReadRawModifiedDetails; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isReadModified, stream);
        node_opcua_basic_types_1.encodeDateTime(this.startTime, stream);
        node_opcua_basic_types_1.encodeDateTime(this.endTime, stream);
        node_opcua_basic_types_1.encodeUInt32(this.numValuesPerNode, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.returnBounds, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.isReadModified = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.startTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.endTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.numValuesPerNode = node_opcua_basic_types_1.decodeUInt32(stream);
        this.returnBounds = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaReadRawModifiedDetails; }
}
ReadRawModifiedDetails.possibleFields = [
    "isReadModified",
    "startTime",
    "endTime",
    "numValuesPerNode",
    "returnBounds"
];
ReadRawModifiedDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(649, 0);
ReadRawModifiedDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(648, 0);
exports.ReadRawModifiedDetails = ReadRawModifiedDetails;
ReadRawModifiedDetails.schema.encodingDefaultBinary = ReadRawModifiedDetails.encodingDefaultBinary;
ReadRawModifiedDetails.schema.encodingDefaultXml = ReadRawModifiedDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReadRawModifiedDetails", ReadRawModifiedDetails);
// --------------------------------------------------------------------------------------------
const schemaAggregateConfiguration = node_opcua_factory_1.buildStructuredType({
    name: "AggregateConfiguration",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "useServerCapabilitiesDefaults",
            fieldType: "UABoolean",
        },
        {
            name: "treatUncertainAsBad",
            fieldType: "UABoolean",
        },
        {
            name: "percentDataBad",
            fieldType: "Byte",
        },
        {
            name: "percentDataGood",
            fieldType: "Byte",
        },
        {
            name: "useSlopedExtrapolation",
            fieldType: "UABoolean",
        },
    ]
});
class AggregateConfiguration extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = AggregateConfiguration.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.useServerCapabilitiesDefaults = node_opcua_factory_1.initialize_field(schema.fields[0], options.useServerCapabilitiesDefaults);
        this.treatUncertainAsBad = node_opcua_factory_1.initialize_field(schema.fields[1], options.treatUncertainAsBad);
        this.percentDataBad = node_opcua_factory_1.initialize_field(schema.fields[2], options.percentDataBad);
        this.percentDataGood = node_opcua_factory_1.initialize_field(schema.fields[3], options.percentDataGood);
        this.useSlopedExtrapolation = node_opcua_factory_1.initialize_field(schema.fields[4], options.useSlopedExtrapolation);
    }
    static get schema() { return schemaAggregateConfiguration; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.useServerCapabilitiesDefaults, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.treatUncertainAsBad, stream);
        node_opcua_basic_types_1.encodeByte(this.percentDataBad, stream);
        node_opcua_basic_types_1.encodeByte(this.percentDataGood, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.useSlopedExtrapolation, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.useServerCapabilitiesDefaults = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.treatUncertainAsBad = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.percentDataBad = node_opcua_basic_types_1.decodeByte(stream);
        this.percentDataGood = node_opcua_basic_types_1.decodeByte(stream);
        this.useSlopedExtrapolation = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaAggregateConfiguration; }
}
AggregateConfiguration.possibleFields = [
    "useServerCapabilitiesDefaults",
    "treatUncertainAsBad",
    "percentDataBad",
    "percentDataGood",
    "useSlopedExtrapolation"
];
AggregateConfiguration.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(950, 0);
AggregateConfiguration.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(949, 0);
exports.AggregateConfiguration = AggregateConfiguration;
AggregateConfiguration.schema.encodingDefaultBinary = AggregateConfiguration.encodingDefaultBinary;
AggregateConfiguration.schema.encodingDefaultXml = AggregateConfiguration.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AggregateConfiguration", AggregateConfiguration);
// --------------------------------------------------------------------------------------------
const schemaReadProcessedDetails = node_opcua_factory_1.buildStructuredType({
    name: "ReadProcessedDetails",
    baseType: "HistoryReadDetails",
    fields: [
        {
            name: "startTime",
            fieldType: "DateTime",
        },
        {
            name: "endTime",
            fieldType: "DateTime",
        },
        {
            name: "processingInterval",
            fieldType: "Double",
        },
        {
            name: "aggregateType",
            fieldType: "NodeId",
            isArray: true
        },
        {
            name: "aggregateConfiguration",
            fieldType: "AggregateConfiguration",
        },
    ]
});
class ReadProcessedDetails extends HistoryReadDetails {
    constructor(options) {
        super(options);
        const schema = ReadProcessedDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.aggregateConfiguration = new AggregateConfiguration();
        }
        this.startTime = node_opcua_factory_1.initialize_field(schema.fields[0], options.startTime);
        this.endTime = node_opcua_factory_1.initialize_field(schema.fields[1], options.endTime);
        this.processingInterval = node_opcua_factory_1.initialize_field(schema.fields[2], options.processingInterval);
        this.aggregateType = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.aggregateType);
        this.aggregateConfiguration = new AggregateConfiguration(options.aggregateConfiguration);
    }
    static get schema() { return schemaReadProcessedDetails; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDateTime(this.startTime, stream);
        node_opcua_basic_types_1.encodeDateTime(this.endTime, stream);
        node_opcua_basic_types_1.encodeDouble(this.processingInterval, stream);
        node_opcua_basic_types_1.encodeArray(this.aggregateType, stream, node_opcua_basic_types_1.encodeNodeId);
        this.aggregateConfiguration.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.startTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.endTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.processingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.aggregateType = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeNodeId);
        this.aggregateConfiguration.decode(stream);
    }
    get schema() { return schemaReadProcessedDetails; }
}
ReadProcessedDetails.possibleFields = [
    "startTime",
    "endTime",
    "processingInterval",
    "aggregateType",
    "aggregateConfiguration"
];
ReadProcessedDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(652, 0);
ReadProcessedDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(651, 0);
exports.ReadProcessedDetails = ReadProcessedDetails;
ReadProcessedDetails.schema.encodingDefaultBinary = ReadProcessedDetails.encodingDefaultBinary;
ReadProcessedDetails.schema.encodingDefaultXml = ReadProcessedDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReadProcessedDetails", ReadProcessedDetails);
// --------------------------------------------------------------------------------------------
const schemaReadAtTimeDetails = node_opcua_factory_1.buildStructuredType({
    name: "ReadAtTimeDetails",
    baseType: "HistoryReadDetails",
    fields: [
        {
            name: "reqTimes",
            fieldType: "DateTime",
            isArray: true
        },
        {
            name: "useSimpleBounds",
            fieldType: "UABoolean",
        },
    ]
});
class ReadAtTimeDetails extends HistoryReadDetails {
    constructor(options) {
        super(options);
        const schema = ReadAtTimeDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.reqTimes = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.reqTimes);
        this.useSimpleBounds = node_opcua_factory_1.initialize_field(schema.fields[1], options.useSimpleBounds);
    }
    static get schema() { return schemaReadAtTimeDetails; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.reqTimes, stream, node_opcua_basic_types_1.encodeDateTime);
        node_opcua_basic_types_1.encodeUABoolean(this.useSimpleBounds, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.reqTimes = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeDateTime);
        this.useSimpleBounds = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaReadAtTimeDetails; }
}
ReadAtTimeDetails.possibleFields = [
    "reqTimes",
    "useSimpleBounds"
];
ReadAtTimeDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(655, 0);
ReadAtTimeDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(654, 0);
exports.ReadAtTimeDetails = ReadAtTimeDetails;
ReadAtTimeDetails.schema.encodingDefaultBinary = ReadAtTimeDetails.encodingDefaultBinary;
ReadAtTimeDetails.schema.encodingDefaultXml = ReadAtTimeDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ReadAtTimeDetails", ReadAtTimeDetails);
// --------------------------------------------------------------------------------------------
const schemaHistoryData = node_opcua_factory_1.buildStructuredType({
    name: "HistoryData",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "dataValues",
            fieldType: "DataValue",
            isArray: true
        },
    ]
});
class HistoryData extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryData.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.dataValues = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.dataValues);
    }
    static get schema() { return schemaHistoryData; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.dataValues, stream, node_opcua_data_value_1.encodeDataValue);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.dataValues = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_value_1.decodeDataValue);
    }
    get schema() { return schemaHistoryData; }
}
HistoryData.possibleFields = [
    "dataValues"
];
HistoryData.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(658, 0);
HistoryData.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(657, 0);
exports.HistoryData = HistoryData;
HistoryData.schema.encodingDefaultBinary = HistoryData.encodingDefaultBinary;
HistoryData.schema.encodingDefaultXml = HistoryData.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryData", HistoryData);
// --------------------------------------------------------------------------------------------
var HistoryUpdateType;
(function (HistoryUpdateType) {
    HistoryUpdateType[HistoryUpdateType["Insert"] = 1] = "Insert";
    HistoryUpdateType[HistoryUpdateType["Replace"] = 2] = "Replace";
    HistoryUpdateType[HistoryUpdateType["Update"] = 3] = "Update";
    HistoryUpdateType[HistoryUpdateType["Delete"] = 4] = "Delete";
    HistoryUpdateType[HistoryUpdateType["Invalid"] = 4294967295] = "Invalid";
})(HistoryUpdateType = exports.HistoryUpdateType || (exports.HistoryUpdateType = {}));
const schemaHistoryUpdateType = {
    enumValues: HistoryUpdateType,
    flaggable: false,
    minValue: 1,
    maxValue: 4,
    name: "HistoryUpdateType"
};
function decodeHistoryUpdateType(stream) {
    let value = stream.readUInt32();
    value = (value < schemaHistoryUpdateType.minValue || value > schemaHistoryUpdateType.maxValue) ? HistoryUpdateType.Invalid : value;
    return value;
}
function encodeHistoryUpdateType(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationHistoryUpdateType = node_opcua_factory_1.registerEnumeration(schemaHistoryUpdateType);
// --------------------------------------------------------------------------------------------
const schemaModificationInfo = node_opcua_factory_1.buildStructuredType({
    name: "ModificationInfo",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "modificationTime",
            fieldType: "DateTime",
        },
        {
            name: "updateType",
            fieldType: "HistoryUpdateType",
        },
        {
            name: "userName",
            fieldType: "UAString",
        },
    ]
});
class ModificationInfo extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ModificationInfo.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.modificationTime = node_opcua_factory_1.initialize_field(schema.fields[0], options.modificationTime);
        this.updateType = this.setUpdateType(node_opcua_factory_1.initialize_field(schema.fields[1], options.updateType));
        this.userName = node_opcua_factory_1.initialize_field(schema.fields[2], options.userName);
    }
    static get schema() { return schemaModificationInfo; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDateTime(this.modificationTime, stream);
        encodeHistoryUpdateType(this.updateType, stream);
        node_opcua_basic_types_1.encodeUAString(this.userName, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.modificationTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.updateType = decodeHistoryUpdateType(stream);
        this.userName = node_opcua_basic_types_1.decodeUAString(stream);
    }
    // Define Enumeration setters
    setUpdateType(value) {
        const coercedValue = exports._enumerationHistoryUpdateType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to HistoryUpdateType :" + value);
        }
        this.updateType = coercedValue.value;
        return this.updateType;
    }
    get schema() { return schemaModificationInfo; }
}
ModificationInfo.possibleFields = [
    "modificationTime",
    "updateType",
    "userName"
];
ModificationInfo.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(11226, 0);
ModificationInfo.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(11218, 0);
exports.ModificationInfo = ModificationInfo;
ModificationInfo.schema.encodingDefaultBinary = ModificationInfo.encodingDefaultBinary;
ModificationInfo.schema.encodingDefaultXml = ModificationInfo.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ModificationInfo", ModificationInfo);
// --------------------------------------------------------------------------------------------
const schemaHistoryModifiedData = node_opcua_factory_1.buildStructuredType({
    name: "HistoryModifiedData",
    baseType: "HistoryData",
    fields: [
        {
            name: "dataValues",
            fieldType: "DataValue",
            isArray: true
        },
        {
            name: "modificationInfos",
            fieldType: "ModificationInfo",
            isArray: true
        },
    ]
});
class HistoryModifiedData extends HistoryData {
    constructor(options) {
        super(options);
        const schema = HistoryModifiedData.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.modificationInfos = null; /* null array */
        }
        this.dataValues = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.dataValues);
        this.modificationInfos = []; // should default
        if (options.modificationInfos) {
            node_opcua_assert_1.assert(_.isArray(options.modificationInfos));
            this.modificationInfos = options.modificationInfos.map((e) => new ModificationInfo(e));
        }
    }
    static get schema() { return schemaHistoryModifiedData; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.dataValues, stream, node_opcua_data_value_1.encodeDataValue);
        node_opcua_basic_types_1.encodeArray(this.modificationInfos, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.dataValues = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_value_1.decodeDataValue);
        this.modificationInfos = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new ModificationInfo();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaHistoryModifiedData; }
}
HistoryModifiedData.possibleFields = [
    "dataValues",
    "modificationInfos"
];
HistoryModifiedData.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(11227, 0);
HistoryModifiedData.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(11219, 0);
exports.HistoryModifiedData = HistoryModifiedData;
HistoryModifiedData.schema.encodingDefaultBinary = HistoryModifiedData.encodingDefaultBinary;
HistoryModifiedData.schema.encodingDefaultXml = HistoryModifiedData.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryModifiedData", HistoryModifiedData);
// --------------------------------------------------------------------------------------------
const schemaHistoryEventFieldList = node_opcua_factory_1.buildStructuredType({
    name: "HistoryEventFieldList",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "eventFields",
            fieldType: "Variant",
            isArray: true
        },
    ]
});
class HistoryEventFieldList extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryEventFieldList.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.eventFields = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.eventFields);
    }
    static get schema() { return schemaHistoryEventFieldList; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.eventFields, stream, node_opcua_variant_1.encodeVariant);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.eventFields = node_opcua_basic_types_1.decodeArray(stream, node_opcua_variant_1.decodeVariant);
    }
    get schema() { return schemaHistoryEventFieldList; }
}
HistoryEventFieldList.possibleFields = [
    "eventFields"
];
HistoryEventFieldList.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(922, 0);
HistoryEventFieldList.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(921, 0);
exports.HistoryEventFieldList = HistoryEventFieldList;
HistoryEventFieldList.schema.encodingDefaultBinary = HistoryEventFieldList.encodingDefaultBinary;
HistoryEventFieldList.schema.encodingDefaultXml = HistoryEventFieldList.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryEventFieldList", HistoryEventFieldList);
// --------------------------------------------------------------------------------------------
const schemaHistoryEvent = node_opcua_factory_1.buildStructuredType({
    name: "HistoryEvent",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "events",
            fieldType: "HistoryEventFieldList",
            isArray: true
        },
    ]
});
class HistoryEvent extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryEvent.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.events = null; /* null array */
        }
        this.events = []; // should default
        if (options.events) {
            node_opcua_assert_1.assert(_.isArray(options.events));
            this.events = options.events.map((e) => new HistoryEventFieldList(e));
        }
    }
    static get schema() { return schemaHistoryEvent; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.events, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.events = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new HistoryEventFieldList();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaHistoryEvent; }
}
HistoryEvent.possibleFields = [
    "events"
];
HistoryEvent.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(661, 0);
HistoryEvent.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(660, 0);
exports.HistoryEvent = HistoryEvent;
HistoryEvent.schema.encodingDefaultBinary = HistoryEvent.encodingDefaultBinary;
HistoryEvent.schema.encodingDefaultXml = HistoryEvent.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryEvent", HistoryEvent);
// --------------------------------------------------------------------------------------------
const schemaHistoryReadRequest = node_opcua_factory_1.buildStructuredType({
    name: "HistoryReadRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "historyReadDetails",
            fieldType: "ExtensionObject",
        },
        {
            name: "timestampsToReturn",
            fieldType: "TimestampsToReturn",
        },
        {
            name: "releaseContinuationPoints",
            fieldType: "UABoolean",
        },
        {
            name: "nodesToRead",
            fieldType: "HistoryReadValueId",
            isArray: true
        },
    ]
});
class HistoryReadRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryReadRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.nodesToRead = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.historyReadDetails = node_opcua_factory_1.initialize_field(schema.fields[1], options.historyReadDetails);
        this.timestampsToReturn = this.setTimestampsToReturn(node_opcua_factory_1.initialize_field(schema.fields[2], options.timestampsToReturn));
        this.releaseContinuationPoints = node_opcua_factory_1.initialize_field(schema.fields[3], options.releaseContinuationPoints);
        this.nodesToRead = []; // should default
        if (options.nodesToRead) {
            node_opcua_assert_1.assert(_.isArray(options.nodesToRead));
            this.nodesToRead = options.nodesToRead.map((e) => new HistoryReadValueId(e));
        }
    }
    static get schema() { return schemaHistoryReadRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.historyReadDetails, stream);
        node_opcua_data_value_1.encodeTimestampsToReturn(this.timestampsToReturn, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.releaseContinuationPoints, stream);
        node_opcua_basic_types_1.encodeArray(this.nodesToRead, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.historyReadDetails = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.timestampsToReturn = node_opcua_data_value_1.decodeTimestampsToReturn(stream);
        this.releaseContinuationPoints = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.nodesToRead = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new HistoryReadValueId();
            obj.decode(stream1);
            return obj;
        });
    }
    // Define Enumeration setters
    setTimestampsToReturn(value) {
        const coercedValue = node_opcua_data_value_1._enumerationTimestampsToReturn.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to TimestampsToReturn :" + value);
        }
        this.timestampsToReturn = coercedValue.value;
        return this.timestampsToReturn;
    }
    get schema() { return schemaHistoryReadRequest; }
}
HistoryReadRequest.possibleFields = [
    "requestHeader",
    "historyReadDetails",
    "timestampsToReturn",
    "releaseContinuationPoints",
    "nodesToRead"
];
HistoryReadRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(664, 0);
HistoryReadRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(663, 0);
exports.HistoryReadRequest = HistoryReadRequest;
HistoryReadRequest.schema.encodingDefaultBinary = HistoryReadRequest.encodingDefaultBinary;
HistoryReadRequest.schema.encodingDefaultXml = HistoryReadRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryReadRequest", HistoryReadRequest);
// --------------------------------------------------------------------------------------------
const schemaHistoryReadResponse = node_opcua_factory_1.buildStructuredType({
    name: "HistoryReadResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "HistoryReadResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class HistoryReadResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryReadResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new HistoryReadResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaHistoryReadResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new HistoryReadResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaHistoryReadResponse; }
}
HistoryReadResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
HistoryReadResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(667, 0);
HistoryReadResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(666, 0);
exports.HistoryReadResponse = HistoryReadResponse;
HistoryReadResponse.schema.encodingDefaultBinary = HistoryReadResponse.encodingDefaultBinary;
HistoryReadResponse.schema.encodingDefaultXml = HistoryReadResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryReadResponse", HistoryReadResponse);
// --------------------------------------------------------------------------------------------
const schemaWriteValue = node_opcua_factory_1.buildStructuredType({
    name: "WriteValue",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "nodeId",
            fieldType: "NodeId",
        },
        {
            name: "attributeId",
            fieldType: "UInt32",
        },
        {
            name: "indexRange",
            fieldType: "NumericRange",
        },
        {
            name: "value",
            fieldType: "DataValue",
        },
    ]
});
class WriteValue extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = WriteValue.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
        this.attributeId = node_opcua_factory_1.initialize_field(schema.fields[1], options.attributeId);
        this.indexRange = node_opcua_factory_1.initialize_field(schema.fields[2], options.indexRange);
        this.value = node_opcua_factory_1.initialize_field(schema.fields[3], options.value);
    }
    static get schema() { return schemaWriteValue; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.nodeId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.attributeId, stream);
        node_opcua_numeric_range_1.encodeNumericRange(this.indexRange, stream);
        node_opcua_data_value_1.encodeDataValue(this.value, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.attributeId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.indexRange = node_opcua_numeric_range_1.decodeNumericRange(stream);
        this.value = node_opcua_data_value_1.decodeDataValue(stream);
    }
    get schema() { return schemaWriteValue; }
}
WriteValue.possibleFields = [
    "nodeId",
    "attributeId",
    "indexRange",
    "value"
];
WriteValue.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(670, 0);
WriteValue.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(669, 0);
exports.WriteValue = WriteValue;
WriteValue.schema.encodingDefaultBinary = WriteValue.encodingDefaultBinary;
WriteValue.schema.encodingDefaultXml = WriteValue.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("WriteValue", WriteValue);
// --------------------------------------------------------------------------------------------
const schemaWriteRequest = node_opcua_factory_1.buildStructuredType({
    name: "WriteRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "nodesToWrite",
            fieldType: "WriteValue",
            isArray: true
        },
    ]
});
class WriteRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = WriteRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.nodesToWrite = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.nodesToWrite = []; // should default
        if (options.nodesToWrite) {
            node_opcua_assert_1.assert(_.isArray(options.nodesToWrite));
            this.nodesToWrite = options.nodesToWrite.map((e) => new WriteValue(e));
        }
    }
    static get schema() { return schemaWriteRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.nodesToWrite, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.nodesToWrite = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new WriteValue();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaWriteRequest; }
}
WriteRequest.possibleFields = [
    "requestHeader",
    "nodesToWrite"
];
WriteRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(673, 0);
WriteRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(672, 0);
exports.WriteRequest = WriteRequest;
WriteRequest.schema.encodingDefaultBinary = WriteRequest.encodingDefaultBinary;
WriteRequest.schema.encodingDefaultXml = WriteRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("WriteRequest", WriteRequest);
// --------------------------------------------------------------------------------------------
const schemaWriteResponse = node_opcua_factory_1.buildStructuredType({
    name: "WriteResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class WriteResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = WriteResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaWriteResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaWriteResponse; }
}
WriteResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
WriteResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(676, 0);
WriteResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(675, 0);
exports.WriteResponse = WriteResponse;
WriteResponse.schema.encodingDefaultBinary = WriteResponse.encodingDefaultBinary;
WriteResponse.schema.encodingDefaultXml = WriteResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("WriteResponse", WriteResponse);
// --------------------------------------------------------------------------------------------
const schemaHistoryUpdateDetails = node_opcua_factory_1.buildStructuredType({
    name: "HistoryUpdateDetails",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "nodeId",
            fieldType: "NodeId",
        },
    ]
});
class HistoryUpdateDetails extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryUpdateDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.nodeId = node_opcua_factory_1.initialize_field(schema.fields[0], options.nodeId);
    }
    static get schema() { return schemaHistoryUpdateDetails; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.nodeId, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.nodeId = node_opcua_basic_types_1.decodeNodeId(stream);
    }
    get schema() { return schemaHistoryUpdateDetails; }
}
HistoryUpdateDetails.possibleFields = [
    "nodeId"
];
HistoryUpdateDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(679, 0);
HistoryUpdateDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(678, 0);
exports.HistoryUpdateDetails = HistoryUpdateDetails;
HistoryUpdateDetails.schema.encodingDefaultBinary = HistoryUpdateDetails.encodingDefaultBinary;
HistoryUpdateDetails.schema.encodingDefaultXml = HistoryUpdateDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryUpdateDetails", HistoryUpdateDetails);
// --------------------------------------------------------------------------------------------
var PerformUpdateType;
(function (PerformUpdateType) {
    PerformUpdateType[PerformUpdateType["Insert"] = 1] = "Insert";
    PerformUpdateType[PerformUpdateType["Replace"] = 2] = "Replace";
    PerformUpdateType[PerformUpdateType["Update"] = 3] = "Update";
    PerformUpdateType[PerformUpdateType["Remove"] = 4] = "Remove";
    PerformUpdateType[PerformUpdateType["Invalid"] = 4294967295] = "Invalid";
})(PerformUpdateType = exports.PerformUpdateType || (exports.PerformUpdateType = {}));
const schemaPerformUpdateType = {
    enumValues: PerformUpdateType,
    flaggable: false,
    minValue: 1,
    maxValue: 4,
    name: "PerformUpdateType"
};
function decodePerformUpdateType(stream) {
    let value = stream.readUInt32();
    value = (value < schemaPerformUpdateType.minValue || value > schemaPerformUpdateType.maxValue) ? PerformUpdateType.Invalid : value;
    return value;
}
function encodePerformUpdateType(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationPerformUpdateType = node_opcua_factory_1.registerEnumeration(schemaPerformUpdateType);
// --------------------------------------------------------------------------------------------
const schemaUpdateDataDetails = node_opcua_factory_1.buildStructuredType({
    name: "UpdateDataDetails",
    baseType: "HistoryUpdateDetails",
    fields: [
        {
            name: "performInsertReplace",
            fieldType: "PerformUpdateType",
        },
        {
            name: "updateValues",
            fieldType: "DataValue",
            isArray: true
        },
    ]
});
class UpdateDataDetails extends HistoryUpdateDetails {
    constructor(options) {
        super(options);
        const schema = UpdateDataDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.performInsertReplace = this.setPerformInsertReplace(node_opcua_factory_1.initialize_field(schema.fields[0], options.performInsertReplace));
        this.updateValues = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.updateValues);
    }
    static get schema() { return schemaUpdateDataDetails; }
    encode(stream) {
        super.encode(stream);
        encodePerformUpdateType(this.performInsertReplace, stream);
        node_opcua_basic_types_1.encodeArray(this.updateValues, stream, node_opcua_data_value_1.encodeDataValue);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.performInsertReplace = decodePerformUpdateType(stream);
        this.updateValues = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_value_1.decodeDataValue);
    }
    // Define Enumeration setters
    setPerformInsertReplace(value) {
        const coercedValue = exports._enumerationPerformUpdateType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to PerformUpdateType :" + value);
        }
        this.performInsertReplace = coercedValue.value;
        return this.performInsertReplace;
    }
    get schema() { return schemaUpdateDataDetails; }
}
UpdateDataDetails.possibleFields = [
    "performInsertReplace",
    "updateValues"
];
UpdateDataDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(682, 0);
UpdateDataDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(681, 0);
exports.UpdateDataDetails = UpdateDataDetails;
UpdateDataDetails.schema.encodingDefaultBinary = UpdateDataDetails.encodingDefaultBinary;
UpdateDataDetails.schema.encodingDefaultXml = UpdateDataDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UpdateDataDetails", UpdateDataDetails);
// --------------------------------------------------------------------------------------------
const schemaUpdateStructureDataDetails = node_opcua_factory_1.buildStructuredType({
    name: "UpdateStructureDataDetails",
    baseType: "HistoryUpdateDetails",
    fields: [
        {
            name: "performInsertReplace",
            fieldType: "PerformUpdateType",
        },
        {
            name: "updateValues",
            fieldType: "DataValue",
            isArray: true
        },
    ]
});
class UpdateStructureDataDetails extends HistoryUpdateDetails {
    constructor(options) {
        super(options);
        const schema = UpdateStructureDataDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.performInsertReplace = this.setPerformInsertReplace(node_opcua_factory_1.initialize_field(schema.fields[0], options.performInsertReplace));
        this.updateValues = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.updateValues);
    }
    static get schema() { return schemaUpdateStructureDataDetails; }
    encode(stream) {
        super.encode(stream);
        encodePerformUpdateType(this.performInsertReplace, stream);
        node_opcua_basic_types_1.encodeArray(this.updateValues, stream, node_opcua_data_value_1.encodeDataValue);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.performInsertReplace = decodePerformUpdateType(stream);
        this.updateValues = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_value_1.decodeDataValue);
    }
    // Define Enumeration setters
    setPerformInsertReplace(value) {
        const coercedValue = exports._enumerationPerformUpdateType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to PerformUpdateType :" + value);
        }
        this.performInsertReplace = coercedValue.value;
        return this.performInsertReplace;
    }
    get schema() { return schemaUpdateStructureDataDetails; }
}
UpdateStructureDataDetails.possibleFields = [
    "performInsertReplace",
    "updateValues"
];
UpdateStructureDataDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(11300, 0);
UpdateStructureDataDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(11296, 0);
exports.UpdateStructureDataDetails = UpdateStructureDataDetails;
UpdateStructureDataDetails.schema.encodingDefaultBinary = UpdateStructureDataDetails.encodingDefaultBinary;
UpdateStructureDataDetails.schema.encodingDefaultXml = UpdateStructureDataDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UpdateStructureDataDetails", UpdateStructureDataDetails);
// --------------------------------------------------------------------------------------------
const schemaUpdateEventDetails = node_opcua_factory_1.buildStructuredType({
    name: "UpdateEventDetails",
    baseType: "HistoryUpdateDetails",
    fields: [
        {
            name: "performInsertReplace",
            fieldType: "PerformUpdateType",
        },
        {
            name: "filter",
            fieldType: "EventFilter",
        },
        {
            name: "eventData",
            fieldType: "HistoryEventFieldList",
            isArray: true
        },
    ]
});
class UpdateEventDetails extends HistoryUpdateDetails {
    constructor(options) {
        super(options);
        const schema = UpdateEventDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.filter = new EventFilter();
            this.eventData = null; /* null array */
        }
        this.performInsertReplace = this.setPerformInsertReplace(node_opcua_factory_1.initialize_field(schema.fields[0], options.performInsertReplace));
        this.filter = new EventFilter(options.filter);
        this.eventData = []; // should default
        if (options.eventData) {
            node_opcua_assert_1.assert(_.isArray(options.eventData));
            this.eventData = options.eventData.map((e) => new HistoryEventFieldList(e));
        }
    }
    static get schema() { return schemaUpdateEventDetails; }
    encode(stream) {
        super.encode(stream);
        encodePerformUpdateType(this.performInsertReplace, stream);
        this.filter.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.eventData, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.performInsertReplace = decodePerformUpdateType(stream);
        this.filter.decode(stream);
        this.eventData = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new HistoryEventFieldList();
            obj.decode(stream1);
            return obj;
        });
    }
    // Define Enumeration setters
    setPerformInsertReplace(value) {
        const coercedValue = exports._enumerationPerformUpdateType.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to PerformUpdateType :" + value);
        }
        this.performInsertReplace = coercedValue.value;
        return this.performInsertReplace;
    }
    get schema() { return schemaUpdateEventDetails; }
}
UpdateEventDetails.possibleFields = [
    "performInsertReplace",
    "filter",
    "eventData"
];
UpdateEventDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(685, 0);
UpdateEventDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(684, 0);
exports.UpdateEventDetails = UpdateEventDetails;
UpdateEventDetails.schema.encodingDefaultBinary = UpdateEventDetails.encodingDefaultBinary;
UpdateEventDetails.schema.encodingDefaultXml = UpdateEventDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("UpdateEventDetails", UpdateEventDetails);
// --------------------------------------------------------------------------------------------
const schemaDeleteRawModifiedDetails = node_opcua_factory_1.buildStructuredType({
    name: "DeleteRawModifiedDetails",
    baseType: "HistoryUpdateDetails",
    fields: [
        {
            name: "isDeleteModified",
            fieldType: "UABoolean",
        },
        {
            name: "startTime",
            fieldType: "DateTime",
        },
        {
            name: "endTime",
            fieldType: "DateTime",
        },
    ]
});
class DeleteRawModifiedDetails extends HistoryUpdateDetails {
    constructor(options) {
        super(options);
        const schema = DeleteRawModifiedDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.isDeleteModified = node_opcua_factory_1.initialize_field(schema.fields[0], options.isDeleteModified);
        this.startTime = node_opcua_factory_1.initialize_field(schema.fields[1], options.startTime);
        this.endTime = node_opcua_factory_1.initialize_field(schema.fields[2], options.endTime);
    }
    static get schema() { return schemaDeleteRawModifiedDetails; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.isDeleteModified, stream);
        node_opcua_basic_types_1.encodeDateTime(this.startTime, stream);
        node_opcua_basic_types_1.encodeDateTime(this.endTime, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.isDeleteModified = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.startTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.endTime = node_opcua_basic_types_1.decodeDateTime(stream);
    }
    get schema() { return schemaDeleteRawModifiedDetails; }
}
DeleteRawModifiedDetails.possibleFields = [
    "isDeleteModified",
    "startTime",
    "endTime"
];
DeleteRawModifiedDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(688, 0);
DeleteRawModifiedDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(687, 0);
exports.DeleteRawModifiedDetails = DeleteRawModifiedDetails;
DeleteRawModifiedDetails.schema.encodingDefaultBinary = DeleteRawModifiedDetails.encodingDefaultBinary;
DeleteRawModifiedDetails.schema.encodingDefaultXml = DeleteRawModifiedDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteRawModifiedDetails", DeleteRawModifiedDetails);
// --------------------------------------------------------------------------------------------
const schemaDeleteAtTimeDetails = node_opcua_factory_1.buildStructuredType({
    name: "DeleteAtTimeDetails",
    baseType: "HistoryUpdateDetails",
    fields: [
        {
            name: "reqTimes",
            fieldType: "DateTime",
            isArray: true
        },
    ]
});
class DeleteAtTimeDetails extends HistoryUpdateDetails {
    constructor(options) {
        super(options);
        const schema = DeleteAtTimeDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.reqTimes = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.reqTimes);
    }
    static get schema() { return schemaDeleteAtTimeDetails; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.reqTimes, stream, node_opcua_basic_types_1.encodeDateTime);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.reqTimes = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeDateTime);
    }
    get schema() { return schemaDeleteAtTimeDetails; }
}
DeleteAtTimeDetails.possibleFields = [
    "reqTimes"
];
DeleteAtTimeDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(691, 0);
DeleteAtTimeDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(690, 0);
exports.DeleteAtTimeDetails = DeleteAtTimeDetails;
DeleteAtTimeDetails.schema.encodingDefaultBinary = DeleteAtTimeDetails.encodingDefaultBinary;
DeleteAtTimeDetails.schema.encodingDefaultXml = DeleteAtTimeDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteAtTimeDetails", DeleteAtTimeDetails);
// --------------------------------------------------------------------------------------------
const schemaDeleteEventDetails = node_opcua_factory_1.buildStructuredType({
    name: "DeleteEventDetails",
    baseType: "HistoryUpdateDetails",
    fields: [
        {
            name: "eventIds",
            fieldType: "ByteString",
            isArray: true
        },
    ]
});
class DeleteEventDetails extends HistoryUpdateDetails {
    constructor(options) {
        super(options);
        const schema = DeleteEventDetails.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.eventIds = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.eventIds);
    }
    static get schema() { return schemaDeleteEventDetails; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.eventIds, stream, node_opcua_basic_types_1.encodeByteString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.eventIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeByteString);
    }
    get schema() { return schemaDeleteEventDetails; }
}
DeleteEventDetails.possibleFields = [
    "eventIds"
];
DeleteEventDetails.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(694, 0);
DeleteEventDetails.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(693, 0);
exports.DeleteEventDetails = DeleteEventDetails;
DeleteEventDetails.schema.encodingDefaultBinary = DeleteEventDetails.encodingDefaultBinary;
DeleteEventDetails.schema.encodingDefaultXml = DeleteEventDetails.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteEventDetails", DeleteEventDetails);
// --------------------------------------------------------------------------------------------
const schemaHistoryUpdateResult = node_opcua_factory_1.buildStructuredType({
    name: "HistoryUpdateResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "operationResults",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class HistoryUpdateResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryUpdateResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.operationResults = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.operationResults);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaHistoryUpdateResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeArray(this.operationResults, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.operationResults = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaHistoryUpdateResult; }
}
HistoryUpdateResult.possibleFields = [
    "statusCode",
    "operationResults",
    "diagnosticInfos"
];
HistoryUpdateResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(697, 0);
HistoryUpdateResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(696, 0);
exports.HistoryUpdateResult = HistoryUpdateResult;
HistoryUpdateResult.schema.encodingDefaultBinary = HistoryUpdateResult.encodingDefaultBinary;
HistoryUpdateResult.schema.encodingDefaultXml = HistoryUpdateResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryUpdateResult", HistoryUpdateResult);
// --------------------------------------------------------------------------------------------
const schemaHistoryUpdateRequest = node_opcua_factory_1.buildStructuredType({
    name: "HistoryUpdateRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "historyUpdateDetails",
            fieldType: "ExtensionObject",
            isArray: true
        },
    ]
});
class HistoryUpdateRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryUpdateRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.historyUpdateDetails = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.historyUpdateDetails);
    }
    static get schema() { return schemaHistoryUpdateRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.historyUpdateDetails, stream, node_opcua_extension_object_1.encodeExtensionObject);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.historyUpdateDetails = node_opcua_basic_types_1.decodeArray(stream, node_opcua_extension_object_1.decodeExtensionObject);
    }
    get schema() { return schemaHistoryUpdateRequest; }
}
HistoryUpdateRequest.possibleFields = [
    "requestHeader",
    "historyUpdateDetails"
];
HistoryUpdateRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(700, 0);
HistoryUpdateRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(699, 0);
exports.HistoryUpdateRequest = HistoryUpdateRequest;
HistoryUpdateRequest.schema.encodingDefaultBinary = HistoryUpdateRequest.encodingDefaultBinary;
HistoryUpdateRequest.schema.encodingDefaultXml = HistoryUpdateRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryUpdateRequest", HistoryUpdateRequest);
// --------------------------------------------------------------------------------------------
const schemaHistoryUpdateResponse = node_opcua_factory_1.buildStructuredType({
    name: "HistoryUpdateResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "HistoryUpdateResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class HistoryUpdateResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = HistoryUpdateResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new HistoryUpdateResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaHistoryUpdateResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new HistoryUpdateResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaHistoryUpdateResponse; }
}
HistoryUpdateResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
HistoryUpdateResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(703, 0);
HistoryUpdateResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(702, 0);
exports.HistoryUpdateResponse = HistoryUpdateResponse;
HistoryUpdateResponse.schema.encodingDefaultBinary = HistoryUpdateResponse.encodingDefaultBinary;
HistoryUpdateResponse.schema.encodingDefaultXml = HistoryUpdateResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("HistoryUpdateResponse", HistoryUpdateResponse);
// --------------------------------------------------------------------------------------------
const schemaCallMethodRequest = node_opcua_factory_1.buildStructuredType({
    name: "CallMethodRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "objectId",
            fieldType: "NodeId",
        },
        {
            name: "methodId",
            fieldType: "NodeId",
        },
        {
            name: "inputArguments",
            fieldType: "Variant",
            isArray: true
        },
    ]
});
class CallMethodRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CallMethodRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.objectId = node_opcua_factory_1.initialize_field(schema.fields[0], options.objectId);
        this.methodId = node_opcua_factory_1.initialize_field(schema.fields[1], options.methodId);
        this.inputArguments = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.inputArguments);
    }
    static get schema() { return schemaCallMethodRequest; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.objectId, stream);
        node_opcua_basic_types_1.encodeNodeId(this.methodId, stream);
        node_opcua_basic_types_1.encodeArray(this.inputArguments, stream, node_opcua_variant_1.encodeVariant);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.objectId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.methodId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.inputArguments = node_opcua_basic_types_1.decodeArray(stream, node_opcua_variant_1.decodeVariant);
    }
    get schema() { return schemaCallMethodRequest; }
}
CallMethodRequest.possibleFields = [
    "objectId",
    "methodId",
    "inputArguments"
];
CallMethodRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(706, 0);
CallMethodRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(705, 0);
exports.CallMethodRequest = CallMethodRequest;
CallMethodRequest.schema.encodingDefaultBinary = CallMethodRequest.encodingDefaultBinary;
CallMethodRequest.schema.encodingDefaultXml = CallMethodRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CallMethodRequest", CallMethodRequest);
// --------------------------------------------------------------------------------------------
const schemaCallMethodResult = node_opcua_factory_1.buildStructuredType({
    name: "CallMethodResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "inputArgumentResults",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "inputArgumentDiagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
        {
            name: "outputArguments",
            fieldType: "Variant",
            isArray: true
        },
    ]
});
class CallMethodResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CallMethodResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.inputArgumentResults = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.inputArgumentResults);
        this.inputArgumentDiagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.inputArgumentDiagnosticInfos);
        this.outputArguments = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.outputArguments);
    }
    static get schema() { return schemaCallMethodResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeArray(this.inputArgumentResults, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.inputArgumentDiagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
        node_opcua_basic_types_1.encodeArray(this.outputArguments, stream, node_opcua_variant_1.encodeVariant);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.inputArgumentResults = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.inputArgumentDiagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
        this.outputArguments = node_opcua_basic_types_1.decodeArray(stream, node_opcua_variant_1.decodeVariant);
    }
    get schema() { return schemaCallMethodResult; }
}
CallMethodResult.possibleFields = [
    "statusCode",
    "inputArgumentResults",
    "inputArgumentDiagnosticInfos",
    "outputArguments"
];
CallMethodResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(709, 0);
CallMethodResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(708, 0);
exports.CallMethodResult = CallMethodResult;
CallMethodResult.schema.encodingDefaultBinary = CallMethodResult.encodingDefaultBinary;
CallMethodResult.schema.encodingDefaultXml = CallMethodResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CallMethodResult", CallMethodResult);
// --------------------------------------------------------------------------------------------
const schemaCallRequest = node_opcua_factory_1.buildStructuredType({
    name: "CallRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "methodsToCall",
            fieldType: "CallMethodRequest",
            isArray: true
        },
    ]
});
class CallRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CallRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.methodsToCall = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.methodsToCall = []; // should default
        if (options.methodsToCall) {
            node_opcua_assert_1.assert(_.isArray(options.methodsToCall));
            this.methodsToCall = options.methodsToCall.map((e) => new CallMethodRequest(e));
        }
    }
    static get schema() { return schemaCallRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.methodsToCall, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.methodsToCall = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new CallMethodRequest();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaCallRequest; }
}
CallRequest.possibleFields = [
    "requestHeader",
    "methodsToCall"
];
CallRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(712, 0);
CallRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(711, 0);
exports.CallRequest = CallRequest;
CallRequest.schema.encodingDefaultBinary = CallRequest.encodingDefaultBinary;
CallRequest.schema.encodingDefaultXml = CallRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CallRequest", CallRequest);
// --------------------------------------------------------------------------------------------
const schemaCallResponse = node_opcua_factory_1.buildStructuredType({
    name: "CallResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "CallMethodResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class CallResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CallResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new CallMethodResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaCallResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new CallMethodResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaCallResponse; }
}
CallResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
CallResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(715, 0);
CallResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(714, 0);
exports.CallResponse = CallResponse;
CallResponse.schema.encodingDefaultBinary = CallResponse.encodingDefaultBinary;
CallResponse.schema.encodingDefaultXml = CallResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CallResponse", CallResponse);
// --------------------------------------------------------------------------------------------
var DataChangeTrigger;
(function (DataChangeTrigger) {
    DataChangeTrigger[DataChangeTrigger["Status"] = 0] = "Status";
    DataChangeTrigger[DataChangeTrigger["StatusValue"] = 1] = "StatusValue";
    DataChangeTrigger[DataChangeTrigger["StatusValueTimestamp"] = 2] = "StatusValueTimestamp";
    DataChangeTrigger[DataChangeTrigger["Invalid"] = 4294967295] = "Invalid";
})(DataChangeTrigger = exports.DataChangeTrigger || (exports.DataChangeTrigger = {}));
const schemaDataChangeTrigger = {
    enumValues: DataChangeTrigger,
    flaggable: false,
    minValue: 0,
    maxValue: 2,
    name: "DataChangeTrigger"
};
function decodeDataChangeTrigger(stream) {
    let value = stream.readUInt32();
    value = (value < schemaDataChangeTrigger.minValue || value > schemaDataChangeTrigger.maxValue) ? DataChangeTrigger.Invalid : value;
    return value;
}
function encodeDataChangeTrigger(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationDataChangeTrigger = node_opcua_factory_1.registerEnumeration(schemaDataChangeTrigger);
// --------------------------------------------------------------------------------------------
const schemaDataChangeFilter = node_opcua_factory_1.buildStructuredType({
    name: "DataChangeFilter",
    baseType: "MonitoringFilter",
    fields: [
        {
            name: "trigger",
            fieldType: "DataChangeTrigger",
        },
        {
            name: "deadbandType",
            fieldType: "UInt32",
        },
        {
            name: "deadbandValue",
            fieldType: "Double",
        },
    ]
});
class DataChangeFilter extends MonitoringFilter {
    constructor(options) {
        super(options);
        const schema = DataChangeFilter.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.trigger = this.setTrigger(node_opcua_factory_1.initialize_field(schema.fields[0], options.trigger));
        this.deadbandType = node_opcua_factory_1.initialize_field(schema.fields[1], options.deadbandType);
        this.deadbandValue = node_opcua_factory_1.initialize_field(schema.fields[2], options.deadbandValue);
    }
    static get schema() { return schemaDataChangeFilter; }
    encode(stream) {
        super.encode(stream);
        encodeDataChangeTrigger(this.trigger, stream);
        node_opcua_basic_types_1.encodeUInt32(this.deadbandType, stream);
        node_opcua_basic_types_1.encodeDouble(this.deadbandValue, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.trigger = decodeDataChangeTrigger(stream);
        this.deadbandType = node_opcua_basic_types_1.decodeUInt32(stream);
        this.deadbandValue = node_opcua_basic_types_1.decodeDouble(stream);
    }
    // Define Enumeration setters
    setTrigger(value) {
        const coercedValue = exports._enumerationDataChangeTrigger.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to DataChangeTrigger :" + value);
        }
        this.trigger = coercedValue.value;
        return this.trigger;
    }
    get schema() { return schemaDataChangeFilter; }
}
DataChangeFilter.possibleFields = [
    "trigger",
    "deadbandType",
    "deadbandValue"
];
DataChangeFilter.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(724, 0);
DataChangeFilter.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(723, 0);
exports.DataChangeFilter = DataChangeFilter;
DataChangeFilter.schema.encodingDefaultBinary = DataChangeFilter.encodingDefaultBinary;
DataChangeFilter.schema.encodingDefaultXml = DataChangeFilter.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataChangeFilter", DataChangeFilter);
// --------------------------------------------------------------------------------------------
const schemaThreeSpaceSampleDataType = node_opcua_factory_1.buildStructuredType({
    name: "ThreeSpaceSampleDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "x",
            fieldType: "Double",
        },
        {
            name: "y",
            fieldType: "Double",
        },
        {
            name: "z",
            fieldType: "Double",
        },
    ]
});
class ThreeSpaceSampleDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ThreeSpaceSampleDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.x = node_opcua_factory_1.initialize_field(schema.fields[0], options.x);
        this.y = node_opcua_factory_1.initialize_field(schema.fields[1], options.y);
        this.z = node_opcua_factory_1.initialize_field(schema.fields[2], options.z);
    }
    static get schema() { return schemaThreeSpaceSampleDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDouble(this.x, stream);
        node_opcua_basic_types_1.encodeDouble(this.y, stream);
        node_opcua_basic_types_1.encodeDouble(this.z, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.x = node_opcua_basic_types_1.decodeDouble(stream);
        this.y = node_opcua_basic_types_1.decodeDouble(stream);
        this.z = node_opcua_basic_types_1.decodeDouble(stream);
    }
    get schema() { return schemaThreeSpaceSampleDataType; }
}
ThreeSpaceSampleDataType.possibleFields = [
    "x",
    "y",
    "z"
];
ThreeSpaceSampleDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(2637, 2);
ThreeSpaceSampleDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(2637, 2);
exports.ThreeSpaceSampleDataType = ThreeSpaceSampleDataType;
ThreeSpaceSampleDataType.schema.encodingDefaultBinary = ThreeSpaceSampleDataType.encodingDefaultBinary;
ThreeSpaceSampleDataType.schema.encodingDefaultXml = ThreeSpaceSampleDataType.encodingDefaultXml;
// --------------------------------------------------------------------------------------------
const schemaAggregateFilter = node_opcua_factory_1.buildStructuredType({
    name: "AggregateFilter",
    baseType: "MonitoringFilter",
    fields: [
        {
            name: "startTime",
            fieldType: "DateTime",
        },
        {
            name: "aggregateType",
            fieldType: "NodeId",
        },
        {
            name: "processingInterval",
            fieldType: "Double",
        },
        {
            name: "aggregateConfiguration",
            fieldType: "AggregateConfiguration",
        },
    ]
});
class AggregateFilter extends MonitoringFilter {
    constructor(options) {
        super(options);
        const schema = AggregateFilter.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.aggregateConfiguration = new AggregateConfiguration();
        }
        this.startTime = node_opcua_factory_1.initialize_field(schema.fields[0], options.startTime);
        this.aggregateType = node_opcua_factory_1.initialize_field(schema.fields[1], options.aggregateType);
        this.processingInterval = node_opcua_factory_1.initialize_field(schema.fields[2], options.processingInterval);
        this.aggregateConfiguration = new AggregateConfiguration(options.aggregateConfiguration);
    }
    static get schema() { return schemaAggregateFilter; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDateTime(this.startTime, stream);
        node_opcua_basic_types_1.encodeNodeId(this.aggregateType, stream);
        node_opcua_basic_types_1.encodeDouble(this.processingInterval, stream);
        this.aggregateConfiguration.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.startTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.aggregateType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.processingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.aggregateConfiguration.decode(stream);
    }
    get schema() { return schemaAggregateFilter; }
}
AggregateFilter.possibleFields = [
    "startTime",
    "aggregateType",
    "processingInterval",
    "aggregateConfiguration"
];
AggregateFilter.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(730, 0);
AggregateFilter.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(729, 0);
exports.AggregateFilter = AggregateFilter;
AggregateFilter.schema.encodingDefaultBinary = AggregateFilter.encodingDefaultBinary;
AggregateFilter.schema.encodingDefaultXml = AggregateFilter.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AggregateFilter", AggregateFilter);
// --------------------------------------------------------------------------------------------
const schemaMonitoringFilterResult = node_opcua_factory_1.buildStructuredType({
    name: "MonitoringFilterResult",
    baseType: "ExtensionObject",
    fields: []
});
class MonitoringFilterResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = MonitoringFilterResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaMonitoringFilterResult; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaMonitoringFilterResult; }
}
MonitoringFilterResult.possibleFields = [];
MonitoringFilterResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(733, 0);
MonitoringFilterResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(732, 0);
exports.MonitoringFilterResult = MonitoringFilterResult;
MonitoringFilterResult.schema.encodingDefaultBinary = MonitoringFilterResult.encodingDefaultBinary;
MonitoringFilterResult.schema.encodingDefaultXml = MonitoringFilterResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MonitoringFilterResult", MonitoringFilterResult);
// --------------------------------------------------------------------------------------------
const schemaEventFilterResult = node_opcua_factory_1.buildStructuredType({
    name: "EventFilterResult",
    baseType: "MonitoringFilterResult",
    fields: [
        {
            name: "selectClauseResults",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "selectClauseDiagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
        {
            name: "whereClauseResult",
            fieldType: "ContentFilterResult",
        },
    ]
});
class EventFilterResult extends MonitoringFilterResult {
    constructor(options) {
        super(options);
        const schema = EventFilterResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.whereClauseResult = new ContentFilterResult();
        }
        this.selectClauseResults = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.selectClauseResults);
        this.selectClauseDiagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.selectClauseDiagnosticInfos);
        this.whereClauseResult = new ContentFilterResult(options.whereClauseResult);
    }
    static get schema() { return schemaEventFilterResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.selectClauseResults, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.selectClauseDiagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
        this.whereClauseResult.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.selectClauseResults = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.selectClauseDiagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
        this.whereClauseResult.decode(stream);
    }
    get schema() { return schemaEventFilterResult; }
}
EventFilterResult.possibleFields = [
    "selectClauseResults",
    "selectClauseDiagnosticInfos",
    "whereClauseResult"
];
EventFilterResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(736, 0);
EventFilterResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(735, 0);
exports.EventFilterResult = EventFilterResult;
EventFilterResult.schema.encodingDefaultBinary = EventFilterResult.encodingDefaultBinary;
EventFilterResult.schema.encodingDefaultXml = EventFilterResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EventFilterResult", EventFilterResult);
// --------------------------------------------------------------------------------------------
const schemaAggregateFilterResult = node_opcua_factory_1.buildStructuredType({
    name: "AggregateFilterResult",
    baseType: "MonitoringFilterResult",
    fields: [
        {
            name: "revisedStartTime",
            fieldType: "DateTime",
        },
        {
            name: "revisedProcessingInterval",
            fieldType: "Double",
        },
        {
            name: "revisedAggregateConfiguration",
            fieldType: "AggregateConfiguration",
        },
    ]
});
class AggregateFilterResult extends MonitoringFilterResult {
    constructor(options) {
        super(options);
        const schema = AggregateFilterResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.revisedAggregateConfiguration = new AggregateConfiguration();
        }
        this.revisedStartTime = node_opcua_factory_1.initialize_field(schema.fields[0], options.revisedStartTime);
        this.revisedProcessingInterval = node_opcua_factory_1.initialize_field(schema.fields[1], options.revisedProcessingInterval);
        this.revisedAggregateConfiguration = new AggregateConfiguration(options.revisedAggregateConfiguration);
    }
    static get schema() { return schemaAggregateFilterResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDateTime(this.revisedStartTime, stream);
        node_opcua_basic_types_1.encodeDouble(this.revisedProcessingInterval, stream);
        this.revisedAggregateConfiguration.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.revisedStartTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.revisedProcessingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.revisedAggregateConfiguration.decode(stream);
    }
    get schema() { return schemaAggregateFilterResult; }
}
AggregateFilterResult.possibleFields = [
    "revisedStartTime",
    "revisedProcessingInterval",
    "revisedAggregateConfiguration"
];
AggregateFilterResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(739, 0);
AggregateFilterResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(738, 0);
exports.AggregateFilterResult = AggregateFilterResult;
AggregateFilterResult.schema.encodingDefaultBinary = AggregateFilterResult.encodingDefaultBinary;
AggregateFilterResult.schema.encodingDefaultXml = AggregateFilterResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("AggregateFilterResult", AggregateFilterResult);
// --------------------------------------------------------------------------------------------
const schemaMonitoringParameters = node_opcua_factory_1.buildStructuredType({
    name: "MonitoringParameters",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "clientHandle",
            fieldType: "UInt32",
        },
        {
            name: "samplingInterval",
            fieldType: "Double",
        },
        {
            name: "filter",
            fieldType: "ExtensionObject",
        },
        {
            name: "queueSize",
            fieldType: "UInt32",
        },
        {
            name: "discardOldest",
            fieldType: "UABoolean",
        },
    ]
});
class MonitoringParameters extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = MonitoringParameters.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.clientHandle = node_opcua_factory_1.initialize_field(schema.fields[0], options.clientHandle);
        this.samplingInterval = node_opcua_factory_1.initialize_field(schema.fields[1], options.samplingInterval);
        this.filter = node_opcua_factory_1.initialize_field(schema.fields[2], options.filter);
        this.queueSize = node_opcua_factory_1.initialize_field(schema.fields[3], options.queueSize);
        this.discardOldest = node_opcua_factory_1.initialize_field(schema.fields[4], options.discardOldest);
    }
    static get schema() { return schemaMonitoringParameters; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.clientHandle, stream);
        node_opcua_basic_types_1.encodeDouble(this.samplingInterval, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.filter, stream);
        node_opcua_basic_types_1.encodeUInt32(this.queueSize, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.discardOldest, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.clientHandle = node_opcua_basic_types_1.decodeUInt32(stream);
        this.samplingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.filter = node_opcua_extension_object_1.decodeExtensionObject(stream);
        this.queueSize = node_opcua_basic_types_1.decodeUInt32(stream);
        this.discardOldest = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaMonitoringParameters; }
}
MonitoringParameters.possibleFields = [
    "clientHandle",
    "samplingInterval",
    "filter",
    "queueSize",
    "discardOldest"
];
MonitoringParameters.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(742, 0);
MonitoringParameters.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(741, 0);
exports.MonitoringParameters = MonitoringParameters;
MonitoringParameters.schema.encodingDefaultBinary = MonitoringParameters.encodingDefaultBinary;
MonitoringParameters.schema.encodingDefaultXml = MonitoringParameters.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MonitoringParameters", MonitoringParameters);
// --------------------------------------------------------------------------------------------
var MonitoringMode;
(function (MonitoringMode) {
    MonitoringMode[MonitoringMode["Disabled"] = 0] = "Disabled";
    MonitoringMode[MonitoringMode["Sampling"] = 1] = "Sampling";
    MonitoringMode[MonitoringMode["Reporting"] = 2] = "Reporting";
    MonitoringMode[MonitoringMode["Invalid"] = 4294967295] = "Invalid";
})(MonitoringMode = exports.MonitoringMode || (exports.MonitoringMode = {}));
const schemaMonitoringMode = {
    enumValues: MonitoringMode,
    flaggable: false,
    minValue: 0,
    maxValue: 2,
    name: "MonitoringMode"
};
function decodeMonitoringMode(stream) {
    let value = stream.readUInt32();
    value = (value < schemaMonitoringMode.minValue || value > schemaMonitoringMode.maxValue) ? MonitoringMode.Invalid : value;
    return value;
}
function encodeMonitoringMode(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationMonitoringMode = node_opcua_factory_1.registerEnumeration(schemaMonitoringMode);
// --------------------------------------------------------------------------------------------
const schemaMonitoredItemCreateRequest = node_opcua_factory_1.buildStructuredType({
    name: "MonitoredItemCreateRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "itemToMonitor",
            fieldType: "ReadValueId",
        },
        {
            name: "monitoringMode",
            fieldType: "MonitoringMode",
        },
        {
            name: "requestedParameters",
            fieldType: "MonitoringParameters",
        },
    ]
});
class MonitoredItemCreateRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = MonitoredItemCreateRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.itemToMonitor = new ReadValueId();
            this.requestedParameters = new MonitoringParameters();
        }
        this.itemToMonitor = new ReadValueId(options.itemToMonitor);
        this.monitoringMode = this.setMonitoringMode(node_opcua_factory_1.initialize_field(schema.fields[1], options.monitoringMode));
        this.requestedParameters = new MonitoringParameters(options.requestedParameters);
    }
    static get schema() { return schemaMonitoredItemCreateRequest; }
    encode(stream) {
        super.encode(stream);
        this.itemToMonitor.encode(stream);
        encodeMonitoringMode(this.monitoringMode, stream);
        this.requestedParameters.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.itemToMonitor.decode(stream);
        this.monitoringMode = decodeMonitoringMode(stream);
        this.requestedParameters.decode(stream);
    }
    // Define Enumeration setters
    setMonitoringMode(value) {
        const coercedValue = exports._enumerationMonitoringMode.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to MonitoringMode :" + value);
        }
        this.monitoringMode = coercedValue.value;
        return this.monitoringMode;
    }
    get schema() { return schemaMonitoredItemCreateRequest; }
}
MonitoredItemCreateRequest.possibleFields = [
    "itemToMonitor",
    "monitoringMode",
    "requestedParameters"
];
MonitoredItemCreateRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(745, 0);
MonitoredItemCreateRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(744, 0);
exports.MonitoredItemCreateRequest = MonitoredItemCreateRequest;
MonitoredItemCreateRequest.schema.encodingDefaultBinary = MonitoredItemCreateRequest.encodingDefaultBinary;
MonitoredItemCreateRequest.schema.encodingDefaultXml = MonitoredItemCreateRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MonitoredItemCreateRequest", MonitoredItemCreateRequest);
// --------------------------------------------------------------------------------------------
const schemaMonitoredItemCreateResult = node_opcua_factory_1.buildStructuredType({
    name: "MonitoredItemCreateResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "monitoredItemId",
            fieldType: "UInt32",
        },
        {
            name: "revisedSamplingInterval",
            fieldType: "Double",
        },
        {
            name: "revisedQueueSize",
            fieldType: "UInt32",
        },
        {
            name: "filterResult",
            fieldType: "ExtensionObject",
        },
    ]
});
class MonitoredItemCreateResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = MonitoredItemCreateResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.monitoredItemId = node_opcua_factory_1.initialize_field(schema.fields[1], options.monitoredItemId);
        this.revisedSamplingInterval = node_opcua_factory_1.initialize_field(schema.fields[2], options.revisedSamplingInterval);
        this.revisedQueueSize = node_opcua_factory_1.initialize_field(schema.fields[3], options.revisedQueueSize);
        this.filterResult = node_opcua_factory_1.initialize_field(schema.fields[4], options.filterResult);
    }
    static get schema() { return schemaMonitoredItemCreateResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeUInt32(this.monitoredItemId, stream);
        node_opcua_basic_types_1.encodeDouble(this.revisedSamplingInterval, stream);
        node_opcua_basic_types_1.encodeUInt32(this.revisedQueueSize, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.filterResult, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.monitoredItemId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.revisedSamplingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.revisedQueueSize = node_opcua_basic_types_1.decodeUInt32(stream);
        this.filterResult = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    get schema() { return schemaMonitoredItemCreateResult; }
}
MonitoredItemCreateResult.possibleFields = [
    "statusCode",
    "monitoredItemId",
    "revisedSamplingInterval",
    "revisedQueueSize",
    "filterResult"
];
MonitoredItemCreateResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(748, 0);
MonitoredItemCreateResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(747, 0);
exports.MonitoredItemCreateResult = MonitoredItemCreateResult;
MonitoredItemCreateResult.schema.encodingDefaultBinary = MonitoredItemCreateResult.encodingDefaultBinary;
MonitoredItemCreateResult.schema.encodingDefaultXml = MonitoredItemCreateResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MonitoredItemCreateResult", MonitoredItemCreateResult);
// --------------------------------------------------------------------------------------------
const schemaCreateMonitoredItemsRequest = node_opcua_factory_1.buildStructuredType({
    name: "CreateMonitoredItemsRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "timestampsToReturn",
            fieldType: "TimestampsToReturn",
        },
        {
            name: "itemsToCreate",
            fieldType: "MonitoredItemCreateRequest",
            isArray: true
        },
    ]
});
class CreateMonitoredItemsRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CreateMonitoredItemsRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.itemsToCreate = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.timestampsToReturn = this.setTimestampsToReturn(node_opcua_factory_1.initialize_field(schema.fields[2], options.timestampsToReturn));
        this.itemsToCreate = []; // should default
        if (options.itemsToCreate) {
            node_opcua_assert_1.assert(_.isArray(options.itemsToCreate));
            this.itemsToCreate = options.itemsToCreate.map((e) => new MonitoredItemCreateRequest(e));
        }
    }
    static get schema() { return schemaCreateMonitoredItemsRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_data_value_1.encodeTimestampsToReturn(this.timestampsToReturn, stream);
        node_opcua_basic_types_1.encodeArray(this.itemsToCreate, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.timestampsToReturn = node_opcua_data_value_1.decodeTimestampsToReturn(stream);
        this.itemsToCreate = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new MonitoredItemCreateRequest();
            obj.decode(stream1);
            return obj;
        });
    }
    // Define Enumeration setters
    setTimestampsToReturn(value) {
        const coercedValue = node_opcua_data_value_1._enumerationTimestampsToReturn.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to TimestampsToReturn :" + value);
        }
        this.timestampsToReturn = coercedValue.value;
        return this.timestampsToReturn;
    }
    get schema() { return schemaCreateMonitoredItemsRequest; }
}
CreateMonitoredItemsRequest.possibleFields = [
    "requestHeader",
    "subscriptionId",
    "timestampsToReturn",
    "itemsToCreate"
];
CreateMonitoredItemsRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(751, 0);
CreateMonitoredItemsRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(750, 0);
exports.CreateMonitoredItemsRequest = CreateMonitoredItemsRequest;
CreateMonitoredItemsRequest.schema.encodingDefaultBinary = CreateMonitoredItemsRequest.encodingDefaultBinary;
CreateMonitoredItemsRequest.schema.encodingDefaultXml = CreateMonitoredItemsRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CreateMonitoredItemsRequest", CreateMonitoredItemsRequest);
// --------------------------------------------------------------------------------------------
const schemaCreateMonitoredItemsResponse = node_opcua_factory_1.buildStructuredType({
    name: "CreateMonitoredItemsResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "MonitoredItemCreateResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class CreateMonitoredItemsResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CreateMonitoredItemsResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new MonitoredItemCreateResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaCreateMonitoredItemsResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new MonitoredItemCreateResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaCreateMonitoredItemsResponse; }
}
CreateMonitoredItemsResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
CreateMonitoredItemsResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(754, 0);
CreateMonitoredItemsResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(753, 0);
exports.CreateMonitoredItemsResponse = CreateMonitoredItemsResponse;
CreateMonitoredItemsResponse.schema.encodingDefaultBinary = CreateMonitoredItemsResponse.encodingDefaultBinary;
CreateMonitoredItemsResponse.schema.encodingDefaultXml = CreateMonitoredItemsResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CreateMonitoredItemsResponse", CreateMonitoredItemsResponse);
// --------------------------------------------------------------------------------------------
const schemaMonitoredItemModifyRequest = node_opcua_factory_1.buildStructuredType({
    name: "MonitoredItemModifyRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "monitoredItemId",
            fieldType: "UInt32",
        },
        {
            name: "requestedParameters",
            fieldType: "MonitoringParameters",
        },
    ]
});
class MonitoredItemModifyRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = MonitoredItemModifyRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestedParameters = new MonitoringParameters();
        }
        this.monitoredItemId = node_opcua_factory_1.initialize_field(schema.fields[0], options.monitoredItemId);
        this.requestedParameters = new MonitoringParameters(options.requestedParameters);
    }
    static get schema() { return schemaMonitoredItemModifyRequest; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.monitoredItemId, stream);
        this.requestedParameters.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.monitoredItemId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.requestedParameters.decode(stream);
    }
    get schema() { return schemaMonitoredItemModifyRequest; }
}
MonitoredItemModifyRequest.possibleFields = [
    "monitoredItemId",
    "requestedParameters"
];
MonitoredItemModifyRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(757, 0);
MonitoredItemModifyRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(756, 0);
exports.MonitoredItemModifyRequest = MonitoredItemModifyRequest;
MonitoredItemModifyRequest.schema.encodingDefaultBinary = MonitoredItemModifyRequest.encodingDefaultBinary;
MonitoredItemModifyRequest.schema.encodingDefaultXml = MonitoredItemModifyRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MonitoredItemModifyRequest", MonitoredItemModifyRequest);
// --------------------------------------------------------------------------------------------
const schemaMonitoredItemModifyResult = node_opcua_factory_1.buildStructuredType({
    name: "MonitoredItemModifyResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "revisedSamplingInterval",
            fieldType: "Double",
        },
        {
            name: "revisedQueueSize",
            fieldType: "UInt32",
        },
        {
            name: "filterResult",
            fieldType: "ExtensionObject",
        },
    ]
});
class MonitoredItemModifyResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = MonitoredItemModifyResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.revisedSamplingInterval = node_opcua_factory_1.initialize_field(schema.fields[1], options.revisedSamplingInterval);
        this.revisedQueueSize = node_opcua_factory_1.initialize_field(schema.fields[2], options.revisedQueueSize);
        this.filterResult = node_opcua_factory_1.initialize_field(schema.fields[3], options.filterResult);
    }
    static get schema() { return schemaMonitoredItemModifyResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeDouble(this.revisedSamplingInterval, stream);
        node_opcua_basic_types_1.encodeUInt32(this.revisedQueueSize, stream);
        node_opcua_extension_object_1.encodeExtensionObject(this.filterResult, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.revisedSamplingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.revisedQueueSize = node_opcua_basic_types_1.decodeUInt32(stream);
        this.filterResult = node_opcua_extension_object_1.decodeExtensionObject(stream);
    }
    get schema() { return schemaMonitoredItemModifyResult; }
}
MonitoredItemModifyResult.possibleFields = [
    "statusCode",
    "revisedSamplingInterval",
    "revisedQueueSize",
    "filterResult"
];
MonitoredItemModifyResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(760, 0);
MonitoredItemModifyResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(759, 0);
exports.MonitoredItemModifyResult = MonitoredItemModifyResult;
MonitoredItemModifyResult.schema.encodingDefaultBinary = MonitoredItemModifyResult.encodingDefaultBinary;
MonitoredItemModifyResult.schema.encodingDefaultXml = MonitoredItemModifyResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MonitoredItemModifyResult", MonitoredItemModifyResult);
// --------------------------------------------------------------------------------------------
const schemaModifyMonitoredItemsRequest = node_opcua_factory_1.buildStructuredType({
    name: "ModifyMonitoredItemsRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "timestampsToReturn",
            fieldType: "TimestampsToReturn",
        },
        {
            name: "itemsToModify",
            fieldType: "MonitoredItemModifyRequest",
            isArray: true
        },
    ]
});
class ModifyMonitoredItemsRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ModifyMonitoredItemsRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.itemsToModify = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.timestampsToReturn = this.setTimestampsToReturn(node_opcua_factory_1.initialize_field(schema.fields[2], options.timestampsToReturn));
        this.itemsToModify = []; // should default
        if (options.itemsToModify) {
            node_opcua_assert_1.assert(_.isArray(options.itemsToModify));
            this.itemsToModify = options.itemsToModify.map((e) => new MonitoredItemModifyRequest(e));
        }
    }
    static get schema() { return schemaModifyMonitoredItemsRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_data_value_1.encodeTimestampsToReturn(this.timestampsToReturn, stream);
        node_opcua_basic_types_1.encodeArray(this.itemsToModify, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.timestampsToReturn = node_opcua_data_value_1.decodeTimestampsToReturn(stream);
        this.itemsToModify = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new MonitoredItemModifyRequest();
            obj.decode(stream1);
            return obj;
        });
    }
    // Define Enumeration setters
    setTimestampsToReturn(value) {
        const coercedValue = node_opcua_data_value_1._enumerationTimestampsToReturn.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to TimestampsToReturn :" + value);
        }
        this.timestampsToReturn = coercedValue.value;
        return this.timestampsToReturn;
    }
    get schema() { return schemaModifyMonitoredItemsRequest; }
}
ModifyMonitoredItemsRequest.possibleFields = [
    "requestHeader",
    "subscriptionId",
    "timestampsToReturn",
    "itemsToModify"
];
ModifyMonitoredItemsRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(763, 0);
ModifyMonitoredItemsRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(762, 0);
exports.ModifyMonitoredItemsRequest = ModifyMonitoredItemsRequest;
ModifyMonitoredItemsRequest.schema.encodingDefaultBinary = ModifyMonitoredItemsRequest.encodingDefaultBinary;
ModifyMonitoredItemsRequest.schema.encodingDefaultXml = ModifyMonitoredItemsRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ModifyMonitoredItemsRequest", ModifyMonitoredItemsRequest);
// --------------------------------------------------------------------------------------------
const schemaModifyMonitoredItemsResponse = node_opcua_factory_1.buildStructuredType({
    name: "ModifyMonitoredItemsResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "MonitoredItemModifyResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class ModifyMonitoredItemsResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ModifyMonitoredItemsResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new MonitoredItemModifyResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaModifyMonitoredItemsResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new MonitoredItemModifyResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaModifyMonitoredItemsResponse; }
}
ModifyMonitoredItemsResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
ModifyMonitoredItemsResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(766, 0);
ModifyMonitoredItemsResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(765, 0);
exports.ModifyMonitoredItemsResponse = ModifyMonitoredItemsResponse;
ModifyMonitoredItemsResponse.schema.encodingDefaultBinary = ModifyMonitoredItemsResponse.encodingDefaultBinary;
ModifyMonitoredItemsResponse.schema.encodingDefaultXml = ModifyMonitoredItemsResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ModifyMonitoredItemsResponse", ModifyMonitoredItemsResponse);
// --------------------------------------------------------------------------------------------
const schemaSetMonitoringModeRequest = node_opcua_factory_1.buildStructuredType({
    name: "SetMonitoringModeRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "monitoringMode",
            fieldType: "MonitoringMode",
        },
        {
            name: "monitoredItemIds",
            fieldType: "UInt32",
            isArray: true
        },
    ]
});
class SetMonitoringModeRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SetMonitoringModeRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.monitoringMode = this.setMonitoringMode(node_opcua_factory_1.initialize_field(schema.fields[2], options.monitoringMode));
        this.monitoredItemIds = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.monitoredItemIds);
    }
    static get schema() { return schemaSetMonitoringModeRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        encodeMonitoringMode(this.monitoringMode, stream);
        node_opcua_basic_types_1.encodeArray(this.monitoredItemIds, stream, node_opcua_basic_types_1.encodeUInt32);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.monitoringMode = decodeMonitoringMode(stream);
        this.monitoredItemIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
    }
    // Define Enumeration setters
    setMonitoringMode(value) {
        const coercedValue = exports._enumerationMonitoringMode.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to MonitoringMode :" + value);
        }
        this.monitoringMode = coercedValue.value;
        return this.monitoringMode;
    }
    get schema() { return schemaSetMonitoringModeRequest; }
}
SetMonitoringModeRequest.possibleFields = [
    "requestHeader",
    "subscriptionId",
    "monitoringMode",
    "monitoredItemIds"
];
SetMonitoringModeRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(769, 0);
SetMonitoringModeRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(768, 0);
exports.SetMonitoringModeRequest = SetMonitoringModeRequest;
SetMonitoringModeRequest.schema.encodingDefaultBinary = SetMonitoringModeRequest.encodingDefaultBinary;
SetMonitoringModeRequest.schema.encodingDefaultXml = SetMonitoringModeRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SetMonitoringModeRequest", SetMonitoringModeRequest);
// --------------------------------------------------------------------------------------------
const schemaSetMonitoringModeResponse = node_opcua_factory_1.buildStructuredType({
    name: "SetMonitoringModeResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class SetMonitoringModeResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SetMonitoringModeResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaSetMonitoringModeResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaSetMonitoringModeResponse; }
}
SetMonitoringModeResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
SetMonitoringModeResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(772, 0);
SetMonitoringModeResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(771, 0);
exports.SetMonitoringModeResponse = SetMonitoringModeResponse;
SetMonitoringModeResponse.schema.encodingDefaultBinary = SetMonitoringModeResponse.encodingDefaultBinary;
SetMonitoringModeResponse.schema.encodingDefaultXml = SetMonitoringModeResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SetMonitoringModeResponse", SetMonitoringModeResponse);
// --------------------------------------------------------------------------------------------
const schemaSetTriggeringRequest = node_opcua_factory_1.buildStructuredType({
    name: "SetTriggeringRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "triggeringItemId",
            fieldType: "UInt32",
        },
        {
            name: "linksToAdd",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "linksToRemove",
            fieldType: "UInt32",
            isArray: true
        },
    ]
});
class SetTriggeringRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SetTriggeringRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.triggeringItemId = node_opcua_factory_1.initialize_field(schema.fields[2], options.triggeringItemId);
        this.linksToAdd = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.linksToAdd);
        this.linksToRemove = node_opcua_factory_1.initialize_field_array(schema.fields[4], options.linksToRemove);
    }
    static get schema() { return schemaSetTriggeringRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.triggeringItemId, stream);
        node_opcua_basic_types_1.encodeArray(this.linksToAdd, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeArray(this.linksToRemove, stream, node_opcua_basic_types_1.encodeUInt32);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.triggeringItemId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.linksToAdd = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.linksToRemove = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
    }
    get schema() { return schemaSetTriggeringRequest; }
}
SetTriggeringRequest.possibleFields = [
    "requestHeader",
    "subscriptionId",
    "triggeringItemId",
    "linksToAdd",
    "linksToRemove"
];
SetTriggeringRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(775, 0);
SetTriggeringRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(774, 0);
exports.SetTriggeringRequest = SetTriggeringRequest;
SetTriggeringRequest.schema.encodingDefaultBinary = SetTriggeringRequest.encodingDefaultBinary;
SetTriggeringRequest.schema.encodingDefaultXml = SetTriggeringRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SetTriggeringRequest", SetTriggeringRequest);
// --------------------------------------------------------------------------------------------
const schemaSetTriggeringResponse = node_opcua_factory_1.buildStructuredType({
    name: "SetTriggeringResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "addResults",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "addDiagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
        {
            name: "removeResults",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "removeDiagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class SetTriggeringResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SetTriggeringResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.addResults = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.addResults);
        this.addDiagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.addDiagnosticInfos);
        this.removeResults = node_opcua_factory_1.initialize_field_array(schema.fields[3], options.removeResults);
        this.removeDiagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[4], options.removeDiagnosticInfos);
    }
    static get schema() { return schemaSetTriggeringResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.addResults, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.addDiagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
        node_opcua_basic_types_1.encodeArray(this.removeResults, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.removeDiagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.addResults = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.addDiagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
        this.removeResults = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.removeDiagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaSetTriggeringResponse; }
}
SetTriggeringResponse.possibleFields = [
    "responseHeader",
    "addResults",
    "addDiagnosticInfos",
    "removeResults",
    "removeDiagnosticInfos"
];
SetTriggeringResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(778, 0);
SetTriggeringResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(777, 0);
exports.SetTriggeringResponse = SetTriggeringResponse;
SetTriggeringResponse.schema.encodingDefaultBinary = SetTriggeringResponse.encodingDefaultBinary;
SetTriggeringResponse.schema.encodingDefaultXml = SetTriggeringResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SetTriggeringResponse", SetTriggeringResponse);
// --------------------------------------------------------------------------------------------
const schemaDeleteMonitoredItemsRequest = node_opcua_factory_1.buildStructuredType({
    name: "DeleteMonitoredItemsRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "monitoredItemIds",
            fieldType: "UInt32",
            isArray: true
        },
    ]
});
class DeleteMonitoredItemsRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteMonitoredItemsRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.monitoredItemIds = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.monitoredItemIds);
    }
    static get schema() { return schemaDeleteMonitoredItemsRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_basic_types_1.encodeArray(this.monitoredItemIds, stream, node_opcua_basic_types_1.encodeUInt32);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.monitoredItemIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
    }
    get schema() { return schemaDeleteMonitoredItemsRequest; }
}
DeleteMonitoredItemsRequest.possibleFields = [
    "requestHeader",
    "subscriptionId",
    "monitoredItemIds"
];
DeleteMonitoredItemsRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(781, 0);
DeleteMonitoredItemsRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(780, 0);
exports.DeleteMonitoredItemsRequest = DeleteMonitoredItemsRequest;
DeleteMonitoredItemsRequest.schema.encodingDefaultBinary = DeleteMonitoredItemsRequest.encodingDefaultBinary;
DeleteMonitoredItemsRequest.schema.encodingDefaultXml = DeleteMonitoredItemsRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteMonitoredItemsRequest", DeleteMonitoredItemsRequest);
// --------------------------------------------------------------------------------------------
const schemaDeleteMonitoredItemsResponse = node_opcua_factory_1.buildStructuredType({
    name: "DeleteMonitoredItemsResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class DeleteMonitoredItemsResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteMonitoredItemsResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaDeleteMonitoredItemsResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaDeleteMonitoredItemsResponse; }
}
DeleteMonitoredItemsResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
DeleteMonitoredItemsResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(784, 0);
DeleteMonitoredItemsResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(783, 0);
exports.DeleteMonitoredItemsResponse = DeleteMonitoredItemsResponse;
DeleteMonitoredItemsResponse.schema.encodingDefaultBinary = DeleteMonitoredItemsResponse.encodingDefaultBinary;
DeleteMonitoredItemsResponse.schema.encodingDefaultXml = DeleteMonitoredItemsResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteMonitoredItemsResponse", DeleteMonitoredItemsResponse);
// --------------------------------------------------------------------------------------------
const schemaCreateSubscriptionRequest = node_opcua_factory_1.buildStructuredType({
    name: "CreateSubscriptionRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "requestedPublishingInterval",
            fieldType: "Double",
        },
        {
            name: "requestedLifetimeCount",
            fieldType: "UInt32",
        },
        {
            name: "requestedMaxKeepAliveCount",
            fieldType: "UInt32",
        },
        {
            name: "maxNotificationsPerPublish",
            fieldType: "UInt32",
        },
        {
            name: "publishingEnabled",
            fieldType: "UABoolean",
        },
        {
            name: "priority",
            fieldType: "Byte",
        },
    ]
});
class CreateSubscriptionRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CreateSubscriptionRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.requestedPublishingInterval = node_opcua_factory_1.initialize_field(schema.fields[1], options.requestedPublishingInterval);
        this.requestedLifetimeCount = node_opcua_factory_1.initialize_field(schema.fields[2], options.requestedLifetimeCount);
        this.requestedMaxKeepAliveCount = node_opcua_factory_1.initialize_field(schema.fields[3], options.requestedMaxKeepAliveCount);
        this.maxNotificationsPerPublish = node_opcua_factory_1.initialize_field(schema.fields[4], options.maxNotificationsPerPublish);
        this.publishingEnabled = node_opcua_factory_1.initialize_field(schema.fields[5], options.publishingEnabled);
        this.priority = node_opcua_factory_1.initialize_field(schema.fields[6], options.priority);
    }
    static get schema() { return schemaCreateSubscriptionRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeDouble(this.requestedPublishingInterval, stream);
        node_opcua_basic_types_1.encodeUInt32(this.requestedLifetimeCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.requestedMaxKeepAliveCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxNotificationsPerPublish, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.publishingEnabled, stream);
        node_opcua_basic_types_1.encodeByte(this.priority, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.requestedPublishingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.requestedLifetimeCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.requestedMaxKeepAliveCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.maxNotificationsPerPublish = node_opcua_basic_types_1.decodeUInt32(stream);
        this.publishingEnabled = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.priority = node_opcua_basic_types_1.decodeByte(stream);
    }
    get schema() { return schemaCreateSubscriptionRequest; }
}
CreateSubscriptionRequest.possibleFields = [
    "requestHeader",
    "requestedPublishingInterval",
    "requestedLifetimeCount",
    "requestedMaxKeepAliveCount",
    "maxNotificationsPerPublish",
    "publishingEnabled",
    "priority"
];
CreateSubscriptionRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(787, 0);
CreateSubscriptionRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(786, 0);
exports.CreateSubscriptionRequest = CreateSubscriptionRequest;
CreateSubscriptionRequest.schema.encodingDefaultBinary = CreateSubscriptionRequest.encodingDefaultBinary;
CreateSubscriptionRequest.schema.encodingDefaultXml = CreateSubscriptionRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CreateSubscriptionRequest", CreateSubscriptionRequest);
// --------------------------------------------------------------------------------------------
const schemaCreateSubscriptionResponse = node_opcua_factory_1.buildStructuredType({
    name: "CreateSubscriptionResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "revisedPublishingInterval",
            fieldType: "Double",
        },
        {
            name: "revisedLifetimeCount",
            fieldType: "UInt32",
        },
        {
            name: "revisedMaxKeepAliveCount",
            fieldType: "UInt32",
        },
    ]
});
class CreateSubscriptionResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = CreateSubscriptionResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.revisedPublishingInterval = node_opcua_factory_1.initialize_field(schema.fields[2], options.revisedPublishingInterval);
        this.revisedLifetimeCount = node_opcua_factory_1.initialize_field(schema.fields[3], options.revisedLifetimeCount);
        this.revisedMaxKeepAliveCount = node_opcua_factory_1.initialize_field(schema.fields[4], options.revisedMaxKeepAliveCount);
    }
    static get schema() { return schemaCreateSubscriptionResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_basic_types_1.encodeDouble(this.revisedPublishingInterval, stream);
        node_opcua_basic_types_1.encodeUInt32(this.revisedLifetimeCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.revisedMaxKeepAliveCount, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.revisedPublishingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.revisedLifetimeCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.revisedMaxKeepAliveCount = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaCreateSubscriptionResponse; }
}
CreateSubscriptionResponse.possibleFields = [
    "responseHeader",
    "subscriptionId",
    "revisedPublishingInterval",
    "revisedLifetimeCount",
    "revisedMaxKeepAliveCount"
];
CreateSubscriptionResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(790, 0);
CreateSubscriptionResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(789, 0);
exports.CreateSubscriptionResponse = CreateSubscriptionResponse;
CreateSubscriptionResponse.schema.encodingDefaultBinary = CreateSubscriptionResponse.encodingDefaultBinary;
CreateSubscriptionResponse.schema.encodingDefaultXml = CreateSubscriptionResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("CreateSubscriptionResponse", CreateSubscriptionResponse);
// --------------------------------------------------------------------------------------------
const schemaModifySubscriptionRequest = node_opcua_factory_1.buildStructuredType({
    name: "ModifySubscriptionRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "requestedPublishingInterval",
            fieldType: "Double",
        },
        {
            name: "requestedLifetimeCount",
            fieldType: "UInt32",
        },
        {
            name: "requestedMaxKeepAliveCount",
            fieldType: "UInt32",
        },
        {
            name: "maxNotificationsPerPublish",
            fieldType: "UInt32",
        },
        {
            name: "priority",
            fieldType: "Byte",
        },
    ]
});
class ModifySubscriptionRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ModifySubscriptionRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.requestedPublishingInterval = node_opcua_factory_1.initialize_field(schema.fields[2], options.requestedPublishingInterval);
        this.requestedLifetimeCount = node_opcua_factory_1.initialize_field(schema.fields[3], options.requestedLifetimeCount);
        this.requestedMaxKeepAliveCount = node_opcua_factory_1.initialize_field(schema.fields[4], options.requestedMaxKeepAliveCount);
        this.maxNotificationsPerPublish = node_opcua_factory_1.initialize_field(schema.fields[5], options.maxNotificationsPerPublish);
        this.priority = node_opcua_factory_1.initialize_field(schema.fields[6], options.priority);
    }
    static get schema() { return schemaModifySubscriptionRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_basic_types_1.encodeDouble(this.requestedPublishingInterval, stream);
        node_opcua_basic_types_1.encodeUInt32(this.requestedLifetimeCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.requestedMaxKeepAliveCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxNotificationsPerPublish, stream);
        node_opcua_basic_types_1.encodeByte(this.priority, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.requestedPublishingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.requestedLifetimeCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.requestedMaxKeepAliveCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.maxNotificationsPerPublish = node_opcua_basic_types_1.decodeUInt32(stream);
        this.priority = node_opcua_basic_types_1.decodeByte(stream);
    }
    get schema() { return schemaModifySubscriptionRequest; }
}
ModifySubscriptionRequest.possibleFields = [
    "requestHeader",
    "subscriptionId",
    "requestedPublishingInterval",
    "requestedLifetimeCount",
    "requestedMaxKeepAliveCount",
    "maxNotificationsPerPublish",
    "priority"
];
ModifySubscriptionRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(793, 0);
ModifySubscriptionRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(792, 0);
exports.ModifySubscriptionRequest = ModifySubscriptionRequest;
ModifySubscriptionRequest.schema.encodingDefaultBinary = ModifySubscriptionRequest.encodingDefaultBinary;
ModifySubscriptionRequest.schema.encodingDefaultXml = ModifySubscriptionRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ModifySubscriptionRequest", ModifySubscriptionRequest);
// --------------------------------------------------------------------------------------------
const schemaModifySubscriptionResponse = node_opcua_factory_1.buildStructuredType({
    name: "ModifySubscriptionResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "revisedPublishingInterval",
            fieldType: "Double",
        },
        {
            name: "revisedLifetimeCount",
            fieldType: "UInt32",
        },
        {
            name: "revisedMaxKeepAliveCount",
            fieldType: "UInt32",
        },
    ]
});
class ModifySubscriptionResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ModifySubscriptionResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.revisedPublishingInterval = node_opcua_factory_1.initialize_field(schema.fields[1], options.revisedPublishingInterval);
        this.revisedLifetimeCount = node_opcua_factory_1.initialize_field(schema.fields[2], options.revisedLifetimeCount);
        this.revisedMaxKeepAliveCount = node_opcua_factory_1.initialize_field(schema.fields[3], options.revisedMaxKeepAliveCount);
    }
    static get schema() { return schemaModifySubscriptionResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeDouble(this.revisedPublishingInterval, stream);
        node_opcua_basic_types_1.encodeUInt32(this.revisedLifetimeCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.revisedMaxKeepAliveCount, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.revisedPublishingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.revisedLifetimeCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.revisedMaxKeepAliveCount = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaModifySubscriptionResponse; }
}
ModifySubscriptionResponse.possibleFields = [
    "responseHeader",
    "revisedPublishingInterval",
    "revisedLifetimeCount",
    "revisedMaxKeepAliveCount"
];
ModifySubscriptionResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(796, 0);
ModifySubscriptionResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(795, 0);
exports.ModifySubscriptionResponse = ModifySubscriptionResponse;
ModifySubscriptionResponse.schema.encodingDefaultBinary = ModifySubscriptionResponse.encodingDefaultBinary;
ModifySubscriptionResponse.schema.encodingDefaultXml = ModifySubscriptionResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ModifySubscriptionResponse", ModifySubscriptionResponse);
// --------------------------------------------------------------------------------------------
const schemaSetPublishingModeRequest = node_opcua_factory_1.buildStructuredType({
    name: "SetPublishingModeRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "publishingEnabled",
            fieldType: "UABoolean",
        },
        {
            name: "subscriptionIds",
            fieldType: "UInt32",
            isArray: true
        },
    ]
});
class SetPublishingModeRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SetPublishingModeRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.publishingEnabled = node_opcua_factory_1.initialize_field(schema.fields[1], options.publishingEnabled);
        this.subscriptionIds = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.subscriptionIds);
    }
    static get schema() { return schemaSetPublishingModeRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUABoolean(this.publishingEnabled, stream);
        node_opcua_basic_types_1.encodeArray(this.subscriptionIds, stream, node_opcua_basic_types_1.encodeUInt32);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.publishingEnabled = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.subscriptionIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
    }
    get schema() { return schemaSetPublishingModeRequest; }
}
SetPublishingModeRequest.possibleFields = [
    "requestHeader",
    "publishingEnabled",
    "subscriptionIds"
];
SetPublishingModeRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(799, 0);
SetPublishingModeRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(798, 0);
exports.SetPublishingModeRequest = SetPublishingModeRequest;
SetPublishingModeRequest.schema.encodingDefaultBinary = SetPublishingModeRequest.encodingDefaultBinary;
SetPublishingModeRequest.schema.encodingDefaultXml = SetPublishingModeRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SetPublishingModeRequest", SetPublishingModeRequest);
// --------------------------------------------------------------------------------------------
const schemaSetPublishingModeResponse = node_opcua_factory_1.buildStructuredType({
    name: "SetPublishingModeResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class SetPublishingModeResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SetPublishingModeResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaSetPublishingModeResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaSetPublishingModeResponse; }
}
SetPublishingModeResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
SetPublishingModeResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(802, 0);
SetPublishingModeResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(801, 0);
exports.SetPublishingModeResponse = SetPublishingModeResponse;
SetPublishingModeResponse.schema.encodingDefaultBinary = SetPublishingModeResponse.encodingDefaultBinary;
SetPublishingModeResponse.schema.encodingDefaultXml = SetPublishingModeResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SetPublishingModeResponse", SetPublishingModeResponse);
// --------------------------------------------------------------------------------------------
const schemaNotificationMessage = node_opcua_factory_1.buildStructuredType({
    name: "NotificationMessage",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "sequenceNumber",
            fieldType: "UInt32",
        },
        {
            name: "publishTime",
            fieldType: "DateTime",
        },
        {
            name: "notificationData",
            fieldType: "ExtensionObject",
            isArray: true
        },
    ]
});
class NotificationMessage extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = NotificationMessage.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.sequenceNumber = node_opcua_factory_1.initialize_field(schema.fields[0], options.sequenceNumber);
        this.publishTime = node_opcua_factory_1.initialize_field(schema.fields[1], options.publishTime);
        this.notificationData = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.notificationData);
    }
    static get schema() { return schemaNotificationMessage; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.sequenceNumber, stream);
        node_opcua_basic_types_1.encodeDateTime(this.publishTime, stream);
        node_opcua_basic_types_1.encodeArray(this.notificationData, stream, node_opcua_extension_object_1.encodeExtensionObject);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.sequenceNumber = node_opcua_basic_types_1.decodeUInt32(stream);
        this.publishTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.notificationData = node_opcua_basic_types_1.decodeArray(stream, node_opcua_extension_object_1.decodeExtensionObject);
    }
    get schema() { return schemaNotificationMessage; }
}
NotificationMessage.possibleFields = [
    "sequenceNumber",
    "publishTime",
    "notificationData"
];
NotificationMessage.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(805, 0);
NotificationMessage.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(804, 0);
exports.NotificationMessage = NotificationMessage;
NotificationMessage.schema.encodingDefaultBinary = NotificationMessage.encodingDefaultBinary;
NotificationMessage.schema.encodingDefaultXml = NotificationMessage.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("NotificationMessage", NotificationMessage);
// --------------------------------------------------------------------------------------------
const schemaNotificationData = node_opcua_factory_1.buildStructuredType({
    name: "NotificationData",
    baseType: "ExtensionObject",
    fields: []
});
class NotificationData extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = NotificationData.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
    }
    static get schema() { return schemaNotificationData; }
    encode(stream) {
        super.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
    }
    get schema() { return schemaNotificationData; }
}
NotificationData.possibleFields = [];
NotificationData.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(947, 0);
NotificationData.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(946, 0);
exports.NotificationData = NotificationData;
NotificationData.schema.encodingDefaultBinary = NotificationData.encodingDefaultBinary;
NotificationData.schema.encodingDefaultXml = NotificationData.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("NotificationData", NotificationData);
// --------------------------------------------------------------------------------------------
const schemaMonitoredItemNotification = node_opcua_factory_1.buildStructuredType({
    name: "MonitoredItemNotification",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "clientHandle",
            fieldType: "UInt32",
        },
        {
            name: "value",
            fieldType: "DataValue",
        },
    ]
});
class MonitoredItemNotification extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = MonitoredItemNotification.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.clientHandle = node_opcua_factory_1.initialize_field(schema.fields[0], options.clientHandle);
        this.value = node_opcua_factory_1.initialize_field(schema.fields[1], options.value);
    }
    static get schema() { return schemaMonitoredItemNotification; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.clientHandle, stream);
        node_opcua_data_value_1.encodeDataValue(this.value, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.clientHandle = node_opcua_basic_types_1.decodeUInt32(stream);
        this.value = node_opcua_data_value_1.decodeDataValue(stream);
    }
    get schema() { return schemaMonitoredItemNotification; }
}
MonitoredItemNotification.possibleFields = [
    "clientHandle",
    "value"
];
MonitoredItemNotification.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(808, 0);
MonitoredItemNotification.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(807, 0);
exports.MonitoredItemNotification = MonitoredItemNotification;
MonitoredItemNotification.schema.encodingDefaultBinary = MonitoredItemNotification.encodingDefaultBinary;
MonitoredItemNotification.schema.encodingDefaultXml = MonitoredItemNotification.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("MonitoredItemNotification", MonitoredItemNotification);
// --------------------------------------------------------------------------------------------
const schemaDataChangeNotification = node_opcua_factory_1.buildStructuredType({
    name: "DataChangeNotification",
    baseType: "NotificationData",
    fields: [
        {
            name: "monitoredItems",
            fieldType: "MonitoredItemNotification",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class DataChangeNotification extends NotificationData {
    constructor(options) {
        super(options);
        const schema = DataChangeNotification.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.monitoredItems = null; /* null array */
        }
        this.monitoredItems = []; // should default
        if (options.monitoredItems) {
            node_opcua_assert_1.assert(_.isArray(options.monitoredItems));
            this.monitoredItems = options.monitoredItems.map((e) => new MonitoredItemNotification(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.diagnosticInfos);
    }
    static get schema() { return schemaDataChangeNotification; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.monitoredItems, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.monitoredItems = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new MonitoredItemNotification();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaDataChangeNotification; }
}
DataChangeNotification.possibleFields = [
    "monitoredItems",
    "diagnosticInfos"
];
DataChangeNotification.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(811, 0);
DataChangeNotification.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(810, 0);
exports.DataChangeNotification = DataChangeNotification;
DataChangeNotification.schema.encodingDefaultBinary = DataChangeNotification.encodingDefaultBinary;
DataChangeNotification.schema.encodingDefaultXml = DataChangeNotification.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DataChangeNotification", DataChangeNotification);
// --------------------------------------------------------------------------------------------
const schemaEventFieldList = node_opcua_factory_1.buildStructuredType({
    name: "EventFieldList",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "clientHandle",
            fieldType: "UInt32",
        },
        {
            name: "eventFields",
            fieldType: "Variant",
            isArray: true
        },
    ]
});
class EventFieldList extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = EventFieldList.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.clientHandle = node_opcua_factory_1.initialize_field(schema.fields[0], options.clientHandle);
        this.eventFields = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.eventFields);
    }
    static get schema() { return schemaEventFieldList; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.clientHandle, stream);
        node_opcua_basic_types_1.encodeArray(this.eventFields, stream, node_opcua_variant_1.encodeVariant);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.clientHandle = node_opcua_basic_types_1.decodeUInt32(stream);
        this.eventFields = node_opcua_basic_types_1.decodeArray(stream, node_opcua_variant_1.decodeVariant);
    }
    get schema() { return schemaEventFieldList; }
}
EventFieldList.possibleFields = [
    "clientHandle",
    "eventFields"
];
EventFieldList.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(919, 0);
EventFieldList.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(918, 0);
exports.EventFieldList = EventFieldList;
EventFieldList.schema.encodingDefaultBinary = EventFieldList.encodingDefaultBinary;
EventFieldList.schema.encodingDefaultXml = EventFieldList.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EventFieldList", EventFieldList);
// --------------------------------------------------------------------------------------------
const schemaEventNotificationList = node_opcua_factory_1.buildStructuredType({
    name: "EventNotificationList",
    baseType: "NotificationData",
    fields: [
        {
            name: "events",
            fieldType: "EventFieldList",
            isArray: true
        },
    ]
});
class EventNotificationList extends NotificationData {
    constructor(options) {
        super(options);
        const schema = EventNotificationList.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.events = null; /* null array */
        }
        this.events = []; // should default
        if (options.events) {
            node_opcua_assert_1.assert(_.isArray(options.events));
            this.events = options.events.map((e) => new EventFieldList(e));
        }
    }
    static get schema() { return schemaEventNotificationList; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.events, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.events = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EventFieldList();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaEventNotificationList; }
}
EventNotificationList.possibleFields = [
    "events"
];
EventNotificationList.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(916, 0);
EventNotificationList.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(915, 0);
exports.EventNotificationList = EventNotificationList;
EventNotificationList.schema.encodingDefaultBinary = EventNotificationList.encodingDefaultBinary;
EventNotificationList.schema.encodingDefaultXml = EventNotificationList.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EventNotificationList", EventNotificationList);
// --------------------------------------------------------------------------------------------
const schemaStatusChangeNotification = node_opcua_factory_1.buildStructuredType({
    name: "StatusChangeNotification",
    baseType: "NotificationData",
    fields: [
        {
            name: "status",
            fieldType: "StatusCode",
        },
        {
            name: "diagnosticInfo",
            fieldType: "DiagnosticInfo",
        },
    ]
});
class StatusChangeNotification extends NotificationData {
    constructor(options) {
        super(options);
        const schema = StatusChangeNotification.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.status = node_opcua_factory_1.initialize_field(schema.fields[0], options.status);
        this.diagnosticInfo = node_opcua_factory_1.initialize_field(schema.fields[1], options.diagnosticInfo);
    }
    static get schema() { return schemaStatusChangeNotification; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.status, stream);
        node_opcua_data_model_1.encodeDiagnosticInfo(this.diagnosticInfo, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.status = node_opcua_status_code_1.decodeStatusCode(stream);
        this.diagnosticInfo = node_opcua_data_model_1.decodeDiagnosticInfo(stream);
    }
    get schema() { return schemaStatusChangeNotification; }
}
StatusChangeNotification.possibleFields = [
    "status",
    "diagnosticInfo"
];
StatusChangeNotification.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(820, 0);
StatusChangeNotification.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(819, 0);
exports.StatusChangeNotification = StatusChangeNotification;
StatusChangeNotification.schema.encodingDefaultBinary = StatusChangeNotification.encodingDefaultBinary;
StatusChangeNotification.schema.encodingDefaultXml = StatusChangeNotification.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("StatusChangeNotification", StatusChangeNotification);
// --------------------------------------------------------------------------------------------
const schemaSubscriptionAcknowledgement = node_opcua_factory_1.buildStructuredType({
    name: "SubscriptionAcknowledgement",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "sequenceNumber",
            fieldType: "UInt32",
        },
    ]
});
class SubscriptionAcknowledgement extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SubscriptionAcknowledgement.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[0], options.subscriptionId);
        this.sequenceNumber = node_opcua_factory_1.initialize_field(schema.fields[1], options.sequenceNumber);
    }
    static get schema() { return schemaSubscriptionAcknowledgement; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.sequenceNumber, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.sequenceNumber = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaSubscriptionAcknowledgement; }
}
SubscriptionAcknowledgement.possibleFields = [
    "subscriptionId",
    "sequenceNumber"
];
SubscriptionAcknowledgement.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(823, 0);
SubscriptionAcknowledgement.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(822, 0);
exports.SubscriptionAcknowledgement = SubscriptionAcknowledgement;
SubscriptionAcknowledgement.schema.encodingDefaultBinary = SubscriptionAcknowledgement.encodingDefaultBinary;
SubscriptionAcknowledgement.schema.encodingDefaultXml = SubscriptionAcknowledgement.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SubscriptionAcknowledgement", SubscriptionAcknowledgement);
// --------------------------------------------------------------------------------------------
const schemaPublishRequest = node_opcua_factory_1.buildStructuredType({
    name: "PublishRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionAcknowledgements",
            fieldType: "SubscriptionAcknowledgement",
            isArray: true
        },
    ]
});
class PublishRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = PublishRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
            this.subscriptionAcknowledgements = null; /* null array */
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionAcknowledgements = []; // should default
        if (options.subscriptionAcknowledgements) {
            node_opcua_assert_1.assert(_.isArray(options.subscriptionAcknowledgements));
            this.subscriptionAcknowledgements = options.subscriptionAcknowledgements.map((e) => new SubscriptionAcknowledgement(e));
        }
    }
    static get schema() { return schemaPublishRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.subscriptionAcknowledgements, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionAcknowledgements = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new SubscriptionAcknowledgement();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaPublishRequest; }
}
PublishRequest.possibleFields = [
    "requestHeader",
    "subscriptionAcknowledgements"
];
PublishRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(826, 0);
PublishRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(825, 0);
exports.PublishRequest = PublishRequest;
PublishRequest.schema.encodingDefaultBinary = PublishRequest.encodingDefaultBinary;
PublishRequest.schema.encodingDefaultXml = PublishRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PublishRequest", PublishRequest);
// --------------------------------------------------------------------------------------------
const schemaPublishResponse = node_opcua_factory_1.buildStructuredType({
    name: "PublishResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "availableSequenceNumbers",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "moreNotifications",
            fieldType: "UABoolean",
        },
        {
            name: "notificationMessage",
            fieldType: "NotificationMessage",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class PublishResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = PublishResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.notificationMessage = new NotificationMessage();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.availableSequenceNumbers = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.availableSequenceNumbers);
        this.moreNotifications = node_opcua_factory_1.initialize_field(schema.fields[3], options.moreNotifications);
        this.notificationMessage = new NotificationMessage(options.notificationMessage);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[5], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[6], options.diagnosticInfos);
    }
    static get schema() { return schemaPublishResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_basic_types_1.encodeArray(this.availableSequenceNumbers, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeUABoolean(this.moreNotifications, stream);
        this.notificationMessage.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.availableSequenceNumbers = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.moreNotifications = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.notificationMessage.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaPublishResponse; }
}
PublishResponse.possibleFields = [
    "responseHeader",
    "subscriptionId",
    "availableSequenceNumbers",
    "moreNotifications",
    "notificationMessage",
    "results",
    "diagnosticInfos"
];
PublishResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(829, 0);
PublishResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(828, 0);
exports.PublishResponse = PublishResponse;
PublishResponse.schema.encodingDefaultBinary = PublishResponse.encodingDefaultBinary;
PublishResponse.schema.encodingDefaultXml = PublishResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("PublishResponse", PublishResponse);
// --------------------------------------------------------------------------------------------
const schemaRepublishRequest = node_opcua_factory_1.buildStructuredType({
    name: "RepublishRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "retransmitSequenceNumber",
            fieldType: "UInt32",
        },
    ]
});
class RepublishRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RepublishRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.retransmitSequenceNumber = node_opcua_factory_1.initialize_field(schema.fields[2], options.retransmitSequenceNumber);
    }
    static get schema() { return schemaRepublishRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.retransmitSequenceNumber, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.retransmitSequenceNumber = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaRepublishRequest; }
}
RepublishRequest.possibleFields = [
    "requestHeader",
    "subscriptionId",
    "retransmitSequenceNumber"
];
RepublishRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(832, 0);
RepublishRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(831, 0);
exports.RepublishRequest = RepublishRequest;
RepublishRequest.schema.encodingDefaultBinary = RepublishRequest.encodingDefaultBinary;
RepublishRequest.schema.encodingDefaultXml = RepublishRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RepublishRequest", RepublishRequest);
// --------------------------------------------------------------------------------------------
const schemaRepublishResponse = node_opcua_factory_1.buildStructuredType({
    name: "RepublishResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "notificationMessage",
            fieldType: "NotificationMessage",
        },
    ]
});
class RepublishResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RepublishResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.notificationMessage = new NotificationMessage();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.notificationMessage = new NotificationMessage(options.notificationMessage);
    }
    static get schema() { return schemaRepublishResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        this.notificationMessage.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.notificationMessage.decode(stream);
    }
    get schema() { return schemaRepublishResponse; }
}
RepublishResponse.possibleFields = [
    "responseHeader",
    "notificationMessage"
];
RepublishResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(835, 0);
RepublishResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(834, 0);
exports.RepublishResponse = RepublishResponse;
RepublishResponse.schema.encodingDefaultBinary = RepublishResponse.encodingDefaultBinary;
RepublishResponse.schema.encodingDefaultXml = RepublishResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RepublishResponse", RepublishResponse);
// --------------------------------------------------------------------------------------------
const schemaTransferResult = node_opcua_factory_1.buildStructuredType({
    name: "TransferResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "availableSequenceNumbers",
            fieldType: "UInt32",
            isArray: true
        },
    ]
});
class TransferResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = TransferResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.availableSequenceNumbers = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.availableSequenceNumbers);
    }
    static get schema() { return schemaTransferResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_basic_types_1.encodeArray(this.availableSequenceNumbers, stream, node_opcua_basic_types_1.encodeUInt32);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.availableSequenceNumbers = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
    }
    get schema() { return schemaTransferResult; }
}
TransferResult.possibleFields = [
    "statusCode",
    "availableSequenceNumbers"
];
TransferResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(838, 0);
TransferResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(837, 0);
exports.TransferResult = TransferResult;
TransferResult.schema.encodingDefaultBinary = TransferResult.encodingDefaultBinary;
TransferResult.schema.encodingDefaultXml = TransferResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("TransferResult", TransferResult);
// --------------------------------------------------------------------------------------------
const schemaTransferSubscriptionsRequest = node_opcua_factory_1.buildStructuredType({
    name: "TransferSubscriptionsRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionIds",
            fieldType: "UInt32",
            isArray: true
        },
        {
            name: "sendInitialValues",
            fieldType: "UABoolean",
        },
    ]
});
class TransferSubscriptionsRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = TransferSubscriptionsRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionIds = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.subscriptionIds);
        this.sendInitialValues = node_opcua_factory_1.initialize_field(schema.fields[2], options.sendInitialValues);
    }
    static get schema() { return schemaTransferSubscriptionsRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.subscriptionIds, stream, node_opcua_basic_types_1.encodeUInt32);
        node_opcua_basic_types_1.encodeUABoolean(this.sendInitialValues, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
        this.sendInitialValues = node_opcua_basic_types_1.decodeUABoolean(stream);
    }
    get schema() { return schemaTransferSubscriptionsRequest; }
}
TransferSubscriptionsRequest.possibleFields = [
    "requestHeader",
    "subscriptionIds",
    "sendInitialValues"
];
TransferSubscriptionsRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(841, 0);
TransferSubscriptionsRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(840, 0);
exports.TransferSubscriptionsRequest = TransferSubscriptionsRequest;
TransferSubscriptionsRequest.schema.encodingDefaultBinary = TransferSubscriptionsRequest.encodingDefaultBinary;
TransferSubscriptionsRequest.schema.encodingDefaultXml = TransferSubscriptionsRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("TransferSubscriptionsRequest", TransferSubscriptionsRequest);
// --------------------------------------------------------------------------------------------
const schemaTransferSubscriptionsResponse = node_opcua_factory_1.buildStructuredType({
    name: "TransferSubscriptionsResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "TransferResult",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class TransferSubscriptionsResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = TransferSubscriptionsResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
            this.results = null; /* null array */
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = []; // should default
        if (options.results) {
            node_opcua_assert_1.assert(_.isArray(options.results));
            this.results = options.results.map((e) => new TransferResult(e));
        }
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaTransferSubscriptionsResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new TransferResult();
            obj.decode(stream1);
            return obj;
        });
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaTransferSubscriptionsResponse; }
}
TransferSubscriptionsResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
TransferSubscriptionsResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(844, 0);
TransferSubscriptionsResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(843, 0);
exports.TransferSubscriptionsResponse = TransferSubscriptionsResponse;
TransferSubscriptionsResponse.schema.encodingDefaultBinary = TransferSubscriptionsResponse.encodingDefaultBinary;
TransferSubscriptionsResponse.schema.encodingDefaultXml = TransferSubscriptionsResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("TransferSubscriptionsResponse", TransferSubscriptionsResponse);
// --------------------------------------------------------------------------------------------
const schemaDeleteSubscriptionsRequest = node_opcua_factory_1.buildStructuredType({
    name: "DeleteSubscriptionsRequest",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "requestHeader",
            fieldType: "RequestHeader",
        },
        {
            name: "subscriptionIds",
            fieldType: "UInt32",
            isArray: true
        },
    ]
});
class DeleteSubscriptionsRequest extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteSubscriptionsRequest.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.requestHeader = new RequestHeader();
        }
        this.requestHeader = new RequestHeader(options.requestHeader);
        this.subscriptionIds = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.subscriptionIds);
    }
    static get schema() { return schemaDeleteSubscriptionsRequest; }
    encode(stream) {
        super.encode(stream);
        this.requestHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.subscriptionIds, stream, node_opcua_basic_types_1.encodeUInt32);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.requestHeader.decode(stream);
        this.subscriptionIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUInt32);
    }
    get schema() { return schemaDeleteSubscriptionsRequest; }
}
DeleteSubscriptionsRequest.possibleFields = [
    "requestHeader",
    "subscriptionIds"
];
DeleteSubscriptionsRequest.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(847, 0);
DeleteSubscriptionsRequest.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(846, 0);
exports.DeleteSubscriptionsRequest = DeleteSubscriptionsRequest;
DeleteSubscriptionsRequest.schema.encodingDefaultBinary = DeleteSubscriptionsRequest.encodingDefaultBinary;
DeleteSubscriptionsRequest.schema.encodingDefaultXml = DeleteSubscriptionsRequest.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteSubscriptionsRequest", DeleteSubscriptionsRequest);
// --------------------------------------------------------------------------------------------
const schemaDeleteSubscriptionsResponse = node_opcua_factory_1.buildStructuredType({
    name: "DeleteSubscriptionsResponse",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "responseHeader",
            fieldType: "ResponseHeader",
        },
        {
            name: "results",
            fieldType: "StatusCode",
            isArray: true
        },
        {
            name: "diagnosticInfos",
            fieldType: "DiagnosticInfo",
            isArray: true
        },
    ]
});
class DeleteSubscriptionsResponse extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DeleteSubscriptionsResponse.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.responseHeader = new ResponseHeader();
        }
        this.responseHeader = new ResponseHeader(options.responseHeader);
        this.results = node_opcua_factory_1.initialize_field_array(schema.fields[1], options.results);
        this.diagnosticInfos = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.diagnosticInfos);
    }
    static get schema() { return schemaDeleteSubscriptionsResponse; }
    encode(stream) {
        super.encode(stream);
        this.responseHeader.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.results, stream, node_opcua_status_code_1.encodeStatusCode);
        node_opcua_basic_types_1.encodeArray(this.diagnosticInfos, stream, node_opcua_data_model_1.encodeDiagnosticInfo);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.responseHeader.decode(stream);
        this.results = node_opcua_basic_types_1.decodeArray(stream, node_opcua_status_code_1.decodeStatusCode);
        this.diagnosticInfos = node_opcua_basic_types_1.decodeArray(stream, node_opcua_data_model_1.decodeDiagnosticInfo);
    }
    get schema() { return schemaDeleteSubscriptionsResponse; }
}
DeleteSubscriptionsResponse.possibleFields = [
    "responseHeader",
    "results",
    "diagnosticInfos"
];
DeleteSubscriptionsResponse.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(850, 0);
DeleteSubscriptionsResponse.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(849, 0);
exports.DeleteSubscriptionsResponse = DeleteSubscriptionsResponse;
DeleteSubscriptionsResponse.schema.encodingDefaultBinary = DeleteSubscriptionsResponse.encodingDefaultBinary;
DeleteSubscriptionsResponse.schema.encodingDefaultXml = DeleteSubscriptionsResponse.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DeleteSubscriptionsResponse", DeleteSubscriptionsResponse);
// --------------------------------------------------------------------------------------------
const schemaBuildInfo = node_opcua_factory_1.buildStructuredType({
    name: "BuildInfo",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "productUri",
            fieldType: "UAString",
        },
        {
            name: "manufacturerName",
            fieldType: "UAString",
        },
        {
            name: "productName",
            fieldType: "UAString",
        },
        {
            name: "softwareVersion",
            fieldType: "UAString",
        },
        {
            name: "buildNumber",
            fieldType: "UAString",
        },
        {
            name: "buildDate",
            fieldType: "DateTime",
        },
    ]
});
class BuildInfo extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = BuildInfo.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.productUri = node_opcua_factory_1.initialize_field(schema.fields[0], options.productUri);
        this.manufacturerName = node_opcua_factory_1.initialize_field(schema.fields[1], options.manufacturerName);
        this.productName = node_opcua_factory_1.initialize_field(schema.fields[2], options.productName);
        this.softwareVersion = node_opcua_factory_1.initialize_field(schema.fields[3], options.softwareVersion);
        this.buildNumber = node_opcua_factory_1.initialize_field(schema.fields[4], options.buildNumber);
        this.buildDate = node_opcua_factory_1.initialize_field(schema.fields[5], options.buildDate);
    }
    static get schema() { return schemaBuildInfo; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.productUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.manufacturerName, stream);
        node_opcua_basic_types_1.encodeUAString(this.productName, stream);
        node_opcua_basic_types_1.encodeUAString(this.softwareVersion, stream);
        node_opcua_basic_types_1.encodeUAString(this.buildNumber, stream);
        node_opcua_basic_types_1.encodeDateTime(this.buildDate, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.productUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.manufacturerName = node_opcua_basic_types_1.decodeUAString(stream);
        this.productName = node_opcua_basic_types_1.decodeUAString(stream);
        this.softwareVersion = node_opcua_basic_types_1.decodeUAString(stream);
        this.buildNumber = node_opcua_basic_types_1.decodeUAString(stream);
        this.buildDate = node_opcua_basic_types_1.decodeDateTime(stream);
    }
    get schema() { return schemaBuildInfo; }
}
BuildInfo.possibleFields = [
    "productUri",
    "manufacturerName",
    "productName",
    "softwareVersion",
    "buildNumber",
    "buildDate"
];
BuildInfo.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(340, 0);
BuildInfo.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(339, 0);
exports.BuildInfo = BuildInfo;
BuildInfo.schema.encodingDefaultBinary = BuildInfo.encodingDefaultBinary;
BuildInfo.schema.encodingDefaultXml = BuildInfo.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("BuildInfo", BuildInfo);
// --------------------------------------------------------------------------------------------
var ServerState;
(function (ServerState) {
    ServerState[ServerState["Running"] = 0] = "Running";
    ServerState[ServerState["Failed"] = 1] = "Failed";
    ServerState[ServerState["NoConfiguration"] = 2] = "NoConfiguration";
    ServerState[ServerState["Suspended"] = 3] = "Suspended";
    ServerState[ServerState["Shutdown"] = 4] = "Shutdown";
    ServerState[ServerState["Test"] = 5] = "Test";
    ServerState[ServerState["CommunicationFault"] = 6] = "CommunicationFault";
    ServerState[ServerState["Unknown"] = 7] = "Unknown";
    ServerState[ServerState["Invalid"] = 4294967295] = "Invalid";
})(ServerState = exports.ServerState || (exports.ServerState = {}));
const schemaServerState = {
    enumValues: ServerState,
    flaggable: false,
    minValue: 0,
    maxValue: 7,
    name: "ServerState"
};
function decodeServerState(stream) {
    let value = stream.readUInt32();
    value = (value < schemaServerState.minValue || value > schemaServerState.maxValue) ? ServerState.Invalid : value;
    return value;
}
function encodeServerState(value, stream) {
    stream.writeUInt32(value);
}
exports._enumerationServerState = node_opcua_factory_1.registerEnumeration(schemaServerState);
// --------------------------------------------------------------------------------------------
const schemaRedundantServerDataType = node_opcua_factory_1.buildStructuredType({
    name: "RedundantServerDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "serverId",
            fieldType: "UAString",
        },
        {
            name: "serviceLevel",
            fieldType: "Byte",
        },
        {
            name: "serverState",
            fieldType: "ServerState",
        },
    ]
});
class RedundantServerDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = RedundantServerDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.serverId = node_opcua_factory_1.initialize_field(schema.fields[0], options.serverId);
        this.serviceLevel = node_opcua_factory_1.initialize_field(schema.fields[1], options.serviceLevel);
        this.serverState = this.setServerState(node_opcua_factory_1.initialize_field(schema.fields[2], options.serverState));
    }
    static get schema() { return schemaRedundantServerDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.serverId, stream);
        node_opcua_basic_types_1.encodeByte(this.serviceLevel, stream);
        encodeServerState(this.serverState, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.serverId = node_opcua_basic_types_1.decodeUAString(stream);
        this.serviceLevel = node_opcua_basic_types_1.decodeByte(stream);
        this.serverState = decodeServerState(stream);
    }
    // Define Enumeration setters
    setServerState(value) {
        const coercedValue = exports._enumerationServerState.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to ServerState :" + value);
        }
        this.serverState = coercedValue.value;
        return this.serverState;
    }
    get schema() { return schemaRedundantServerDataType; }
}
RedundantServerDataType.possibleFields = [
    "serverId",
    "serviceLevel",
    "serverState"
];
RedundantServerDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(855, 0);
RedundantServerDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(854, 0);
exports.RedundantServerDataType = RedundantServerDataType;
RedundantServerDataType.schema.encodingDefaultBinary = RedundantServerDataType.encodingDefaultBinary;
RedundantServerDataType.schema.encodingDefaultXml = RedundantServerDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("RedundantServerDataType", RedundantServerDataType);
// --------------------------------------------------------------------------------------------
const schemaEndpointUrlListDataType = node_opcua_factory_1.buildStructuredType({
    name: "EndpointUrlListDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "endpointUrlList",
            fieldType: "UAString",
            isArray: true
        },
    ]
});
class EndpointUrlListDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = EndpointUrlListDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.endpointUrlList = node_opcua_factory_1.initialize_field_array(schema.fields[0], options.endpointUrlList);
    }
    static get schema() { return schemaEndpointUrlListDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeArray(this.endpointUrlList, stream, node_opcua_basic_types_1.encodeUAString);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.endpointUrlList = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
    }
    get schema() { return schemaEndpointUrlListDataType; }
}
EndpointUrlListDataType.possibleFields = [
    "endpointUrlList"
];
EndpointUrlListDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(11957, 0);
EndpointUrlListDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(11949, 0);
exports.EndpointUrlListDataType = EndpointUrlListDataType;
EndpointUrlListDataType.schema.encodingDefaultBinary = EndpointUrlListDataType.encodingDefaultBinary;
EndpointUrlListDataType.schema.encodingDefaultXml = EndpointUrlListDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("EndpointUrlListDataType", EndpointUrlListDataType);
// --------------------------------------------------------------------------------------------
const schemaNetworkGroupDataType = node_opcua_factory_1.buildStructuredType({
    name: "NetworkGroupDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "serverUri",
            fieldType: "UAString",
        },
        {
            name: "networkPaths",
            fieldType: "EndpointUrlListDataType",
            isArray: true
        },
    ]
});
class NetworkGroupDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = NetworkGroupDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.networkPaths = null; /* null array */
        }
        this.serverUri = node_opcua_factory_1.initialize_field(schema.fields[0], options.serverUri);
        this.networkPaths = []; // should default
        if (options.networkPaths) {
            node_opcua_assert_1.assert(_.isArray(options.networkPaths));
            this.networkPaths = options.networkPaths.map((e) => new EndpointUrlListDataType(e));
        }
    }
    static get schema() { return schemaNetworkGroupDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.serverUri, stream);
        node_opcua_basic_types_1.encodeArray(this.networkPaths, stream, (obj, stream1) => { obj.encode(stream1); });
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.serverUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.networkPaths = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new EndpointUrlListDataType();
            obj.decode(stream1);
            return obj;
        });
    }
    get schema() { return schemaNetworkGroupDataType; }
}
NetworkGroupDataType.possibleFields = [
    "serverUri",
    "networkPaths"
];
NetworkGroupDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(11958, 0);
NetworkGroupDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(11950, 0);
exports.NetworkGroupDataType = NetworkGroupDataType;
NetworkGroupDataType.schema.encodingDefaultBinary = NetworkGroupDataType.encodingDefaultBinary;
NetworkGroupDataType.schema.encodingDefaultXml = NetworkGroupDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("NetworkGroupDataType", NetworkGroupDataType);
// --------------------------------------------------------------------------------------------
const schemaSamplingIntervalDiagnosticsDataType = node_opcua_factory_1.buildStructuredType({
    name: "SamplingIntervalDiagnosticsDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "samplingInterval",
            fieldType: "Double",
        },
        {
            name: "monitoredItemCount",
            fieldType: "UInt32",
        },
        {
            name: "maxMonitoredItemCount",
            fieldType: "UInt32",
        },
        {
            name: "disabledMonitoredItemCount",
            fieldType: "UInt32",
        },
    ]
});
class SamplingIntervalDiagnosticsDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SamplingIntervalDiagnosticsDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.samplingInterval = node_opcua_factory_1.initialize_field(schema.fields[0], options.samplingInterval);
        this.monitoredItemCount = node_opcua_factory_1.initialize_field(schema.fields[1], options.monitoredItemCount);
        this.maxMonitoredItemCount = node_opcua_factory_1.initialize_field(schema.fields[2], options.maxMonitoredItemCount);
        this.disabledMonitoredItemCount = node_opcua_factory_1.initialize_field(schema.fields[3], options.disabledMonitoredItemCount);
    }
    static get schema() { return schemaSamplingIntervalDiagnosticsDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDouble(this.samplingInterval, stream);
        node_opcua_basic_types_1.encodeUInt32(this.monitoredItemCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxMonitoredItemCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.disabledMonitoredItemCount, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.samplingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.monitoredItemCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.maxMonitoredItemCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.disabledMonitoredItemCount = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaSamplingIntervalDiagnosticsDataType; }
}
SamplingIntervalDiagnosticsDataType.possibleFields = [
    "samplingInterval",
    "monitoredItemCount",
    "maxMonitoredItemCount",
    "disabledMonitoredItemCount"
];
SamplingIntervalDiagnosticsDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(858, 0);
SamplingIntervalDiagnosticsDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(857, 0);
exports.SamplingIntervalDiagnosticsDataType = SamplingIntervalDiagnosticsDataType;
SamplingIntervalDiagnosticsDataType.schema.encodingDefaultBinary = SamplingIntervalDiagnosticsDataType.encodingDefaultBinary;
SamplingIntervalDiagnosticsDataType.schema.encodingDefaultXml = SamplingIntervalDiagnosticsDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SamplingIntervalDiagnosticsDataType", SamplingIntervalDiagnosticsDataType);
// --------------------------------------------------------------------------------------------
const schemaServerDiagnosticsSummaryDataType = node_opcua_factory_1.buildStructuredType({
    name: "ServerDiagnosticsSummaryDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "serverViewCount",
            fieldType: "UInt32",
        },
        {
            name: "currentSessionCount",
            fieldType: "UInt32",
        },
        {
            name: "cumulatedSessionCount",
            fieldType: "UInt32",
        },
        {
            name: "securityRejectedSessionCount",
            fieldType: "UInt32",
        },
        {
            name: "rejectedSessionCount",
            fieldType: "UInt32",
        },
        {
            name: "sessionTimeoutCount",
            fieldType: "UInt32",
        },
        {
            name: "sessionAbortCount",
            fieldType: "UInt32",
        },
        {
            name: "currentSubscriptionCount",
            fieldType: "UInt32",
        },
        {
            name: "cumulatedSubscriptionCount",
            fieldType: "UInt32",
        },
        {
            name: "publishingIntervalCount",
            fieldType: "UInt32",
        },
        {
            name: "securityRejectedRequestsCount",
            fieldType: "UInt32",
        },
        {
            name: "rejectedRequestsCount",
            fieldType: "UInt32",
        },
    ]
});
class ServerDiagnosticsSummaryDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ServerDiagnosticsSummaryDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.serverViewCount = node_opcua_factory_1.initialize_field(schema.fields[0], options.serverViewCount);
        this.currentSessionCount = node_opcua_factory_1.initialize_field(schema.fields[1], options.currentSessionCount);
        this.cumulatedSessionCount = node_opcua_factory_1.initialize_field(schema.fields[2], options.cumulatedSessionCount);
        this.securityRejectedSessionCount = node_opcua_factory_1.initialize_field(schema.fields[3], options.securityRejectedSessionCount);
        this.rejectedSessionCount = node_opcua_factory_1.initialize_field(schema.fields[4], options.rejectedSessionCount);
        this.sessionTimeoutCount = node_opcua_factory_1.initialize_field(schema.fields[5], options.sessionTimeoutCount);
        this.sessionAbortCount = node_opcua_factory_1.initialize_field(schema.fields[6], options.sessionAbortCount);
        this.currentSubscriptionCount = node_opcua_factory_1.initialize_field(schema.fields[7], options.currentSubscriptionCount);
        this.cumulatedSubscriptionCount = node_opcua_factory_1.initialize_field(schema.fields[8], options.cumulatedSubscriptionCount);
        this.publishingIntervalCount = node_opcua_factory_1.initialize_field(schema.fields[9], options.publishingIntervalCount);
        this.securityRejectedRequestsCount = node_opcua_factory_1.initialize_field(schema.fields[10], options.securityRejectedRequestsCount);
        this.rejectedRequestsCount = node_opcua_factory_1.initialize_field(schema.fields[11], options.rejectedRequestsCount);
    }
    static get schema() { return schemaServerDiagnosticsSummaryDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.serverViewCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.currentSessionCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.cumulatedSessionCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.securityRejectedSessionCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.rejectedSessionCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.sessionTimeoutCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.sessionAbortCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.currentSubscriptionCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.cumulatedSubscriptionCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.publishingIntervalCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.securityRejectedRequestsCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.rejectedRequestsCount, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.serverViewCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.currentSessionCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.cumulatedSessionCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.securityRejectedSessionCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.rejectedSessionCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.sessionTimeoutCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.sessionAbortCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.currentSubscriptionCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.cumulatedSubscriptionCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.publishingIntervalCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.securityRejectedRequestsCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.rejectedRequestsCount = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaServerDiagnosticsSummaryDataType; }
}
ServerDiagnosticsSummaryDataType.possibleFields = [
    "serverViewCount",
    "currentSessionCount",
    "cumulatedSessionCount",
    "securityRejectedSessionCount",
    "rejectedSessionCount",
    "sessionTimeoutCount",
    "sessionAbortCount",
    "currentSubscriptionCount",
    "cumulatedSubscriptionCount",
    "publishingIntervalCount",
    "securityRejectedRequestsCount",
    "rejectedRequestsCount"
];
ServerDiagnosticsSummaryDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(861, 0);
ServerDiagnosticsSummaryDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(860, 0);
exports.ServerDiagnosticsSummaryDataType = ServerDiagnosticsSummaryDataType;
ServerDiagnosticsSummaryDataType.schema.encodingDefaultBinary = ServerDiagnosticsSummaryDataType.encodingDefaultBinary;
ServerDiagnosticsSummaryDataType.schema.encodingDefaultXml = ServerDiagnosticsSummaryDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ServerDiagnosticsSummaryDataType", ServerDiagnosticsSummaryDataType);
// --------------------------------------------------------------------------------------------
const schemaServerStatusDataType = node_opcua_factory_1.buildStructuredType({
    name: "ServerStatusDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "startTime",
            fieldType: "DateTime",
        },
        {
            name: "currentTime",
            fieldType: "DateTime",
        },
        {
            name: "state",
            fieldType: "ServerState",
        },
        {
            name: "buildInfo",
            fieldType: "BuildInfo",
        },
        {
            name: "secondsTillShutdown",
            fieldType: "UInt32",
        },
        {
            name: "shutdownReason",
            fieldType: "LocalizedText",
        },
    ]
});
class ServerStatusDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ServerStatusDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.buildInfo = new BuildInfo();
        }
        this.startTime = node_opcua_factory_1.initialize_field(schema.fields[0], options.startTime);
        this.currentTime = node_opcua_factory_1.initialize_field(schema.fields[1], options.currentTime);
        this.state = this.setState(node_opcua_factory_1.initialize_field(schema.fields[2], options.state));
        this.buildInfo = new BuildInfo(options.buildInfo);
        this.secondsTillShutdown = node_opcua_factory_1.initialize_field(schema.fields[4], options.secondsTillShutdown);
        this.shutdownReason = node_opcua_factory_1.initialize_field(schema.fields[5], options.shutdownReason);
    }
    static get schema() { return schemaServerStatusDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDateTime(this.startTime, stream);
        node_opcua_basic_types_1.encodeDateTime(this.currentTime, stream);
        encodeServerState(this.state, stream);
        this.buildInfo.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.secondsTillShutdown, stream);
        node_opcua_data_model_1.encodeLocalizedText(this.shutdownReason, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.startTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.currentTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.state = decodeServerState(stream);
        this.buildInfo.decode(stream);
        this.secondsTillShutdown = node_opcua_basic_types_1.decodeUInt32(stream);
        this.shutdownReason = node_opcua_data_model_1.decodeLocalizedText(stream);
    }
    // Define Enumeration setters
    setState(value) {
        const coercedValue = exports._enumerationServerState.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to ServerState :" + value);
        }
        this.state = coercedValue.value;
        return this.state;
    }
    get schema() { return schemaServerStatusDataType; }
}
ServerStatusDataType.possibleFields = [
    "startTime",
    "currentTime",
    "state",
    "buildInfo",
    "secondsTillShutdown",
    "shutdownReason"
];
ServerStatusDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(864, 0);
ServerStatusDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(863, 0);
exports.ServerStatusDataType = ServerStatusDataType;
ServerStatusDataType.schema.encodingDefaultBinary = ServerStatusDataType.encodingDefaultBinary;
ServerStatusDataType.schema.encodingDefaultXml = ServerStatusDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ServerStatusDataType", ServerStatusDataType);
// --------------------------------------------------------------------------------------------
const schemaServiceCounterDataType = node_opcua_factory_1.buildStructuredType({
    name: "ServiceCounterDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "totalCount",
            fieldType: "UInt32",
        },
        {
            name: "errorCount",
            fieldType: "UInt32",
        },
    ]
});
class ServiceCounterDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ServiceCounterDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.totalCount = node_opcua_factory_1.initialize_field(schema.fields[0], options.totalCount);
        this.errorCount = node_opcua_factory_1.initialize_field(schema.fields[1], options.errorCount);
    }
    static get schema() { return schemaServiceCounterDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.totalCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.errorCount, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.totalCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.errorCount = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaServiceCounterDataType; }
}
ServiceCounterDataType.possibleFields = [
    "totalCount",
    "errorCount"
];
ServiceCounterDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(873, 0);
ServiceCounterDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(872, 0);
exports.ServiceCounterDataType = ServiceCounterDataType;
ServiceCounterDataType.schema.encodingDefaultBinary = ServiceCounterDataType.encodingDefaultBinary;
ServiceCounterDataType.schema.encodingDefaultXml = ServiceCounterDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ServiceCounterDataType", ServiceCounterDataType);
// --------------------------------------------------------------------------------------------
const schemaSessionDiagnosticsDataType = node_opcua_factory_1.buildStructuredType({
    name: "SessionDiagnosticsDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "sessionId",
            fieldType: "NodeId",
        },
        {
            name: "sessionName",
            fieldType: "UAString",
        },
        {
            name: "clientDescription",
            fieldType: "ApplicationDescription",
        },
        {
            name: "serverUri",
            fieldType: "UAString",
        },
        {
            name: "endpointUrl",
            fieldType: "UAString",
        },
        {
            name: "localeIds",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "actualSessionTimeout",
            fieldType: "Double",
        },
        {
            name: "maxResponseMessageSize",
            fieldType: "UInt32",
        },
        {
            name: "clientConnectionTime",
            fieldType: "DateTime",
        },
        {
            name: "clientLastContactTime",
            fieldType: "DateTime",
        },
        {
            name: "currentSubscriptionsCount",
            fieldType: "UInt32",
        },
        {
            name: "currentMonitoredItemsCount",
            fieldType: "UInt32",
        },
        {
            name: "currentPublishRequestsInQueue",
            fieldType: "UInt32",
        },
        {
            name: "totalRequestCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "unauthorizedRequestCount",
            fieldType: "UInt32",
        },
        {
            name: "readCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "historyReadCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "writeCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "historyUpdateCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "callCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "createMonitoredItemsCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "modifyMonitoredItemsCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "setMonitoringModeCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "setTriggeringCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "deleteMonitoredItemsCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "createSubscriptionCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "modifySubscriptionCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "setPublishingModeCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "publishCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "republishCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "transferSubscriptionsCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "deleteSubscriptionsCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "addNodesCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "addReferencesCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "deleteNodesCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "deleteReferencesCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "browseCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "browseNextCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "translateBrowsePathsToNodeIdsCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "queryFirstCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "queryNextCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "registerNodesCount",
            fieldType: "ServiceCounterDataType",
        },
        {
            name: "unregisterNodesCount",
            fieldType: "ServiceCounterDataType",
        },
    ]
});
class SessionDiagnosticsDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SessionDiagnosticsDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.clientDescription = new ApplicationDescription();
            this.totalRequestCount = new ServiceCounterDataType();
            this.readCount = new ServiceCounterDataType();
            this.historyReadCount = new ServiceCounterDataType();
            this.writeCount = new ServiceCounterDataType();
            this.historyUpdateCount = new ServiceCounterDataType();
            this.callCount = new ServiceCounterDataType();
            this.createMonitoredItemsCount = new ServiceCounterDataType();
            this.modifyMonitoredItemsCount = new ServiceCounterDataType();
            this.setMonitoringModeCount = new ServiceCounterDataType();
            this.setTriggeringCount = new ServiceCounterDataType();
            this.deleteMonitoredItemsCount = new ServiceCounterDataType();
            this.createSubscriptionCount = new ServiceCounterDataType();
            this.modifySubscriptionCount = new ServiceCounterDataType();
            this.setPublishingModeCount = new ServiceCounterDataType();
            this.publishCount = new ServiceCounterDataType();
            this.republishCount = new ServiceCounterDataType();
            this.transferSubscriptionsCount = new ServiceCounterDataType();
            this.deleteSubscriptionsCount = new ServiceCounterDataType();
            this.addNodesCount = new ServiceCounterDataType();
            this.addReferencesCount = new ServiceCounterDataType();
            this.deleteNodesCount = new ServiceCounterDataType();
            this.deleteReferencesCount = new ServiceCounterDataType();
            this.browseCount = new ServiceCounterDataType();
            this.browseNextCount = new ServiceCounterDataType();
            this.translateBrowsePathsToNodeIdsCount = new ServiceCounterDataType();
            this.queryFirstCount = new ServiceCounterDataType();
            this.queryNextCount = new ServiceCounterDataType();
            this.registerNodesCount = new ServiceCounterDataType();
            this.unregisterNodesCount = new ServiceCounterDataType();
        }
        this.sessionId = node_opcua_factory_1.initialize_field(schema.fields[0], options.sessionId);
        this.sessionName = node_opcua_factory_1.initialize_field(schema.fields[1], options.sessionName);
        this.clientDescription = new ApplicationDescription(options.clientDescription);
        this.serverUri = node_opcua_factory_1.initialize_field(schema.fields[3], options.serverUri);
        this.endpointUrl = node_opcua_factory_1.initialize_field(schema.fields[4], options.endpointUrl);
        this.localeIds = node_opcua_factory_1.initialize_field_array(schema.fields[5], options.localeIds);
        this.actualSessionTimeout = node_opcua_factory_1.initialize_field(schema.fields[6], options.actualSessionTimeout);
        this.maxResponseMessageSize = node_opcua_factory_1.initialize_field(schema.fields[7], options.maxResponseMessageSize);
        this.clientConnectionTime = node_opcua_factory_1.initialize_field(schema.fields[8], options.clientConnectionTime);
        this.clientLastContactTime = node_opcua_factory_1.initialize_field(schema.fields[9], options.clientLastContactTime);
        this.currentSubscriptionsCount = node_opcua_factory_1.initialize_field(schema.fields[10], options.currentSubscriptionsCount);
        this.currentMonitoredItemsCount = node_opcua_factory_1.initialize_field(schema.fields[11], options.currentMonitoredItemsCount);
        this.currentPublishRequestsInQueue = node_opcua_factory_1.initialize_field(schema.fields[12], options.currentPublishRequestsInQueue);
        this.totalRequestCount = new ServiceCounterDataType(options.totalRequestCount);
        this.unauthorizedRequestCount = node_opcua_factory_1.initialize_field(schema.fields[14], options.unauthorizedRequestCount);
        this.readCount = new ServiceCounterDataType(options.readCount);
        this.historyReadCount = new ServiceCounterDataType(options.historyReadCount);
        this.writeCount = new ServiceCounterDataType(options.writeCount);
        this.historyUpdateCount = new ServiceCounterDataType(options.historyUpdateCount);
        this.callCount = new ServiceCounterDataType(options.callCount);
        this.createMonitoredItemsCount = new ServiceCounterDataType(options.createMonitoredItemsCount);
        this.modifyMonitoredItemsCount = new ServiceCounterDataType(options.modifyMonitoredItemsCount);
        this.setMonitoringModeCount = new ServiceCounterDataType(options.setMonitoringModeCount);
        this.setTriggeringCount = new ServiceCounterDataType(options.setTriggeringCount);
        this.deleteMonitoredItemsCount = new ServiceCounterDataType(options.deleteMonitoredItemsCount);
        this.createSubscriptionCount = new ServiceCounterDataType(options.createSubscriptionCount);
        this.modifySubscriptionCount = new ServiceCounterDataType(options.modifySubscriptionCount);
        this.setPublishingModeCount = new ServiceCounterDataType(options.setPublishingModeCount);
        this.publishCount = new ServiceCounterDataType(options.publishCount);
        this.republishCount = new ServiceCounterDataType(options.republishCount);
        this.transferSubscriptionsCount = new ServiceCounterDataType(options.transferSubscriptionsCount);
        this.deleteSubscriptionsCount = new ServiceCounterDataType(options.deleteSubscriptionsCount);
        this.addNodesCount = new ServiceCounterDataType(options.addNodesCount);
        this.addReferencesCount = new ServiceCounterDataType(options.addReferencesCount);
        this.deleteNodesCount = new ServiceCounterDataType(options.deleteNodesCount);
        this.deleteReferencesCount = new ServiceCounterDataType(options.deleteReferencesCount);
        this.browseCount = new ServiceCounterDataType(options.browseCount);
        this.browseNextCount = new ServiceCounterDataType(options.browseNextCount);
        this.translateBrowsePathsToNodeIdsCount = new ServiceCounterDataType(options.translateBrowsePathsToNodeIdsCount);
        this.queryFirstCount = new ServiceCounterDataType(options.queryFirstCount);
        this.queryNextCount = new ServiceCounterDataType(options.queryNextCount);
        this.registerNodesCount = new ServiceCounterDataType(options.registerNodesCount);
        this.unregisterNodesCount = new ServiceCounterDataType(options.unregisterNodesCount);
    }
    static get schema() { return schemaSessionDiagnosticsDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.sessionId, stream);
        node_opcua_basic_types_1.encodeUAString(this.sessionName, stream);
        this.clientDescription.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.serverUri, stream);
        node_opcua_basic_types_1.encodeUAString(this.endpointUrl, stream);
        node_opcua_basic_types_1.encodeArray(this.localeIds, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeDouble(this.actualSessionTimeout, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxResponseMessageSize, stream);
        node_opcua_basic_types_1.encodeDateTime(this.clientConnectionTime, stream);
        node_opcua_basic_types_1.encodeDateTime(this.clientLastContactTime, stream);
        node_opcua_basic_types_1.encodeUInt32(this.currentSubscriptionsCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.currentMonitoredItemsCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.currentPublishRequestsInQueue, stream);
        this.totalRequestCount.encode(stream);
        node_opcua_basic_types_1.encodeUInt32(this.unauthorizedRequestCount, stream);
        this.readCount.encode(stream);
        this.historyReadCount.encode(stream);
        this.writeCount.encode(stream);
        this.historyUpdateCount.encode(stream);
        this.callCount.encode(stream);
        this.createMonitoredItemsCount.encode(stream);
        this.modifyMonitoredItemsCount.encode(stream);
        this.setMonitoringModeCount.encode(stream);
        this.setTriggeringCount.encode(stream);
        this.deleteMonitoredItemsCount.encode(stream);
        this.createSubscriptionCount.encode(stream);
        this.modifySubscriptionCount.encode(stream);
        this.setPublishingModeCount.encode(stream);
        this.publishCount.encode(stream);
        this.republishCount.encode(stream);
        this.transferSubscriptionsCount.encode(stream);
        this.deleteSubscriptionsCount.encode(stream);
        this.addNodesCount.encode(stream);
        this.addReferencesCount.encode(stream);
        this.deleteNodesCount.encode(stream);
        this.deleteReferencesCount.encode(stream);
        this.browseCount.encode(stream);
        this.browseNextCount.encode(stream);
        this.translateBrowsePathsToNodeIdsCount.encode(stream);
        this.queryFirstCount.encode(stream);
        this.queryNextCount.encode(stream);
        this.registerNodesCount.encode(stream);
        this.unregisterNodesCount.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.sessionId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.sessionName = node_opcua_basic_types_1.decodeUAString(stream);
        this.clientDescription.decode(stream);
        this.serverUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.endpointUrl = node_opcua_basic_types_1.decodeUAString(stream);
        this.localeIds = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.actualSessionTimeout = node_opcua_basic_types_1.decodeDouble(stream);
        this.maxResponseMessageSize = node_opcua_basic_types_1.decodeUInt32(stream);
        this.clientConnectionTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.clientLastContactTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.currentSubscriptionsCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.currentMonitoredItemsCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.currentPublishRequestsInQueue = node_opcua_basic_types_1.decodeUInt32(stream);
        this.totalRequestCount.decode(stream);
        this.unauthorizedRequestCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.readCount.decode(stream);
        this.historyReadCount.decode(stream);
        this.writeCount.decode(stream);
        this.historyUpdateCount.decode(stream);
        this.callCount.decode(stream);
        this.createMonitoredItemsCount.decode(stream);
        this.modifyMonitoredItemsCount.decode(stream);
        this.setMonitoringModeCount.decode(stream);
        this.setTriggeringCount.decode(stream);
        this.deleteMonitoredItemsCount.decode(stream);
        this.createSubscriptionCount.decode(stream);
        this.modifySubscriptionCount.decode(stream);
        this.setPublishingModeCount.decode(stream);
        this.publishCount.decode(stream);
        this.republishCount.decode(stream);
        this.transferSubscriptionsCount.decode(stream);
        this.deleteSubscriptionsCount.decode(stream);
        this.addNodesCount.decode(stream);
        this.addReferencesCount.decode(stream);
        this.deleteNodesCount.decode(stream);
        this.deleteReferencesCount.decode(stream);
        this.browseCount.decode(stream);
        this.browseNextCount.decode(stream);
        this.translateBrowsePathsToNodeIdsCount.decode(stream);
        this.queryFirstCount.decode(stream);
        this.queryNextCount.decode(stream);
        this.registerNodesCount.decode(stream);
        this.unregisterNodesCount.decode(stream);
    }
    get schema() { return schemaSessionDiagnosticsDataType; }
}
SessionDiagnosticsDataType.possibleFields = [
    "sessionId",
    "sessionName",
    "clientDescription",
    "serverUri",
    "endpointUrl",
    "localeIds",
    "actualSessionTimeout",
    "maxResponseMessageSize",
    "clientConnectionTime",
    "clientLastContactTime",
    "currentSubscriptionsCount",
    "currentMonitoredItemsCount",
    "currentPublishRequestsInQueue",
    "totalRequestCount",
    "unauthorizedRequestCount",
    "readCount",
    "historyReadCount",
    "writeCount",
    "historyUpdateCount",
    "callCount",
    "createMonitoredItemsCount",
    "modifyMonitoredItemsCount",
    "setMonitoringModeCount",
    "setTriggeringCount",
    "deleteMonitoredItemsCount",
    "createSubscriptionCount",
    "modifySubscriptionCount",
    "setPublishingModeCount",
    "publishCount",
    "republishCount",
    "transferSubscriptionsCount",
    "deleteSubscriptionsCount",
    "addNodesCount",
    "addReferencesCount",
    "deleteNodesCount",
    "deleteReferencesCount",
    "browseCount",
    "browseNextCount",
    "translateBrowsePathsToNodeIdsCount",
    "queryFirstCount",
    "queryNextCount",
    "registerNodesCount",
    "unregisterNodesCount"
];
SessionDiagnosticsDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(867, 0);
SessionDiagnosticsDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(866, 0);
exports.SessionDiagnosticsDataType = SessionDiagnosticsDataType;
SessionDiagnosticsDataType.schema.encodingDefaultBinary = SessionDiagnosticsDataType.encodingDefaultBinary;
SessionDiagnosticsDataType.schema.encodingDefaultXml = SessionDiagnosticsDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SessionDiagnosticsDataType", SessionDiagnosticsDataType);
// --------------------------------------------------------------------------------------------
const schemaSessionSecurityDiagnosticsDataType = node_opcua_factory_1.buildStructuredType({
    name: "SessionSecurityDiagnosticsDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "sessionId",
            fieldType: "NodeId",
        },
        {
            name: "clientUserIdOfSession",
            fieldType: "UAString",
        },
        {
            name: "clientUserIdHistory",
            fieldType: "UAString",
            isArray: true
        },
        {
            name: "authenticationMechanism",
            fieldType: "UAString",
        },
        {
            name: "encoding",
            fieldType: "UAString",
        },
        {
            name: "transportProtocol",
            fieldType: "UAString",
        },
        {
            name: "securityMode",
            fieldType: "MessageSecurityMode",
        },
        {
            name: "securityPolicyUri",
            fieldType: "UAString",
        },
        {
            name: "clientCertificate",
            fieldType: "ByteString",
        },
    ]
});
class SessionSecurityDiagnosticsDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SessionSecurityDiagnosticsDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.sessionId = node_opcua_factory_1.initialize_field(schema.fields[0], options.sessionId);
        this.clientUserIdOfSession = node_opcua_factory_1.initialize_field(schema.fields[1], options.clientUserIdOfSession);
        this.clientUserIdHistory = node_opcua_factory_1.initialize_field_array(schema.fields[2], options.clientUserIdHistory);
        this.authenticationMechanism = node_opcua_factory_1.initialize_field(schema.fields[3], options.authenticationMechanism);
        this.encoding = node_opcua_factory_1.initialize_field(schema.fields[4], options.encoding);
        this.transportProtocol = node_opcua_factory_1.initialize_field(schema.fields[5], options.transportProtocol);
        this.securityMode = this.setSecurityMode(node_opcua_factory_1.initialize_field(schema.fields[6], options.securityMode));
        this.securityPolicyUri = node_opcua_factory_1.initialize_field(schema.fields[7], options.securityPolicyUri);
        this.clientCertificate = node_opcua_factory_1.initialize_field(schema.fields[8], options.clientCertificate);
    }
    static get schema() { return schemaSessionSecurityDiagnosticsDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.sessionId, stream);
        node_opcua_basic_types_1.encodeUAString(this.clientUserIdOfSession, stream);
        node_opcua_basic_types_1.encodeArray(this.clientUserIdHistory, stream, node_opcua_basic_types_1.encodeUAString);
        node_opcua_basic_types_1.encodeUAString(this.authenticationMechanism, stream);
        node_opcua_basic_types_1.encodeUAString(this.encoding, stream);
        node_opcua_basic_types_1.encodeUAString(this.transportProtocol, stream);
        encodeMessageSecurityMode(this.securityMode, stream);
        node_opcua_basic_types_1.encodeUAString(this.securityPolicyUri, stream);
        node_opcua_basic_types_1.encodeByteString(this.clientCertificate, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.sessionId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.clientUserIdOfSession = node_opcua_basic_types_1.decodeUAString(stream);
        this.clientUserIdHistory = node_opcua_basic_types_1.decodeArray(stream, node_opcua_basic_types_1.decodeUAString);
        this.authenticationMechanism = node_opcua_basic_types_1.decodeUAString(stream);
        this.encoding = node_opcua_basic_types_1.decodeUAString(stream);
        this.transportProtocol = node_opcua_basic_types_1.decodeUAString(stream);
        this.securityMode = decodeMessageSecurityMode(stream);
        this.securityPolicyUri = node_opcua_basic_types_1.decodeUAString(stream);
        this.clientCertificate = node_opcua_basic_types_1.decodeByteString(stream);
    }
    // Define Enumeration setters
    setSecurityMode(value) {
        const coercedValue = exports._enumerationMessageSecurityMode.get(value);
        /* istanbul ignore next */
        if (coercedValue === undefined || coercedValue === null) {
            throw new Error("value cannot be coerced to MessageSecurityMode :" + value);
        }
        this.securityMode = coercedValue.value;
        return this.securityMode;
    }
    get schema() { return schemaSessionSecurityDiagnosticsDataType; }
}
SessionSecurityDiagnosticsDataType.possibleFields = [
    "sessionId",
    "clientUserIdOfSession",
    "clientUserIdHistory",
    "authenticationMechanism",
    "encoding",
    "transportProtocol",
    "securityMode",
    "securityPolicyUri",
    "clientCertificate"
];
SessionSecurityDiagnosticsDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(870, 0);
SessionSecurityDiagnosticsDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(869, 0);
exports.SessionSecurityDiagnosticsDataType = SessionSecurityDiagnosticsDataType;
SessionSecurityDiagnosticsDataType.schema.encodingDefaultBinary = SessionSecurityDiagnosticsDataType.encodingDefaultBinary;
SessionSecurityDiagnosticsDataType.schema.encodingDefaultXml = SessionSecurityDiagnosticsDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SessionSecurityDiagnosticsDataType", SessionSecurityDiagnosticsDataType);
// --------------------------------------------------------------------------------------------
const schemaStatusResult = node_opcua_factory_1.buildStructuredType({
    name: "StatusResult",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "statusCode",
            fieldType: "StatusCode",
        },
        {
            name: "diagnosticInfo",
            fieldType: "DiagnosticInfo",
        },
    ]
});
class StatusResult extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = StatusResult.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.statusCode = node_opcua_factory_1.initialize_field(schema.fields[0], options.statusCode);
        this.diagnosticInfo = node_opcua_factory_1.initialize_field(schema.fields[1], options.diagnosticInfo);
    }
    static get schema() { return schemaStatusResult; }
    encode(stream) {
        super.encode(stream);
        node_opcua_status_code_1.encodeStatusCode(this.statusCode, stream);
        node_opcua_data_model_1.encodeDiagnosticInfo(this.diagnosticInfo, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.statusCode = node_opcua_status_code_1.decodeStatusCode(stream);
        this.diagnosticInfo = node_opcua_data_model_1.decodeDiagnosticInfo(stream);
    }
    get schema() { return schemaStatusResult; }
}
StatusResult.possibleFields = [
    "statusCode",
    "diagnosticInfo"
];
StatusResult.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(301, 0);
StatusResult.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(300, 0);
exports.StatusResult = StatusResult;
StatusResult.schema.encodingDefaultBinary = StatusResult.encodingDefaultBinary;
StatusResult.schema.encodingDefaultXml = StatusResult.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("StatusResult", StatusResult);
// --------------------------------------------------------------------------------------------
const schemaSubscriptionDiagnosticsDataType = node_opcua_factory_1.buildStructuredType({
    name: "SubscriptionDiagnosticsDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "sessionId",
            fieldType: "NodeId",
        },
        {
            name: "subscriptionId",
            fieldType: "UInt32",
        },
        {
            name: "priority",
            fieldType: "Byte",
        },
        {
            name: "publishingInterval",
            fieldType: "Double",
        },
        {
            name: "maxKeepAliveCount",
            fieldType: "UInt32",
        },
        {
            name: "maxLifetimeCount",
            fieldType: "UInt32",
        },
        {
            name: "maxNotificationsPerPublish",
            fieldType: "UInt32",
        },
        {
            name: "publishingEnabled",
            fieldType: "UABoolean",
        },
        {
            name: "modifyCount",
            fieldType: "UInt32",
        },
        {
            name: "enableCount",
            fieldType: "UInt32",
        },
        {
            name: "disableCount",
            fieldType: "UInt32",
        },
        {
            name: "republishRequestCount",
            fieldType: "UInt32",
        },
        {
            name: "republishMessageRequestCount",
            fieldType: "UInt32",
        },
        {
            name: "republishMessageCount",
            fieldType: "UInt32",
        },
        {
            name: "transferRequestCount",
            fieldType: "UInt32",
        },
        {
            name: "transferredToAltClientCount",
            fieldType: "UInt32",
        },
        {
            name: "transferredToSameClientCount",
            fieldType: "UInt32",
        },
        {
            name: "publishRequestCount",
            fieldType: "UInt32",
        },
        {
            name: "dataChangeNotificationsCount",
            fieldType: "UInt32",
        },
        {
            name: "eventNotificationsCount",
            fieldType: "UInt32",
        },
        {
            name: "notificationsCount",
            fieldType: "UInt32",
        },
        {
            name: "latePublishRequestCount",
            fieldType: "UInt32",
        },
        {
            name: "currentKeepAliveCount",
            fieldType: "UInt32",
        },
        {
            name: "currentLifetimeCount",
            fieldType: "UInt32",
        },
        {
            name: "unacknowledgedMessageCount",
            fieldType: "UInt32",
        },
        {
            name: "discardedMessageCount",
            fieldType: "UInt32",
        },
        {
            name: "monitoredItemCount",
            fieldType: "UInt32",
        },
        {
            name: "disabledMonitoredItemCount",
            fieldType: "UInt32",
        },
        {
            name: "monitoringQueueOverflowCount",
            fieldType: "UInt32",
        },
        {
            name: "nextSequenceNumber",
            fieldType: "UInt32",
        },
        {
            name: "eventQueueOverFlowCount",
            fieldType: "UInt32",
        },
    ]
});
class SubscriptionDiagnosticsDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SubscriptionDiagnosticsDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.sessionId = node_opcua_factory_1.initialize_field(schema.fields[0], options.sessionId);
        this.subscriptionId = node_opcua_factory_1.initialize_field(schema.fields[1], options.subscriptionId);
        this.priority = node_opcua_factory_1.initialize_field(schema.fields[2], options.priority);
        this.publishingInterval = node_opcua_factory_1.initialize_field(schema.fields[3], options.publishingInterval);
        this.maxKeepAliveCount = node_opcua_factory_1.initialize_field(schema.fields[4], options.maxKeepAliveCount);
        this.maxLifetimeCount = node_opcua_factory_1.initialize_field(schema.fields[5], options.maxLifetimeCount);
        this.maxNotificationsPerPublish = node_opcua_factory_1.initialize_field(schema.fields[6], options.maxNotificationsPerPublish);
        this.publishingEnabled = node_opcua_factory_1.initialize_field(schema.fields[7], options.publishingEnabled);
        this.modifyCount = node_opcua_factory_1.initialize_field(schema.fields[8], options.modifyCount);
        this.enableCount = node_opcua_factory_1.initialize_field(schema.fields[9], options.enableCount);
        this.disableCount = node_opcua_factory_1.initialize_field(schema.fields[10], options.disableCount);
        this.republishRequestCount = node_opcua_factory_1.initialize_field(schema.fields[11], options.republishRequestCount);
        this.republishMessageRequestCount = node_opcua_factory_1.initialize_field(schema.fields[12], options.republishMessageRequestCount);
        this.republishMessageCount = node_opcua_factory_1.initialize_field(schema.fields[13], options.republishMessageCount);
        this.transferRequestCount = node_opcua_factory_1.initialize_field(schema.fields[14], options.transferRequestCount);
        this.transferredToAltClientCount = node_opcua_factory_1.initialize_field(schema.fields[15], options.transferredToAltClientCount);
        this.transferredToSameClientCount = node_opcua_factory_1.initialize_field(schema.fields[16], options.transferredToSameClientCount);
        this.publishRequestCount = node_opcua_factory_1.initialize_field(schema.fields[17], options.publishRequestCount);
        this.dataChangeNotificationsCount = node_opcua_factory_1.initialize_field(schema.fields[18], options.dataChangeNotificationsCount);
        this.eventNotificationsCount = node_opcua_factory_1.initialize_field(schema.fields[19], options.eventNotificationsCount);
        this.notificationsCount = node_opcua_factory_1.initialize_field(schema.fields[20], options.notificationsCount);
        this.latePublishRequestCount = node_opcua_factory_1.initialize_field(schema.fields[21], options.latePublishRequestCount);
        this.currentKeepAliveCount = node_opcua_factory_1.initialize_field(schema.fields[22], options.currentKeepAliveCount);
        this.currentLifetimeCount = node_opcua_factory_1.initialize_field(schema.fields[23], options.currentLifetimeCount);
        this.unacknowledgedMessageCount = node_opcua_factory_1.initialize_field(schema.fields[24], options.unacknowledgedMessageCount);
        this.discardedMessageCount = node_opcua_factory_1.initialize_field(schema.fields[25], options.discardedMessageCount);
        this.monitoredItemCount = node_opcua_factory_1.initialize_field(schema.fields[26], options.monitoredItemCount);
        this.disabledMonitoredItemCount = node_opcua_factory_1.initialize_field(schema.fields[27], options.disabledMonitoredItemCount);
        this.monitoringQueueOverflowCount = node_opcua_factory_1.initialize_field(schema.fields[28], options.monitoringQueueOverflowCount);
        this.nextSequenceNumber = node_opcua_factory_1.initialize_field(schema.fields[29], options.nextSequenceNumber);
        this.eventQueueOverFlowCount = node_opcua_factory_1.initialize_field(schema.fields[30], options.eventQueueOverFlowCount);
    }
    static get schema() { return schemaSubscriptionDiagnosticsDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.sessionId, stream);
        node_opcua_basic_types_1.encodeUInt32(this.subscriptionId, stream);
        node_opcua_basic_types_1.encodeByte(this.priority, stream);
        node_opcua_basic_types_1.encodeDouble(this.publishingInterval, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxKeepAliveCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxLifetimeCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.maxNotificationsPerPublish, stream);
        node_opcua_basic_types_1.encodeUABoolean(this.publishingEnabled, stream);
        node_opcua_basic_types_1.encodeUInt32(this.modifyCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.enableCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.disableCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.republishRequestCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.republishMessageRequestCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.republishMessageCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.transferRequestCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.transferredToAltClientCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.transferredToSameClientCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.publishRequestCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.dataChangeNotificationsCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.eventNotificationsCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.notificationsCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.latePublishRequestCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.currentKeepAliveCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.currentLifetimeCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.unacknowledgedMessageCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.discardedMessageCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.monitoredItemCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.disabledMonitoredItemCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.monitoringQueueOverflowCount, stream);
        node_opcua_basic_types_1.encodeUInt32(this.nextSequenceNumber, stream);
        node_opcua_basic_types_1.encodeUInt32(this.eventQueueOverFlowCount, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.sessionId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.subscriptionId = node_opcua_basic_types_1.decodeUInt32(stream);
        this.priority = node_opcua_basic_types_1.decodeByte(stream);
        this.publishingInterval = node_opcua_basic_types_1.decodeDouble(stream);
        this.maxKeepAliveCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.maxLifetimeCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.maxNotificationsPerPublish = node_opcua_basic_types_1.decodeUInt32(stream);
        this.publishingEnabled = node_opcua_basic_types_1.decodeUABoolean(stream);
        this.modifyCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.enableCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.disableCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.republishRequestCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.republishMessageRequestCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.republishMessageCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.transferRequestCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.transferredToAltClientCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.transferredToSameClientCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.publishRequestCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.dataChangeNotificationsCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.eventNotificationsCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.notificationsCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.latePublishRequestCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.currentKeepAliveCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.currentLifetimeCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.unacknowledgedMessageCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.discardedMessageCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.monitoredItemCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.disabledMonitoredItemCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.monitoringQueueOverflowCount = node_opcua_basic_types_1.decodeUInt32(stream);
        this.nextSequenceNumber = node_opcua_basic_types_1.decodeUInt32(stream);
        this.eventQueueOverFlowCount = node_opcua_basic_types_1.decodeUInt32(stream);
    }
    get schema() { return schemaSubscriptionDiagnosticsDataType; }
}
SubscriptionDiagnosticsDataType.possibleFields = [
    "sessionId",
    "subscriptionId",
    "priority",
    "publishingInterval",
    "maxKeepAliveCount",
    "maxLifetimeCount",
    "maxNotificationsPerPublish",
    "publishingEnabled",
    "modifyCount",
    "enableCount",
    "disableCount",
    "republishRequestCount",
    "republishMessageRequestCount",
    "republishMessageCount",
    "transferRequestCount",
    "transferredToAltClientCount",
    "transferredToSameClientCount",
    "publishRequestCount",
    "dataChangeNotificationsCount",
    "eventNotificationsCount",
    "notificationsCount",
    "latePublishRequestCount",
    "currentKeepAliveCount",
    "currentLifetimeCount",
    "unacknowledgedMessageCount",
    "discardedMessageCount",
    "monitoredItemCount",
    "disabledMonitoredItemCount",
    "monitoringQueueOverflowCount",
    "nextSequenceNumber",
    "eventQueueOverFlowCount"
];
SubscriptionDiagnosticsDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(876, 0);
SubscriptionDiagnosticsDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(875, 0);
exports.SubscriptionDiagnosticsDataType = SubscriptionDiagnosticsDataType;
SubscriptionDiagnosticsDataType.schema.encodingDefaultBinary = SubscriptionDiagnosticsDataType.encodingDefaultBinary;
SubscriptionDiagnosticsDataType.schema.encodingDefaultXml = SubscriptionDiagnosticsDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SubscriptionDiagnosticsDataType", SubscriptionDiagnosticsDataType);
// --------------------------------------------------------------------------------------------
const schemaModelChangeStructureDataType = node_opcua_factory_1.buildStructuredType({
    name: "ModelChangeStructureDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "affected",
            fieldType: "NodeId",
        },
        {
            name: "affectedType",
            fieldType: "NodeId",
        },
        {
            name: "verb",
            fieldType: "Byte",
        },
    ]
});
class ModelChangeStructureDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ModelChangeStructureDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.affected = node_opcua_factory_1.initialize_field(schema.fields[0], options.affected);
        this.affectedType = node_opcua_factory_1.initialize_field(schema.fields[1], options.affectedType);
        this.verb = node_opcua_factory_1.initialize_field(schema.fields[2], options.verb);
    }
    static get schema() { return schemaModelChangeStructureDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.affected, stream);
        node_opcua_basic_types_1.encodeNodeId(this.affectedType, stream);
        node_opcua_basic_types_1.encodeByte(this.verb, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.affected = node_opcua_basic_types_1.decodeNodeId(stream);
        this.affectedType = node_opcua_basic_types_1.decodeNodeId(stream);
        this.verb = node_opcua_basic_types_1.decodeByte(stream);
    }
    get schema() { return schemaModelChangeStructureDataType; }
}
ModelChangeStructureDataType.possibleFields = [
    "affected",
    "affectedType",
    "verb"
];
ModelChangeStructureDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(879, 0);
ModelChangeStructureDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(878, 0);
exports.ModelChangeStructureDataType = ModelChangeStructureDataType;
ModelChangeStructureDataType.schema.encodingDefaultBinary = ModelChangeStructureDataType.encodingDefaultBinary;
ModelChangeStructureDataType.schema.encodingDefaultXml = ModelChangeStructureDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ModelChangeStructureDataType", ModelChangeStructureDataType);
// --------------------------------------------------------------------------------------------
const schemaSemanticChangeStructureDataType = node_opcua_factory_1.buildStructuredType({
    name: "SemanticChangeStructureDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "affected",
            fieldType: "NodeId",
        },
        {
            name: "affectedType",
            fieldType: "NodeId",
        },
    ]
});
class SemanticChangeStructureDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = SemanticChangeStructureDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.affected = node_opcua_factory_1.initialize_field(schema.fields[0], options.affected);
        this.affectedType = node_opcua_factory_1.initialize_field(schema.fields[1], options.affectedType);
    }
    static get schema() { return schemaSemanticChangeStructureDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.affected, stream);
        node_opcua_basic_types_1.encodeNodeId(this.affectedType, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.affected = node_opcua_basic_types_1.decodeNodeId(stream);
        this.affectedType = node_opcua_basic_types_1.decodeNodeId(stream);
    }
    get schema() { return schemaSemanticChangeStructureDataType; }
}
SemanticChangeStructureDataType.possibleFields = [
    "affected",
    "affectedType"
];
SemanticChangeStructureDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(899, 0);
SemanticChangeStructureDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(898, 0);
exports.SemanticChangeStructureDataType = SemanticChangeStructureDataType;
SemanticChangeStructureDataType.schema.encodingDefaultBinary = SemanticChangeStructureDataType.encodingDefaultBinary;
SemanticChangeStructureDataType.schema.encodingDefaultXml = SemanticChangeStructureDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("SemanticChangeStructureDataType", SemanticChangeStructureDataType);
// --------------------------------------------------------------------------------------------
const schemaComplexNumberType = node_opcua_factory_1.buildStructuredType({
    name: "ComplexNumberType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "real",
            fieldType: "Float",
        },
        {
            name: "imaginary",
            fieldType: "Float",
        },
    ]
});
class ComplexNumberType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ComplexNumberType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.real = node_opcua_factory_1.initialize_field(schema.fields[0], options.real);
        this.imaginary = node_opcua_factory_1.initialize_field(schema.fields[1], options.imaginary);
    }
    static get schema() { return schemaComplexNumberType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeFloat(this.real, stream);
        node_opcua_basic_types_1.encodeFloat(this.imaginary, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.real = node_opcua_basic_types_1.decodeFloat(stream);
        this.imaginary = node_opcua_basic_types_1.decodeFloat(stream);
    }
    get schema() { return schemaComplexNumberType; }
}
ComplexNumberType.possibleFields = [
    "real",
    "imaginary"
];
ComplexNumberType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12181, 0);
ComplexNumberType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12173, 0);
exports.ComplexNumberType = ComplexNumberType;
ComplexNumberType.schema.encodingDefaultBinary = ComplexNumberType.encodingDefaultBinary;
ComplexNumberType.schema.encodingDefaultXml = ComplexNumberType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ComplexNumberType", ComplexNumberType);
// --------------------------------------------------------------------------------------------
const schemaDoubleComplexNumberType = node_opcua_factory_1.buildStructuredType({
    name: "DoubleComplexNumberType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "real",
            fieldType: "Double",
        },
        {
            name: "imaginary",
            fieldType: "Double",
        },
    ]
});
class DoubleComplexNumberType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = DoubleComplexNumberType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.real = node_opcua_factory_1.initialize_field(schema.fields[0], options.real);
        this.imaginary = node_opcua_factory_1.initialize_field(schema.fields[1], options.imaginary);
    }
    static get schema() { return schemaDoubleComplexNumberType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDouble(this.real, stream);
        node_opcua_basic_types_1.encodeDouble(this.imaginary, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.real = node_opcua_basic_types_1.decodeDouble(stream);
        this.imaginary = node_opcua_basic_types_1.decodeDouble(stream);
    }
    get schema() { return schemaDoubleComplexNumberType; }
}
DoubleComplexNumberType.possibleFields = [
    "real",
    "imaginary"
];
DoubleComplexNumberType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12182, 0);
DoubleComplexNumberType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12174, 0);
exports.DoubleComplexNumberType = DoubleComplexNumberType;
DoubleComplexNumberType.schema.encodingDefaultBinary = DoubleComplexNumberType.encodingDefaultBinary;
DoubleComplexNumberType.schema.encodingDefaultXml = DoubleComplexNumberType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("DoubleComplexNumberType", DoubleComplexNumberType);
// --------------------------------------------------------------------------------------------
const schemaXVType = node_opcua_factory_1.buildStructuredType({
    name: "XVType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "x",
            fieldType: "Double",
        },
        {
            name: "value",
            fieldType: "Float",
        },
    ]
});
class XVType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = XVType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.x = node_opcua_factory_1.initialize_field(schema.fields[0], options.x);
        this.value = node_opcua_factory_1.initialize_field(schema.fields[1], options.value);
    }
    static get schema() { return schemaXVType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeDouble(this.x, stream);
        node_opcua_basic_types_1.encodeFloat(this.value, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.x = node_opcua_basic_types_1.decodeDouble(stream);
        this.value = node_opcua_basic_types_1.decodeFloat(stream);
    }
    get schema() { return schemaXVType; }
}
XVType.possibleFields = [
    "x",
    "value"
];
XVType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(12090, 0);
XVType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(12082, 0);
exports.XVType = XVType;
XVType.schema.encodingDefaultBinary = XVType.encodingDefaultBinary;
XVType.schema.encodingDefaultXml = XVType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("XVType", XVType);
// --------------------------------------------------------------------------------------------
const schemaProgramDiagnosticDataType = node_opcua_factory_1.buildStructuredType({
    name: "ProgramDiagnosticDataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "createSessionId",
            fieldType: "NodeId",
        },
        {
            name: "createClientName",
            fieldType: "UAString",
        },
        {
            name: "invocationCreationTime",
            fieldType: "DateTime",
        },
        {
            name: "lastTransitionTime",
            fieldType: "DateTime",
        },
        {
            name: "lastMethodCall",
            fieldType: "UAString",
        },
        {
            name: "lastMethodSessionId",
            fieldType: "NodeId",
        },
        {
            name: "lastMethodInputArguments",
            fieldType: "Argument",
            isArray: true
        },
        {
            name: "lastMethodOutputArguments",
            fieldType: "Argument",
            isArray: true
        },
        {
            name: "lastMethodCallTime",
            fieldType: "DateTime",
        },
        {
            name: "lastMethodReturnStatus",
            fieldType: "StatusResult",
        },
    ]
});
class ProgramDiagnosticDataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ProgramDiagnosticDataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.lastMethodInputArguments = null; /* null array */
            this.lastMethodOutputArguments = null; /* null array */
            this.lastMethodReturnStatus = new StatusResult();
        }
        this.createSessionId = node_opcua_factory_1.initialize_field(schema.fields[0], options.createSessionId);
        this.createClientName = node_opcua_factory_1.initialize_field(schema.fields[1], options.createClientName);
        this.invocationCreationTime = node_opcua_factory_1.initialize_field(schema.fields[2], options.invocationCreationTime);
        this.lastTransitionTime = node_opcua_factory_1.initialize_field(schema.fields[3], options.lastTransitionTime);
        this.lastMethodCall = node_opcua_factory_1.initialize_field(schema.fields[4], options.lastMethodCall);
        this.lastMethodSessionId = node_opcua_factory_1.initialize_field(schema.fields[5], options.lastMethodSessionId);
        this.lastMethodInputArguments = []; // should default
        if (options.lastMethodInputArguments) {
            node_opcua_assert_1.assert(_.isArray(options.lastMethodInputArguments));
            this.lastMethodInputArguments = options.lastMethodInputArguments.map((e) => new Argument(e));
        }
        this.lastMethodOutputArguments = []; // should default
        if (options.lastMethodOutputArguments) {
            node_opcua_assert_1.assert(_.isArray(options.lastMethodOutputArguments));
            this.lastMethodOutputArguments = options.lastMethodOutputArguments.map((e) => new Argument(e));
        }
        this.lastMethodCallTime = node_opcua_factory_1.initialize_field(schema.fields[8], options.lastMethodCallTime);
        this.lastMethodReturnStatus = new StatusResult(options.lastMethodReturnStatus);
    }
    static get schema() { return schemaProgramDiagnosticDataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.createSessionId, stream);
        node_opcua_basic_types_1.encodeUAString(this.createClientName, stream);
        node_opcua_basic_types_1.encodeDateTime(this.invocationCreationTime, stream);
        node_opcua_basic_types_1.encodeDateTime(this.lastTransitionTime, stream);
        node_opcua_basic_types_1.encodeUAString(this.lastMethodCall, stream);
        node_opcua_basic_types_1.encodeNodeId(this.lastMethodSessionId, stream);
        node_opcua_basic_types_1.encodeArray(this.lastMethodInputArguments, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.lastMethodOutputArguments, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeDateTime(this.lastMethodCallTime, stream);
        this.lastMethodReturnStatus.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.createSessionId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.createClientName = node_opcua_basic_types_1.decodeUAString(stream);
        this.invocationCreationTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.lastTransitionTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.lastMethodCall = node_opcua_basic_types_1.decodeUAString(stream);
        this.lastMethodSessionId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.lastMethodInputArguments = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new Argument();
            obj.decode(stream1);
            return obj;
        });
        this.lastMethodOutputArguments = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new Argument();
            obj.decode(stream1);
            return obj;
        });
        this.lastMethodCallTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.lastMethodReturnStatus.decode(stream);
    }
    get schema() { return schemaProgramDiagnosticDataType; }
}
ProgramDiagnosticDataType.possibleFields = [
    "createSessionId",
    "createClientName",
    "invocationCreationTime",
    "lastTransitionTime",
    "lastMethodCall",
    "lastMethodSessionId",
    "lastMethodInputArguments",
    "lastMethodOutputArguments",
    "lastMethodCallTime",
    "lastMethodReturnStatus"
];
ProgramDiagnosticDataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(896, 0);
ProgramDiagnosticDataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(895, 0);
exports.ProgramDiagnosticDataType = ProgramDiagnosticDataType;
ProgramDiagnosticDataType.schema.encodingDefaultBinary = ProgramDiagnosticDataType.encodingDefaultBinary;
ProgramDiagnosticDataType.schema.encodingDefaultXml = ProgramDiagnosticDataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ProgramDiagnosticDataType", ProgramDiagnosticDataType);
// --------------------------------------------------------------------------------------------
const schemaProgramDiagnostic2DataType = node_opcua_factory_1.buildStructuredType({
    name: "ProgramDiagnostic2DataType",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "createSessionId",
            fieldType: "NodeId",
        },
        {
            name: "createClientName",
            fieldType: "UAString",
        },
        {
            name: "invocationCreationTime",
            fieldType: "DateTime",
        },
        {
            name: "lastTransitionTime",
            fieldType: "DateTime",
        },
        {
            name: "lastMethodCall",
            fieldType: "UAString",
        },
        {
            name: "lastMethodSessionId",
            fieldType: "NodeId",
        },
        {
            name: "lastMethodInputArguments",
            fieldType: "Argument",
            isArray: true
        },
        {
            name: "lastMethodOutputArguments",
            fieldType: "Argument",
            isArray: true
        },
        {
            name: "lastMethodInputValues",
            fieldType: "Variant",
            isArray: true
        },
        {
            name: "lastMethodOutputValues",
            fieldType: "Variant",
            isArray: true
        },
        {
            name: "lastMethodCallTime",
            fieldType: "DateTime",
        },
        {
            name: "lastMethodReturnStatus",
            fieldType: "StatusResult",
        },
    ]
});
class ProgramDiagnostic2DataType extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = ProgramDiagnostic2DataType.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        if (options === null) {
            this.lastMethodInputArguments = null; /* null array */
            this.lastMethodOutputArguments = null; /* null array */
            this.lastMethodReturnStatus = new StatusResult();
        }
        this.createSessionId = node_opcua_factory_1.initialize_field(schema.fields[0], options.createSessionId);
        this.createClientName = node_opcua_factory_1.initialize_field(schema.fields[1], options.createClientName);
        this.invocationCreationTime = node_opcua_factory_1.initialize_field(schema.fields[2], options.invocationCreationTime);
        this.lastTransitionTime = node_opcua_factory_1.initialize_field(schema.fields[3], options.lastTransitionTime);
        this.lastMethodCall = node_opcua_factory_1.initialize_field(schema.fields[4], options.lastMethodCall);
        this.lastMethodSessionId = node_opcua_factory_1.initialize_field(schema.fields[5], options.lastMethodSessionId);
        this.lastMethodInputArguments = []; // should default
        if (options.lastMethodInputArguments) {
            node_opcua_assert_1.assert(_.isArray(options.lastMethodInputArguments));
            this.lastMethodInputArguments = options.lastMethodInputArguments.map((e) => new Argument(e));
        }
        this.lastMethodOutputArguments = []; // should default
        if (options.lastMethodOutputArguments) {
            node_opcua_assert_1.assert(_.isArray(options.lastMethodOutputArguments));
            this.lastMethodOutputArguments = options.lastMethodOutputArguments.map((e) => new Argument(e));
        }
        this.lastMethodInputValues = node_opcua_factory_1.initialize_field_array(schema.fields[8], options.lastMethodInputValues);
        this.lastMethodOutputValues = node_opcua_factory_1.initialize_field_array(schema.fields[9], options.lastMethodOutputValues);
        this.lastMethodCallTime = node_opcua_factory_1.initialize_field(schema.fields[10], options.lastMethodCallTime);
        this.lastMethodReturnStatus = new StatusResult(options.lastMethodReturnStatus);
    }
    static get schema() { return schemaProgramDiagnostic2DataType; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeNodeId(this.createSessionId, stream);
        node_opcua_basic_types_1.encodeUAString(this.createClientName, stream);
        node_opcua_basic_types_1.encodeDateTime(this.invocationCreationTime, stream);
        node_opcua_basic_types_1.encodeDateTime(this.lastTransitionTime, stream);
        node_opcua_basic_types_1.encodeUAString(this.lastMethodCall, stream);
        node_opcua_basic_types_1.encodeNodeId(this.lastMethodSessionId, stream);
        node_opcua_basic_types_1.encodeArray(this.lastMethodInputArguments, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.lastMethodOutputArguments, stream, (obj, stream1) => { obj.encode(stream1); });
        node_opcua_basic_types_1.encodeArray(this.lastMethodInputValues, stream, node_opcua_variant_1.encodeVariant);
        node_opcua_basic_types_1.encodeArray(this.lastMethodOutputValues, stream, node_opcua_variant_1.encodeVariant);
        node_opcua_basic_types_1.encodeDateTime(this.lastMethodCallTime, stream);
        this.lastMethodReturnStatus.encode(stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.createSessionId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.createClientName = node_opcua_basic_types_1.decodeUAString(stream);
        this.invocationCreationTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.lastTransitionTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.lastMethodCall = node_opcua_basic_types_1.decodeUAString(stream);
        this.lastMethodSessionId = node_opcua_basic_types_1.decodeNodeId(stream);
        this.lastMethodInputArguments = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new Argument();
            obj.decode(stream1);
            return obj;
        });
        this.lastMethodOutputArguments = node_opcua_basic_types_1.decodeArray(stream, (stream1) => {
            const obj = new Argument();
            obj.decode(stream1);
            return obj;
        });
        this.lastMethodInputValues = node_opcua_basic_types_1.decodeArray(stream, node_opcua_variant_1.decodeVariant);
        this.lastMethodOutputValues = node_opcua_basic_types_1.decodeArray(stream, node_opcua_variant_1.decodeVariant);
        this.lastMethodCallTime = node_opcua_basic_types_1.decodeDateTime(stream);
        this.lastMethodReturnStatus.decode(stream);
    }
    get schema() { return schemaProgramDiagnostic2DataType; }
}
ProgramDiagnostic2DataType.possibleFields = [
    "createSessionId",
    "createClientName",
    "invocationCreationTime",
    "lastTransitionTime",
    "lastMethodCall",
    "lastMethodSessionId",
    "lastMethodInputArguments",
    "lastMethodOutputArguments",
    "lastMethodInputValues",
    "lastMethodOutputValues",
    "lastMethodCallTime",
    "lastMethodReturnStatus"
];
ProgramDiagnostic2DataType.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(15397, 0);
ProgramDiagnostic2DataType.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(15401, 0);
exports.ProgramDiagnostic2DataType = ProgramDiagnostic2DataType;
ProgramDiagnostic2DataType.schema.encodingDefaultBinary = ProgramDiagnostic2DataType.encodingDefaultBinary;
ProgramDiagnostic2DataType.schema.encodingDefaultXml = ProgramDiagnostic2DataType.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("ProgramDiagnostic2DataType", ProgramDiagnostic2DataType);
// --------------------------------------------------------------------------------------------
const schemaAnnotation = node_opcua_factory_1.buildStructuredType({
    name: "Annotation",
    baseType: "ExtensionObject",
    fields: [
        {
            name: "message",
            fieldType: "UAString",
        },
        {
            name: "userName",
            fieldType: "UAString",
        },
        {
            name: "annotationTime",
            fieldType: "DateTime",
        },
    ]
});
class Annotation extends node_opcua_extension_object_1.ExtensionObject {
    constructor(options) {
        super(options);
        const schema = Annotation.schema;
        options = schema.constructHook ? schema.constructHook(options) : options;
        if (options === undefined || options === null) {
            options = {};
        }
        /* istanbul ignore next */
        if (node_opcua_factory_1.parameters.debugSchemaHelper) {
            node_opcua_factory_1.check_options_correctness_against_schema(this, schema, options);
        }
        this.message = node_opcua_factory_1.initialize_field(schema.fields[0], options.message);
        this.userName = node_opcua_factory_1.initialize_field(schema.fields[1], options.userName);
        this.annotationTime = node_opcua_factory_1.initialize_field(schema.fields[2], options.annotationTime);
    }
    static get schema() { return schemaAnnotation; }
    encode(stream) {
        super.encode(stream);
        node_opcua_basic_types_1.encodeUAString(this.message, stream);
        node_opcua_basic_types_1.encodeUAString(this.userName, stream);
        node_opcua_basic_types_1.encodeDateTime(this.annotationTime, stream);
    }
    decode(stream) {
        // call base class implementation first
        super.decode(stream);
        this.message = node_opcua_basic_types_1.decodeUAString(stream);
        this.userName = node_opcua_basic_types_1.decodeUAString(stream);
        this.annotationTime = node_opcua_basic_types_1.decodeDateTime(stream);
    }
    get schema() { return schemaAnnotation; }
}
Annotation.possibleFields = [
    "message",
    "userName",
    "annotationTime"
];
Annotation.encodingDefaultBinary = node_opcua_nodeid_1.makeExpandedNodeId(893, 0);
Annotation.encodingDefaultXml = node_opcua_nodeid_1.makeExpandedNodeId(892, 0);
exports.Annotation = Annotation;
Annotation.schema.encodingDefaultBinary = Annotation.encodingDefaultBinary;
Annotation.schema.encodingDefaultXml = Annotation.encodingDefaultXml;
node_opcua_factory_1.registerClassDefinition("Annotation", Annotation);
//# sourceMappingURL=_generated_opcua_types.js.map