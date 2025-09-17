sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockJobInfoPart1 = BlockBase.extend("portaldho.SharedBlocks.employment.BlockJobInfoPart1", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.employment.BlockJobInfoPart1",
					type: "XML"
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.employment.BlockJobInfoPart1",
					type: "XML"
				}
			}
		}
	});

	return BlockJobInfoPart1;
});
