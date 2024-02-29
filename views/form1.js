$('input[type="checkbox"][name="weight"]').change(function() {
    $('input[type="checkbox"][name="weight"]').not(this).prop('checked', false);
});
