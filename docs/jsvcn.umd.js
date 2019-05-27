(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('env-universal'), require('os'), require('web3'), require('js-sha256')) :
  typeof define === 'function' && define.amd ? define(['env-universal', 'os', 'web3', 'js-sha256'], factory) :
  (global = global || self, global.Jsvcn = factory(global.getEnv, global.os, global.Web3, global.sha256));
}(this, function (getEnv, os, Web3, sha256) { 'use strict';

  getEnv = getEnv && getEnv.hasOwnProperty('default') ? getEnv['default'] : getEnv;
  Web3 = Web3 && Web3.hasOwnProperty('default') ? Web3['default'] : Web3;
  sha256 = sha256 && sha256.hasOwnProperty('default') ? sha256['default'] : sha256;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var CodenotaryFoundationClient = function CodenotaryFoundationClient(apiUrl) {
    var _this = this;

    _classCallCheck(this, CodenotaryFoundationClient);

    _defineProperty(this, "getArtifactByHashAndMetaHash",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(hash, metahash) {
        var url, data, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!hash || typeof hash !== "string")) {
                  _context.next = 2;
                  break;
                }

                throw Error("First argument hash is missing or invalid.");

              case 2:
                if (!(!metahash || typeof metahash !== "string")) {
                  _context.next = 4;
                  break;
                }

                throw Error("Second argument metahash is or invalid.");

              case 4:
                url = _this.apiUrl + "/artifact/" + hash + "/" + metahash;
                data = {};
                _context.prev = 6;
                _context.next = 9;
                return fetch(url, {
                  method: "GET"
                });

              case 9:
                response = _context.sent;
                _context.next = 12;
                return response.json();

              case 12:
                data = _context.sent;
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](6);
                console.log(_context.t0);

              case 18:
                return _context.abrupt("return", data);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 15]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    this.apiUrl = apiUrl;
  };

  var contractName="AssetsRelay";var abi=[{constant:true,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"createdAt",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"assetsContract",outputs:[{name:"",type:"address"}],payable:false,stateMutability:"view",type:"function"},{inputs:[{name:"aContract",type:"address"}],payable:false,stateMutability:"nonpayable",type:"constructor"},{constant:false,inputs:[{name:"aContract",type:"address"}],name:"setContract",outputs:[],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"publicKeys",type:"address[]"},{name:"level",type:"int256"}],name:"setPublisherLevel",outputs:[],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"publicKeys",type:"address[]"}],name:"disablePublisher",outputs:[],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[],name:"getPublishers",outputs:[{name:"",type:"address[]"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[{name:"publicKey",type:"address"}],name:"getPublisherByAddress",outputs:[{name:"",type:"address"},{name:"",type:"int256"},{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"hash",type:"string"},{name:"status",type:"int256"}],name:"sign",outputs:[],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"hash",type:"string"}],name:"verify",outputs:[{name:"",type:"address"},{name:"",type:"int256"},{name:"",type:"int256"},{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[{name:"hash",type:"string"},{name:"assetIndex",type:"uint256"}],name:"verifyByIndex",outputs:[{name:"",type:"address"},{name:"",type:"int256"},{name:"",type:"int256"},{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"getAssetCount",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[{name:"hash",type:"string"}],name:"getAssetCountForHash",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"}];var bytecode="0x608060405234801561001057600080fd5b50604051602080610fcd8339810180604052810190808051906020019092919050505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504260018190555050610f02806100cb6000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806328f7f9b8146100ca57806338052e271461010f57806354df1eab146101a05780636c6071aa146101db57806375f890ab146102475780638da5cb5b1461028a578063a0aead4d146102e1578063bb9c6c3e1461030c578063bf91e82f1461039c578063c9e07f09146103eb578063cf09e0d014610430578063d6ce25a91461045b578063ddfe5b2d146104f5575b600080fd5b3480156100d657600080fd5b5061010d6004803603810190808035906020019082018035906020019190919293919293908035906020019092919050505061054c565b005b34801561011b57600080fd5b50610150600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061061c565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b3480156101ac57600080fd5b506101d960048036038101908080359060200190820180359060200191909192939192939050505061073a565b005b3480156101e757600080fd5b506101f0610804565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610233578082015181840152602081019050610218565b505050509050019250505060405180910390f35b34801561025357600080fd5b50610288600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610922565b005b34801561029657600080fd5b5061029f6109bc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ed57600080fd5b506102f66109e1565b6040518082815260200191505060405180910390f35b34801561031857600080fd5b50610345600480360381019080803590602001908201803590602001919091929391929390505050610aa9565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390f35b3480156103a857600080fd5b506103d5600480360381019080803590602001908201803590602001919091929391929390505050610bc4565b6040518082815260200191505060405180910390f35b3480156103f757600080fd5b5061042e60048036038101908080359060200190820180359060200191909192939192939080359060200190929190505050610cb4565b005b34801561043c57600080fd5b50610445610d87565b6040518082815260200191505060405180910390f35b34801561046757600080fd5b5061049e60048036038101908080359060200190820180359060200191909192939192939080359060200190929190505050610d8d565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390f35b34801561050157600080fd5b5061050a610eb0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166328f7f9b88484846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200183815260200182810382528585828181526020019250808284378201915050945050505050600060405180830381600087803b1580156105ff57600080fd5b505af1158015610613573d6000803e3d6000fd5b50505050505050565b6000806000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338052e27856040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050606060405180830381600087803b1580156106de57600080fd5b505af11580156106f2573d6000803e3d6000fd5b505050506040513d606081101561070857600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050509250925092509193909250565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166354df1eab83836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825284848281815260200192506020028082843782019150509350505050600060405180830381600087803b1580156107e857600080fd5b505af11580156107fc573d6000803e3d6000fd5b505050505050565b6060600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636c6071aa6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b15801561088c57600080fd5b505af11580156108a0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156108ca57600080fd5b8101908080516401000000008111156108e257600080fd5b828101905060208101848111156108f857600080fd5b815185602082028301116401000000008211171561091557600080fd5b5050929190505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614156109b95780600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a0aead4d6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610a6957600080fd5b505af1158015610a7d573d6000803e3d6000fd5b505050506040513d6020811015610a9357600080fd5b8101908080519060200190929190505050905090565b600080600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9c6c3e87876040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825284848281815260200192508082843782019150509350505050608060405180830381600087803b158015610b5a57600080fd5b505af1158015610b6e573d6000803e3d6000fd5b505050506040513d6080811015610b8457600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050935093509350935092959194509250565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bf91e82f84846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825284848281815260200192508082843782019150509350505050602060405180830381600087803b158015610c7157600080fd5b505af1158015610c85573d6000803e3d6000fd5b505050506040513d6020811015610c9b57600080fd5b8101908080519060200190929190505050905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c9e07f098484846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200183815260200182810382528585828181526020019250602002808284378201915050945050505050600060405180830381600087803b158015610d6a57600080fd5b505af1158015610d7e573d6000803e3d6000fd5b50505050505050565b60015481565b600080600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d6ce25a98888886040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200183815260200182810382528585828181526020019250808284378201915050945050505050608060405180830381600087803b158015610e4657600080fd5b505af1158015610e5a573d6000803e3d6000fd5b505050506040513d6080811015610e7057600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050935093509350935093509350935093565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058200e72ee1148ce0a7160899be5eab8c2c0b9a0bb97503690b83c0462340a321c8f0029";var deployedBytecode="0x6080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806328f7f9b8146100ca57806338052e271461010f57806354df1eab146101a05780636c6071aa146101db57806375f890ab146102475780638da5cb5b1461028a578063a0aead4d146102e1578063bb9c6c3e1461030c578063bf91e82f1461039c578063c9e07f09146103eb578063cf09e0d014610430578063d6ce25a91461045b578063ddfe5b2d146104f5575b600080fd5b3480156100d657600080fd5b5061010d6004803603810190808035906020019082018035906020019190919293919293908035906020019092919050505061054c565b005b34801561011b57600080fd5b50610150600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061061c565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b3480156101ac57600080fd5b506101d960048036038101908080359060200190820180359060200191909192939192939050505061073a565b005b3480156101e757600080fd5b506101f0610804565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610233578082015181840152602081019050610218565b505050509050019250505060405180910390f35b34801561025357600080fd5b50610288600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610922565b005b34801561029657600080fd5b5061029f6109bc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ed57600080fd5b506102f66109e1565b6040518082815260200191505060405180910390f35b34801561031857600080fd5b50610345600480360381019080803590602001908201803590602001919091929391929390505050610aa9565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390f35b3480156103a857600080fd5b506103d5600480360381019080803590602001908201803590602001919091929391929390505050610bc4565b6040518082815260200191505060405180910390f35b3480156103f757600080fd5b5061042e60048036038101908080359060200190820180359060200191909192939192939080359060200190929190505050610cb4565b005b34801561043c57600080fd5b50610445610d87565b6040518082815260200191505060405180910390f35b34801561046757600080fd5b5061049e60048036038101908080359060200190820180359060200191909192939192939080359060200190929190505050610d8d565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390f35b34801561050157600080fd5b5061050a610eb0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166328f7f9b88484846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200183815260200182810382528585828181526020019250808284378201915050945050505050600060405180830381600087803b1580156105ff57600080fd5b505af1158015610613573d6000803e3d6000fd5b50505050505050565b6000806000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338052e27856040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050606060405180830381600087803b1580156106de57600080fd5b505af11580156106f2573d6000803e3d6000fd5b505050506040513d606081101561070857600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050509250925092509193909250565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166354df1eab83836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825284848281815260200192506020028082843782019150509350505050600060405180830381600087803b1580156107e857600080fd5b505af11580156107fc573d6000803e3d6000fd5b505050505050565b6060600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636c6071aa6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b15801561088c57600080fd5b505af11580156108a0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156108ca57600080fd5b8101908080516401000000008111156108e257600080fd5b828101905060208101848111156108f857600080fd5b815185602082028301116401000000008211171561091557600080fd5b5050929190505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614156109b95780600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a0aead4d6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610a6957600080fd5b505af1158015610a7d573d6000803e3d6000fd5b505050506040513d6020811015610a9357600080fd5b8101908080519060200190929190505050905090565b600080600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9c6c3e87876040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825284848281815260200192508082843782019150509350505050608060405180830381600087803b158015610b5a57600080fd5b505af1158015610b6e573d6000803e3d6000fd5b505050506040513d6080811015610b8457600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050935093509350935092959194509250565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bf91e82f84846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825284848281815260200192508082843782019150509350505050602060405180830381600087803b158015610c7157600080fd5b505af1158015610c85573d6000803e3d6000fd5b505050506040513d6020811015610c9b57600080fd5b8101908080519060200190929190505050905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c9e07f098484846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200183815260200182810382528585828181526020019250602002808284378201915050945050505050600060405180830381600087803b158015610d6a57600080fd5b505af1158015610d7e573d6000803e3d6000fd5b50505050505050565b60015481565b600080600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d6ce25a98888886040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200183815260200182810382528585828181526020019250808284378201915050945050505050608060405180830381600087803b158015610e4657600080fd5b505af1158015610e5a573d6000803e3d6000fd5b505050506040513d6080811015610e7057600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050935093509350935093509350935093565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058200e72ee1148ce0a7160899be5eab8c2c0b9a0bb97503690b83c0462340a321c8f0029";var sourceMap="261:1671:1:-;;;459:133;8:9:-1;5:2;;;30:1;27;20:12;5:2;459:133:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;523:9;506:14;;:26;;;;;;;;;;;;;;;;;;550:10;542:5;;:18;;;;;;;;;;;;;;;;;;582:3;570:9;:15;;;;459:133;261:1671;;;;;;";var deployedSourceMap="261:1671:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1264:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1264:98:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1094:164;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1094:164:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;852:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;852:117:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;975:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;975:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;975:113:1;;;;;;;;;;;;;;;;;598:105;;8:9:-1;5:2;;;30:1;27;20:12;5:2;598:105:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;298:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;298:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;1679:108;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1679:108:1;;;;;;;;;;;;;;;;;;;;;;;1368:128;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1368:128:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1793:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1793:137:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;709;;8:9:-1;5:2;;;30:1;27;20:12;5:2;709:137:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;324:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;324:21:1;;;;;;;;;;;;;;;;;;;;;;;1502:171;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1502:171:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;351:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;351:28:1;;;;;;;;;;;;;;;;;;;;;;;;;;;1264:98;1322:14;;;;;;;;;;;:19;;;1342:4;;1348:6;1322:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1322:33:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1322:33:1;;;;1264:98;;;:::o;1094:164::-;1167:7;1176:3;1181:4;1204:14;;;;;;;;;;;:36;;;1241:9;1204:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1204:47:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1204:47:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1204:47:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1197:54;;;;;;1094:164;;;;;:::o;852:117::-;919:14;;;;;;;;;;;:31;;;951:10;;919:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;919:43:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;919:43:1;;;;852:117;;:::o;975:113::-;1023:9;1051:14;;;;;;;;;;;:28;;;:30;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1051:30:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1051:30:1;;;;;;39:16:-1;36:1;17:17;2:54;1051:30:1;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;13:2;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1051:30:1;;;;;;20:11:-1;15:3;12:20;9:2;;;45:1;42;35:12;9:2;73:11;68:3;64:21;57:28;;126:4;121:3;117:14;163:9;145:16;142:31;139:2;;;186:1;183;176:12;139:2;224:3;218:10;339:9;333:2;319:12;315:21;297:16;293:44;290:59;268:11;254:12;251:29;239:119;236:2;;;371:1;368;361:12;236:2;0:383;;1051:30:1;;;;;;1044:37;;975:113;:::o;598:105::-;438:5;;;;;;;;;;;425:18;;:9;:18;;;421:25;;;687:9;670:14;;:26;;;;;;;;;;;;;;;;;;421:25;598:105;:::o;298:20::-;;;;;;;;;;;;;:::o;1679:108::-;1727:4;1750:14;;;;;;;;;;;:28;;;:30;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1750:30:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1750:30:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1750:30:1;;;;;;;;;;;;;;;;1743:37;;1679:108;:::o;1368:128::-;1420:7;1429:3;1434;1439:4;1462:14;;;;;;;;;;;:21;;;1484:4;;1462:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1462:27:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1462:27:1;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;1462:27:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1455:34;;;;;;;;1368:128;;;;;;;:::o;1793:137::-;1859:4;1882:14;;;;;;;;;;;:35;;;1918:4;;1882:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1882:41:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1882:41:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1882:41:1;;;;;;;;;;;;;;;;1875:48;;1793:137;;;;:::o;709:::-;788:14;;;;;;;;;;;:32;;;821:10;;833:5;788:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;788:51:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;788:51:1;;;;709:137;;;:::o;324:21::-;;;;:::o;1502:171::-;1578:7;1587:3;1592;1597:4;1620:14;;;;;;;;;;;:28;;;1649:4;;1655:10;1620:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1620:46:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1620:46:1;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;1620:46:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1613:53;;;;;;;;1502:171;;;;;;;:::o;351:28::-;;;;;;;;;;;;;:::o";var source="/*\n * Copyright (c) 2018-2019 vChain, Inc. All Rights Reserved.\n * This software is released under GPL3.\n * The full license information can be found under:\n * https://www.gnu.org/licenses/gpl-3.0.en.html\n */\n\n\npragma solidity ^0.4.24;\n\nimport \"./Assets.sol\";\n\ncontract AssetsRelay is Assets {\n    address public owner;\n    uint public createdAt;\n    Assets public assetsContract;\n\n    modifier restrictToOwner {\n        if (tx.origin == owner) _;\n    }\n\n    constructor(Assets aContract) public {\n        assetsContract = aContract;\n        owner = msg.sender;\n        createdAt = now;\n    }\n\n    function setContract(Assets aContract) public restrictToOwner {\n        assetsContract = aContract;\n    }\n\n    function setPublisherLevel(address[] publicKeys, int level) external {\n        assetsContract.setPublisherLevel(publicKeys, level);\n    }\n\n    function disablePublisher(address[] publicKeys) external {\n        assetsContract.disablePublisher(publicKeys);\n    }\n\n    function getPublishers() external view returns (address[]) {\n        return assetsContract.getPublishers();\n    }\n\n    function getPublisherByAddress(address publicKey) external view returns (address, int, uint) {\n        return assetsContract.getPublisherByAddress(publicKey);\n    }\n\n    function sign(string hash, int status) external {\n        assetsContract.sign(hash, status);\n    }\n\n    function verify(string hash) external view returns (address, int, int, uint) {\n        return assetsContract.verify(hash);\n    }\n\n    function verifyByIndex(string hash, uint assetIndex) external view returns (address, int, int, uint) {\n        return assetsContract.verifyByIndex(hash, assetIndex);\n    }\n\n    function getAssetCount() external view returns (uint) {\n        return assetsContract.getAssetCount();\n    }\n\n    function getAssetCountForHash(string hash) external view returns (uint) {\n        return assetsContract.getAssetCountForHash(hash);\n    }\n}\n";var sourcePath="/Users/ameingast/Development/vChain/contracts/contracts/AssetsRelay.sol";var ast={absolutePath:"/Users/ameingast/Development/vChain/contracts/contracts/AssetsRelay.sol",exportedSymbols:{AssetsRelay:[268]},id:269,nodeType:"SourceUnit",nodes:[{id:82,literals:["solidity","^","0.4",".24"],nodeType:"PragmaDirective",src:"211:24:1"},{absolutePath:"/Users/ameingast/Development/vChain/contracts/contracts/Assets.sol",file:"./Assets.sol",id:83,nodeType:"ImportDirective",scope:269,sourceUnit:81,src:"237:22:1",symbolAliases:[],unitAlias:""},{baseContracts:[{"arguments":null,baseName:{contractScope:null,id:84,name:"Assets",nodeType:"UserDefinedTypeName",referencedDeclaration:80,src:"285:6:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:85,nodeType:"InheritanceSpecifier",src:"285:6:1"}],contractDependencies:[80],contractKind:"contract",documentation:null,fullyImplemented:true,id:268,linearizedBaseContracts:[268,80],name:"AssetsRelay",nodeType:"ContractDefinition",nodes:[{constant:false,id:87,name:"owner",nodeType:"VariableDeclaration",scope:268,src:"298:20:1",stateVariable:true,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:86,name:"address",nodeType:"ElementaryTypeName",src:"298:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"public"},{constant:false,id:89,name:"createdAt",nodeType:"VariableDeclaration",scope:268,src:"324:21:1",stateVariable:true,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:88,name:"uint",nodeType:"ElementaryTypeName",src:"324:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"public"},{constant:false,id:91,name:"assetsContract",nodeType:"VariableDeclaration",scope:268,src:"351:28:1",stateVariable:true,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"},typeName:{contractScope:null,id:90,name:"Assets",nodeType:"UserDefinedTypeName",referencedDeclaration:80,src:"351:6:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},value:null,visibility:"public"},{body:{id:99,nodeType:"Block",src:"411:42:1",statements:[{condition:{argumentTypes:null,commonType:{typeIdentifier:"t_address",typeString:"address"},id:96,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftExpression:{argumentTypes:null,expression:{argumentTypes:null,id:93,name:"tx",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:817,src:"425:2:1",typeDescriptions:{typeIdentifier:"t_magic_transaction",typeString:"tx"}},id:94,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"origin",nodeType:"MemberAccess",referencedDeclaration:null,src:"425:9:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},nodeType:"BinaryOperation",operator:"==",rightExpression:{argumentTypes:null,id:95,name:"owner",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:87,src:"438:5:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},src:"425:18:1",typeDescriptions:{typeIdentifier:"t_bool",typeString:"bool"}},falseBody:null,id:98,nodeType:"IfStatement",src:"421:25:1",trueBody:{id:97,nodeType:"PlaceholderStatement",src:"445:1:1"}}]},documentation:null,id:100,name:"restrictToOwner",nodeType:"ModifierDefinition",parameters:{id:92,nodeType:"ParameterList",parameters:[],src:"411:0:1"},src:"386:67:1",visibility:"internal"},{body:{id:118,nodeType:"Block",src:"496:96:1",statements:[{expression:{argumentTypes:null,id:107,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftHandSide:{argumentTypes:null,id:105,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"506:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,id:106,name:"aContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:102,src:"523:9:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},src:"506:26:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:108,nodeType:"ExpressionStatement",src:"506:26:1"},{expression:{argumentTypes:null,id:112,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftHandSide:{argumentTypes:null,id:109,name:"owner",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:87,src:"542:5:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,expression:{argumentTypes:null,id:110,name:"msg",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:805,src:"550:3:1",typeDescriptions:{typeIdentifier:"t_magic_message",typeString:"msg"}},id:111,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"sender",nodeType:"MemberAccess",referencedDeclaration:null,src:"550:10:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},src:"542:18:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},id:113,nodeType:"ExpressionStatement",src:"542:18:1"},{expression:{argumentTypes:null,id:116,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftHandSide:{argumentTypes:null,id:114,name:"createdAt",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:89,src:"570:9:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,id:115,name:"now",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:807,src:"582:3:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},src:"570:15:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},id:117,nodeType:"ExpressionStatement",src:"570:15:1"}]},documentation:null,id:119,implemented:true,isConstructor:true,isDeclaredConst:false,modifiers:[],name:"",nodeType:"FunctionDefinition",parameters:{id:103,nodeType:"ParameterList",parameters:[{constant:false,id:102,name:"aContract",nodeType:"VariableDeclaration",scope:119,src:"471:16:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"},typeName:{contractScope:null,id:101,name:"Assets",nodeType:"UserDefinedTypeName",referencedDeclaration:80,src:"471:6:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},value:null,visibility:"internal"}],src:"470:18:1"},payable:false,returnParameters:{id:104,nodeType:"ParameterList",parameters:[],src:"496:0:1"},scope:268,src:"459:133:1",stateMutability:"nonpayable",superFunction:null,visibility:"public"},{body:{id:130,nodeType:"Block",src:"660:43:1",statements:[{expression:{argumentTypes:null,id:128,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftHandSide:{argumentTypes:null,id:126,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"670:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,id:127,name:"aContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:121,src:"687:9:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},src:"670:26:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:129,nodeType:"ExpressionStatement",src:"670:26:1"}]},documentation:null,id:131,implemented:true,isConstructor:false,isDeclaredConst:false,modifiers:[{"arguments":null,id:124,modifierName:{argumentTypes:null,id:123,name:"restrictToOwner",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:100,src:"644:15:1",typeDescriptions:{typeIdentifier:"t_modifier$__$",typeString:"modifier ()"}},nodeType:"ModifierInvocation",src:"644:15:1"}],name:"setContract",nodeType:"FunctionDefinition",parameters:{id:122,nodeType:"ParameterList",parameters:[{constant:false,id:121,name:"aContract",nodeType:"VariableDeclaration",scope:131,src:"619:16:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"},typeName:{contractScope:null,id:120,name:"Assets",nodeType:"UserDefinedTypeName",referencedDeclaration:80,src:"619:6:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},value:null,visibility:"internal"}],src:"618:18:1"},payable:false,returnParameters:{id:125,nodeType:"ParameterList",parameters:[],src:"660:0:1"},scope:268,src:"598:105:1",stateMutability:"nonpayable",superFunction:null,visibility:"public"},{body:{id:146,nodeType:"Block",src:"778:68:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:142,name:"publicKeys",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:134,src:"821:10:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[] calldata"}},{argumentTypes:null,id:143,name:"level",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:136,src:"833:5:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}}],expression:{argumentTypes:[{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[] calldata"},{typeIdentifier:"t_int256",typeString:"int256"}],expression:{argumentTypes:null,id:139,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"788:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:141,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"setPublisherLevel",nodeType:"MemberAccess",referencedDeclaration:9,src:"788:32:1",typeDescriptions:{typeIdentifier:"t_function_external_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$_t_int256_$returns$__$",typeString:"function (address[] memory,int256) external"}},id:144,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"788:51:1",typeDescriptions:{typeIdentifier:"t_tuple$__$",typeString:"tuple()"}},id:145,nodeType:"ExpressionStatement",src:"788:51:1"}]},documentation:null,id:147,implemented:true,isConstructor:false,isDeclaredConst:false,modifiers:[],name:"setPublisherLevel",nodeType:"FunctionDefinition",parameters:{id:137,nodeType:"ParameterList",parameters:[{constant:false,id:134,name:"publicKeys",nodeType:"VariableDeclaration",scope:147,src:"736:20:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[]"},typeName:{baseType:{id:132,name:"address",nodeType:"ElementaryTypeName",src:"736:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},id:133,length:null,nodeType:"ArrayTypeName",src:"736:9:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_storage_ptr",typeString:"address[]"}},value:null,visibility:"internal"},{constant:false,id:136,name:"level",nodeType:"VariableDeclaration",scope:147,src:"758:9:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:135,name:"int",nodeType:"ElementaryTypeName",src:"758:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"}],src:"735:33:1"},payable:false,returnParameters:{id:138,nodeType:"ParameterList",parameters:[],src:"778:0:1"},scope:268,src:"709:137:1",stateMutability:"nonpayable",superFunction:9,visibility:"external"},{body:{id:159,nodeType:"Block",src:"909:60:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:156,name:"publicKeys",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:150,src:"951:10:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[] calldata"}}],expression:{argumentTypes:[{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[] calldata"}],expression:{argumentTypes:null,id:153,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"919:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:155,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"disablePublisher",nodeType:"MemberAccess",referencedDeclaration:15,src:"919:31:1",typeDescriptions:{typeIdentifier:"t_function_external_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",typeString:"function (address[] memory) external"}},id:157,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"919:43:1",typeDescriptions:{typeIdentifier:"t_tuple$__$",typeString:"tuple()"}},id:158,nodeType:"ExpressionStatement",src:"919:43:1"}]},documentation:null,id:160,implemented:true,isConstructor:false,isDeclaredConst:false,modifiers:[],name:"disablePublisher",nodeType:"FunctionDefinition",parameters:{id:151,nodeType:"ParameterList",parameters:[{constant:false,id:150,name:"publicKeys",nodeType:"VariableDeclaration",scope:160,src:"878:20:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[]"},typeName:{baseType:{id:148,name:"address",nodeType:"ElementaryTypeName",src:"878:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},id:149,length:null,nodeType:"ArrayTypeName",src:"878:9:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_storage_ptr",typeString:"address[]"}},value:null,visibility:"internal"}],src:"877:22:1"},payable:false,returnParameters:{id:152,nodeType:"ParameterList",parameters:[],src:"909:0:1"},scope:268,src:"852:117:1",stateMutability:"nonpayable",superFunction:15,visibility:"external"},{body:{id:170,nodeType:"Block",src:"1034:54:1",statements:[{expression:{argumentTypes:null,"arguments":[],expression:{argumentTypes:[],expression:{argumentTypes:null,id:166,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1051:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:167,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"getPublishers",nodeType:"MemberAccess",referencedDeclaration:32,src:"1051:28:1",typeDescriptions:{typeIdentifier:"t_function_external_view$__$returns$_t_array$_t_address_$dyn_memory_ptr_$",typeString:"function () view external returns (address[] memory)"}},id:168,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1051:30:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_memory_ptr",typeString:"address[] memory"}},functionReturnParameters:165,id:169,nodeType:"Return",src:"1044:37:1"}]},documentation:null,id:171,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"getPublishers",nodeType:"FunctionDefinition",parameters:{id:161,nodeType:"ParameterList",parameters:[],src:"997:2:1"},payable:false,returnParameters:{id:165,nodeType:"ParameterList",parameters:[{constant:false,id:164,name:"",nodeType:"VariableDeclaration",scope:171,src:"1023:9:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_memory_ptr",typeString:"address[]"},typeName:{baseType:{id:162,name:"address",nodeType:"ElementaryTypeName",src:"1023:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},id:163,length:null,nodeType:"ArrayTypeName",src:"1023:9:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_storage_ptr",typeString:"address[]"}},value:null,visibility:"internal"}],src:"1022:11:1"},scope:268,src:"975:113:1",stateMutability:"view",superFunction:32,visibility:"external"},{body:{id:187,nodeType:"Block",src:"1187:71:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:184,name:"publicKey",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:173,src:"1241:9:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}}],expression:{argumentTypes:[{typeIdentifier:"t_address",typeString:"address"}],expression:{argumentTypes:null,id:182,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1204:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:183,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"getPublisherByAddress",nodeType:"MemberAccess",referencedDeclaration:26,src:"1204:36:1",typeDescriptions:{typeIdentifier:"t_function_external_view$_t_address_$returns$_t_address_$_t_int256_$_t_uint256_$",typeString:"function (address) view external returns (address,int256,uint256)"}},id:185,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1204:47:1",typeDescriptions:{typeIdentifier:"t_tuple$_t_address_$_t_int256_$_t_uint256_$",typeString:"tuple(address,int256,uint256)"}},functionReturnParameters:181,id:186,nodeType:"Return",src:"1197:54:1"}]},documentation:null,id:188,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"getPublisherByAddress",nodeType:"FunctionDefinition",parameters:{id:174,nodeType:"ParameterList",parameters:[{constant:false,id:173,name:"publicKey",nodeType:"VariableDeclaration",scope:188,src:"1125:17:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:172,name:"address",nodeType:"ElementaryTypeName",src:"1125:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"internal"}],src:"1124:19:1"},payable:false,returnParameters:{id:181,nodeType:"ParameterList",parameters:[{constant:false,id:176,name:"",nodeType:"VariableDeclaration",scope:188,src:"1167:7:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:175,name:"address",nodeType:"ElementaryTypeName",src:"1167:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"internal"},{constant:false,id:178,name:"",nodeType:"VariableDeclaration",scope:188,src:"1176:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:177,name:"int",nodeType:"ElementaryTypeName",src:"1176:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:180,name:"",nodeType:"VariableDeclaration",scope:188,src:"1181:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:179,name:"uint",nodeType:"ElementaryTypeName",src:"1181:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1166:20:1"},scope:268,src:"1094:164:1",stateMutability:"view",superFunction:26,visibility:"external"},{body:{id:202,nodeType:"Block",src:"1312:50:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:198,name:"hash",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:190,src:"1342:4:1",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}},{argumentTypes:null,id:199,name:"status",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:192,src:"1348:6:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}}],expression:{argumentTypes:[{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"},{typeIdentifier:"t_int256",typeString:"int256"}],expression:{argumentTypes:null,id:195,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1322:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:197,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"sign",nodeType:"MemberAccess",referencedDeclaration:39,src:"1322:19:1",typeDescriptions:{typeIdentifier:"t_function_external_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",typeString:"function (string memory,int256) external"}},id:200,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1322:33:1",typeDescriptions:{typeIdentifier:"t_tuple$__$",typeString:"tuple()"}},id:201,nodeType:"ExpressionStatement",src:"1322:33:1"}]},documentation:null,id:203,implemented:true,isConstructor:false,isDeclaredConst:false,modifiers:[],name:"sign",nodeType:"FunctionDefinition",parameters:{id:193,nodeType:"ParameterList",parameters:[{constant:false,id:190,name:"hash",nodeType:"VariableDeclaration",scope:203,src:"1278:11:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string"},typeName:{id:189,name:"string",nodeType:"ElementaryTypeName",src:"1278:6:1",typeDescriptions:{typeIdentifier:"t_string_storage_ptr",typeString:"string"}},value:null,visibility:"internal"},{constant:false,id:192,name:"status",nodeType:"VariableDeclaration",scope:203,src:"1291:10:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:191,name:"int",nodeType:"ElementaryTypeName",src:"1291:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"}],src:"1277:25:1"},payable:false,returnParameters:{id:194,nodeType:"ParameterList",parameters:[],src:"1312:0:1"},scope:268,src:"1264:98:1",stateMutability:"nonpayable",superFunction:39,visibility:"external"},{body:{id:221,nodeType:"Block",src:"1445:51:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:218,name:"hash",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:205,src:"1484:4:1",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}}],expression:{argumentTypes:[{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}],expression:{argumentTypes:null,id:216,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1462:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:217,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"verify",nodeType:"MemberAccess",referencedDeclaration:52,src:"1462:21:1",typeDescriptions:{typeIdentifier:"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$_t_int256_$_t_int256_$_t_uint256_$",typeString:"function (string memory) view external returns (address,int256,int256,uint256)"}},id:219,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1462:27:1",typeDescriptions:{typeIdentifier:"t_tuple$_t_address_$_t_int256_$_t_int256_$_t_uint256_$",typeString:"tuple(address,int256,int256,uint256)"}},functionReturnParameters:215,id:220,nodeType:"Return",src:"1455:34:1"}]},documentation:null,id:222,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"verify",nodeType:"FunctionDefinition",parameters:{id:206,nodeType:"ParameterList",parameters:[{constant:false,id:205,name:"hash",nodeType:"VariableDeclaration",scope:222,src:"1384:11:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string"},typeName:{id:204,name:"string",nodeType:"ElementaryTypeName",src:"1384:6:1",typeDescriptions:{typeIdentifier:"t_string_storage_ptr",typeString:"string"}},value:null,visibility:"internal"}],src:"1383:13:1"},payable:false,returnParameters:{id:215,nodeType:"ParameterList",parameters:[{constant:false,id:208,name:"",nodeType:"VariableDeclaration",scope:222,src:"1420:7:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:207,name:"address",nodeType:"ElementaryTypeName",src:"1420:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"internal"},{constant:false,id:210,name:"",nodeType:"VariableDeclaration",scope:222,src:"1429:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:209,name:"int",nodeType:"ElementaryTypeName",src:"1429:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:212,name:"",nodeType:"VariableDeclaration",scope:222,src:"1434:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:211,name:"int",nodeType:"ElementaryTypeName",src:"1434:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:214,name:"",nodeType:"VariableDeclaration",scope:222,src:"1439:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:213,name:"uint",nodeType:"ElementaryTypeName",src:"1439:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1419:25:1"},scope:268,src:"1368:128:1",stateMutability:"view",superFunction:52,visibility:"external"},{body:{id:243,nodeType:"Block",src:"1603:70:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:239,name:"hash",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:224,src:"1649:4:1",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}},{argumentTypes:null,id:240,name:"assetIndex",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:226,src:"1655:10:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}}],expression:{argumentTypes:[{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"},{typeIdentifier:"t_uint256",typeString:"uint256"}],expression:{argumentTypes:null,id:237,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1620:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:238,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"verifyByIndex",nodeType:"MemberAccess",referencedDeclaration:67,src:"1620:28:1",typeDescriptions:{typeIdentifier:"t_function_external_view$_t_string_memory_ptr_$_t_uint256_$returns$_t_address_$_t_int256_$_t_int256_$_t_uint256_$",typeString:"function (string memory,uint256) view external returns (address,int256,int256,uint256)"}},id:241,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1620:46:1",typeDescriptions:{typeIdentifier:"t_tuple$_t_address_$_t_int256_$_t_int256_$_t_uint256_$",typeString:"tuple(address,int256,int256,uint256)"}},functionReturnParameters:236,id:242,nodeType:"Return",src:"1613:53:1"}]},documentation:null,id:244,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"verifyByIndex",nodeType:"FunctionDefinition",parameters:{id:227,nodeType:"ParameterList",parameters:[{constant:false,id:224,name:"hash",nodeType:"VariableDeclaration",scope:244,src:"1525:11:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string"},typeName:{id:223,name:"string",nodeType:"ElementaryTypeName",src:"1525:6:1",typeDescriptions:{typeIdentifier:"t_string_storage_ptr",typeString:"string"}},value:null,visibility:"internal"},{constant:false,id:226,name:"assetIndex",nodeType:"VariableDeclaration",scope:244,src:"1538:15:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:225,name:"uint",nodeType:"ElementaryTypeName",src:"1538:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1524:30:1"},payable:false,returnParameters:{id:236,nodeType:"ParameterList",parameters:[{constant:false,id:229,name:"",nodeType:"VariableDeclaration",scope:244,src:"1578:7:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:228,name:"address",nodeType:"ElementaryTypeName",src:"1578:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"internal"},{constant:false,id:231,name:"",nodeType:"VariableDeclaration",scope:244,src:"1587:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:230,name:"int",nodeType:"ElementaryTypeName",src:"1587:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:233,name:"",nodeType:"VariableDeclaration",scope:244,src:"1592:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:232,name:"int",nodeType:"ElementaryTypeName",src:"1592:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:235,name:"",nodeType:"VariableDeclaration",scope:244,src:"1597:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:234,name:"uint",nodeType:"ElementaryTypeName",src:"1597:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1577:25:1"},scope:268,src:"1502:171:1",stateMutability:"view",superFunction:67,visibility:"external"},{body:{id:253,nodeType:"Block",src:"1733:54:1",statements:[{expression:{argumentTypes:null,"arguments":[],expression:{argumentTypes:[],expression:{argumentTypes:null,id:249,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1750:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:250,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"getAssetCount",nodeType:"MemberAccess",referencedDeclaration:72,src:"1750:28:1",typeDescriptions:{typeIdentifier:"t_function_external_view$__$returns$_t_uint256_$",typeString:"function () view external returns (uint256)"}},id:251,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1750:30:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},functionReturnParameters:248,id:252,nodeType:"Return",src:"1743:37:1"}]},documentation:null,id:254,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"getAssetCount",nodeType:"FunctionDefinition",parameters:{id:245,nodeType:"ParameterList",parameters:[],src:"1701:2:1"},payable:false,returnParameters:{id:248,nodeType:"ParameterList",parameters:[{constant:false,id:247,name:"",nodeType:"VariableDeclaration",scope:254,src:"1727:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:246,name:"uint",nodeType:"ElementaryTypeName",src:"1727:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1726:6:1"},scope:268,src:"1679:108:1",stateMutability:"view",superFunction:72,visibility:"external"},{body:{id:266,nodeType:"Block",src:"1865:65:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:263,name:"hash",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:256,src:"1918:4:1",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}}],expression:{argumentTypes:[{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}],expression:{argumentTypes:null,id:261,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1882:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:262,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"getAssetCountForHash",nodeType:"MemberAccess",referencedDeclaration:79,src:"1882:35:1",typeDescriptions:{typeIdentifier:"t_function_external_view$_t_string_memory_ptr_$returns$_t_uint256_$",typeString:"function (string memory) view external returns (uint256)"}},id:264,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1882:41:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},functionReturnParameters:260,id:265,nodeType:"Return",src:"1875:48:1"}]},documentation:null,id:267,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"getAssetCountForHash",nodeType:"FunctionDefinition",parameters:{id:257,nodeType:"ParameterList",parameters:[{constant:false,id:256,name:"hash",nodeType:"VariableDeclaration",scope:267,src:"1823:11:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string"},typeName:{id:255,name:"string",nodeType:"ElementaryTypeName",src:"1823:6:1",typeDescriptions:{typeIdentifier:"t_string_storage_ptr",typeString:"string"}},value:null,visibility:"internal"}],src:"1822:13:1"},payable:false,returnParameters:{id:260,nodeType:"ParameterList",parameters:[{constant:false,id:259,name:"",nodeType:"VariableDeclaration",scope:267,src:"1859:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:258,name:"uint",nodeType:"ElementaryTypeName",src:"1859:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1858:6:1"},scope:268,src:"1793:137:1",stateMutability:"view",superFunction:79,visibility:"external"}],scope:269,src:"261:1671:1"}],src:"211:1722:1"};var legacyAST={absolutePath:"/Users/ameingast/Development/vChain/contracts/contracts/AssetsRelay.sol",exportedSymbols:{AssetsRelay:[268]},id:269,nodeType:"SourceUnit",nodes:[{id:82,literals:["solidity","^","0.4",".24"],nodeType:"PragmaDirective",src:"211:24:1"},{absolutePath:"/Users/ameingast/Development/vChain/contracts/contracts/Assets.sol",file:"./Assets.sol",id:83,nodeType:"ImportDirective",scope:269,sourceUnit:81,src:"237:22:1",symbolAliases:[],unitAlias:""},{baseContracts:[{"arguments":null,baseName:{contractScope:null,id:84,name:"Assets",nodeType:"UserDefinedTypeName",referencedDeclaration:80,src:"285:6:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:85,nodeType:"InheritanceSpecifier",src:"285:6:1"}],contractDependencies:[80],contractKind:"contract",documentation:null,fullyImplemented:true,id:268,linearizedBaseContracts:[268,80],name:"AssetsRelay",nodeType:"ContractDefinition",nodes:[{constant:false,id:87,name:"owner",nodeType:"VariableDeclaration",scope:268,src:"298:20:1",stateVariable:true,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:86,name:"address",nodeType:"ElementaryTypeName",src:"298:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"public"},{constant:false,id:89,name:"createdAt",nodeType:"VariableDeclaration",scope:268,src:"324:21:1",stateVariable:true,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:88,name:"uint",nodeType:"ElementaryTypeName",src:"324:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"public"},{constant:false,id:91,name:"assetsContract",nodeType:"VariableDeclaration",scope:268,src:"351:28:1",stateVariable:true,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"},typeName:{contractScope:null,id:90,name:"Assets",nodeType:"UserDefinedTypeName",referencedDeclaration:80,src:"351:6:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},value:null,visibility:"public"},{body:{id:99,nodeType:"Block",src:"411:42:1",statements:[{condition:{argumentTypes:null,commonType:{typeIdentifier:"t_address",typeString:"address"},id:96,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftExpression:{argumentTypes:null,expression:{argumentTypes:null,id:93,name:"tx",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:817,src:"425:2:1",typeDescriptions:{typeIdentifier:"t_magic_transaction",typeString:"tx"}},id:94,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"origin",nodeType:"MemberAccess",referencedDeclaration:null,src:"425:9:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},nodeType:"BinaryOperation",operator:"==",rightExpression:{argumentTypes:null,id:95,name:"owner",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:87,src:"438:5:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},src:"425:18:1",typeDescriptions:{typeIdentifier:"t_bool",typeString:"bool"}},falseBody:null,id:98,nodeType:"IfStatement",src:"421:25:1",trueBody:{id:97,nodeType:"PlaceholderStatement",src:"445:1:1"}}]},documentation:null,id:100,name:"restrictToOwner",nodeType:"ModifierDefinition",parameters:{id:92,nodeType:"ParameterList",parameters:[],src:"411:0:1"},src:"386:67:1",visibility:"internal"},{body:{id:118,nodeType:"Block",src:"496:96:1",statements:[{expression:{argumentTypes:null,id:107,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftHandSide:{argumentTypes:null,id:105,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"506:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,id:106,name:"aContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:102,src:"523:9:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},src:"506:26:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:108,nodeType:"ExpressionStatement",src:"506:26:1"},{expression:{argumentTypes:null,id:112,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftHandSide:{argumentTypes:null,id:109,name:"owner",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:87,src:"542:5:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,expression:{argumentTypes:null,id:110,name:"msg",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:805,src:"550:3:1",typeDescriptions:{typeIdentifier:"t_magic_message",typeString:"msg"}},id:111,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"sender",nodeType:"MemberAccess",referencedDeclaration:null,src:"550:10:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},src:"542:18:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},id:113,nodeType:"ExpressionStatement",src:"542:18:1"},{expression:{argumentTypes:null,id:116,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftHandSide:{argumentTypes:null,id:114,name:"createdAt",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:89,src:"570:9:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,id:115,name:"now",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:807,src:"582:3:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},src:"570:15:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},id:117,nodeType:"ExpressionStatement",src:"570:15:1"}]},documentation:null,id:119,implemented:true,isConstructor:true,isDeclaredConst:false,modifiers:[],name:"",nodeType:"FunctionDefinition",parameters:{id:103,nodeType:"ParameterList",parameters:[{constant:false,id:102,name:"aContract",nodeType:"VariableDeclaration",scope:119,src:"471:16:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"},typeName:{contractScope:null,id:101,name:"Assets",nodeType:"UserDefinedTypeName",referencedDeclaration:80,src:"471:6:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},value:null,visibility:"internal"}],src:"470:18:1"},payable:false,returnParameters:{id:104,nodeType:"ParameterList",parameters:[],src:"496:0:1"},scope:268,src:"459:133:1",stateMutability:"nonpayable",superFunction:null,visibility:"public"},{body:{id:130,nodeType:"Block",src:"660:43:1",statements:[{expression:{argumentTypes:null,id:128,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,leftHandSide:{argumentTypes:null,id:126,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"670:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,id:127,name:"aContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:121,src:"687:9:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},src:"670:26:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:129,nodeType:"ExpressionStatement",src:"670:26:1"}]},documentation:null,id:131,implemented:true,isConstructor:false,isDeclaredConst:false,modifiers:[{"arguments":null,id:124,modifierName:{argumentTypes:null,id:123,name:"restrictToOwner",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:100,src:"644:15:1",typeDescriptions:{typeIdentifier:"t_modifier$__$",typeString:"modifier ()"}},nodeType:"ModifierInvocation",src:"644:15:1"}],name:"setContract",nodeType:"FunctionDefinition",parameters:{id:122,nodeType:"ParameterList",parameters:[{constant:false,id:121,name:"aContract",nodeType:"VariableDeclaration",scope:131,src:"619:16:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"},typeName:{contractScope:null,id:120,name:"Assets",nodeType:"UserDefinedTypeName",referencedDeclaration:80,src:"619:6:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},value:null,visibility:"internal"}],src:"618:18:1"},payable:false,returnParameters:{id:125,nodeType:"ParameterList",parameters:[],src:"660:0:1"},scope:268,src:"598:105:1",stateMutability:"nonpayable",superFunction:null,visibility:"public"},{body:{id:146,nodeType:"Block",src:"778:68:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:142,name:"publicKeys",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:134,src:"821:10:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[] calldata"}},{argumentTypes:null,id:143,name:"level",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:136,src:"833:5:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}}],expression:{argumentTypes:[{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[] calldata"},{typeIdentifier:"t_int256",typeString:"int256"}],expression:{argumentTypes:null,id:139,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"788:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:141,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"setPublisherLevel",nodeType:"MemberAccess",referencedDeclaration:9,src:"788:32:1",typeDescriptions:{typeIdentifier:"t_function_external_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$_t_int256_$returns$__$",typeString:"function (address[] memory,int256) external"}},id:144,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"788:51:1",typeDescriptions:{typeIdentifier:"t_tuple$__$",typeString:"tuple()"}},id:145,nodeType:"ExpressionStatement",src:"788:51:1"}]},documentation:null,id:147,implemented:true,isConstructor:false,isDeclaredConst:false,modifiers:[],name:"setPublisherLevel",nodeType:"FunctionDefinition",parameters:{id:137,nodeType:"ParameterList",parameters:[{constant:false,id:134,name:"publicKeys",nodeType:"VariableDeclaration",scope:147,src:"736:20:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[]"},typeName:{baseType:{id:132,name:"address",nodeType:"ElementaryTypeName",src:"736:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},id:133,length:null,nodeType:"ArrayTypeName",src:"736:9:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_storage_ptr",typeString:"address[]"}},value:null,visibility:"internal"},{constant:false,id:136,name:"level",nodeType:"VariableDeclaration",scope:147,src:"758:9:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:135,name:"int",nodeType:"ElementaryTypeName",src:"758:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"}],src:"735:33:1"},payable:false,returnParameters:{id:138,nodeType:"ParameterList",parameters:[],src:"778:0:1"},scope:268,src:"709:137:1",stateMutability:"nonpayable",superFunction:9,visibility:"external"},{body:{id:159,nodeType:"Block",src:"909:60:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:156,name:"publicKeys",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:150,src:"951:10:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[] calldata"}}],expression:{argumentTypes:[{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[] calldata"}],expression:{argumentTypes:null,id:153,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"919:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:155,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"disablePublisher",nodeType:"MemberAccess",referencedDeclaration:15,src:"919:31:1",typeDescriptions:{typeIdentifier:"t_function_external_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",typeString:"function (address[] memory) external"}},id:157,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"919:43:1",typeDescriptions:{typeIdentifier:"t_tuple$__$",typeString:"tuple()"}},id:158,nodeType:"ExpressionStatement",src:"919:43:1"}]},documentation:null,id:160,implemented:true,isConstructor:false,isDeclaredConst:false,modifiers:[],name:"disablePublisher",nodeType:"FunctionDefinition",parameters:{id:151,nodeType:"ParameterList",parameters:[{constant:false,id:150,name:"publicKeys",nodeType:"VariableDeclaration",scope:160,src:"878:20:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_calldata_ptr",typeString:"address[]"},typeName:{baseType:{id:148,name:"address",nodeType:"ElementaryTypeName",src:"878:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},id:149,length:null,nodeType:"ArrayTypeName",src:"878:9:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_storage_ptr",typeString:"address[]"}},value:null,visibility:"internal"}],src:"877:22:1"},payable:false,returnParameters:{id:152,nodeType:"ParameterList",parameters:[],src:"909:0:1"},scope:268,src:"852:117:1",stateMutability:"nonpayable",superFunction:15,visibility:"external"},{body:{id:170,nodeType:"Block",src:"1034:54:1",statements:[{expression:{argumentTypes:null,"arguments":[],expression:{argumentTypes:[],expression:{argumentTypes:null,id:166,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1051:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:167,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"getPublishers",nodeType:"MemberAccess",referencedDeclaration:32,src:"1051:28:1",typeDescriptions:{typeIdentifier:"t_function_external_view$__$returns$_t_array$_t_address_$dyn_memory_ptr_$",typeString:"function () view external returns (address[] memory)"}},id:168,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1051:30:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_memory_ptr",typeString:"address[] memory"}},functionReturnParameters:165,id:169,nodeType:"Return",src:"1044:37:1"}]},documentation:null,id:171,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"getPublishers",nodeType:"FunctionDefinition",parameters:{id:161,nodeType:"ParameterList",parameters:[],src:"997:2:1"},payable:false,returnParameters:{id:165,nodeType:"ParameterList",parameters:[{constant:false,id:164,name:"",nodeType:"VariableDeclaration",scope:171,src:"1023:9:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_memory_ptr",typeString:"address[]"},typeName:{baseType:{id:162,name:"address",nodeType:"ElementaryTypeName",src:"1023:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},id:163,length:null,nodeType:"ArrayTypeName",src:"1023:9:1",typeDescriptions:{typeIdentifier:"t_array$_t_address_$dyn_storage_ptr",typeString:"address[]"}},value:null,visibility:"internal"}],src:"1022:11:1"},scope:268,src:"975:113:1",stateMutability:"view",superFunction:32,visibility:"external"},{body:{id:187,nodeType:"Block",src:"1187:71:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:184,name:"publicKey",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:173,src:"1241:9:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}}],expression:{argumentTypes:[{typeIdentifier:"t_address",typeString:"address"}],expression:{argumentTypes:null,id:182,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1204:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:183,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"getPublisherByAddress",nodeType:"MemberAccess",referencedDeclaration:26,src:"1204:36:1",typeDescriptions:{typeIdentifier:"t_function_external_view$_t_address_$returns$_t_address_$_t_int256_$_t_uint256_$",typeString:"function (address) view external returns (address,int256,uint256)"}},id:185,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1204:47:1",typeDescriptions:{typeIdentifier:"t_tuple$_t_address_$_t_int256_$_t_uint256_$",typeString:"tuple(address,int256,uint256)"}},functionReturnParameters:181,id:186,nodeType:"Return",src:"1197:54:1"}]},documentation:null,id:188,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"getPublisherByAddress",nodeType:"FunctionDefinition",parameters:{id:174,nodeType:"ParameterList",parameters:[{constant:false,id:173,name:"publicKey",nodeType:"VariableDeclaration",scope:188,src:"1125:17:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:172,name:"address",nodeType:"ElementaryTypeName",src:"1125:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"internal"}],src:"1124:19:1"},payable:false,returnParameters:{id:181,nodeType:"ParameterList",parameters:[{constant:false,id:176,name:"",nodeType:"VariableDeclaration",scope:188,src:"1167:7:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:175,name:"address",nodeType:"ElementaryTypeName",src:"1167:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"internal"},{constant:false,id:178,name:"",nodeType:"VariableDeclaration",scope:188,src:"1176:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:177,name:"int",nodeType:"ElementaryTypeName",src:"1176:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:180,name:"",nodeType:"VariableDeclaration",scope:188,src:"1181:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:179,name:"uint",nodeType:"ElementaryTypeName",src:"1181:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1166:20:1"},scope:268,src:"1094:164:1",stateMutability:"view",superFunction:26,visibility:"external"},{body:{id:202,nodeType:"Block",src:"1312:50:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:198,name:"hash",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:190,src:"1342:4:1",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}},{argumentTypes:null,id:199,name:"status",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:192,src:"1348:6:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}}],expression:{argumentTypes:[{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"},{typeIdentifier:"t_int256",typeString:"int256"}],expression:{argumentTypes:null,id:195,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1322:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:197,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"sign",nodeType:"MemberAccess",referencedDeclaration:39,src:"1322:19:1",typeDescriptions:{typeIdentifier:"t_function_external_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",typeString:"function (string memory,int256) external"}},id:200,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1322:33:1",typeDescriptions:{typeIdentifier:"t_tuple$__$",typeString:"tuple()"}},id:201,nodeType:"ExpressionStatement",src:"1322:33:1"}]},documentation:null,id:203,implemented:true,isConstructor:false,isDeclaredConst:false,modifiers:[],name:"sign",nodeType:"FunctionDefinition",parameters:{id:193,nodeType:"ParameterList",parameters:[{constant:false,id:190,name:"hash",nodeType:"VariableDeclaration",scope:203,src:"1278:11:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string"},typeName:{id:189,name:"string",nodeType:"ElementaryTypeName",src:"1278:6:1",typeDescriptions:{typeIdentifier:"t_string_storage_ptr",typeString:"string"}},value:null,visibility:"internal"},{constant:false,id:192,name:"status",nodeType:"VariableDeclaration",scope:203,src:"1291:10:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:191,name:"int",nodeType:"ElementaryTypeName",src:"1291:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"}],src:"1277:25:1"},payable:false,returnParameters:{id:194,nodeType:"ParameterList",parameters:[],src:"1312:0:1"},scope:268,src:"1264:98:1",stateMutability:"nonpayable",superFunction:39,visibility:"external"},{body:{id:221,nodeType:"Block",src:"1445:51:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:218,name:"hash",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:205,src:"1484:4:1",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}}],expression:{argumentTypes:[{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}],expression:{argumentTypes:null,id:216,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1462:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:217,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"verify",nodeType:"MemberAccess",referencedDeclaration:52,src:"1462:21:1",typeDescriptions:{typeIdentifier:"t_function_external_view$_t_string_memory_ptr_$returns$_t_address_$_t_int256_$_t_int256_$_t_uint256_$",typeString:"function (string memory) view external returns (address,int256,int256,uint256)"}},id:219,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1462:27:1",typeDescriptions:{typeIdentifier:"t_tuple$_t_address_$_t_int256_$_t_int256_$_t_uint256_$",typeString:"tuple(address,int256,int256,uint256)"}},functionReturnParameters:215,id:220,nodeType:"Return",src:"1455:34:1"}]},documentation:null,id:222,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"verify",nodeType:"FunctionDefinition",parameters:{id:206,nodeType:"ParameterList",parameters:[{constant:false,id:205,name:"hash",nodeType:"VariableDeclaration",scope:222,src:"1384:11:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string"},typeName:{id:204,name:"string",nodeType:"ElementaryTypeName",src:"1384:6:1",typeDescriptions:{typeIdentifier:"t_string_storage_ptr",typeString:"string"}},value:null,visibility:"internal"}],src:"1383:13:1"},payable:false,returnParameters:{id:215,nodeType:"ParameterList",parameters:[{constant:false,id:208,name:"",nodeType:"VariableDeclaration",scope:222,src:"1420:7:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:207,name:"address",nodeType:"ElementaryTypeName",src:"1420:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"internal"},{constant:false,id:210,name:"",nodeType:"VariableDeclaration",scope:222,src:"1429:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:209,name:"int",nodeType:"ElementaryTypeName",src:"1429:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:212,name:"",nodeType:"VariableDeclaration",scope:222,src:"1434:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:211,name:"int",nodeType:"ElementaryTypeName",src:"1434:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:214,name:"",nodeType:"VariableDeclaration",scope:222,src:"1439:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:213,name:"uint",nodeType:"ElementaryTypeName",src:"1439:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1419:25:1"},scope:268,src:"1368:128:1",stateMutability:"view",superFunction:52,visibility:"external"},{body:{id:243,nodeType:"Block",src:"1603:70:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:239,name:"hash",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:224,src:"1649:4:1",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}},{argumentTypes:null,id:240,name:"assetIndex",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:226,src:"1655:10:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}}],expression:{argumentTypes:[{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"},{typeIdentifier:"t_uint256",typeString:"uint256"}],expression:{argumentTypes:null,id:237,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1620:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:238,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"verifyByIndex",nodeType:"MemberAccess",referencedDeclaration:67,src:"1620:28:1",typeDescriptions:{typeIdentifier:"t_function_external_view$_t_string_memory_ptr_$_t_uint256_$returns$_t_address_$_t_int256_$_t_int256_$_t_uint256_$",typeString:"function (string memory,uint256) view external returns (address,int256,int256,uint256)"}},id:241,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1620:46:1",typeDescriptions:{typeIdentifier:"t_tuple$_t_address_$_t_int256_$_t_int256_$_t_uint256_$",typeString:"tuple(address,int256,int256,uint256)"}},functionReturnParameters:236,id:242,nodeType:"Return",src:"1613:53:1"}]},documentation:null,id:244,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"verifyByIndex",nodeType:"FunctionDefinition",parameters:{id:227,nodeType:"ParameterList",parameters:[{constant:false,id:224,name:"hash",nodeType:"VariableDeclaration",scope:244,src:"1525:11:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string"},typeName:{id:223,name:"string",nodeType:"ElementaryTypeName",src:"1525:6:1",typeDescriptions:{typeIdentifier:"t_string_storage_ptr",typeString:"string"}},value:null,visibility:"internal"},{constant:false,id:226,name:"assetIndex",nodeType:"VariableDeclaration",scope:244,src:"1538:15:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:225,name:"uint",nodeType:"ElementaryTypeName",src:"1538:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1524:30:1"},payable:false,returnParameters:{id:236,nodeType:"ParameterList",parameters:[{constant:false,id:229,name:"",nodeType:"VariableDeclaration",scope:244,src:"1578:7:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"},typeName:{id:228,name:"address",nodeType:"ElementaryTypeName",src:"1578:7:1",typeDescriptions:{typeIdentifier:"t_address",typeString:"address"}},value:null,visibility:"internal"},{constant:false,id:231,name:"",nodeType:"VariableDeclaration",scope:244,src:"1587:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:230,name:"int",nodeType:"ElementaryTypeName",src:"1587:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:233,name:"",nodeType:"VariableDeclaration",scope:244,src:"1592:3:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"},typeName:{id:232,name:"int",nodeType:"ElementaryTypeName",src:"1592:3:1",typeDescriptions:{typeIdentifier:"t_int256",typeString:"int256"}},value:null,visibility:"internal"},{constant:false,id:235,name:"",nodeType:"VariableDeclaration",scope:244,src:"1597:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:234,name:"uint",nodeType:"ElementaryTypeName",src:"1597:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1577:25:1"},scope:268,src:"1502:171:1",stateMutability:"view",superFunction:67,visibility:"external"},{body:{id:253,nodeType:"Block",src:"1733:54:1",statements:[{expression:{argumentTypes:null,"arguments":[],expression:{argumentTypes:[],expression:{argumentTypes:null,id:249,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1750:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:250,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"getAssetCount",nodeType:"MemberAccess",referencedDeclaration:72,src:"1750:28:1",typeDescriptions:{typeIdentifier:"t_function_external_view$__$returns$_t_uint256_$",typeString:"function () view external returns (uint256)"}},id:251,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1750:30:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},functionReturnParameters:248,id:252,nodeType:"Return",src:"1743:37:1"}]},documentation:null,id:254,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"getAssetCount",nodeType:"FunctionDefinition",parameters:{id:245,nodeType:"ParameterList",parameters:[],src:"1701:2:1"},payable:false,returnParameters:{id:248,nodeType:"ParameterList",parameters:[{constant:false,id:247,name:"",nodeType:"VariableDeclaration",scope:254,src:"1727:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:246,name:"uint",nodeType:"ElementaryTypeName",src:"1727:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1726:6:1"},scope:268,src:"1679:108:1",stateMutability:"view",superFunction:72,visibility:"external"},{body:{id:266,nodeType:"Block",src:"1865:65:1",statements:[{expression:{argumentTypes:null,"arguments":[{argumentTypes:null,id:263,name:"hash",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:256,src:"1918:4:1",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}}],expression:{argumentTypes:[{typeIdentifier:"t_string_calldata_ptr",typeString:"string calldata"}],expression:{argumentTypes:null,id:261,name:"assetsContract",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:91,src:"1882:14:1",typeDescriptions:{typeIdentifier:"t_contract$_Assets_$80",typeString:"contract Assets"}},id:262,isConstant:false,isLValue:false,isPure:false,lValueRequested:false,memberName:"getAssetCountForHash",nodeType:"MemberAccess",referencedDeclaration:79,src:"1882:35:1",typeDescriptions:{typeIdentifier:"t_function_external_view$_t_string_memory_ptr_$returns$_t_uint256_$",typeString:"function (string memory) view external returns (uint256)"}},id:264,isConstant:false,isLValue:false,isPure:false,kind:"functionCall",lValueRequested:false,names:[],nodeType:"FunctionCall",src:"1882:41:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},functionReturnParameters:260,id:265,nodeType:"Return",src:"1875:48:1"}]},documentation:null,id:267,implemented:true,isConstructor:false,isDeclaredConst:true,modifiers:[],name:"getAssetCountForHash",nodeType:"FunctionDefinition",parameters:{id:257,nodeType:"ParameterList",parameters:[{constant:false,id:256,name:"hash",nodeType:"VariableDeclaration",scope:267,src:"1823:11:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_string_calldata_ptr",typeString:"string"},typeName:{id:255,name:"string",nodeType:"ElementaryTypeName",src:"1823:6:1",typeDescriptions:{typeIdentifier:"t_string_storage_ptr",typeString:"string"}},value:null,visibility:"internal"}],src:"1822:13:1"},payable:false,returnParameters:{id:260,nodeType:"ParameterList",parameters:[{constant:false,id:259,name:"",nodeType:"VariableDeclaration",scope:267,src:"1859:4:1",stateVariable:false,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:258,name:"uint",nodeType:"ElementaryTypeName",src:"1859:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"1858:6:1"},scope:268,src:"1793:137:1",stateMutability:"view",superFunction:79,visibility:"external"}],scope:269,src:"261:1671:1"}],src:"211:1722:1"};var compiler={name:"solc",version:"0.4.25+commit.59dbf8f1.Emscripten.clang"};var networks={"32768":{events:{},links:{},address:"0x495021fe1a48a5b0c85ef1abd68c42cdfc7cda08",transactionHash:"0xfa0c65099a1b24dece50b2ba1c410acba8c27eb138475f28533b56f37af4bd92"}};var schemaVersion="2.0.2";var updatedAt="2019-03-08T16:54:21.522Z";var AssetsRelay = {contractName:contractName,abi:abi,bytecode:bytecode,deployedBytecode:deployedBytecode,sourceMap:sourceMap,deployedSourceMap:deployedSourceMap,source:source,sourcePath:sourcePath,ast:ast,legacyAST:legacyAST,compiler:compiler,networks:networks,schemaVersion:schemaVersion,updatedAt:updatedAt};

  var CodenotaryBlockchainClient = function CodenotaryBlockchainClient(apiUrl) {
    var _this = this;

    _classCallCheck(this, CodenotaryBlockchainClient);

    _defineProperty(this, "isValidResponse", function (response) {
      return !!(response && response[0] && response[0] !== "0x0000000000000000000000000000000000000000");
    });

    _defineProperty(this, "verify",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(hash) {
        var response, valid, _response, owner, level, status, timestamp;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (hash) {
                  _context.next = 2;
                  break;
                }

                throw new Error("Hash argument is missing");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return _this.methods.verify(hash).call();

              case 5:
                response = _context.sent;
                valid = _this.isValidResponse(response);
                _response = _slicedToArray(response, 4), owner = _response[0], level = _response[1], status = _response[2], timestamp = _response[3];
                return _context.abrupt("return", {
                  valid: valid,
                  meta: {
                    owner: owner,
                    level: level,
                    status: status,
                    timestamp: timestamp
                  }
                });

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                throw new Error("Blockchain is not responding", _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    var provider = new Web3.providers.HttpProvider(apiUrl);
    var web3 = new Web3(apiUrl);
    web3.setProvider(provider);
    var contract = new web3.eth.Contract(AssetsRelay.abi, "0x495021fe1a48a5b0c85ef1abd68c42cdfc7cda08");
    this.methods = contract.methods;
  };

  //import FileReader from 'filereader'
  var fr = new FileReader();

  var fileReader = function fileReader(file, chunkSize, options) {
    var _ref = options || {},
        onSuccess = _ref.onSuccess,
        onError = _ref.onError,
        onChunk = _ref.onChunk;

    if (!(file instanceof File)) throw Error("Invalid file argument, provide a file.");
    if (!chunkSize) throw Error("Missing second argument: chunk size");
    var offset = 0;

    fr.onerror = function (err) {
      if (onError) onError(err);
    };

    fr.onload = function () {
      if (onChunk) onChunk({
        data: fr.result,
        offset: offset,
        fileSize: file.size,
        chunkSize: chunkSize
      });
      offset += chunkSize;
      seek(file, chunkSize, offset, onSuccess);
    };

    seek(file, chunkSize, offset, onSuccess);
  };

  var seek = function seek(file, chunkSize, offset, onSuccess) {
    if (offset >= file.size) {
      if (onSuccess) onSuccess({
        data: null,
        offset: file.size,
        fileSize: file.size,
        chunkSize: chunkSize
      });
      return;
    }

    var slice = file.slice(offset, offset + chunkSize);
    fr.readAsArrayBuffer(slice);
  };

  var ASSET_URL = "https://api.codenotary.io/foundation/v1";
  var BLOCKCHAIN_URL = "https://main.codenotary.io";
  var CHUNK_SIZE = 1024 * 1024 * 50;

  var progress = function progress(offset, size) {
    return Math.round(offset / size * 100);
  };

  var hashFile = function hashFile(file, onProgress) {
    var hash = sha256.create();
    if (!(file instanceof File)) throw Error("Invalid frist argument, provide a file.");
    return new Promise(function (resolve, reject) {
      fileReader(file, CHUNK_SIZE, {
        onSuccess: function onSuccess() {
          var h = hash.hex();
          resolve(h);
        },
        onChunk: function onChunk(_ref) {
          var offset = _ref.offset,
              fileSize = _ref.fileSize,
              data = _ref.data;
          hash.update(data);

          if (onProgress) {
            var percent = progress(offset, fileSize);
            onProgress(percent);
          }
        },
        onError: function onError(err) {
          return reject(err);
        }
      });
    });
  };

  var hashMeta = function hashMeta(owner, level, status, timestamp) {
    if (owner && level && status && timestamp) {
      var str = "".concat(owner, "-").concat(level, "-").concat(status, "-").concat(timestamp);
      return sha256(str);
    }

    return "";
  };

  var level = function level(value) {
    switch (value) {
      case 0:
        return "UNKNOWN";

      case 1:
        return "EMAIL_VERIFIED";

      case 2:
        return "SOCIAL_VERIFIED";

      case 3:
        return "ID_VERIFIED";

      case 4:
        return "LOCATION_VERIFIED";

      case 99:
        return "VCHAIN";

      case -1:
        return "DISABLED";

      default:
        return "UNKNOWN";
    }
  };

  var status = function status(value) {
    switch (value) {
      case 0:
        return "TRUSTED";

      case 1:
        return "UNTRUSTED";

      case 2:
        return "UNKNOWN";

      case 3:
        return "UNSUPPORTED";

      default:
        return "UNKNOWN";
    }
  };

  var Verify = function Verify(options) {
    var _this = this;

    _classCallCheck(this, Verify);

    _defineProperty(this, "hash",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(hash) {
        var response, valid, meta, asset, owner, _level, _status, timestamp, metaHash;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.blockchainClient.verify(hash);

              case 2:
                response = _context.sent;
                valid = response.valid, meta = response.meta;
                asset = {};

                if (valid) {
                  owner = meta.owner, _level = meta.level, _status = meta.status, timestamp = meta.timestamp;
                  metaHash = hashMeta(owner, _level, _status, timestamp);
                  asset = _this.asset(hash, metaHash);
                }

                return _context.abrupt("return", _objectSpread({
                  level: level(level),
                  status: status(status)
                }, asset));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "file",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(file, onProgress) {
        var hash;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return hashFile(file, onProgress);

              case 2:
                hash = _context2.sent;
                return _context2.abrupt("return", _this.hash(hash));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "asset",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(hash, metaHash) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.assetClient.getArtifactByHashAndMetaHash(hash, metaHash);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }());

    var blockchainUrl = options.blockchainUrl,
        assetUrl = options.assetUrl;
    if (!blockchainUrl) throw Error("Missing blockchain configuration");
    if (!assetUrl) throw Error("Missing asset configuration");
    this.blockchainClient = new CodenotaryBlockchainClient(this.blockchainUrl);
    this.assetClient = new CodenotaryFoundationClient(this.assetUrl);
  };

  var Jsvcn = function Jsvcn(options) {
    var _this = this;

    _classCallCheck(this, Jsvcn);

    _defineProperty(this, "verify", function (input, onProgress) {
      var blockchainUrl = _this.blockchainUrl,
          assetUrl = _this.assetUrl;
      var verify = new Verify({
        blockchainUrl: blockchainUrl,
        assetUrl: assetUrl
      });

      if (typeof input === "string") {
        return verify.hash(input);
      } else if (input instanceof File) {
        return verify.file(input, onProgress);
      } else {
        throw new Error("Invalid frist argument, please provide a hash or a File.");
      }
    });

    var confg = options || {}; // environment 

    this.env = getEnv(); // endpoints		

    this.assetUrl = confg.assetUrl || ASSET_URL;
    this.blockchainUrl = confg.blockchainUrl || BLOCKCHAIN_URL; // filereader
    // todo node.js env  fileReader = (env.is.client) ? browserFileReader : serverFileReader

    this.fileReader = confg.fileReader || fileReader;
  };

  return Jsvcn;

}));
