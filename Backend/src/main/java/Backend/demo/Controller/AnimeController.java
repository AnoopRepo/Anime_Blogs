package Backend.demo.Controller;

import Backend.demo.Entity.AnimeDis;
import Backend.demo.Services.AnimeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Admin")
@CrossOrigin(origins = "http://localhost:5173/")
public class AnimeController {

    @Autowired
    private AnimeServices services;

    @PostMapping()
    public ResponseEntity<?> saveDes(@RequestBody AnimeDis anime){
       boolean value= services.saveDesc(anime);
        System.out.println("hello aya");
       if(value){
           System.out.println("hello ");
           return new ResponseEntity<>(HttpStatus.OK);

       }
        System.out.println("hello No");
       return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
