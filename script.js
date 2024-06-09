/***For Create Copy Link Succesfully */
const actionLink = document.querySelectorAll(".Link .Action");

actionLink.forEach((action) => {

    action.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("action : ", action.parentElement); 
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

        /**
         * For Toast Gone Notificaty
         */
        document.getElementById("Toast").innerHTML = `
            <div class="Container">
                <p>🔗 <strong> ${action.parentElement.innerText} </strong> Link Copy  Successfully ✔</p>
            </div>
        `;

        /***
         * For Appear Toast Animation
        */

        setTimeout(() => {
            document.querySelector("#Toast .Container")
            .classList.add("Anigone");
        }, 300);

        setTimeout(() => {
            document
            .querySelector("#Toast .Container").remove();
        }, 4000);
    });
});

/***
 * For Modify Medsos when hover
 */

document.querySelectorAll(".Sosmed i").forEach((Sosmed) => {
    Sosmed.addEventListener("mouseenter", () => {
        Sosmed.classList.remove("ph");
        Sosmed.classList.add("ph-fill")
    });
    Sosmed.addEventListener("mouseleave", () => {
        Sosmed.classList.remove("ph-fill");
        Sosmed.classList.add("ph")
    })
});