let domain = window.location.hash.substring(1);
if (domain) {
    document.getElementById("regularInput").value = domain;
    document.getElementsByTagName("FORM")[0].submit();
}
