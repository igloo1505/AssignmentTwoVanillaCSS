let child = document.getElementsByClassName("mobileUL")[0];

// .children[1]
//   .childNodes[0];
console.log(child);
const showmenu = () => {
  //   console.log(childTunneling);

  for (var i = 0; i < 3; i++) {
    let stepChild = child.children[i].childNodes[0];
    if (stepChild.classList.contains("hidden")) {
      stepChild.classList.remove("hidden");
    } else {
      stepChild.classList.add("hidden");
    }
  }
};
