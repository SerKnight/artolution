!function(){function e(e){for(var t={name:"autoCloseBrackets"},n=0;n<e.length;n+=2)(function(e,n){function r(e){var t=e.getCursor();return e.getRange(t,CodeMirror.Pos(t.line,t.ch+1))!=n?CodeMirror.Pass:void e.execCommand("goCharRight")}t["'"+e+"'"]=function(t){if(e!=n||r(t)==CodeMirror.Pass){var o=t.getCursor("start"),o=CodeMirror.Pos(o.line,o.ch+1);t.replaceSelection(e+n,{head:o,anchor:o})}},e!=n&&(t["'"+n+"'"]=r)})(e.charAt(n),e.charAt(n+1));return t}CodeMirror.defineOption("autoCloseBrackets",!1,function(t,n,r){r=r&&r!=CodeMirror.Init,n&&!r?t.addKeyMap(e("string"==typeof n?n:"()[]{}''\"\"")):!n&&r&&t.removeKeyMap("autoCloseBrackets")})}(),function(){function e(e,o){var i,a,l=e.getCursor(),c=e.getTokenAt(l),u=CodeMirror.innerMode(e.getMode(),c.state),s=u.state;if("xml"!=u.mode.name)return CodeMirror.Pass;var d=e.getOption("autoCloseTags"),f="html"==u.mode.configuration,u="object"==typeof d&&d.dontCloseTags||f&&n,d="object"==typeof d&&d.indentTags||f&&r;if(">"==o&&s.tagName){if(a=s.tagName,c.end>l.ch&&(a=a.slice(0,a.length-c.end+l.ch)),i=a.toLowerCase(),"tag"==c.type&&"closeTag"==s.type||/\/\s*$/.test(c.string)||u&&-1<t(u,i))return CodeMirror.Pass;s=(c=d&&-1<t(d,i))?CodeMirror.Pos(l.line+1,0):CodeMirror.Pos(l.line,l.ch+1),e.replaceSelection(">"+(c?"\n\n":"")+"</"+a+">",{head:s,anchor:s}),c&&(e.indentLine(l.line+1),e.indentLine(l.line+2))}else{if("/"!=o||"<"!=c.string)return CodeMirror.Pass;(a=s.context&&s.context.tagName)&&e.replaceSelection("/"+a+">","end")}}function t(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,r=e.length;n<r;++n)if(e[n]==t)return n;return-1}CodeMirror.defineOption("autoCloseTags",!1,function(t,n,r){!n||r!=CodeMirror.Init&&r?!n&&r!=CodeMirror.Init&&r&&t.removeKeyMap("autoCloseTags"):(r={name:"autoCloseTags"},("object"!=typeof n||n.whenClosing)&&(r["'/'"]=function(t){return e(t,"/")}),("object"!=typeof n||n.whenOpening)&&(r["'>'"]=function(t){return e(t,">")}),t.addKeyMap(r))});var n="area base br col command embed hr img input keygen link meta param source track wbr".split(" "),r="applet blockquote body button div dl fieldset form frameset h1 h2 h3 h4 h5 h6 head html iframe layer legend object ol p select table ul".split(" ")}(),function(){function e(e){function t(t,n,r){var i,l,c,u;if(t.text)for(i=s?0:t.text.length-1,l=s?t.text.length:-1,null!=r&&(i=r+d);i!=l;i+=d)if(c=t.text.charAt(i),m.test(c)&&e.getTokenAt(o(n,i+1)).type==f)if(u=a[c],">"==u.charAt(1)==s)g.push(c);else{if(g.pop()!=u.charAt(0))return{pos:i,match:!1};if(!g.length)return{pos:i,match:!0}}}var n,r,i=e.getCursor(),l=e.getLineHandle(i.line),c=i.ch-1,u=0<=c&&a[l.text.charAt(c)]||a[l.text.charAt(++c)];if(!u)return null;var s=">"==u.charAt(1),d=s?1:-1,f=e.getTokenAt(o(i.line,c+1)).type,g=[l.text.charAt(c)],m=/[(){}[\]]/,u=i.line;for(r=s?Math.min(u+100,e.lineCount()):Math.max(-1,u-100);u!=r&&!(n=u==i.line?t(l,u,c):t(e.getLineHandle(u),u));u+=d);return{from:o(i.line,c),to:n&&o(u,n.pos),match:n&&n.match}}function t(t,n){var a=e(t);if(a&&!(t.getLine(a.from.line).length>i)&&(!a.to||!(t.getLine(a.to.line).length>i))){var l=a.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket",c=t.markText(a.from,o(a.from.line,a.from.ch+1),{className:l}),u=a.to&&t.markText(a.to,o(a.to.line,a.to.ch+1),{className:l});if(r&&t.state.focused&&t.display.input.focus(),a=function(){t.operation(function(){c.clear(),u&&u.clear()})},!n)return a;setTimeout(a,800)}}function n(e){e.operation(function(){l&&(l(),l=null),e.somethingSelected()||(l=t(e,!1))})}var r=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||8>document.documentMode),o=CodeMirror.Pos,i=1e3,a={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"},l=null;CodeMirror.defineOption("matchBrackets",!1,function(e,t){t?e.on("cursorActivity",n):e.off("cursorActivity",n)}),CodeMirror.defineExtension("matchBrackets",function(){t(this,!0)}),CodeMirror.defineExtension("findMatchingBracket",function(){return e(this)})}(),CodeMirror.tagRangeFinder=function(e,t){for(var n,r,o,i,a,l,c,u=RegExp("^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*"),s=e.getLine(t.line),d=!1,f=null,g=t.ch;!d;){if(g=s.indexOf("<",g),-1==g)return;if(g+1<s.length&&"/"==s[g+1])g++;else if(s.substr(g+1).match(u)){if(n=s.indexOf(">",g+1),-1==n){var d=t.line+1,m=!1;for(i=e.lineCount();d<i&&!m;){if(r=e.getLine(d),n=r.indexOf(">"),-1!=n&&(m=!0,o=r.lastIndexOf("/",n),-1!=o&&o<n&&(a=s.substr(o,n-o+1),!a.match(/\/\s*\>/))))return;d++}d=!0}else i=s.lastIndexOf("/",n),-1==i?d=!0:(a=s.substr(i,n-i+1),a.match(/\/\s*\>/)||(d=!0));d&&(l=s.substr(g+1),f=l.match(u),f?(f=f[0],-1!=s.indexOf("</"+f+">",g)&&(d=!1)):d=!1),d||g++}else g++}if(d)for(u=RegExp("(\\<\\/"+f+"\\>)|(\\<"+f+"\\>)|(\\<"+f+"\\s)|(\\<"+f+"$)"),g="</"+f+">",r=1,d=t.line+1,i=e.lineCount();d<i;){if(s=e.getLine(d),c=s.match(u))for(f=0;f<c.length;f++)if(c[f]==g?r--:r++,!r)return{from:CodeMirror.Pos(t.line,n+1),to:CodeMirror.Pos(d,c.index)};d++}},CodeMirror.braceRangeFinder=function(e,t){for(var n,r,o,i,a,l,c,u,s,d=t.line,f=e.getLine(d),g=f.length;o=f.lastIndexOf("{",g),!(o<t.ch);){if(r=e.getTokenAt(CodeMirror.Pos(d,o+1)).type,!/^(comment|string)/.test(r)){n=o;break}g=o-1}if(null!=n&&!(f.lastIndexOf("}")>n)){f=1,g=e.lineCount(),o=d+1;e:for(;o<g;++o)for(l=e.getLine(o),c=0;u=l.indexOf("{",c),s=l.indexOf("}",c),0>u&&(u=l.length),0>s&&(s=l.length),c=Math.min(u,s),!(c==l.length);){if(e.getTokenAt(CodeMirror.Pos(o,c+1)).type==r)if(c==u)++f;else if(!--f){i=o,a=c;break e}++c}if(null!=i&&i!=d+1)return{from:CodeMirror.Pos(d,n+1),to:CodeMirror.Pos(i,a)}}},CodeMirror.indentRangeFinder=function(e,t){for(var n,r=e.getOption("tabSize"),o=e.getLine(t.line),i=CodeMirror.countColumn(o,null,r),a=t.line+1,l=e.lineCount();a<l;++a)if(n=e.getLine(a),CodeMirror.countColumn(n,null,r)<i&&CodeMirror.countColumn(e.getLine(a-1),null,r)>i)return{from:CodeMirror.Pos(t.line,o.length),to:CodeMirror.Pos(a,n.length)}},CodeMirror.newFoldFunction=function(e,t){if(null==t&&(t="\u2194"),"string"==typeof t){var n=document.createTextNode(t),t=document.createElement("span");t.appendChild(n),t.className="CodeMirror-foldmarker"}return function(n,r){var o,i,a,l,c;if("number"==typeof r&&(r=CodeMirror.Pos(r,0)),o=e(n,r)){for(i=n.findMarksAt(o.from),l=a=0;l<i.length;++l)i[l].__isFold&&(++a,i[l].clear());a||(i=t.cloneNode(!0),CodeMirror.on(i,"mousedown",function(){c.clear()}),c=n.markText(o.from,o.to,{replacedWith:i,clearOnEnter:!0,__isFold:!0}))}}},function(){CodeMirror.defineExtension("autoFormatAll",function(e,t){for(var n,r=this,o=r.getMode(),i=r.getRange(e,t).split("\n"),a=CodeMirror.copyState(o,r.getTokenAt(e).state),l=r.getOption("tabSize"),c="",u=0,s=0==e.ch,d=0;d<i.length;++d){for(n=new CodeMirror.StringStream(i[d],l);!n.eol();){var f=CodeMirror.innerMode(o,a),g=o.token(n,a),m=n.current();n.start=n.pos,(!s||/\S/.test(m))&&(c+=m,s=!1),!s&&f.mode.newlineAfterToken&&f.mode.newlineAfterToken(g,m,n.string.slice(n.pos)||i[d+1]||"",f.state)&&(c+="\n",s=!0,++u)}!n.pos&&o.blankLine&&o.blankLine(a),!s&&d<i.length-1&&(c+="\n",s=!0,++u)}r.operation(function(){r.replaceRange(c,e,t);for(var n=e.line+1,o=e.line+u;n<=o;++n)r.indentLine(n,"smart");r.setCursor({line:0,ch:0})})})}(),function(){CodeMirror.extendMode("css",{commentStart:"/*",commentEnd:"*/",newlineAfterToken:function(e,t){return/^[;{}]$/.test(t)}}),CodeMirror.extendMode("javascript",{commentStart:"/*",commentEnd:"*/",newlineAfterToken:function(e,t,n,r){return this.jsonMode?/^[\[,{]$/.test(t)||/^}/.test(n):(";"!=t||!r.lexical||")"!=r.lexical.type)&&(/^[;{}]$/.test(t)&&!/^;/.test(n))}});var e=/^(a|abbr|acronym|area|base|bdo|big|br|button|caption|cite|code|col|colgroup|dd|del|dfn|em|frame|hr|iframe|img|input|ins|kbd|label|legend|link|map|object|optgroup|option|param|q|samp|script|select|small|span|strong|sub|sup|textarea|tt|var)$/;CodeMirror.extendMode("xml",{commentStart:"<!--",commentEnd:"-->",newlineAfterToken:function(t,n,r,o){var i=!1;return"html"==this.configuration&&(i=!!o.context&&e.test(o.context.tagName)),!i&&("tag"==t&&/>$/.test(n)&&o.context||/^</.test(r))}}),CodeMirror.defineExtension("commentRange",function(e,t,n){var r=this,o=CodeMirror.innerMode(r.getMode(),r.getTokenAt(t).state).mode;r.operation(function(){if(e)r.replaceRange(o.commentEnd,n),r.replaceRange(o.commentStart,t),t.line==n.line&&t.ch==n.ch&&r.setCursor(t.line,t.ch+o.commentStart.length);else{var i=r.getRange(t,n),a=i.indexOf(o.commentStart),l=i.lastIndexOf(o.commentEnd);-1<a&&-1<l&&l>a&&(i=i.substr(0,a)+i.substring(a+o.commentStart.length,l)+i.substr(l+o.commentEnd.length)),r.replaceRange(i,t,n)}})}),CodeMirror.defineExtension("autoIndentRange",function(e,t){var n=this;this.operation(function(){for(var r=e.line;r<=t.line;r++)n.indentLine(r,"smart")})}),CodeMirror.defineExtension("autoFormatRange",function(e,t){for(var n,r=this,o=r.getMode(),i=r.getRange(e,t).split("\n"),a=CodeMirror.copyState(o,r.getTokenAt(e).state),l=r.getOption("tabSize"),c="",u=0,s=0==e.ch,d=0;d<i.length;++d){for(n=new CodeMirror.StringStream(i[d],l);!n.eol();){var f=CodeMirror.innerMode(o,a),g=o.token(n,a),m=n.current();n.start=n.pos,(!s||/\S/.test(m))&&(c+=m,s=!1),!s&&f.mode.newlineAfterToken&&f.mode.newlineAfterToken(g,m,n.string.slice(n.pos)||i[d+1]||"",f.state)&&(c+="\n",s=!0,++u)}!n.pos&&o.blankLine&&o.blankLine(a),!s&&d<i.length-1&&(c+="\n",s=!0,++u)}r.operation(function(){r.replaceRange(c,e,t);for(var n=e.line+1,o=e.line+u;n<=o;++n)r.indentLine(n,"smart");r.setSelection(e,r.getCursor(!1))})})}(),function(){function e(e){this.minChars="object"==typeof e&&e.minChars||r,this.style="object"==typeof e&&e.style||o,this.overlay=null}function t(e){e.operation(function(){var t,r=e._matchHighlightState;r.overlay&&(e.removeOverlay(r.overlay),r.overlay=null),e.somethingSelected()&&(t=e.getSelection().replace(/^\s+|\s+$/g,""),t.length<r.minChars||e.addOverlay(r.overlay=n(t,r.style)))})}function n(e,t){return{token:function(n){return n.match(e)?t:(n.next(),void(n.skipTo(e.charAt(0))||n.skipToEnd()))}}}var r=2,o="matchhighlight";CodeMirror.defineOption("highlightSelectionMatches",!1,function(n,r,o){var i,o=o&&o!=CodeMirror.Init;r&&!o?(n._matchHighlightState=new e(r),n.on("cursorActivity",t)):!r&&o&&(i=n._matchHighlightState.overlay,i&&n.removeOverlay(i),n._matchHighlightState=null,n.off("cursorActivity",t))})}();