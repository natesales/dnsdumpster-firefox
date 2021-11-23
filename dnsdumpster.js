let url = new URL(window.location.href);
let domain = url.searchParams.get("site");

if (domain != null) {
    document.getElementById("regularInput").value = domain;
    let forms = document.getElementsByTagName("FORM");
    forms[0].submit();
}
