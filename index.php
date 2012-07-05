<?php get_header(); ?>
			
<div class="container-fluid">
      <div class="row-fluid">
       
        <div class="span9">
        
<?php while ( have_posts() ) : the_post(); ?>
<div class="row-fluid">

               	     	  <div class="row-fluid">
                 <!--.Article Post-->
                   <div class="post">
            

                 	 <h2 class="recent-news-title"><a href="<?php echo get_permalink(); ?>"><?php the_title();?></a></h2>
    
                          <div class="meta-wrap">          
                                    <div class="meta pull-left">
                                       <span class="dateTime"> Posted by <span class="author"><a href="<?php $author = get_the_author_meta( 'ID'); $url = get_author_posts_url( $author); echo $url;?>"><?php the_author(); ?></a></span>  at <?php the_time('g:i a F j, Y'); ?></span>
                                    </div>
                                
                            </div>


<div class="recent-news-content"><?php the_content(); ?></div>

            </div>
            <!--/.Article Post-->
            
            <hr class="lrgRule heavy">  
            
            </div>

</div>
<?php endwhile; ?>


      <footer>
        &copy; 2012 B-Team Gaming
      </footer>


        </div><!--/span-->

</div><!--/row-->



