sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockEmpDetailPart1 = BlockBase.extend("portaldho.SharedBlocks.employment.BlockEmpDetailPart1", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.employment.BlockEmpDetailPart1",
					type: "XML"
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.employment.BlockEmpDetailPart1",
					type: "XML"
				}
			}
		}
	});
	return BlockEmpDetailPart1;
});
