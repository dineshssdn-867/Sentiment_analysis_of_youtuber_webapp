"use strict";{const n=django.jQuery;n.fn.prepopulate=function(a,t,c){return this.each(function(){const e=n(this),o=function(){if(e.data("_changed"))return;const o=[];n.each(a,function(a,t){(t=n(t)).val().length>0&&o.push(t.val())}),e.val(URLify(o.join(" "),t,c))};e.data("_changed",!1),e.on("change",function(){e.data("_changed",!0)}),e.val()||n(a.join(",")).on("keyup change focus",o)})}}