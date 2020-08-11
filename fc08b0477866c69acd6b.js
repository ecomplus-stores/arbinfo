(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{252:function(t,e,r){var s=r(261);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,r(195).default)("5d75423d",s,!0,{})},253:function(t,e,r){"use strict";var s=r(35),n=r(48),a=r(106),i={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0}},computed:{deadlineStr(){const t=this.shippingLine,e=t.posting_deadline&&t.posting_deadline.working_days||t.delivery_time&&t.delivery_time.working_days;let r=t.posting_deadline?t.posting_deadline.days:0;return t.delivery_time&&(r+=t.delivery_time.days),"".concat(Object(n.a)(s.md)," ").concat(r," ").concat(Object(n.a)(e?s.sd:s.S))},freightValueStr(){const t="number"==typeof this.shippingLine.total_price?this.shippingLine.total_price:this.shippingLine.price;return t?Object(a.a)(t):Object(n.a)(s.kb)}}},o=r(62),c=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shipping-line"},[e("strong",[this._v(" "+this._s(this.deadlineStr)+" ")]),e("span",{staticClass:"mx-2"},[this._v(" "+this._s(this.freightValueStr)+" ")])])}),[],!1,null,null,null);e.a=c.exports},260:function(t,e,r){"use strict";var s=r(252);r.n(s).a},261:function(t,e,r){(e=r(194)(!0)).push([t.i,".order-info__new{text-align:center;color:var(--success);font-size:1.4rem;margin-bottom:2rem}.order-info__orders-link{margin-top:1.5rem}.order-info__number{color:var(--gray)}.order-info__number span{display:block;color:var(--secondary)}.order-info__details{margin-top:.75rem;margin-bottom:1.5rem}.order-info__financial-status,.order-info__status{font-weight:700;font-size:1.15rem;margin:1rem 0}.order-info__status--open{color:var(--info)}.order-info__status--cancelled{color:var(--danger)}.order-info__status--closed{color:var(--success)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid{color:var(--success)}.order-info__summary{background:var(--light)}.order-info__buy-again,.order-info__toggle{display:block;margin-left:auto;margin-top:var(--spacer-4)}","",{version:3,sources:["EcOrderInfo.scss"],names:[],mappings:"AAKE,iBACE,iBAAkB,CAClB,oBAAqB,CACrB,gBAAiB,CACjB,kBAAmB,CACpB,yBAGC,iBAAkB,CACnB,oBAGC,iBAAkB,CADnB,yBAIG,aAAc,CACd,sBAAuB,CACxB,qBAID,iBAAkB,CAClB,oBAAqB,CACtB,kDAIC,eAAiB,CACjB,iBAAkB,CAClB,aAAc,CACf,0BAIG,iBAAkB,CACnB,+BAGC,mBAAoB,CACrB,4BAGC,oBAAqB,CACtB,uCAKC,oBAAqB,CACtB,8CAGC,iBAAkB,CACnB,4HAKC,mBAAoB,CACrB,oCAGC,oBAAqB,CACtB,qBAID,uBAAwB,CACzB,2CAIC,aAAc,CACd,gBAAiB,CACjB,0BAA2B",file:"EcOrderInfo.scss",sourcesContent:["$primary: #434242; $secondary: #e4d31b; $settings-theme: (\n  bootswatch: sandstone,\n  custom: clean-gray\n); \n.order-info {\n  &__new {\n    text-align: center;\n    color: var(--success);\n    font-size: 1.4rem;\n    margin-bottom: 2rem;\n  }\n\n  &__orders-link {\n    margin-top: 1.5rem;\n  }\n\n  &__number {\n    color: var(--gray);\n\n    span {\n      display: block;\n      color: var(--secondary);\n    }\n  }\n\n  &__details {\n    margin-top: .75rem;\n    margin-bottom: 1.5rem;\n  }\n\n  &__status,\n  &__financial-status {\n    font-weight: bold;\n    font-size: 1.15rem;\n    margin: 1rem 0;\n  }\n\n  &__status {\n    &--open {\n      color: var(--info);\n    }\n\n    &--cancelled {\n      color: var(--danger);\n    }\n\n    &--closed {\n      color: var(--success);\n    }\n  }\n\n  &__financial-status {\n    &--pending {\n      color: var(--warning);\n    }\n\n    &--under_analysis {\n      color: var(--info);\n    }\n\n    &--unauthorized,\n    &--in_dispute,\n    &--voided {\n      color: var(--danger);\n    }\n\n    &--paid {\n      color: var(--success);\n    }\n  }\n\n  &__summary {\n    background: var(--light);\n  }\n\n  &__toggle,\n  &__buy-again {\n    display: block;\n    margin-left: auto;\n    margin-top: var(--spacer-4);\n  }\n}\n"]}]),t.exports=e},263:function(t,e,r){"use strict";r(39),r(15),r(58);var s=r(48),n=r(106),a=r(4),i=r(81),o=r(253),c=r(265),l=r(12),d=r(35);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m={name:"EcOrderInfo",components:{ShippingLine:o.a,EcSummary:c.a},props:{ecomPassport:{type:Object,default:()=>i.a},order:{type:Object,required:!0},isNew:{type:Boolean},skipDataLoad:{type:Boolean},skipFirstDataLoad:{type:Boolean},skipCustomerUpdate:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"}},data(){return{loaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order}},computed:{i19buyAgain:()=>Object(s.a)(d.p),i19cancelOrder:()=>Object(s.a)(d.u),i19codeCopied:()=>Object(s.a)(d.F),i19copyCode:()=>Object(s.a)(d.O),i19copyErrorMsg:()=>Object(s.a)(d.P),i19doPaymentMsg:()=>Object(s.a)(d.X),i19freight:()=>Object(s.a)(d.mb),i19myOrders:()=>Object(s.a)(d.Ob),i19of:()=>Object(s.a)(d.bc),i19orderConfirmationMsg:()=>Object(s.a)(d.ic),i19orderNumber:()=>Object(s.a)(d.jc),i19printBillet:()=>Object(s.a)(d.tc),i19redirectToPayment:()=>Object(s.a)(d.xc),i19referenceCode:()=>Object(s.a)(d.zc),i19reopenOrder:()=>Object(s.a)(d.Ec),i19shippingAddress:()=>Object(s.a)(d.Xc),i19transactionCode:()=>Object(s.a)(d.id),i19ticketCode:()=>Object(s.a)(d.fd),localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){let e;if(t.payments_history.forEach(t=>{t&&(!e||!t.date_time||t.date_time>=e.date_time)&&(e=t)}),e)return e.status}const r=t.financial_status&&t.financial_status.current;return r||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null}},methods:{formatMoney:n.a,i19FinancialStatus:t=>Object(s.a)(d.a)[t],i19FulfillmentStatus:t=>Object(s.a)(d.b)[t],i19OrderStatus:t=>Object(s.a)(d.d)[t],toClipboard(t){this.$copyText(t).then(()=>{this.$toast({title:this.i18n("CodeCopied"),body:t,variant:"success",delay:2e3})},e=>{console.error(e),this.$toast({title:"Oops",body:"".concat(this.i18n("copyErrorMsg"),": <i>").concat(t,"</i>"),variant:"warning",delay:3e3})})},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&e.requestApi("/me.json").then(({data:r})=>{const s=r.orders||[],n={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach(e=>{t[e]&&(n[e]=t[e])});const a=s.findIndex(({_id:e,number:r})=>e===t._id||r===t.number);a>-1?Object.assign(s[a],n):s.push(n),e.requestApi("/me.json","patch",{orders:s})})},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:e}=t;e.forEach((t,r)=>{l.a.addItem(t),r+1===e.length&&(l.a.save(),window.location=this.cartUrl)})}},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};i.a.requestApi("/orders/".concat(this.order._id,".json"),"patch",t).then(()=>{this.localOrder=_(_({},this.localOrder),t)}).finally(()=>{this.isUpdating=!1})}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t="/orders/".concat(this.order._id,".json"),e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(a.g)({url:t})).then(({data:t})=>{this.localOrder=_(_({},this.localOrder),t)}).catch(t=>{console.error(t)});this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout(()=>{e().finally(()=>{this.loaded=!0})},this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},f=(r(260),r(62)),b=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-info py-4"},[t.isNew?r("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),r("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.loaded?r("div",{key:"loaded"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-7"},[r("p",{staticClass:"order-info__number"},[t._v(" "+t._s(t.i19orderNumber)+": "),r("span",{staticClass:"h4"},[t._v(t._s(t.localOrder.number))])]),r("transition-group",{attrs:{"enter-active-class":"animated fadeIn"}},[t.isUpdating?r("div",{key:"updating"},[r("div",{staticClass:"spinner-grow",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):r("article",{key:"uptodate"},[t.status?r("div",{staticClass:"order-info__status",class:"order-info__status--"+t.status},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" ")]):t._e(),t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?r("div",{staticClass:"order-info__billet"},[r("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),t.transaction.banking_billet.code?[r("p",[t._v(" "+t._s(t.i19ticketCode)+": "),r("br"),r("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),r("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[r("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?r("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[r("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?r("div",{staticClass:"order-info__redirect"},[r("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),r("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[r("i",{staticClass:"fas fa-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),r("div",{staticClass:"row order-info__details"},[r("div",{staticClass:"col-12 col-md-6"},[t._t("payment",[r("div",{staticClass:"order-info__payment"},[r("div",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")]),t._l(t.localOrder.transactions,(function(e){return r("div",[r("p",{staticClass:"order-info__payment-value"},[t._v(" "+t._s(e.payment_method.name||t.localOrder.payment_method_label)+": "),e.installments&&e.installments.value?r("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):r("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")])]),e.credit_card?r("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?r("span",[e.credit_card.company?t._e():r("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?r("div",{staticClass:"order-info__transaction-code"},[r("small",[t._v(t._s(t.i19transactionCode))]),r("br"),t._v(" "+t._s(e.intermediator.transaction_code)+" ")]):t._e(),e.intermediator.transaction_reference?r("div",{staticClass:"order-info__transaction-reference"},[r("small",[t._v(t._s(t.i19referenceCode))]),r("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)],null,{order:t.localOrder,transaction:t.transaction})],2),r("div",{staticClass:"col-12 col-md-6"},[t._t("shipping",[r("div",{staticClass:"order-info__shipping"},[t.fulfillmentStatus?r("div",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):t._e(),t.shippingAddress&&t.shippingAddress.street?r("div",{staticClass:"order-info__shipping-address"},[r("div",{staticClass:"text-muted"},[r("i",{staticClass:"fas fa-map-marked-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),r("address",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),r("br"),t._l(["borough","city","province_code"],(function(e,s){return t.shippingAddress[e]?r("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===s?".":","))+" ")]):t._e()})),r("br"),r("mark",{staticClass:"small"},[t._v(" "+t._s(t.shippingAddress.zip)+" ")])],2)]):t._e(),t.localOrder.shipping_lines?t._l(t.localOrder.shipping_lines,(function(e){return r("div",{key:e._id},[r("div",{staticClass:"text-muted"},[r("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]),r("shipping-line",{attrs:{"shipping-line":e}})],1)})):t._e()],2)],null,{order:t.localOrder,shippingAddress:t.shippingAddress})],2)])],2)])],1),t.localOrder.amount?r("div",{staticClass:"col-12 col-lg-5"},[r("div",{staticClass:"order-info__summary card"},[r("div",{staticClass:"card-body"},[r("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating?t._e():["open"===t.status?[t.fulfillmentStatus?t._e():r("button",{staticClass:"order-info__toggle btn btn-danger btn-sm",on:{click:t.toggle}},[r("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")])]:"closed"!==t.status||"delivered"!==t.fulfillmentStatus?r("button",{staticClass:"order-info__toggle btn btn-sm",class:"cancelled"===t.status?"btn-success":"btn-info",on:{click:t.toggle}},[r("i",{staticClass:"fas fa-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()],t._t("buy",[r("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary btn-sm":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[r("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])])],2):t._e()])]):r("div",{key:"loading"},[r("div",{staticClass:"spinner-border",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?r("a",{staticClass:"order-info__orders-link btn btn-sm btn-light",attrs:{href:t.accountOrdersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);e.a=b.exports},378:function(t,e,r){"use strict";r.r(e);r(39);var s=r(147),n=r(12),a=r(81),i=r(192);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={name:"confirmation",components:{EcOrderInfo:r(263).a},data:()=>({canUpsertCart:!0}),computed:c(c({},Object(s.c)(["orders","customer"])),{},{orderId(){return this.$route.params.id},order:{get(){return this.orders.find(({_id:t})=>t===this.orderId)||{_id:this.orderId}},set(t){if(t&&t._id===this.orderId){const e=this.orders.concat(),r=e.find(({_id:e})=>e===t._id);r?Object.assign(r,t):e.push(t),this.setOrders(e),this.$route.params.json||this.$router.push({params:{json:encodeURIComponent(JSON.stringify(t))}})}}}}),methods:c(c(c({},Object(s.d)(["addOrder","setOrders","resetCart"])),Object(s.b)(["saveCustomer"])),{},{handleUpsertCart(){if(this.canUpsertCart){this.canUpsertCart=!1;const{status:t}=this.order;t&&"cancelled"!==t&&(n.a.data.completed=!0,this.orderId&&(n.a.data.orders||(n.a.data.orders=[]),n.a.data.orders.push(this.orderId)),Object(i.c)().then(this.resetCart))}}}),created(){const{customer:t}=this;a.a.checkAuthorization()||t.main_email&&t.doc_number&&a.a.fetchLogin(t.main_email,t.doc_number).then(()=>{this.saveCustomer({ecomPassport:a.a}),this.handleUpsertCart()})},mounted(){a.a.checkAuthorization()&&this.handleUpsertCart()}},u=r(62),_=Object(u.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"confirmation"}},[r("ec-order-info",{attrs:{order:t.order,isNew:!0},on:{"update:order":function(e){t.order=e}}})],1)}),[],!1,null,null,null);e.default=_.exports}}]);
//# sourceMappingURL=fc08b0477866c69acd6b.js.map