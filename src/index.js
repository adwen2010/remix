'use strict'
var VMDebugger = require('./ui/VmDebugger')
var Debugger = require('./ui/Ethdebugger')
var BasicPanel = require('./ui/BasicPanel')
var TraceManager = require('./trace/traceManager')
var CodeManager = require('./code/codeManager')
var disassembler = require('./code/disassembler')
var SourceMappingDecoder = require('./util/sourceMappingDecoder')
var AstWalker = require('./util/astWalker')
var decodeInfo = require('./solidity/decodeInfo')
var astHelper = require('./solidity/astHelper')

if (typeof (module) !== 'undefined' && typeof (module.exports) !== 'undefined') {
  module.exports = modules()
}

if (typeof (window) !== 'undefined') {
  window.remix = modules()
}

function modules () {
  return {
    code: {
      codeManager: CodeManager,
      disassembler: disassembler
    },
    trace: {
      traceManager: TraceManager
    },
    ui: {
      Debugger: Debugger,
      VMdebugger: VMDebugger,
      BasicPanel: BasicPanel
    },
    util: {
      SourceMappingDecoder: SourceMappingDecoder,
      AstWalker: AstWalker
    },
    solidity: {
      decodeInfo: decodeInfo,
      astHelper: astHelper
    }
  }
}

