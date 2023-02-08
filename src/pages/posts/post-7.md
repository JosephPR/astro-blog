---
layout: ../../layouts/MarkdownPostLayout.astro
title: "CSS Psuedo classes"
pubDate: 2023-02-08
description: 'CSS Psuedo classes and use cases '
author: 'Joseph Reilly'
image:
    url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fhtml-css&psig=AOvVaw2_WIuUT5ROqtoeMH52yaZW&ust=1675972348456000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDust7Zhv0CFQAAAAAdAAAAABAD' 
    alt: 'AI and Workouts'
tags: ["css"," development"]
---
# CSS Pseudo-classes
Here's a list of CSS pseudo-classes:

`:active
:checked
:default
:disabled
:empty
:enabled
:first-child
:first-of-type
:focus
:hover
:in-range
:invalid
:lang
:last-child
:last-of-type
:link
:not
:nth-child
:nth-last-child
:nth-last-of-type
:nth-of-type
:only-child
:only-of-type
:optional
:out-of-range
:read-only
:read-write
:required
:root
:target
:valid
:visited`


**:active** - Styles the active state of an element, typically a link:
`a:active {
  color: red;
}`

**:checked** - Styles the appearance of checked checkboxes or radio buttons:
`input[type="checkbox"]:checked {
  background-color: yellow;
}`

**:default** - Styles the default button (usually the submit button) in a form:
`button:default {
  background-color: lightblue;
}`

**:disabled** - Styles form elements that are disabled:
`input:disabled {
  background-color: gray;
}`

**:empty** - Styles elements that have no content:
`p:empty {
  display: none;
}`

**:enabled** - Styles form elements that are enabled:
`input:enabled {
  background-color: white;
}`

**:first-child** - Styles the first child element of its parent:
`li:first-child {
  font-weight: bold;
}`

**:first-of-type** - Styles the first element of its type within its parent:
`p:first-of-type {
  font-size: larger;
}`

**:focus** - Styles the focused element:
`input:focus {
  border: 2px solid blue;
}`

**:hover** - Styles an element when it is being hovered over:
`a:hover {
  color: green;
}`

**:in-range** - Styles form elements with a value within a specified range:
`input[type="range"]:in-range {
  background-color: lightgreen;
}`

**:invalid** - Styles form elements with an invalid value:
`input:invalid {
  border: 2px solid red;
}`

**:lang** - Styles elements with a specific language:
`:lang(fr) {
  font-family: Arial, sans-serif;
}`

**:last-child** - Styles the last child element of its parent:

`li:last-child {
  border-bottom: none;
}`

**:last-of-type** - Styles the last element of its type within its parent:
`p:last-of-type {
  text-align: right;
}`

**:link** - Styles unvisited links:
`a:link {
  color: blue;
}`

**:not** - Styles elements that do not match the specified selector:
`:not(.special) {
  background-color: lightgray;
}`