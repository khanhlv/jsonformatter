function check(a) {
	var h = a.replace(/\n/g, " ").replace(/\r/g, " ");
	try {
		JSON.parse(h);
		return true;
	} catch (b) {
		return false;
	}
}

String.space = function(a) {
    var b = [],
        e;
    for (e = 0; e < a; e++) b.push(" ");
    return b.join("")
};

function format(a) {
	for (var b = a.replace(/\n/g, " ").replace(/\r/g, " "), e = [], c = 0, d = !1, f = 0, i = b.length; f < i; f++) {
		var g = b.charAt(f);
		if (d && g === d) b.charAt(f -
			1) !== "\\" && (d = !1);
		else if (!d && (g === '"' || g === "'")) d = g;
		else if (!d && (g === " " || g === "\t")) g = "";
		else if (!d && g === ":") g += " ";
		else if (!d && g === ",") g += "\n" + String.space(c * 2);
		else if (!d && (g === "[" || g === "{")) c++, g += "\n" + String.space(c * 2);
		else if (!d && (g === "]" || g === "}")) c--, g = "\n" + String.space(c * 2) + g;
		e.push(g)
	}
	return (e.join(""));
}

function removeWhiteSpace(a) {
	for (var b = a.replace(/\n/g, " ").replace(/\r/g, " "), e = [], c = !1, d = 0, f = b.length; d < f; d++) {
		var i = b.charAt(d);
		if (c && i === c) b.charAt(d - 1) !== "\\" && (c = !1);
		else if (!c && (i === '"' || i === "'")) c = i;
		else if (!c && (i === " " || i === "\t")) i = "";
		e.push(i)
	}
	return (e.join(""));
}

function convertFormat() {
	var a = document.querySelector("#input").value;
	var value = format(a);
	
	if (value) {
		document.querySelector("#input").value = value;
	}
	
}

function convertRemoveSpace() {
	var a = document.querySelector("#input").value;
	var value = removeWhiteSpace(a);
	
	if (value) {
		document.querySelector("#input").value = value;
	}
}

function convertClear() {
	document.querySelector("#input").value = '';
}

