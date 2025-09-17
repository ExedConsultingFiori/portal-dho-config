sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var EmploymentBlockJob = BlockBase.extend("portaldho.SharedBlocks.employment.EmploymentBlockJob", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.employment.EmploymentBlockJobCollapsed",
					type: "XML"
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.employment.EmploymentBlockJobExpanded",
					type: "XML"
				}
			}
		}
	});

	return EmploymentBlockJob;
});
