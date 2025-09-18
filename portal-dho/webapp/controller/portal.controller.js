sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/MessageToast",
	"sap/m/Text",
    'sap/m/MessageBox',
	'sap/ui/core/util/MockServer',
	'sap/ui/model/json/JSONModel',
	'sap/ui/model/odata/v2/ODataModel'
], function (JSONModel, Controller, Button, Dialog, MessageToast, Text) {
	"use strict";
	return Controller.extend("portaldho.controller.portal.controller", {

        // Funções Relacionadas ao Conteúdo do Usuário Logado
		onInit: function () {
            let numeroPessoalUsuarioLogado = "00000001";
            let oView = this.getView();
            let oModelUsuarioLogado = new JSONModel(); // Instância vazia do objeto que irá receber os dados do usuário
            let oModelRequisicao = this.getOwnerComponent().getModel();

            // Método read
            oModelRequisicao.read(`/ZI_DADOS_PESSOAISSet(NumPessoal='${numeroPessoalUsuarioLogado}')`, {
                success: (oData, response) => {
                    oModelUsuarioLogado.setData(response.data);
                    oView.setModel(oModelUsuarioLogado, "usuarioLogado");
                },
                error: (oError) => {
                    console.error("Erro ao obter os dados:", oError);
                }
            });
			
		},
		handleEditToggled: function (oEvent) {
			// just dummy function to activate input validation in SmartForm.
		},

        // Funções Relacionadas ao Side Menu
        onCollapseExpandPress() {
			const oSideNavigation = this.byId("sideNavigation"),
			bExpanded = oSideNavigation.getExpanded();

			oSideNavigation.setExpanded(!bExpanded);
		},
		handleEditToggled: function (oEvent) {
			// just dummy function to activate input validation in SmartForm.
		},
        
	});
});
