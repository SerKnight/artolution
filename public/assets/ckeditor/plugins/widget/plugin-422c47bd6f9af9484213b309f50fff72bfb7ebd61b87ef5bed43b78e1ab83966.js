"use strict";!function(){function e(e){this.editor=e,this.registered={},this.instances={},this.selected=[],this.focused=null,this.widgetHoldingFocusedEditable=null,this._={nextId:0,upcasts:[],upcastCallbacks:[],filters:{}},x(this),L(this),S(this),N(this),K(this),A(this)}function t(e,i,n,a,r){var o=e.editor;CKEDITOR.tools.extend(this,a,{editor:o,id:i,inline:"span"==n.getParent().getName(),element:n,data:CKEDITOR.tools.extend({},"function"==typeof a.defaults?a.defaults():a.defaults),dataReady:!1,inited:!1,ready:!1,edit:t.prototype.edit,focusedEditable:null,definition:a,repository:e,draggable:a.draggable!==!1,_:{downcastFn:a.downcast&&"string"==typeof a.downcast?a.downcasts[a.downcast]:a.downcast}},!0),e.fire("instanceCreated",this),Q(this,a),this.init&&this.init(),this.inited=!0,Z(this,r),this.isInited()&&o.editable().contains(this.wrapper)&&(this.ready=!0,this.fire("ready"))}function i(e,t,i){CKEDITOR.dom.element.call(this,t.$),this.editor=e;var n=this.filter=i.filter;CKEDITOR.dtd[this.getName()].p?(this.enterMode=n?n.getAllowedEnterMode(e.enterMode):e.enterMode,this.shiftEnterMode=n?n.getAllowedEnterMode(e.shiftEnterMode,!0):e.shiftEnterMode):this.enterMode=this.shiftEnterMode=CKEDITOR.ENTER_BR}function n(e){var t,i,n,a=e.widgets.registered;for(i in a)t=a[i],n=t.button,n&&e.ui.addButton&&e.ui.addButton(CKEDITOR.tools.capitalize(t.name,!0),{label:n,command:t.name,toolbar:"insert,10"})}function a(e,t){e.addCommand(t.name,{exec:function(){function i(){e.widgets.finalizeCreation(d)}var n=e.widgets.focused;if(n&&n.name==t.name)n.edit();else if(t.insert)t.insert();else if(t.template){var a,r="function"==typeof t.defaults?t.defaults():t.defaults,o=CKEDITOR.dom.element.createFromHtml(t.template.output(r)),s=e.widgets.wrapElement(o,t.name),d=new CKEDITOR.dom.documentFragment(s.getDocument());if(d.append(s),a=e.widgets.initOn(o,t),!a)return void i();var l=a.once("edit",function(t){t.data.dialog?a.once("dialog",function(t){var n,r,o=t.data;n=o.once("ok",i,null,null,20),r=o.once("cancel",function(){e.widgets.destroy(a,!0)}),o.once("hide",function(){n.removeListener(),r.removeListener()})}):i()},null,null,999);a.edit(),l.removeListener()}},refresh:function(e,t){this.setState(p(e.editable(),t.blockLimit)?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_OFF)},context:"div",allowedContent:t.allowedContent,requiredContent:t.requiredContent,contentForms:t.contentForms,contentTransformations:t.contentTransformations})}function r(e,t){var i,n=t.upcast;if(n)if("string"==typeof n)for(i=n.split(",");i.length;)e._.upcasts.push([t.upcasts[i.pop()],t.name]);else e._.upcasts.push([n,t.name])}function o(e,t){e.focused=null,t.isInited()&&(e.fire("widgetBlurred",{widget:t}),t.setFocused(!1))}function s(e){var t=e.data;if("wysiwyg"==this.editor.mode){var i,n,a,r,o=this.editor.editable(),s=this.instances;if(o){for(n in s)o.contains(s[n].wrapper)||this.destroy(s[n],!0);if(t&&t.initOnlyNew)i=this.initOnAll();else{var d=o.find(".cke_widget_wrapper");for(i=[],n=0,a=d.count();n<a;n++)r=d.getItem(n),this.getByElement(r,!0)||f(r,b)||(r.addClass("cke_widget_new"),i.push(this.initOn(r.getFirst(w))))}t&&t.focusInited&&1==i.length&&i[0].focus()}}}function d(e){var t=e.parent;t.type==CKEDITOR.NODE_ELEMENT&&t.attributes["data-cke-widget-wrapper"]&&t.replaceWith(e)}function l(e,t){for(var i,n,a=t.find(".cke_widget_wrapper"),r=0,o=a.count();r<o;++r)i=a.getItem(r),n=i.getFirst(w),n.type==CKEDITOR.NODE_ELEMENT&&n.data("widget")?(n.replace(i),e.wrapElement(n)):i.remove()}function c(e,t,i){if(!i.allowedContent)return null;var n=this._.filters[e];n||(this._.filters[e]=n={});var a=n[t];return a||(n[t]=a=new CKEDITOR.filter(i.allowedContent)),a}function u(e){var t=[],i=e._.upcasts,n=e._.upcastCallbacks;return{toBeWrapped:t,iterator:function(e){var a,r,o,s,d,l;if("data-cke-widget-wrapper"in e.attributes)return e=e.getFirst(m),e&&t.push([e]),!1;if("data-widget"in e.attributes)return t.push([e]),!1;if(d=i.length){if(e.attributes["data-cke-widget-upcasted"])return!1;for(s=0,l=n.length;s<l;++s)if(n[s](e)===!1)return;for(s=0;s<d;++s)if(a=i[s],o={},r=a[0](e,o))return r instanceof CKEDITOR.htmlParser.element&&(e=r),e.attributes["data-cke-widget-data"]=encodeURIComponent(JSON.stringify(o)),e.attributes["data-cke-widget-upcasted"]=1,t.push([e,a[1]]),!1}}}}function f(e,t){for(var i=e;i=i.getParent();)if(t(i))return!0;return!1}function p(e,t){return!t||t.equals(e)?null:C(t)?t:p(e,t.getParent())}function g(e){return{tabindex:-1,contenteditable:"false","data-cke-widget-wrapper":1,"data-cke-filter":"off","class":"cke_widget_wrapper cke_widget_new cke_widget_"+(e?"inline":"block")}}function h(e,t,i){if(e.type==CKEDITOR.NODE_ELEMENT){var n=CKEDITOR.dtd[e.name];if(n&&!n[i.name]){var a=e.split(t),r=e.parent;return t=a.getIndex(),e.children.length||(t-=1,e.remove()),a.children.length||a.remove(),h(r,t,i)}}e.add(i,t)}function m(e){return e.type==CKEDITOR.NODE_ELEMENT&&!!e.attributes["data-widget"]}function w(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.hasAttribute("data-widget")}function E(e,t){return"boolean"==typeof e.inline?e.inline:!!CKEDITOR.dtd.$inline[t]}function v(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.attributes["data-cke-widget-wrapper"]}function k(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.hasAttribute("data-cke-widget-wrapper")}function C(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.hasAttribute("data-cke-widget-editable")}function b(e){return e.hasAttribute("data-cke-temp")}function _(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.hasAttribute("data-cke-widget-drag-handler")}function T(e,t,i){t.focus(),e.fire("saveSnapshot"),e.fire("lockSnapshot",{dontUpdate:!0}),i.select();var n=t.wrapper.getOuterHtml();t.wrapper.remove(),e.widgets.destroy(t,!0),e.execCommand("paste",n),e.fire("unlockSnapshot")}function y(e,t){var i,n=t.data.$,a=e.createRange();if(t.data.testRange)return t.data.testRange;if(document.caretRangeFromPoint)i=e.document.$.caretRangeFromPoint(n.clientX,n.clientY),a.setStart(CKEDITOR.dom.node(i.startContainer),i.startOffset),a.collapse(!0);else if(n.rangeParent)a.setStart(CKEDITOR.dom.node(n.rangeParent),n.rangeOffset),a.collapse(!0);else{if(!document.body.createTextRange)return null;i=e.document.getBody().$.createTextRange(),i.moveToPoint(n.clientX,n.clientY);var r="cke-temp-"+(new Date).getTime();i.pasteHTML('<span id="'+r+'">\u200b</span>');var o=e.document.getById(r);a.moveToPosition(o,CKEDITOR.POSITION_BEFORE_START),o.remove()}return a}function O(e,t){var i,n=e.focusedEditable;if(t==CKEDITOR.CTRL+65){var a=n.getBogus();return i=e.editor.createRange(),i.selectNodeContents(n),a&&i.setEndAt(a,CKEDITOR.POSITION_BEFORE_START),i.select(),!1}if(8==t||46==t){var r=e.editor.getSelection().getRanges();return i=r[0],!(1==r.length&&i.collapsed&&i.checkBoundaryOfElement(n,CKEDITOR[8==t?"START":"END"]))}}function D(e,t,i,n){var a=e.editor;if(a.fire("lockSnapshot"),i){var r=i.data("cke-widget-editable"),o=t.editables[r];e.widgetHoldingFocusedEditable=t,t.focusedEditable=o,i.addClass("cke_widget_editable_focused"),o.filter&&a.setActiveFilter(o.filter),a.setActiveEnterMode(o.enterMode,o.shiftEnterMode)}else n||t.focusedEditable.removeClass("cke_widget_editable_focused"),t.focusedEditable=null,e.widgetHoldingFocusedEditable=null,a.setActiveFilter(null),a.setActiveEnterMode(null,null);a.fire("unlockSnapshot")}function R(e){e.contextMenu&&e.contextMenu.addListener(function(t){var i=e.widgets.getByElement(t,!0);if(i)return i.fire("contextMenu",{})})}function I(e,t){return CKEDITOR.tools.trim(t)}function K(e){var t=e.editor,i=CKEDITOR.plugins.lineutils;t.on("contentDom",function(){var n=t.editable(),a=CKEDITOR.env.ie&&CKEDITOR.env.version<9||n.isInline()?n:t.document;n.attachListener(a,"drop",function(i){var n,a,r,o=i.data.$.dataTransfer.getData("text");if(o){try{n=JSON.parse(o)}catch(e){return}"cke-widget"==n.type&&(i.data.preventDefault(),n.editor==t.name&&(a=e.instances[n.id])&&(r=y(t,i),r&&(CKEDITOR.env.gecko?setTimeout(T,0,t,a,r):T(t,a,r))))}}),CKEDITOR.tools.extend(e,{finder:new i.finder(t,{lookups:{"default":function(e){if(!e.is(CKEDITOR.dtd.$listItem)&&e.is(CKEDITOR.dtd.$block)){for(;e;){if(C(e))return;e=e.getParent()}return CKEDITOR.LINEUTILS_BEFORE|CKEDITOR.LINEUTILS_AFTER}}}}),locator:new i.locator(t),liner:new i.liner(t,{lineStyle:{cursor:"move !important","border-top-color":"#666"},tipLeftStyle:{"border-left-color":"#666"},tipRightStyle:{"border-right-color":"#666"}})},!0)})}function S(e){var t=e.editor;t.on("contentDom",function(){var i,n,a=t.editable(),r=a.isInline()?a:t.document;a.attachListener(r,"mousedown",function(t){var a=t.data.getTarget();if(!a.type)return!1;if(i=e.getByElement(a),n=0,i){if(i.inline&&a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-drag-handler"))return void(n=1);p(i.wrapper,a)?i=null:(t.data.preventDefault(),CKEDITOR.env.ie||i.focus())}}),a.attachListener(r,"mouseup",function(){i&&n&&(n=0,i.focus())}),CKEDITOR.env.ie&&a.attachListener(r,"mouseup",function(){i&&setTimeout(function(){i.focus(),i=null})})}),t.on("doubleclick",function(t){var i=e.getByElement(t.data.element);if(i&&!p(i.wrapper,t.data.element))return i.fire("doubleclick",{element:t.data.element})},null,null,1)}function N(e){var t=e.editor;t.on("key",function(t){var i,n=e.focused,a=e.widgetHoldingFocusedEditable;return n?i=n.fire("key",{keyCode:t.data.keyCode}):a&&(i=O(a,t.data.keyCode)),i},null,null,1)}function A(e){function t(t){e.focused&&$(e.focused,"cut"==t.name)}var i=e.editor;i.on("contentDom",function(){var e=i.editable();e.attachListener(e,"copy",t),e.attachListener(e,"cut",t)})}function L(e){var t=e.editor;t.on("selectionCheck",function(){e.fire("checkSelection")}),e.on("checkSelection",e.checkSelection,e),t.on("selectionChange",function(i){var n=p(t.editable(),i.data.selection.getStartElement()),a=n&&e.getByElement(n),r=e.widgetHoldingFocusedEditable;r?r===a&&r.focusedEditable.equals(n)||(D(e,r,null),a&&n&&D(e,a,n)):a&&n&&D(e,a,n)}),t.on("dataReady",function(){H(e).commit()}),t.on("blur",function(){var t;(t=e.focused)&&o(e,t),(t=e.widgetHoldingFocusedEditable)&&D(e,t,null)})}function x(e){F(e),M(e),e.on("checkWidgets",s),e.editor.on("contentDomInvalidated",e.checkWidgets,e)}function M(e){var t=e.editor,i={};t.on("toDataFormat",function(t){var n=CKEDITOR.tools.getNextNumber(),a=[];t.data.downcastingSessionId=n,i[n]=a,t.data.dataValue.forEach(function(t){var i,n,r=t.attributes;if("data-cke-widget-id"in r)i=e.instances[r["data-cke-widget-id"]],i&&(n=t.getFirst(m),a.push({wrapper:t,element:n,widget:i,editables:{}}),"1"!=n.attributes["data-cke-widget-keep-attr"]&&delete n.attributes["data-widget"]);else if("data-cke-widget-editable"in r)return a[a.length-1].editables[r["data-cke-widget-editable"]]=t,!1},CKEDITOR.NODE_ELEMENT,!0)},null,null,8),t.on("toDataFormat",function(e){if(e.data.downcastingSessionId)for(var t,n,a,r,o,s,d=i[e.data.downcastingSessionId];t=d.shift();){n=t.widget,a=t.element,r=n._.downcastFn&&n._.downcastFn.call(n,a);for(s in t.editables)o=t.editables[s],delete o.attributes.contenteditable,o.setHtml(n.editables[s].getData());r||(r=a),t.wrapper.replaceWith(r)}},null,null,13),t.on("contentDomUnload",function(){e.destroyAll(!0)})}function F(e){function t(){a.fire("lockSnapshot"),e.checkWidgets({initOnlyNew:!0,focusInited:i}),a.fire("unlockSnapshot")}var i,n,a=e.editor;a.on("toHtml",function(t){var n,a=u(e);for(t.data.dataValue.forEach(a.iterator,CKEDITOR.NODE_ELEMENT,!0);n=a.toBeWrapped.pop();)d(n[0]),e.wrapElement(n[0],n[1]);i=1==t.data.dataValue.children.length&&v(t.data.dataValue.children[0])},null,null,8),a.on("dataReady",function(){n&&l(e,a.editable()),n=0,e.destroyAll(!0),e.initOnAll()}),a.on("loadSnapshot",function(t){/data-cke-widget/.test(t.data)&&(n=1),e.destroyAll(!0)},null,null,9),a.on("paste",function(e){e.data.dataValue=e.data.dataValue.replace(ne,I)}),a.on("insertText",t,null,null,999),a.on("insertHtml",t,null,null,999)}function H(e){var t=e.selected,i=[],n=t.slice(0),a=null;return{select:function(e){CKEDITOR.tools.indexOf(t,e)<0&&i.push(e);var a=CKEDITOR.tools.indexOf(n,e);return a>=0&&n.splice(a,1),this},focus:function(e){return a=e,this},commit:function(){var r,s=e.focused!==a;for(e.editor.fire("lockSnapshot"),s&&(r=e.focused)&&o(e,r);r=n.pop();)t.splice(CKEDITOR.tools.indexOf(t,r),1),r.isInited()&&r.setSelected(!1);for(s&&a&&(e.focused=a,e.fire("widgetFocused",{widget:a}),a.setFocused(!0));r=i.pop();)t.push(r),r.setSelected(!0);e.editor.fire("unlockSnapshot")}}}function P(e,t,i){var n,a=0,r=W(t),o=e.data.classes||{};if(r){for(o=CKEDITOR.tools.clone(o);n=r.pop();)i?o[n]||(a=o[n]=1):o[n]&&(delete o[n],a=1);a&&e.setData("classes",o)}}function B(e){e.cancel()}function $(e,t){var i=e.editor,n=i.document;if(!n.getById("cke_copybin")){var a=i.blockless||CKEDITOR.env.ie?"span":"div",r=n.createElement(a),o=n.createElement(a),s=CKEDITOR.env.ie&&CKEDITOR.env.version<9;o.setAttributes({id:"cke_copybin","data-cke-temp":"1"}),r.setStyles({position:"absolute",width:"1px",height:"1px",overflow:"hidden"}),r.setStyle("ltr"==i.config.contentsLangDirection?"left":"right","-5000px"),r.setHtml('<span data-cke-copybin-start="1">\u200b</span>'+e.wrapper.getOuterHtml()+'<span data-cke-copybin-end="1">\u200b</span>'),i.fire("saveSnapshot"),i.fire("lockSnapshot"),o.append(r),i.editable().append(o);var d=i.on("selectionChange",B,null,null,0),l=e.repository.on("checkSelection",B,null,null,0);if(s)var c=n.getDocumentElement().$,u=c.scrollTop;var f=i.createRange();f.selectNodeContents(r),f.select(),s&&(c.scrollTop=u),setTimeout(function(){t||e.focus(),o.remove(),d.removeListener(),l.removeListener(),i.fire("unlockSnapshot"),t&&(e.repository.del(e),i.fire("saveSnapshot"))},100)}}function W(e){var t=e.getDefinition().attributes,i=t&&t["class"];return i?i.split(/\s+/):null}function U(){var e=CKEDITOR.document.getActive(),t=this.editor,i=t.editable();(i.isInline()?i:t.document.getWindow().getFrame()).equals(e)&&t.focusManager.focus(i)}function V(){CKEDITOR.env.gecko&&this.editor.unlockSelection(),CKEDITOR.env.webkit||(this.editor.forceNextSelectionCheck(),this.editor.selectionChange(1))}function q(e){var t=null;e.on("data",function(){var e,i=this.data.classes;if(t!=i){for(e in t)i&&i[e]||this.removeClass(e);for(e in i)this.addClass(e);t=i}})}function z(e){if(e.draggable){var t,i=e.editor,n=e.wrapper.findOne(".cke_widget_drag_handler_container");n?t=n.findOne("img"):(n=new CKEDITOR.dom.element("span",i.document),n.setAttributes({"class":"cke_reset cke_widget_drag_handler_container",style:"background:rgba(220,220,220,0.5);background-image:url("+i.plugins.widget.path+"images/handle.png)"}),t=new CKEDITOR.dom.element("img",i.document),t.setAttributes({"class":"cke_reset cke_widget_drag_handler","data-cke-widget-drag-handler":"1",src:CKEDITOR.tools.transparentImageData,width:ie,title:i.lang.widget.move,height:ie}),e.inline&&t.setAttribute("draggable","true"),n.append(t),e.wrapper.append(n)),e.wrapper.on("mouseenter",e.updateDragHandlerPosition,e),setTimeout(function(){e.on("data",e.updateDragHandlerPosition,e)},50),e.inline?t.on("dragstart",function(t){t.data.$.dataTransfer.setData("text",JSON.stringify({type:"cke-widget",editor:i.name,id:e.id}))}):t.on("mousedown",J,e),e.dragHandlerContainer=n}}function J(){function e(){var e;for(u.reset();e=d.pop();)e.removeListener();Y.call(this,l)}var t,i,n=this.repository.finder,a=this.repository.locator,r=this.repository.liner,o=this.editor,s=o.editable(),d=[],l=[],c=n.greedySearch(),u=CKEDITOR.tools.eventsBuffer(50,function(){t=a.locate(c),l=a.sort(i,1),l.length&&(r.prepare(c,t),r.placeLine(l[0]),r.cleanup())});s.addClass("cke_widget_dragging"),d.push(s.on("mousemove",function(e){i=e.data.$.clientY,u.input()})),d.push(o.document.once("mouseup",e,this)),d.push(CKEDITOR.document.once("mouseup",e,this))}function Y(e){var t=this.repository.finder,i=this.repository.liner,n=this.editor,a=this.editor.editable();if(!CKEDITOR.tools.isEmpty(i.visible)){var r=t.getRange(e[0]);this.focus(),n.fire("saveSnapshot"),n.fire("lockSnapshot",{dontUpdate:1}),n.getSelection().reset(),a.insertElementIntoRange(this.wrapper,r),this.focus(),n.fire("unlockSnapshot"),n.fire("saveSnapshot")}a.removeClass("cke_widget_dragging"),i.hideVisible()}function j(e){var t,i,n=e.editables;if(e.editables={},e.editables)for(t in n)i=n[t],e.initEditable(t,"string"==typeof i?{selector:i}:i)}function X(e){if(e.mask){var t=e.wrapper.findOne(".cke_widget_mask");t||(t=new CKEDITOR.dom.element("img",e.editor.document),t.setAttributes({src:CKEDITOR.tools.transparentImageData,"class":"cke_reset cke_widget_mask"}),e.wrapper.append(t)),e.mask=t}}function G(e){if(e.parts){var t,i,n={};for(i in e.parts)t=e.wrapper.findOne(e.parts[i]),n[i]=t;e.parts=n}}function Q(e,t){ee(e),G(e),j(e),X(e),z(e),q(e),CKEDITOR.env.ie&&CKEDITOR.env.version<9&&e.wrapper.on("dragstart",function(t){var i=t.data.getTarget();p(e,i)||e.inline&&_(i)||t.data.preventDefault()}),e.wrapper.removeClass("cke_widget_new"),e.element.addClass("cke_widget_element"),e.on("key",function(t){var i=t.data.keyCode;if(13==i)e.edit();else{if(i==CKEDITOR.CTRL+67||i==CKEDITOR.CTRL+88)return void $(e,i==CKEDITOR.CTRL+88);if(i in ae||CKEDITOR.CTRL&i||CKEDITOR.ALT&i)return}return!1},null,null,999),e.on("doubleclick",function(){e.edit()}),t.data&&e.on("data",t.data),t.edit&&e.on("edit",t.edit)}function Z(e,t){var i=e.element.data("cke-widget-data");i&&e.setData(JSON.parse(decodeURIComponent(i))),t&&e.setData(t),e.data.classes||e.setData("classes",e.getClasses()),e.dataReady=!0,te(e),e.fire("data",e.data)}function ee(e){var t=e.wrapper=e.element.getParent();t.setAttribute("data-cke-widget-id",e.id)}function te(e){e.element.data("cke-widget-data",encodeURIComponent(JSON.stringify(e.data)))}var ie=15;CKEDITOR.plugins.add("widget",{lang:"ar,ca,cs,cy,de,el,en,en-gb,eo,es,fa,fi,fr,gl,he,hr,hu,it,ja,km,ko,nb,nl,no,pl,pt,pt-br,ru,sl,sv,tt,uk,vi,zh,zh-cn",requires:"lineutils,clipboard",onLoad:function(){CKEDITOR.addCss(".cke_widget_wrapper{position:relative;outline:none}.cke_widget_inline{display:inline-block}.cke_widget_wrapper:hover>.cke_widget_element{outline:2px solid yellow;cursor:default}.cke_widget_wrapper:hover .cke_widget_editable{outline:2px solid yellow}.cke_widget_wrapper.cke_widget_focused>.cke_widget_element,.cke_widget_wrapper .cke_widget_editable.cke_widget_editable_focused{outline:2px solid #ace}.cke_widget_editable{cursor:text}.cke_widget_drag_handler_container{position:absolute;width:"+ie+"px;height:0;left:-9999px;opacity:0.75;transition:height 0s 0.2s;line-height:0}.cke_widget_wrapper:hover>.cke_widget_drag_handler_container{height:"+ie+"px;transition:none}.cke_widget_drag_handler_container:hover{opacity:1}img.cke_widget_drag_handler{cursor:move;width:"+ie+"px;height:"+ie+"px;display:inline-block}.cke_widget_mask{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.cke_editable.cke_widget_dragging, .cke_editable.cke_widget_dragging *{cursor:move !important}")},beforeInit:function(t){t.widgets=new e(t)},afterInit:function(e){n(e),R(e)}}),e.prototype={MIN_SELECTION_CHECK_INTERVAL:500,add:function(e,t){return t=CKEDITOR.tools.prototypedCopy(t),t.name=e,t._=t._||{},this.editor.fire("widgetDefinition",t),t.template&&(t.template=new CKEDITOR.template(t.template)),a(this.editor,t),r(this,t),this.registered[e]=t,t},addUpcastCallback:function(e){this._.upcastCallbacks.push(e)},checkSelection:function(){var e,t=this.editor.getSelection(),i=t.getSelectedElement(),n=H(this);if(i&&(e=this.getByElement(i,!0)))return n.focus(e).select(e).commit();var a=t.getRanges()[0];if(!a||a.collapsed)return n.commit();var r,o=new CKEDITOR.dom.walker(a);for(o.evaluator=k;r=o.next();)n.select(this.getByElement(r));n.commit()},checkWidgets:function(e){this.fire("checkWidgets",CKEDITOR.tools.copy(e||{}))},del:function(e){if(this.focused===e){var t,i=e.editor,n=i.createRange();(t=n.moveToClosestEditablePosition(e.wrapper,!0))||(t=n.moveToClosestEditablePosition(e.wrapper,!1)),t&&i.getSelection().selectRanges([n])}e.wrapper.remove(),this.destroy(e,!0)},destroy:function(e,t){this.widgetHoldingFocusedEditable===e&&D(this,e,null,t),e.destroy(t),delete this.instances[e.id],this.fire("instanceDestroyed",e)},destroyAll:function(e){var t,i=this.instances;for(var n in i)t=i[n],this.destroy(t,e)},finalizeCreation:function(e){var t=e.getFirst();if(t&&k(t)){this.editor.insertElement(t);var i=this.getByElement(t);i.ready=!0,i.fire("ready"),i.focus()}},getByElement:function(e,t){if(!e)return null;var i;for(var n in this.instances)if(i=this.instances[n].wrapper,i.equals(e)||!t&&i.contains(e))return this.instances[n];return null},initOn:function(e,i,n){if(i?"string"==typeof i&&(i=this.registered[i]):i=this.registered[e.data("widget")],!i)return null;var a=this.wrapElement(e,i.name);if(a){if(a.hasClass("cke_widget_new")){var r=new t(this,this._.nextId++,e,i,n);return r.isInited()?(this.instances[r.id]=r,r):null}return this.getByElement(e)}return null},initOnAll:function(e){for(var t,i=(e||this.editor.editable()).find(".cke_widget_new"),n=[],a=i.count();a--;)t=this.initOn(i.getItem(a).getFirst(w)),t&&n.push(t);return n},parseElementClasses:function(e){if(!e)return null;e=CKEDITOR.tools.trim(e).split(/\s+/);for(var t,i={},n=0;t=e.pop();)t.indexOf("cke_")==-1&&(i[t]=n=1);return n?i:null},wrapElement:function(e,t){var i,n,a=null;if(e instanceof CKEDITOR.dom.element){if(i=this.registered[t||e.data("widget")],!i)return null;if(a=e.getParent(),a&&a.type==CKEDITOR.NODE_ELEMENT&&a.data("cke-widget-wrapper"))return a;e.hasAttribute("data-cke-widget-keep-attr")||e.data("cke-widget-keep-attr",e.data("widget")?1:0),t&&e.data("widget",t),n=E(i,e.getName()),a=new CKEDITOR.dom.element(n?"span":"div"),a.setAttributes(g(n)),a.data("cke-display-name",i.pathName?i.pathName:e.getName()),e.getParent(!0)&&a.replace(e),e.appendTo(a)}else if(e instanceof CKEDITOR.htmlParser.element){if(i=this.registered[t||e.attributes["data-widget"]],!i)return null;if(a=e.parent,a&&a.type==CKEDITOR.NODE_ELEMENT&&a.attributes["data-cke-widget-wrapper"])return a;"data-cke-widget-keep-attr"in e.attributes||(e.attributes["data-cke-widget-keep-attr"]=e.attributes["data-widget"]?1:0),t&&(e.attributes["data-widget"]=t),n=E(i,e.name),a=new CKEDITOR.htmlParser.element(n?"span":"div",g(n)),a.attributes["data-cke-display-name"]=i.pathName?i.pathName:e.name;var r,o=e.parent;o&&(r=e.getIndex(),e.remove()),a.add(e),o&&h(o,r,a)}return a},_tests_getNestedEditable:p,_tests_createEditableFilter:c},CKEDITOR.event.implementOn(e.prototype),t.prototype={addClass:function(e){this.element.addClass(e)},applyStyle:function(e){P(this,e,1)},checkStyleActive:function(e){var t,i=W(e);if(!i)return!1;for(;t=i.pop();)if(!this.hasClass(t))return!1;return!0},destroy:function(e){this.editor;if(this.fire("destroy"),this.editables)for(var t in this.editables)this.destroyEditable(t,e);e||("0"==this.element.data("cke-widget-keep-attr")&&this.element.removeAttribute("data-widget"),this.element.removeAttributes(["data-cke-widget-data","data-cke-widget-keep-attr"]),this.element.removeClass("cke_widget_element"),this.element.replace(this.wrapper)),this.wrapper=null},destroyEditable:function(e,t){var i=this.editables[e];i.removeListener("focus",V),i.removeListener("blur",U),this.editor.focusManager.remove(i),t||(i.removeClass("cke_widget_editable"),i.removeClass("cke_widget_editable_focused"),i.removeAttributes(["contenteditable","data-cke-widget-editable","data-cke-enter-mode"])),delete this.editables[e]},edit:function(){var e={dialog:this.dialog},t=this;this.fire("edit",e)!==!1&&e.dialog&&this.editor.openDialog(e.dialog,function(e){var i,n;t.fire("dialog",e)!==!1&&(i=e.on("show",function(){e.setupContent(t)}),n=e.on("ok",function(){var i,n=t.on("data",function(e){i=1,e.cancel()},null,null,0);t.editor.fire("saveSnapshot"),e.commitContent(t),n.removeListener(),i&&(t.fire("data",t.data),t.editor.fire("saveSnapshot"))}),e.once("hide",function(){i.removeListener(),n.removeListener()}))})},getClasses:function(){return this.repository.parseElementClasses(this.element.getAttribute("class"))},hasClass:function(e){return this.element.hasClass(e)},initEditable:function(e,t){var n=this.wrapper.findOne(t.selector);return!(!n||!n.is(CKEDITOR.dtd.$editable))&&(n=new i(this.editor,n,{filter:c.call(this.repository,this.name,e,t)}),this.editables[e]=n,n.setAttributes({contenteditable:"true","data-cke-widget-editable":e,"data-cke-enter-mode":n.enterMode}),n.filter&&n.data("cke-filter",n.filter.id),n.addClass("cke_widget_editable"),n.removeClass("cke_widget_editable_focused"),t.pathName&&n.data("cke-display-name",t.pathName),this.editor.focusManager.add(n),n.on("focus",V,this),CKEDITOR.env.ie&&n.on("blur",U,this),n.setData(n.getHtml()),!0)},isInited:function(){return!(!this.wrapper||!this.inited)},isReady:function(){return this.isInited()&&this.ready},focus:function(){var e=this.editor.getSelection();e&&e.fake(this.wrapper),this.editor.focus()},removeClass:function(e){this.element.removeClass(e)},removeStyle:function(e){P(this,e,0)},setData:function(e,t){var i=this.data,n=0;if("string"==typeof e)i[e]!==t&&(i[e]=t,n=1);else{var a=e;for(e in a)i[e]!==a[e]&&(n=1,i[e]=a[e])}return n&&this.dataReady&&(te(this),this.fire("data",i)),this},setFocused:function(e){return this.wrapper[e?"addClass":"removeClass"]("cke_widget_focused"),this.fire(e?"focus":"blur"),this},setSelected:function(e){return this.wrapper[e?"addClass":"removeClass"]("cke_widget_selected"),this.fire(e?"select":"deselect"),this},updateDragHandlerPosition:function(){var e=this.editor,t=this.element.$,i=this._.dragHandlerOffset,n={x:t.offsetLeft,y:t.offsetTop-ie};if(!i||n.x!=i.x||n.y!=i.y){var a=e.checkDirty();e.fire("lockSnapshot"),this.dragHandlerContainer.setStyles({top:n.y+"px",left:n.x+"px"}),e.fire("unlockSnapshot"),!a&&e.resetDirty(),this._.dragHandlerOffset=n}}},CKEDITOR.event.implementOn(t.prototype),i.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.dom.element.prototype),{setData:function(e){e=this.editor.dataProcessor.toHtml(e,{context:this.getName(),filter:this.filter,enterMode:this.enterMode}),this.setHtml(e)},getData:function(){return this.editor.dataProcessor.toDataFormat(this.getHtml(),{context:this.getName(),filter:this.filter,enterMode:this.enterMode})}});var ne=new RegExp('^(?:<(?:div|span)(?: data-cke-temp="1")?(?: id="cke_copybin")?(?: data-cke-temp="1")?>)?(?:<(?:div|span)(?: style="[^"]+")?>)?<span [^>]*data-cke-copybin-start="1"[^>]*>.?</span>([\\s\\S]+)<span [^>]*data-cke-copybin-end="1"[^>]*>.?</span>(?:</(?:div|span)>)?(?:</(?:div|span)>)?$'),ae={37:1,38:1,39:1,40:1,8:1,46:1};!function(){function e(){}function t(e,t,i){if(!i)return!1;if(!this.checkElement(e,i))return!1;var n=i.widgets.getByElement(e,!0);return n&&n.checkStyleActive(this)}CKEDITOR.style.addCustomHandler({type:"widget",setup:function(e){this.widget=e.widget},apply:function(e){e instanceof CKEDITOR.editor&&this.checkApplicable(e.elementPath(),e)&&e.widgets.focused.applyStyle(this)},remove:function(e){e instanceof CKEDITOR.editor&&this.checkApplicable(e.elementPath(),e)&&e.widgets.focused.removeStyle(this)},checkActive:function(e,t){return this.checkElementMatch(e.lastElement,0,t)},checkApplicable:function(e,t){return t instanceof CKEDITOR.editor&&this.checkElement(e.lastElement,t)},checkElementMatch:t,checkElementRemovable:t,checkElement:function(e){if(!k(e))return!1;var t=e.getFirst(w);return t&&t.data("widget")==this.widget},buildPreview:function(e){return e||this._.definition.name},toAllowedContentRules:function(e){if(!e)return null;var t,i=e.widgets.registered[this.widget],n={};return i?i.styleableElements?(t=this.getClassesArray())?(n[i.styleableElements]={classes:t,propertiesOnly:!0},n):null:i.styleToAllowedContentRules?i.styleToAllowedContentRules(this):null:null},getClassesArray:function(){var e=this._.definition.attributes&&this._.definition.attributes["class"];return e?CKEDITOR.tools.trim(e).split(/\s+/):null},applyToRange:e,removeFromRange:e,applyToObject:e})}(),CKEDITOR.plugins.widget=t,t.repository=e,t.nestedEditable=i}();