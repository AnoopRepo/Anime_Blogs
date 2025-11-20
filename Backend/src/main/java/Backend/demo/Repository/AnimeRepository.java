package Backend.demo.Repository;

import Backend.demo.Entity.AnimeDis;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimeRepository extends MongoRepository<AnimeDis,String> {
    AnimeDis findByName(String Name);

    @Query("{" +
            " $or: [" +
            "   { 'name': { $regex: ?0, $options: 'i' } }," +
            "   { 'genreType': { $regex: ?0, $options: 'i' } }" +
            " ]" +
            "}")
    List<AnimeDis> searchByNameOrGenre(String keyword);

}
