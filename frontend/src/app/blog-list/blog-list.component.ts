import { Component, OnInit } from '@angular/core';
import { BloggingService } from 'src/service/blogging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  content: any;
  lists: any;

  constructor(private service : BloggingService,private router: Router) { }

  ngOnInit() {
    this.fetchlist()
  }
submit(){
  this.service.createBlog({'content':this.content,userId:localStorage.getItem('userId'),type:"post"}).subscribe(lists=>{
console.log(lists)
this.fetchlist()
  })
  this.content = ''

  }
  fetchlist(){
    this.service.list().subscribe(lists=>{
      this.lists = lists
        })
  }
  onclick(postId){
    console.log(postId)
    this.router.navigate(['/blog/'+postId]);
    // blog/:blogid
  }
}
 
