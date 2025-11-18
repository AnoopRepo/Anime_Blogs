package Backend.demo.Repository;

import Backend.demo.Entity.Genre;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GenreRepo extends MongoRepository<Genre,String> {

}
