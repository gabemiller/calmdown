var Rr = Object.defineProperty;
var Ar = (n, e, t) => e in n ? Rr(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var x = (n, e, t) => Ar(n, typeof e != "symbol" ? e + "" : e, t);
const Or = {
  width: "100%",
  height: "500px",
  selector: "calmdown",
  editorSelector: "cd-editor",
  previewSelector: "cd-preview",
  helpDialogSelector: "cd-help-dialog",
  helpDialogBtnOpenSelector: "cd-help-dialog__btn-open",
  helpDialogBtnCloseSelector: "cd-help-dialog__btn-close",
  markdownInputSelector: "cd-markdown-input",
  htmlInputSelector: "cd-html-input",
  defaultThemeSelector: "cd-theme-default",
  defaultLayoutSelector: "cd-layout-both",
  codeHighlightStyle: "cd-highlight-default",
  editorType: "textarea",
  defaultContent: ""
};
function zt() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Ne = zt();
function Vn(n) {
  Ne = n;
}
var ke = { exec: () => null };
function xe(n) {
  let e = [];
  return (t) => {
    let r = Math.max(0, Math.min(3, t - 1)), i = e[r];
    return i || (i = n(r), e[r] = i), i;
  };
}
function D(n, e = "") {
  let t = typeof n == "string" ? n : n.source, r = { replace: (i, s) => {
    let c = typeof s == "string" ? s : s.source;
    return c = c.replace(ne.caret, "$1"), t = t.replace(i, c), r;
  }, getRegex: () => new RegExp(t, e) };
  return r;
}
var Mr = ((n = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + n);
  } catch {
    return !1;
  }
})(), ne = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (n) => new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: xe((n) => new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: xe((n) => new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: xe((n) => new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)), headingBeginRegex: xe((n) => new RegExp(`^ {0,${n}}#`)), htmlBeginRegex: xe((n) => new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: xe((n) => new RegExp(`^ {0,${n}}>`)) }, Ir = /^(?:[ \t]*(?:\n|$))+/, Cr = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Lr = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, $e = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Dr = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ft = / {0,3}(?:[*+-]|\d{1,9}[.)])/, Jn = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, jn = D(Jn).replace(/bull/g, Ft).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Br = D(Jn).replace(/bull/g, Ft).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Kt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Pr = /^[^\n]+/, Ht = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Ur = D(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ht).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), $r = D(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, Ft).getRegex(), Qe = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", qt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, zr = D("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", qt).replace("tag", Qe).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), er = D(Kt).replace("hr", $e).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qe).getRegex(), Fr = D(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", er).getRegex(), Gt = { blockquote: Fr, code: Cr, def: Ur, fences: Lr, heading: Dr, hr: $e, html: zr, lheading: jn, list: $r, newline: Ir, paragraph: er, table: ke, text: Pr }, jt = D("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", $e).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qe).getRegex(), Kr = { ...Gt, lheading: Br, table: jt, paragraph: D(Kt).replace("hr", $e).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", jt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qe).getRegex() }, Hr = { ...Gt, html: D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", qt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: ke, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: D(Kt).replace("hr", $e).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", jn).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, qr = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Gr = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, tr = /^( {2,}|\\)\n(?!\s*$)/, Zr = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Oe = /[\p{P}\p{S}]/u, Ve = /[\s\p{P}\p{S}]/u, Zt = /[^\s\p{P}\p{S}]/u, Wr = D(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ve).getRegex(), nr = /(?!~)[\p{P}\p{S}]/u, Yr = /(?!~)[\s\p{P}\p{S}]/u, Xr = /(?:[^\s\p{P}\p{S}]|~)/u, Qr = D(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Mr ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), rr = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Vr = D(rr, "u").replace(/punct/g, Oe).getRegex(), Jr = D(rr, "u").replace(/punct/g, nr).getRegex(), ir = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", jr = D(ir, "gu").replace(/notPunctSpace/g, Zt).replace(/punctSpace/g, Ve).replace(/punct/g, Oe).getRegex(), ei = D(ir, "gu").replace(/notPunctSpace/g, Xr).replace(/punctSpace/g, Yr).replace(/punct/g, nr).getRegex(), ti = D("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Zt).replace(/punctSpace/g, Ve).replace(/punct/g, Oe).getRegex(), ni = D(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, Oe).getRegex(), ri = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", ii = D(ri, "gu").replace(/notPunctSpace/g, Zt).replace(/punctSpace/g, Ve).replace(/punct/g, Oe).getRegex(), ai = D(/\\(punct)/, "gu").replace(/punct/g, Oe).getRegex(), si = D(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), oi = D(qt).replace("(?:-->|$)", "-->").getRegex(), ci = D("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", oi).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ze = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, li = D(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", Ze).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ar = D(/^!?\[(label)\]\[(ref)\]/).replace("label", Ze).replace("ref", Ht).getRegex(), sr = D(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ht).getRegex(), di = D("reflink|nolink(?!\\()", "g").replace("reflink", ar).replace("nolink", sr).getRegex(), en = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Wt = { _backpedal: ke, anyPunctuation: ai, autolink: si, blockSkip: Qr, br: tr, code: Gr, del: ke, delLDelim: ke, delRDelim: ke, emStrongLDelim: Vr, emStrongRDelimAst: jr, emStrongRDelimUnd: ti, escape: qr, link: li, nolink: sr, punctuation: Wr, reflink: ar, reflinkSearch: di, tag: ci, text: Zr, url: ke }, ui = { ...Wt, link: D(/^!?\[(label)\]\((.*?)\)/).replace("label", Ze).getRegex(), reflink: D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ze).getRegex() }, Pt = { ...Wt, emStrongRDelimAst: ei, emStrongLDelim: Jr, delLDelim: ni, delRDelim: ii, url: D(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", en).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: D(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", en).getRegex() }, gi = { ...Pt, br: D(tr).replace("{2,}", "*").getRegex(), text: D(Pt.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, He = { normal: Gt, gfm: Kr, pedantic: Hr }, De = { normal: Wt, gfm: Pt, breaks: gi, pedantic: ui }, pi = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, tn = (n) => pi[n];
function he(n, e) {
  if (e) {
    if (ne.escapeTest.test(n)) return n.replace(ne.escapeReplace, tn);
  } else if (ne.escapeTestNoEncode.test(n)) return n.replace(ne.escapeReplaceNoEncode, tn);
  return n;
}
function nn(n) {
  try {
    n = encodeURI(n).replace(ne.percentDecode, "%");
  } catch {
    return null;
  }
  return n;
}
function rn(n, e) {
  var s;
  let t = n.replace(ne.findPipe, (c, o, a) => {
    let d = !1, l = o;
    for (; --l >= 0 && a[l] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), r = t.split(ne.splitPipe), i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !((s = r.at(-1)) != null && s.trim()) && r.pop(), e) if (r.length > e) r.splice(e);
  else for (; r.length < e; ) r.push("");
  for (; i < r.length; i++) r[i] = r[i].trim().replace(ne.slashPipe, "|");
  return r;
}
function _e(n, e, t) {
  let r = n.length;
  if (r === 0) return "";
  let i = 0;
  for (; i < r && n.charAt(r - i - 1) === e; )
    i++;
  return n.slice(0, r - i);
}
function an(n) {
  let e = n.split(`
`), t = e.length - 1;
  for (; t >= 0 && ne.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? n : e.slice(0, t + 1).join(`
`);
}
function bi(n, e) {
  if (n.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let r = 0; r < n.length; r++) if (n[r] === "\\") r++;
  else if (n[r] === e[0]) t++;
  else if (n[r] === e[1] && (t--, t < 0)) return r;
  return t > 0 ? -2 : -1;
}
function hi(n, e = 0) {
  let t = e, r = "";
  for (let i of n) if (i === "	") {
    let s = 4 - t % 4;
    r += " ".repeat(s), t += s;
  } else r += i, t++;
  return r;
}
function sn(n, e, t, r, i) {
  let s = e.href, c = e.title || null, o = n[1].replace(i.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let a = { type: n[0].charAt(0) === "!" ? "image" : "link", raw: t, href: s, title: c, text: o, tokens: r.inlineTokens(o) };
  return r.state.inLink = !1, a;
}
function fi(n, e, t) {
  let r = n.match(t.other.indentCodeCompensation);
  if (r === null) return e;
  let i = r[1];
  return e.split(`
`).map((s) => {
    let c = s.match(t.other.beginningSpace);
    if (c === null) return s;
    let [o] = c;
    return o.length >= i.length ? s.slice(i.length) : s;
  }).join(`
`);
}
var We = class {
  constructor(n) {
    x(this, "options");
    x(this, "rules");
    x(this, "lexer");
    this.options = n || Ne;
  }
  space(n) {
    let e = this.rules.block.newline.exec(n);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(n) {
    let e = this.rules.block.code.exec(n);
    if (e) {
      let t = this.options.pedantic ? e[0] : an(e[0]), r = t.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t, codeBlockStyle: "indented", text: r };
    }
  }
  fences(n) {
    let e = this.rules.block.fences.exec(n);
    if (e) {
      let t = e[0], r = fi(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: r };
    }
  }
  heading(n) {
    let e = this.rules.block.heading.exec(n);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let r = _e(t, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (t = r.trim());
      }
      return { type: "heading", raw: _e(e[0], `
`), depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(n) {
    let e = this.rules.block.hr.exec(n);
    if (e) return { type: "hr", raw: _e(e[0], `
`) };
  }
  blockquote(n) {
    let e = this.rules.block.blockquote.exec(n);
    if (e) {
      let t = _e(e[0], `
`).split(`
`), r = "", i = "", s = [];
      for (; t.length > 0; ) {
        let c = !1, o = [], a;
        for (a = 0; a < t.length; a++) if (this.rules.other.blockquoteStart.test(t[a])) o.push(t[a]), c = !0;
        else if (!c) o.push(t[a]);
        else break;
        t = t.slice(a);
        let d = o.join(`
`), l = d.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${d}` : d, i = i ? `${i}
${l}` : l;
        let u = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(l, s, !0), this.lexer.state.top = u, t.length === 0) break;
        let p = s.at(-1);
        if ((p == null ? void 0 : p.type) === "code") break;
        if ((p == null ? void 0 : p.type) === "blockquote") {
          let h = p, g = h.raw + `
` + t.join(`
`), _ = this.blockquote(g);
          s[s.length - 1] = _, r = r.substring(0, r.length - h.raw.length) + _.raw, i = i.substring(0, i.length - h.text.length) + _.text;
          break;
        } else if ((p == null ? void 0 : p.type) === "list") {
          let h = p, g = h.raw + `
` + t.join(`
`), _ = this.list(g);
          s[s.length - 1] = _, r = r.substring(0, r.length - p.raw.length) + _.raw, i = i.substring(0, i.length - h.raw.length) + _.raw, t = g.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r, tokens: s, text: i };
    }
  }
  list(n) {
    let e = this.rules.block.list.exec(n);
    if (e) {
      let t = e[1].trim(), r = t.length > 1, i = { type: "list", raw: "", ordered: r, start: r ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = r ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = r ? t : "[*+-]");
      let s = this.rules.other.listItemRegex(t), c = !1;
      for (; n; ) {
        let a = !1, d = "", l = "";
        if (!(e = s.exec(n)) || this.rules.block.hr.test(n)) break;
        d = e[0], n = n.substring(d.length);
        let u = hi(e[2].split(`
`, 1)[0], e[1].length), p = n.split(`
`, 1)[0], h = !u.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, l = u.trimStart()) : h ? g = e[1].length + 1 : (g = u.search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, l = u.slice(g), g += e[1].length), h && this.rules.other.blankLine.test(p) && (d += p + `
`, n = n.substring(p.length + 1), a = !0), !a) {
          let _ = this.rules.other.nextBulletRegex(g), f = this.rules.other.hrRegex(g), k = this.rules.other.fencesBeginRegex(g), w = this.rules.other.headingBeginRegex(g), N = this.rules.other.htmlBeginRegex(g), L = this.rules.other.blockquoteBeginRegex(g);
          for (; n; ) {
            let R = n.split(`
`, 1)[0], A;
            if (p = R, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), A = p) : A = p.replace(this.rules.other.tabCharGlobal, "    "), k.test(p) || w.test(p) || N.test(p) || L.test(p) || _.test(p) || f.test(p)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= g || !p.trim()) l += `
` + A.slice(g);
            else {
              if (h || u.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || k.test(u) || w.test(u) || f.test(u)) break;
              l += `
` + p;
            }
            h = !p.trim(), d += R + `
`, n = n.substring(R.length + 1), u = A.slice(g);
          }
        }
        i.loose || (c ? i.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (c = !0)), i.items.push({ type: "list_item", raw: d, task: !!this.options.gfm && this.rules.other.listIsTask.test(l), loose: !1, text: l, tokens: [] }), i.raw += d;
      }
      let o = i.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let a of i.items) {
        this.lexer.state.top = !1, a.tokens = this.lexer.blockTokens(a.text, []);
        let d = a.tokens[0];
        if (a.task && ((d == null ? void 0 : d.type) === "text" || (d == null ? void 0 : d.type) === "paragraph")) {
          a.text = a.text.replace(this.rules.other.listReplaceTask, ""), d.raw = d.raw.replace(this.rules.other.listReplaceTask, ""), d.text = d.text.replace(this.rules.other.listReplaceTask, "");
          for (let u = this.lexer.inlineQueue.length - 1; u >= 0; u--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)) {
            this.lexer.inlineQueue[u].src = this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let l = this.rules.other.listTaskCheckbox.exec(a.raw);
          if (l) {
            let u = { type: "checkbox", raw: l[0] + " ", checked: l[0] !== "[ ]" };
            a.checked = u.checked, i.loose ? a.tokens[0] && ["paragraph", "text"].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = u.raw + a.tokens[0].raw, a.tokens[0].text = u.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(u)) : a.tokens.unshift({ type: "paragraph", raw: u.raw, text: u.raw, tokens: [u] }) : a.tokens.unshift(u);
          }
        } else a.task && (a.task = !1);
        if (!i.loose) {
          let l = a.tokens.filter((p) => p.type === "space"), u = l.length > 0 && l.some((p) => this.rules.other.anyLine.test(p.raw));
          i.loose = u;
        }
      }
      if (i.loose) for (let a of i.items) {
        a.loose = !0;
        for (let d of a.tokens) d.type === "text" && (d.type = "paragraph");
      }
      return i;
    }
  }
  html(n) {
    let e = this.rules.block.html.exec(n);
    if (e) {
      let t = an(e[0]);
      return { type: "html", block: !0, raw: t, pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: t };
    }
  }
  def(n) {
    let e = this.rules.block.def.exec(n);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: _e(e[0], `
`), href: r, title: i };
    }
  }
  table(n) {
    var c;
    let e = this.rules.block.table.exec(n);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = rn(e[1]), r = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (c = e[3]) != null && c.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: _e(e[0], `
`), header: [], align: [], rows: [] };
    if (t.length === r.length) {
      for (let o of r) this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
      for (let o = 0; o < t.length; o++) s.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: s.align[o] });
      for (let o of i) s.rows.push(rn(o, s.header.length).map((a, d) => ({ text: a, tokens: this.lexer.inline(a), header: !1, align: s.align[d] })));
      return s;
    }
  }
  lheading(n) {
    let e = this.rules.block.lheading.exec(n);
    if (e) {
      let t = e[1].trim();
      return { type: "heading", raw: _e(e[0], `
`), depth: e[2].charAt(0) === "=" ? 1 : 2, text: t, tokens: this.lexer.inline(t) };
    }
  }
  paragraph(n) {
    let e = this.rules.block.paragraph.exec(n);
    if (e) {
      let t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(n) {
    let e = this.rules.block.text.exec(n);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(n) {
    let e = this.rules.inline.escape.exec(n);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(n) {
    let e = this.rules.inline.tag.exec(n);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] };
  }
  link(n) {
    let e = this.rules.inline.link.exec(n);
    if (e) {
      let t = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
        if (!this.rules.other.endAngleBracket.test(t)) return;
        let s = _e(t.slice(0, -1), "\\");
        if ((t.length - s.length) % 2 === 0) return;
      } else {
        let s = bi(e[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let c = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + s;
          e[2] = e[2].substring(0, s), e[0] = e[0].substring(0, c).trim(), e[3] = "";
        }
      }
      let r = e[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], i = s[3]);
      } else i = e[3] ? e[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? r = r.slice(1) : r = r.slice(1, -1)), sn(e, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(n, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(n)) || (t = this.rules.inline.nolink.exec(n))) {
      let r = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = e[r.toLowerCase()];
      if (!i) {
        let s = t[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return sn(t, i, t[0], this.lexer, this.rules);
    }
  }
  emStrong(n, e, t = "") {
    let r = this.rules.inline.emStrongLDelim.exec(n);
    if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !t || this.rules.inline.punctuation.exec(t))) {
      let i = [...r[0]].length - 1, s, c, o = i, a = 0, d = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, e = e.slice(-1 * n.length + i); (r = d.exec(e)) !== null; ) {
        if (s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !s) continue;
        if (c = [...s].length, r[3] || r[4]) {
          o += c;
          continue;
        } else if ((r[5] || r[6]) && i % 3 && !((i + c) % 3)) {
          a += c;
          continue;
        }
        if (o -= c, o > 0) continue;
        c = Math.min(c, c + o + a);
        let l = [...r[0]][0].length, u = n.slice(0, i + r.index + l + c);
        if (Math.min(i, c) % 2) {
          let h = u.slice(1, -1);
          return { type: "em", raw: u, text: h, tokens: this.lexer.inlineTokens(h) };
        }
        let p = u.slice(2, -2);
        return { type: "strong", raw: u, text: p, tokens: this.lexer.inlineTokens(p) };
      }
    }
  }
  codespan(n) {
    let e = this.rules.inline.code.exec(n);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(t), i = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return r && i && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(n) {
    let e = this.rules.inline.br.exec(n);
    if (e) return { type: "br", raw: e[0] };
  }
  del(n, e, t = "") {
    let r = this.rules.inline.delLDelim.exec(n);
    if (r && (!r[1] || !t || this.rules.inline.punctuation.exec(t))) {
      let i = [...r[0]].length - 1, s, c, o = i, a = this.rules.inline.delRDelim;
      for (a.lastIndex = 0, e = e.slice(-1 * n.length + i); (r = a.exec(e)) !== null; ) {
        if (s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !s || (c = [...s].length, c !== i)) continue;
        if (r[3] || r[4]) {
          o += c;
          continue;
        }
        if (o -= c, o > 0) continue;
        c = Math.min(c, c + o);
        let d = [...r[0]][0].length, l = n.slice(0, i + r.index + d + c), u = l.slice(i, -i);
        return { type: "del", raw: l, text: u, tokens: this.lexer.inlineTokens(u) };
      }
    }
  }
  autolink(n) {
    let e = this.rules.inline.autolink.exec(n);
    if (e) {
      let t, r;
      return e[2] === "@" ? (t = e[1], r = "mailto:" + t) : (t = e[1], r = t), { type: "link", raw: e[0], text: t, href: r, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(n) {
    var t;
    let e;
    if (e = this.rules.inline.url.exec(n)) {
      let r, i;
      if (e[2] === "@") r = e[0], i = "mailto:" + r;
      else {
        let s;
        do
          s = e[0], e[0] = ((t = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : t[0]) ?? "";
        while (s !== e[0]);
        r = e[0], e[1] === "www." ? i = "http://" + e[0] : i = e[0];
      }
      return { type: "link", raw: e[0], text: r, href: i, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  inlineText(n) {
    let e = this.rules.inline.text.exec(n);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, ue = class Ut {
  constructor(e) {
    x(this, "tokens");
    x(this, "options");
    x(this, "state");
    x(this, "inlineQueue");
    x(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Ne, this.options.tokenizer = this.options.tokenizer || new We(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: ne, block: He.normal, inline: De.normal };
    this.options.pedantic ? (t.block = He.pedantic, t.inline = De.pedantic) : this.options.gfm && (t.block = He.gfm, this.options.breaks ? t.inline = De.breaks : t.inline = De.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: He, inline: De };
  }
  static lex(e, t) {
    return new Ut(t).lex(e);
  }
  static lexInline(e, t) {
    return new Ut(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(ne.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], r = !1) {
    var s, c, o;
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(ne.tabCharGlobal, "    ").replace(ne.spaceLine, ""));
    let i = 1 / 0;
    for (; e; ) {
      if (e.length < i) i = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let a;
      if ((c = (s = this.options.extensions) == null ? void 0 : s.block) != null && c.some((l) => (a = l.call({ lexer: this }, e, t)) ? (e = e.substring(a.raw.length), t.push(a), !0) : !1)) continue;
      if (a = this.tokenizer.space(e)) {
        e = e.substring(a.raw.length);
        let l = t.at(-1);
        a.raw.length === 1 && l !== void 0 ? l.raw += `
` : t.push(a);
        continue;
      }
      if (a = this.tokenizer.code(e)) {
        e = e.substring(a.raw.length);
        let l = t.at(-1);
        (l == null ? void 0 : l.type) === "paragraph" || (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + a.raw, l.text += `
` + a.text, this.inlineQueue.at(-1).src = l.text) : t.push(a);
        continue;
      }
      if (a = this.tokenizer.fences(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.heading(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.hr(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.blockquote(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.list(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.html(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.def(e)) {
        e = e.substring(a.raw.length);
        let l = t.at(-1);
        (l == null ? void 0 : l.type) === "paragraph" || (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + a.raw, l.text += `
` + a.raw, this.inlineQueue.at(-1).src = l.text) : this.tokens.links[a.tag] || (this.tokens.links[a.tag] = { href: a.href, title: a.title }, t.push(a));
        continue;
      }
      if (a = this.tokenizer.table(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.lheading(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      let d = e;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let l = 1 / 0, u = e.slice(1), p;
        this.options.extensions.startBlock.forEach((h) => {
          p = h.call({ lexer: this }, u), typeof p == "number" && p >= 0 && (l = Math.min(l, p));
        }), l < 1 / 0 && l >= 0 && (d = e.substring(0, l + 1));
      }
      if (this.state.top && (a = this.tokenizer.paragraph(d))) {
        let l = t.at(-1);
        r && (l == null ? void 0 : l.type) === "paragraph" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + a.raw, l.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : t.push(a), r = d.length !== e.length, e = e.substring(a.raw.length);
        continue;
      }
      if (a = this.tokenizer.text(e)) {
        e = e.substring(a.raw.length);
        let l = t.at(-1);
        (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + a.raw, l.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : t.push(a);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    var d, l, u, p, h;
    this.tokenizer.lexer = this;
    let r = e, i = null;
    if (this.tokens.links) {
      let g = Object.keys(this.tokens.links);
      if (g.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) !== null; ) g.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) !== null; ) r = r.slice(0, i.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let s;
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) !== null; ) s = i[2] ? i[2].length : 0, r = r.slice(0, i.index + s) + "[" + "a".repeat(i[0].length - s - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    r = ((l = (d = this.options.hooks) == null ? void 0 : d.emStrongMask) == null ? void 0 : l.call({ lexer: this }, r)) ?? r;
    let c = !1, o = "", a = 1 / 0;
    for (; e; ) {
      if (e.length < a) a = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      c || (o = ""), c = !1;
      let g;
      if ((p = (u = this.options.extensions) == null ? void 0 : u.inline) != null && p.some((f) => (g = f.call({ lexer: this }, e, t)) ? (e = e.substring(g.raw.length), t.push(g), !0) : !1)) continue;
      if (g = this.tokenizer.escape(e)) {
        e = e.substring(g.raw.length), t.push(g);
        continue;
      }
      if (g = this.tokenizer.tag(e)) {
        e = e.substring(g.raw.length), t.push(g);
        continue;
      }
      if (g = this.tokenizer.link(e)) {
        e = e.substring(g.raw.length), t.push(g);
        continue;
      }
      if (g = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(g.raw.length);
        let f = t.at(-1);
        g.type === "text" && (f == null ? void 0 : f.type) === "text" ? (f.raw += g.raw, f.text += g.text) : t.push(g);
        continue;
      }
      if (g = this.tokenizer.emStrong(e, r, o)) {
        e = e.substring(g.raw.length), t.push(g);
        continue;
      }
      if (g = this.tokenizer.codespan(e)) {
        e = e.substring(g.raw.length), t.push(g);
        continue;
      }
      if (g = this.tokenizer.br(e)) {
        e = e.substring(g.raw.length), t.push(g);
        continue;
      }
      if (g = this.tokenizer.del(e, r, o)) {
        e = e.substring(g.raw.length), t.push(g);
        continue;
      }
      if (g = this.tokenizer.autolink(e)) {
        e = e.substring(g.raw.length), t.push(g);
        continue;
      }
      if (!this.state.inLink && (g = this.tokenizer.url(e))) {
        e = e.substring(g.raw.length), t.push(g);
        continue;
      }
      let _ = e;
      if ((h = this.options.extensions) != null && h.startInline) {
        let f = 1 / 0, k = e.slice(1), w;
        this.options.extensions.startInline.forEach((N) => {
          w = N.call({ lexer: this }, k), typeof w == "number" && w >= 0 && (f = Math.min(f, w));
        }), f < 1 / 0 && f >= 0 && (_ = e.substring(0, f + 1));
      }
      if (g = this.tokenizer.inlineText(_)) {
        e = e.substring(g.raw.length), g.raw.slice(-1) !== "_" && (o = g.raw.slice(-1)), c = !0;
        let f = t.at(-1);
        (f == null ? void 0 : f.type) === "text" ? (f.raw += g.raw, f.text += g.text) : t.push(g);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return t;
  }
  infiniteLoopError(e) {
    let t = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(t);
    else throw new Error(t);
  }
}, Ye = class {
  constructor(n) {
    x(this, "options");
    x(this, "parser");
    this.options = n || Ne;
  }
  space(n) {
    return "";
  }
  code({ text: n, lang: e, escaped: t }) {
    var s;
    let r = (s = (e || "").match(ne.notSpaceStart)) == null ? void 0 : s[0], i = n.replace(ne.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + he(r) + '">' + (t ? i : he(i, !0)) + `</code></pre>
` : "<pre><code>" + (t ? i : he(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: n }) {
    return `<blockquote>
${this.parser.parse(n)}</blockquote>
`;
  }
  html({ text: n }) {
    return n;
  }
  def(n) {
    return "";
  }
  heading({ tokens: n, depth: e }) {
    return `<h${e}>${this.parser.parseInline(n)}</h${e}>
`;
  }
  hr(n) {
    return `<hr>
`;
  }
  list(n) {
    let e = n.ordered, t = n.start, r = "";
    for (let c = 0; c < n.items.length; c++) {
      let o = n.items[c];
      r += this.listitem(o);
    }
    let i = e ? "ol" : "ul", s = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + i + s + `>
` + r + "</" + i + `>
`;
  }
  listitem(n) {
    return `<li>${this.parser.parse(n.tokens)}</li>
`;
  }
  checkbox({ checked: n }) {
    return "<input " + (n ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: n }) {
    return `<p>${this.parser.parseInline(n)}</p>
`;
  }
  table(n) {
    let e = "", t = "";
    for (let i = 0; i < n.header.length; i++) t += this.tablecell(n.header[i]);
    e += this.tablerow({ text: t });
    let r = "";
    for (let i = 0; i < n.rows.length; i++) {
      let s = n.rows[i];
      t = "";
      for (let c = 0; c < s.length; c++) t += this.tablecell(s[c]);
      r += this.tablerow({ text: t });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: n }) {
    return `<tr>
${n}</tr>
`;
  }
  tablecell(n) {
    let e = this.parser.parseInline(n.tokens), t = n.header ? "th" : "td";
    return (n.align ? `<${t} align="${n.align}">` : `<${t}>`) + e + `</${t}>
`;
  }
  strong({ tokens: n }) {
    return `<strong>${this.parser.parseInline(n)}</strong>`;
  }
  em({ tokens: n }) {
    return `<em>${this.parser.parseInline(n)}</em>`;
  }
  codespan({ text: n }) {
    return `<code>${he(n, !0)}</code>`;
  }
  br(n) {
    return "<br>";
  }
  del({ tokens: n }) {
    return `<del>${this.parser.parseInline(n)}</del>`;
  }
  link({ href: n, title: e, tokens: t }) {
    let r = this.parser.parseInline(t), i = nn(n);
    if (i === null) return r;
    n = i;
    let s = '<a href="' + n + '"';
    return e && (s += ' title="' + he(e) + '"'), s += ">" + r + "</a>", s;
  }
  image({ href: n, title: e, text: t, tokens: r }) {
    r && (t = this.parser.parseInline(r, this.parser.textRenderer));
    let i = nn(n);
    if (i === null) return he(t);
    n = i;
    let s = `<img src="${n}" alt="${he(t)}"`;
    return e && (s += ` title="${he(e)}"`), s += ">", s;
  }
  text(n) {
    return "tokens" in n && n.tokens ? this.parser.parseInline(n.tokens) : "escaped" in n && n.escaped ? n.text : he(n.text);
  }
}, Yt = class {
  strong({ text: n }) {
    return n;
  }
  em({ text: n }) {
    return n;
  }
  codespan({ text: n }) {
    return n;
  }
  del({ text: n }) {
    return n;
  }
  html({ text: n }) {
    return n;
  }
  text({ text: n }) {
    return n;
  }
  link({ text: n }) {
    return "" + n;
  }
  image({ text: n }) {
    return "" + n;
  }
  br() {
    return "";
  }
  checkbox({ raw: n }) {
    return n;
  }
}, ge = class $t {
  constructor(e) {
    x(this, "options");
    x(this, "renderer");
    x(this, "textRenderer");
    this.options = e || Ne, this.options.renderer = this.options.renderer || new Ye(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Yt();
  }
  static parse(e, t) {
    return new $t(t).parse(e);
  }
  static parseInline(e, t) {
    return new $t(t).parseInline(e);
  }
  parse(e) {
    var r, i;
    this.renderer.parser = this;
    let t = "";
    for (let s = 0; s < e.length; s++) {
      let c = e[s];
      if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[c.type]) {
        let a = c, d = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (d !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
          t += d || "";
          continue;
        }
      }
      let o = c;
      switch (o.type) {
        case "space": {
          t += this.renderer.space(o);
          break;
        }
        case "hr": {
          t += this.renderer.hr(o);
          break;
        }
        case "heading": {
          t += this.renderer.heading(o);
          break;
        }
        case "code": {
          t += this.renderer.code(o);
          break;
        }
        case "table": {
          t += this.renderer.table(o);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(o);
          break;
        }
        case "list": {
          t += this.renderer.list(o);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(o);
          break;
        }
        case "html": {
          t += this.renderer.html(o);
          break;
        }
        case "def": {
          t += this.renderer.def(o);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(o);
          break;
        }
        case "text": {
          t += this.renderer.text(o);
          break;
        }
        default: {
          let a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    var i, s;
    this.renderer.parser = this;
    let r = "";
    for (let c = 0; c < e.length; c++) {
      let o = e[c];
      if ((s = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && s[o.type]) {
        let d = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (d !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          r += d || "";
          continue;
        }
      }
      let a = o;
      switch (a.type) {
        case "escape": {
          r += t.text(a);
          break;
        }
        case "html": {
          r += t.html(a);
          break;
        }
        case "link": {
          r += t.link(a);
          break;
        }
        case "image": {
          r += t.image(a);
          break;
        }
        case "checkbox": {
          r += t.checkbox(a);
          break;
        }
        case "strong": {
          r += t.strong(a);
          break;
        }
        case "em": {
          r += t.em(a);
          break;
        }
        case "codespan": {
          r += t.codespan(a);
          break;
        }
        case "br": {
          r += t.br(a);
          break;
        }
        case "del": {
          r += t.del(a);
          break;
        }
        case "text": {
          r += t.text(a);
          break;
        }
        default: {
          let d = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(d), "";
          throw new Error(d);
        }
      }
    }
    return r;
  }
}, Ge, Be = (Ge = class {
  constructor(n) {
    x(this, "options");
    x(this, "block");
    this.options = n || Ne;
  }
  preprocess(n) {
    return n;
  }
  postprocess(n) {
    return n;
  }
  processAllTokens(n) {
    return n;
  }
  emStrongMask(n) {
    return n;
  }
  provideLexer(n = this.block) {
    return n ? ue.lex : ue.lexInline;
  }
  provideParser(n = this.block) {
    return n ? ge.parse : ge.parseInline;
  }
}, x(Ge, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), x(Ge, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Ge), or = class {
  constructor(...n) {
    x(this, "defaults", zt());
    x(this, "options", this.setOptions);
    x(this, "parse", this.parseMarkdown(!0));
    x(this, "parseInline", this.parseMarkdown(!1));
    x(this, "Parser", ge);
    x(this, "Renderer", Ye);
    x(this, "TextRenderer", Yt);
    x(this, "Lexer", ue);
    x(this, "Tokenizer", We);
    x(this, "Hooks", Be);
    this.use(...n);
  }
  walkTokens(n, e) {
    var r, i;
    let t = [];
    for (let s of n) switch (t = t.concat(e.call(this, s)), s.type) {
      case "table": {
        let c = s;
        for (let o of c.header) t = t.concat(this.walkTokens(o.tokens, e));
        for (let o of c.rows) for (let a of o) t = t.concat(this.walkTokens(a.tokens, e));
        break;
      }
      case "list": {
        let c = s;
        t = t.concat(this.walkTokens(c.items, e));
        break;
      }
      default: {
        let c = s;
        (i = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && i[c.type] ? this.defaults.extensions.childTokens[c.type].forEach((o) => {
          let a = c[o].flat(1 / 0);
          t = t.concat(this.walkTokens(a, e));
        }) : c.tokens && (t = t.concat(this.walkTokens(c.tokens, e)));
      }
    }
    return t;
  }
  use(...n) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return n.forEach((t) => {
      let r = { ...t };
      if (r.async = this.defaults.async || r.async || !1, t.extensions && (t.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = e.renderers[i.name];
          s ? e.renderers[i.name] = function(...c) {
            let o = i.renderer.apply(this, c);
            return o === !1 && (o = s.apply(this, c)), o;
          } : e.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = e[i.level];
          s ? s.unshift(i.tokenizer) : e[i.level] = [i.tokenizer], i.start && (i.level === "block" ? e.startBlock ? e.startBlock.push(i.start) : e.startBlock = [i.start] : i.level === "inline" && (e.startInline ? e.startInline.push(i.start) : e.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (e.childTokens[i.name] = i.childTokens);
      }), r.extensions = e), t.renderer) {
        let i = this.defaults.renderer || new Ye(this.defaults);
        for (let s in t.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let c = s, o = t.renderer[c], a = i[c];
          i[c] = (...d) => {
            let l = o.apply(i, d);
            return l === !1 && (l = a.apply(i, d)), l || "";
          };
        }
        r.renderer = i;
      }
      if (t.tokenizer) {
        let i = this.defaults.tokenizer || new We(this.defaults);
        for (let s in t.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let c = s, o = t.tokenizer[c], a = i[c];
          i[c] = (...d) => {
            let l = o.apply(i, d);
            return l === !1 && (l = a.apply(i, d)), l;
          };
        }
        r.tokenizer = i;
      }
      if (t.hooks) {
        let i = this.defaults.hooks || new Be();
        for (let s in t.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let c = s, o = t.hooks[c], a = i[c];
          Be.passThroughHooks.has(s) ? i[c] = (d) => {
            if (this.defaults.async && Be.passThroughHooksRespectAsync.has(s)) return (async () => {
              let u = await o.call(i, d);
              return a.call(i, u);
            })();
            let l = o.call(i, d);
            return a.call(i, l);
          } : i[c] = (...d) => {
            if (this.defaults.async) return (async () => {
              let u = await o.apply(i, d);
              return u === !1 && (u = await a.apply(i, d)), u;
            })();
            let l = o.apply(i, d);
            return l === !1 && (l = a.apply(i, d)), l;
          };
        }
        r.hooks = i;
      }
      if (t.walkTokens) {
        let i = this.defaults.walkTokens, s = t.walkTokens;
        r.walkTokens = function(c) {
          let o = [];
          return o.push(s.call(this, c)), i && (o = o.concat(i.call(this, c))), o;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(n) {
    return this.defaults = { ...this.defaults, ...n }, this;
  }
  lexer(n, e) {
    return ue.lex(n, e ?? this.defaults);
  }
  parser(n, e) {
    return ge.parse(n, e ?? this.defaults);
  }
  parseMarkdown(n) {
    return (e, t) => {
      let r = { ...t }, i = { ...this.defaults, ...r }, s = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === !0 && r.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (i.hooks && (i.hooks.options = i, i.hooks.block = n), i.async) return (async () => {
        let c = i.hooks ? await i.hooks.preprocess(e) : e, o = await (i.hooks ? await i.hooks.provideLexer(n) : n ? ue.lex : ue.lexInline)(c, i), a = i.hooks ? await i.hooks.processAllTokens(o) : o;
        i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
        let d = await (i.hooks ? await i.hooks.provideParser(n) : n ? ge.parse : ge.parseInline)(a, i);
        return i.hooks ? await i.hooks.postprocess(d) : d;
      })().catch(s);
      try {
        i.hooks && (e = i.hooks.preprocess(e));
        let c = (i.hooks ? i.hooks.provideLexer(n) : n ? ue.lex : ue.lexInline)(e, i);
        i.hooks && (c = i.hooks.processAllTokens(c)), i.walkTokens && this.walkTokens(c, i.walkTokens);
        let o = (i.hooks ? i.hooks.provideParser(n) : n ? ge.parse : ge.parseInline)(c, i);
        return i.hooks && (o = i.hooks.postprocess(o)), o;
      } catch (c) {
        return s(c);
      }
    };
  }
  onError(n, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
        let r = "<p>An error occurred:</p><pre>" + he(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(r) : r;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, ye = new or();
function $(n, e) {
  return ye.parse(n, e);
}
$.options = $.setOptions = function(n) {
  return ye.setOptions(n), $.defaults = ye.defaults, Vn($.defaults), $;
};
$.getDefaults = zt;
$.defaults = Ne;
$.use = function(...n) {
  return ye.use(...n), $.defaults = ye.defaults, Vn($.defaults), $;
};
$.walkTokens = function(n, e) {
  return ye.walkTokens(n, e);
};
$.parseInline = ye.parseInline;
$.Parser = ge;
$.parser = ge.parse;
$.Renderer = Ye;
$.TextRenderer = Yt;
$.Lexer = ue;
$.lexer = ue.lex;
$.Tokenizer = We;
$.Hooks = Be;
$.parse = $;
$.options;
$.setOptions;
$.use;
$.walkTokens;
$.parseInline;
ge.parse;
ue.lex;
function mi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function cr(n) {
  return n instanceof Map ? n.clear = n.delete = n.set = function() {
    throw new Error("map is read-only");
  } : n instanceof Set && (n.add = n.clear = n.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(n), Object.getOwnPropertyNames(n).forEach((e) => {
    const t = n[e], r = typeof t;
    (r === "object" || r === "function") && !Object.isFrozen(t) && cr(t);
  }), n;
}
class on {
  /**
   * @param {CompiledMode} mode
   */
  constructor(e) {
    e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function lr(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function Ee(n, ...e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r in n)
    t[r] = n[r];
  return e.forEach(function(r) {
    for (const i in r)
      t[i] = r[i];
  }), /** @type {T} */
  t;
}
const _i = "</span>", cn = (n) => !!n.scope, Ei = (n, { prefix: e }) => {
  if (n.startsWith("language:"))
    return n.replace("language:", "language-");
  if (n.includes(".")) {
    const t = n.split(".");
    return [
      `${e}${t.shift()}`,
      ...t.map((r, i) => `${r}${"_".repeat(i + 1)}`)
    ].join(" ");
  }
  return `${e}${n}`;
};
class ki {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(e, t) {
    this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(e) {
    this.buffer += lr(e);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(e) {
    if (!cn(e)) return;
    const t = Ei(
      e.scope,
      { prefix: this.classPrefix }
    );
    this.span(t);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(e) {
    cn(e) && (this.buffer += _i);
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
  span(e) {
    this.buffer += `<span class="${e}">`;
  }
}
const ln = (n = {}) => {
  const e = { children: [] };
  return Object.assign(e, n), e;
};
class Xt {
  constructor() {
    this.rootNode = ln(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(e) {
    this.top.children.push(e);
  }
  /** @param {string} scope */
  openNode(e) {
    const t = ln({ scope: e });
    this.add(t), this.stack.push(t);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); ) ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(e) {
    return this.constructor._walk(e, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(e, t) {
    return typeof t == "string" ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((r) => this._walk(e, r)), e.closeNode(t)), e;
  }
  /**
   * @param {Node} node
   */
  static _collapse(e) {
    typeof e != "string" && e.children && (e.children.every((t) => typeof t == "string") ? e.children = [e.children.join("")] : e.children.forEach((t) => {
      Xt._collapse(t);
    }));
  }
}
class wi extends Xt {
  /**
   * @param {*} options
   */
  constructor(e) {
    super(), this.options = e;
  }
  /**
   * @param {string} text
   */
  addText(e) {
    e !== "" && this.add(e);
  }
  /** @param {string} scope */
  startScope(e) {
    this.openNode(e);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(e, t) {
    const r = e.root;
    t && (r.scope = `language:${t}`), this.add(r);
  }
  toHTML() {
    return new ki(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function Pe(n) {
  return n ? typeof n == "string" ? n : n.source : null;
}
function dr(n) {
  return ve("(?=", n, ")");
}
function yi(n) {
  return ve("(?:", n, ")*");
}
function Ni(n) {
  return ve("(?:", n, ")?");
}
function ve(...n) {
  return n.map((t) => Pe(t)).join("");
}
function vi(n) {
  const e = n[n.length - 1];
  return typeof e == "object" && e.constructor === Object ? (n.splice(n.length - 1, 1), e) : {};
}
function Qt(...n) {
  return "(" + (vi(n).capture ? "" : "?:") + n.map((r) => Pe(r)).join("|") + ")";
}
function ur(n) {
  return new RegExp(n.toString() + "|").exec("").length - 1;
}
function Si(n, e) {
  const t = n && n.exec(e);
  return t && t.index === 0;
}
const Ti = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Vt(n, { joinWith: e }) {
  let t = 0;
  return n.map((r) => {
    t += 1;
    const i = t;
    let s = Pe(r), c = "";
    for (; s.length > 0; ) {
      const o = Ti.exec(s);
      if (!o) {
        c += s;
        break;
      }
      c += s.substring(0, o.index), s = s.substring(o.index + o[0].length), o[0][0] === "\\" && o[1] ? c += "\\" + String(Number(o[1]) + i) : (c += o[0], o[0] === "(" && t++);
    }
    return c;
  }).map((r) => `(${r})`).join(e);
}
const xi = /\b\B/, gr = "[a-zA-Z]\\w*", Jt = "[a-zA-Z_]\\w*", pr = "\\b\\d+(\\.\\d+)?", br = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", hr = "\\b(0b[01]+)", Ri = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Ai = (n = {}) => {
  const e = /^#![ ]*\//;
  return n.binary && (n.begin = ve(
    e,
    /.*\b/,
    n.binary,
    /\b.*/
  )), Ee({
    scope: "meta",
    begin: e,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (t, r) => {
      t.index !== 0 && r.ignoreMatch();
    }
  }, n);
}, Ue = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, Oi = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [Ue]
}, Mi = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [Ue]
}, Ii = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, Je = function(n, e, t = {}) {
  const r = Ee(
    {
      scope: "comment",
      begin: n,
      end: e,
      contains: []
    },
    t
  );
  r.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: !0,
    relevance: 0
  });
  const i = Qt(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  return r.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: ve(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        i,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  ), r;
}, Ci = Je("//", "$"), Li = Je("/\\*", "\\*/"), Di = Je("#", "$"), Bi = {
  scope: "number",
  begin: pr,
  relevance: 0
}, Pi = {
  scope: "number",
  begin: br,
  relevance: 0
}, Ui = {
  scope: "number",
  begin: hr,
  relevance: 0
}, $i = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    Ue,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [Ue]
    }
  ]
}, zi = {
  scope: "title",
  begin: gr,
  relevance: 0
}, Fi = {
  scope: "title",
  begin: Jt,
  relevance: 0
}, Ki = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + Jt,
  relevance: 0
}, Hi = function(n) {
  return Object.assign(
    n,
    {
      /** @type {ModeCallback} */
      "on:begin": (e, t) => {
        t.data._beginMatch = e[1];
      },
      /** @type {ModeCallback} */
      "on:end": (e, t) => {
        t.data._beginMatch !== e[1] && t.ignoreMatch();
      }
    }
  );
};
var qe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: Oi,
  BACKSLASH_ESCAPE: Ue,
  BINARY_NUMBER_MODE: Ui,
  BINARY_NUMBER_RE: hr,
  COMMENT: Je,
  C_BLOCK_COMMENT_MODE: Li,
  C_LINE_COMMENT_MODE: Ci,
  C_NUMBER_MODE: Pi,
  C_NUMBER_RE: br,
  END_SAME_AS_BEGIN: Hi,
  HASH_COMMENT_MODE: Di,
  IDENT_RE: gr,
  MATCH_NOTHING_RE: xi,
  METHOD_GUARD: Ki,
  NUMBER_MODE: Bi,
  NUMBER_RE: pr,
  PHRASAL_WORDS_MODE: Ii,
  QUOTE_STRING_MODE: Mi,
  REGEXP_MODE: $i,
  RE_STARTERS_RE: Ri,
  SHEBANG: Ai,
  TITLE_MODE: zi,
  UNDERSCORE_IDENT_RE: Jt,
  UNDERSCORE_TITLE_MODE: Fi
});
function qi(n, e) {
  n.input[n.index - 1] === "." && e.ignoreMatch();
}
function Gi(n, e) {
  n.className !== void 0 && (n.scope = n.className, delete n.className);
}
function Zi(n, e) {
  e && n.beginKeywords && (n.begin = "\\b(" + n.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", n.__beforeBegin = qi, n.keywords = n.keywords || n.beginKeywords, delete n.beginKeywords, n.relevance === void 0 && (n.relevance = 0));
}
function Wi(n, e) {
  Array.isArray(n.illegal) && (n.illegal = Qt(...n.illegal));
}
function Yi(n, e) {
  if (n.match) {
    if (n.begin || n.end) throw new Error("begin & end are not supported with match");
    n.begin = n.match, delete n.match;
  }
}
function Xi(n, e) {
  n.relevance === void 0 && (n.relevance = 1);
}
const Qi = (n, e) => {
  if (!n.beforeMatch) return;
  if (n.starts) throw new Error("beforeMatch cannot be used with starts");
  const t = Object.assign({}, n);
  Object.keys(n).forEach((r) => {
    delete n[r];
  }), n.keywords = t.keywords, n.begin = ve(t.beforeMatch, dr(t.begin)), n.starts = {
    relevance: 0,
    contains: [
      Object.assign(t, { endsParent: !0 })
    ]
  }, n.relevance = 0, delete t.beforeMatch;
}, Vi = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
], Ji = "keyword";
function fr(n, e, t = Ji) {
  const r = /* @__PURE__ */ Object.create(null);
  return typeof n == "string" ? i(t, n.split(" ")) : Array.isArray(n) ? i(t, n) : Object.keys(n).forEach(function(s) {
    Object.assign(
      r,
      fr(n[s], e, s)
    );
  }), r;
  function i(s, c) {
    e && (c = c.map((o) => o.toLowerCase())), c.forEach(function(o) {
      const a = o.split("|");
      r[a[0]] = [s, ji(a[0], a[1])];
    });
  }
}
function ji(n, e) {
  return e ? Number(e) : ea(n) ? 0 : 1;
}
function ea(n) {
  return Vi.includes(n.toLowerCase());
}
const dn = {}, we = (n) => {
  console.error(n);
}, un = (n, ...e) => {
  console.log(`WARN: ${n}`, ...e);
}, Re = (n, e) => {
  dn[`${n}/${e}`] || (console.log(`Deprecated as of ${n}. ${e}`), dn[`${n}/${e}`] = !0);
}, Xe = new Error();
function mr(n, e, { key: t }) {
  let r = 0;
  const i = n[t], s = {}, c = {};
  for (let o = 1; o <= e.length; o++)
    c[o + r] = i[o], s[o + r] = !0, r += ur(e[o - 1]);
  n[t] = c, n[t]._emit = s, n[t]._multi = !0;
}
function ta(n) {
  if (Array.isArray(n.begin)) {
    if (n.skip || n.excludeBegin || n.returnBegin)
      throw we("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Xe;
    if (typeof n.beginScope != "object" || n.beginScope === null)
      throw we("beginScope must be object"), Xe;
    mr(n, n.begin, { key: "beginScope" }), n.begin = Vt(n.begin, { joinWith: "" });
  }
}
function na(n) {
  if (Array.isArray(n.end)) {
    if (n.skip || n.excludeEnd || n.returnEnd)
      throw we("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Xe;
    if (typeof n.endScope != "object" || n.endScope === null)
      throw we("endScope must be object"), Xe;
    mr(n, n.end, { key: "endScope" }), n.end = Vt(n.end, { joinWith: "" });
  }
}
function ra(n) {
  n.scope && typeof n.scope == "object" && n.scope !== null && (n.beginScope = n.scope, delete n.scope);
}
function ia(n) {
  ra(n), typeof n.beginScope == "string" && (n.beginScope = { _wrap: n.beginScope }), typeof n.endScope == "string" && (n.endScope = { _wrap: n.endScope }), ta(n), na(n);
}
function aa(n) {
  function e(c, o) {
    return new RegExp(
      Pe(c),
      "m" + (n.case_insensitive ? "i" : "") + (n.unicodeRegex ? "u" : "") + (o ? "g" : "")
    );
  }
  class t {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(o, a) {
      a.position = this.position++, this.matchIndexes[this.matchAt] = a, this.regexes.push([a, o]), this.matchAt += ur(o) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const o = this.regexes.map((a) => a[1]);
      this.matcherRe = e(Vt(o, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(o) {
      this.matcherRe.lastIndex = this.lastIndex;
      const a = this.matcherRe.exec(o);
      if (!a)
        return null;
      const d = a.findIndex((u, p) => p > 0 && u !== void 0), l = this.matchIndexes[d];
      return a.splice(0, d), Object.assign(a, l);
    }
  }
  class r {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(o) {
      if (this.multiRegexes[o]) return this.multiRegexes[o];
      const a = new t();
      return this.rules.slice(o).forEach(([d, l]) => a.addRule(d, l)), a.compile(), this.multiRegexes[o] = a, a;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(o, a) {
      this.rules.push([o, a]), a.type === "begin" && this.count++;
    }
    /** @param {string} s */
    exec(o) {
      const a = this.getMatcher(this.regexIndex);
      a.lastIndex = this.lastIndex;
      let d = a.exec(o);
      if (this.resumingScanAtSamePosition() && !(d && d.index === this.lastIndex)) {
        const l = this.getMatcher(0);
        l.lastIndex = this.lastIndex + 1, d = l.exec(o);
      }
      return d && (this.regexIndex += d.position + 1, this.regexIndex === this.count && this.considerAll()), d;
    }
  }
  function i(c) {
    const o = new r();
    return c.contains.forEach((a) => o.addRule(a.begin, { rule: a, type: "begin" })), c.terminatorEnd && o.addRule(c.terminatorEnd, { type: "end" }), c.illegal && o.addRule(c.illegal, { type: "illegal" }), o;
  }
  function s(c, o) {
    const a = (
      /** @type CompiledMode */
      c
    );
    if (c.isCompiled) return a;
    [
      Gi,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      Yi,
      ia,
      Qi
    ].forEach((l) => l(c, o)), n.compilerExtensions.forEach((l) => l(c, o)), c.__beforeBegin = null, [
      Zi,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      Wi,
      // default to 1 relevance if not specified
      Xi
    ].forEach((l) => l(c, o)), c.isCompiled = !0;
    let d = null;
    return typeof c.keywords == "object" && c.keywords.$pattern && (c.keywords = Object.assign({}, c.keywords), d = c.keywords.$pattern, delete c.keywords.$pattern), d = d || /\w+/, c.keywords && (c.keywords = fr(c.keywords, n.case_insensitive)), a.keywordPatternRe = e(d, !0), o && (c.begin || (c.begin = /\B|\b/), a.beginRe = e(a.begin), !c.end && !c.endsWithParent && (c.end = /\B|\b/), c.end && (a.endRe = e(a.end)), a.terminatorEnd = Pe(a.end) || "", c.endsWithParent && o.terminatorEnd && (a.terminatorEnd += (c.end ? "|" : "") + o.terminatorEnd)), c.illegal && (a.illegalRe = e(
      /** @type {RegExp | string} */
      c.illegal
    )), c.contains || (c.contains = []), c.contains = [].concat(...c.contains.map(function(l) {
      return sa(l === "self" ? c : l);
    })), c.contains.forEach(function(l) {
      s(
        /** @type Mode */
        l,
        a
      );
    }), c.starts && s(c.starts, o), a.matcher = i(a), a;
  }
  if (n.compilerExtensions || (n.compilerExtensions = []), n.contains && n.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return n.classNameAliases = Ee(n.classNameAliases || {}), s(
    /** @type Mode */
    n
  );
}
function _r(n) {
  return n ? n.endsWithParent || _r(n.starts) : !1;
}
function sa(n) {
  return n.variants && !n.cachedVariants && (n.cachedVariants = n.variants.map(function(e) {
    return Ee(n, { variants: null }, e);
  })), n.cachedVariants ? n.cachedVariants : _r(n) ? Ee(n, { starts: n.starts ? Ee(n.starts) : null }) : Object.isFrozen(n) ? Ee(n) : n;
}
var oa = "11.11.1";
class ca extends Error {
  constructor(e, t) {
    super(e), this.name = "HTMLInjectionError", this.html = t;
  }
}
const et = lr, gn = Ee, pn = Symbol("nomatch"), la = 7, Er = function(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null), r = [];
  let i = !0;
  const s = "Could not find the language '{}', did you forget to load/include a language module?", c = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let o = {
    ignoreUnescapedHTML: !1,
    throwUnescapedHTML: !1,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: wi
  };
  function a(b) {
    return o.noHighlightRe.test(b);
  }
  function d(b) {
    let E = b.className + " ";
    E += b.parentNode ? b.parentNode.className : "";
    const S = o.languageDetectRe.exec(E);
    if (S) {
      const B = v(S[1]);
      return B || (un(s.replace("{}", S[1])), un("Falling back to no-highlight mode for this block.", b)), B ? S[1] : "no-highlight";
    }
    return E.split(/\s+/).find((B) => a(B) || v(B));
  }
  function l(b, E, S) {
    let B = "", H = "";
    typeof E == "object" ? (B = b, S = E.ignoreIllegals, H = E.language) : (Re("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Re("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), H = b, B = E), S === void 0 && (S = !0);
    const V = {
      code: B,
      language: H
    };
    ee("before:highlight", V);
    const re = V.result ? V.result : u(V.language, V.code, S);
    return re.code = V.code, ee("after:highlight", re), re;
  }
  function u(b, E, S, B) {
    const H = /* @__PURE__ */ Object.create(null);
    function V(m, y) {
      return m.keywords[y];
    }
    function re() {
      if (!T.keywords) {
        J.addText(U);
        return;
      }
      let m = 0;
      T.keywordPatternRe.lastIndex = 0;
      let y = T.keywordPatternRe.exec(U), O = "";
      for (; y; ) {
        O += U.substring(m, y.index);
        const P = le.case_insensitive ? y[0].toLowerCase() : y[0], X = V(T, P);
        if (X) {
          const [de, Fe] = X;
          if (J.addText(O), O = "", H[P] = (H[P] || 0) + 1, H[P] <= la && (Te += Fe), de.startsWith("_"))
            O += y[0];
          else {
            const je = le.classNameAliases[de] || de;
            Y(y[0], je);
          }
        } else
          O += y[0];
        m = T.keywordPatternRe.lastIndex, y = T.keywordPatternRe.exec(U);
      }
      O += U.substring(m), J.addText(O);
    }
    function pe() {
      if (U === "") return;
      let m = null;
      if (typeof T.subLanguage == "string") {
        if (!e[T.subLanguage]) {
          J.addText(U);
          return;
        }
        m = u(T.subLanguage, U, !0, ze[T.subLanguage]), ze[T.subLanguage] = /** @type {CompiledMode} */
        m._top;
      } else
        m = h(U, T.subLanguage.length ? T.subLanguage : null);
      T.relevance > 0 && (Te += m.relevance), J.__addSublanguage(m._emitter, m.language);
    }
    function Z() {
      T.subLanguage != null ? pe() : re(), U = "";
    }
    function Y(m, y) {
      m !== "" && (J.startScope(y), J.addText(m), J.endScope());
    }
    function be(m, y) {
      let O = 1;
      const P = y.length - 1;
      for (; O <= P; ) {
        if (!m._emit[O]) {
          O++;
          continue;
        }
        const X = le.classNameAliases[m[O]] || m[O], de = y[O];
        X ? Y(de, X) : (U = de, re(), U = ""), O++;
      }
    }
    function W(m, y) {
      return m.scope && typeof m.scope == "string" && J.openNode(le.classNameAliases[m.scope] || m.scope), m.beginScope && (m.beginScope._wrap ? (Y(U, le.classNameAliases[m.beginScope._wrap] || m.beginScope._wrap), U = "") : m.beginScope._multi && (be(m.beginScope, y), U = "")), T = Object.create(m, { parent: { value: T } }), T;
    }
    function q(m, y, O) {
      let P = Si(m.endRe, O);
      if (P) {
        if (m["on:end"]) {
          const X = new on(m);
          m["on:end"](y, X), X.isMatchIgnored && (P = !1);
        }
        if (P) {
          for (; m.endsParent && m.parent; )
            m = m.parent;
          return m;
        }
      }
      if (m.endsWithParent)
        return q(m.parent, y, O);
    }
    function te(m) {
      return T.matcher.regexIndex === 0 ? (U += m[0], 1) : (me = !0, 0);
    }
    function ie(m) {
      const y = m[0], O = m.rule, P = new on(O), X = [O.__beforeBegin, O["on:begin"]];
      for (const de of X)
        if (de && (de(m, P), P.isMatchIgnored))
          return te(y);
      return O.skip ? U += y : (O.excludeBegin && (U += y), Z(), !O.returnBegin && !O.excludeBegin && (U = y)), W(O, m), O.returnBegin ? 0 : y.length;
    }
    function ae(m) {
      const y = m[0], O = E.substring(m.index), P = q(T, m, O);
      if (!P)
        return pn;
      const X = T;
      T.endScope && T.endScope._wrap ? (Z(), Y(y, T.endScope._wrap)) : T.endScope && T.endScope._multi ? (Z(), be(T.endScope, m)) : X.skip ? U += y : (X.returnEnd || X.excludeEnd || (U += y), Z(), X.excludeEnd && (U = y));
      do
        T.scope && J.closeNode(), !T.skip && !T.subLanguage && (Te += T.relevance), T = T.parent;
      while (T !== P.parent);
      return P.starts && W(P.starts, m), X.returnEnd ? 0 : y.length;
    }
    function ce() {
      const m = [];
      for (let y = T; y !== le; y = y.parent)
        y.scope && m.unshift(y.scope);
      m.forEach((y) => J.openNode(y));
    }
    let oe = {};
    function Me(m, y) {
      const O = y && y[0];
      if (U += m, O == null)
        return Z(), 0;
      if (oe.type === "begin" && y.type === "end" && oe.index === y.index && O === "") {
        if (U += E.slice(y.index, y.index + 1), !i) {
          const P = new Error(`0 width match regex (${b})`);
          throw P.languageName = b, P.badRule = oe.rule, P;
        }
        return 1;
      }
      if (oe = y, y.type === "begin")
        return ie(y);
      if (y.type === "illegal" && !S) {
        const P = new Error('Illegal lexeme "' + O + '" for mode "' + (T.scope || "<unnamed>") + '"');
        throw P.mode = T, P;
      } else if (y.type === "end") {
        const P = ae(y);
        if (P !== pn)
          return P;
      }
      if (y.type === "illegal" && O === "")
        return U += `
`, 1;
      if (Ce > 1e5 && Ce > y.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return U += O, O.length;
    }
    const le = v(b);
    if (!le)
      throw we(s.replace("{}", b)), new Error('Unknown language: "' + b + '"');
    const Ie = aa(le);
    let Se = "", T = B || Ie;
    const ze = {}, J = new o.__emitter(o);
    ce();
    let U = "", Te = 0, fe = 0, Ce = 0, me = !1;
    try {
      if (le.__emitTokens)
        le.__emitTokens(E, J);
      else {
        for (T.matcher.considerAll(); ; ) {
          Ce++, me ? me = !1 : T.matcher.considerAll(), T.matcher.lastIndex = fe;
          const m = T.matcher.exec(E);
          if (!m) break;
          const y = E.substring(fe, m.index), O = Me(y, m);
          fe = m.index + O;
        }
        Me(E.substring(fe));
      }
      return J.finalize(), Se = J.toHTML(), {
        language: b,
        value: Se,
        relevance: Te,
        illegal: !1,
        _emitter: J,
        _top: T
      };
    } catch (m) {
      if (m.message && m.message.includes("Illegal"))
        return {
          language: b,
          value: et(E),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: m.message,
            index: fe,
            context: E.slice(fe - 100, fe + 100),
            mode: m.mode,
            resultSoFar: Se
          },
          _emitter: J
        };
      if (i)
        return {
          language: b,
          value: et(E),
          illegal: !1,
          relevance: 0,
          errorRaised: m,
          _emitter: J,
          _top: T
        };
      throw m;
    }
  }
  function p(b) {
    const E = {
      value: et(b),
      illegal: !1,
      relevance: 0,
      _top: c,
      _emitter: new o.__emitter(o)
    };
    return E._emitter.addText(b), E;
  }
  function h(b, E) {
    E = E || o.languages || Object.keys(e);
    const S = p(b), B = E.filter(v).filter(z).map(
      (Z) => u(Z, b, !1)
    );
    B.unshift(S);
    const H = B.sort((Z, Y) => {
      if (Z.relevance !== Y.relevance) return Y.relevance - Z.relevance;
      if (Z.language && Y.language) {
        if (v(Z.language).supersetOf === Y.language)
          return 1;
        if (v(Y.language).supersetOf === Z.language)
          return -1;
      }
      return 0;
    }), [V, re] = H, pe = V;
    return pe.secondBest = re, pe;
  }
  function g(b, E, S) {
    const B = E && t[E] || S;
    b.classList.add("hljs"), b.classList.add(`language-${B}`);
  }
  function _(b) {
    let E = null;
    const S = d(b);
    if (a(S)) return;
    if (ee(
      "before:highlightElement",
      { el: b, language: S }
    ), b.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", b);
      return;
    }
    if (b.children.length > 0 && (o.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(b)), o.throwUnescapedHTML))
      throw new ca(
        "One of your code blocks includes unescaped HTML.",
        b.innerHTML
      );
    E = b;
    const B = E.textContent, H = S ? l(B, { language: S, ignoreIllegals: !0 }) : h(B);
    b.innerHTML = H.value, b.dataset.highlighted = "yes", g(b, S, H.language), b.result = {
      language: H.language,
      // TODO: remove with version 11.0
      re: H.relevance,
      relevance: H.relevance
    }, H.secondBest && (b.secondBest = {
      language: H.secondBest.language,
      relevance: H.secondBest.relevance
    }), ee("after:highlightElement", { el: b, result: H, text: B });
  }
  function f(b) {
    o = gn(o, b);
  }
  const k = () => {
    L(), Re("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function w() {
    L(), Re("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let N = !1;
  function L() {
    function b() {
      L();
    }
    if (document.readyState === "loading") {
      N || window.addEventListener("DOMContentLoaded", b, !1), N = !0;
      return;
    }
    document.querySelectorAll(o.cssSelector).forEach(_);
  }
  function R(b, E) {
    let S = null;
    try {
      S = E(n);
    } catch (B) {
      if (we("Language definition for '{}' could not be registered.".replace("{}", b)), i)
        we(B);
      else
        throw B;
      S = c;
    }
    S.name || (S.name = b), e[b] = S, S.rawDefinition = E.bind(null, n), S.aliases && I(S.aliases, { languageName: b });
  }
  function A(b) {
    delete e[b];
    for (const E of Object.keys(t))
      t[E] === b && delete t[E];
  }
  function C() {
    return Object.keys(e);
  }
  function v(b) {
    return b = (b || "").toLowerCase(), e[b] || e[t[b]];
  }
  function I(b, { languageName: E }) {
    typeof b == "string" && (b = [b]), b.forEach((S) => {
      t[S.toLowerCase()] = E;
    });
  }
  function z(b) {
    const E = v(b);
    return E && !E.disableAutodetect;
  }
  function K(b) {
    b["before:highlightBlock"] && !b["before:highlightElement"] && (b["before:highlightElement"] = (E) => {
      b["before:highlightBlock"](
        Object.assign({ block: E.el }, E)
      );
    }), b["after:highlightBlock"] && !b["after:highlightElement"] && (b["after:highlightElement"] = (E) => {
      b["after:highlightBlock"](
        Object.assign({ block: E.el }, E)
      );
    });
  }
  function j(b) {
    K(b), r.push(b);
  }
  function Q(b) {
    const E = r.indexOf(b);
    E !== -1 && r.splice(E, 1);
  }
  function ee(b, E) {
    const S = b;
    r.forEach(function(B) {
      B[S] && B[S](E);
    });
  }
  function G(b) {
    return Re("10.7.0", "highlightBlock will be removed entirely in v12.0"), Re("10.7.0", "Please use highlightElement now."), _(b);
  }
  Object.assign(n, {
    highlight: l,
    highlightAuto: h,
    highlightAll: L,
    highlightElement: _,
    // TODO: Remove with v12 API
    highlightBlock: G,
    configure: f,
    initHighlighting: k,
    initHighlightingOnLoad: w,
    registerLanguage: R,
    unregisterLanguage: A,
    listLanguages: C,
    getLanguage: v,
    registerAliases: I,
    autoDetection: z,
    inherit: gn,
    addPlugin: j,
    removePlugin: Q
  }), n.debugMode = function() {
    i = !1;
  }, n.safeMode = function() {
    i = !0;
  }, n.versionString = oa, n.regex = {
    concat: ve,
    lookahead: dr,
    either: Qt,
    optional: Ni,
    anyNumberOfTimes: yi
  };
  for (const b in qe)
    typeof qe[b] == "object" && cr(qe[b]);
  return Object.assign(n, qe), n;
}, Ae = Er({});
Ae.newInstance = () => Er({});
var da = Ae;
Ae.HighlightJS = Ae;
Ae.default = Ae;
var tt, bn;
function ua() {
  if (bn) return tt;
  bn = 1;
  function n(e) {
    const t = e.regex, r = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), i = /[\p{L}0-9._:-]+/u, s = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    }, c = {
      begin: /\s/,
      contains: [
        {
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    }, o = e.inherit(c, {
      begin: /\(/,
      end: /\)/
    }), a = e.inherit(e.APOS_STRING_MODE, { className: "string" }), d = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), l = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: i,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: !0,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [s]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [s]
                },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: !0,
      unicodeRegex: !0,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            c,
            d,
            a,
            o,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    c,
                    o,
                    d,
                    a
                  ]
                }
              ]
            }
          ]
        },
        e.COMMENT(
          /<!--/,
          /-->/,
          { relevance: 10 }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        s,
        // xml processing instructions
        {
          className: "meta",
          end: /\?>/,
          variants: [
            {
              begin: /<\?xml/,
              relevance: 10,
              contains: [
                d
              ]
            },
            {
              begin: /<\?[a-z][a-z0-9]+/
            }
          ]
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending bracket.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [l],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [l],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: t.concat(
            /</,
            t.lookahead(t.concat(
              r,
              // <tag/>
              // <tag>
              // <tag ...
              t.either(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: r,
              relevance: 0,
              starts: l
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: t.concat(
            /<\//,
            t.lookahead(t.concat(
              r,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: r,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: !0
            }
          ]
        }
      ]
    };
  }
  return tt = n, tt;
}
var nt, hn;
function ga() {
  if (hn) return nt;
  hn = 1;
  function n(e) {
    const t = e.regex, r = {}, i = {
      begin: /\$\{/,
      end: /\}/,
      contains: [
        "self",
        {
          begin: /:-/,
          contains: [r]
        }
        // default values
      ]
    };
    Object.assign(r, {
      className: "variable",
      variants: [
        { begin: t.concat(
          /\$[\w\d#@][\w\d_]*/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          "(?![\\w\\d])(?![$])"
        ) },
        i
      ]
    });
    const s = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      contains: [e.BACKSLASH_ESCAPE]
    }, c = e.inherit(
      e.COMMENT(),
      {
        match: [
          /(^|\s)/,
          /#.*$/
        ],
        scope: {
          2: "comment"
        }
      }
    ), o = {
      begin: /<<-?\s*(?=\w+)/,
      starts: { contains: [
        e.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })
      ] }
    }, a = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        e.BACKSLASH_ESCAPE,
        r,
        s
      ]
    };
    s.contains.push(a);
    const d = {
      match: /\\"/
    }, l = {
      className: "string",
      begin: /'/,
      end: /'/
    }, u = {
      match: /\\'/
    }, p = {
      begin: /\$?\(\(/,
      end: /\)\)/,
      contains: [
        {
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        },
        e.NUMBER_MODE,
        r
      ]
    }, h = [
      "fish",
      "bash",
      "zsh",
      "sh",
      "csh",
      "ksh",
      "tcsh",
      "dash",
      "scsh"
    ], g = e.SHEBANG({
      binary: `(${h.join("|")})`,
      relevance: 10
    }), _ = {
      className: "function",
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: !0,
      contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0
    }, f = [
      "if",
      "then",
      "else",
      "elif",
      "fi",
      "time",
      "for",
      "while",
      "until",
      "in",
      "do",
      "done",
      "case",
      "esac",
      "coproc",
      "function",
      "select"
    ], k = [
      "true",
      "false"
    ], w = { match: /(\/[a-z._-]+)+/ }, N = [
      "break",
      "cd",
      "continue",
      "eval",
      "exec",
      "exit",
      "export",
      "getopts",
      "hash",
      "pwd",
      "readonly",
      "return",
      "shift",
      "test",
      "times",
      "trap",
      "umask",
      "unset"
    ], L = [
      "alias",
      "bind",
      "builtin",
      "caller",
      "command",
      "declare",
      "echo",
      "enable",
      "help",
      "let",
      "local",
      "logout",
      "mapfile",
      "printf",
      "read",
      "readarray",
      "source",
      "sudo",
      "type",
      "typeset",
      "ulimit",
      "unalias"
    ], R = [
      "autoload",
      "bg",
      "bindkey",
      "bye",
      "cap",
      "chdir",
      "clone",
      "comparguments",
      "compcall",
      "compctl",
      "compdescribe",
      "compfiles",
      "compgroups",
      "compquote",
      "comptags",
      "comptry",
      "compvalues",
      "dirs",
      "disable",
      "disown",
      "echotc",
      "echoti",
      "emulate",
      "fc",
      "fg",
      "float",
      "functions",
      "getcap",
      "getln",
      "history",
      "integer",
      "jobs",
      "kill",
      "limit",
      "log",
      "noglob",
      "popd",
      "print",
      "pushd",
      "pushln",
      "rehash",
      "sched",
      "setcap",
      "setopt",
      "stat",
      "suspend",
      "ttyctl",
      "unfunction",
      "unhash",
      "unlimit",
      "unsetopt",
      "vared",
      "wait",
      "whence",
      "where",
      "which",
      "zcompile",
      "zformat",
      "zftp",
      "zle",
      "zmodload",
      "zparseopts",
      "zprof",
      "zpty",
      "zregexparse",
      "zsocket",
      "zstyle",
      "ztcp"
    ], A = [
      "chcon",
      "chgrp",
      "chown",
      "chmod",
      "cp",
      "dd",
      "df",
      "dir",
      "dircolors",
      "ln",
      "ls",
      "mkdir",
      "mkfifo",
      "mknod",
      "mktemp",
      "mv",
      "realpath",
      "rm",
      "rmdir",
      "shred",
      "sync",
      "touch",
      "truncate",
      "vdir",
      "b2sum",
      "base32",
      "base64",
      "cat",
      "cksum",
      "comm",
      "csplit",
      "cut",
      "expand",
      "fmt",
      "fold",
      "head",
      "join",
      "md5sum",
      "nl",
      "numfmt",
      "od",
      "paste",
      "ptx",
      "pr",
      "sha1sum",
      "sha224sum",
      "sha256sum",
      "sha384sum",
      "sha512sum",
      "shuf",
      "sort",
      "split",
      "sum",
      "tac",
      "tail",
      "tr",
      "tsort",
      "unexpand",
      "uniq",
      "wc",
      "arch",
      "basename",
      "chroot",
      "date",
      "dirname",
      "du",
      "echo",
      "env",
      "expr",
      "factor",
      // "false", // keyword literal already
      "groups",
      "hostid",
      "id",
      "link",
      "logname",
      "nice",
      "nohup",
      "nproc",
      "pathchk",
      "pinky",
      "printenv",
      "printf",
      "pwd",
      "readlink",
      "runcon",
      "seq",
      "sleep",
      "stat",
      "stdbuf",
      "stty",
      "tee",
      "test",
      "timeout",
      // "true", // keyword literal already
      "tty",
      "uname",
      "unlink",
      "uptime",
      "users",
      "who",
      "whoami",
      "yes"
    ];
    return {
      name: "Bash",
      aliases: [
        "sh",
        "zsh"
      ],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: f,
        literal: k,
        built_in: [
          ...N,
          ...L,
          // Shell modifiers
          "set",
          "shopt",
          ...R,
          ...A
        ]
      },
      contains: [
        g,
        // to catch known shells and boost relevancy
        e.SHEBANG(),
        // to catch unknown shells but still highlight the shebang
        _,
        p,
        c,
        o,
        w,
        a,
        d,
        l,
        u,
        r
      ]
    };
  }
  return nt = n, nt;
}
var rt, fn;
function pa() {
  if (fn) return rt;
  fn = 1;
  function n(e) {
    const t = e.regex, r = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), i = "decltype\\(auto\\)", s = "[a-zA-Z_]\\w*::", o = "(" + i + "|" + t.optional(s) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", a = {
      className: "type",
      variants: [
        { begin: "\\b[a-z\\d_]*_t\\b" },
        { match: /\batomic_[a-z]{3,6}\b/ }
      ]
    }, l = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
          end: "'",
          illegal: "."
        },
        e.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, u = {
      className: "number",
      variants: [
        { match: /\b(0b[01']+)/ },
        { match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
        { match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/ },
        { match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ }
      ],
      relevance: 0
    }, p = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        e.inherit(l, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        r,
        e.C_BLOCK_COMMENT_MODE
      ]
    }, h = {
      className: "title",
      begin: t.optional(s) + e.IDENT_RE,
      relevance: 0
    }, g = t.optional(s) + e.IDENT_RE + "\\s*\\(", k = {
      keyword: [
        "asm",
        "auto",
        "break",
        "case",
        "continue",
        "default",
        "do",
        "else",
        "enum",
        "extern",
        "for",
        "fortran",
        "goto",
        "if",
        "inline",
        "register",
        "restrict",
        "return",
        "sizeof",
        "typeof",
        "typeof_unqual",
        "struct",
        "switch",
        "typedef",
        "union",
        "volatile",
        "while",
        "_Alignas",
        "_Alignof",
        "_Atomic",
        "_Generic",
        "_Noreturn",
        "_Static_assert",
        "_Thread_local",
        // aliases
        "alignas",
        "alignof",
        "noreturn",
        "static_assert",
        "thread_local",
        // not a C keyword but is, for all intents and purposes, treated exactly like one.
        "_Pragma"
      ],
      type: [
        "float",
        "double",
        "signed",
        "unsigned",
        "int",
        "short",
        "long",
        "char",
        "void",
        "_Bool",
        "_BitInt",
        "_Complex",
        "_Imaginary",
        "_Decimal32",
        "_Decimal64",
        "_Decimal96",
        "_Decimal128",
        "_Decimal64x",
        "_Decimal128x",
        "_Float16",
        "_Float32",
        "_Float64",
        "_Float128",
        "_Float32x",
        "_Float64x",
        "_Float128x",
        // modifiers
        "const",
        "static",
        "constexpr",
        // aliases
        "complex",
        "bool",
        "imaginary"
      ],
      literal: "true false NULL",
      // TODO: apply hinting work similar to what was done in cpp.js
      built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
    }, w = [
      p,
      a,
      r,
      e.C_BLOCK_COMMENT_MODE,
      u,
      l
    ], N = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: k,
      contains: w.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: k,
          contains: w.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, L = {
      begin: "(" + o + "[\\*&\\s]+)+" + g,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: k,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: i,
          keywords: k,
          relevance: 0
        },
        {
          begin: g,
          returnBegin: !0,
          contains: [e.inherit(h, { className: "title.function" })],
          relevance: 0
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: k,
          relevance: 0,
          contains: [
            r,
            e.C_BLOCK_COMMENT_MODE,
            l,
            u,
            a,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: k,
              relevance: 0,
              contains: [
                "self",
                r,
                e.C_BLOCK_COMMENT_MODE,
                l,
                u,
                a
              ]
            }
          ]
        },
        a,
        r,
        e.C_BLOCK_COMMENT_MODE,
        p
      ]
    };
    return {
      name: "C",
      aliases: ["h"],
      keywords: k,
      // Until differentiations are added between `c` and `cpp`, `c` will
      // not be auto-detected to avoid auto-detect conflicts between C and C++
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(
        N,
        L,
        w,
        [
          p,
          {
            begin: e.IDENT_RE + "::",
            keywords: k
          },
          {
            className: "class",
            beginKeywords: "enum class struct union",
            end: /[{;:<>=]/,
            contains: [
              { beginKeywords: "final class struct" },
              e.TITLE_MODE
            ]
          }
        ]
      ),
      exports: {
        preprocessor: p,
        strings: l,
        keywords: k
      }
    };
  }
  return rt = n, rt;
}
var it, mn;
function ba() {
  if (mn) return it;
  mn = 1;
  function n(e) {
    const t = e.regex, r = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), i = "decltype\\(auto\\)", s = "[a-zA-Z_]\\w*::", o = "(?!struct)(" + i + "|" + t.optional(s) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", a = {
      className: "type",
      begin: "\\b[a-z\\d_]*_t\\b"
    }, l = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
          end: "'",
          illegal: "."
        },
        e.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, u = {
      className: "number",
      variants: [
        // Floating-point literal.
        {
          begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
        },
        // Integer literal.
        {
          begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
          // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
          // literal highlight actually makes it stand out more.
        }
      ],
      relevance: 0
    }, p = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        e.inherit(l, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        r,
        e.C_BLOCK_COMMENT_MODE
      ]
    }, h = {
      className: "title",
      begin: t.optional(s) + e.IDENT_RE,
      relevance: 0
    }, g = t.optional(s) + e.IDENT_RE + "\\s*\\(", _ = [
      "alignas",
      "alignof",
      "and",
      "and_eq",
      "asm",
      "atomic_cancel",
      "atomic_commit",
      "atomic_noexcept",
      "auto",
      "bitand",
      "bitor",
      "break",
      "case",
      "catch",
      "class",
      "co_await",
      "co_return",
      "co_yield",
      "compl",
      "concept",
      "const_cast|10",
      "consteval",
      "constexpr",
      "constinit",
      "continue",
      "decltype",
      "default",
      "delete",
      "do",
      "dynamic_cast|10",
      "else",
      "enum",
      "explicit",
      "export",
      "extern",
      "false",
      "final",
      "for",
      "friend",
      "goto",
      "if",
      "import",
      "inline",
      "module",
      "mutable",
      "namespace",
      "new",
      "noexcept",
      "not",
      "not_eq",
      "nullptr",
      "operator",
      "or",
      "or_eq",
      "override",
      "private",
      "protected",
      "public",
      "reflexpr",
      "register",
      "reinterpret_cast|10",
      "requires",
      "return",
      "sizeof",
      "static_assert",
      "static_cast|10",
      "struct",
      "switch",
      "synchronized",
      "template",
      "this",
      "thread_local",
      "throw",
      "transaction_safe",
      "transaction_safe_dynamic",
      "true",
      "try",
      "typedef",
      "typeid",
      "typename",
      "union",
      "using",
      "virtual",
      "volatile",
      "while",
      "xor",
      "xor_eq"
    ], f = [
      "bool",
      "char",
      "char16_t",
      "char32_t",
      "char8_t",
      "double",
      "float",
      "int",
      "long",
      "short",
      "void",
      "wchar_t",
      "unsigned",
      "signed",
      "const",
      "static"
    ], k = [
      "any",
      "auto_ptr",
      "barrier",
      "binary_semaphore",
      "bitset",
      "complex",
      "condition_variable",
      "condition_variable_any",
      "counting_semaphore",
      "deque",
      "false_type",
      "flat_map",
      "flat_set",
      "future",
      "imaginary",
      "initializer_list",
      "istringstream",
      "jthread",
      "latch",
      "lock_guard",
      "multimap",
      "multiset",
      "mutex",
      "optional",
      "ostringstream",
      "packaged_task",
      "pair",
      "promise",
      "priority_queue",
      "queue",
      "recursive_mutex",
      "recursive_timed_mutex",
      "scoped_lock",
      "set",
      "shared_future",
      "shared_lock",
      "shared_mutex",
      "shared_timed_mutex",
      "shared_ptr",
      "stack",
      "string_view",
      "stringstream",
      "timed_mutex",
      "thread",
      "true_type",
      "tuple",
      "unique_lock",
      "unique_ptr",
      "unordered_map",
      "unordered_multimap",
      "unordered_multiset",
      "unordered_set",
      "variant",
      "vector",
      "weak_ptr",
      "wstring",
      "wstring_view"
    ], w = [
      "abort",
      "abs",
      "acos",
      "apply",
      "as_const",
      "asin",
      "atan",
      "atan2",
      "calloc",
      "ceil",
      "cerr",
      "cin",
      "clog",
      "cos",
      "cosh",
      "cout",
      "declval",
      "endl",
      "exchange",
      "exit",
      "exp",
      "fabs",
      "floor",
      "fmod",
      "forward",
      "fprintf",
      "fputs",
      "free",
      "frexp",
      "fscanf",
      "future",
      "invoke",
      "isalnum",
      "isalpha",
      "iscntrl",
      "isdigit",
      "isgraph",
      "islower",
      "isprint",
      "ispunct",
      "isspace",
      "isupper",
      "isxdigit",
      "labs",
      "launder",
      "ldexp",
      "log",
      "log10",
      "make_pair",
      "make_shared",
      "make_shared_for_overwrite",
      "make_tuple",
      "make_unique",
      "malloc",
      "memchr",
      "memcmp",
      "memcpy",
      "memset",
      "modf",
      "move",
      "pow",
      "printf",
      "putchar",
      "puts",
      "realloc",
      "scanf",
      "sin",
      "sinh",
      "snprintf",
      "sprintf",
      "sqrt",
      "sscanf",
      "std",
      "stderr",
      "stdin",
      "stdout",
      "strcat",
      "strchr",
      "strcmp",
      "strcpy",
      "strcspn",
      "strlen",
      "strncat",
      "strncmp",
      "strncpy",
      "strpbrk",
      "strrchr",
      "strspn",
      "strstr",
      "swap",
      "tan",
      "tanh",
      "terminate",
      "to_underlying",
      "tolower",
      "toupper",
      "vfprintf",
      "visit",
      "vprintf",
      "vsprintf"
    ], R = {
      type: f,
      keyword: _,
      literal: [
        "NULL",
        "false",
        "nullopt",
        "nullptr",
        "true"
      ],
      built_in: ["_Pragma"],
      _type_hints: k
    }, A = {
      className: "function.dispatch",
      relevance: 0,
      keywords: {
        // Only for relevance, not highlighting.
        _hint: w
      },
      begin: t.concat(
        /\b/,
        /(?!decltype)/,
        /(?!if)/,
        /(?!for)/,
        /(?!switch)/,
        /(?!while)/,
        e.IDENT_RE,
        t.lookahead(/(<[^<>]+>|)\s*\(/)
      )
    }, C = [
      A,
      p,
      a,
      r,
      e.C_BLOCK_COMMENT_MODE,
      u,
      l
    ], v = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: R,
      contains: C.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: R,
          contains: C.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, I = {
      className: "function",
      begin: "(" + o + "[\\*&\\s]+)+" + g,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: R,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: i,
          keywords: R,
          relevance: 0
        },
        {
          begin: g,
          returnBegin: !0,
          contains: [h],
          relevance: 0
        },
        // needed because we do not have look-behind on the below rule
        // to prevent it from grabbing the final : in a :: pair
        {
          begin: /::/,
          relevance: 0
        },
        // initializers
        {
          begin: /:/,
          endsWithParent: !0,
          contains: [
            l,
            u
          ]
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: R,
          relevance: 0,
          contains: [
            r,
            e.C_BLOCK_COMMENT_MODE,
            l,
            u,
            a,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: R,
              relevance: 0,
              contains: [
                "self",
                r,
                e.C_BLOCK_COMMENT_MODE,
                l,
                u,
                a
              ]
            }
          ]
        },
        a,
        r,
        e.C_BLOCK_COMMENT_MODE,
        p
      ]
    };
    return {
      name: "C++",
      aliases: [
        "cc",
        "c++",
        "h++",
        "hpp",
        "hh",
        "hxx",
        "cxx"
      ],
      keywords: R,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(
        v,
        I,
        A,
        C,
        [
          p,
          {
            // containers: ie, `vector <int> rooms (9);`
            begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
            end: ">",
            keywords: R,
            contains: [
              "self",
              a
            ]
          },
          {
            begin: e.IDENT_RE + "::",
            keywords: R
          },
          {
            match: [
              // extra complexity to deal with `enum class` and `enum struct`
              /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
              /\s+/,
              /\w+/
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          }
        ]
      )
    };
  }
  return it = n, it;
}
var at, _n;
function ha() {
  if (_n) return at;
  _n = 1;
  function n(e) {
    const t = [
      "bool",
      "byte",
      "char",
      "decimal",
      "delegate",
      "double",
      "dynamic",
      "enum",
      "float",
      "int",
      "long",
      "nint",
      "nuint",
      "object",
      "sbyte",
      "short",
      "string",
      "ulong",
      "uint",
      "ushort"
    ], r = [
      "public",
      "private",
      "protected",
      "static",
      "internal",
      "protected",
      "abstract",
      "async",
      "extern",
      "override",
      "unsafe",
      "virtual",
      "new",
      "sealed",
      "partial"
    ], i = [
      "default",
      "false",
      "null",
      "true"
    ], s = [
      "abstract",
      "as",
      "base",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "do",
      "else",
      "event",
      "explicit",
      "extern",
      "finally",
      "fixed",
      "for",
      "foreach",
      "goto",
      "if",
      "implicit",
      "in",
      "interface",
      "internal",
      "is",
      "lock",
      "namespace",
      "new",
      "operator",
      "out",
      "override",
      "params",
      "private",
      "protected",
      "public",
      "readonly",
      "record",
      "ref",
      "return",
      "scoped",
      "sealed",
      "sizeof",
      "stackalloc",
      "static",
      "struct",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "unchecked",
      "unsafe",
      "using",
      "virtual",
      "void",
      "volatile",
      "while"
    ], c = [
      "add",
      "alias",
      "and",
      "ascending",
      "args",
      "async",
      "await",
      "by",
      "descending",
      "dynamic",
      "equals",
      "file",
      "from",
      "get",
      "global",
      "group",
      "init",
      "into",
      "join",
      "let",
      "nameof",
      "not",
      "notnull",
      "on",
      "or",
      "orderby",
      "partial",
      "record",
      "remove",
      "required",
      "scoped",
      "select",
      "set",
      "unmanaged",
      "value|0",
      "var",
      "when",
      "where",
      "with",
      "yield"
    ], o = {
      keyword: s.concat(c),
      built_in: t,
      literal: i
    }, a = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), d = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
      ],
      relevance: 0
    }, l = {
      className: "string",
      begin: /"""("*)(?!")(.|\n)*?"""\1/,
      relevance: 1
    }, u = {
      className: "string",
      begin: '@"',
      end: '"',
      contains: [{ begin: '""' }]
    }, p = e.inherit(u, { illegal: /\n/ }), h = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: o
    }, g = e.inherit(h, { illegal: /\n/ }), _ = {
      className: "string",
      begin: /\$"/,
      end: '"',
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        e.BACKSLASH_ESCAPE,
        g
      ]
    }, f = {
      className: "string",
      begin: /\$@"/,
      end: '"',
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        h
      ]
    }, k = e.inherit(f, {
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        g
      ]
    });
    h.contains = [
      f,
      _,
      u,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      e.C_BLOCK_COMMENT_MODE
    ], g.contains = [
      k,
      _,
      p,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
    ];
    const w = { variants: [
      l,
      f,
      _,
      u,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ] }, N = {
      begin: "<",
      end: ">",
      contains: [
        { beginKeywords: "in out" },
        a
      ]
    }, L = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", R = {
      // prevents expressions like `@class` from incorrect flagging
      // `class` as a keyword
      begin: "@" + e.IDENT_RE,
      relevance: 0
    };
    return {
      name: "C#",
      aliases: [
        "cs",
        "c#"
      ],
      keywords: o,
      illegal: /::/,
      contains: [
        e.COMMENT(
          "///",
          "$",
          {
            returnBegin: !0,
            contains: [
              {
                className: "doctag",
                variants: [
                  {
                    begin: "///",
                    relevance: 0
                  },
                  { begin: "<!--|-->" },
                  {
                    begin: "</?",
                    end: ">"
                  }
                ]
              }
            ]
          }
        ),
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
        },
        w,
        d,
        {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [
            { beginKeywords: "where class" },
            a,
            N,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            a,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            a,
            N,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // [Attributes("")]
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: !0,
          end: "\\]",
          excludeEnd: !0,
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/
            }
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new return throw await else",
          relevance: 0
        },
        {
          className: "function",
          begin: "(" + L + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: o,
          contains: [
            // prevents these from being highlighted `title`
            {
              beginKeywords: r.join(" "),
              relevance: 0
            },
            {
              begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
              returnBegin: !0,
              contains: [
                e.TITLE_MODE,
                N
              ],
              relevance: 0
            },
            { match: /\(\)/ },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: o,
              relevance: 0,
              contains: [
                w,
                d,
                e.C_BLOCK_COMMENT_MODE
              ]
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        R
      ]
    };
  }
  return at = n, at;
}
var st, En;
function fa() {
  if (En) return st;
  En = 1;
  const n = (d) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: d.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        d.APOS_STRING_MODE,
        d.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: d.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), e = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], t = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...e,
    ...t
  ], i = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), s = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), c = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), o = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse();
  function a(d) {
    const l = d.regex, u = n(d), p = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, h = "and or not only", g = /@-?\w[\w]*(-\w+)*/, _ = "[a-zA-Z-][a-zA-Z0-9_-]*", f = [
      d.APOS_STRING_MODE,
      d.QUOTE_STRING_MODE
    ];
    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: {
        // for visual continuity with `tag {}` and because we
        // don't have a great class for this?
        keyframePosition: "selector-tag"
      },
      contains: [
        u.BLOCK_COMMENT,
        p,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        u.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\." + _,
          relevance: 0
        },
        u.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + s.join("|") + ")" },
            { begin: ":(:)?(" + c.join("|") + ")" }
          ]
        },
        // we may actually need this (12/2020)
        // { // pseudo-selector params
        //   begin: /\(/,
        //   end: /\)/,
        //   contains: [ hljs.CSS_NUMBER_MODE ]
        // },
        u.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + o.join("|") + ")\\b"
        },
        // attribute values
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            u.BLOCK_COMMENT,
            u.HEXCOLOR,
            u.IMPORTANT,
            u.CSS_NUMBER_MODE,
            ...f,
            // needed to highlight these as strings and to avoid issues with
            // illegal characters that might be inside urls that would tigger the
            // languages illegal stack
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              // from keywords
              keywords: { built_in: "url data-uri" },
              contains: [
                ...f,
                {
                  className: "string",
                  // any character other than `)` as in `url()` will be the start
                  // of a string, which ends with `)` (from the parent mode)
                  begin: /[^)]/,
                  endsWithParent: !0,
                  excludeEnd: !0
                }
              ]
            },
            u.FUNCTION_DISPATCH
          ]
        },
        {
          begin: l.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          // break on Less variables @var: ...
          contains: [
            {
              className: "keyword",
              begin: g
            },
            {
              begin: /\s/,
              endsWithParent: !0,
              excludeEnd: !0,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: h,
                attribute: i.join(" ")
              },
              contains: [
                {
                  begin: /[a-z-]+(?=:)/,
                  className: "attribute"
                },
                ...f,
                u.CSS_NUMBER_MODE
              ]
            }
          ]
        },
        {
          className: "selector-tag",
          begin: "\\b(" + r.join("|") + ")\\b"
        }
      ]
    };
  }
  return st = a, st;
}
var ot, kn;
function ma() {
  if (kn) return ot;
  kn = 1;
  function n(e) {
    const t = e.regex, r = {
      begin: /<\/?[A-Za-z_]/,
      end: ">",
      subLanguage: "xml",
      relevance: 0
    }, i = {
      begin: "^[-\\*]{3,}",
      end: "$"
    }, s = {
      className: "code",
      variants: [
        // TODO: fix to allow these to work with sublanguage also
        { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
        { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
        // needed to allow markdown as a sublanguage to work
        {
          begin: "```",
          end: "```+[ ]*$"
        },
        {
          begin: "~~~",
          end: "~~~+[ ]*$"
        },
        { begin: "`.+?`" },
        {
          begin: "(?=^( {4}|\\t))",
          // use contains to gobble up multiple lines to allow the block to be whatever size
          // but only have a single open/close tag vs one per line
          contains: [
            {
              begin: "^( {4}|\\t)",
              end: "(\\n)$"
            }
          ],
          relevance: 0
        }
      ]
    }, c = {
      className: "bullet",
      begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
      end: "\\s+",
      excludeEnd: !0
    }, o = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: !0,
      contains: [
        {
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "link",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }
      ]
    }, a = /[A-Za-z][A-Za-z0-9+.-]*/, d = {
      variants: [
        // too much like nested array access in so many languages
        // to have any real relevance
        {
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        },
        // popular internet URLs
        {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        },
        {
          begin: t.concat(/\[.+?\]\(/, a, /:\/\/.*?\)/),
          relevance: 2
        },
        // relative urls
        {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        },
        // whatever else, lower relevance (might not be a link at all)
        {
          begin: /\[.*?\]\(.*?\)/,
          relevance: 0
        }
      ],
      returnBegin: !0,
      contains: [
        {
          // empty strings for alt or link text
          match: /\[(?=\])/
        },
        {
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        },
        {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }
      ]
    }, l = {
      className: "strong",
      contains: [],
      // defined later
      variants: [
        {
          begin: /_{2}(?!\s)/,
          end: /_{2}/
        },
        {
          begin: /\*{2}(?!\s)/,
          end: /\*{2}/
        }
      ]
    }, u = {
      className: "emphasis",
      contains: [],
      // defined later
      variants: [
        {
          begin: /\*(?![*\s])/,
          end: /\*/
        },
        {
          begin: /_(?![_\s])/,
          end: /_/,
          relevance: 0
        }
      ]
    }, p = e.inherit(l, { contains: [] }), h = e.inherit(u, { contains: [] });
    l.contains.push(h), u.contains.push(p);
    let g = [
      r,
      d
    ];
    return [
      l,
      u,
      p,
      h
    ].forEach((w) => {
      w.contains = w.contains.concat(g);
    }), g = g.concat(l, u), {
      name: "Markdown",
      aliases: [
        "md",
        "mkdown",
        "mkd"
      ],
      contains: [
        {
          className: "section",
          variants: [
            {
              begin: "^#{1,6}",
              end: "$",
              contains: g
            },
            {
              begin: "(?=^.+?\\n[=-]{2,}$)",
              contains: [
                { begin: "^[=-]*$" },
                {
                  begin: "^",
                  end: "\\n",
                  contains: g
                }
              ]
            }
          ]
        },
        r,
        c,
        l,
        u,
        {
          className: "quote",
          begin: "^>\\s+",
          contains: g,
          end: "$"
        },
        s,
        i,
        d,
        o,
        {
          //https://spec.commonmark.org/0.31.2/#entity-references
          scope: "literal",
          match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
        }
      ]
    };
  }
  return ot = n, ot;
}
var ct, wn;
function _a() {
  if (wn) return ct;
  wn = 1;
  function n(e) {
    const t = e.regex;
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [
        {
          className: "meta",
          relevance: 10,
          match: t.either(
            /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
            /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
            /^--- +\d+,\d+ +----$/
          )
        },
        {
          className: "comment",
          variants: [
            {
              begin: t.either(
                /Index: /,
                /^index/,
                /={3,}/,
                /^-{3}/,
                /^\*{3} /,
                /^\+{3}/,
                /^diff --git/
              ),
              end: /$/
            },
            { match: /^\*{15}$/ }
          ]
        },
        {
          className: "addition",
          begin: /^\+/,
          end: /$/
        },
        {
          className: "deletion",
          begin: /^-/,
          end: /$/
        },
        {
          className: "addition",
          begin: /^!/,
          end: /$/
        }
      ]
    };
  }
  return ct = n, ct;
}
var lt, yn;
function Ea() {
  if (yn) return lt;
  yn = 1;
  function n(e) {
    const t = e.regex, r = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", i = t.either(
      /\b([A-Z]+[a-z0-9]+)+/,
      // ends in caps
      /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
    ), s = t.concat(i, /(::\w+)*/), o = {
      "variable.constant": [
        "__FILE__",
        "__LINE__",
        "__ENCODING__"
      ],
      "variable.language": [
        "self",
        "super"
      ],
      keyword: [
        "alias",
        "and",
        "begin",
        "BEGIN",
        "break",
        "case",
        "class",
        "defined",
        "do",
        "else",
        "elsif",
        "end",
        "END",
        "ensure",
        "for",
        "if",
        "in",
        "module",
        "next",
        "not",
        "or",
        "redo",
        "require",
        "rescue",
        "retry",
        "return",
        "then",
        "undef",
        "unless",
        "until",
        "when",
        "while",
        "yield",
        ...[
          "include",
          "extend",
          "prepend",
          "public",
          "private",
          "protected",
          "raise",
          "throw"
        ]
      ],
      built_in: [
        "proc",
        "lambda",
        "attr_accessor",
        "attr_reader",
        "attr_writer",
        "define_method",
        "private_constant",
        "module_function"
      ],
      literal: [
        "true",
        "false",
        "nil"
      ]
    }, a = {
      className: "doctag",
      begin: "@[A-Za-z]+"
    }, d = {
      begin: "#<",
      end: ">"
    }, l = [
      e.COMMENT(
        "#",
        "$",
        { contains: [a] }
      ),
      e.COMMENT(
        "^=begin",
        "^=end",
        {
          contains: [a],
          relevance: 10
        }
      ),
      e.COMMENT("^__END__", e.MATCH_NOTHING_RE)
    ], u = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: o
    }, p = {
      className: "string",
      contains: [
        e.BACKSLASH_ESCAPE,
        u
      ],
      variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        {
          begin: /`/,
          end: /`/
        },
        {
          begin: /%[qQwWx]?\(/,
          end: /\)/
        },
        {
          begin: /%[qQwWx]?\[/,
          end: /\]/
        },
        {
          begin: /%[qQwWx]?\{/,
          end: /\}/
        },
        {
          begin: /%[qQwWx]?</,
          end: />/
        },
        {
          begin: /%[qQwWx]?\//,
          end: /\//
        },
        {
          begin: /%[qQwWx]?%/,
          end: /%/
        },
        {
          begin: /%[qQwWx]?-/,
          end: /-/
        },
        {
          begin: /%[qQwWx]?\|/,
          end: /\|/
        },
        // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
        // where ? is the last character of a preceding identifier, as in: `func?4`
        { begin: /\B\?(\\\d{1,3})/ },
        { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
        { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
        { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
        { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
        { begin: /\B\?\\?\S/ },
        // heredocs
        {
          // this guard makes sure that we have an entire heredoc and not a false
          // positive (auto-detect, etc.)
          begin: t.concat(
            /<<[-~]?'?/,
            t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
          ),
          contains: [
            e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              contains: [
                e.BACKSLASH_ESCAPE,
                u
              ]
            })
          ]
        }
      ]
    }, h = "[1-9](_?[0-9])*|0", g = "[0-9](_?[0-9])*", _ = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal integer/float, optionally exponential or rational, optionally imaginary
        { begin: `\\b(${h})(\\.(${g}))?([eE][+-]?(${g})|r)?i?\\b` },
        // explicit decimal/binary/octal/hexadecimal integer,
        // optionally rational and/or imaginary
        { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
        // 0-prefixed implicit octal integer, optionally rational and/or imaginary
        { begin: "\\b0(_?[0-7])+r?i?\\b" }
      ]
    }, f = {
      variants: [
        {
          match: /\(\)/
        },
        {
          className: "params",
          begin: /\(/,
          end: /(?=\))/,
          excludeBegin: !0,
          endsParent: !0,
          keywords: o
        }
      ]
    }, C = [
      p,
      {
        variants: [
          {
            match: [
              /class\s+/,
              s,
              /\s+<\s+/,
              s
            ]
          },
          {
            match: [
              /\b(class|module)\s+/,
              s
            ]
          }
        ],
        scope: {
          2: "title.class",
          4: "title.class.inherited"
        },
        keywords: o
      },
      {
        match: [
          /(include|extend)\s+/,
          s
        ],
        scope: {
          2: "title.class"
        },
        keywords: o
      },
      {
        relevance: 0,
        match: [
          s,
          /\.new[. (]/
        ],
        scope: {
          1: "title.class"
        }
      },
      {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      },
      {
        relevance: 0,
        match: i,
        scope: "title.class"
      },
      {
        match: [
          /def/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          f
        ]
      },
      {
        // swallow namespace qualifiers before symbols
        begin: e.IDENT_RE + "::"
      },
      {
        className: "symbol",
        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      },
      {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [
          p,
          { begin: r }
        ],
        relevance: 0
      },
      _,
      {
        // negative-look forward attempts to prevent false matches like:
        // @ident@ or $ident$ that might indicate this is not ruby at all
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
      },
      {
        className: "params",
        begin: /\|(?!=)/,
        end: /\|/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        // this could be a lot of things (in other languages) other than params
        keywords: o
      },
      {
        // regexp container
        begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [
          {
            className: "regexp",
            contains: [
              e.BACKSLASH_ESCAPE,
              u
            ],
            illegal: /\n/,
            variants: [
              {
                begin: "/",
                end: "/[a-z]*"
              },
              {
                begin: /%r\{/,
                end: /\}[a-z]*/
              },
              {
                begin: "%r\\(",
                end: "\\)[a-z]*"
              },
              {
                begin: "%r!",
                end: "![a-z]*"
              },
              {
                begin: "%r\\[",
                end: "\\][a-z]*"
              }
            ]
          }
        ].concat(d, l),
        relevance: 0
      }
    ].concat(d, l);
    u.contains = C, f.contains = C;
    const K = [
      {
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: C
        }
      },
      {
        className: "meta.prompt",
        begin: "^(" + "[>?]>" + "|" + "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]" + "|" + "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>" + ")(?=[ ])",
        starts: {
          end: "$",
          keywords: o,
          contains: C
        }
      }
    ];
    return l.unshift(d), {
      name: "Ruby",
      aliases: [
        "rb",
        "gemspec",
        "podspec",
        "thor",
        "irb"
      ],
      keywords: o,
      illegal: /\/\*/,
      contains: [e.SHEBANG({ binary: "ruby" })].concat(K).concat(l).concat(C)
    };
  }
  return lt = n, lt;
}
var dt, Nn;
function ka() {
  if (Nn) return dt;
  Nn = 1;
  function n(e) {
    const c = {
      keyword: [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var"
      ],
      type: [
        "bool",
        "byte",
        "complex64",
        "complex128",
        "error",
        "float32",
        "float64",
        "int8",
        "int16",
        "int32",
        "int64",
        "string",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int",
        "uint",
        "uintptr",
        "rune"
      ],
      literal: [
        "true",
        "false",
        "iota",
        "nil"
      ],
      built_in: [
        "append",
        "cap",
        "close",
        "complex",
        "copy",
        "imag",
        "len",
        "make",
        "new",
        "panic",
        "print",
        "println",
        "real",
        "recover",
        "delete"
      ]
    };
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: c,
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "string",
          variants: [
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            {
              begin: "`",
              end: "`"
            }
          ]
        },
        {
          className: "number",
          variants: [
            {
              match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
              // hex without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
              // hex with a present digit before . (making a digit afterwards optional)
              relevance: 0
            },
            {
              match: /-?\b0[oO](_?[0-7])*i?/,
              // leading 0o octal
              relevance: 0
            },
            {
              match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
              // decimal without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
              // decimal with a present digit before . (making a digit afterwards optional)
              relevance: 0
            }
          ]
        },
        {
          begin: /:=/
          // relevance booster
        },
        {
          className: "function",
          beginKeywords: "func",
          end: "\\s*(\\{|$)",
          excludeEnd: !0,
          contains: [
            e.TITLE_MODE,
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: c,
              illegal: /["']/
            }
          ]
        }
      ]
    };
  }
  return dt = n, dt;
}
var ut, vn;
function wa() {
  if (vn) return ut;
  vn = 1;
  function n(e) {
    const t = e.regex, r = /[_A-Za-z][_0-9A-Za-z]*/;
    return {
      name: "GraphQL",
      aliases: ["gql"],
      case_insensitive: !0,
      disableAutodetect: !1,
      keywords: {
        keyword: [
          "query",
          "mutation",
          "subscription",
          "type",
          "input",
          "schema",
          "directive",
          "interface",
          "union",
          "scalar",
          "fragment",
          "enum",
          "on"
        ],
        literal: [
          "true",
          "false",
          "null"
        ]
      },
      contains: [
        e.HASH_COMMENT_MODE,
        e.QUOTE_STRING_MODE,
        e.NUMBER_MODE,
        {
          scope: "punctuation",
          match: /[.]{3}/,
          relevance: 0
        },
        {
          scope: "punctuation",
          begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
          relevance: 0
        },
        {
          scope: "variable",
          begin: /\$/,
          end: /\W/,
          excludeEnd: !0,
          relevance: 0
        },
        {
          scope: "meta",
          match: /@\w+/,
          excludeEnd: !0
        },
        {
          scope: "symbol",
          begin: t.concat(r, t.lookahead(/\s*:/)),
          relevance: 0
        }
      ],
      illegal: [
        /[;<']/,
        /BEGIN/
      ]
    };
  }
  return ut = n, ut;
}
var gt, Sn;
function ya() {
  if (Sn) return gt;
  Sn = 1;
  function n(e) {
    const t = e.regex, r = {
      className: "number",
      relevance: 0,
      variants: [
        { begin: /([+-]+)?[\d]+_[\d_]+/ },
        { begin: e.NUMBER_RE }
      ]
    }, i = e.COMMENT();
    i.variants = [
      {
        begin: /;/,
        end: /$/
      },
      {
        begin: /#/,
        end: /$/
      }
    ];
    const s = {
      className: "variable",
      variants: [
        { begin: /\$[\w\d"][\w\d_]*/ },
        { begin: /\$\{(.*?)\}/ }
      ]
    }, c = {
      className: "literal",
      begin: /\bon|off|true|false|yes|no\b/
    }, o = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: "'''",
          end: "'''",
          relevance: 10
        },
        {
          begin: '"""',
          end: '"""',
          relevance: 10
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "'",
          end: "'"
        }
      ]
    }, a = {
      begin: /\[/,
      end: /\]/,
      contains: [
        i,
        c,
        s,
        o,
        r,
        "self"
      ],
      relevance: 0
    }, d = /[A-Za-z0-9_-]+/, l = /"(\\"|[^"])*"/, u = /'[^']*'/, p = t.either(
      d,
      l,
      u
    ), h = t.concat(
      p,
      "(\\s*\\.\\s*",
      p,
      ")*",
      t.lookahead(/\s*=\s*[^#\s]/)
    );
    return {
      name: "TOML, also INI",
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [
        i,
        {
          className: "section",
          begin: /\[+/,
          end: /\]+/
        },
        {
          begin: h,
          className: "attr",
          starts: {
            end: /$/,
            contains: [
              i,
              a,
              c,
              s,
              o,
              r
            ]
          }
        }
      ]
    };
  }
  return gt = n, gt;
}
var pt, Tn;
function Na() {
  if (Tn) return pt;
  Tn = 1;
  var n = "[0-9](_*[0-9])*", e = `\\.(${n})`, t = "[0-9a-fA-F](_*[0-9a-fA-F])*", r = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${n})((${e})|\\.)?|(${e}))[eE][+-]?(${n})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${n})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${e})[fFdD]?\\b` },
      { begin: `\\b(${n})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${n})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${t})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function i(c, o, a) {
    return a === -1 ? "" : c.replace(o, (d) => i(c, o, a - 1));
  }
  function s(c) {
    const o = c.regex, a = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", d = a + i("(?:<" + a + "~~~(?:\\s*,\\s*" + a + "~~~)*>)?", /~~~/g, 2), g = {
      keyword: [
        "synchronized",
        "abstract",
        "private",
        "var",
        "static",
        "if",
        "const ",
        "for",
        "while",
        "strictfp",
        "finally",
        "protected",
        "import",
        "native",
        "final",
        "void",
        "enum",
        "else",
        "break",
        "transient",
        "catch",
        "instanceof",
        "volatile",
        "case",
        "assert",
        "package",
        "default",
        "public",
        "try",
        "switch",
        "continue",
        "throws",
        "protected",
        "public",
        "private",
        "module",
        "requires",
        "exports",
        "do",
        "sealed",
        "yield",
        "permits",
        "goto",
        "when"
      ],
      literal: [
        "false",
        "true",
        "null"
      ],
      type: [
        "char",
        "boolean",
        "long",
        "float",
        "int",
        "byte",
        "short",
        "double"
      ],
      built_in: [
        "super",
        "this"
      ]
    }, _ = {
      className: "meta",
      begin: "@" + a,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
          // allow nested () inside our annotation
        }
      ]
    }, f = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: g,
      relevance: 0,
      contains: [c.C_BLOCK_COMMENT_MODE],
      endsParent: !0
    };
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: g,
      illegal: /<\/|#/,
      contains: [
        c.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                // eat up @'s in emails to prevent them to be recognized as doctags
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        // relevance boost
        {
          begin: /import java\.[a-z]+\./,
          keywords: "import",
          relevance: 2
        },
        c.C_LINE_COMMENT_MODE,
        c.C_BLOCK_COMMENT_MODE,
        {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [c.BACKSLASH_ESCAPE]
        },
        c.APOS_STRING_MODE,
        c.QUOTE_STRING_MODE,
        {
          match: [
            /\b(?:class|interface|enum|extends|implements|new)/,
            /\s+/,
            a
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          // Exceptions for hyphenated keywords
          match: /non-sealed/,
          scope: "keyword"
        },
        {
          begin: [
            o.concat(/(?!else)/, a),
            /\s+/,
            a,
            /\s+/,
            /=(?!=)/
          ],
          className: {
            1: "type",
            3: "variable",
            5: "operator"
          }
        },
        {
          begin: [
            /record/,
            /\s+/,
            a
          ],
          className: {
            1: "keyword",
            3: "title.class"
          },
          contains: [
            f,
            c.C_LINE_COMMENT_MODE,
            c.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new throw return else",
          relevance: 0
        },
        {
          begin: [
            "(?:" + d + "\\s+)",
            c.UNDERSCORE_IDENT_RE,
            /\s*(?=\()/
          ],
          className: { 2: "title.function" },
          keywords: g,
          contains: [
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: g,
              relevance: 0,
              contains: [
                _,
                c.APOS_STRING_MODE,
                c.QUOTE_STRING_MODE,
                r,
                c.C_BLOCK_COMMENT_MODE
              ]
            },
            c.C_LINE_COMMENT_MODE,
            c.C_BLOCK_COMMENT_MODE
          ]
        },
        r,
        _
      ]
    };
  }
  return pt = s, pt;
}
var bt, xn;
function va() {
  if (xn) return bt;
  xn = 1;
  const n = "[A-Za-z$_][0-9A-Za-z$_]*", e = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    // It's reached stage 3, which is "recommended for implementation":
    "using"
  ], t = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], r = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], i = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], s = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], c = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], o = [].concat(
    s,
    r,
    i
  );
  function a(d) {
    const l = d.regex, u = (W, { after: q }) => {
      const te = "</" + W[0].slice(1);
      return W.input.indexOf(te, q) !== -1;
    }, p = n, h = {
      begin: "<>",
      end: "</>"
    }, g = /<[A-Za-z0-9\\._:-]+\s*\/>/, _ = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (W, q) => {
        const te = W[0].length + W.index, ie = W.input[te];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          ie === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          ie === ","
        ) {
          q.ignoreMatch();
          return;
        }
        ie === ">" && (u(W, { after: te }) || q.ignoreMatch());
        let ae;
        const ce = W.input.substring(te);
        if (ae = ce.match(/^\s*=/)) {
          q.ignoreMatch();
          return;
        }
        if ((ae = ce.match(/^\s+extends\s+/)) && ae.index === 0) {
          q.ignoreMatch();
          return;
        }
      }
    }, f = {
      $pattern: n,
      keyword: e,
      literal: t,
      built_in: o,
      "variable.language": c
    }, k = "[0-9](_?[0-9])*", w = `\\.(${k})`, N = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", L = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${N})((${w})|\\.)?|(${w}))[eE][+-]?(${k})\\b` },
        { begin: `\\b(${N})\\b((${w})\\b|\\.)?|(${w})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, R = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: f,
      contains: []
      // defined later
    }, A = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          d.BACKSLASH_ESCAPE,
          R
        ],
        subLanguage: "xml"
      }
    }, C = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          d.BACKSLASH_ESCAPE,
          R
        ],
        subLanguage: "css"
      }
    }, v = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          d.BACKSLASH_ESCAPE,
          R
        ],
        subLanguage: "graphql"
      }
    }, I = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        d.BACKSLASH_ESCAPE,
        R
      ]
    }, K = {
      className: "comment",
      variants: [
        d.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: p + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        d.C_BLOCK_COMMENT_MODE,
        d.C_LINE_COMMENT_MODE
      ]
    }, j = [
      d.APOS_STRING_MODE,
      d.QUOTE_STRING_MODE,
      A,
      C,
      v,
      I,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      L
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    R.contains = j.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: f,
      contains: [
        "self"
      ].concat(j)
    });
    const Q = [].concat(K, R.contains), ee = Q.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: f,
        contains: ["self"].concat(Q)
      }
    ]), G = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: f,
      contains: ee
    }, b = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            p,
            /\s+/,
            /extends/,
            /\s+/,
            l.concat(p, "(", l.concat(/\./, p), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            p
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, E = {
      relevance: 0,
      match: l.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...r,
          ...i
        ]
      }
    }, S = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, B = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            p,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [G],
      illegal: /%/
    }, H = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function V(W) {
      return l.concat("(?!", W.join("|"), ")");
    }
    const re = {
      match: l.concat(
        /\b/,
        V([
          ...s,
          "super",
          "import"
        ].map((W) => `${W}\\s*\\(`)),
        p,
        l.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, pe = {
      begin: l.concat(/\./, l.lookahead(
        l.concat(p, /(?![0-9A-Za-z$_(])/)
      )),
      end: p,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, Z = {
      match: [
        /get|set/,
        /\s+/,
        p,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        G
      ]
    }, Y = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + d.UNDERSCORE_IDENT_RE + ")\\s*=>", be = {
      match: [
        /const|var|let/,
        /\s+/,
        p,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        l.lookahead(Y)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        G
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: f,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: ee, CLASS_REFERENCE: E },
      illegal: /#(?![$_A-z])/,
      contains: [
        d.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        S,
        d.APOS_STRING_MODE,
        d.QUOTE_STRING_MODE,
        A,
        C,
        v,
        I,
        K,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        L,
        E,
        {
          scope: "attr",
          match: p + l.lookahead(":"),
          relevance: 0
        },
        be,
        {
          // "value" container
          begin: "(" + d.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            K,
            d.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: Y,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: d.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: f,
                      contains: ee
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: h.begin, end: h.end },
                { match: g },
                {
                  begin: _.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": _.isTrulyOpeningTag,
                  end: _.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: _.begin,
                  end: _.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        B,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + d.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            G,
            d.inherit(d.TITLE_MODE, { begin: p, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        pe,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + p,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [G]
        },
        re,
        H,
        b,
        Z,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  return bt = a, bt;
}
var ht, Rn;
function Sa() {
  if (Rn) return ht;
  Rn = 1;
  function n(e) {
    const t = {
      className: "attr",
      begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
      relevance: 1.01
    }, r = {
      match: /[{}[\],:]/,
      className: "punctuation",
      relevance: 0
    }, i = [
      "true",
      "false",
      "null"
    ], s = {
      scope: "literal",
      beginKeywords: i.join(" ")
    };
    return {
      name: "JSON",
      aliases: ["jsonc"],
      keywords: {
        literal: i
      },
      contains: [
        t,
        r,
        e.QUOTE_STRING_MODE,
        s,
        e.C_NUMBER_MODE,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE
      ],
      illegal: "\\S"
    };
  }
  return ht = n, ht;
}
var ft, An;
function Ta() {
  if (An) return ft;
  An = 1;
  var n = "[0-9](_*[0-9])*", e = `\\.(${n})`, t = "[0-9a-fA-F](_*[0-9a-fA-F])*", r = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${n})((${e})|\\.)?|(${e}))[eE][+-]?(${n})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${n})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${e})[fFdD]?\\b` },
      { begin: `\\b(${n})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${n})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${t})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function i(s) {
    const c = {
      keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
      built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null"
    }, o = {
      className: "keyword",
      begin: /\b(break|continue|return|this)\b/,
      starts: { contains: [
        {
          className: "symbol",
          begin: /@\w+/
        }
      ] }
    }, a = {
      className: "symbol",
      begin: s.UNDERSCORE_IDENT_RE + "@"
    }, d = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      contains: [s.C_NUMBER_MODE]
    }, l = {
      className: "variable",
      begin: "\\$" + s.UNDERSCORE_IDENT_RE
    }, u = {
      className: "string",
      variants: [
        {
          begin: '"""',
          end: '"""(?=[^"])',
          contains: [
            l,
            d
          ]
        },
        // Can't use built-in modes easily, as we want to use STRING in the meta
        // context as 'meta-string' and there's no syntax to remove explicitly set
        // classNames in built-in modes.
        {
          begin: "'",
          end: "'",
          illegal: /\n/,
          contains: [s.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [
            s.BACKSLASH_ESCAPE,
            l,
            d
          ]
        }
      ]
    };
    d.contains.push(u);
    const p = {
      className: "meta",
      begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + s.UNDERSCORE_IDENT_RE + ")?"
    }, h = {
      className: "meta",
      begin: "@" + s.UNDERSCORE_IDENT_RE,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            s.inherit(u, { className: "string" }),
            "self"
          ]
        }
      ]
    }, g = r, _ = s.COMMENT(
      "/\\*",
      "\\*/",
      { contains: [s.C_BLOCK_COMMENT_MODE] }
    ), f = { variants: [
      {
        className: "type",
        begin: s.UNDERSCORE_IDENT_RE
      },
      {
        begin: /\(/,
        end: /\)/,
        contains: []
        // defined later
      }
    ] }, k = f;
    return k.variants[1].contains = [f], f.variants[1].contains = [k], {
      name: "Kotlin",
      aliases: [
        "kt",
        "kts"
      ],
      keywords: c,
      contains: [
        s.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        s.C_LINE_COMMENT_MODE,
        _,
        o,
        a,
        p,
        h,
        {
          className: "function",
          beginKeywords: "fun",
          end: "[(]|$",
          returnBegin: !0,
          excludeEnd: !0,
          keywords: c,
          relevance: 5,
          contains: [
            {
              begin: s.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: !0,
              relevance: 0,
              contains: [s.UNDERSCORE_TITLE_MODE]
            },
            {
              className: "type",
              begin: /</,
              end: />/,
              keywords: "reified",
              relevance: 0
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: c,
              relevance: 0,
              contains: [
                {
                  begin: /:/,
                  end: /[=,\/]/,
                  endsWithParent: !0,
                  contains: [
                    f,
                    s.C_LINE_COMMENT_MODE,
                    _
                  ],
                  relevance: 0
                },
                s.C_LINE_COMMENT_MODE,
                _,
                p,
                h,
                u,
                s.C_NUMBER_MODE
              ]
            },
            _
          ]
        },
        {
          begin: [
            /class|interface|trait/,
            /\s+/,
            s.UNDERSCORE_IDENT_RE
          ],
          beginScope: {
            3: "title.class"
          },
          keywords: "class interface trait",
          end: /[:\{(]|$/,
          excludeEnd: !0,
          illegal: "extends implements",
          contains: [
            { beginKeywords: "public protected internal private constructor" },
            s.UNDERSCORE_TITLE_MODE,
            {
              className: "type",
              begin: /</,
              end: />/,
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0
            },
            {
              className: "type",
              begin: /[,:]\s*/,
              end: /[<\(,){\s]|$/,
              excludeBegin: !0,
              returnEnd: !0
            },
            p,
            h
          ]
        },
        u,
        {
          className: "meta",
          begin: "^#!/usr/bin/env",
          end: "$",
          illegal: `
`
        },
        g
      ]
    };
  }
  return ft = i, ft;
}
var mt, On;
function xa() {
  if (On) return mt;
  On = 1;
  const n = (l) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: l.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: l.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), e = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], t = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...e,
    ...t
  ], i = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), s = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), c = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), o = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse(), a = s.concat(c).sort().reverse();
  function d(l) {
    const u = n(l), p = a, h = "and or not only", g = "[\\w-]+", _ = "(" + g + "|@\\{" + g + "\\})", f = [], k = [], w = function(Q) {
      return {
        // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
        className: "string",
        begin: "~?" + Q + ".*?" + Q
      };
    }, N = function(Q, ee, G) {
      return {
        className: Q,
        begin: ee,
        relevance: G
      };
    }, L = {
      $pattern: /[a-z-]+/,
      keyword: h,
      attribute: i.join(" ")
    }, R = {
      // used only to properly balance nested parens inside mixin call, def. arg list
      begin: "\\(",
      end: "\\)",
      contains: k,
      keywords: L,
      relevance: 0
    };
    k.push(
      l.C_LINE_COMMENT_MODE,
      l.C_BLOCK_COMMENT_MODE,
      w("'"),
      w('"'),
      u.CSS_NUMBER_MODE,
      // fixme: it does not include dot for numbers like .5em :(
      {
        begin: "(url|data-uri)\\(",
        starts: {
          className: "string",
          end: "[\\)\\n]",
          excludeEnd: !0
        }
      },
      u.HEXCOLOR,
      R,
      N("variable", "@@?" + g, 10),
      N("variable", "@\\{" + g + "\\}"),
      N("built_in", "~?`[^`]*?`"),
      // inline javascript (or whatever host language) *multiline* string
      {
        // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
        className: "attribute",
        begin: g + "\\s*:",
        end: ":",
        returnBegin: !0,
        excludeEnd: !0
      },
      u.IMPORTANT,
      { beginKeywords: "and not" },
      u.FUNCTION_DISPATCH
    );
    const A = k.concat({
      begin: /\{/,
      end: /\}/,
      contains: f
    }), C = {
      beginKeywords: "when",
      endsWithParent: !0,
      contains: [{ beginKeywords: "and not" }].concat(k)
      // using this form to override VALUE’s 'function' match
    }, v = {
      begin: _ + "\\s*:",
      returnBegin: !0,
      end: /[;}]/,
      relevance: 0,
      contains: [
        { begin: /-(webkit|moz|ms|o)-/ },
        u.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + o.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: !0,
            illegal: "[<=$]",
            relevance: 0,
            contains: k
          }
        }
      ]
    }, I = {
      className: "keyword",
      begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: {
        end: "[;{}]",
        keywords: L,
        returnEnd: !0,
        contains: k,
        relevance: 0
      }
    }, z = {
      className: "variable",
      variants: [
        // using more strict pattern for higher relevance to increase chances of Less detection.
        // this is *the only* Less specific statement used in most of the sources, so...
        // (we’ll still often loose to the css-parser unless there's '//' comment,
        // simply because 1 variable just can't beat 99 properties :)
        {
          begin: "@" + g + "\\s*:",
          relevance: 15
        },
        { begin: "@" + g }
      ],
      starts: {
        end: "[;}]",
        returnEnd: !0,
        contains: A
      }
    }, K = {
      // first parse unambiguous selectors (i.e. those not starting with tag)
      // then fall into the scary lookahead-discriminator variant.
      // this mode also handles mixin definitions and calls
      variants: [
        {
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
          // mixin calls end with ';'
        },
        {
          begin: _,
          end: /\{/
        }
      ],
      returnBegin: !0,
      returnEnd: !0,
      illegal: `[<='$"]`,
      relevance: 0,
      contains: [
        l.C_LINE_COMMENT_MODE,
        l.C_BLOCK_COMMENT_MODE,
        C,
        N("keyword", "all\\b"),
        N("variable", "@\\{" + g + "\\}"),
        // otherwise it’s identified as tag
        {
          begin: "\\b(" + r.join("|") + ")\\b",
          className: "selector-tag"
        },
        u.CSS_NUMBER_MODE,
        N("selector-tag", _, 0),
        N("selector-id", "#" + _),
        N("selector-class", "\\." + _, 0),
        N("selector-tag", "&", 0),
        u.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          begin: ":(" + s.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + c.join("|") + ")"
        },
        {
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          contains: A
        },
        // argument list of parametric mixins
        { begin: "!important" },
        // eat !important after mixin call or it will be colored as tag
        u.FUNCTION_DISPATCH
      ]
    }, j = {
      begin: g + `:(:)?(${p.join("|")})`,
      returnBegin: !0,
      contains: [K]
    };
    return f.push(
      l.C_LINE_COMMENT_MODE,
      l.C_BLOCK_COMMENT_MODE,
      I,
      z,
      j,
      v,
      K,
      C,
      u.FUNCTION_DISPATCH
    ), {
      name: "Less",
      case_insensitive: !0,
      illegal: `[=>'/<($"]`,
      contains: f
    };
  }
  return mt = d, mt;
}
var _t, Mn;
function Ra() {
  if (Mn) return _t;
  Mn = 1;
  function n(e) {
    const t = "\\[=*\\[", r = "\\]=*\\]", i = {
      begin: t,
      end: r,
      contains: ["self"]
    }, s = [
      e.COMMENT("--(?!" + t + ")", "$"),
      e.COMMENT(
        "--" + t,
        r,
        {
          contains: [i],
          relevance: 10
        }
      )
    ];
    return {
      name: "Lua",
      aliases: ["pluto"],
      keywords: {
        $pattern: e.UNDERSCORE_IDENT_RE,
        literal: "true false nil",
        keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
        built_in: (
          // Metatags and globals:
          "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
        )
      },
      contains: s.concat([
        {
          className: "function",
          beginKeywords: "function",
          end: "\\)",
          contains: [
            e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
            {
              className: "params",
              begin: "\\(",
              endsWithParent: !0,
              contains: s
            }
          ].concat(s)
        },
        e.C_NUMBER_MODE,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        {
          className: "string",
          begin: t,
          end: r,
          contains: [i],
          relevance: 5
        }
      ])
    };
  }
  return _t = n, _t;
}
var Et, In;
function Aa() {
  if (In) return Et;
  In = 1;
  function n(e) {
    const t = {
      className: "variable",
      variants: [
        {
          begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
          contains: [e.BACKSLASH_ESCAPE]
        },
        { begin: /\$[@%<?\^\+\*]/ }
      ]
    }, r = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        e.BACKSLASH_ESCAPE,
        t
      ]
    }, i = {
      className: "variable",
      begin: /\$\([\w-]+\s/,
      end: /\)/,
      keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
      contains: [
        t,
        r
        // Added QUOTE_STRING as they can be a part of functions
      ]
    }, s = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, c = {
      className: "meta",
      begin: /^\.PHONY:/,
      end: /$/,
      keywords: {
        $pattern: /[\.\w]+/,
        keyword: ".PHONY"
      }
    }, o = {
      className: "section",
      begin: /^[^\s]+:/,
      end: /$/,
      contains: [t]
    };
    return {
      name: "Makefile",
      aliases: [
        "mk",
        "mak",
        "make"
      ],
      keywords: {
        $pattern: /[\w-]+/,
        keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
      },
      contains: [
        e.HASH_COMMENT_MODE,
        t,
        r,
        i,
        s,
        c,
        o
      ]
    };
  }
  return Et = n, Et;
}
var kt, Cn;
function Oa() {
  if (Cn) return kt;
  Cn = 1;
  function n(e) {
    const t = e.regex, r = [
      "abs",
      "accept",
      "alarm",
      "and",
      "atan2",
      "bind",
      "binmode",
      "bless",
      "break",
      "caller",
      "chdir",
      "chmod",
      "chomp",
      "chop",
      "chown",
      "chr",
      "chroot",
      "class",
      "close",
      "closedir",
      "connect",
      "continue",
      "cos",
      "crypt",
      "dbmclose",
      "dbmopen",
      "defined",
      "delete",
      "die",
      "do",
      "dump",
      "each",
      "else",
      "elsif",
      "endgrent",
      "endhostent",
      "endnetent",
      "endprotoent",
      "endpwent",
      "endservent",
      "eof",
      "eval",
      "exec",
      "exists",
      "exit",
      "exp",
      "fcntl",
      "field",
      "fileno",
      "flock",
      "for",
      "foreach",
      "fork",
      "format",
      "formline",
      "getc",
      "getgrent",
      "getgrgid",
      "getgrnam",
      "gethostbyaddr",
      "gethostbyname",
      "gethostent",
      "getlogin",
      "getnetbyaddr",
      "getnetbyname",
      "getnetent",
      "getpeername",
      "getpgrp",
      "getpriority",
      "getprotobyname",
      "getprotobynumber",
      "getprotoent",
      "getpwent",
      "getpwnam",
      "getpwuid",
      "getservbyname",
      "getservbyport",
      "getservent",
      "getsockname",
      "getsockopt",
      "given",
      "glob",
      "gmtime",
      "goto",
      "grep",
      "gt",
      "hex",
      "if",
      "index",
      "int",
      "ioctl",
      "join",
      "keys",
      "kill",
      "last",
      "lc",
      "lcfirst",
      "length",
      "link",
      "listen",
      "local",
      "localtime",
      "log",
      "lstat",
      "lt",
      "ma",
      "map",
      "method",
      "mkdir",
      "msgctl",
      "msgget",
      "msgrcv",
      "msgsnd",
      "my",
      "ne",
      "next",
      "no",
      "not",
      "oct",
      "open",
      "opendir",
      "or",
      "ord",
      "our",
      "pack",
      "package",
      "pipe",
      "pop",
      "pos",
      "print",
      "printf",
      "prototype",
      "push",
      "q|0",
      "qq",
      "quotemeta",
      "qw",
      "qx",
      "rand",
      "read",
      "readdir",
      "readline",
      "readlink",
      "readpipe",
      "recv",
      "redo",
      "ref",
      "rename",
      "require",
      "reset",
      "return",
      "reverse",
      "rewinddir",
      "rindex",
      "rmdir",
      "say",
      "scalar",
      "seek",
      "seekdir",
      "select",
      "semctl",
      "semget",
      "semop",
      "send",
      "setgrent",
      "sethostent",
      "setnetent",
      "setpgrp",
      "setpriority",
      "setprotoent",
      "setpwent",
      "setservent",
      "setsockopt",
      "shift",
      "shmctl",
      "shmget",
      "shmread",
      "shmwrite",
      "shutdown",
      "sin",
      "sleep",
      "socket",
      "socketpair",
      "sort",
      "splice",
      "split",
      "sprintf",
      "sqrt",
      "srand",
      "stat",
      "state",
      "study",
      "sub",
      "substr",
      "symlink",
      "syscall",
      "sysopen",
      "sysread",
      "sysseek",
      "system",
      "syswrite",
      "tell",
      "telldir",
      "tie",
      "tied",
      "time",
      "times",
      "tr",
      "truncate",
      "uc",
      "ucfirst",
      "umask",
      "undef",
      "unless",
      "unlink",
      "unpack",
      "unshift",
      "untie",
      "until",
      "use",
      "utime",
      "values",
      "vec",
      "wait",
      "waitpid",
      "wantarray",
      "warn",
      "when",
      "while",
      "write",
      "x|0",
      "xor",
      "y|0"
    ], i = /[dualxmsipngr]{0,12}/, s = {
      $pattern: /[\w.]+/,
      keyword: r.join(" ")
    }, c = {
      className: "subst",
      begin: "[$@]\\{",
      end: "\\}",
      keywords: s
    }, o = {
      begin: /->\{/,
      end: /\}/
      // contains defined later
    }, a = {
      scope: "attr",
      match: /\s+:\s*\w+(\s*\(.*?\))?/
    }, d = {
      scope: "variable",
      variants: [
        { begin: /\$\d/ },
        {
          begin: t.concat(
            /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
            // negative look-ahead tries to avoid matching patterns that are not
            // Perl at all like $ident$, @ident@, etc.
            "(?![A-Za-z])(?![@$%])"
          )
        },
        {
          // Only $= is a special Perl variable and one can't declare @= or %=.
          begin: /[$%@](?!")[^\s\w{=]|\$=/,
          relevance: 0
        }
      ],
      contains: [a]
    }, l = {
      className: "number",
      variants: [
        // decimal numbers:
        // include the case where a number starts with a dot (eg. .9), and
        // the leading 0? avoids mixing the first and second match on 0.x cases
        { match: /0?\.[0-9][0-9_]+\b/ },
        // include the special versioned number (eg. v5.38)
        { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
        // non-decimal numbers:
        { match: /\b0[0-7][0-7_]*\b/ },
        { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
        { match: /\b0b[0-1][0-1_]*\b/ }
      ],
      relevance: 0
    }, u = [
      e.BACKSLASH_ESCAPE,
      c,
      d
    ], p = [
      /!/,
      /\//,
      /\|/,
      /\?/,
      /'/,
      /"/,
      // valid but infrequent and weird
      /#/
      // valid but infrequent and weird
    ], h = (f, k, w = "\\1") => {
      const N = w === "\\1" ? w : t.concat(w, k);
      return t.concat(
        t.concat("(?:", f, ")"),
        k,
        /(?:\\.|[^\\\/])*?/,
        N,
        /(?:\\.|[^\\\/])*?/,
        w,
        i
      );
    }, g = (f, k, w) => t.concat(
      t.concat("(?:", f, ")"),
      k,
      /(?:\\.|[^\\\/])*?/,
      w,
      i
    ), _ = [
      d,
      e.HASH_COMMENT_MODE,
      e.COMMENT(
        /^=\w/,
        /=cut/,
        { endsWithParent: !0 }
      ),
      o,
      {
        className: "string",
        contains: u,
        variants: [
          {
            begin: "q[qwxr]?\\s*\\(",
            end: "\\)",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\[",
            end: "\\]",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\{",
            end: "\\}",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\|",
            end: "\\|",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*<",
            end: ">",
            relevance: 5
          },
          {
            begin: "qw\\s+q",
            end: "q",
            relevance: 5
          },
          {
            begin: "'",
            end: "'",
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            begin: '"',
            end: '"'
          },
          {
            begin: "`",
            end: "`",
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            begin: /\{\w+\}/,
            relevance: 0
          },
          {
            begin: "-?\\w+\\s*=>",
            relevance: 0
          }
        ]
      },
      l,
      {
        // regexp container
        begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        keywords: "split return print reverse grep",
        relevance: 0,
        contains: [
          e.HASH_COMMENT_MODE,
          {
            className: "regexp",
            variants: [
              // allow matching common delimiters
              { begin: h("s|tr|y", t.either(...p, { capture: !0 })) },
              // and then paired delmis
              { begin: h("s|tr|y", "\\(", "\\)") },
              { begin: h("s|tr|y", "\\[", "\\]") },
              { begin: h("s|tr|y", "\\{", "\\}") }
            ],
            relevance: 2
          },
          {
            className: "regexp",
            variants: [
              {
                // could be a comment in many languages so do not count
                // as relevant
                begin: /(m|qr)\/\//,
                relevance: 0
              },
              // prefix is optional with /regex/
              { begin: g("(?:m|qr)?", /\//, /\//) },
              // allow matching common delimiters
              { begin: g("m|qr", t.either(...p, { capture: !0 }), /\1/) },
              // allow common paired delmins
              { begin: g("m|qr", /\(/, /\)/) },
              { begin: g("m|qr", /\[/, /\]/) },
              { begin: g("m|qr", /\{/, /\}/) }
            ]
          }
        ]
      },
      {
        className: "function",
        beginKeywords: "sub method",
        end: "(\\s*\\(.*?\\))?[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [e.TITLE_MODE, a]
      },
      {
        className: "class",
        beginKeywords: "class",
        end: "[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [e.TITLE_MODE, a, l]
      },
      {
        begin: "-\\w\\b",
        relevance: 0
      },
      {
        begin: "^__DATA__$",
        end: "^__END__$",
        subLanguage: "mojolicious",
        contains: [
          {
            begin: "^@@.*",
            end: "$",
            className: "comment"
          }
        ]
      }
    ];
    return c.contains = _, o.contains = _, {
      name: "Perl",
      aliases: [
        "pl",
        "pm"
      ],
      keywords: s,
      contains: _
    };
  }
  return kt = n, kt;
}
var wt, Ln;
function Ma() {
  if (Ln) return wt;
  Ln = 1;
  function n(e) {
    const t = {
      className: "built_in",
      begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
    }, r = /[a-zA-Z@][a-zA-Z0-9_]*/, a = {
      "variable.language": [
        "this",
        "super"
      ],
      $pattern: r,
      keyword: [
        "while",
        "export",
        "sizeof",
        "typedef",
        "const",
        "struct",
        "for",
        "union",
        "volatile",
        "static",
        "mutable",
        "if",
        "do",
        "return",
        "goto",
        "enum",
        "else",
        "break",
        "extern",
        "asm",
        "case",
        "default",
        "register",
        "explicit",
        "typename",
        "switch",
        "continue",
        "inline",
        "readonly",
        "assign",
        "readwrite",
        "self",
        "@synchronized",
        "id",
        "typeof",
        "nonatomic",
        "IBOutlet",
        "IBAction",
        "strong",
        "weak",
        "copy",
        "in",
        "out",
        "inout",
        "bycopy",
        "byref",
        "oneway",
        "__strong",
        "__weak",
        "__block",
        "__autoreleasing",
        "@private",
        "@protected",
        "@public",
        "@try",
        "@property",
        "@end",
        "@throw",
        "@catch",
        "@finally",
        "@autoreleasepool",
        "@synthesize",
        "@dynamic",
        "@selector",
        "@optional",
        "@required",
        "@encode",
        "@package",
        "@import",
        "@defs",
        "@compatibility_alias",
        "__bridge",
        "__bridge_transfer",
        "__bridge_retained",
        "__bridge_retain",
        "__covariant",
        "__contravariant",
        "__kindof",
        "_Nonnull",
        "_Nullable",
        "_Null_unspecified",
        "__FUNCTION__",
        "__PRETTY_FUNCTION__",
        "__attribute__",
        "getter",
        "setter",
        "retain",
        "unsafe_unretained",
        "nonnull",
        "nullable",
        "null_unspecified",
        "null_resettable",
        "class",
        "instancetype",
        "NS_DESIGNATED_INITIALIZER",
        "NS_UNAVAILABLE",
        "NS_REQUIRES_SUPER",
        "NS_RETURNS_INNER_POINTER",
        "NS_INLINE",
        "NS_AVAILABLE",
        "NS_DEPRECATED",
        "NS_ENUM",
        "NS_OPTIONS",
        "NS_SWIFT_UNAVAILABLE",
        "NS_ASSUME_NONNULL_BEGIN",
        "NS_ASSUME_NONNULL_END",
        "NS_REFINED_FOR_SWIFT",
        "NS_SWIFT_NAME",
        "NS_SWIFT_NOTHROW",
        "NS_DURING",
        "NS_HANDLER",
        "NS_ENDHANDLER",
        "NS_VALUERETURN",
        "NS_VOIDRETURN"
      ],
      literal: [
        "false",
        "true",
        "FALSE",
        "TRUE",
        "nil",
        "YES",
        "NO",
        "NULL"
      ],
      built_in: [
        "dispatch_once_t",
        "dispatch_queue_t",
        "dispatch_sync",
        "dispatch_async",
        "dispatch_once"
      ],
      type: [
        "int",
        "float",
        "char",
        "unsigned",
        "signed",
        "short",
        "long",
        "double",
        "wchar_t",
        "unichar",
        "void",
        "bool",
        "BOOL",
        "id|0",
        "_Bool"
      ]
    }, d = {
      $pattern: r,
      keyword: [
        "@interface",
        "@class",
        "@protocol",
        "@implementation"
      ]
    };
    return {
      name: "Objective-C",
      aliases: [
        "mm",
        "objc",
        "obj-c",
        "obj-c++",
        "objective-c++"
      ],
      keywords: a,
      illegal: "</",
      contains: [
        t,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        e.C_NUMBER_MODE,
        e.QUOTE_STRING_MODE,
        e.APOS_STRING_MODE,
        {
          className: "string",
          variants: [
            {
              begin: '@"',
              end: '"',
              illegal: "\\n",
              contains: [e.BACKSLASH_ESCAPE]
            }
          ]
        },
        {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
          contains: [
            {
              begin: /\\\n/,
              relevance: 0
            },
            e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
            {
              className: "string",
              begin: /<.*?>/,
              end: /$/,
              illegal: "\\n"
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          className: "class",
          begin: "(" + d.keyword.join("|") + ")\\b",
          end: /(\{|$)/,
          excludeEnd: !0,
          keywords: d,
          contains: [e.UNDERSCORE_TITLE_MODE]
        },
        {
          begin: "\\." + e.UNDERSCORE_IDENT_RE,
          relevance: 0
        }
      ]
    };
  }
  return wt = n, wt;
}
var yt, Dn;
function Ia() {
  if (Dn) return yt;
  Dn = 1;
  function n(e) {
    const t = e.regex, r = /(?![A-Za-z0-9])(?![$])/, i = t.concat(
      /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
      r
    ), s = t.concat(
      /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
      r
    ), c = t.concat(
      /[A-Z]+/,
      r
    ), o = {
      scope: "variable",
      match: "\\$+" + i
    }, a = {
      scope: "meta",
      variants: [
        { begin: /<\?php/, relevance: 10 },
        // boost for obvious PHP
        { begin: /<\?=/ },
        // less relevant per PSR-1 which says not to use short-tags
        { begin: /<\?/, relevance: 0.1 },
        { begin: /\?>/ }
        // end php tag
      ]
    }, d = {
      scope: "subst",
      variants: [
        { begin: /\$\w+/ },
        {
          begin: /\{\$/,
          end: /\}/
        }
      ]
    }, l = e.inherit(e.APOS_STRING_MODE, { illegal: null }), u = e.inherit(e.QUOTE_STRING_MODE, {
      illegal: null,
      contains: e.QUOTE_STRING_MODE.contains.concat(d)
    }), p = {
      begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
      end: /[ \t]*(\w+)\b/,
      contains: e.QUOTE_STRING_MODE.contains.concat(d),
      "on:begin": (G, b) => {
        b.data._beginMatch = G[1] || G[2];
      },
      "on:end": (G, b) => {
        b.data._beginMatch !== G[1] && b.ignoreMatch();
      }
    }, h = e.END_SAME_AS_BEGIN({
      begin: /<<<[ \t]*'(\w+)'\n/,
      end: /[ \t]*(\w+)\b/
    }), g = `[ 	
]`, _ = {
      scope: "string",
      variants: [
        u,
        l,
        p,
        h
      ]
    }, f = {
      scope: "number",
      variants: [
        { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
        // Binary w/ underscore support
        { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
        // Octals w/ underscore support
        { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
        // Hex w/ underscore support
        // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
        { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
      ],
      relevance: 0
    }, k = [
      "false",
      "null",
      "true"
    ], w = [
      // Magic constants:
      // <https://www.php.net/manual/en/language.constants.predefined.php>
      "__CLASS__",
      "__DIR__",
      "__FILE__",
      "__FUNCTION__",
      "__COMPILER_HALT_OFFSET__",
      "__LINE__",
      "__METHOD__",
      "__NAMESPACE__",
      "__TRAIT__",
      // Function that look like language construct or language construct that look like function:
      // List of keywords that may not require parenthesis
      "die",
      "echo",
      "exit",
      "include",
      "include_once",
      "print",
      "require",
      "require_once",
      // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
      // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
      // Other keywords:
      // <https://www.php.net/manual/en/reserved.php>
      // <https://www.php.net/manual/en/language.types.type-juggling.php>
      "array",
      "abstract",
      "and",
      "as",
      "binary",
      "bool",
      "boolean",
      "break",
      "callable",
      "case",
      "catch",
      "class",
      "clone",
      "const",
      "continue",
      "declare",
      "default",
      "do",
      "double",
      "else",
      "elseif",
      "empty",
      "enddeclare",
      "endfor",
      "endforeach",
      "endif",
      "endswitch",
      "endwhile",
      "enum",
      "eval",
      "extends",
      "final",
      "finally",
      "float",
      "for",
      "foreach",
      "from",
      "global",
      "goto",
      "if",
      "implements",
      "instanceof",
      "insteadof",
      "int",
      "integer",
      "interface",
      "isset",
      "iterable",
      "list",
      "match|0",
      "mixed",
      "new",
      "never",
      "object",
      "or",
      "private",
      "protected",
      "public",
      "readonly",
      "real",
      "return",
      "string",
      "switch",
      "throw",
      "trait",
      "try",
      "unset",
      "use",
      "var",
      "void",
      "while",
      "xor",
      "yield"
    ], N = [
      // Standard PHP library:
      // <https://www.php.net/manual/en/book.spl.php>
      "Error|0",
      "AppendIterator",
      "ArgumentCountError",
      "ArithmeticError",
      "ArrayIterator",
      "ArrayObject",
      "AssertionError",
      "BadFunctionCallException",
      "BadMethodCallException",
      "CachingIterator",
      "CallbackFilterIterator",
      "CompileError",
      "Countable",
      "DirectoryIterator",
      "DivisionByZeroError",
      "DomainException",
      "EmptyIterator",
      "ErrorException",
      "Exception",
      "FilesystemIterator",
      "FilterIterator",
      "GlobIterator",
      "InfiniteIterator",
      "InvalidArgumentException",
      "IteratorIterator",
      "LengthException",
      "LimitIterator",
      "LogicException",
      "MultipleIterator",
      "NoRewindIterator",
      "OutOfBoundsException",
      "OutOfRangeException",
      "OuterIterator",
      "OverflowException",
      "ParentIterator",
      "ParseError",
      "RangeException",
      "RecursiveArrayIterator",
      "RecursiveCachingIterator",
      "RecursiveCallbackFilterIterator",
      "RecursiveDirectoryIterator",
      "RecursiveFilterIterator",
      "RecursiveIterator",
      "RecursiveIteratorIterator",
      "RecursiveRegexIterator",
      "RecursiveTreeIterator",
      "RegexIterator",
      "RuntimeException",
      "SeekableIterator",
      "SplDoublyLinkedList",
      "SplFileInfo",
      "SplFileObject",
      "SplFixedArray",
      "SplHeap",
      "SplMaxHeap",
      "SplMinHeap",
      "SplObjectStorage",
      "SplObserver",
      "SplPriorityQueue",
      "SplQueue",
      "SplStack",
      "SplSubject",
      "SplTempFileObject",
      "TypeError",
      "UnderflowException",
      "UnexpectedValueException",
      "UnhandledMatchError",
      // Reserved interfaces:
      // <https://www.php.net/manual/en/reserved.interfaces.php>
      "ArrayAccess",
      "BackedEnum",
      "Closure",
      "Fiber",
      "Generator",
      "Iterator",
      "IteratorAggregate",
      "Serializable",
      "Stringable",
      "Throwable",
      "Traversable",
      "UnitEnum",
      "WeakReference",
      "WeakMap",
      // Reserved classes:
      // <https://www.php.net/manual/en/reserved.classes.php>
      "Directory",
      "__PHP_Incomplete_Class",
      "parent",
      "php_user_filter",
      "self",
      "static",
      "stdClass"
    ], R = {
      keyword: w,
      literal: ((G) => {
        const b = [];
        return G.forEach((E) => {
          b.push(E), E.toLowerCase() === E ? b.push(E.toUpperCase()) : b.push(E.toLowerCase());
        }), b;
      })(k),
      built_in: N
    }, A = (G) => G.map((b) => b.replace(/\|\d+$/, "")), C = { variants: [
      {
        match: [
          /new/,
          t.concat(g, "+"),
          // to prevent built ins from being confused as the class constructor call
          t.concat("(?!", A(N).join("\\b|"), "\\b)"),
          s
        ],
        scope: {
          1: "keyword",
          4: "title.class"
        }
      }
    ] }, v = t.concat(i, "\\b(?!\\()"), I = { variants: [
      {
        match: [
          t.concat(
            /::/,
            t.lookahead(/(?!class\b)/)
          ),
          v
        ],
        scope: { 2: "variable.constant" }
      },
      {
        match: [
          /::/,
          /class/
        ],
        scope: { 2: "variable.language" }
      },
      {
        match: [
          s,
          t.concat(
            /::/,
            t.lookahead(/(?!class\b)/)
          ),
          v
        ],
        scope: {
          1: "title.class",
          3: "variable.constant"
        }
      },
      {
        match: [
          s,
          t.concat(
            "::",
            t.lookahead(/(?!class\b)/)
          )
        ],
        scope: { 1: "title.class" }
      },
      {
        match: [
          s,
          /::/,
          /class/
        ],
        scope: {
          1: "title.class",
          3: "variable.language"
        }
      }
    ] }, z = {
      scope: "attr",
      match: t.concat(i, t.lookahead(":"), t.lookahead(/(?!::)/))
    }, K = {
      relevance: 0,
      begin: /\(/,
      end: /\)/,
      keywords: R,
      contains: [
        z,
        o,
        I,
        e.C_BLOCK_COMMENT_MODE,
        _,
        f,
        C
      ]
    }, j = {
      relevance: 0,
      match: [
        /\b/,
        // to prevent keywords from being confused as the function title
        t.concat("(?!fn\\b|function\\b|", A(w).join("\\b|"), "|", A(N).join("\\b|"), "\\b)"),
        i,
        t.concat(g, "*"),
        t.lookahead(/(?=\()/)
      ],
      scope: { 3: "title.function.invoke" },
      contains: [K]
    };
    K.contains.push(j);
    const Q = [
      z,
      I,
      e.C_BLOCK_COMMENT_MODE,
      _,
      f,
      C
    ], ee = {
      begin: t.concat(
        /#\[\s*\\?/,
        t.either(
          s,
          c
        )
      ),
      beginScope: "meta",
      end: /]/,
      endScope: "meta",
      keywords: {
        literal: k,
        keyword: [
          "new",
          "array"
        ]
      },
      contains: [
        {
          begin: /\[/,
          end: /]/,
          keywords: {
            literal: k,
            keyword: [
              "new",
              "array"
            ]
          },
          contains: [
            "self",
            ...Q
          ]
        },
        ...Q,
        {
          scope: "meta",
          variants: [
            { match: s },
            { match: c }
          ]
        }
      ]
    };
    return {
      case_insensitive: !1,
      keywords: R,
      contains: [
        ee,
        e.HASH_COMMENT_MODE,
        e.COMMENT("//", "$"),
        e.COMMENT(
          "/\\*",
          "\\*/",
          { contains: [
            {
              scope: "doctag",
              match: "@[A-Za-z]+"
            }
          ] }
        ),
        {
          match: /__halt_compiler\(\);/,
          keywords: "__halt_compiler",
          starts: {
            scope: "comment",
            end: e.MATCH_NOTHING_RE,
            contains: [
              {
                match: /\?>/,
                scope: "meta",
                endsParent: !0
              }
            ]
          }
        },
        a,
        {
          scope: "variable.language",
          match: /\$this\b/
        },
        o,
        j,
        I,
        {
          match: [
            /const/,
            /\s/,
            i
          ],
          scope: {
            1: "keyword",
            3: "variable.constant"
          }
        },
        C,
        {
          scope: "function",
          relevance: 0,
          beginKeywords: "fn function",
          end: /[;{]/,
          excludeEnd: !0,
          illegal: "[$%\\[]",
          contains: [
            { beginKeywords: "use" },
            e.UNDERSCORE_TITLE_MODE,
            {
              begin: "=>",
              // No markup, just a relevance booster
              endsParent: !0
            },
            {
              scope: "params",
              begin: "\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: R,
              contains: [
                "self",
                ee,
                o,
                I,
                e.C_BLOCK_COMMENT_MODE,
                _,
                f
              ]
            }
          ]
        },
        {
          scope: "class",
          variants: [
            {
              beginKeywords: "enum",
              illegal: /[($"]/
            },
            {
              beginKeywords: "class interface trait",
              illegal: /[:($"]/
            }
          ],
          relevance: 0,
          end: /\{/,
          excludeEnd: !0,
          contains: [
            { beginKeywords: "extends implements" },
            e.UNDERSCORE_TITLE_MODE
          ]
        },
        // both use and namespace still use "old style" rules (vs multi-match)
        // because the namespace name can include `\` and we still want each
        // element to be treated as its own *individual* title
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: ";",
          illegal: /[.']/,
          contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
        },
        {
          beginKeywords: "use",
          relevance: 0,
          end: ";",
          contains: [
            // TODO: title.function vs title.class
            {
              match: /\b(as|const|function)\b/,
              scope: "keyword"
            },
            // TODO: could be title.class or title.function
            e.UNDERSCORE_TITLE_MODE
          ]
        },
        _,
        f
      ]
    };
  }
  return yt = n, yt;
}
var Nt, Bn;
function Ca() {
  if (Bn) return Nt;
  Bn = 1;
  function n(e) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [
        {
          begin: /<\?(php|=)?/,
          end: /\?>/,
          subLanguage: "php",
          contains: [
            // We don't want the php closing tag ?> to close the PHP block when
            // inside any of the following blocks:
            {
              begin: "/\\*",
              end: "\\*/",
              skip: !0
            },
            {
              begin: 'b"',
              end: '"',
              skip: !0
            },
            {
              begin: "b'",
              end: "'",
              skip: !0
            },
            e.inherit(e.APOS_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            }),
            e.inherit(e.QUOTE_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            })
          ]
        }
      ]
    };
  }
  return Nt = n, Nt;
}
var vt, Pn;
function La() {
  if (Pn) return vt;
  Pn = 1;
  function n(e) {
    return {
      name: "Plain text",
      aliases: [
        "text",
        "txt"
      ],
      disableAutodetect: !0
    };
  }
  return vt = n, vt;
}
var St, Un;
function Da() {
  if (Un) return St;
  Un = 1;
  function n(e) {
    const t = e.regex, r = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), i = [
      "and",
      "as",
      "assert",
      "async",
      "await",
      "break",
      "case",
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "match",
      "nonlocal|10",
      "not",
      "or",
      "pass",
      "raise",
      "return",
      "try",
      "while",
      "with",
      "yield"
    ], a = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: i,
      built_in: [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip"
      ],
      literal: [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True"
      ],
      type: [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union"
      ]
    }, d = {
      className: "meta",
      begin: /^(>>>|\.\.\.) /
    }, l = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: a,
      illegal: /#/
    }, u = {
      begin: /\{\{/,
      relevance: 0
    }, p = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [
            e.BACKSLASH_ESCAPE,
            d
          ],
          relevance: 10
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [
            e.BACKSLASH_ESCAPE,
            d
          ],
          relevance: 10
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [
            e.BACKSLASH_ESCAPE,
            d,
            u,
            l
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [
            e.BACKSLASH_ESCAPE,
            d,
            u,
            l
          ]
        },
        {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        },
        {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [
            e.BACKSLASH_ESCAPE,
            u,
            l
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [
            e.BACKSLASH_ESCAPE,
            u,
            l
          ]
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE
      ]
    }, h = "[0-9](_?[0-9])*", g = `(\\b(${h}))?\\.(${h})|\\b(${h})\\.`, _ = `\\b|${i.join("|")}`, f = {
      className: "number",
      relevance: 0,
      variants: [
        // exponentfloat, pointfloat
        // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
        // optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        // Note: no leading \b because floats can start with a decimal point
        // and we don't want to mishandle e.g. `fn(.5)`,
        // no trailing \b for pointfloat because it can end with a decimal point
        // and we don't want to mishandle e.g. `0..hex()`; this should be safe
        // because both MUST contain a decimal point and so cannot be confused with
        // the interior part of an identifier
        {
          begin: `(\\b(${h})|(${g}))[eE][+-]?(${h})[jJ]?(?=${_})`
        },
        {
          begin: `(${g})[jJ]?`
        },
        // decinteger, bininteger, octinteger, hexinteger
        // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
        // optionally "long" in Python 2
        // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
        // decinteger is optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_})`
        },
        {
          begin: `\\b0[bB](_?[01])+[lL]?(?=${_})`
        },
        {
          begin: `\\b0[oO](_?[0-7])+[lL]?(?=${_})`
        },
        {
          begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_})`
        },
        // imagnumber (digitpart-based)
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b(${h})[jJ](?=${_})`
        }
      ]
    }, k = {
      className: "comment",
      begin: t.lookahead(/# type:/),
      end: /$/,
      keywords: a,
      contains: [
        {
          // prevent keywords from coloring `type`
          begin: /# type:/
        },
        // comment within a datatype comment includes no keywords
        {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }
      ]
    }, w = {
      className: "params",
      variants: [
        // Exclude params in functions without params
        {
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: a,
          contains: [
            "self",
            d,
            f,
            p,
            e.HASH_COMMENT_MODE
          ]
        }
      ]
    };
    return l.contains = [
      p,
      f,
      d
    ], {
      name: "Python",
      aliases: [
        "py",
        "gyp",
        "ipython"
      ],
      unicodeRegex: !0,
      keywords: a,
      illegal: /(<\/|\?)|=>/,
      contains: [
        d,
        f,
        {
          // very common convention
          scope: "variable.language",
          match: /\bself\b/
        },
        {
          // eat "if" prior to string so that it won't accidentally be
          // labeled as an f-string
          beginKeywords: "if",
          relevance: 0
        },
        { match: /\bor\b/, scope: "keyword" },
        p,
        k,
        e.HASH_COMMENT_MODE,
        {
          match: [
            /\bdef/,
            /\s+/,
            r
          ],
          scope: {
            1: "keyword",
            3: "title.function"
          },
          contains: [w]
        },
        {
          variants: [
            {
              match: [
                /\bclass/,
                /\s+/,
                r,
                /\s*/,
                /\(\s*/,
                r,
                /\s*\)/
              ]
            },
            {
              match: [
                /\bclass/,
                /\s+/,
                r
              ]
            }
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            6: "title.class.inherited"
          }
        },
        {
          className: "meta",
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [
            f,
            w,
            p
          ]
        }
      ]
    };
  }
  return St = n, St;
}
var Tt, $n;
function Ba() {
  if ($n) return Tt;
  $n = 1;
  function n(e) {
    return {
      aliases: ["pycon"],
      contains: [
        {
          className: "meta.prompt",
          starts: {
            // a space separates the REPL prefix from the actual code
            // this is purely for cleaner HTML output
            end: / |$/,
            starts: {
              end: "$",
              subLanguage: "python"
            }
          },
          variants: [
            { begin: /^>>>(?=[ ]|$)/ },
            { begin: /^\.\.\.(?=[ ]|$)/ }
          ]
        }
      ]
    };
  }
  return Tt = n, Tt;
}
var xt, zn;
function Pa() {
  if (zn) return xt;
  zn = 1;
  function n(e) {
    const t = e.regex, r = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, i = t.either(
      // Special case: only hexadecimal binary powers can contain fractions
      /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
      // Hexadecimal numbers without fraction and optional binary power
      /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
      // Decimal numbers
      /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
    ), s = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, c = t.either(
      /[()]/,
      /[{}]/,
      /\[\[/,
      /[[\]]/,
      /\\/,
      /,/
    );
    return {
      name: "R",
      keywords: {
        $pattern: r,
        keyword: "function if in break next repeat else for while",
        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in: (
          // Builtin constants
          "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
        )
      },
      contains: [
        // Roxygen comments
        e.COMMENT(
          /#'/,
          /$/,
          { contains: [
            {
              // Handle `@examples` separately to cause all subsequent code
              // until the next `@`-tag on its own line to be kept as-is,
              // preventing highlighting. This code is example R code, so nested
              // doctags shouldn’t be treated as such. See
              // `test/markup/r/roxygen.txt` for an example.
              scope: "doctag",
              match: /@examples/,
              starts: {
                end: t.lookahead(t.either(
                  // end if another doc comment
                  /\n^#'\s*(?=@[a-zA-Z]+)/,
                  // or a line with no comment
                  /\n^(?!#')/
                )),
                endsParent: !0
              }
            },
            {
              // Handle `@param` to highlight the parameter name following
              // after.
              scope: "doctag",
              begin: "@param",
              end: /$/,
              contains: [
                {
                  scope: "variable",
                  variants: [
                    { match: r },
                    { match: /`(?:\\.|[^`\\])+`/ }
                  ],
                  endsParent: !0
                }
              ]
            },
            {
              scope: "doctag",
              match: /@[a-zA-Z]+/
            },
            {
              scope: "keyword",
              match: /\\[a-zA-Z]+/
            }
          ] }
        ),
        e.HASH_COMMENT_MODE,
        {
          scope: "string",
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            e.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\(/,
              end: /\)(-*)"/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\{/,
              end: /\}(-*)"/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\[/,
              end: /\](-*)"/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\(/,
              end: /\)(-*)'/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\{/,
              end: /\}(-*)'/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\[/,
              end: /\](-*)'/
            }),
            {
              begin: '"',
              end: '"',
              relevance: 0
            },
            {
              begin: "'",
              end: "'",
              relevance: 0
            }
          ]
        },
        // Matching numbers immediately following punctuation and operators is
        // tricky since we need to look at the character ahead of a number to
        // ensure the number is not part of an identifier, and we cannot use
        // negative look-behind assertions. So instead we explicitly handle all
        // possible combinations of (operator|punctuation), number.
        // TODO: replace with negative look-behind when available
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
        // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
        {
          relevance: 0,
          variants: [
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                s,
                i
              ]
            },
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                /%[^%]*%/,
                i
              ]
            },
            {
              scope: {
                1: "punctuation",
                2: "number"
              },
              match: [
                c,
                i
              ]
            },
            {
              scope: { 2: "number" },
              match: [
                /[^a-zA-Z0-9._]|^/,
                // not part of an identifier, or start of document
                i
              ]
            }
          ]
        },
        // Operators/punctuation when they're not directly followed by numbers
        {
          // Relevance boost for the most common assignment form.
          scope: { 3: "operator" },
          match: [
            r,
            /\s+/,
            /<-/,
            /\s+/
          ]
        },
        {
          scope: "operator",
          relevance: 0,
          variants: [
            { match: s },
            { match: /%[^%]*%/ }
          ]
        },
        {
          scope: "punctuation",
          relevance: 0,
          match: c
        },
        {
          // Escaped identifier
          begin: "`",
          end: "`",
          contains: [{ begin: /\\./ }]
        }
      ]
    };
  }
  return xt = n, xt;
}
var Rt, Fn;
function Ua() {
  if (Fn) return Rt;
  Fn = 1;
  function n(e) {
    const t = e.regex, r = /(r#)?/, i = t.concat(r, e.UNDERSCORE_IDENT_RE), s = t.concat(r, e.IDENT_RE), c = {
      className: "title.function.invoke",
      relevance: 0,
      begin: t.concat(
        /\b/,
        /(?!let|for|while|if|else|match\b)/,
        s,
        t.lookahead(/\s*\(/)
      )
    }, o = "([ui](8|16|32|64|128|size)|f(32|64))?", a = [
      "abstract",
      "as",
      "async",
      "await",
      "become",
      "box",
      "break",
      "const",
      "continue",
      "crate",
      "do",
      "dyn",
      "else",
      "enum",
      "extern",
      "false",
      "final",
      "fn",
      "for",
      "if",
      "impl",
      "in",
      "let",
      "loop",
      "macro",
      "match",
      "mod",
      "move",
      "mut",
      "override",
      "priv",
      "pub",
      "ref",
      "return",
      "self",
      "Self",
      "static",
      "struct",
      "super",
      "trait",
      "true",
      "try",
      "type",
      "typeof",
      "union",
      "unsafe",
      "unsized",
      "use",
      "virtual",
      "where",
      "while",
      "yield"
    ], d = [
      "true",
      "false",
      "Some",
      "None",
      "Ok",
      "Err"
    ], l = [
      // functions
      "drop ",
      // traits
      "Copy",
      "Send",
      "Sized",
      "Sync",
      "Drop",
      "Fn",
      "FnMut",
      "FnOnce",
      "ToOwned",
      "Clone",
      "Debug",
      "PartialEq",
      "PartialOrd",
      "Eq",
      "Ord",
      "AsRef",
      "AsMut",
      "Into",
      "From",
      "Default",
      "Iterator",
      "Extend",
      "IntoIterator",
      "DoubleEndedIterator",
      "ExactSizeIterator",
      "SliceConcatExt",
      "ToString",
      // macros
      "assert!",
      "assert_eq!",
      "bitflags!",
      "bytes!",
      "cfg!",
      "col!",
      "concat!",
      "concat_idents!",
      "debug_assert!",
      "debug_assert_eq!",
      "env!",
      "eprintln!",
      "panic!",
      "file!",
      "format!",
      "format_args!",
      "include_bytes!",
      "include_str!",
      "line!",
      "local_data_key!",
      "module_path!",
      "option_env!",
      "print!",
      "println!",
      "select!",
      "stringify!",
      "try!",
      "unimplemented!",
      "unreachable!",
      "vec!",
      "write!",
      "writeln!",
      "macro_rules!",
      "assert_ne!",
      "debug_assert_ne!"
    ], u = [
      "i8",
      "i16",
      "i32",
      "i64",
      "i128",
      "isize",
      "u8",
      "u16",
      "u32",
      "u64",
      "u128",
      "usize",
      "f32",
      "f64",
      "str",
      "char",
      "bool",
      "Box",
      "Option",
      "Result",
      "String",
      "Vec"
    ];
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: e.IDENT_RE + "!?",
        type: u,
        keyword: a,
        literal: d,
        built_in: l
      },
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
        e.inherit(e.QUOTE_STRING_MODE, {
          begin: /b?"/,
          illegal: null
        }),
        {
          className: "symbol",
          // negative lookahead to avoid matching `'`
          begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
        },
        {
          scope: "string",
          variants: [
            { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
            {
              begin: /b?'/,
              end: /'/,
              contains: [
                {
                  scope: "char.escape",
                  match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
                }
              ]
            }
          ]
        },
        {
          className: "number",
          variants: [
            { begin: "\\b0b([01_]+)" + o },
            { begin: "\\b0o([0-7_]+)" + o },
            { begin: "\\b0x([A-Fa-f0-9_]+)" + o },
            { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + o }
          ],
          relevance: 0
        },
        {
          begin: [
            /fn/,
            /\s+/,
            i
          ],
          className: {
            1: "keyword",
            3: "title.function"
          }
        },
        {
          className: "meta",
          begin: "#!?\\[",
          end: "\\]",
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/,
              contains: [
                e.BACKSLASH_ESCAPE
              ]
            }
          ]
        },
        {
          begin: [
            /let/,
            /\s+/,
            /(?:mut\s+)?/,
            i
          ],
          className: {
            1: "keyword",
            3: "keyword",
            4: "variable"
          }
        },
        // must come before impl/for rule later
        {
          begin: [
            /for/,
            /\s+/,
            i,
            /\s+/,
            /in/
          ],
          className: {
            1: "keyword",
            3: "variable",
            5: "keyword"
          }
        },
        {
          begin: [
            /type/,
            /\s+/,
            i
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: [
            /(?:trait|enum|struct|union|impl|for)/,
            /\s+/,
            i
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: {
            keyword: "Self",
            built_in: l,
            type: u
          }
        },
        {
          className: "punctuation",
          begin: "->"
        },
        c
      ]
    };
  }
  return Rt = n, Rt;
}
var At, Kn;
function $a() {
  if (Kn) return At;
  Kn = 1;
  const n = (d) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: d.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        d.APOS_STRING_MODE,
        d.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: d.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), e = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], t = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...e,
    ...t
  ], i = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), s = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), c = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), o = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse();
  function a(d) {
    const l = n(d), u = c, p = s, h = "@[a-z-]+", g = "and or not only", f = {
      className: "variable",
      begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
      relevance: 0
    };
    return {
      name: "SCSS",
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [
        d.C_LINE_COMMENT_MODE,
        d.C_BLOCK_COMMENT_MODE,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        l.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: "#[A-Za-z0-9_-]+",
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\.[A-Za-z0-9_-]+",
          relevance: 0
        },
        l.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-tag",
          begin: "\\b(" + r.join("|") + ")\\b",
          // was there, before, but why?
          relevance: 0
        },
        {
          className: "selector-pseudo",
          begin: ":(" + p.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + u.join("|") + ")"
        },
        f,
        {
          // pseudo-selector params
          begin: /\(/,
          end: /\)/,
          contains: [l.CSS_NUMBER_MODE]
        },
        l.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + o.join("|") + ")\\b"
        },
        { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
        {
          begin: /:/,
          end: /[;}{]/,
          relevance: 0,
          contains: [
            l.BLOCK_COMMENT,
            f,
            l.HEXCOLOR,
            l.CSS_NUMBER_MODE,
            d.QUOTE_STRING_MODE,
            d.APOS_STRING_MODE,
            l.IMPORTANT,
            l.FUNCTION_DISPATCH
          ]
        },
        // matching these here allows us to treat them more like regular CSS
        // rules so everything between the {} gets regular rule highlighting,
        // which is what we want for page and font-face
        {
          begin: "@(page|font-face)",
          keywords: {
            $pattern: h,
            keyword: "@page @font-face"
          }
        },
        {
          begin: "@",
          end: "[{;]",
          returnBegin: !0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: g,
            attribute: i.join(" ")
          },
          contains: [
            {
              begin: h,
              className: "keyword"
            },
            {
              begin: /[a-z-]+(?=:)/,
              className: "attribute"
            },
            f,
            d.QUOTE_STRING_MODE,
            d.APOS_STRING_MODE,
            l.HEXCOLOR,
            l.CSS_NUMBER_MODE
          ]
        },
        l.FUNCTION_DISPATCH
      ]
    };
  }
  return At = a, At;
}
var Ot, Hn;
function za() {
  if (Hn) return Ot;
  Hn = 1;
  function n(e) {
    return {
      name: "Shell Session",
      aliases: [
        "console",
        "shellsession"
      ],
      contains: [
        {
          className: "meta.prompt",
          // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
          // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
          // echo /path/to/home > t.exe
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: {
            end: /[^\\](?=\s*$)/,
            subLanguage: "bash"
          }
        }
      ]
    };
  }
  return Ot = n, Ot;
}
var Mt, qn;
function Fa() {
  if (qn) return Mt;
  qn = 1;
  function n(e) {
    const t = e.regex, r = e.COMMENT("--", "$"), i = {
      scope: "string",
      variants: [
        {
          begin: /'/,
          end: /'/,
          contains: [{ match: /''/ }]
        }
      ]
    }, s = {
      begin: /"/,
      end: /"/,
      contains: [{ match: /""/ }]
    }, c = [
      "true",
      "false",
      // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
      // "null",
      "unknown"
    ], o = [
      "double precision",
      "large object",
      "with timezone",
      "without timezone"
    ], a = [
      "bigint",
      "binary",
      "blob",
      "boolean",
      "char",
      "character",
      "clob",
      "date",
      "dec",
      "decfloat",
      "decimal",
      "float",
      "int",
      "integer",
      "interval",
      "nchar",
      "nclob",
      "national",
      "numeric",
      "real",
      "row",
      "smallint",
      "time",
      "timestamp",
      "varchar",
      "varying",
      // modifier (character varying)
      "varbinary"
    ], d = [
      "add",
      "asc",
      "collation",
      "desc",
      "final",
      "first",
      "last",
      "view"
    ], l = [
      "abs",
      "acos",
      "all",
      "allocate",
      "alter",
      "and",
      "any",
      "are",
      "array",
      "array_agg",
      "array_max_cardinality",
      "as",
      "asensitive",
      "asin",
      "asymmetric",
      "at",
      "atan",
      "atomic",
      "authorization",
      "avg",
      "begin",
      "begin_frame",
      "begin_partition",
      "between",
      "bigint",
      "binary",
      "blob",
      "boolean",
      "both",
      "by",
      "call",
      "called",
      "cardinality",
      "cascaded",
      "case",
      "cast",
      "ceil",
      "ceiling",
      "char",
      "char_length",
      "character",
      "character_length",
      "check",
      "classifier",
      "clob",
      "close",
      "coalesce",
      "collate",
      "collect",
      "column",
      "commit",
      "condition",
      "connect",
      "constraint",
      "contains",
      "convert",
      "copy",
      "corr",
      "corresponding",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "create",
      "cross",
      "cube",
      "cume_dist",
      "current",
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_row",
      "current_schema",
      "current_time",
      "current_timestamp",
      "current_path",
      "current_role",
      "current_transform_group_for_type",
      "current_user",
      "cursor",
      "cycle",
      "date",
      "day",
      "deallocate",
      "dec",
      "decimal",
      "decfloat",
      "declare",
      "default",
      "define",
      "delete",
      "dense_rank",
      "deref",
      "describe",
      "deterministic",
      "disconnect",
      "distinct",
      "double",
      "drop",
      "dynamic",
      "each",
      "element",
      "else",
      "empty",
      "end",
      "end_frame",
      "end_partition",
      "end-exec",
      "equals",
      "escape",
      "every",
      "except",
      "exec",
      "execute",
      "exists",
      "exp",
      "external",
      "extract",
      "false",
      "fetch",
      "filter",
      "first_value",
      "float",
      "floor",
      "for",
      "foreign",
      "frame_row",
      "free",
      "from",
      "full",
      "function",
      "fusion",
      "get",
      "global",
      "grant",
      "group",
      "grouping",
      "groups",
      "having",
      "hold",
      "hour",
      "identity",
      "in",
      "indicator",
      "initial",
      "inner",
      "inout",
      "insensitive",
      "insert",
      "int",
      "integer",
      "intersect",
      "intersection",
      "interval",
      "into",
      "is",
      "join",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "language",
      "large",
      "last_value",
      "lateral",
      "lead",
      "leading",
      "left",
      "like",
      "like_regex",
      "listagg",
      "ln",
      "local",
      "localtime",
      "localtimestamp",
      "log",
      "log10",
      "lower",
      "match",
      "match_number",
      "match_recognize",
      "matches",
      "max",
      "member",
      "merge",
      "method",
      "min",
      "minute",
      "mod",
      "modifies",
      "module",
      "month",
      "multiset",
      "national",
      "natural",
      "nchar",
      "nclob",
      "new",
      "no",
      "none",
      "normalize",
      "not",
      "nth_value",
      "ntile",
      "null",
      "nullif",
      "numeric",
      "octet_length",
      "occurrences_regex",
      "of",
      "offset",
      "old",
      "omit",
      "on",
      "one",
      "only",
      "open",
      "or",
      "order",
      "out",
      "outer",
      "over",
      "overlaps",
      "overlay",
      "parameter",
      "partition",
      "pattern",
      "per",
      "percent",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "period",
      "portion",
      "position",
      "position_regex",
      "power",
      "precedes",
      "precision",
      "prepare",
      "primary",
      "procedure",
      "ptf",
      "range",
      "rank",
      "reads",
      "real",
      "recursive",
      "ref",
      "references",
      "referencing",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "release",
      "result",
      "return",
      "returns",
      "revoke",
      "right",
      "rollback",
      "rollup",
      "row",
      "row_number",
      "rows",
      "running",
      "savepoint",
      "scope",
      "scroll",
      "search",
      "second",
      "seek",
      "select",
      "sensitive",
      "session_user",
      "set",
      "show",
      "similar",
      "sin",
      "sinh",
      "skip",
      "smallint",
      "some",
      "specific",
      "specifictype",
      "sql",
      "sqlexception",
      "sqlstate",
      "sqlwarning",
      "sqrt",
      "start",
      "static",
      "stddev_pop",
      "stddev_samp",
      "submultiset",
      "subset",
      "substring",
      "substring_regex",
      "succeeds",
      "sum",
      "symmetric",
      "system",
      "system_time",
      "system_user",
      "table",
      "tablesample",
      "tan",
      "tanh",
      "then",
      "time",
      "timestamp",
      "timezone_hour",
      "timezone_minute",
      "to",
      "trailing",
      "translate",
      "translate_regex",
      "translation",
      "treat",
      "trigger",
      "trim",
      "trim_array",
      "true",
      "truncate",
      "uescape",
      "union",
      "unique",
      "unknown",
      "unnest",
      "update",
      "upper",
      "user",
      "using",
      "value",
      "values",
      "value_of",
      "var_pop",
      "var_samp",
      "varbinary",
      "varchar",
      "varying",
      "versioning",
      "when",
      "whenever",
      "where",
      "width_bucket",
      "window",
      "with",
      "within",
      "without",
      "year"
    ], u = [
      "abs",
      "acos",
      "array_agg",
      "asin",
      "atan",
      "avg",
      "cast",
      "ceil",
      "ceiling",
      "coalesce",
      "corr",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "cume_dist",
      "dense_rank",
      "deref",
      "element",
      "exp",
      "extract",
      "first_value",
      "floor",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "last_value",
      "lead",
      "listagg",
      "ln",
      "log",
      "log10",
      "lower",
      "max",
      "min",
      "mod",
      "nth_value",
      "ntile",
      "nullif",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "position",
      "position_regex",
      "power",
      "rank",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "row_number",
      "sin",
      "sinh",
      "sqrt",
      "stddev_pop",
      "stddev_samp",
      "substring",
      "substring_regex",
      "sum",
      "tan",
      "tanh",
      "translate",
      "translate_regex",
      "treat",
      "trim",
      "trim_array",
      "unnest",
      "upper",
      "value_of",
      "var_pop",
      "var_samp",
      "width_bucket"
    ], p = [
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_schema",
      "current_transform_group_for_type",
      "current_user",
      "session_user",
      "system_time",
      "system_user",
      "current_time",
      "localtime",
      "current_timestamp",
      "localtimestamp"
    ], h = [
      "create table",
      "insert into",
      "primary key",
      "foreign key",
      "not null",
      "alter table",
      "add constraint",
      "grouping sets",
      "on overflow",
      "character set",
      "respect nulls",
      "ignore nulls",
      "nulls first",
      "nulls last",
      "depth first",
      "breadth first"
    ], g = u, _ = [
      ...l,
      ...d
    ].filter((A) => !u.includes(A)), f = {
      scope: "variable",
      match: /@[a-z0-9][a-z0-9_]*/
    }, k = {
      scope: "operator",
      match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
      relevance: 0
    }, w = {
      match: t.concat(/\b/, t.either(...g), /\s*\(/),
      relevance: 0,
      keywords: { built_in: g }
    };
    function N(A) {
      return t.concat(
        /\b/,
        t.either(...A.map((C) => C.replace(/\s+/, "\\s+"))),
        /\b/
      );
    }
    const L = {
      scope: "keyword",
      match: N(h),
      relevance: 0
    };
    function R(A, {
      exceptions: C,
      when: v
    } = {}) {
      const I = v;
      return C = C || [], A.map((z) => z.match(/\|\d+$/) || C.includes(z) ? z : I(z) ? `${z}|0` : z);
    }
    return {
      name: "SQL",
      case_insensitive: !0,
      // does not include {} or HTML tags `</`
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: R(_, { when: (A) => A.length < 3 }),
        literal: c,
        type: a,
        built_in: p
      },
      contains: [
        {
          scope: "type",
          match: N(o)
        },
        L,
        w,
        f,
        i,
        s,
        e.C_NUMBER_MODE,
        e.C_BLOCK_COMMENT_MODE,
        r,
        k
      ]
    };
  }
  return Mt = n, Mt;
}
var It, Gn;
function Ka() {
  if (Gn) return It;
  Gn = 1;
  function n(v) {
    return v ? typeof v == "string" ? v : v.source : null;
  }
  function e(v) {
    return t("(?=", v, ")");
  }
  function t(...v) {
    return v.map((z) => n(z)).join("");
  }
  function r(v) {
    const I = v[v.length - 1];
    return typeof I == "object" && I.constructor === Object ? (v.splice(v.length - 1, 1), I) : {};
  }
  function i(...v) {
    return "(" + (r(v).capture ? "" : "?:") + v.map((K) => n(K)).join("|") + ")";
  }
  const s = (v) => t(
    /\b/,
    v,
    /\w$/.test(v) ? /\b/ : /\B/
  ), c = [
    "Protocol",
    // contextual
    "Type"
    // contextual
  ].map(s), o = [
    "init",
    "self"
  ].map(s), a = [
    "Any",
    "Self"
  ], d = [
    // strings below will be fed into the regular `keywords` engine while regex
    // will result in additional modes being created to scan for those keywords to
    // avoid conflicts with other rules
    "actor",
    "any",
    // contextual
    "associatedtype",
    "async",
    "await",
    /as\?/,
    // operator
    /as!/,
    // operator
    "as",
    // operator
    "borrowing",
    // contextual
    "break",
    "case",
    "catch",
    "class",
    "consume",
    // contextual
    "consuming",
    // contextual
    "continue",
    "convenience",
    // contextual
    "copy",
    // contextual
    "default",
    "defer",
    "deinit",
    "didSet",
    // contextual
    "distributed",
    "do",
    "dynamic",
    // contextual
    "each",
    "else",
    "enum",
    "extension",
    "fallthrough",
    /fileprivate\(set\)/,
    "fileprivate",
    "final",
    // contextual
    "for",
    "func",
    "get",
    // contextual
    "guard",
    "if",
    "import",
    "indirect",
    // contextual
    "infix",
    // contextual
    /init\?/,
    /init!/,
    "inout",
    /internal\(set\)/,
    "internal",
    "in",
    "is",
    // operator
    "isolated",
    // contextual
    "nonisolated",
    // contextual
    "lazy",
    // contextual
    "let",
    "macro",
    "mutating",
    // contextual
    "nonmutating",
    // contextual
    /open\(set\)/,
    // contextual
    "open",
    // contextual
    "operator",
    "optional",
    // contextual
    "override",
    // contextual
    "package",
    "postfix",
    // contextual
    "precedencegroup",
    "prefix",
    // contextual
    /private\(set\)/,
    "private",
    "protocol",
    /public\(set\)/,
    "public",
    "repeat",
    "required",
    // contextual
    "rethrows",
    "return",
    "set",
    // contextual
    "some",
    // contextual
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throws",
    "throw",
    /try\?/,
    // operator
    /try!/,
    // operator
    "try",
    // operator
    "typealias",
    /unowned\(safe\)/,
    // contextual
    /unowned\(unsafe\)/,
    // contextual
    "unowned",
    // contextual
    "var",
    "weak",
    // contextual
    "where",
    "while",
    "willSet"
    // contextual
  ], l = [
    "false",
    "nil",
    "true"
  ], u = [
    "assignment",
    "associativity",
    "higherThan",
    "left",
    "lowerThan",
    "none",
    "right"
  ], p = [
    "#colorLiteral",
    "#column",
    "#dsohandle",
    "#else",
    "#elseif",
    "#endif",
    "#error",
    "#file",
    "#fileID",
    "#fileLiteral",
    "#filePath",
    "#function",
    "#if",
    "#imageLiteral",
    "#keyPath",
    "#line",
    "#selector",
    "#sourceLocation",
    "#warning"
  ], h = [
    "abs",
    "all",
    "any",
    "assert",
    "assertionFailure",
    "debugPrint",
    "dump",
    "fatalError",
    "getVaList",
    "isKnownUniquelyReferenced",
    "max",
    "min",
    "numericCast",
    "pointwiseMax",
    "pointwiseMin",
    "precondition",
    "preconditionFailure",
    "print",
    "readLine",
    "repeatElement",
    "sequence",
    "stride",
    "swap",
    "swift_unboxFromSwiftValueWithType",
    "transcode",
    "type",
    "unsafeBitCast",
    "unsafeDowncast",
    "withExtendedLifetime",
    "withUnsafeMutablePointer",
    "withUnsafePointer",
    "withVaList",
    "withoutActuallyEscaping",
    "zip"
  ], g = i(
    /[/=\-+!*%<>&|^~?]/,
    /[\u00A1-\u00A7]/,
    /[\u00A9\u00AB]/,
    /[\u00AC\u00AE]/,
    /[\u00B0\u00B1]/,
    /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
    /[\u2016-\u2017]/,
    /[\u2020-\u2027]/,
    /[\u2030-\u203E]/,
    /[\u2041-\u2053]/,
    /[\u2055-\u205E]/,
    /[\u2190-\u23FF]/,
    /[\u2500-\u2775]/,
    /[\u2794-\u2BFF]/,
    /[\u2E00-\u2E7F]/,
    /[\u3001-\u3003]/,
    /[\u3008-\u3020]/,
    /[\u3030]/
  ), _ = i(
    g,
    /[\u0300-\u036F]/,
    /[\u1DC0-\u1DFF]/,
    /[\u20D0-\u20FF]/,
    /[\uFE00-\uFE0F]/,
    /[\uFE20-\uFE2F]/
    // TODO: The following characters are also allowed, but the regex isn't supported yet.
    // /[\u{E0100}-\u{E01EF}]/u
  ), f = t(g, _, "*"), k = i(
    /[a-zA-Z_]/,
    /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
    /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
    /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
    /[\u1E00-\u1FFF]/,
    /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
    /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
    /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
    /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
    /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
    /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
    // The following characters are also allowed, but the regexes aren't supported yet.
    // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
    // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
    // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
    // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
  ), w = i(
    k,
    /\d/,
    /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
  ), N = t(k, w, "*"), L = t(/[A-Z]/, w, "*"), R = [
    "attached",
    "autoclosure",
    t(/convention\(/, i("swift", "block", "c"), /\)/),
    "discardableResult",
    "dynamicCallable",
    "dynamicMemberLookup",
    "escaping",
    "freestanding",
    "frozen",
    "GKInspectable",
    "IBAction",
    "IBDesignable",
    "IBInspectable",
    "IBOutlet",
    "IBSegueAction",
    "inlinable",
    "main",
    "nonobjc",
    "NSApplicationMain",
    "NSCopying",
    "NSManaged",
    t(/objc\(/, N, /\)/),
    "objc",
    "objcMembers",
    "propertyWrapper",
    "requires_stored_property_inits",
    "resultBuilder",
    "Sendable",
    "testable",
    "UIApplicationMain",
    "unchecked",
    "unknown",
    "usableFromInline",
    "warn_unqualified_access"
  ], A = [
    "iOS",
    "iOSApplicationExtension",
    "macOS",
    "macOSApplicationExtension",
    "macCatalyst",
    "macCatalystApplicationExtension",
    "watchOS",
    "watchOSApplicationExtension",
    "tvOS",
    "tvOSApplicationExtension",
    "swift"
  ];
  function C(v) {
    const I = {
      match: /\s+/,
      relevance: 0
    }, z = v.COMMENT(
      "/\\*",
      "\\*/",
      { contains: ["self"] }
    ), K = [
      v.C_LINE_COMMENT_MODE,
      z
    ], j = {
      match: [
        /\./,
        i(...c, ...o)
      ],
      className: { 2: "keyword" }
    }, Q = {
      // Consume .keyword to prevent highlighting properties and methods as keywords.
      match: t(/\./, i(...d)),
      relevance: 0
    }, ee = d.filter((F) => typeof F == "string").concat(["_|0"]), G = d.filter((F) => typeof F != "string").concat(a).map(s), b = { variants: [
      {
        className: "keyword",
        match: i(...G, ...o)
      }
    ] }, E = {
      $pattern: i(
        /\b\w+/,
        // regular keywords
        /#\w+/
        // number keywords
      ),
      keyword: ee.concat(p),
      literal: l
    }, S = [
      j,
      Q,
      b
    ], B = {
      // Consume .built_in to prevent highlighting properties and methods.
      match: t(/\./, i(...h)),
      relevance: 0
    }, H = {
      className: "built_in",
      match: t(/\b/, i(...h), /(?=\()/)
    }, V = [
      B,
      H
    ], re = {
      // Prevent -> from being highlighting as an operator.
      match: /->/,
      relevance: 0
    }, pe = {
      className: "operator",
      relevance: 0,
      variants: [
        { match: f },
        {
          // dot-operator: only operators that start with a dot are allowed to use dots as
          // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
          // characters that may also include dots.
          match: `\\.(\\.|${_})+`
        }
      ]
    }, Z = [
      re,
      pe
    ], Y = "([0-9]_*)+", be = "([0-9a-fA-F]_*)+", W = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal floating-point-literal (subsumes decimal-literal)
        { match: `\\b(${Y})(\\.(${Y}))?([eE][+-]?(${Y}))?\\b` },
        // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
        { match: `\\b0x(${be})(\\.(${be}))?([pP][+-]?(${Y}))?\\b` },
        // octal-literal
        { match: /\b0o([0-7]_*)+\b/ },
        // binary-literal
        { match: /\b0b([01]_*)+\b/ }
      ]
    }, q = (F = "") => ({
      className: "subst",
      variants: [
        { match: t(/\\/, F, /[0\\tnr"']/) },
        { match: t(/\\/, F, /u\{[0-9a-fA-F]{1,8}\}/) }
      ]
    }), te = (F = "") => ({
      className: "subst",
      match: t(/\\/, F, /[\t ]*(?:[\r\n]|\r\n)/)
    }), ie = (F = "") => ({
      className: "subst",
      label: "interpol",
      begin: t(/\\/, F, /\(/),
      end: /\)/
    }), ae = (F = "") => ({
      begin: t(F, /"""/),
      end: t(/"""/, F),
      contains: [
        q(F),
        te(F),
        ie(F)
      ]
    }), ce = (F = "") => ({
      begin: t(F, /"/),
      end: t(/"/, F),
      contains: [
        q(F),
        ie(F)
      ]
    }), oe = {
      className: "string",
      variants: [
        ae(),
        ae("#"),
        ae("##"),
        ae("###"),
        ce(),
        ce("#"),
        ce("##"),
        ce("###")
      ]
    }, Me = [
      v.BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [v.BACKSLASH_ESCAPE]
      }
    ], le = {
      begin: /\/[^\s](?=[^/\n]*\/)/,
      end: /\//,
      contains: Me
    }, Ie = (F) => {
      const Ke = t(F, /\//), Le = t(/\//, F);
      return {
        begin: Ke,
        end: Le,
        contains: [
          ...Me,
          {
            scope: "comment",
            begin: `#(?!.*${Le})`,
            end: /$/
          }
        ]
      };
    }, Se = {
      scope: "regexp",
      variants: [
        Ie("###"),
        Ie("##"),
        Ie("#"),
        le
      ]
    }, T = { match: t(/`/, N, /`/) }, ze = {
      className: "variable",
      match: /\$\d+/
    }, J = {
      className: "variable",
      match: `\\$${w}+`
    }, U = [
      T,
      ze,
      J
    ], Te = {
      match: /(@|#(un)?)available/,
      scope: "keyword",
      starts: { contains: [
        {
          begin: /\(/,
          end: /\)/,
          keywords: A,
          contains: [
            ...Z,
            W,
            oe
          ]
        }
      ] }
    }, fe = {
      scope: "keyword",
      match: t(/@/, i(...R), e(i(/\(/, /\s+/)))
    }, Ce = {
      scope: "meta",
      match: t(/@/, N)
    }, me = [
      Te,
      fe,
      Ce
    ], m = {
      match: e(/\b[A-Z]/),
      relevance: 0,
      contains: [
        {
          // Common Apple frameworks, for relevance boost
          className: "type",
          match: t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, w, "+")
        },
        {
          // Type identifier
          className: "type",
          match: L,
          relevance: 0
        },
        {
          // Optional type
          match: /[?!]+/,
          relevance: 0
        },
        {
          // Variadic parameter
          match: /\.\.\./,
          relevance: 0
        },
        {
          // Protocol composition
          match: t(/\s+&\s+/, e(L)),
          relevance: 0
        }
      ]
    }, y = {
      begin: /</,
      end: />/,
      keywords: E,
      contains: [
        ...K,
        ...S,
        ...me,
        re,
        m
      ]
    };
    m.contains.push(y);
    const O = {
      match: t(N, /\s*:/),
      keywords: "_|0",
      relevance: 0
    }, P = {
      begin: /\(/,
      end: /\)/,
      relevance: 0,
      keywords: E,
      contains: [
        "self",
        O,
        ...K,
        Se,
        ...S,
        ...V,
        ...Z,
        W,
        oe,
        ...U,
        ...me,
        m
      ]
    }, X = {
      begin: /</,
      end: />/,
      keywords: "repeat each",
      contains: [
        ...K,
        m
      ]
    }, de = {
      begin: i(
        e(t(N, /\s*:/)),
        e(t(N, /\s+/, N, /\s*:/))
      ),
      end: /:/,
      relevance: 0,
      contains: [
        {
          className: "keyword",
          match: /\b_\b/
        },
        {
          className: "params",
          match: N
        }
      ]
    }, Fe = {
      begin: /\(/,
      end: /\)/,
      keywords: E,
      contains: [
        de,
        ...K,
        ...S,
        ...Z,
        W,
        oe,
        ...me,
        m,
        P
      ],
      endsParent: !0,
      illegal: /["']/
    }, je = {
      match: [
        /(func|macro)/,
        /\s+/,
        i(T.match, N, f)
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        X,
        Fe,
        I
      ],
      illegal: [
        /\[/,
        /%/
      ]
    }, wr = {
      match: [
        /\b(?:subscript|init[?!]?)/,
        /\s*(?=[<(])/
      ],
      className: { 1: "keyword" },
      contains: [
        X,
        Fe,
        I
      ],
      illegal: /\[|%/
    }, yr = {
      match: [
        /operator/,
        /\s+/,
        f
      ],
      className: {
        1: "keyword",
        3: "title"
      }
    }, Nr = {
      begin: [
        /precedencegroup/,
        /\s+/,
        L
      ],
      className: {
        1: "keyword",
        3: "title"
      },
      contains: [m],
      keywords: [
        ...u,
        ...l
      ],
      end: /}/
    }, vr = {
      match: [
        /class\b/,
        /\s+/,
        /func\b/,
        /\s+/,
        /\b[A-Za-z_][A-Za-z0-9_]*\b/
      ],
      scope: {
        1: "keyword",
        3: "keyword",
        5: "title.function"
      }
    }, Sr = {
      match: [
        /class\b/,
        /\s+/,
        /var\b/
      ],
      scope: {
        1: "keyword",
        3: "keyword"
      }
    }, Tr = {
      begin: [
        /(struct|protocol|class|extension|enum|actor)/,
        /\s+/,
        N,
        /\s*/
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      },
      keywords: E,
      contains: [
        X,
        ...S,
        {
          begin: /:/,
          end: /\{/,
          keywords: E,
          contains: [
            {
              scope: "title.class.inherited",
              match: L
            },
            ...S
          ],
          relevance: 0
        }
      ]
    };
    for (const F of oe.variants) {
      const Ke = F.contains.find((xr) => xr.label === "interpol");
      Ke.keywords = E;
      const Le = [
        ...S,
        ...V,
        ...Z,
        W,
        oe,
        ...U
      ];
      Ke.contains = [
        ...Le,
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            "self",
            ...Le
          ]
        }
      ];
    }
    return {
      name: "Swift",
      keywords: E,
      contains: [
        ...K,
        je,
        wr,
        vr,
        Sr,
        Tr,
        yr,
        Nr,
        {
          beginKeywords: "import",
          end: /$/,
          contains: [...K],
          relevance: 0
        },
        Se,
        ...S,
        ...V,
        ...Z,
        W,
        oe,
        ...U,
        ...me,
        m,
        P
      ]
    };
  }
  return It = C, It;
}
var Ct, Zn;
function Ha() {
  if (Zn) return Ct;
  Zn = 1;
  function n(e) {
    const t = "true false yes no null", r = "[\\w#;/?:@&=+$,.~*'()[\\]]+", i = {
      className: "attr",
      variants: [
        // added brackets support and special char support
        { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
        {
          // double quoted keys - with brackets and special char support
          begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
        },
        {
          // single quoted keys - with brackets and special char support
          begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
        }
      ]
    }, s = {
      className: "template-variable",
      variants: [
        {
          // jinja templates Ansible
          begin: /\{\{/,
          end: /\}\}/
        },
        {
          // Ruby i18n
          begin: /%\{/,
          end: /\}/
        }
      ]
    }, c = {
      className: "string",
      relevance: 0,
      begin: /'/,
      end: /'/,
      contains: [
        {
          match: /''/,
          scope: "char.escape",
          relevance: 0
        }
      ]
    }, o = {
      className: "string",
      relevance: 0,
      variants: [
        {
          begin: /"/,
          end: /"/
        },
        { begin: /\S+/ }
      ],
      contains: [
        e.BACKSLASH_ESCAPE,
        s
      ]
    }, a = e.inherit(o, { variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [
          {
            begin: /''/,
            relevance: 0
          }
        ]
      },
      {
        begin: /"/,
        end: /"/
      },
      { begin: /[^\s,{}[\]]+/ }
    ] }), h = {
      className: "number",
      begin: "\\b" + "[0-9]{4}(-[0-9][0-9]){0,2}" + "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" + "(\\.[0-9]*)?" + "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" + "\\b"
    }, g = {
      end: ",",
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: t,
      relevance: 0
    }, _ = {
      begin: /\{/,
      end: /\}/,
      contains: [g],
      illegal: "\\n",
      relevance: 0
    }, f = {
      begin: "\\[",
      end: "\\]",
      contains: [g],
      illegal: "\\n",
      relevance: 0
    }, k = [
      i,
      {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      },
      {
        // multi line string
        // Blocks start with a | or > followed by a newline
        //
        // Indentation of subsequent lines must be the same to
        // be considered part of the block
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      },
      {
        // Ruby/Rails erb
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      },
      {
        // named tags
        className: "type",
        begin: "!\\w+!" + r
      },
      // https://yaml.org/spec/1.2/spec.html#id2784064
      {
        // verbatim tags
        className: "type",
        begin: "!<" + r + ">"
      },
      {
        // primary tags
        className: "type",
        begin: "!" + r
      },
      {
        // secondary tags
        className: "type",
        begin: "!!" + r
      },
      {
        // fragment id &ref
        className: "meta",
        begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // fragment reference *ref
        className: "meta",
        begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // array listing
        className: "bullet",
        // TODO: remove |$ hack when we have proper look-ahead support
        begin: "-(?=[ ]|$)",
        relevance: 0
      },
      e.HASH_COMMENT_MODE,
      {
        beginKeywords: t,
        keywords: { literal: t }
      },
      h,
      // numbers are any valid C-style number that
      // sit isolated from other words
      {
        className: "number",
        begin: e.C_NUMBER_RE + "\\b",
        relevance: 0
      },
      _,
      f,
      c,
      o
    ], w = [...k];
    return w.pop(), w.push(a), g.contains = w, {
      name: "YAML",
      case_insensitive: !0,
      aliases: ["yml"],
      contains: k
    };
  }
  return Ct = n, Ct;
}
var Lt, Wn;
function qa() {
  if (Wn) return Lt;
  Wn = 1;
  const n = "[A-Za-z$_][0-9A-Za-z$_]*", e = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    // It's reached stage 3, which is "recommended for implementation":
    "using"
  ], t = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], r = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], i = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], s = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], c = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], o = [].concat(
    s,
    r,
    i
  );
  function a(l) {
    const u = l.regex, p = (q, { after: te }) => {
      const ie = "</" + q[0].slice(1);
      return q.input.indexOf(ie, te) !== -1;
    }, h = n, g = {
      begin: "<>",
      end: "</>"
    }, _ = /<[A-Za-z0-9\\._:-]+\s*\/>/, f = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (q, te) => {
        const ie = q[0].length + q.index, ae = q.input[ie];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          ae === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          ae === ","
        ) {
          te.ignoreMatch();
          return;
        }
        ae === ">" && (p(q, { after: ie }) || te.ignoreMatch());
        let ce;
        const oe = q.input.substring(ie);
        if (ce = oe.match(/^\s*=/)) {
          te.ignoreMatch();
          return;
        }
        if ((ce = oe.match(/^\s+extends\s+/)) && ce.index === 0) {
          te.ignoreMatch();
          return;
        }
      }
    }, k = {
      $pattern: n,
      keyword: e,
      literal: t,
      built_in: o,
      "variable.language": c
    }, w = "[0-9](_?[0-9])*", N = `\\.(${w})`, L = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", R = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${L})((${N})|\\.)?|(${N}))[eE][+-]?(${w})\\b` },
        { begin: `\\b(${L})\\b((${N})\\b|\\.)?|(${N})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, A = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: k,
      contains: []
      // defined later
    }, C = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          A
        ],
        subLanguage: "xml"
      }
    }, v = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          A
        ],
        subLanguage: "css"
      }
    }, I = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          A
        ],
        subLanguage: "graphql"
      }
    }, z = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        l.BACKSLASH_ESCAPE,
        A
      ]
    }, j = {
      className: "comment",
      variants: [
        l.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: h + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        l.C_BLOCK_COMMENT_MODE,
        l.C_LINE_COMMENT_MODE
      ]
    }, Q = [
      l.APOS_STRING_MODE,
      l.QUOTE_STRING_MODE,
      C,
      v,
      I,
      z,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      R
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    A.contains = Q.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: k,
      contains: [
        "self"
      ].concat(Q)
    });
    const ee = [].concat(j, A.contains), G = ee.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: k,
        contains: ["self"].concat(ee)
      }
    ]), b = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: k,
      contains: G
    }, E = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            h,
            /\s+/,
            /extends/,
            /\s+/,
            u.concat(h, "(", u.concat(/\./, h), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            h
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, S = {
      relevance: 0,
      match: u.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...r,
          ...i
        ]
      }
    }, B = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, H = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            h,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [b],
      illegal: /%/
    }, V = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function re(q) {
      return u.concat("(?!", q.join("|"), ")");
    }
    const pe = {
      match: u.concat(
        /\b/,
        re([
          ...s,
          "super",
          "import"
        ].map((q) => `${q}\\s*\\(`)),
        h,
        u.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, Z = {
      begin: u.concat(/\./, u.lookahead(
        u.concat(h, /(?![0-9A-Za-z$_(])/)
      )),
      end: h,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, Y = {
      match: [
        /get|set/,
        /\s+/,
        h,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        b
      ]
    }, be = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + l.UNDERSCORE_IDENT_RE + ")\\s*=>", W = {
      match: [
        /const|var|let/,
        /\s+/,
        h,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        u.lookahead(be)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        b
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: k,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: G, CLASS_REFERENCE: S },
      illegal: /#(?![$_A-z])/,
      contains: [
        l.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        B,
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE,
        C,
        v,
        I,
        z,
        j,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        R,
        S,
        {
          scope: "attr",
          match: h + u.lookahead(":"),
          relevance: 0
        },
        W,
        {
          // "value" container
          begin: "(" + l.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            j,
            l.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: be,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: l.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: k,
                      contains: G
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: g.begin, end: g.end },
                { match: _ },
                {
                  begin: f.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": f.isTrulyOpeningTag,
                  end: f.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: f.begin,
                  end: f.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        H,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + l.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            b,
            l.inherit(l.TITLE_MODE, { begin: h, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        Z,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + h,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [b]
        },
        pe,
        V,
        E,
        Y,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  function d(l) {
    const u = l.regex, p = a(l), h = n, g = [
      "any",
      "void",
      "number",
      "boolean",
      "string",
      "object",
      "never",
      "symbol",
      "bigint",
      "unknown"
    ], _ = {
      begin: [
        /namespace/,
        /\s+/,
        l.IDENT_RE
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      }
    }, f = {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: !0,
      keywords: {
        keyword: "interface extends",
        built_in: g
      },
      contains: [p.exports.CLASS_REFERENCE]
    }, k = {
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use strict['"]/
    }, w = [
      "type",
      // "namespace",
      "interface",
      "public",
      "private",
      "protected",
      "implements",
      "declare",
      "abstract",
      "readonly",
      "enum",
      "override",
      "satisfies"
    ], N = {
      $pattern: n,
      keyword: e.concat(w),
      literal: t,
      built_in: o.concat(g),
      "variable.language": c
    }, L = {
      className: "meta",
      begin: "@" + h
    }, R = (I, z, K) => {
      const j = I.contains.findIndex((Q) => Q.label === z);
      if (j === -1)
        throw new Error("can not find mode to replace");
      I.contains.splice(j, 1, K);
    };
    Object.assign(p.keywords, N), p.exports.PARAMS_CONTAINS.push(L);
    const A = p.contains.find((I) => I.scope === "attr"), C = Object.assign(
      {},
      A,
      { match: u.concat(h, u.lookahead(/\s*\?:/)) }
    );
    p.exports.PARAMS_CONTAINS.push([
      p.exports.CLASS_REFERENCE,
      // class reference for highlighting the params types
      A,
      // highlight the params key
      C
      // Added for optional property assignment highlighting
    ]), p.contains = p.contains.concat([
      L,
      _,
      f,
      C
      // Added for optional property assignment highlighting
    ]), R(p, "shebang", l.SHEBANG()), R(p, "use_strict", k);
    const v = p.contains.find((I) => I.label === "func.def");
    return v.relevance = 0, Object.assign(p, {
      name: "TypeScript",
      aliases: [
        "ts",
        "tsx",
        "mts",
        "cts"
      ]
    }), p;
  }
  return Lt = d, Lt;
}
var Dt, Yn;
function Ga() {
  if (Yn) return Dt;
  Yn = 1;
  function n(e) {
    const t = e.regex, r = {
      className: "string",
      begin: /"(""|[^/n])"C\b/
    }, i = {
      className: "string",
      begin: /"/,
      end: /"/,
      illegal: /\n/,
      contains: [
        {
          // double quote escape
          begin: /""/
        }
      ]
    }, s = /\d{1,2}\/\d{1,2}\/\d{4}/, c = /\d{4}-\d{1,2}-\d{1,2}/, o = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, a = /\d{1,2}(:\d{1,2}){1,2}/, d = {
      className: "literal",
      variants: [
        {
          // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
          begin: t.concat(/# */, t.either(c, s), / *#/)
        },
        {
          // #H:mm[:ss]# (24h Time)
          begin: t.concat(/# */, a, / *#/)
        },
        {
          // #h[:mm[:ss]] A# (12h Time)
          begin: t.concat(/# */, o, / *#/)
        },
        {
          // date plus time
          begin: t.concat(
            /# */,
            t.either(c, s),
            / +/,
            t.either(o, a),
            / *#/
          )
        }
      ]
    }, l = {
      className: "number",
      relevance: 0,
      variants: [
        {
          // Float
          begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
        },
        {
          // Integer (base 10)
          begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 16)
          begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 8)
          begin: /&O[0-7_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 2)
          begin: /&B[01_]+((U?[SIL])|[%&])?/
        }
      ]
    }, u = {
      className: "label",
      begin: /^\w+:/
    }, p = e.COMMENT(/'''/, /$/, { contains: [
      {
        className: "doctag",
        begin: /<\/?/,
        end: />/
      }
    ] }), h = e.COMMENT(null, /$/, { variants: [
      { begin: /'/ },
      {
        // TODO: Use multi-class for leading spaces
        begin: /([\t ]|^)REM(?=\s)/
      }
    ] });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: { label: "symbol" },
      keywords: {
        keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in: (
          // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
          "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
        ),
        type: (
          // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
          "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
        ),
        literal: "true false nothing"
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [
        r,
        i,
        d,
        l,
        u,
        p,
        h,
        {
          className: "meta",
          // TODO: Use multi-class for indentation once available
          begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
          contains: [h]
        }
      ]
    };
  }
  return Dt = n, Dt;
}
var Bt, Xn;
function Za() {
  if (Xn) return Bt;
  Xn = 1;
  function n(e) {
    e.regex;
    const t = e.COMMENT(/\(;/, /;\)/);
    t.contains.push("self");
    const r = e.COMMENT(/;;/, /$/), i = [
      "anyfunc",
      "block",
      "br",
      "br_if",
      "br_table",
      "call",
      "call_indirect",
      "data",
      "drop",
      "elem",
      "else",
      "end",
      "export",
      "func",
      "global.get",
      "global.set",
      "local.get",
      "local.set",
      "local.tee",
      "get_global",
      "get_local",
      "global",
      "if",
      "import",
      "local",
      "loop",
      "memory",
      "memory.grow",
      "memory.size",
      "module",
      "mut",
      "nop",
      "offset",
      "param",
      "result",
      "return",
      "select",
      "set_global",
      "set_local",
      "start",
      "table",
      "tee_local",
      "then",
      "type",
      "unreachable"
    ], s = {
      begin: [
        /(?:func|call|call_indirect)/,
        /\s+/,
        /\$[^\s)]+/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      }
    }, c = {
      className: "variable",
      begin: /\$[\w_]+/
    }, o = {
      match: /(\((?!;)|\))+/,
      className: "punctuation",
      relevance: 0
    }, a = {
      className: "number",
      relevance: 0,
      // borrowed from Prism, TODO: split out into variants
      match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
    }, d = {
      // look-ahead prevents us from gobbling up opcodes
      match: /(i32|i64|f32|f64)(?!\.)/,
      className: "type"
    }, l = {
      className: "keyword",
      // borrowed from Prism, TODO: split out into variants
      match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
    };
    return {
      name: "WebAssembly",
      keywords: {
        $pattern: /[\w.]+/,
        keyword: i
      },
      contains: [
        r,
        t,
        {
          match: [
            /(?:offset|align)/,
            /\s*/,
            /=/
          ],
          className: {
            1: "keyword",
            3: "operator"
          }
        },
        c,
        o,
        s,
        e.QUOTE_STRING_MODE,
        d,
        l,
        a
      ]
    };
  }
  return Bt = n, Bt;
}
var M = da;
M.registerLanguage("xml", ua());
M.registerLanguage("bash", ga());
M.registerLanguage("c", pa());
M.registerLanguage("cpp", ba());
M.registerLanguage("csharp", ha());
M.registerLanguage("css", fa());
M.registerLanguage("markdown", ma());
M.registerLanguage("diff", _a());
M.registerLanguage("ruby", Ea());
M.registerLanguage("go", ka());
M.registerLanguage("graphql", wa());
M.registerLanguage("ini", ya());
M.registerLanguage("java", Na());
M.registerLanguage("javascript", va());
M.registerLanguage("json", Sa());
M.registerLanguage("kotlin", Ta());
M.registerLanguage("less", xa());
M.registerLanguage("lua", Ra());
M.registerLanguage("makefile", Aa());
M.registerLanguage("perl", Oa());
M.registerLanguage("objectivec", Ma());
M.registerLanguage("php", Ia());
M.registerLanguage("php-template", Ca());
M.registerLanguage("plaintext", La());
M.registerLanguage("python", Da());
M.registerLanguage("python-repl", Ba());
M.registerLanguage("r", Pa());
M.registerLanguage("rust", Ua());
M.registerLanguage("scss", $a());
M.registerLanguage("shell", za());
M.registerLanguage("sql", Fa());
M.registerLanguage("swift", Ka());
M.registerLanguage("yaml", Ha());
M.registerLanguage("typescript", qa());
M.registerLanguage("vbnet", Ga());
M.registerLanguage("wasm", Za());
M.HighlightJS = M;
M.default = M;
var Wa = M;
const Ya = /* @__PURE__ */ mi(Wa);
class Xa {
  constructor() {
    x(this, "highlighter");
    this.highlighter = Ya;
  }
  /**
   * @returns the highlight.js instance
   */
  get getHighlighter() {
    return this.highlighter;
  }
}
class Qa {
  constructor() {
    x(this, "converter");
    x(this, "codeHighlighter");
    this.converter = new or({ gfm: !0 }), this.codeHighlighter = new Xa().getHighlighter;
  }
  /**
   * Get the markdown converter.
   */
  get getConverter() {
    return this.converter;
  }
  /**
   * Generate html from the markdown.
   *
   * @param markdown - markdown from the editor
   * @returns the generated html
   */
  makeHtml(e) {
    const t = this.converter.parse(e, { async: !1 });
    return this.addCodeHighlighting(t);
  }
  /**
   * Syntax highlight the <code> tags within the given html.
   *
   * @param html - the generated html
   * @returns the html with syntax highlight applied
   */
  addCodeHighlighting(e) {
    const t = document.createElement("div");
    t.innerHTML = e;
    const r = t.getElementsByTagName("code");
    for (let i = 0; i < r.length; i++)
      this.codeHighlighter.highlightElement(r[i]);
    return t.innerHTML;
  }
}
class se {
  /**
   * @param type - html tag name
   * @param className - class name of the element
   * @param parent - parent the created element is appended to (or null)
   * @param params - additional properties to set on the created element
   */
  constructor(e, t, r, i = {}) {
    x(this, "element");
    this.init(e, t, r, i);
  }
  /**
   * Create the element, append it to the parent, then resolve it from the DOM.
   */
  init(e, t, r, i) {
    const s = se.createElement(e, t, i);
    r && se.appendElementToParent(s, r), this.setElementByClassName(t);
  }
  /**
   * Get the element.
   */
  get getElement() {
    return this.element;
  }
  /**
   * Set the element.
   */
  set setElement(e) {
    this.element = e;
  }
  /**
   * Resolve the element from the DOM by its class name.
   *
   * @param className - class name without the leading dot
   */
  setElementByClassName(e) {
    const t = e.split(" ").join(".");
    this.element = document.querySelector(`.${t}`);
  }
  /**
   * Add an event listener to the wrapped element.
   */
  addEventListener(e, t) {
    this.element.addEventListener(e, t);
  }
  /**
   * Create a new element of the given type, with class name and properties.
   */
  static createElement(e, t, r) {
    const i = document.createElement(e);
    i.className = t;
    for (const s of Object.keys(r))
      i[s] = r[s];
    return i;
  }
  /**
   * Append the element to the parent as a child.
   */
  static appendElementToParent(e, t) {
    t.appendChild(e);
  }
  /**
   * Convenience factory returning a wrapped element.
   */
  static create(e, t, r = null, i = {}) {
    return new se(e, t, r, i);
  }
}
class Va extends se {
  constructor(e, t) {
    super("textarea", e, t);
  }
  /**
   * Get the editor element.
   */
  get getEditor() {
    return this.element;
  }
  /**
   * Get the content of the editor.
   */
  getContent() {
    return this.element.value;
  }
  /**
   * Set the content of the editor.
   */
  setContent(e) {
    this.element.value = e;
  }
  /**
   * Alternative for getContent().
   * @see getContent
   */
  getMarkdown() {
    return this.getContent();
  }
  /**
   * Alternative for setContent().
   * @see setContent
   */
  setMarkdown(e) {
    this.setContent(e);
  }
  /**
   * Append the given value to the content of the editor.
   */
  appendContent(e) {
    this.element.value = this.element.value + e;
  }
  /**
   * Prepend the given value to the content of the editor.
   */
  prependContent(e) {
    this.element.value = e + this.element.value;
  }
  /**
   * Refresh the preview automatically when the editor content changes.
   *
   * @param element - element(s) that receive the compiled html
   * @param converter - converts the markdown to html
   */
  convertMarkdownToHtmlEventListener(e, t) {
    this.addEventListener("input", () => {
      const r = t.makeHtml(this.getContent());
      if (Array.isArray(e))
        for (const i of e)
          i.innerHTML = r;
      else
        e.innerHTML = r;
    });
  }
  /**
   * Copy the editor content to a hidden input automatically.
   *
   * @param element - element that receives the editor content
   */
  copyMarkdownContentToHiddenInputEventListener(e) {
    this.addEventListener("input", () => {
      e.innerHTML = this.getContent();
    });
  }
  /**
   * Get the currently selected text.
   */
  getSelectedContent() {
    const e = this.element.selectionStart, t = this.element.selectionEnd;
    return this.element.value.substring(e, t);
  }
  /**
   * Replace the current selection with the given content.
   */
  setSelectedContent(e) {
    const t = this.element.selectionStart, r = this.element.selectionEnd;
    this.element.value = this.element.value.substring(0, t) + e + this.element.value.substring(r);
  }
  /**
   * Get the cursor position (selection start).
   */
  getCursorPosition() {
    return this.element.selectionStart;
  }
  /**
   * Set the cursor position (collapses the selection).
   */
  setCursorPosition(e) {
    this.element.selectionStart = e, this.element.selectionEnd = e;
  }
  /**
   * Process the content by triggering the input event.
   */
  processContent() {
    const e = new Event("input");
    this.element.dispatchEvent(e);
  }
}
class Ja extends se {
  constructor(e, t) {
    super("div", e, t);
  }
  /**
   * Get the preview element.
   */
  get getPreview() {
    return this.element;
  }
}
const Qn = {
  ctrl: "ctrlKey",
  control: "ctrlKey",
  shift: "shiftKey",
  alt: "altKey",
  option: "altKey",
  meta: "metaKey",
  cmd: "metaKey",
  command: "metaKey"
}, ja = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  escape: "Escape"
};
function es(n) {
  return /^[a-z]$/.test(n) ? `Key${n.toUpperCase()}` : /^[0-9]$/.test(n) ? `Digit${n}` : ja[n] || n;
}
function ts(n) {
  const e = { ctrlKey: !1, shiftKey: !1, altKey: !1, metaKey: !1, code: null };
  return n.toLowerCase().split("+").forEach((t) => {
    const r = t.trim();
    Qn[r] ? e[Qn[r]] = !0 : r && (e.code = es(r));
  }), e;
}
function ns(n, e) {
  return e.code === n.code && e.ctrlKey === n.ctrlKey && e.shiftKey === n.shiftKey && e.altKey === n.altKey && e.metaKey === n.metaKey;
}
class kr {
  /**
   * @param element - element to scope key bindings to; defaults to the
   *   whole document (global bindings)
   */
  constructor(e = null) {
    x(this, "target");
    this.target = e || document;
  }
  /**
   * Bind a combo to a callback on the given target.
   *
   * @param target - event target to bind on
   * @param key - combo string, e.g. 'ctrl+b'
   * @param callback - receives the KeyboardEvent
   */
  bindKey(e, t, r) {
    const i = ts(t);
    e.addEventListener("keydown", (s) => {
      s instanceof KeyboardEvent && ns(i, s) && r(s);
    });
  }
  /**
   * Bind a combo scoped to this instance's element.
   */
  keyboardEvent(e, t) {
    this.bindKey(this.target, e, t);
  }
  /**
   * Bind a combo globally (document level), firing regardless of focus.
   */
  keyboardEventGlobal(e, t) {
    this.bindKey(document, e, t);
  }
}
class rs extends kr {
  constructor(t) {
    super(t.getEditor);
    x(this, "editor");
    this.editor = t;
  }
  /**
   * Bind a combo that wraps the current selection with `prefix`/`suffix`
   * (e.g. '**' … '**' for bold) and reprocesses the content.
   */
  insertKeyboardEvent(t, r = "", i = "") {
    this.keyboardEvent(t, (s) => {
      s.preventDefault();
      const c = this.editor.getCursorPosition(), o = this.editor.getSelectedContent();
      this.editor.setSelectedContent(r + o + i);
      const a = o.length === 0 ? c + r.length : c + (r + o + i).length;
      this.editor.setCursorPosition(a), this.editor.processContent();
    });
  }
}
const is = {
  helpDialog: {
    title: "Keyboard commands",
    button: "Press ctr+h",
    content: [
      { code: "ctrl+b", description: "Insert bold" },
      { code: "ctrl+i", description: "Insert italic" },
      { code: "ctrl+u", description: "Insert strikethrough" },
      { code: "tab", description: "Insert tab" },
      { code: "ctrl+shift+i", description: "Insert imagelink" },
      { code: "ctrl+l", description: "Insert link" },
      { code: "ctrl+k", description: "Insert codeblock" },
      { code: "ctrl+shift+k", description: "Insert code" },
      { code: "ctrl+h", description: "Show help" },
      { code: "alt+1", description: "Show editor and preview areas" },
      { code: "alt+2", description: "Show only editor area" },
      { code: "alt+3", description: "Show only preview area" },
      { code: "alt+enter", description: "Toggle to full screen" }
    ]
  }
};
class as extends se {
  constructor(e, t) {
    super("div", e, t), this.initHelpDialogContent();
  }
  /**
   * Get the help dialog element.
   */
  get getHelpDialog() {
    return this.element;
  }
  /**
   * Initialize the help dialog contents.
   */
  initHelpDialogContent() {
    const { title: e, content: t, button: r } = is.helpDialog;
    this.initTitle(e), this.initContent(t), this.initButton(r);
  }
  /**
   * Initialize the help dialog button.
   */
  initButton(e) {
    const t = se.create("div", "cd-help-dialog-button", this.element.parentNode);
    t.element.innerHTML = `<span>?</span><span>${e}</span>`;
  }
  /**
   * Initialize the help dialog title.
   */
  initTitle(e) {
    const t = se.create("h2", "cd-help-dialog__title", this.element);
    t.element.innerText = e;
  }
  /**
   * Initialize the help dialog command list.
   */
  initContent(e) {
    const t = se.create("ul", "cd-help-dialog__command-list", this.element);
    e.forEach((r) => {
      const i = se.create(
        "li",
        "cd-help-dialog__command-item cd-help-dialog__command-item--" + r.code.replace(/\+/g, "-"),
        t.element
      );
      i.element.innerHTML = "<strong>" + r.code + "</strong> - " + r.description;
    });
  }
}
class os {
  /**
   * @param settings - partial configuration; missing keys fall back to CONFIG
   */
  constructor(e = {}) {
    x(this, "settings");
    x(this, "calmdown");
    x(this, "content");
    x(this, "converter");
    x(this, "editor");
    x(this, "preview");
    x(this, "resize");
    x(this, "globalUserInteraction");
    x(this, "editorUserInteraction");
    x(this, "htmlInputElement");
    x(this, "markdownInputElement");
    this.setDefaults(e), this.init();
  }
  /**
   * Merge the given settings over the defaults and resolve the root element.
   */
  setDefaults(e) {
    this.settings = Object.assign(Or, e), this.calmdown = document.querySelector(`.${this.settings.selector}`), this.calmdown.setAttribute("style", `width: ${this.settings.width}; height: ${this.settings.height};`);
  }
  /**
   * Initialize Calmdown.
   */
  init() {
    this.initDefaultTheme(), this.initDefaultLayout(), this.initCodeHightlight(), this.initConverter(), this.initDefaultContent(), this.initResize(), this.initEditor(), this.initPreview(), this.initHiddenHtmlInput(), this.initHiddenMarkdownInput(), this.initHelpDialog(), this.initUserInteraction(), this.initEventListeners(), this.triggerEvents();
  }
  /**
   * Apply the default theme class.
   */
  initDefaultTheme() {
    this.calmdown.classList.add(this.settings.defaultThemeSelector);
  }
  /**
   * Apply the default layout class.
   */
  initDefaultLayout() {
    this.calmdown.classList.add(this.settings.defaultLayoutSelector);
  }
  /**
   * Apply the code highlight theme class.
   */
  initCodeHightlight() {
    this.calmdown.classList.add(this.settings.codeHighlightStyle);
  }
  /**
   * Initialize the resizer handle.
   */
  initResize() {
    this.resize = new se("div", "cd-resize", this.calmdown).getElement, se.create("span", "cd-bars", this.resize);
    let e = !1;
    this.resize.addEventListener("mousedown", (t) => {
      t.preventDefault(), e = !0;
    }), document.addEventListener("mousemove", (t) => {
      e && (this.settings.height = `${t.clientY - this.calmdown.offsetTop + this.resize.offsetHeight / 2}px`, this.calmdown.style.height = this.settings.height);
    }), document.addEventListener("mouseup", (t) => {
      t.preventDefault(), e = !1;
    });
  }
  /**
   * Initialize the hidden html input. Its value can be posted to the server.
   */
  initHiddenHtmlInput() {
    this.settings.htmlInputSelector != null && (this.htmlInputElement = new se(
      "textarea",
      this.settings.htmlInputSelector,
      this.calmdown,
      {
        name: this.settings.htmlInputSelector,
        style: "display: none;"
      }
    ).getElement);
  }
  /**
   * Initialize the hidden markdown input. Its value can be posted to the server.
   */
  initHiddenMarkdownInput() {
    this.settings.markdownInputSelector != null && (this.markdownInputElement = new se(
      "textarea",
      this.settings.markdownInputSelector,
      this.calmdown,
      {
        name: this.settings.markdownInputSelector,
        style: "display: none;"
      }
    ).getElement);
  }
  /**
   * Initialize the markdown converter.
   */
  initConverter() {
    this.converter = new Qa();
  }
  /**
   * Resolve the initial editor content (data attribute > html > settings).
   */
  initDefaultContent() {
    const e = this.calmdown.getAttribute("data-cd-content") ?? "", t = this.calmdown.textContent ?? "", r = t.length <= 0 ? "" : t, i = this.settings.defaultContent.length <= 0 ? "" : this.settings.defaultContent;
    if (r.length > 0 && (this.calmdown.textContent = ""), e.length > 0) {
      this.content = e, r.length > 0 && console.warn("Attribute data-cd-content is set. HTML content will be ignored!"), i.length > 0 && console.warn("Attribute data-cd-content is set. Settings content will be ignored!");
      return;
    }
    if (r.length > 0) {
      this.content = r, i.length > 0 && console.warn("HTML content is set. Settings content will be ignored!");
      return;
    }
    this.content = i;
  }
  /**
   * Initialize the editor area.
   */
  initEditor() {
    this.editor = new Va(this.settings.editorSelector, this.calmdown), this.editor.getEditor.value = this.content;
  }
  /**
   * Initialize the preview area.
   */
  initPreview() {
    this.preview = new Ja(this.settings.previewSelector, this.calmdown);
  }
  /**
   * Initialize the help dialog.
   */
  initHelpDialog() {
    new as(this.settings.helpDialogSelector, this.calmdown);
  }
  /**
   * Initialize the user-interaction (keyboard) handlers.
   */
  initUserInteraction() {
    this.globalUserInteraction = new kr(), this.editorUserInteraction = new rs(this.editor);
  }
  /**
   * Wire up the editor and keyboard event listeners.
   */
  initEventListeners() {
    this.editor.convertMarkdownToHtmlEventListener(
      [this.preview.getPreview, this.htmlInputElement],
      this.converter
    ), this.editor.copyMarkdownContentToHiddenInputEventListener(this.markdownInputElement), this.editorUserInteraction.insertKeyboardEvent("ctrl+b", "**", "**"), this.editorUserInteraction.insertKeyboardEvent("ctrl+i", "_", "_"), this.editorUserInteraction.insertKeyboardEvent("ctrl+u", "~~", "~~"), this.editorUserInteraction.insertKeyboardEvent("tab", "	"), this.editorUserInteraction.insertKeyboardEvent("ctrl+shift+i", "![", "]()"), this.editorUserInteraction.insertKeyboardEvent("ctrl+l", "[", "]()"), this.editorUserInteraction.insertKeyboardEvent("ctrl+k", "```", "\n```"), this.editorUserInteraction.insertKeyboardEvent("ctrl+shift+k", "`", "`"), this.viewChangeEvents();
  }
  /**
   * Bind the keyboard shortcuts that switch between editor/preview/both,
   * full screen, and the help dialog.
   */
  viewChangeEvents() {
    let e = this.settings.defaultLayoutSelector;
    const t = "cd-layout-editor", r = "cd-layout-preview", i = "cd-layout-both", s = "cd-layout-full", c = "cd-layout-help-dialog";
    this.globalUserInteraction.keyboardEventGlobal("alt+1", (o) => {
      o.preventDefault(), this.calmdown.classList.remove(c), this.calmdown.classList.remove(t), this.calmdown.classList.remove(r), this.calmdown.classList.add(i), e = i, this.editor.getEditor.focus();
    }), this.globalUserInteraction.keyboardEventGlobal("alt+2", (o) => {
      o.preventDefault(), this.calmdown.classList.remove(c), this.calmdown.classList.remove(r), this.calmdown.classList.remove(i), this.calmdown.classList.add(t), e = t, this.editor.getEditor.focus();
    }), this.globalUserInteraction.keyboardEventGlobal("alt+3", (o) => {
      o.preventDefault(), this.calmdown.classList.remove(c), this.calmdown.classList.remove(i), this.calmdown.classList.remove(t), this.calmdown.classList.add(r), e = r;
    }), this.globalUserInteraction.keyboardEventGlobal("alt+enter", (o) => {
      o.preventDefault(), this.calmdown.classList.toggle(s);
    }), this.globalUserInteraction.keyboardEventGlobal("ctrl+h", (o) => {
      o.preventDefault(), this.calmdown.classList.remove(i), this.calmdown.classList.remove(t), this.calmdown.classList.remove(r), this.calmdown.classList.toggle(c), this.calmdown.classList.contains(c) || this.calmdown.classList.add(e);
    });
  }
  /**
   * Trigger the processing event.
   */
  triggerEvents() {
    this.editor.processContent();
  }
  /**
   * Get the editor content.
   */
  getContent() {
    return this.editor.getContent();
  }
  /**
   * Set the editor content.
   */
  setContent(e) {
    this.editor.setContent(e), this.editor.processContent();
  }
}
export {
  os as default
};
//# sourceMappingURL=calmdown.min.mjs.map
