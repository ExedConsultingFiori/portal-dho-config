sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var ConnectionsBlock = BlockBase.extend("portaldho.SharedBlocks.connections.ConnectionsBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "portaldho.SharedBlocks.connections.ConnectionsBlock",
					type: "XML"
				},
				Expanded: {
					viewName: "portaldho.SharedBlocks.connections.ConnectionsBlock",
					type: "XML"
				}
			}
		}
	});
	return ConnectionsBlock;
});
