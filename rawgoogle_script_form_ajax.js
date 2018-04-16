
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbx4uak4CV9Megpq6uFYDSvY_ApTRos6Cf5IXoGxF60eRRqXiQ/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
