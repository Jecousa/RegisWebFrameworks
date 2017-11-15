$(document).ready(function(){
    $('#commentSubmit').click(function(){
        var ucomment = $('#commentId').val();
        $.post('php/ajax.php', {comment: ucomment})
                .done(function (data){
                    var parser = new DOMParser();
                    var parsedXML = parser.parseFromString(data, "text/xml");
                    var datetime = parsedXML.getElementsByTagName("datetime")[0].childNodes[0].nodeValue;
                    var ucomment = parsedXML.getElementsByTagName("comment")[0].childNodes[0].nodeValue;
                    $('#tableHeading').after('<tr><td>' + datetime + '</td><td>' + ucomment + '</td><tr>');
                    
        });
    });
});

