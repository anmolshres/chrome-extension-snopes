// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
    alert(JSON.stringify(info.selectionText));
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
  }
  
  // Create one test item for each context type.
  var contexts = ["selection"];
    var context = contexts[0];
    var title = "Test '" + context + "' menu item";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "onclick": genericOnClick});
    console.log("'" + context + "' item:" + id);