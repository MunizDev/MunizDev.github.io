/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const arrayProdutos = productDetails('produto1', 'produto2');
    for (let index = 0; index < arrayProdutos.length; index += 1) {
      assert.strictEqual(typeof arrayProdutos[index], 'object');
    }
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(arrayProdutos[0], arrayProdutos[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    for (let index = 0; index < arrayProdutos.length; index += 1) {
      const patt = /123$/;
      const result = patt.test(arrayProdutos[index].details.productId);
      assert.strictEqual(result, true);
    }
  });
});
