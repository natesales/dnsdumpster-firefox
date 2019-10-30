# DNSDumpster for Firefox


DNSDumpster is a great tool for investigating websites and looking for common DNS entries. I've been using it so much that going to the site, entering the domain (without the protocol or any trailing endpoints), and pressing enter has become a chore.

I wrote a simple firefox addon to open up the site and search the current tab's domain for you.

It also includes an automatic search feature, where going to https://dnsdumpster.com?site=example.com will automatically search example.com for you.


### Downloading
The addon is available from the Mozilla Addon Store https://addons.mozilla.org/en-US/firefox/addon/dnsdumpster/. Development versions might also be available from the releases page, but the most up to date will always be on the mozilla site above.


### Credits
Trash icon by https://icons8.com (From the GitHub student dev pack).

I do not own nor have any affiliation with DNSDumpster. Please keep in mind that this addon will make a request to dnsdumpster.com with the `site` url parameter which will make you distinguishable from users that are not using this addon.

function makeSpan(asn) {
  return "<span style='' oncontextmenu='window.open(\"https://bgp.he.net/" + asn + "\");'>" + asn + "</span>"
}

var elements = document.getElementsByTagName("*");

for (var i=0; i < elements.length; i++){
  var text = elements[i].textContent;
  text = text.replace(RegExp('(AS[0-9]+)', 'g'), makeSpan);
  elements[i].innerHTML = text;
}

var text = elements[i].textContent;
    text = text.replace(RegExp('(AS[0-9]+)', 'g'), makeSpan);
    elements[i].innerHTML = text;
