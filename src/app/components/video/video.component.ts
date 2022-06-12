import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {
  @Input() videoId: any;
  @Output() ended = new EventEmitter();
  video: any;

  /* 1. Some required variables which will be used by YT API*/
  public YT: any;
  public videoYT: any;
  public videoYTid: any;
  public player: any;
  public reframed: Boolean = false;
  public frontEndOrigin = 'http://localhost:4200';

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getVideoDetails(this.videoId).subscribe(data => {
      console.log(data)
      this.video = data
      this.video.url = this.video.url + '?controls=0?enablejsapi=1&origin='+this.frontEndOrigin;
    });

    //this.videoYTid = 'kVpv8-5XWOI';
    //this.init();
  }

  /* 2. Initialize method for YT IFrame API */
  init() {
    var tag = document.createElement('script');
    tag.src = 'http://www.youtube.com/iframe_api';
    var firstScriptTag: any;
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
    window['onYouTubeIframeAPIReady'] = () => this.startVideo();
  }

  startVideo() {
    console.log("start");
    this.reframed = false;
    this.player = new window['YT'].Player('player', {
      videoId: this.videoYTid,
      /* playerVars: {
        autoplay: 1,
        modestbranding: 1,
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1
      }, */
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this.player),
        'onError': this.onPlayerError.bind(this),
        'onReady': this.onPlayerReady.bind(this),
      }
    });
    console.log(this.player)
  }

  /* 4. It will be called when the Video Player is ready */
  onPlayerReady(event: any) {
    console.log("ready")
    event.target.playVideo();
  }

  /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
  onPlayerStateChange(event: any) {
    console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    }
  }

  cleanTime() {
    console.log("clean");
    return Math.round(this.player.getCurrentTime())
  }

  onPlayerError(event: any) {
    console.log("error");
    switch (event.data) {
      case 2:
        console.log('' + this.videoYTid)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }

}
