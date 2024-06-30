import { dbFirestore } from "https://foricon-src.github.io/foricon-firebase/script.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const gfi = document.getElementById("getForiconIcon");
const u = gfi.getAttribute("src").split("#");
function error(string) {
  console.error(string);
}

if (!gfi) {
  error('Element with "getForiconComponents" id is undefined');
} else if (gfi.nodeName != "SCRIPT") {
  error('Element with "getForiconComponents" id is not <script>');
} else if (u.length != 2) {
  error("Invalid src's value");
} else {
  gfi.remove();
  (async function () {
    let d = await getDoc(doc(dbFirestore, "users", u[1]));
    if (d.exists()) {
      xhr.open(
        "GET",
        "https://foricon-src.github.io/main/components/0.8.2/style.css",
        !0
      );
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          let s = document.createElement("style");
          s.innerHTML = xhr.responseText;
          document.querySelector("head").appendChild(s);
        }
      };
    } else {
      error("Given account id is invalid");
    }
  })();
};