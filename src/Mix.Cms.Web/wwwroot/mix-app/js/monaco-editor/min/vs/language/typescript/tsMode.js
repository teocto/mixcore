/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-typescript version: 4.5.0(3fb5fa051e0afd1fbc215d047bb5d9995d25b947)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-typescript/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};define("vs/language/typescript/workerManager",["require","exports","./fillers/monaco-editor-core"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerManager=void 0;var n=function(){function e(e,t){var r=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return r._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return r._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=r.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=r.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(r.editor.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(r)})).then((function(t){return e}))},e}();t.WorkerManager=n})),define("vs/language/typescript/lib/lib.index",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.libFileSet=void 0,t.libFileSet={},t.libFileSet["lib.d.ts"]=!0,t.libFileSet["lib.dom.d.ts"]=!0,t.libFileSet["lib.dom.iterable.d.ts"]=!0,t.libFileSet["lib.es2015.collection.d.ts"]=!0,t.libFileSet["lib.es2015.core.d.ts"]=!0,t.libFileSet["lib.es2015.d.ts"]=!0,t.libFileSet["lib.es2015.generator.d.ts"]=!0,t.libFileSet["lib.es2015.iterable.d.ts"]=!0,t.libFileSet["lib.es2015.promise.d.ts"]=!0,t.libFileSet["lib.es2015.proxy.d.ts"]=!0,t.libFileSet["lib.es2015.reflect.d.ts"]=!0,t.libFileSet["lib.es2015.symbol.d.ts"]=!0,t.libFileSet["lib.es2015.symbol.wellknown.d.ts"]=!0,t.libFileSet["lib.es2016.array.include.d.ts"]=!0,t.libFileSet["lib.es2016.d.ts"]=!0,t.libFileSet["lib.es2016.full.d.ts"]=!0,t.libFileSet["lib.es2017.d.ts"]=!0,t.libFileSet["lib.es2017.full.d.ts"]=!0,t.libFileSet["lib.es2017.intl.d.ts"]=!0,t.libFileSet["lib.es2017.object.d.ts"]=!0,t.libFileSet["lib.es2017.sharedmemory.d.ts"]=!0,t.libFileSet["lib.es2017.string.d.ts"]=!0,t.libFileSet["lib.es2017.typedarrays.d.ts"]=!0,t.libFileSet["lib.es2018.asyncgenerator.d.ts"]=!0,t.libFileSet["lib.es2018.asynciterable.d.ts"]=!0,t.libFileSet["lib.es2018.d.ts"]=!0,t.libFileSet["lib.es2018.full.d.ts"]=!0,t.libFileSet["lib.es2018.intl.d.ts"]=!0,t.libFileSet["lib.es2018.promise.d.ts"]=!0,t.libFileSet["lib.es2018.regexp.d.ts"]=!0,t.libFileSet["lib.es2019.array.d.ts"]=!0,t.libFileSet["lib.es2019.d.ts"]=!0,t.libFileSet["lib.es2019.full.d.ts"]=!0,t.libFileSet["lib.es2019.object.d.ts"]=!0,t.libFileSet["lib.es2019.string.d.ts"]=!0,t.libFileSet["lib.es2019.symbol.d.ts"]=!0,t.libFileSet["lib.es2020.bigint.d.ts"]=!0,t.libFileSet["lib.es2020.d.ts"]=!0,t.libFileSet["lib.es2020.full.d.ts"]=!0,t.libFileSet["lib.es2020.intl.d.ts"]=!0,t.libFileSet["lib.es2020.promise.d.ts"]=!0,t.libFileSet["lib.es2020.sharedmemory.d.ts"]=!0,t.libFileSet["lib.es2020.string.d.ts"]=!0,t.libFileSet["lib.es2020.symbol.wellknown.d.ts"]=!0,t.libFileSet["lib.es2021.d.ts"]=!0,t.libFileSet["lib.es2021.full.d.ts"]=!0,t.libFileSet["lib.es2021.promise.d.ts"]=!0,t.libFileSet["lib.es2021.string.d.ts"]=!0,t.libFileSet["lib.es2021.weakref.d.ts"]=!0,t.libFileSet["lib.es5.d.ts"]=!0,t.libFileSet["lib.es6.d.ts"]=!0,t.libFileSet["lib.esnext.d.ts"]=!0,t.libFileSet["lib.esnext.full.d.ts"]=!0,t.libFileSet["lib.esnext.intl.d.ts"]=!0,t.libFileSet["lib.esnext.promise.d.ts"]=!0,t.libFileSet["lib.esnext.string.d.ts"]=!0,t.libFileSet["lib.esnext.weakref.d.ts"]=!0,t.libFileSet["lib.scripthost.d.ts"]=!0,t.libFileSet["lib.webworker.d.ts"]=!0,t.libFileSet["lib.webworker.importscripts.d.ts"]=!0,t.libFileSet["lib.webworker.iterable.d.ts"]=!0}));var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};define("vs/language/typescript/languageFeatures",["require","exports","./monaco.contribution","./lib/lib.index","./fillers/monaco-editor-core"],(function(e,t,r,n,i){"use strict";var s;function o(e,t,r){if(void 0===r&&(r=0),"string"==typeof e)return e;if(void 0===e)return"";var n="";if(r){n+=t;for(var i=0;i<r;i++)n+="  "}if(n+=e.messageText,r++,e.next)for(var s=0,a=e.next;s<a.length;s++){n+=o(a[s],t,r)}return n}function a(e){return e?e.map((function(e){return e.text})).join(""):""}Object.defineProperty(t,"__esModule",{value:!0}),t.RenameAdapter=t.CodeActionAdaptor=t.FormatOnTypeAdapter=t.FormatAdapter=t.FormatHelper=t.Kind=t.OutlineAdapter=t.ReferenceAdapter=t.DefinitionAdapter=t.OccurrencesAdapter=t.QuickInfoAdapter=t.SignatureHelpAdapter=t.SuggestAdapter=t.DiagnosticsAdapter=t.LibFiles=t.Adapter=t.flattenDiagnosticMessageText=void 0,function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(s||(s={})),t.flattenDiagnosticMessageText=o;var l=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var r=e.getPositionAt(t.start),n=e.getPositionAt(t.start+t.length);return{startLineNumber:r.lineNumber,startColumn:r.column,endLineNumber:n.lineNumber,endColumn:n.column}},e}();t.Adapter=l;var u,c=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!n.libFileSet[e.path.slice(1)])},e.prototype.getOrCreateModel=function(e){var t=i.editor.getModel(e);return t||(this.isLibFile(e)&&this._hasFetchedLibFiles?i.editor.createModel(this._libFiles[e.path.slice(1)],"typescript",e):null)},e.prototype._containsLibFile=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];if(this.isLibFile(n))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},e}();t.LibFiles=c,function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(u||(u={}));var d=function(e){function t(t,r,n,s){var o=e.call(this,s)||this;o._libFiles=t,o._defaults=r,o._selector=n,o._disposables=[],o._listener=Object.create(null);var a=function(e){if(e.getModeId()===n){var t,r=function(){o._defaults.getDiagnosticsOptions().onlyVisible?e.isAttachedToEditor()&&o._doValidate(e):o._doValidate(e)},s=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout(r,500)})),a=e.onDidChangeAttached((function(){o._defaults.getDiagnosticsOptions().onlyVisible&&(e.isAttachedToEditor()?r():i.editor.setModelMarkers(e,o._selector,[]))}));o._listener[e.uri.toString()]={dispose:function(){s.dispose(),a.dispose(),clearTimeout(t)}},r()}},l=function(e){i.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(i.editor.onDidCreateModel((function(e){return a(e)}))),o._disposables.push(i.editor.onWillDisposeModel(l)),o._disposables.push(i.editor.onDidChangeModelLanguage((function(e){l(e.model),a(e.model)}))),o._disposables.push({dispose:function(){for(var e=0,t=i.editor.getModels();e<t.length;e++){var r=t[e];l(r)}}});var u=function(){for(var e=0,t=i.editor.getModels();e<t.length;e++){var r=t[e];l(r),a(r)}};return o._disposables.push(o._defaults.onDidChange(u)),o._disposables.push(o._defaults.onDidExtraLibsChange(u)),i.editor.getModels().forEach((function(e){return a(e)})),o}return __extends(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,n,s,o,a,l,u,c,d=this;return __generator(this,(function(p){switch(p.label){case 0:return[4,this._worker(e.uri)];case 1:return t=p.sent(),e.isDisposed()?[2]:(r=[],n=this._defaults.getDiagnosticsOptions(),s=n.noSyntaxValidation,o=n.noSemanticValidation,a=n.noSuggestionDiagnostics,s||r.push(t.getSyntacticDiagnostics(e.uri.toString())),o||r.push(t.getSemanticDiagnostics(e.uri.toString())),a||r.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(r)]);case 2:return!(l=p.sent())||e.isDisposed()?[2]:(u=l.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(d._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),c=u.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?i.Uri.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(c)]);case 3:return p.sent(),e.isDisposed()?[2]:(i.editor.setModelMarkers(e,this._selector,u.map((function(t){return d._convertDiagnostics(e,t)}))),[2])}}))}))},t.prototype._convertDiagnostics=function(e,t){var r=t.start||0,n=t.length||1,s=e.getPositionAt(r),a=s.lineNumber,l=s.column,u=e.getPositionAt(r+n),c=u.lineNumber,d=u.column,p=[];return t.reportsUnnecessary&&p.push(i.MarkerTag.Unnecessary),t.reportsDeprecated&&p.push(i.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:a,startColumn:l,endLineNumber:c,endColumn:d,message:o(t.messageText,"\n"),code:t.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){var r=this;if(!t)return[];var n=[];return t.forEach((function(t){var s=e;if(t.file){var a=i.Uri.parse(t.file.fileName);s=r._libFiles.getOrCreateModel(a)}if(s){var l=t.start||0,u=t.length||1,c=s.getPositionAt(l),d=c.lineNumber,p=c.column,g=s.getPositionAt(l+u),f=g.lineNumber,b=g.column;n.push({resource:s.uri,startLineNumber:d,startColumn:p,endLineNumber:f,endColumn:b,message:o(t.messageText,"\n")})}})),n},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case u.Error:return i.MarkerSeverity.Error;case u.Message:return i.MarkerSeverity.Info;case u.Warning:return i.MarkerSeverity.Warning;case u.Suggestion:return i.MarkerSeverity.Hint}return i.MarkerSeverity.Info},t}(l);t.DiagnosticsAdapter=d;var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,r,n,s){return __awaiter(this,void 0,void 0,(function(){var n,s,o,a,l,u;return __generator(this,(function(c){switch(c.label){case 0:return n=e.getWordUntilPosition(r),s=new i.Range(r.lineNumber,n.startColumn,r.lineNumber,n.endColumn),o=e.uri,a=e.getOffsetAt(r),[4,this._worker(o)];case 1:return l=c.sent(),e.isDisposed()?[2]:[4,l.getCompletionsAtPosition(o.toString(),a)];case 2:return!(u=c.sent())||e.isDisposed()?[2]:[2,{suggestions:u.entries.map((function(n){var l,u=s;if(n.replacementSpan){var c=e.getPositionAt(n.replacementSpan.start),d=e.getPositionAt(n.replacementSpan.start+n.replacementSpan.length);u=new i.Range(c.lineNumber,c.column,d.lineNumber,d.column)}var p=[];return-1!==(null===(l=n.kindModifiers)||void 0===l?void 0:l.indexOf("deprecated"))&&p.push(i.languages.CompletionItemTag.Deprecated),{uri:o,position:r,offset:a,range:u,label:n.name,insertText:n.name,sortText:n.sortText,kind:t.convertKind(n.kind),tags:p}}))}]}}))}))},t.prototype.resolveCompletionItem=function(e,r){return __awaiter(this,void 0,void 0,(function(){var r,n,i,s,o;return __generator(this,(function(l){switch(l.label){case 0:return n=(r=e).uri,i=r.position,s=r.offset,[4,this._worker(n)];case 1:return[4,l.sent().getCompletionEntryDetails(n.toString(),s,r.label)];case 2:return(o=l.sent())?[2,{uri:n,position:i,label:o.name,kind:t.convertKind(o.kind),detail:a(o.displayParts),documentation:{value:t.createDocumentationString(o)}}]:[2,r]}}))}))},t.convertKind=function(e){switch(e){case S.primitiveType:case S.keyword:return i.languages.CompletionItemKind.Keyword;case S.variable:case S.localVariable:return i.languages.CompletionItemKind.Variable;case S.memberVariable:case S.memberGetAccessor:case S.memberSetAccessor:return i.languages.CompletionItemKind.Field;case S.function:case S.memberFunction:case S.constructSignature:case S.callSignature:case S.indexSignature:return i.languages.CompletionItemKind.Function;case S.enum:return i.languages.CompletionItemKind.Enum;case S.module:return i.languages.CompletionItemKind.Module;case S.class:return i.languages.CompletionItemKind.Class;case S.interface:return i.languages.CompletionItemKind.Interface;case S.warning:return i.languages.CompletionItemKind.File}return i.languages.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=a(e.documentation);if(e.tags)for(var r=0,n=e.tags;r<n.length;r++){t+="\n\n"+g(n[r])}return t},t}(l);function g(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var r=e.text,n=r[0],i=r.slice(1);t+="`"+n.text+"`",i.length>0&&(t+=" — "+i.map((function(e){return e.text})).join(" "))}else e.text&&(t+=" — "+e.text);return t}t.SuggestAdapter=p;var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return __extends(t,e),t._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case i.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},t.prototype.provideSignatureHelp=function(e,r,n,i){return __awaiter(this,void 0,void 0,(function(){var n,s,o,l,u;return __generator(this,(function(c){switch(c.label){case 0:return n=e.uri,s=e.getOffsetAt(r),[4,this._worker(n)];case 1:return o=c.sent(),e.isDisposed()?[2]:[4,o.getSignatureHelpItems(n.toString(),s,{triggerReason:t._toSignatureHelpTriggerReason(i)})];case 2:return!(l=c.sent())||e.isDisposed()?[2]:(u={activeSignature:l.selectedItemIndex,activeParameter:l.argumentIndex,signatures:[]},l.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:a(e.documentation)},t.label+=a(e.prefixDisplayParts),e.parameters.forEach((function(r,n,i){var s=a(r.displayParts),o={label:s,documentation:{value:a(r.documentation)}};t.label+=s,t.parameters.push(o),n<i.length-1&&(t.label+=a(e.separatorDisplayParts))})),t.label+=a(e.suffixDisplayParts),u.signatures.push(t)})),[2,{value:u,dispose:function(){}}])}}))}))},t}(l);t.SignatureHelpAdapter=f;var b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideHover=function(e,t,r){return __awaiter(this,void 0,void 0,(function(){var r,n,i,s,o,l,u;return __generator(this,(function(c){switch(c.label){case 0:return r=e.uri,n=e.getOffsetAt(t),[4,this._worker(r)];case 1:return i=c.sent(),e.isDisposed()?[2]:[4,i.getQuickInfoAtPosition(r.toString(),n)];case 2:return!(s=c.sent())||e.isDisposed()?[2]:(o=a(s.documentation),l=s.tags?s.tags.map((function(e){return g(e)})).join("  \n\n"):"",u=a(s.displayParts),[2,{range:this._textSpanToRange(e,s.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}])}}))}))},t}(l);t.QuickInfoAdapter=b;var h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentHighlights=function(e,t,r){return __awaiter(this,void 0,void 0,(function(){var r,n,s,o,a=this;return __generator(this,(function(l){switch(l.label){case 0:return r=e.uri,n=e.getOffsetAt(t),[4,this._worker(r)];case 1:return s=l.sent(),e.isDisposed()?[2]:[4,s.getOccurrencesAtPosition(r.toString(),n)];case 2:return!(o=l.sent())||e.isDisposed()?[2]:[2,o.map((function(t){return{range:a._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?i.languages.DocumentHighlightKind.Write:i.languages.DocumentHighlightKind.Text}}))]}}))}))},t}(l);t.OccurrencesAdapter=h;var m=function(e){function t(t,r){var n=e.call(this,r)||this;return n._libFiles=t,n}return __extends(t,e),t.prototype.provideDefinition=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var n,s,o,a,l,u,c,d,p,g,f,b;return __generator(this,(function(h){switch(h.label){case 0:return n=e.uri,s=e.getOffsetAt(t),[4,this._worker(n)];case 1:return o=h.sent(),e.isDisposed()?[2]:[4,o.getDefinitionAtPosition(n.toString(),s)];case 2:return!(a=h.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(a.map((function(e){return i.Uri.parse(e.fileName)})))];case 3:if(h.sent(),e.isDisposed())return[2];for(l=[],u=0,c=a;u<c.length;u++)if(d=c[u],p=i.Uri.parse(d.fileName),g=this._libFiles.getOrCreateModel(p))l.push({uri:p,range:this._textSpanToRange(g,d.textSpan)});else if(f=r.typescriptDefaults.getExtraLibs()[d.fileName])return b=i.editor.createModel(f.content,"typescript",p),[2,{uri:p,range:this._textSpanToRange(b,d.textSpan)}];return[2,l]}}))}))},t}(l);t.DefinitionAdapter=m;var _=function(e){function t(t,r){var n=e.call(this,r)||this;return n._libFiles=t,n}return __extends(t,e),t.prototype.provideReferences=function(e,t,r,n){return __awaiter(this,void 0,void 0,(function(){var r,n,s,o,a,l,u,c,d,p;return __generator(this,(function(g){switch(g.label){case 0:return r=e.uri,n=e.getOffsetAt(t),[4,this._worker(r)];case 1:return s=g.sent(),e.isDisposed()?[2]:[4,s.getReferencesAtPosition(r.toString(),n)];case 2:return!(o=g.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return i.Uri.parse(e.fileName)})))];case 3:if(g.sent(),e.isDisposed())return[2];for(a=[],l=0,u=o;l<u.length;l++)c=u[l],d=i.Uri.parse(c.fileName),(p=this._libFiles.getOrCreateModel(d))&&a.push({uri:d,range:this._textSpanToRange(p,c.textSpan)});return[2,a]}}))}))},t}(l);t.ReferenceAdapter=_;var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentSymbols=function(e,t){return __awaiter(this,void 0,void 0,(function(){var t,r,n,s,o,a=this;return __generator(this,(function(l){switch(l.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return r=l.sent(),e.isDisposed()?[2]:[4,r.getNavigationBarItems(t.toString())];case 2:return!(n=l.sent())||e.isDisposed()?[2]:(s=function(t,r,n){var o={name:r.text,detail:"",kind:y[r.kind]||i.languages.SymbolKind.Variable,range:a._textSpanToRange(e,r.spans[0]),selectionRange:a._textSpanToRange(e,r.spans[0]),tags:[]};if(n&&(o.containerName=n),r.childItems&&r.childItems.length>0)for(var l=0,u=r.childItems;l<u.length;l++){var c=u[l];s(t,c,o.name)}t.push(o)},o=[],n.forEach((function(e){return s(o,e)})),[2,o])}}))}))},t}(l);t.OutlineAdapter=v;var S=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}();t.Kind=S;var y=Object.create(null);y[S.module]=i.languages.SymbolKind.Module,y[S.class]=i.languages.SymbolKind.Class,y[S.enum]=i.languages.SymbolKind.Enum,y[S.interface]=i.languages.SymbolKind.Interface,y[S.memberFunction]=i.languages.SymbolKind.Method,y[S.memberVariable]=i.languages.SymbolKind.Property,y[S.memberGetAccessor]=i.languages.SymbolKind.Property,y[S.memberSetAccessor]=i.languages.SymbolKind.Property,y[S.variable]=i.languages.SymbolKind.Variable,y[S.const]=i.languages.SymbolKind.Variable,y[S.localVariable]=i.languages.SymbolKind.Variable,y[S.variable]=i.languages.SymbolKind.Variable,y[S.function]=i.languages.SymbolKind.Function,y[S.localFunction]=i.languages.SymbolKind.Function;var w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:s.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(l);t.FormatHelper=w;var F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,r,n){return __awaiter(this,void 0,void 0,(function(){var n,i,s,o,a,l=this;return __generator(this,(function(u){switch(u.label){case 0:return n=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(n)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsForRange(n.toString(),i,s,w._convertOptions(r))];case 2:return!(a=u.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return l._convertTextChanges(e,t)}))]}}))}))},t}(w);t.FormatAdapter=F;var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,r,n,i){return __awaiter(this,void 0,void 0,(function(){var i,s,o,a,l=this;return __generator(this,(function(u){switch(u.label){case 0:return i=e.uri,s=e.getOffsetAt(t),[4,this._worker(i)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsAfterKeystroke(i.toString(),s,r,w._convertOptions(n))];case 2:return!(a=u.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return l._convertTextChanges(e,t)}))]}}))}))},t}(w);t.FormatOnTypeAdapter=x;var k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideCodeActions=function(e,t,r,n){return __awaiter(this,void 0,void 0,(function(){var n,i,s,o,a,l,u,c=this;return __generator(this,(function(d){switch(d.label){case 0:return n=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=w._convertOptions(e.getOptions()),a=r.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(n)];case 1:return l=d.sent(),e.isDisposed()?[2]:[4,l.getCodeFixesAtPosition(n.toString(),i,s,a,o)];case 2:return!(u=d.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:u.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return c._tsCodeFixActionToMonacoCodeAction(e,r,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,r){for(var n=[],i=0,s=r.changes;i<s.length;i++)for(var o=0,a=s[i].textChanges;o<a.length;o++){var l=a[o];n.push({resource:e.uri,edit:{range:this._textSpanToRange(e,l.span),text:l.newText}})}return{title:r.description,edit:{edits:n},diagnostics:t.markers,kind:"quickfix"}},t}(w);t.CodeActionAdaptor=k;var A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideRenameEdits=function(e,t,r,n){return __awaiter(this,void 0,void 0,(function(){var n,s,o,a,l,u,c,d,p,g,f,b;return __generator(this,(function(h){switch(h.label){case 0:return n=e.uri,s=n.toString(),o=e.getOffsetAt(t),[4,this._worker(n)];case 1:return a=h.sent(),e.isDisposed()?[2]:[4,a.getRenameInfo(s,o,{allowRenameOfImportPath:!1})];case 2:if(!1===(l=h.sent()).canRename)return[2,{edits:[],rejectReason:l.localizedErrorMessage}];if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(s,o,!1,!1,!1)];case 3:if(!(u=h.sent())||e.isDisposed())return[2];for(c=[],d=0,p=u;d<p.length;d++){if(g=p[d],f=i.Uri.parse(g.fileName),!(b=i.editor.getModel(f)))throw new Error("Unknown URI "+f+".");c.push({resource:f,edit:{range:this._textSpanToRange(b,g.textSpan),text:r}})}return[2,{edits:c}]}}))}))},t}(l);t.RenameAdapter=A})),define("vs/language/typescript/tsMode",["require","exports","./workerManager","./languageFeatures","./fillers/monaco-editor-core"],(function(e,t,r,n,i){"use strict";var s,o;function a(e,t){var s=new r.WorkerManager(t,e),o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s.getLanguageServiceWorker.apply(s,e)},a=new n.LibFiles(o);return i.languages.registerCompletionItemProvider(t,new n.SuggestAdapter(o)),i.languages.registerSignatureHelpProvider(t,new n.SignatureHelpAdapter(o)),i.languages.registerHoverProvider(t,new n.QuickInfoAdapter(o)),i.languages.registerDocumentHighlightProvider(t,new n.OccurrencesAdapter(o)),i.languages.registerDefinitionProvider(t,new n.DefinitionAdapter(a,o)),i.languages.registerReferenceProvider(t,new n.ReferenceAdapter(a,o)),i.languages.registerDocumentSymbolProvider(t,new n.OutlineAdapter(o)),i.languages.registerDocumentRangeFormattingEditProvider(t,new n.FormatAdapter(o)),i.languages.registerOnTypeFormattingEditProvider(t,new n.FormatOnTypeAdapter(o)),i.languages.registerCodeActionProvider(t,new n.CodeActionAdaptor(o)),i.languages.registerRenameProvider(t,new n.RenameAdapter(o)),new n.DiagnosticsAdapter(a,e,t,o),o}Object.defineProperty(t,"__esModule",{value:!0}),t.getTypeScriptWorker=t.getJavaScriptWorker=t.setupJavaScript=t.setupTypeScript=void 0,t.setupTypeScript=function(e){o=a(e,"typescript")},t.setupJavaScript=function(e){s=a(e,"javascript")},t.getJavaScriptWorker=function(){return new Promise((function(e,t){if(!s)return t("JavaScript not registered!");e(s)}))},t.getTypeScriptWorker=function(){return new Promise((function(e,t){if(!o)return t("TypeScript not registered!");e(o)}))}}));