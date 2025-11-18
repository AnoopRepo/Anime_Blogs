package Backend.demo.Entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "AnimeDis")
public class AnimeDis {
    @Id
    private String id;

    private String name;
    private Date date;
    private String num;
    private String description;
    private String quote;

}
