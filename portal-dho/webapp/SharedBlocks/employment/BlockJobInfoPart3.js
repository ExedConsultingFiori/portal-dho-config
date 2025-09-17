sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockJobInfoPart3 = BlockBase.extend("portaldho.SharedBlocks.employment.BlockJobInfoPart3", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.employment.BlockJobInfoPart3",
					type: "XML"
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.employment.BlockJobInfoPart3",
					type: "XML"
				}
			}
		}
	});

	return BlockJobInfoPart3;

});
