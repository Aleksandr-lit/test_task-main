"use strict"

let commentBtn = document.querySelector(".comment-new__btn");
let commentText = document.querySelector(".comment-new__text");
let commentNew = document.querySelector(".comments.comment-new");
let text = commentText.value;

commentBtn.addEventListener("click", () => {
    let text = commentText.value;
    if (text.trim()) {
        newComment();
    }
});
function newComment() {
    let comment = document.createElement("div");
    let text = commentText.value;
    comment.innerHTML = `<div class="comments" id="comment-new" style="display:block">
                            <div class="profile">
                            <img src="assets/images/anonim.png">
                            </div>
                            <div class="comment-content">
                            <p class="name">
                                <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Anonim</font>
                                </font>
                            </p>
                            <p>
                                <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">${text}</font>
                                </font>
                            </p>
                            </div>
                            <div class="clr"></div>
                            <div class="comment-status">
                            <span>
                                <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Curte·comente</font>
                                </font>
                                <img src="assets/images/like.png" width="15px" height="15px">
                                <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">0</font>
                                </font>
                            </span>
                            <font style="vertical-align: inherit;">
                                <small>
                                <u>
                                    <font style="vertical-align: inherit;">5 second antes</font>
                                </u>
                                </small>
                            </font>
                            <small>
                                <font style="vertical-align: inherit;"></font>
                                <u>
                                <font style="vertical-align: inherit;"></font>
                                </u>
                            </small>
                            </div>
                        </div>`;
    commentNew.insertAdjacentElement("afterend", comment);
    commentText.value = "";
}

let modal3Btn = document.querySelector("#p_modal_button3");
let results = [];
let mainContent = document.querySelector(".main-content.user");

mainContent.addEventListener("click", (e) => {
    results.push(e.target.innerText);
})

modal3Btn.addEventListener("click", () => {
    results.forEach((elem) => {
        console.log(elem);
    })
})