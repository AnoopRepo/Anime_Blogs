package Backend.demo.Services;

import Backend.demo.Entity.AnimeDis;
import Backend.demo.Repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimeServices {
    @Autowired
    private AnimeRepository repo;

    public boolean saveDesc(AnimeDis anime) {
        repo.save(anime);
        AnimeDis an=repo.findByName(anime.getName());
        return an != null;
    }

    public List<AnimeDis> findAll() {
        return repo.findAll();
    }

    public AnimeDis findByName(String name) {
        return repo.findByName(name);
    }
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<AnimeDis> searchByTypeOrName(String input) {
        Query query = new Query();
        query.addCriteria(
                new Criteria().orOperator(
                        Criteria.where("type").is(input),
                        Criteria.where("name").regex(input, "i")  // case-insensitive partial match for names
                )
        );
        return mongoTemplate.find(query, AnimeDis.class);
    }
}
