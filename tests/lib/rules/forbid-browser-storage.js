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

var rule = require("../../../lib/rules/forbid-browser-storage"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("forbid-browser-storage", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "sessionStorage.setItem('hello', 'world')",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
