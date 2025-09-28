"use strict";
(() => {
  // resources/rtos.js
  var vscode = acquireVsCodeApi();
  window.addEventListener("load", main);
  function main() {
    const refreshButton = document.getElementById("refresh-button");
    if (refreshButton) {
      refreshButton.addEventListener("click", refreshClicked);
    }
    const rtosPanels = document.getElementById("rtos-panels");
    if (rtosPanels) {
      rtosPanels.addEventListener("change", (e) => {
        onRTOSPanelsChange(e.target.getAttribute("debug-session-id"), e.target["activeid"]);
      });
    }
    setVSCodeMessageListener();
    setupFoldButtons();
    setupHelpButton();
  }
  function setupFoldButtons() {
    var coll = document.getElementsByClassName("collapse-button");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = "None";
        }
      });
    }
  }
  function setupHelpButton() {
    var coll = document.getElementsByClassName("help-button");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }
  function refreshClicked() {
    vscode.postMessage({
      type: "refresh",
      body: {}
    });
  }
  function onRTOSPanelsChange(debugSessionId, activeId) {
    vscode.postMessage({
      type: "change",
      debugSessionId,
      elementId: "rtos-panels.activeid",
      body: activeId
    });
  }
  function setVSCodeMessageListener() {
    window.addEventListener("message", (event) => {
      const command = event.data.command;
      const data = JSON.parse(event.data.payload);
    });
  }
})();
