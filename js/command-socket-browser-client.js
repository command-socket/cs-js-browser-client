"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@command-socket/core"),browser_websocket_1=require("./browser-websocket");class CommandSocketBrowserClient extends core_1.CommandSocket{constructor(e,r=new core_1.CommandRegistry){super(new browser_websocket_1.BrowserWebSocket(e),r)}static create(e,r=new core_1.CommandRegistry){return new Promise(o=>{let t=new CommandSocketBrowserClient(e,r);t.getEvents().OPEN.subscribe(()=>o(t))})}}exports.CommandSocketBrowserClient=CommandSocketBrowserClient;
//# sourceMappingURL=command-socket-browser-client.js.map
