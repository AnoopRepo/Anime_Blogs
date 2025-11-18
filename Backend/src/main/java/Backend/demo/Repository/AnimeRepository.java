package Backend.demo.Repository;

import Backend.demo.Entity.AnimeDis;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends MongoRepository<AnimeDis,String> {
    AnimeDis findByName(String Name);
}
