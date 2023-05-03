"use strict";

var commentBtn = document.querySelector(".comment-new__btn");
var commentText = document.querySelector(".comment-new__text");
var commentNew = document.querySelector(".comments.comment-new");
var text = commentText.value;
commentBtn.addEventListener("click", function () {
  var text = commentText.value;

  if (text.trim()) {
    newComment();
  }
});

function newComment() {
  var comment = document.createElement("div");
  var text = commentText.value;
  comment.innerHTML = "<div class=\"comments\" id=\"comment-new\" style=\"display:block\">\n                            <div class=\"profile\">\n                            <img src=\"assets/images/anonim.png\">\n                            </div>\n                            <div class=\"comment-content\">\n                            <p class=\"name\">\n                                <font style=\"vertical-align: inherit;\">\n                                <font style=\"vertical-align: inherit;\">Anonim</font>\n                                </font>\n                            </p>\n                            <p>\n                                <font style=\"vertical-align: inherit;\">\n                                <font style=\"vertical-align: inherit;\">".concat(text, "</font>\n                                </font>\n                            </p>\n                            </div>\n                            <div class=\"clr\"></div>\n                            <div class=\"comment-status\">\n                            <span>\n                                <font style=\"vertical-align: inherit;\">\n                                <font style=\"vertical-align: inherit;\">Curte\xB7comente</font>\n                                </font>\n                                <img src=\"assets/images/like.png\" width=\"15px\" height=\"15px\">\n                                <font style=\"vertical-align: inherit;\">\n                                <font style=\"vertical-align: inherit;\">0</font>\n                                </font>\n                            </span>\n                            <font style=\"vertical-align: inherit;\">\n                                <small>\n                                <u>\n                                    <font style=\"vertical-align: inherit;\">5 second antes</font>\n                                </u>\n                                </small>\n                            </font>\n                            <small>\n                                <font style=\"vertical-align: inherit;\"></font>\n                                <u>\n                                <font style=\"vertical-align: inherit;\"></font>\n                                </u>\n                            </small>\n                            </div>\n                        </div>");
  commentNew.insertAdjacentElement("afterend", comment);
  commentText.value = "";
}

var modal3Btn = document.querySelector("#p_modal_button3");
var results = [];
var mainContent = document.querySelector(".main-content.user");
mainContent.addEventListener("click", function (e) {
  results.push(e.target.innerText);
});
modal3Btn.addEventListener("click", function () {
  results.forEach(function (elem) {
    console.log(elem);
  });
});