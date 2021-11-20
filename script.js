user.innerText = prompt("What is your name?", "Johnny Depp");
if (!user.innerText) {
  user.innerText = "User";
}

let count = 0;
let shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

$button = $("button");

$("button").on("click", () => {
  if (+attempts.innerText < 3) {
    $button.attr("disabled", true);
    $button.addClass("active");
    let refresh = setInterval(() => {
      $(".wrapper>div").each((i, element) => {
        let categories = shuffle($(`.${element.className}>div`).get());
        $(`.${element.className}`).html(categories);
      });
    }, 100);

    setTimeout(() => {
      clearInterval(refresh);
      +attempts.innerText++;
      if (
        $("img")[1].alt == $("img")[4].alt &&
        $("img")[1].alt == $("img")[7].alt
      ) {
        setTimeout(() => {
          alert(`${user.innerText} won`);
        }, 200);
      }
      if (+attempts.innerText == 3) {
        setTimeout(() => {
          return confirm(`You're out of attempts!\nPress OK to upload the page:)`) ? document.location.reload() : undefined;
        }, 400);
      }
      $button.removeClass("active");
      $button.attr("disabled", false);
    }, 3025);
  }
});
