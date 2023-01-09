/* From isotope 官網 document */
var $grid = $('.collection-list').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

/* 按鈕點擊後效果 */
let collectBtns = document.querySelectorAll(".collection .filter-button-group .btn");
collectBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        collectBtns.forEach((btn) => {
            btn.classList.remove("active-btn");
        })
        btn.classList.toggle("active-btn");
    })
})