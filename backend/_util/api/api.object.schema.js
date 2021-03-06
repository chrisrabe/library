/**
 * Object schema description language and validator for Javascript.
 * API Reference: https://github.com/hapijs/joi/blob/v14.3.1/API.md
 */

const baseJoi = require('joi');
const objectId = require('joi-objectid');

// extensions
baseJoi.objectId = objectId(baseJoi);

module.exports = baseJoi;
