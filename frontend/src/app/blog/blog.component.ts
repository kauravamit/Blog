import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BloggingService } from 'src/service/blogging.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: any;
  comments: any;
  comment: any;
  replied={
  };
 

  constructor(private service : BloggingService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.service.getcontent({parentId:this.activatedRoute.snapshot.params.blogid}).subscribe(blog=>{
      this.blog = blog[0]
      this.comments = this.blog['comments']
      console.log(this.blog)
    })
  

  }
  submit(parent){
    if (parent == 0)

    parent = this.activatedRoute.snapshot.params.blogid
    console.log(parent)
    this.service.createBlog({"content":this.comment,type:"comment",userId:localStorage.getItem('userId'),parent_id:parent}).subscribe(posted=>{
      console.log(posted)
    })
//     userId:5fcf2174e677484531e1c28c
// content:test
// type:comment
// email:test
// parent_id:5fcf23446d8b214947371d0e
// postId:5fcf23446d8b214947371d0e
// :5fcf23e3406cc04a6c29d9f1
  }
  

  onclick(_id,i){
    this.replied = {}
    this.service.getcontent({parentId:_id}).subscribe(replies=>{
      console.log(replies)
    this.replied[i] = replies[0]['comments']
      console.log(this.replied[i],i)
    })
  }

}

