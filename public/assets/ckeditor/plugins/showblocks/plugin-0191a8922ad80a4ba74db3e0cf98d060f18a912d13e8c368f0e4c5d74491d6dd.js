!function(){"use strict";var o={readOnly:1,preserveState:!0,editorFocus:!1,exec:function(o){this.toggleState(),this.refresh(o)},refresh:function(o){if(o.document){var e=this.state==CKEDITOR.TRISTATE_ON&&(o.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE||o.focusManager.hasFocus),t=e?"attachClass":"removeClass";o.editable()[t]("cke_show_blocks")}}};CKEDITOR.plugins.add("showblocks",{lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"showblocks,showblocks-rtl",hidpi:!0,onLoad:function(){var o,e,t,s,n,c,a=["p","div","pre","address","blockquote","h1","h2","h3","h4","h5","h6"],l=CKEDITOR.getUrl(this.path),r=!(CKEDITOR.env.ie&&CKEDITOR.env.version<9),k=r?":not([contenteditable=false]):not(.cke_show_blocks_off)":"";for(o=e=t=s="";n=a.pop();)c=a.length?",":"",o+=".cke_show_blocks "+n+k+c,t+=".cke_show_blocks.cke_contents_ltr "+n+k+c,s+=".cke_show_blocks.cke_contents_rtl "+n+k+c,e+=".cke_show_blocks "+n+k+"{background-image:url("+l+"images/block_"+n+".png)}";o+="{background-repeat:no-repeat;border:1px dotted gray;padding-top:8px}",t+="{background-position:top left;padding-left:8px}",s+="{background-position:top right;padding-right:8px}",CKEDITOR.addCss(o.concat(e,t,s)),r||CKEDITOR.addCss(".cke_show_blocks [contenteditable=false],.cke_show_blocks .cke_show_blocks_off{border:none;padding-top:0;background-image:none}.cke_show_blocks.cke_contents_rtl [contenteditable=false],.cke_show_blocks.cke_contents_rtl .cke_show_blocks_off{padding-right:0}.cke_show_blocks.cke_contents_ltr [contenteditable=false],.cke_show_blocks.cke_contents_ltr .cke_show_blocks_off{padding-left:0}")},init:function(e){function t(){s.refresh(e)}if(!e.blockless){var s=e.addCommand("showblocks",o);s.canUndo=!1,e.config.startupOutlineBlocks&&s.setState(CKEDITOR.TRISTATE_ON),e.ui.addButton&&e.ui.addButton("ShowBlocks",{label:e.lang.showblocks.toolbar,command:"showblocks",toolbar:"tools,20"}),e.on("mode",function(){s.state!=CKEDITOR.TRISTATE_DISABLED&&s.refresh(e)}),e.elementMode==CKEDITOR.ELEMENT_MODE_INLINE&&(e.on("focus",t),e.on("blur",t)),e.on("contentDom",function(){s.state!=CKEDITOR.TRISTATE_DISABLED&&s.refresh(e)})}}})}();