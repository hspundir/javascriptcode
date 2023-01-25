jQuery("[tab_name]").hover(function () {
  var e = jQuery(this).attr("tab_name");
  jQuery("[tab_content]").removeClass("active"),
    jQuery("[tab_content=" + e + "]").addClass("active"),
    console.log("clicked"),
    console.log(e);
}),
  jQuery(document).ready(function () {
    jQuery(".switchLogo2s, .switchLogo3s, .switchLogo4s")
      .parent()
      .addClass("showFirst"),
      setInterval(function () {
        jQuery(".switchLogo2s").parent().toggleClass("showSecond");
      }, 2e3),
      setInterval(function () {
        jQuery(".switchLogo3s").parent().toggleClass("showSecond");
      }, 3e3),
      setInterval(function () {
        jQuery(".switchLogo4s").parent().toggleClass("showSecond");
      }, 4e3);
  }),
  jQuery(document).ready(function () {
    jQuery(".filterArrow").click(function (e) {
      e.preventDefault(),
        jQuery(".listFilter").toggleClass("show"),
        jQuery(".filterArrow").toggleClass("showArrow");
    }),
      jQuery(".listFilter li a").click(function (e) {
        jQuery(".filterArrow").removeClass("showArrow");
      }),
      jQuery(".listFilter [data-target]").click(function (e) {
        e.preventDefault(),
          jQuery(".listFilter [data-target]").removeClass("active"),
          jQuery(this).addClass("active"),
          jQuery(".listStudies li").removeClass("show");
        var t = jQuery(this).attr("data-target"),
          s = jQuery(this).text();
        jQuery("." + t).addClass("show"),
          jQuery(".listFilter").removeClass("show"),
          jQuery(".filterText").text(s),
          "all" == t && jQuery(".listStudies li").addClass("show");
      });
  }),
  jQuery(document).ready(function () {
    jQuery(".blogs-listing .post-page-class article").slice(0, 20).show(),
      jQuery("#load_more_article").on("click", function (e) {
        e.preventDefault(),
          jQuery(".blogs-listing .post-page-class article:hidden")
            .slice(0, 20)
            .slideDown(),
          0 ==
            jQuery(".blogs-listing .post-page-class article:hidden").length &&
            jQuery("#load_more_article")
              .text("No Content")
              .addClass("noContent");
      });
  });
