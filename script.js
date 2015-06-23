$('#search').keyup(function () {
    var searcField = $('#search').val();
    var rExp = new RegExp(searcField, 'i');
    $.getJSON('data.json', function (data) {
        var output = '<ul class="searchresults">';
        $.each(data, function (key, value) {
            if ((value.name.search(rExp) != -1) || (value.bio.search(rExp) != -1)) {
                output += '<li>';
                output += '<h2>' + value.name + '</h2>';
                output += '<img src="images/' + value.shortname + '_tn.jpg" alt="' + value.name + '" >';
                output += '<p>' + value.bio + '</p>';
                output += '</li>';
            }
        });
        output += '<ul class="searchresults">';
        $('#update').html(output);
    }); // get JSON
});