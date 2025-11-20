package Backend.demo.Controller;

import Backend.demo.Entity.AnimeDis;
import Backend.demo.Services.AnimeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Admin")
@CrossOrigin(origins = "http://localhost:5173/")
public class AnimeController {

    @Autowired
    private AnimeServices services;

    @GetMapping()
    public ResponseEntity<?> getDet(){
        System.out.println("hello bhai aya");
        List<AnimeDis> anime = services.findAll();
        if(anime!=null){
            return new ResponseEntity<>(anime,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{name}")
    public ResponseEntity<?> getDetByName(@PathVariable String name){
        AnimeDis anime=services.findByName(name);
        if(anime!=null){
            return new ResponseEntity<>(anime,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    @GetMapping("/search/{query}")
    public ResponseEntity<?> getByInput(@PathVariable String query){
        List<AnimeDis> anime=services.searchByTypeOrName(query);
        if(anime!=null){
            return new ResponseEntity<>(anime,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

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
