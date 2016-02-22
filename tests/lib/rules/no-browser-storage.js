/**
 * @fileoverview Prevent the usage of sessionStorage and localStorage
 * @author Tzach Yarimi
 * @copyright 2016 Tzach Yarimi. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-browser-storage"),

	RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-browser-storage", rule, {

	valid: [
        "SessionStorage.x = 1;",
        "LocalStorage.x = 1;",
        "Storage.x = 1;"
    ],

	invalid: [
		{
			code: "window.sessionStorage.setItem('x', 'y')",
			errors: [{message: "Unexpected use of sessionStorage.", type: "Identifier"}]
		},
		{
			code: "sessionStorage.setItem('x', 'y')",
			errors: [{message: "Unexpected use of sessionStorage.", type: "Identifier"}]
		},
		{
			code: "sessionStorage['x'] == 1;",
			errors: [{message: "Unexpected use of sessionStorage.", type: "Identifier"}]
		},
		{
			code: "sessionStorage.a == 1;",
			errors: [{message: "Unexpected use of sessionStorage.", type: "Identifier"}]
		},
		{
			code: "sessionStorage.a = 1;",
			errors: [{message: "Unexpected use of sessionStorage.", type: "Identifier"}]
		},
		{
			code: "window.localStorage.setItem('x', 'y')",
			errors: [{message: "Unexpected use of localStorage.", type: "Identifier"}]
		},
		{
			code: "localStorage.setItem('x', 'y')",
			errors: [{message: "Unexpected use of localStorage.", type: "Identifier"}]
		},
		{
			code: "localStorage['x'] == 1;",
			errors: [{message: "Unexpected use of localStorage.", type: "Identifier"}]
		},
		{
			code: "localStorage.a == 1;",
			errors: [{message: "Unexpected use of localStorage.", type: "Identifier"}]
		},
		{
			code: "localStorage.a = 1;",
			errors: [{message: "Unexpected use of localStorage.", type: "Identifier"}]
		}
	]
});
