/*
 * SPDX-FileCopyrightText: © 2024 Romain Brault <mail@romainbrault.com>
 *
 * SPDX-License-Identifier: MIT OR Apache-2.0
 */

// Trigger the Read the Docs Addons Search modal when clicking on "Search docs" input from the topnav.
document.querySelector("[role='search'] input").addEventListener("focusin", () => {
   const event = new CustomEvent("readthedocs-search-show");
   document.dispatchEvent(event);
});
