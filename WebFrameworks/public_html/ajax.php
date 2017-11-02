<?php

$comment = $_POST["comment"];
date_default_timezone_set('UTC');
$date = date('Y-m-d');
$datetime = date('Y-m-d H:i:s');

store($comment, $date, $datetime);

echo ( '<usercomment>'.
        '<datetime>' . $datetime . '</datetime>' .
        '<comment>' . $comment . '</comment>' .
        '</usercomment>');

?>
