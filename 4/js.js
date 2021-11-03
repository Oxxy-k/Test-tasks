document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  let message = this.message.value;
  document.getElementById("iframe").contentWindow.postMessage(
    JSON.stringify({
      key: "storage",
      data: message,
      method: "set",
      callback: 'alert("It`s callback!")',
    }),
    "*"
  );

  return false;
};

document.getElementById("remove").onclick = function () {
  document
    .getElementById("iframe")
    .contentWindow.postMessage(
      JSON.stringify({ key: "storage", data: "removed ls", method: "remove" }),
      "*"
    );
};

document.getElementById("get").onclick = function () {
  document
    .getElementById("iframe")
    .contentWindow.postMessage(
      JSON.stringify({ key: "storage", data: "written ls", method: "get" }),
      "*"
    );
};
