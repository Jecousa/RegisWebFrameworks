<?php

class Camera implements JsonSerializable {
    
    private $make = '',
        $model = '';
            
            public function __construct($mod, $mak) {
        
        $this->model = $mod;
        $this->make = $mak;
}

public function jsonSerialize(){
    return [
        'make' => $this->make,
        'model' => $this->model
    ];
}
}

?>