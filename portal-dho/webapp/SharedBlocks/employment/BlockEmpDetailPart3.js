sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockEmpDetailPart3 = BlockBase.extend("portaldho.SharedBlocks.employment.BlockEmpDetailPart3", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.employment.BlockEmpDetailPart3",
					type: "XML"
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.employment.BlockEmpDetailPart3",
					type: "XML"
				}
			}
		}
	});
	return BlockEmpDetailPart3;
});
