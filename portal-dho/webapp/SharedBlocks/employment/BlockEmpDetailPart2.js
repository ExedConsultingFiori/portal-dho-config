sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockEmpDetailPart2 = BlockBase.extend("portaldho.SharedBlocks.employment.BlockEmpDetailPart2", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.employment.BlockEmpDetailPart2",
					type: "XML"
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.employment.BlockEmpDetailPart2",
					type: "XML"
				}
			}
		}
	});

	return BlockEmpDetailPart2;
});
