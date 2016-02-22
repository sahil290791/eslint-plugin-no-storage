/**
 * @fileoverview Prevent the usage of sessionStorage and localStorage
 * @author Tzach Yarimi
 * @copyright 2016 Tzach Yarimi. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
	return {
		"Identifier": function(node) {
			if (/^(session|local)Storage$/.test(node.name)) {
				context.report(node, "Unexpected use of {{name}}.", { name: node.name });
			}
		}
	};

};

module.exports.schema = [];
