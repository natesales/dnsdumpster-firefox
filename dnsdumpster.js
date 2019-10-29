var url = new URL(window.location.href);
var domain = url.searchParams.get("site");

if (domain != null){
  document.getElementById("regularInput").value=domain;

  var forms = document.getElementsByTagName("FORM");

  forms[0].submit();
}

