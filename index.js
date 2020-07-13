// ---------------------------------------------------- Licao de casa ----------------------------------------------------
//  Quantos itens cujo valor é positivo  - 26 itens
//  Quantos itens o valor esta entre 100 e 200  - 4 empresas
//  Quais os itens terminam com "inc" e o valor é maior de 300
//  O valor total da soma dos itens - 10469
//  O valor total da soma dos itens em reais

var acoes = [
  {
    id: "a98746a0-b648-4dc7-85c6-9e4381f903b1",
    value: 95.57,
    enterprise: "Perficient, Inc.",
  },
  {
    id: "07e80166-6c3b-4f55-b91c-0c38f9f99a7e",
    value: -90.24,
    enterprise: "Eaton Vance Floating Rate Income Trust",
  },
  {
    id: "3fce39f9-f525-4faf-99d4-2de3d3352220",
    value: 299.33,
    enterprise: "Jensyn Acquistion Corp.",
  },
  {
    id: "1789c66a-b806-4687-b03e-8e2d4e846429",
    value: -23.63,
    enterprise: "Sonoco Products Company",
  },
  {
    id: "dafdfb5b-122e-4edf-9cb4-d664ba436213",
    value: -77.95,
    enterprise: "Immune Design Corp.",
  },
  {
    id: "e239b4d8-fad5-405c-bf18-3107ecf7e6ee",
    value: 85.17,
    enterprise: "Bancorp 34, Inc.",
  },
  {
    id: "10d6b877-e612-4824-aacc-9e1600dbf63a",
    value: 695.45,
    enterprise: "Pentair plc.",
  },
  {
    id: "7033a72b-02fb-46fb-879d-8fe7cdc007a1",
    value: -30.49,
    enterprise: "Pinnacle Foods, Inc.",
  },
  {
    id: "5462b891-9680-45ba-8265-f87b78c3031e",
    value: 431.87,
    enterprise: "Plexus Corp.",
  },
  {
    id: "7dc11173-4cef-4b4d-ad58-ae4e44780c93",
    value: 174.33,
    enterprise: "IRSA Propiedades Comerciales S.A.",
  },
  {
    id: "499cf014-058b-4c31-9c38-735685f2663b",
    value: 269.47,
    enterprise: "Pimco Global Stocksplus & Income Fund",
  },
  {
    id: "28b946f1-fe20-48cf-b91c-ac1211c65409",
    value: 112.41,
    enterprise: "DST Systems, Inc.",
  },
  {
    id: "94970296-9c93-48b2-ae17-564c1ec8fbc5",
    value: 372.2,
    enterprise: "Liberty Global plc",
  },
  {
    id: "60c93838-3406-451f-89a5-cbb5c515752d",
    value: 328.7,
    enterprise: "Group 1 Automotive, Inc.",
  },
  {
    id: "8fe8e409-972c-4b0d-af60-db12e7d6e341",
    value: 503.07,
    enterprise: "Anchor Bancorp",
  },
  {
    id: "5d2c831e-490c-4814-9fcc-07f08b703f7e",
    value: 285.32,
    enterprise: "FS Investment Corporation",
  },
  {
    id: "43829d35-802d-4eec-a18f-43d355498fcb",
    value: 483.42,
    enterprise: "Steel Partners Holdings LP",
  },
  {
    id: "f1c92a29-f8ef-4f25-974d-53ca49a7f83f",
    value: 513.35,
    enterprise: "VEON Ltd.",
  },
  {
    id: "bbe750c4-5c45-42e6-b3ab-f069f97ddee5",
    value: 110.42,
    enterprise: "Organovo Holdings, Inc.",
  },
  {
    id: "cce25782-09a6-4ebc-bf35-ac74d7581bd2",
    value: 494.14,
    enterprise: "ExlService Holdings, Inc.",
  },
  {
    id: "86c25789-92c1-47e9-b191-839ef21c963c",
    value: 59.42,
    enterprise: "Varex Imaging Corporation",
  },
  {
    id: "58fe4156-f5e9-4462-8c02-4de25e91ac50",
    value: 783.32,
    enterprise: "Dataram Corporation",
  },
  {
    id: "a0f96054-000b-4ffe-810f-d5f3f0100751",
    value: 798.36,
    enterprise: "Gorman-Rupp Company (The)",
  },
  {
    id: "3fc92eeb-b698-411e-98aa-84f7abbe40ee",
    value: 203.97,
    enterprise: "America Movil, S.A.B. de C.V.",
  },
  {
    id: "21ecd8ef-5180-43df-8402-e79afa53f582",
    value: 180.24,
    enterprise: "General American Investors, Inc.",
  },
  {
    id: "4e25ec41-33aa-4ddf-8f27-a0be1ee10cb4",
    value: 601.15,
    enterprise: "Navient Corporation",
  },
  {
    id: "f4b31c33-a2e5-4938-b81e-21e46646a7fb",
    value: 565.2,
    enterprise: "Radware Ltd.",
  },
  {
    id: "77d3f167-6117-4935-844e-c454b6999d31",
    value: 883.43,
    enterprise: "Intercept Pharmaceuticals, Inc.",
  },
  {
    id: "e18076c3-0828-47bb-9912-48e9a6edce89",
    value: 921.03,
    enterprise: "Capitol Federal Financial, Inc.",
  },
  {
    id: "ec35015c-5324-4d4a-9dd2-94529fef0f6a",
    value: 440.97,
    enterprise: "Colony NorthStar, Inc.",
  },
];

//----------------------------------------------------------------------------------------------------------------

// Quantos itens cujo valor é positivo - 26 Itens
// forEach
// filter

// var result = acoes.filter(function (acao_atual) {
//   return acao_atual.value >= 0;
// });

// console.log(result.length);

//----------------------------------------------------------------------------------------------------------------

//  Quantos itens o valor esta entre 100 e 200  - 4 empresas
// var result = acoes.filter(function (acao_atual) {
//   var acao_value = acao_atual.value;
//   var acao_maior_ou_igual_a_cem = acao_value >= 100;
//   var acao_menor_ou_igual_a_duzentos = acao_value <= 200;

//   return acao_maior_ou_igual_a_cem && acao_menor_ou_igual_a_duzentos;
// });

// console.log("100 e 200", result.length);

// //----------------------------------------------------------------------------------------------------------------

// //  Quais os itens terminam com "inc" e o valor é maior de 300
// filter;
// var result = acoes.filter(function (acao_atual) {
//   var enterprise_inc = acao_atual.enterprise.includes("Inc");
//   var is_value_money_acceptable = acao_atual.value >= 300;

//   return enterprise_inc && is_value_money_acceptable;
// });
// console.log("items terminam com inc ...", result);

//----------------------------------------------------------------------------------------------------------------

// //  O valor total da soma dos itens - 10469
// //  reduce
// var result = acoes.reduce(function (acumulator, acao_atual) {
//   return acumulator + acao_atual.value;
// }, 0);

// console.log("O valor total da soma dos itens -", result);

//----------------------------------------------------------------------------------------------------------------

// O valor total da soma dos itens em reais - Considerando a cotacao de R$ 5,32 o dólar

// const result = acoes.reduce(function (acumulator, acao_atual) {
//   return acumulator + acao_atual.value;
// }, 0);

// // bonus point :star
// var cotacao = 5.32;

// console.log(result * cotacao);

//------------------------------------------------------------------------------------------------------------------

//  Quais valores são maiores que 500 usando function
// filter
// const planilha = [100, 200, 300, 400, 500, 550, 600, 700, 800, 900, 1000];

// function getGreaterThanFiveHundred(dados) {
//   var result = dados.filter(function (dado_atual) {
//     return dado_atual > 500;
//   });
//   console.log(result);

//   if (result < 500) {
//     console.log("Opa, nenhum dados menor que 500 foi encontrado");
//   }
// }

// getGreaterThanFiveHundred(planilha);
