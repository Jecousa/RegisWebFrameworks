<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            
    include './services/models/camera.php';
            $cameras = [];
            
            $cameras[] = new Camera('Canon', 'Rebel');
            $cameras[] = new Camera('Nikon', 'D 7100');
            $cameras[] = new Camera('Sony', 'Powershot');
            
                     if(isset($_GET['id'])) {               
                         $id = intval($_GET['id']);  
                         
                     }
                else{
                
                    http_response_code(200);
                    header("Content-Type: application/json");
                    echo json_encode($cameras);
                    exit();

                }
        }
        else {
            include './services/models/error.php';
            
            http_response_code(400);
            header("Content-Type: application/json");
            $error = new Error('Bad request for cameras', 400);
            echo json_encode($error);
            exit();
        }
        ?>
    </body>
</html>
