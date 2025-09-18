sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/MessageToast",
	"sap/m/Text",
    'sap/m/MessageBox',
	'sap/ui/model/json/JSONModel',
	'sap/ui/model/odata/v2/ODataModel'
], function (JSONModel, Controller, Button, Dialog, MessageToast, Text) {
	"use strict";
	return Controller.extend("portaldho.controller.Processos.controller", {

		onInit: () => {
            let numeroPessoalUsuarioLogado = "00000001";
            let oView = this.getView();
            let oModelUsuarioLogado = new JSONModel(); // Instância vazia do objeto que irá receber os dados do usuário
            let oModelRequisicao = this.getOwnerComponent().getModel();

            // Método read
            oModelRequisicao.read(`/ZI_PROCESSOSSet(NumPessoal='${numeroPessoalUsuarioLogado}')`, {
                success: (oData, response) => {
                    oModelUsuarioLogado.setData(response.data);
                    oView.setModel(oModelUsuarioLogado, "usuarioLogado");
                },
                error: (oError) => {
                    console.error("Erro ao obter os dados:", oError);
                }
            });
		},
	});
});