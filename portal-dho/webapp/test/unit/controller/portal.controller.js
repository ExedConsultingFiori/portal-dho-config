/*global QUnit*/

sap.ui.define([
	"portaldho/controller/portal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("portal Controller");

	QUnit.test("I should test the portal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
