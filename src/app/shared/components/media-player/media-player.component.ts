import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  mockCover:any ={
    cover:'https://www.americanpost.news/wp-content/uploads/2023/06/peso-pluma-to-release-new-album-release-date-collaborations-and-tracklist-7825-15072.jpg',
    album:'Genesis',
    name:'Nueva vida(Oficial)',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
