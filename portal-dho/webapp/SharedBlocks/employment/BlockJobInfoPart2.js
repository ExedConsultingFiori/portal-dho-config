sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockJobInfoPart2 = BlockBase.extend("portaldho.SharedBlocks.employment.BlockJobInfoPart2", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.employment.BlockJobInfoPart2",
					type: "XML"
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.employment.BlockJobInfoPart2",
					type: "XML"
				}
			}
		}
	});
	return BlockJobInfoPart2;
});
