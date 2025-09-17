sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var GoalsBlock = BlockBase.extend("portaldho.SharedBlocks.goals.GoalsBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.goals.GoalsBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.goals.GoalsBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return GoalsBlock;
});
