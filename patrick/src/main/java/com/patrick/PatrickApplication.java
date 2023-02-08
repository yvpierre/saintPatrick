package com.patrick;

import com.patrick.Entity.Article;
import com.patrick.Entity.Category;
import com.patrick.Repository.ArticleRepository;
import com.patrick.Repository.CategoryRepository;
import jakarta.annotation.PostConstruct;
import org.apache.tomcat.util.digester.ArrayStack;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;


@SpringBootApplication
public class PatrickApplication {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    ArticleRepository articleRepository;

    public static void main(String[] args) {
        SpringApplication.run(PatrickApplication.class, args);
    }

    @PostConstruct
    public void init() {
        Category category1 = Category.builder().name("Déguisement").description("Les meilleurs déguisement pour la Saint Patrick").build();
        Category category2 = Category.builder().name("Décorations").description("Les meilleures décorations pour la Saint Patrick").build();
        Category category3 = Category.builder().name("Accéssoires").description("Les meilleurs accessoires pour embellir votre déguisement").build();
        Category category4 = Category.builder().name("Bières").description("Les meilleurs bières pour célébrer l'événement").build();

        List<Category> cateDeguisement = new ArrayList<>();
        cateDeguisement.add(category1);
        
        List<Category> cateDecorations = new ArrayList<>();
        cateDecorations.add(category2);
        
        List<Category> cateAccessoires = new ArrayList<>();
        cateAccessoires.add(category3);
        
        List<Category> cateBieres = new ArrayList<>();
        cateBieres.add(category4);

        if (categoryRepository.count() == 0) {
            categoryRepository.save(category1);
            categoryRepository.save(category2);
            categoryRepository.save(category3);
            categoryRepository.save(category4);
        }

        if (articleRepository.count() == 0) {
            articleRepository.save(Article.builder().categories(cateDeguisement).name("Costume Mr. Saint Patrick Suitmeister").description("Ce costume Saint Patrick est un Suitmeister™. Il est composé d'une veste, d'un pantalon et d'une cravate (chemise et chaussures non incluses). Cet ensemble 3 pièces est découpé dans un tissu vert avec des imprimés de chope de bière, de trèfle, de chapeau haut de forme.").price(55.00f).quantity(2).imgUrl("https://www.deguisementsjarana.com/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/disfraz-de-irlandes-saint-patrick-para-hombre.jpg").isStockDispo(true).size("M").isMajor(false).build());
            articleRepository.save(Article.builder().categories(cateDeguisement).name("Costume Mr. Saint Patrick Suitmeister").description("Ce costume Saint Patrick est un Suitmeister™. Il est composé d'une veste, d'un pantalon et d'une cravate (chemise et chaussures non incluses). Cet ensemble 3 pièces est découpé dans un tissu vert avec des imprimés de chope de bière, de trèfle, de chapeau haut de forme.").price(55.00f).quantity(3).imgUrl("https://www.deguisementsjarana.com/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/disfraz-de-irlandes-saint-patrick-para-hombre.jpg").isStockDispo(true).size("L").isMajor(false).build());

            articleRepository.save(Article.builder().categories(cateDecorations).name("Guirlande à fanions 8 m Saint Patrick").description("Cette guirlande de la Saint Patrick se compose de fanions verts avec plusieurs imprimés. Certains portent  l'inscription \"Saint Patrick's day\" avec un tréfle aux couleurs de l'Irlande ou un chaudron magique au pied de l'arc-en-ciel, d'autres sont décorés d'un imprimé de leprechaun.").price(4.99f).quantity(10).imgUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQajEmntMVyhFnqWwtQkJXqjpsg8wM65xzw&usqp=CAU").isStockDispo(true).isMajor(false).build());
            articleRepository.save(Article.builder().categories(cateDecorations).name("KIT DECORATION SAINT PATRICK").description("\tKit de décoration comprenant : 1 drapeau Irlande en tissu de 150x90cm,1lot de 15 ballons,10 drapeaux à agiter, 2 décorations lutin de 30cm, 1 guirlande 6m lutin, 1 guirlande 4m en crepon,1 lot de 3 suspensions, 4 lampions verts et orange de 16cm").price(24.85f).quantity(8).imgUrl("https://www.soireebox.fr/images/imagecache/430x600/jpg/KIT-DECORATION-SAINT-PATRICK-1ER-PRIX-2-1.webp").isStockDispo(true).isMajor(false).build());


            articleRepository.save(Article.builder().categories(cateAccessoires).name("Lunettes mouche verte en plastique").description("Nous vous proposons ces lunettes mouche de couleur verte en plastique. Accessoirisez les avec un chapeau par exemple de la même couleur afin de compléter idéalement votre déguisement pour la Saint Patrick. Une chemise, un léger maquillage et le tour est joué.").price(2.10f).quantity(2).imgUrl("https://www.un-air-de-fetes.com/showPrdtImg-lunettes-mouche-verte-en-plastique-11438.jpg").isStockDispo(true).isMajor(false).build());
            articleRepository.save(Article.builder().categories(cateAccessoires).name("Patrick's Day Set, Unisex Adult,").description("Vous êtes fan de la fête nationale de la Saint Patrick ? Alors ce kit Widmann est exactement ce qu'il vous faut.").price(13.99f).quantity(3).imgUrl("https://m.media-amazon.com/images/I/71UH8WkuHAS.ACUX679.jpg").isStockDispo(true).isMajor(false).build());

            articleRepository.save(Article.builder().categories(cateBieres).name("Lot de 6 bières artisanales St Patrick Brasserie Ratz 6 x 33cl").description("Découvrez un lot de bières crée spécialement à l'occasion de la fête de la Saint Patrick, le 17 mars. Élaborée de façon artisanale, cette bière brune vous livrera ses arômes les plus torréfiés, ainsi qu'une amertume douce et longue en bouche.A consommer idéalement entre 8 et 10°C, vous ferez rimer ce lot de 6 bières avec partage et convivialité.").price(17.00f).quantity(10).imgUrl("https://m.media-amazon.com/images/I/71UH8WkuHAS.ACUX679.jpg").isStockDispo(true).isMajor(true).build());
            articleRepository.save(Article.builder().categories(cateBieres).name("PPACK WHITE HAG").description("Si vous êtes amateur de bières irlandaises houblonnées, on dirait bien que ce Ce pack de la brasserie White Hag est fait pour vous ").price(25.50f).quantity(17).imgUrl("https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/740/740/ddd5560e00209ff455cfeebf7c6979eccf25ae67_BCO038351_1.png").isStockDispo(true).isMajor(true).build());
        }

    }
}

