"use strict";

$(document).ready(function() {
  $("#carouselTopTenNew").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $("#carouselTopTenNew .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#carouselTopTenNew .carousel-item")
            .eq(i)
            .appendTo("#carouselTopTenNew .carousel-inner");
        } else {
          $("#carouselTopTenNew .carousel-item")
            .eq(0)
            .appendTo("#carouselTopTenNew .carousel-inner");
        }
      }
    }
  });

  $("#carouselTopTenSale").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $("#carouselTopTenSale .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#carouselTopTenSale .carousel-item")
            .eq(i)
            .appendTo("#carouselTopTenSale .carousel-inner");
        } else {
          $("#carouselTopTenSale .carousel-item")
            .eq(0)
            .appendTo("#carouselTopTenSale .carousel-inner");
        }
      }
    }
  });

  $("#carouselTopTenAccess").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $("#carouselTopTenAccess .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#carouselTopTenAccess .carousel-item")
            .eq(i)
            .appendTo("#carouselTopTenAccess .carousel-inner");
        } else {
          $("#carouselTopTenAccess .carousel-item")
            .eq(0)
            .appendTo("#carouselTopTenAccess .carousel-inner");
        }
      }
    }
  });

  $("#btnLogin").click(function() {
    $("#modalLogin").modal("show");
  });

  $("#btnAdvanceSearch").click(function() {
    $("#modalAdvanceSearch").modal("show");
  });

  $("#btnPlaceOrder").click(function() {
    $("#modalPlaceOrder").modal("show");
  });

  $("#btnAddItem").click(function() {
    $("#modalAddItem").modal("show");
  });

  $("#btnEditOrder").click(function() {
    $("#modalEditOrder").modal("show");
  });

  $("#btnEditItem").click(function() {
    $("#modalEditItem").modal("show");
  });

  $("#btnEditItem2").click(function() {
    $("#modalEditItem").modal("show");
  });

  $("#dashboard").show();
  $("#itemManager").hide();
  $("#orderManager").hide();

  $("#linkDashboard").click(function() {
    $("#dashboard").show();
    $("#itemManager").hide();
    $("#orderManager").hide();
  });

  $("#linkItemManager").click(function() {
    $("#dashboard").hide();
    $("#itemManager").show();
    $("#orderManager").hide();
  });

  $("#linkOrderManager").click(function() {
    $("#dashboard").hide();
    $("#itemManager").hide();
    $("#orderManager").show();
  });
});
