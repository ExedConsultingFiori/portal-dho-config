sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/MessageToast",
	"sap/m/Text",
    "sap/m/MessageBox",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/core/Fragment",
    "sap/m/library",
	"sap/tnt/library"
], function (JSONModel, Controller, Button, Dialog, MessageToast, Text, MessageBox, ODataModel, Fragment, library, tntLibrary) {
	"use strict";
	return Controller.extend("portaldho.controller.portal.controller", {
		_mFragments: {},
        // Funções Relacionadas ao Conteúdo do Usuário Logado
		onInit: function () {
            let numeroPessoalUsuarioLogado = "00000001";

            this.criarModeloHeader(numeroPessoalUsuarioLogado);
		},

        onAvatarPressed: function (){
            this.loadAndDisplayFragment("PerfilUsuario");
        },
        
		onItemSelect: function (oEvent) {
            const oItem = oEvent.getParameter("item");
            const sKey = oItem.getKey(); // Pega a key que definimos no XML (ex: "0002")
            
            this.loadAndDisplayFragment(sKey);
        },
		loadAndDisplayFragment: function(sFragmentName) {
            const oNavContainer = this.byId("navContainer");

            if(sFragmentName == ''){
                sFragmentName = "Default";
            }
            
            // Verifica se o fragment já foi carregado para não recarregá-lo desnecessariamente
            if (!this._mFragments[sFragmentName]) {
                const sFragmentPath = "portaldho.fragments." + sFragmentName;
                Fragment.load({
                    name: sFragmentPath,
                    controller: this // O fragment usará este controller
                }).then(function (oFragment) {
                    this._mFragments[sFragmentName] = oFragment;
                    oNavContainer.addPage(oFragment); // Adiciona a 'página' ao container
                    oNavContainer.to(oFragment.getId()); // Navega para a 'página' recém-adicionada
                }.bind(this));
            } else {
                // Se o fragment já existe, apenas navega para ele
                const oFragment = this._mFragments[sFragmentName];
                oNavContainer.to(oFragment.getId());
            }
        },
        onSideNavButtonPress: function () {
			var oToolPage = this.byId("toolPage");
			var bSideExpanded = oToolPage.getSideExpanded();

			this._setToggleButtonTooltip(bSideExpanded);

			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},

        criarModeloHeader: function (numeroPessoalUsuarioLogado){
            let oView = this.getView();
            let oModelUsuarioLogado = new JSONModel(); // Instância vazia do objeto que irá receber os dados do usuário
            let oModelRequisicao = this.getOwnerComponent().getModel();

            // Método read
            oModelRequisicao.read(`/ZI_DADOS_PESSOAISSet(NumPessoal='${numeroPessoalUsuarioLogado}')`, {
                success: (oData, response) => {
                    oModelUsuarioLogado.setData(response.data);
                    
                    const dataPadrao = new Date(response.data.DtNascimento);
                    response.data.DtNascimento = dataPadrao.toLocaleDateString("pt-BR");

                    oView.setModel(oModelUsuarioLogado, "usuarioLogado");
                },
                error: (oError) => {
                    console.error("Erro ao obter os dados:", oError);
                }
            });
        },

        _setToggleButtonTooltip: function (bLarge) {
			var oToggleButton = this.byId('sideNavigationToggleButton');
			if (bLarge) {
				oToggleButton.setTooltip('Large Size Navigation');
			} else {
				oToggleButton.setTooltip('Small Size Navigation');
			}
		},

	});	
});
