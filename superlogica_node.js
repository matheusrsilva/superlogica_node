require('request');

const {URLSearchParams, URL} = require('url');

const request = require('request-promise');

const superlogicaUrl = 'https://api.superlogica.net/v2/financeiro/';

class SuperLogica {
  constructor(headers = {app_token, access_token,'Content-Type': 'application/json'} ) {
    this.headers = headers;
  }

  /**
  * Send a request to superlogica
  *
  * @param {String} urn
  * @param {Object} body
  * @param {Object} params
  * @param {String} method
  * @return {Promise}
  * @api public
  */
  superlogicaRequest(urn, body, params, method){
    const urlParams = new URLSearchParams(params);
  
    const myUrl = new URL(superlogicaUrl + urn);
    myUrl.search = urlParams;
  
    return request({
      method,
      headers : this.headers,
      uri:myUrl.href,
      body,
      json: true
    });
  };

  getClientes(params = {pagina: 1, status: 0, apenasColunasPrincipais: 1}){
    return this.superlogicaRequest('clientes', null, params ,'get');
  };
  
  getCliente(params = {id}){
    return this.superlogicaRequest('clientes', null, params, 'get');
  };
  
  createCliente(body = {ST_NOME_SAC,
    ST_NOMEREF_SAC,
    ST_DIAVENCIMENTO_SAC,
    ST_CGC_SAC,
    ST_RG_SAC,
    ST_ORGAO_SAC,
    ST_INSCMUNICIPAL_SAC,
    ST_INSCRICAO_SAC,
    ISENTO_ICMS,
    FL_OPTANTESIMPLES_SAC,
    ST_SUFRAMA_SAC,
    ST_CEP_SAC,
    ST_ENDERECO_SAC,
    ST_NUMERO_SAC,
    ST_BAIRRO_SAC,
    ST_COMPLEMENTO_SAC,
    ST_CIDADE_SAC,
    ST_ESTADO_SAC,
    FL_MESMOEND_SAC,
    ST_CEPENTREGA_SAC,
    ST_ENDERECOENTREGA_SAC,
    ST_NUMEROENTREGA_SAC,
    ST_COMPLEMENTOENTREGA_SAC,
    ST_BAIRROENTREGA_SAC,
    ST_CIDADEENTREGA_SAC,
    ST_ESTADOENTREGA_SAC,
    ST_PONTOREFERENCIAENTREGA_SAC,
    ST_EMAIL_SAC,
    SENHA,
    SENHA_CONFIRMACAO,
    ST_DDD_SAC,
    ST_TELEFONE_SAC,
    ST_FAX_SAC,
    DESABILITAR_MENSALIDADE,
    ST_CARTAO_SAC,
    ST_MESVALIDADE_SAC,
    ST_ANOVALIDADE_SAC,
    ST_SEGURANCACARTAO_SAC,
    FL_PAGAMENTOPREF_SAC,
    ST_CODIGOCONTABIL_SAC,
    FL_RETERISSQN_SAC,
    TX_OBSERVACAO_SAC,
    FL_SINCRONIZARFORNECEDOR_SAC,
    identificador,
    DT_CADASTRO_SAC}){
    return this.superlogicaRequest('clientes', body,null, 'post');
  };

  getAssinaturas(params = {
    identificadorContrato,
    identificadorCliente,
    ID_SACADO_SAC,
    pagina: 1,
    itensPorPagina: 50
  }) {
    return this.superlogicaRequest('assinaturas', null, params, 'get');
  };

  createAssinatura(body = {
    PLANOS: [{
      ID_SACADO_SAC,
      FL_TRIAL_PLC,
      ID_PLANO_PLA,
      DT_CONTRATO_PLC,
      QUANT_PARCELAS_ADESAO,
      ST_IDENTIFICADOR_PLC,
      ST_IDENTIFICADOREXTRA_PLC,
      FL_NOTIFICARCLIENTE,
      VL_DESCONTORENOVACAO_PLC,
      cupom,
      }],
      ID_VENDEDOR_FOR,
      ST_EMAILINDICACAO_PLC,
      ADICIONAIS: [{
        ID_PRODUTO_PRD,
        NM_QNTD_PLP
      }]
  }) {
    return this.superlogicaRequest('assinaturas', body,null, 'post');
  };

  createAssinaturaPersonalizada(body = {
    ID_SACADO_SAC,
    DT_CONTRATO_PLC,
    PLANOS: [{
      ID_PLANO_PLA,
      FL_TRIAL_PLC,
      QUANT_PARCELAS_ADESAO,
      ST_IDENTIFICADOR_PLC,
      FL_NOTIFICARCLIENTE,
      cupom,
      FL_MULTIPLO_COMPO,
    }],
    OPCIONAIS: [{
      ID_PRODUTO_PRD,
      SELECIONAR_PRODUTO,
      NM_QNTD_PLP,
      valor_unitario,
      FL_RECORRENTE_PLP,
    }]
  }) {
    return this.superlogicaRequest('assinaturas', body, null, 'post');
  };

  getCobranca(params = {
    id,
    exibirComposicaoDosBoletos: 0
  }){
    return this.superlogicaRequest('cobranca', null, params, 'get');
  };

  createCobrança(body = {
    ID_SACADO_SAC,
    COMPO_RECEBIMENTO: [{
      ID_PRODUTO_PRD,
      NM_QUANTIDADE_COMP,
      VL_UNITARIO_PRD
    }],
    VL_EMITIDO_RECB,
    DT_VENCIMENTO_RECB,
    ID_FORMAPAGAMENTO_RECB,
    ST_OBSERVACAOINTERNA_RECB,
    ST_OBSERVACAOEXTERNA_RECB,
    ID_CONTA_CB,
    COBRANCA_PARCELAS: [{
      VL_EMITIDO_RECB,
      DT_VENCIMENTO_RECB,
      ST_OBSERVACAOEXTERNA_RECB
    }],
    ST_NOSSONUMEROFIXO_RECB
  }) {
    return this.superlogicaRequest('cobranca', body, null, 'post');
  };

  updateProdutoAssinatura(body = {
    ID_PLANOCLIENTE_PLC,
    ID_PRODUTO_PRD,
    ST_QNTD_MENS,
    ST_VALOR_MENS,
    ST_COMPLEMENTO_MENS
  }) {
    return this.superlogicaRequest('recorrencias',body, null, 'put');
  };

  cancelAssinatura(body = {
    ID_PLANOCLIENTE_PLC,
    DT_CANCELAMENTO_PLC,
    FL_CANCELAMENTOIMEDIATO
  }) {
    return this.superlogicaRequest('assinaturas', body, null, 'put');
  };

  getInadimplentes(params = {
    CLIENTES: [],
    posicaoEm,
    GRUPOS: [],
    pagina: 1,
    itensPorPagina: 50
  }) {
    return this.superlogicaRequest('clientes/inadimplencia',null, params, 'get')
  }
}
exports.SuperLogica = SuperLogica;









