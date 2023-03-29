const AppSpacingCss = document.createElement("dom-module");
AppSpacingCss.innerHTML = `
<template>
  <style>
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  /* vertical-align: baseline; */
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// * {
//   box-sizing: border-box;
// }
iron-icon,
@font-face {
  font-family: "Encodesans-Black";
  src: url("../../assets/fonts/font-encode-sans/EncodeSans-Black.ttf");
}
@font-face {
  font-family: "Encodesans-ExtraBold";
  src: url("../../assets/fonts/font-encode-sans/EncodeSans-ExtraBold.ttf");
}
@font-face {
  font-family: "Encodesans-Medium";
  src: url("../../assets/fonts/font-encode-sans/EncodeSans-Medium.ttf");
}
@font-face {
  font-family: "Encodesans-Regular";
  src: url("../../assets/fonts/font-encode-sans/EncodeSans-Regular.ttf");
}
@font-face {
  font-family: "Encodesans-Semibold";
  src: url("../../assets/fonts/font-encode-sans/EncodeSans-SemiBold.ttf");
}
@font-face {
  font-family: "Encodesans-Bold";
  src: url("../../assets/fonts/font-encode-sans/EncodeSans-Bold.ttf");
}
  </style>
</template>`;
AppSpacingCss.register("app-spacing-css");