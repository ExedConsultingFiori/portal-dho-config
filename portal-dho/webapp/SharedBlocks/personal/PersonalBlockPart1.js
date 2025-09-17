sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var PersonalBlockPart1 = BlockBase.extend("portaldho.SharedBlocks.personal.PersonalBlockPart1", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.personal.PersonalBlockPart1",
					type: "XML"
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.personal.PersonalBlockPart1",
					type: "XML"
				}
			}
		}
	});

	return PersonalBlockPart1;
});
