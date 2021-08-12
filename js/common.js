$(document).ready(function () {
  $(".headerArea").load("/include/header.html", function () {});

  $(document).on("click", ".del ", function () {
    if (confirm("정말 삭제하시겠습니까??") == true) {
    } else {
      //취소

      return false;
    }
  });

  $(document).on("click", ".allCheck", function () {
    $("input[type=checkbox]").prop("checked", true);
  });

  $(document).on("click", ".imgBg", function () {
    $(this).hide();
    $(".imgPop").hide();
    $(".excelPop").hide();
  });

  $(document).on("click", ".close", function () {
    $(".imgBg").hide();
    $(".imgPop").hide();
    $(".excelPop").hide();
  });

  $(document).on("click", ".imgBtn", function () {
    $(".imgBg").show();
    $(".imgPop").show();
  });

  $(document).on("click", ".excelDown", function () {
    $(".imgBg").show();
    $(".excelPop").show();
  });
});
